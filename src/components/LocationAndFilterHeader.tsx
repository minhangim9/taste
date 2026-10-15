"use client";

import { useState } from "react";
import {
  AlertCircle,
  Compass,
  List,
  LocateFixed,
  Lock,
  Map as MapIcon,
  MapPin,
  MapPinOff,
  RefreshCw,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  RADIUS_OPTIONS,
  RESTAURANT_CATEGORIES,
  TARGET_DISTRICTS,
} from "@/data/real-restaurants";
import {
  KOREAN_SIDO_LIST,
  KOREAN_SIGUNGU_LIST,
  NATIONWIDE_CITIES,
  POPULAR_HOTSPOTS,
  SIGUNGU_BY_SIDO,
  findDistrictByCode,
  findDistrictsByQuery,
} from "@/data/korean-administrative-regions";
import {
  GeoPoint,
  LocationMode,
  RadiusOption,
  RestaurantCategory,
  SidoOption,
  SigunguOption,
  ViewMode,
} from "@/types/restaurant";

interface LocationAndFilterHeaderProps {
  locationMode: LocationMode;
  onChangeLocationMode: (mode: LocationMode) => void;
  onRequestBrowserGps: () => void;
  gpsLoading: boolean;
  gpsError: string | null;
  referencePoint: GeoPoint;
  isFarFromSampleArea: boolean;
  distanceFromMapoKm: number;
  selectedSidoCode: string;
  onSelectSidoCode: (code: string) => void;
  selectedGuCode: string;
  onSelectGuCode: (code: string) => void;
  selectedDongCode: string;
  onSelectDongCode: (code: string) => void;
  radius: RadiusOption;
  onChangeRadius: (radius: RadiusOption) => void;
  useRadiusInManualMode: boolean;
  onToggleRadiusInManualMode: (useRadius: boolean) => void;
  searchQuery: string;
  onChangeSearchQuery: (query: string) => void;
  selectedCategory: RestaurantCategory;
  onSelectCategory: (category: RestaurantCategory) => void;
  categoryCounts: Record<RestaurantCategory, number>;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  totalFilteredCount: number;
}

export function LocationAndFilterHeader({
  locationMode,
  onChangeLocationMode,
  onRequestBrowserGps,
  gpsLoading,
  gpsError,
  referencePoint,
  isFarFromSampleArea,
  distanceFromMapoKm,
  selectedSidoCode,
  onSelectSidoCode,
  selectedGuCode,
  onSelectGuCode,
  selectedDongCode,
  onSelectDongCode,
  radius,
  onChangeRadius,
  useRadiusInManualMode,
  onToggleRadiusInManualMode,
  searchQuery,
  onChangeSearchQuery,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  viewMode,
  onChangeViewMode,
  totalFilteredCount,
}: LocationAndFilterHeaderProps) {
  const currentSido =
    selectedSidoCode === "all"
      ? null
      : KOREAN_SIDO_LIST.find((s) => s.code === selectedSidoCode) ?? null;

  const currentDistrict =
    selectedGuCode === "all"
      ? null
      : findDistrictByCode(selectedGuCode) ??
        KOREAN_SIGUNGU_LIST.find((d) => d.code === selectedGuCode) ??
        null;

  const sigunguListInSido =
    selectedSidoCode === "all"
      ? KOREAN_SIGUNGU_LIST
      : SIGUNGU_BY_SIDO.get(selectedSidoCode) || [];

  const [customDongInput, setCustomDongInput] = useState("");
  const [regionSearchText, setRegionSearchText] = useState("");
  const [isRegionSearchFocused, setIsRegionSearchFocused] = useState(false);

  const searchedDistricts =
    regionSearchText.trim().length > 0
      ? findDistrictsByQuery(regionSearchText.trim()).slice(0, 10)
      : [];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto max-w-5xl px-3.5 sm:px-4 py-3 space-y-2.5">
        {/* 상단 타이틀 및 지도/목록 전환 버튼 */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-sm">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <h1 className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  우리 동네 음식점 찾기
                </h1>
                <span className="shrink-0 rounded-md bg-emerald-100 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-300">
                  전국 17개 시·도 250개 시·군·구 지원
                </span>
              </div>
              <p className="truncate text-xs text-slate-500">
                {selectedSidoCode === "all"
                  ? "대한민국 전국 (전체 17개 시·도 및 250개 시·군·구 탐색)"
                  : !currentDistrict
                  ? `${currentSido?.name} 전체 탐색 (${sigunguListInSido.length}개 시·군·구)`
                  : `${currentDistrict.fullName} (${currentDistrict.dongs.map((d) => d.name).slice(0, 5).join(" · ")}${currentDistrict.dongs.length > 5 ? " 등" : ""})`}
              </p>
            </div>
          </div>

          {/* 지도 / 목록 전환 스위치 */}
          <div className="flex shrink-0 items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              type="button"
              aria-pressed={viewMode === "list"}
              onClick={() => onChangeViewMode("list")}
              className={`flex items-center gap-1 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "list"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span>목록</span>
            </button>
            <button
              type="button"
              aria-pressed={viewMode === "map"}
              onClick={() => onChangeViewMode("map")}
              className={`flex items-center gap-1 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "map"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MapIcon className="h-3.5 w-3.5" />
              <span>지도</span>
            </button>
          </div>
        </div>

        {/* 내 주변 위치 컨트롤 카드 */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-2.5 sm:p-3 space-y-2.5">
          {/* 상단: 현재 기준점 라벨 및 위치 모드 선택 버튼군 */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
              <Compass className="h-4 w-4 text-orange-600 shrink-0" />
              <span className="shrink-0">현재 탐색 중심:</span>
              <strong className="font-semibold text-slate-900 truncate max-w-[210px] sm:max-w-none">
                {referencePoint.label}
              </strong>
            </div>

            {/* 개인정보 보호 안내 배지 */}
            <div className="inline-flex items-center gap-1 rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-medium text-slate-600">
              <ShieldCheck className="h-3 w-3 text-emerald-600 shrink-0" />
              <span>위치 정보 DB 미저장(클라이언트 전용)</span>
            </div>
          </div>

          {/* 메인 위치 모드 액션 바 */}
          <div className="flex flex-wrap items-center gap-2">
            {/* 1. 내 주변 찾기 (GPS) */}
            <button
              type="button"
              onClick={onRequestBrowserGps}
              disabled={gpsLoading}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow-xs ${
                locationMode === "gps"
                  ? "bg-blue-600 text-white ring-2 ring-blue-300 hover:bg-blue-700"
                  : "bg-orange-600 text-white hover:bg-orange-700"
              }`}
            >
              {gpsLoading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>위치 권한 확인 중...</span>
                </>
              ) : (
                <>
                  <LocateFixed className="h-3.5 w-3.5" />
                  <span>
                    {locationMode === "gps"
                      ? "📍 내 주변 탐색 중 (새로고침)"
                      : "내 주변 찾기 (현재 위치 요청)"}
                  </span>
                </>
              )}
            </button>

            {/* 2. 보조 버튼: 선택 지역 중심 기준점 */}
            <button
              type="button"
              onClick={() => onChangeLocationMode("simulated")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition ${
                locationMode === "simulated"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>
                {currentDistrict
                  ? `${currentDistrict.name} 중심 기준`
                  : currentSido
                  ? `${currentSido.shortName} 중심 기준`
                  : "전국 중심 기준"}
              </span>
            </button>

            {/* 3. 보조 버튼: 전국 지역 직접 선택 */}
            <button
              type="button"
              onClick={() => onChangeLocationMode("manual")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition ${
                locationMode === "manual"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <MapPinOff className="h-3.5 w-3.5" />
              <span>전국 지역 직접 선택</span>
            </button>
          </div>

          {/* 위치 에러 알림 박스 */}
          {gpsError && (
            <div
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-900 space-y-1.5 shadow-2xs"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                <div className="space-y-0.5">
                  <p className="font-bold text-rose-950">
                    위치 정보를 가져올 수 없습니다
                  </p>
                  <p className="leading-relaxed">{gpsError}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-rose-200/70 pt-2 text-[11px]">
                <span className="font-semibold text-rose-800">
                  👉 아래 &apos;전국 지역 선택&apos;으로 원하는 동네를 바로 탐색하실 수 있습니다.
                </span>
                <button
                  type="button"
                  onClick={onRequestBrowserGps}
                  className="rounded-lg bg-white px-2 py-0.5 font-bold text-rose-700 border border-rose-300 hover:bg-rose-100"
                >
                  다시 요청
                </button>
              </div>
            </div>
          )}

          {/* 실제 GPS 위치가 선택한 지역에서 멀리 떨어져 있을 때 친절한 안내 */}
          {locationMode === "gps" && isFarFromSampleArea && (
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900 space-y-2 shadow-2xs">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-blue-950">
                    인식된 위치가 {currentDistrict ? currentDistrict.fullName : currentSido ? currentSido.name : "탐색 지역"}에서 약 {distanceFromMapoKm}km 떨어져 있습니다
                  </p>
                  <p className="text-[11px] text-blue-800 leading-relaxed mt-1">
                    💡 <strong>PC(컴퓨터)에서 타 지역으로 잡히는 이유:</strong><br />
                    데스크톱 PC나 유선 LAN 인터넷은 스마트폰처럼 위성 GPS 칩이 없어, <strong>인터넷 통신사의 공인 IP 게이트웨이 노드 위치</strong>로 위치를 추정하기 때문입니다. 스마트폰으로 접속하시면 실제 거주지의 정확한 위성 GPS가 잡힙니다.
                  </p>
                  <p className="text-[11px] text-blue-700 mt-1">
                    현재 선택된 탐색 지역은 <strong>{currentDistrict ? currentDistrict.fullName : currentSido ? currentSido.name : "전국 전체"}</strong>입니다. 
                    반경 필터 테스트를 위해 기준점으로 전환하시거나 지역을 직접 선택해 보세요.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onChangeLocationMode("simulated")}
                    className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 shadow-xs"
                  >
                    기준점으로 전환
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeLocationMode("manual")}
                    className="rounded-lg bg-white border border-blue-300 px-2.5 py-1 text-xs font-semibold text-blue-800 hover:bg-blue-100"
                  >
                    지역 직접 선택
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 전국 지역 직접 선택 모드 UI */}
          {locationMode === "manual" && (
            <div className="rounded-xl border border-slate-300 bg-white p-3 space-y-2.5 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>전국 행정구역 선택 (17개 시·도 및 250개 시·군·구 빠짐없이 탐색)</span>
                </div>
                <label className="inline-flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useRadiusInManualMode}
                    onChange={(e) =>
                      onToggleRadiusInManualMode(e.target.checked)
                    }
                    className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span>선택한 동 중심에서 반경 필터 함께 적용</span>
                </label>
              </div>

              {/* 1. 인기 핫플레이스 바로가기 바 */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
                <span className="shrink-0 text-[11px] font-bold text-slate-500">
                  인기 핫플:
                </span>
                {POPULAR_HOTSPOTS.map((spot) => {
                  const isActive =
                    selectedGuCode === spot.code ||
                    selectedGuCode === spot.legacyCode;
                  return (
                    <button
                      key={spot.code}
                      type="button"
                      onClick={() => {
                        const dist = findDistrictByCode(spot.code);
                        if (dist) {
                          onSelectSidoCode(dist.sidoCode);
                          onSelectGuCode(dist.code);
                          onSelectDongCode("all");
                          setCustomDongInput("");
                        }
                      }}
                      className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                        isActive
                          ? "bg-orange-600 text-white shadow-xs font-bold"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {spot.label}
                    </button>
                  );
                })}
              </div>

              {/* 2. 지역명 빠른 검색창 (자동완성 & 즉시 이동) */}
              <div className="relative">
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-3 py-1.5 focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-200">
                  <Search className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="🔍 지역명 빠른 검색 (예: 해운대, 분당, 강릉, 전주, 마포)"
                    value={regionSearchText}
                    onChange={(e) => {
                      setRegionSearchText(e.target.value);
                      setIsRegionSearchFocused(true);
                    }}
                    onFocus={() => setIsRegionSearchFocused(true)}
                    className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                  {regionSearchText && (
                    <button
                      type="button"
                      onClick={() => setRegionSearchText("")}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* 실시간 자동완성 결과 드롭다운 */}
                {isRegionSearchFocused && searchedDistricts.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 z-50 max-h-60 overflow-y-auto rounded-xl border border-orange-200 bg-white p-1.5 shadow-lg space-y-1">
                    <div className="flex items-center justify-between px-2 py-1 text-[11px] font-bold text-slate-400">
                      <span>검색된 지역 ({searchedDistricts.length}개)</span>
                      <button
                        type="button"
                        onClick={() => setIsRegionSearchFocused(false)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        닫기
                      </button>
                    </div>
                    {searchedDistricts.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          onSelectSidoCode(item.sidoCode);
                          onSelectGuCode(item.code);
                          onSelectDongCode("all");
                          setCustomDongInput("");
                          setRegionSearchText("");
                          setIsRegionSearchFocused(false);
                        }}
                        className="w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs hover:bg-orange-50 text-left transition"
                      >
                        <span className="font-bold text-slate-800">
                          📍 {item.fullName}
                        </span>
                        <span className="text-[11px] text-orange-600 font-semibold">
                          선택하기 →
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. 전국 17개 시/도 + 250개 시/군/구 2단계 연계 드롭다운 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                {/* 1단계: 시·도 선택 (17개 광역시·도 + 전국 전체) */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 block">
                    1단계: 시·도 선택 (17개 광역자치단체)
                  </label>
                  <select
                    aria-label="시·도 선택"
                    value={selectedSidoCode}
                    onChange={(e) => {
                      const newSido = e.target.value;
                      onSelectSidoCode(newSido);
                      onSelectGuCode("all");
                      onSelectDongCode("all");
                      setCustomDongInput("");
                    }}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
                  >
                    <option value="all">🌐 전국 전체</option>
                    {KOREAN_SIDO_LIST.map((sido) => (
                      <option key={sido.code} value={sido.code}>
                        {sido.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2단계: 시·군·구 선택 */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 block">
                    2단계: 시·군·구 선택 (전국 250개 행정구역)
                  </label>
                  <select
                    aria-label="시·군·구 선택"
                    value={selectedGuCode}
                    onChange={(e) => {
                      const newGu = e.target.value;
                      onSelectGuCode(newGu);
                      onSelectDongCode("all");
                      setCustomDongInput("");
                    }}
                    className="w-full rounded-xl border border-orange-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  >
                    {selectedSidoCode === "all" ? (
                      <>
                        <option value="all">전국 시·군·구 전체 (전국 범위 검색)</option>
                        {KOREAN_SIDO_LIST.map((sido) => {
                          const districts = SIGUNGU_BY_SIDO.get(sido.code) || [];
                          return (
                            <optgroup key={sido.code} label={`📍 ${sido.name} (${districts.length}개)`}>
                              {districts.map((d) => (
                                <option key={d.code} value={d.code}>
                                  {d.fullName}
                                </option>
                              ))}
                            </optgroup>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <option value="all">
                          {currentSido?.name} 전체 ({sigunguListInSido.length}개 시·군·구 포함)
                        </option>
                        {sigunguListInSido.map((d) => (
                          <option key={d.code} value={d.code}>
                            {d.name}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* 4. 동네 (대표 동 탭 + 동 직접 입력) */}
              <div className="flex flex-wrap items-center gap-1 pt-1.5 border-t border-slate-100">
                {currentDistrict ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setCustomDongInput("");
                        onSelectDongCode("all");
                      }}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        selectedDongCode === "all" && !customDongInput
                          ? "bg-orange-600 text-white shadow-xs font-bold"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {currentDistrict.name} 전체
                    </button>
                    {currentDistrict.dongs.map((dong) => (
                      <button
                        key={dong.code}
                        type="button"
                        onClick={() => {
                          setCustomDongInput("");
                          onSelectDongCode(dong.code);
                        }}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                          selectedDongCode === dong.code && !customDongInput
                            ? "bg-orange-600 text-white shadow-xs font-bold"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {dong.name}
                      </button>
                    ))}

                    {/* 동 직접 입력/검색 폼 */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (customDongInput.trim()) {
                          onSelectDongCode(customDongInput.trim());
                        }
                      }}
                      className="inline-flex items-center gap-1 ml-1"
                    >
                      <input
                        type="text"
                        placeholder="동 직접 입력 (예: 압구정동)"
                        value={customDongInput}
                        onChange={(e) => setCustomDongInput(e.target.value)}
                        className="w-36 sm:w-44 rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-1 text-xs font-semibold transition"
                      >
                        적용
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {currentSido ? `${currentSido.name} 전체 탐색 중:` : "전국 전체 탐색 중:"}
                    </span>
                    <span className="text-slate-500">
                      위 2단계에서 특정 시·군·구를 선택하시면 하위 읍·면·동 탭과 동 직접 입력 폼이 제공됩니다.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 내 주변 반경 선택 (500m / 1km / 3km) 및 정렬 안내 */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 border-t border-slate-200/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-slate-700">
                탐색 반경:
              </span>
              <div className="inline-flex rounded-xl bg-white p-0.5 border border-slate-200">
                {RADIUS_OPTIONS.map((opt) => {
                  const disabled =
                    locationMode === "manual" && !useRadiusInManualMode;
                  const active = !disabled && radius === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={disabled}
                      aria-pressed={active}
                      onClick={() => onChangeRadius(opt.value)}
                      className={`rounded-lg px-2.5 sm:px-3 py-1 text-xs font-semibold transition ${
                        disabled
                          ? "text-slate-300 cursor-not-allowed"
                          : active
                          ? "bg-orange-600 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span>직선거리 가까운 순 정렬 · </span>
              <span>
                결과{" "}
                <strong className="font-bold text-orange-600">
                  {totalFilteredCount}
                </strong>
                개
              </span>
            </div>
          </div>
        </div>

        {/* 이름 검색창 및 업종 필터 바 */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              aria-label="음식점 이름 또는 키워드 검색"
              value={searchQuery}
              onChange={(e) => onChangeSearchQuery(e.target.value)}
              placeholder="음식점 상호명·대표메뉴·동네 검색 (예: 연남토마, 하하, 라자냐)"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="검색어 지우기"
                onClick={() => onChangeSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label="업종 필터"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar"
          >
            {RESTAURANT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count = categoryCounts[category] ?? 0;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectCategory(category)}
                  className={`shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/80 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
