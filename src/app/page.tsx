"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, List, Map as MapIcon, Navigation } from "lucide-react";
import { LocationAndFilterHeader } from "@/components/LocationAndFilterHeader";
import { RestaurantDetailModal } from "@/components/RestaurantDetailModal";
import { RestaurantList } from "@/components/RestaurantList";
import { RestaurantMapPreview } from "@/components/RestaurantMapPreview";
import {
  PublicDataNoticeBanner,
  ServiceStatusBar,
} from "@/components/SampleNoticeBanner";
import {
  DEFAULT_SIMULATED_LOCATION,
  RESTAURANT_CATEGORIES,
} from "@/data/real-restaurants";
import {
  KOREAN_SIDO_LIST,
  KOREAN_SIGUNGU_LIST,
  findDistrictByCode,
} from "@/data/korean-administrative-regions";
import { SAMPLE_RESTAURANTS } from "@/data/sample-restaurants";
import { calculateDistanceMeters, formatDistance } from "@/lib/geo";
import { ApiStatusInfo } from "@/services/restaurantService";
import {
  GeoPoint,
  LocationMode,
  RadiusOption,
  Restaurant,
  RestaurantCategory,
  RestaurantWithDistance,
  ViewMode,
} from "@/types/restaurant";

export default function HomePage() {
  // 실제 음식점 데이터 및 출처 상태 (초기 샘플 데이터, 서버 API를 통해 공공데이터 로드)
  const [restaurantsData, setRestaurantsData] =
    useState<Restaurant[]>(SAMPLE_RESTAURANTS);
  const [dataSource, setDataSource] = useState<
    "data_go_kr" | "sample" | "supabase" | "real_data"
  >("sample");
  const [sourceName, setSourceName] = useState<string>("샘플 데이터");
  const [apiStatus, setApiStatus] = useState<ApiStatusInfo | null>(null);
  const [isLoadingLiveData, setIsLoadingLiveData] = useState<boolean>(false);

  // 1. 위치 모드 및 좌표 상태
  const [locationMode, setLocationMode] = useState<LocationMode>("simulated");
  const [gpsPoint, setGpsPoint] = useState<GeoPoint | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  // 2. 시·도 / 구·동 직접 선택 상태 (전국 17개 시·도 및 250개 시·군·구 지원)
  const [selectedSidoCode, setSelectedSidoCode] = useState<string>("11"); // 서울특별시 기본값
  const [selectedGuCode, setSelectedGuCode] = useState<string>("11440"); // 서울 마포구 기본값
  const [selectedDongCode, setSelectedDongCode] = useState<string>("all");
  const [useRadiusInManualMode, setUseRadiusInManualMode] =
    useState<boolean>(false);

  // 3. 검색 반경 / 검색어 / 업종 필터 / 화면 모드
  const [radius, setRadius] = useState<RadiusOption>(3000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<RestaurantCategory>("전체");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  // 4. 지도 포커스 마커 및 상세 모달 상태
  const [focusedMarkerId, setFocusedMarkerId] = useState<string | null>(
    SAMPLE_RESTAURANTS[0]?.id ?? null
  );
  const [focusTrigger, setFocusTrigger] = useState<number>(0);
  const [movedFromListNotice, setMovedFromListNotice] = useState<string | null>(
    null
  );
  const [detailModalRestaurantId, setDetailModalRestaurantId] = useState<
    string | null
  >(null);

  const currentSido = useMemo(() => {
    if (selectedSidoCode === "all") return null;
    return (
      KOREAN_SIDO_LIST.find((s) => s.code === selectedSidoCode) ??
      KOREAN_SIDO_LIST[0]
    );
  }, [selectedSidoCode]);

  const currentDistrict = useMemo(() => {
    if (selectedGuCode === "all") return null;
    return (
      findDistrictByCode(selectedGuCode) ??
      KOREAN_SIGUNGU_LIST.find((d) => d.code === selectedGuCode) ??
      null
    );
  }, [selectedGuCode]);

  const selectedDongObj = useMemo(() => {
    if (selectedDongCode === "all" || !currentDistrict) return null;
    const found = currentDistrict.dongs.find((d) => d.code === selectedDongCode);
    if (found) return found;
    return {
      code: selectedDongCode,
      name: selectedDongCode,
      center: currentDistrict.center,
    };
  }, [selectedDongCode, currentDistrict]);

  // 활성화된 기준점 좌표 계산 (전국/시도전체/시군구/읍면동/GPS)
  const referencePoint: GeoPoint = useMemo(() => {
    if (locationMode === "gps" && gpsPoint) {
      return gpsPoint;
    }
    if (locationMode === "manual" || locationMode === "simulated") {
      if (selectedDongObj) {
        return selectedDongObj.center;
      }
      if (currentDistrict) {
        return currentDistrict.center;
      }
      if (currentSido) {
        return currentSido.center;
      }
      return DEFAULT_SIMULATED_LOCATION;
    }
    return DEFAULT_SIMULATED_LOCATION;
  }, [locationMode, gpsPoint, selectedDongObj, currentDistrict, currentSido]);

  // 공공데이터 API 서버 라우트(/api/restaurants) 호출 (선택한 동네 20건부터 조회)
  const loadLiveData = useCallback(async () => {
    setIsLoadingLiveData(true);
    try {
      const cityParam = currentSido ? currentSido.name : "";
      const guParam = currentDistrict ? currentDistrict.gu : "";
      const dongParam = selectedDongObj ? selectedDongObj.name : "";
      const res = await fetch(
        `/api/restaurants?city=${encodeURIComponent(
          cityParam
        )}&gu=${encodeURIComponent(
          guParam
        )}&dong=${encodeURIComponent(
          dongParam
        )}&lat=${referencePoint.lat}&lng=${referencePoint.lng}&radius=${radius}&numOfRows=20&pageNo=1`
      );

      if (!res.ok) {
        setApiStatus({
          success: false,
          errorCode: `HTTP_${res.status}`,
          errorMessage: "공공데이터 서버와 통신하는 중 문제가 발생했습니다.",
        });
        return;
      }

      const json = await res.json();
      if (json?.restaurants) {
        setRestaurantsData(json.restaurants);
      }
      if (json?.source) {
        setDataSource(json.source);
      }
      if (json?.sourceName) {
        setSourceName(json.sourceName);
      }
      if (json?.apiStatus) {
        setApiStatus(json.apiStatus);
      }
    } catch (err: any) {
      setApiStatus({
        success: false,
        errorCode: "NETWORK_ERROR",
        errorMessage: err?.message || "네트워크 연결 상태를 확인해 주세요.",
      });
    } finally {
      setIsLoadingLiveData(false);
    }
  }, [
    currentSido,
    currentDistrict,
    selectedDongObj,
    referencePoint.lat,
    referencePoint.lng,
    radius,
  ]);

  useEffect(() => {
    loadLiveData();
  }, [loadLiveData]);

  // [개인정보 보호] 사용자 현재 위치(위도/경도)는 DB에 저장하지 않으며 오직 메모리(useState)에서만 거리 계산 및 지도 표시에 사용됩니다.
  const handleRequestBrowserGps = () => {
    setGpsError(null);

    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      setGpsError(
        "이 브라우저 또는 환경에서는 위치 정보를 지원하지 않습니다. 구·동을 직접 선택해 주세요."
      );
      setLocationMode("manual");
      return;
    }

    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLoading(false);
        setGpsPoint({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          label: `내 현재 위치 (${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)})`,
          accuracyMeters: Math.round(pos.coords.accuracy),
        });
        setLocationMode("gps");
        setGpsError(null);
      },
      (err) => {
        setGpsLoading(false);
        let reason = "위치 정보를 가져오지 못했습니다. 구·동을 직접 선택해 주세요.";

        if (err.code === 1) {
          reason =
            "위치 권한이 거부(차단)되었습니다. 브라우저 주소창 설정에서 위치 권한을 허용하시거나, 아래 '지역 직접 선택'으로 원하는 동네를 탐색할 수 있습니다.";
        } else if (err.code === 2) {
          reason =
            "현재 위치 정보를 가져올 수 없습니다. 기기의 위치(GPS) 기능이 켜져 있는지 확인하시거나, 아래 '지역 직접 선택'을 이용해 주세요.";
        } else if (err.code === 3) {
          reason =
            "위치 확인 요청 시간이 초과되었습니다. 네트워크 연결 상태를 확인 후 다시 시도하시거나, 아래 '지역 직접 선택'을 이용해 주세요.";
        }

        setGpsError(reason);
        setLocationMode("manual");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000,
      }
    );
  };

  const handleChangeLocationMode = (mode: LocationMode) => {
    setGpsError(null);
    setLocationMode(mode);
  };

  const handleSelectSido = useCallback((newSidoCode: string) => {
    setSelectedSidoCode(newSidoCode);
    setSelectedGuCode("all");
    setSelectedDongCode("all");
  }, []);

  const handleSelectGu = useCallback((newGuCode: string) => {
    setSelectedGuCode(newGuCode);
    setSelectedDongCode("all");
    if (newGuCode !== "all") {
      const dist = findDistrictByCode(newGuCode);
      if (dist && dist.sidoCode !== selectedSidoCode) {
        setSelectedSidoCode(dist.sidoCode);
      }
    }
  }, [selectedSidoCode]);

  const distanceFromDistrictKm = useMemo(() => {
    if (locationMode !== "gps" || !gpsPoint) return 0;
    const targetCenter =
      currentDistrict?.center ?? currentSido?.center ?? DEFAULT_SIMULATED_LOCATION;
    const dist = calculateDistanceMeters(
      gpsPoint.lat,
      gpsPoint.lng,
      targetCenter.lat,
      targetCenter.lng
    );
    if (dist === null) return 0;
    return Number((dist / 1000).toFixed(1));
  }, [locationMode, gpsPoint, currentDistrict, currentSido]);

  const isFarFromSampleArea = useMemo(() => {
    return distanceFromDistrictKm > 3;
  }, [distanceFromDistrictKm]);

  // 업종 필터 적용 전 기준 목록 (직선거리 계산 및 반경/검색어 필터링, 좌표 없는 데이터 안전 처리)
  const baseMatchedRestaurants: RestaurantWithDistance[] = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return restaurantsData
      .map((item) => ({
        ...item,
        distanceMeters: calculateDistanceMeters(
          referencePoint.lat,
          referencePoint.lng,
          item.lat,
          item.lng
        ),
      }))
      .filter((item) => {
        if (locationMode === "manual") {
          // 시/도 매칭 (전국 'all'이 아니고 특정 시·도가 선택된 경우)
          if (currentSido) {
            const sidoShort = currentSido.shortName;
            const sidoPrefix2 = currentSido.name.slice(0, 2);
            if (
              item.city &&
              !item.city.includes(sidoShort) &&
              !item.city.includes(sidoPrefix2) &&
              !currentSido.name.includes(item.city.slice(0, 2))
            ) {
              return false;
            }
          }
          // 구 매칭 (시·도 전체 'all'이 아니고 특정 시·군·구가 선택된 경우)
          if (currentDistrict) {
            if (
              item.gu &&
              !item.gu.includes(currentDistrict.gu) &&
              !currentDistrict.gu.includes(item.gu)
            ) {
              return false;
            }
          }
          // 동 선택 매칭
          if (selectedDongObj) {
            const matchesDong =
              item.dong?.includes(selectedDongObj.name) ||
              item.roadAddress?.includes(selectedDongObj.name) ||
              item.jibunAddress?.includes(selectedDongObj.name);
            if (!matchesDong) return false;
          }
          // 수동 모드 반경 필터가 켜진 경우
          if (useRadiusInManualMode) {
            if (item.distanceMeters !== null && item.distanceMeters > radius) {
              return false;
            }
          }
        } else {
          // GPS / 시뮬레이션 모드
          if (item.distanceMeters !== null && item.distanceMeters > radius) {
            return false;
          }
        }

        if (query.length > 0) {
          const matchName = item.name.toLowerCase().includes(query);
          const matchSummary = item.summary.toLowerCase().includes(query);
          const matchDong = item.dong.toLowerCase().includes(query);
          const matchAddress =
            item.roadAddress.toLowerCase().includes(query) ||
            item.jibunAddress.toLowerCase().includes(query);
          const matchTags = item.tags.some((t) =>
            t.toLowerCase().includes(query)
          );
          if (
            !matchName &&
            !matchSummary &&
            !matchDong &&
            !matchAddress &&
            !matchTags
          ) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        // 좌표가 없는 항목은 뒤로 정렬, 거리 있는 항목은 가까운 순
        if (a.distanceMeters === null && b.distanceMeters === null) return 0;
        if (a.distanceMeters === null) return 1;
        if (b.distanceMeters === null) return -1;
        return a.distanceMeters - b.distanceMeters;
      });
  }, [
    restaurantsData,
    referencePoint,
    locationMode,
    currentSido,
    currentDistrict,
    selectedDongObj,
    useRadiusInManualMode,
    radius,
    searchQuery,
  ]);

  // 업종별 개수 집계
  const categoryCounts = useMemo(() => {
    const counts = {} as Record<RestaurantCategory, number>;
    for (const cat of RESTAURANT_CATEGORIES) {
      counts[cat] =
        cat === "전체"
          ? baseMatchedRestaurants.length
          : baseMatchedRestaurants.filter((item) => item.category === cat)
              .length;
    }
    return counts;
  }, [baseMatchedRestaurants]);

  // 최종 업종 필터 적용 목록
  const filteredRestaurants: RestaurantWithDistance[] = useMemo(() => {
    if (selectedCategory === "전체") return baseMatchedRestaurants;
    return baseMatchedRestaurants.filter(
      (item) => item.category === selectedCategory
    );
  }, [baseMatchedRestaurants, selectedCategory]);

  const handleSelectFromListForMap = useCallback(
    (item: RestaurantWithDistance) => {
      // 좌표가 있는 경우만 지도 포커스 이동
      if (item.lat !== null && item.lng !== null) {
        setFocusedMarkerId(item.id);
        setFocusTrigger((c) => c + 1);
        setMovedFromListNotice(item.name);
        setViewMode("map");
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // 좌표 없는 경우 상세 모달 열기
        setDetailModalRestaurantId(item.id);
      }
    },
    []
  );

  const handleSelectMarkerOnMap = useCallback((restaurantId: string) => {
    setFocusedMarkerId(restaurantId);
    setFocusTrigger((c) => c + 1);
    setMovedFromListNotice(null);
  }, []);

  const detailModalRestaurant = useMemo(() => {
    if (!detailModalRestaurantId) return null;
    const foundInFiltered = filteredRestaurants.find(
      (r) => r.id === detailModalRestaurantId
    );
    if (foundInFiltered) return foundInFiltered;

    const raw = restaurantsData.find((r) => r.id === detailModalRestaurantId);
    if (!raw) return null;
    return {
      ...raw,
      distanceMeters: calculateDistanceMeters(
        referencePoint.lat,
        referencePoint.lng,
        raw.lat,
        raw.lng
      ),
    };
  }, [detailModalRestaurantId, filteredRestaurants, restaurantsData, referencePoint]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("전체");
    setRadius(3000);
    if (locationMode === "manual") {
      setSelectedDongCode("all");
      setUseRadiusInManualMode(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pb-24">
      {/* 실서비스 상태 바 (카카오 지도, Supabase, 공공데이터 연결 상태) */}
      <ServiceStatusBar
        dataSource={dataSource}
        sourceName={sourceName}
        totalCount={restaurantsData.length}
        apiStatus={apiStatus}
        onRetry={loadLiveData}
        isLoading={isLoadingLiveData}
      />

      {/* 상단 위치·반경·검색·업종 필터 헤더 */}
      <LocationAndFilterHeader
        locationMode={locationMode}
        onChangeLocationMode={handleChangeLocationMode}
        onRequestBrowserGps={handleRequestBrowserGps}
        gpsLoading={gpsLoading}
        gpsError={gpsError}
        referencePoint={referencePoint}
        isFarFromSampleArea={isFarFromSampleArea}
        distanceFromMapoKm={distanceFromDistrictKm}
        selectedSidoCode={selectedSidoCode}
        onSelectSidoCode={handleSelectSido}
        selectedGuCode={selectedGuCode}
        onSelectGuCode={handleSelectGu}
        selectedDongCode={selectedDongCode}
        onSelectDongCode={setSelectedDongCode}
        radius={radius}
        onChangeRadius={setRadius}
        useRadiusInManualMode={useRadiusInManualMode}
        onToggleRadiusInManualMode={setUseRadiusInManualMode}
        searchQuery={searchQuery}
        onChangeSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
        viewMode={viewMode}
        onChangeViewMode={(mode) => {
          setMovedFromListNotice(null);
          setViewMode(mode);
        }}
        totalFilteredCount={filteredRestaurants.length}
      />

      {/* 본문 영역 */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-3.5 sm:px-4 pt-4 space-y-4">
        {/* 공공데이터 연동 상태 및 안내 배너 (인증키 설정 안내, API 실패 안내, 결과 없음 안내) */}
        <PublicDataNoticeBanner
          dataSource={dataSource}
          apiStatus={apiStatus}
          onRetry={loadLiveData}
          isLoading={isLoadingLiveData}
          selectedDongName={selectedDongObj?.name}
          selectedRegionLabel={
            selectedSidoCode === "all"
              ? "대한민국 전국"
              : currentDistrict
              ? `${currentDistrict.city} ${currentDistrict.gu}`
              : `${currentSido?.name} 전체`
          }
        />

        {viewMode === "list" ? (
          <RestaurantList
            restaurants={filteredRestaurants}
            focusedMarkerId={focusedMarkerId}
            onSelectForMap={handleSelectFromListForMap}
            onOpenDetail={(item) => setDetailModalRestaurantId(item.id)}
            radius={radius}
            onExpandRadius={(nextRadius) => setRadius(nextRadius)}
            onResetFilters={handleResetFilters}
            isGpsMode={locationMode === "gps"}
            distanceFromPilotAreaKm={distanceFromDistrictKm}
            districtName={
              selectedSidoCode === "all"
                ? "대한민국 전국"
                : currentDistrict
                ? `${currentDistrict.city} ${currentDistrict.gu}`
                : `${currentSido?.name} 전체`
            }
            onSimulatePilotArea={() => setLocationMode("simulated")}
            onSelectRegionManual={() => setLocationMode("manual")}
            dataSource={dataSource}
          />
        ) : (
          <div className="space-y-4">
            {movedFromListNotice && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-xs text-orange-950 shadow-2xs">
                <div className="flex items-center gap-1.5">
                  <Navigation className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>
                    선택한 <strong>{movedFromListNotice}</strong> 마커 위치로
                    지도를 이동했습니다.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className="inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 border border-orange-200 hover:bg-orange-100"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>목록으로 돌아가기</span>
                </button>
              </div>
            )}

            <RestaurantMapPreview
              restaurants={filteredRestaurants}
              referencePoint={referencePoint}
              radius={radius}
              showRadiusCircle={
                locationMode !== "manual" || useRadiusInManualMode
              }
              isGpsMode={locationMode === "gps"}
              focusedId={focusedMarkerId}
              focusTrigger={focusTrigger}
              onSelectMarker={handleSelectMarkerOnMap}
              onOpenDetail={(item) => setDetailModalRestaurantId(item.id)}
              districtName={
                selectedSidoCode === "all"
                  ? "전국"
                  : currentDistrict
                  ? currentDistrict.gu
                  : `${currentSido?.shortName || currentSido?.name} 전체`
              }
              dongs={currentDistrict?.dongs ?? []}
            />

            {filteredRestaurants.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-bold text-slate-800">
                    음식점 목록 눌러 해당 마커로 지도 이동 ({filteredRestaurants.length}
                    개)
                  </h2>
                  <span className="text-[11px] text-slate-400">
                    항목을 누르면 지도가 해당 마커로 이동합니다
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {filteredRestaurants.map((item) => {
                    const active =
                      (focusedMarkerId ?? filteredRestaurants[0]?.id) ===
                      item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setFocusedMarkerId(item.id);
                          setFocusTrigger((c) => c + 1);
                        }}
                        className={`shrink-0 rounded-xl border px-3 py-2 text-left transition ${
                          active
                            ? "border-orange-500 bg-orange-50 text-slate-900 ring-1 ring-orange-300"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                          <span className="text-orange-600">
                            {item.category}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">
                            {formatDistance(item.distanceMeters)}
                          </span>
                        </div>
                        <div className="mt-0.5 text-xs font-bold truncate max-w-[150px]">
                          {item.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* 모바일 플로팅 전환 버튼 */}
      <div className="fixed bottom-5 left-1/2 z-30 -translate-x-1/2">
        <button
          type="button"
          onClick={() => {
            setMovedFromListNotice(null);
            setViewMode((prev) => (prev === "list" ? "map" : "list"));
          }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-xl ring-1 ring-white/20 hover:bg-orange-600 transition-all"
        >
          {viewMode === "list" ? (
            <>
              <MapIcon className="h-4 w-4 text-orange-400" />
              <span>지도에서 보기 ({filteredRestaurants.length})</span>
            </>
          ) : (
            <>
              <List className="h-4 w-4 text-orange-400" />
              <span>목록으로 보기 ({filteredRestaurants.length})</span>
            </>
          )}
        </button>
      </div>

      <RestaurantDetailModal
        restaurant={detailModalRestaurant}
        referencePoint={referencePoint}
        onClose={() => setDetailModalRestaurantId(null)}
      />
    </div>
  );
}
