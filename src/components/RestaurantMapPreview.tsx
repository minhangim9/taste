"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Compass,
  ExternalLink,
  KeyRound,
  LocateFixed,
  MapPin,
  Phone,
  RefreshCw,
} from "lucide-react";
import { TARGET_DISTRICTS } from "@/data/real-restaurants";
import { formatDistance } from "@/lib/geo";
import {
  KakaoCircle,
  KakaoCustomOverlay,
  KakaoMap,
  KakaoMarker,
} from "@/types/kakao";
import {
  GeoPoint,
  RadiusOption,
  RestaurantWithDistance,
} from "@/types/restaurant";

interface RestaurantMapPreviewProps {
  restaurants: RestaurantWithDistance[];
  referencePoint: GeoPoint;
  radius: RadiusOption;
  showRadiusCircle: boolean;
  isGpsMode?: boolean;
  focusedId: string | null;
  focusTrigger: number;
  onSelectMarker: (restaurantId: string) => void;
  onOpenDetail: (restaurant: RestaurantWithDistance) => void;
  districtName?: string;
  dongs?: { code: string; name: string; center: GeoPoint }[];
}

type SdkLoadStatus = "loading" | "ready" | "error";
type SdkErrorType = "missing_key" | "disabled_service" | "load_failed" | null;

function computeMapBounds(
  ref: GeoPoint,
  restaurants: RestaurantWithDistance[],
  dongs: { center: GeoPoint }[]
) {
  const lats = [
    ref.lat,
    ...restaurants
      .map((r) => r.lat)
      .filter((l): l is number => typeof l === "number" && !isNaN(l) && l > 0),
    ...dongs
      .map((d) => d.center.lat)
      .filter((l): l is number => typeof l === "number" && !isNaN(l) && l > 0),
  ];
  const lngs = [
    ref.lng,
    ...restaurants
      .map((r) => r.lng)
      .filter((l): l is number => typeof l === "number" && !isNaN(l) && l > 0),
    ...dongs
      .map((d) => d.center.lng)
      .filter((l): l is number => typeof l === "number" && !isNaN(l) && l > 0),
  ];

  const minLat = Math.min(...lats) - 0.008;
  const maxLat = Math.max(...lats) + 0.008;
  const minLng = Math.min(...lngs) - 0.012;
  const maxLng = Math.max(...lngs) + 0.012;

  return { minLat, maxLat, minLng, maxLng };
}

function toMapPercent(
  lat: number,
  lng: number,
  bounds: { minLat: number; maxLat: number; minLng: number; maxLng: number }
) {
  const latSpan = bounds.maxLat - bounds.minLat || 0.01;
  const lngSpan = bounds.maxLng - bounds.minLng || 0.01;

  const xRaw = ((lng - bounds.minLng) / lngSpan) * 100;
  const yRaw = ((bounds.maxLat - lat) / latSpan) * 100;

  return {
    x: Math.max(6, Math.min(94, xRaw)),
    y: Math.max(8, Math.min(92, yRaw)),
  };
}

export function RestaurantMapPreview({
  restaurants,
  referencePoint,
  radius,
  showRadiusCircle,
  isGpsMode = false,
  focusedId,
  focusTrigger,
  onSelectMarker,
  onOpenDetail,
  districtName,
  dongs,
}: RestaurantMapPreviewProps) {
  const rawAppKey =
    process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY?.trim() ||
    "d64167ada7a3e3103da2a28a5baff0d6";

  const [sdkStatus, setSdkStatus] = useState<SdkLoadStatus>("loading");
  const [errorType, setErrorType] = useState<SdkErrorType>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [showFallbackCanvas, setShowFallbackCanvas] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<KakaoMap | null>(null);
  const markersRef = useRef<KakaoMarker[]>([]);
  const activeOverlayRef = useRef<KakaoCustomOverlay | null>(null);
  const refPointOverlayRef = useRef<KakaoCustomOverlay | null>(null);
  const radiusCircleRef = useRef<KakaoCircle | null>(null);

  const focusedRestaurant =
    restaurants.find((r) => r.id === focusedId) ?? restaurants[0] ?? null;

  // 1. 카카오 지도 Web SDK 스크립트 동적 로드 (services 라이브러리 포함)
  useEffect(() => {
    if (!rawAppKey || rawAppKey === "your_kakao_javascript_app_key_here") {
      setSdkStatus("error");
      setErrorType("missing_key");
      return;
    }

    setSdkStatus("loading");
    setErrorType(null);

    if (typeof window === "undefined") return;

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        setSdkStatus("ready");
      });
      return;
    }

    const existingScript = document.getElementById(
      "kakao-map-sdk-script"
    ) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "kakao-map-sdk-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
      rawAppKey
    )}&libraries=services&autoload=false`;
    script.async = true;

    const timeoutId = window.setTimeout(() => {
      setSdkStatus((prev) => {
        if (prev !== "ready") {
          setErrorType("disabled_service");
          return "error";
        }
        return prev;
      });
    }, 7000);

    script.onload = () => {
      window.clearTimeout(timeoutId);
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          setSdkStatus("ready");
          setErrorType(null);
        });
      } else {
        setSdkStatus("error");
        setErrorType("disabled_service");
      }
    };

    script.onerror = () => {
      window.clearTimeout(timeoutId);
      setSdkStatus("error");
      setErrorType("disabled_service");
    };

    document.head.appendChild(script);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [rawAppKey, retryCount]);

  // 2. 카카오 지도 인스턴스 초기화
  useEffect(() => {
    if (sdkStatus !== "ready" || !mapContainerRef.current) return;
    if (!window.kakao?.maps) return;

    const { maps } = window.kakao;
    const initialCenter = new maps.LatLng(
      referencePoint.lat,
      referencePoint.lng
    );

    if (!mapInstanceRef.current) {
      const level = radius === 500 ? 4 : radius === 1000 ? 5 : 6;
      mapInstanceRef.current = new maps.Map(mapContainerRef.current, {
        center: initialCenter,
        level,
      });
    } else {
      mapInstanceRef.current.relayout();
    }
  }, [sdkStatus, referencePoint.lat, referencePoint.lng, radius]);

  // 3. 현재 위치(또는 기준점) 및 반경(500m / 1km / 3km) 원 표시 업데이트
  useEffect(() => {
    if (sdkStatus !== "ready" || !mapInstanceRef.current || !window.kakao?.maps)
      return;

    const { maps } = window.kakao;
    const map = mapInstanceRef.current;
    const centerPos = new maps.LatLng(referencePoint.lat, referencePoint.lng);

    if (refPointOverlayRef.current) {
      refPointOverlayRef.current.setMap(null);
    }
    if (radiusCircleRef.current) {
      radiusCircleRef.current.setMap(null);
    }

    const refLabel = isGpsMode ? "📍 내 현재 위치" : "기준점";
    const refBg = isGpsMode ? "#2563eb" : "#475569";
    const refContent = `
      <div style="display:flex;align-items:center;gap:5px;padding:5px 9px;border-radius:9999px;background:${refBg};color:#ffffff;font-size:11px;font-weight:700;box-shadow:0 3px 8px rgba(0,0,0,0.3);border:2px solid #ffffff;white-space:nowrap;">
        <span style="display:inline-block;width:7px;height:7px;border-radius:9999px;background:#60a5fa;"></span>
        <span>${refLabel}</span>
      </div>
    `;
    refPointOverlayRef.current = new maps.CustomOverlay({
      map,
      position: centerPos,
      content: refContent,
      yAnchor: 0.5,
      zIndex: 15,
    });

    if (showRadiusCircle) {
      radiusCircleRef.current = new maps.Circle({
        map,
        center: centerPos,
        radius,
        strokeWeight: 2,
        strokeColor: isGpsMode ? "#2563eb" : "#ea580c",
        strokeOpacity: 0.85,
        strokeStyle: "dashed",
        fillColor: isGpsMode ? "#3b82f6" : "#fb923c",
        fillOpacity: 0.12,
      });
    }

    const targetLevel = radius === 500 ? 4 : radius === 1000 ? 5 : 6;
    map.setLevel(targetLevel, { animate: true });
    map.panTo(centerPos);
  }, [
    sdkStatus,
    referencePoint.lat,
    referencePoint.lng,
    radius,
    showRadiusCircle,
    isGpsMode,
  ]);

  // 4. 음식점 마커 생성 및 클릭 이벤트 연결
  useEffect(() => {
    if (sdkStatus !== "ready" || !mapInstanceRef.current || !window.kakao?.maps)
      return;

    const { maps } = window.kakao;
    const map = mapInstanceRef.current;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    // 좌표가 유효한 음식점만 지도 마커로 생성 (공공데이터 중 좌표 미제공 데이터 예외 처리)
    const validRestaurants = restaurants.filter(
      (item) =>
        typeof item.lat === "number" &&
        typeof item.lng === "number" &&
        !isNaN(item.lat) &&
        !isNaN(item.lng) &&
        item.lat > 0 &&
        item.lng > 0
    );

    validRestaurants.forEach((item) => {
      const pos = new maps.LatLng(item.lat!, item.lng!);
      const marker = new maps.Marker({
        map,
        position: pos,
        title: item.name,
        zIndex: item.id === focusedRestaurant?.id ? 10 : 3,
      });

      maps.event.addListener(marker, "click", () => {
        onSelectMarker(item.id);
      });

      markersRef.current.push(marker);
    });
  }, [sdkStatus, restaurants, focusedRestaurant?.id, onSelectMarker]);

  // 5. 선택된 음식점으로 지도 이동(panTo) 및 말풍선 오버레이
  useEffect(() => {
    if (sdkStatus !== "ready" || !mapInstanceRef.current || !window.kakao?.maps)
      return;

    const { maps } = window.kakao;
    const map = mapInstanceRef.current;

    if (activeOverlayRef.current) {
      activeOverlayRef.current.setMap(null);
      activeOverlayRef.current = null;
    }

    if (!focusedRestaurant) return;

    const hasValidCoords =
      typeof focusedRestaurant.lat === "number" &&
      typeof focusedRestaurant.lng === "number" &&
      !isNaN(focusedRestaurant.lat) &&
      !isNaN(focusedRestaurant.lng) &&
      focusedRestaurant.lat > 0 &&
      focusedRestaurant.lng > 0;

    // 좌표가 없는 음식점인 경우 지도를 이동시키지 않음
    if (!hasValidCoords) return;

    const targetPos = new maps.LatLng(
      focusedRestaurant.lat!,
      focusedRestaurant.lng!
    );

    const overlayHtml = `
      <div style="transform:translateY(-42px);background:#0f172a;color:#ffffff;padding:6px 12px;border-radius:12px;font-size:12px;font-weight:700;box-shadow:0 4px 12px rgba(0,0,0,0.28);border:1.5px solid #fb923c;white-space:nowrap;display:flex;align-items:center;gap:6px;">
        <span style="background:#ea580c;color:#ffffff;font-size:10px;padding:2px 6px;border-radius:6px;font-weight:700;">${
          focusedRestaurant.category
        }</span>
        <span>${focusedRestaurant.name}</span>
        <span style="color:#fdba74;font-size:11px;">${formatDistance(
          focusedRestaurant.distanceMeters
        )}</span>
      </div>
    `;

    activeOverlayRef.current = new maps.CustomOverlay({
      map,
      position: targetPos,
      content: overlayHtml,
      yAnchor: 1,
      zIndex: 20,
    });

    map.panTo(targetPos);
  }, [sdkStatus, focusedRestaurant, focusTrigger]);

  const handlePanToReference = useCallback(() => {
    if (sdkStatus === "ready" && mapInstanceRef.current && window.kakao?.maps) {
      const pos = new window.kakao.maps.LatLng(
        referencePoint.lat,
        referencePoint.lng
      );
      mapInstanceRef.current.panTo(pos);
    }
  }, [sdkStatus, referencePoint.lat, referencePoint.lng]);

  const activeDongs =
    dongs && dongs.length > 0 ? dongs : TARGET_DISTRICTS[0].dongs;
  const fallbackBounds = computeMapBounds(
    referencePoint,
    restaurants,
    activeDongs
  );
  const refPos = toMapPercent(
    referencePoint.lat,
    referencePoint.lng,
    fallbackBounds
  );
  const radiusPercentSize =
    radius === 500 ? 34 : radius === 1000 ? 64 : 135;

  return (
    <div className="space-y-3">
      {/* 지도 로딩 실패 안내 표시 (카카오맵 활성화 설정 OFF 시 친절한 안내 제공) */}
      {sdkStatus === "error" && (
        <div
          role="alert"
          className="rounded-2xl border border-amber-300 bg-amber-50/90 p-4 text-xs text-slate-800 shadow-2xs space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  카카오 지도 API 사용 설정 안내
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  카카오 앱 키(
                  <code className="font-mono font-semibold">{rawAppKey.slice(0, 8)}...</code>
                  )가 등록되었습니다. 카카오 디벨로퍼스에서{" "}
                  <strong className="underline text-orange-700">
                    카카오맵 활성화 설정(ON)
                  </strong>
                  을 켜시면 실제 카카오 지도 화면이 즉시 표시됩니다.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setRetryCount((c) => c + 1)}
              className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>다시 시도</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 rounded-xl border border-amber-200 bg-white p-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <KeyRound className="h-3.5 w-3.5 text-orange-600" />
                <span>카카오맵 활성화 설정 (가장 중요)</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                카카오 디벨로퍼스 &gt; 내 애플리케이션(우리동네) &gt; 좌측 메뉴{" "}
                <strong>제품 설정 &gt; 카카오맵</strong>에서{" "}
                <span className="font-bold text-orange-600">
                  [활성화 설정: ON]
                </span>
                으로 켜주세요.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Compass className="h-3.5 w-3.5 text-orange-600" />
                <span>Web 플랫폼 도메인 등록</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                앱 설정 &gt; 플랫폼 &gt; Web 사이트 도메인에{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-slate-800">
                  http://localhost:3000
                </code>
                ,{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-slate-800">
                  http://localhost:3001
                </code>
                을 등록해 주세요.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-0.5">
            <span className="text-[11px] text-slate-600">
              * 지도 활성화 전에도 아래 인터랙티브 좌표 지도로 실제 마커와 이동 기능을 테스트할 수 있습니다.
            </span>
            <button
              type="button"
              onClick={() => setShowFallbackCanvas((prev) => !prev)}
              className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              {showFallbackCanvas
                ? "인터랙티브 지도 접기"
                : "인터랙티브 좌표 지도 열기"}
            </button>
          </div>
        </div>
      )}

      {/* 실제 카카오 지도 영역 */}
      {sdkStatus !== "error" && (
        <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-inner">
          <div ref={mapContainerRef} className="h-full w-full" />

          {sdkStatus === "loading" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-100/85 backdrop-blur-xs">
              <div className="h-8 w-8 animate-spin rounded-full border-3 border-orange-600 border-t-transparent" />
              <p className="mt-2.5 text-xs font-semibold text-slate-700">
                카카오 지도를 연결하는 중입니다...
              </p>
            </div>
          )}

          <div className="absolute left-3 top-3 z-20 flex flex-wrap items-center gap-1.5">
            <div className="rounded-xl border border-slate-200 bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur-xs">
              {isGpsMode ? (
                <>
                  <span className="text-blue-600 font-bold">📍 내 위치 기준</span> (반경 {formatDistance(radius)}) · 마커{" "}
                  <strong className="text-orange-600">{restaurants.length}</strong>개
                </>
              ) : (
                <>
                  {districtName || "선택 지역"} 기준점 (반경 {formatDistance(radius)}) · 마커{" "}
                  <strong className="text-orange-600">{restaurants.length}</strong>개
                </>
              )}
            </div>
            <button
              type="button"
              onClick={handlePanToReference}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
            >
              <LocateFixed className="h-3.5 w-3.5" />
              <span>{isGpsMode ? "내 위치로 이동" : "기준점으로 이동"}</span>
            </button>
          </div>
        </div>
      )}

      {/* 키 활성화 전 대체 인터랙티브 캔버스 */}
      {(sdkStatus === "error" && showFallbackCanvas) && (
        <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-inner select-none">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "20px 20px, 60px 60px, 60px 60px",
            }}
          />

          {activeDongs.map((dong) => {
            const pos = toMapPercent(dong.center.lat, dong.center.lng, fallbackBounds);
            return (
              <div
                key={dong.code}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 px-3 py-1 text-xs font-bold text-slate-500 border border-slate-300/80"
              >
                {dong.name}
              </div>
            );
          })}

          {showRadiusCircle && (
            <div
              style={{
                left: `${refPos.x}%`,
                top: `${refPos.y}%`,
                width: `${radiusPercentSize}%`,
                aspectRatio: "1 / 1",
              }}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-orange-500/70 bg-orange-400/10"
            />
          )}

          <div
            style={{ left: `${refPos.x}%`, top: `${refPos.y}%` }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            title={referencePoint.label}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-md">
              <LocateFixed className="h-3.5 w-3.5" />
            </div>
          </div>

          {restaurants
            .filter(
              (item) =>
                typeof item.lat === "number" &&
                typeof item.lng === "number" &&
                !isNaN(item.lat) &&
                !isNaN(item.lng) &&
                item.lat > 0 &&
                item.lng > 0
            )
            .map((item) => {
              const pos = toMapPercent(item.lat!, item.lng!, fallbackBounds);
            const isFocused = focusedRestaurant?.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectMarker(item.id)}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-full transition-transform ${
                  isFocused ? "z-20 scale-110" : "z-10 hover:scale-105"
                }`}
              >
                <div
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold shadow-md border transition-colors ${
                    isFocused
                      ? "bg-orange-600 text-white border-white ring-4 ring-orange-500/30"
                      : "bg-white text-slate-800 border-slate-300 hover:border-orange-500"
                  }`}
                >
                  <MapPin
                    className={`h-3.5 w-3.5 shrink-0 ${
                      isFocused ? "text-white" : "text-orange-600"
                    }`}
                  />
                  <span className="max-w-[120px] truncate">{item.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* 선택된 음식점 마커 요약 카드 */}
      {focusedRestaurant ? (
        <div className="rounded-2xl border-2 border-orange-500 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600">
              <MapPin className="h-4 w-4" />
              <span>선택된 음식점 마커</span>
            </span>
            <span className="text-[11px] text-slate-500">
              기준점 거리: {formatDistance(focusedRestaurant.distanceMeters)}
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-800">
                  {focusedRestaurant.category}
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  {focusedRestaurant.gu} {focusedRestaurant.dong}
                </span>
                {focusedRestaurant.phone && (
                  <span className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                    <Phone className="h-3 w-3 text-slate-400" />
                    <span>{focusedRestaurant.phone}</span>
                  </span>
                )}
              </div>

              <h3 className="truncate text-base font-bold text-slate-900">
                {focusedRestaurant.name}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-1">
                {focusedRestaurant.summary}
              </p>
              <p className="truncate text-xs text-slate-400">
                {focusedRestaurant.roadAddress}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {focusedRestaurant.phone && (
                <a
                  href={`tel:${focusedRestaurant.phone}`}
                  className="shrink-0 inline-flex items-center justify-center gap-1 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>전화</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => onOpenDetail(focusedRestaurant)}
                className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                <span>상세보기</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs text-slate-500">
          현재 검색·필터 조건에 해당하는 음식점 마커가 없습니다.
        </div>
      )}
    </div>
  );
}
