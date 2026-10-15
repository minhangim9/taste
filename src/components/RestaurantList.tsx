"use client";

import {
  ChevronRight,
  Database,
  MapPin,
  MapPinOff,
  Navigation,
  Phone,
  RotateCcw,
  Sparkles,
  Utensils,
} from "lucide-react";
import { formatDistance } from "@/lib/geo";
import { RadiusOption, RestaurantWithDistance } from "@/types/restaurant";

interface RestaurantListProps {
  restaurants: RestaurantWithDistance[];
  focusedMarkerId: string | null;
  onSelectForMap: (restaurant: RestaurantWithDistance) => void;
  onOpenDetail: (restaurant: RestaurantWithDistance) => void;
  radius: RadiusOption;
  onExpandRadius: (nextRadius: RadiusOption) => void;
  onResetFilters: () => void;
  isGpsMode?: boolean;
  distanceFromPilotAreaKm?: number;
  districtName?: string;
  onSimulatePilotArea?: () => void;
  onSelectRegionManual?: () => void;
  dataSource?: "data_go_kr" | "sample" | "supabase" | "real_data";
}

const CATEGORY_BADGE_STYLES: Record<string, string> = {
  한식: "bg-emerald-50 text-emerald-700 border-emerald-200",
  일식: "bg-sky-50 text-sky-700 border-sky-200",
  중식: "bg-rose-50 text-rose-700 border-rose-200",
  양식: "bg-purple-50 text-purple-700 border-purple-200",
  분식: "bg-orange-50 text-orange-700 border-orange-200",
  "카페/디저트": "bg-amber-50 text-amber-800 border-amber-200",
};

export function RestaurantList({
  restaurants,
  focusedMarkerId,
  onSelectForMap,
  onOpenDetail,
  radius,
  onExpandRadius,
  onResetFilters,
  isGpsMode = false,
  distanceFromPilotAreaKm = 0,
  districtName,
  onSimulatePilotArea,
  onSelectRegionManual,
  dataSource = "sample",
}: RestaurantListProps) {
  if (restaurants.length === 0) {
    const isFarGps = isGpsMode && distanceFromPilotAreaKm > 3;
    const targetRegionLabel = districtName || "선택 지역";

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-2xs space-y-3">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Utensils className="h-6 w-6" />
        </div>

        {isFarGps ? (
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              현재 위치 반경 {formatDistance(radius)} 내 음식점이 없습니다
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              현재 사용자의 실제 GPS 위치가 대상 지역({targetRegionLabel})에서{" "}
              <strong className="text-orange-600">약 {distanceFromPilotAreaKm}km</strong> 떨어져 있습니다.
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              {targetRegionLabel}에 조건에 맞는 음식점이 없습니다
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              선택하신 행정구역(<strong>{targetRegionLabel}</strong>)은 공식 행정구역 체계에 정상 등록되어 있습니다. 현재 필터 조건(업종/검색어/반경)에 일치하는 음식점이 0건이거나 데이터 수집 전 상태입니다.
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {isFarGps && onSimulatePilotArea && (
            <button
              type="button"
              onClick={onSimulatePilotArea}
              className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-xs"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>{targetRegionLabel} 중심으로 위치 설정</span>
            </button>
          )}

          {isFarGps && onSelectRegionManual && (
            <button
              type="button"
              onClick={onSelectRegionManual}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <span>지역 직접 선택하기</span>
            </button>
          )}

          {radius < 3000 && (
            <button
              type="button"
              onClick={() => onExpandRadius(radius === 500 ? 1000 : 3000)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-orange-300 bg-orange-50 px-3.5 py-2 text-xs font-semibold text-orange-800 hover:bg-orange-100"
            >
              <span>반경 {radius === 500 ? "1km" : "3km"}로 넓히기</span>
            </button>
          )}

          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>필터 초기화</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {restaurants.map((item) => {
        const hasCoords =
          typeof item.lat === "number" &&
          typeof item.lng === "number" &&
          !isNaN(item.lat) &&
          !isNaN(item.lng) &&
          item.lat > 0 &&
          item.lng > 0;

        const isFocusedOnMap = focusedMarkerId === item.id;
        const badgeStyle =
          CATEGORY_BADGE_STYLES[item.category] ??
          "bg-slate-100 text-slate-700 border-slate-200";

        const isSupabase = item.source === "supabase";
        const isMois = item.source === "data_go_kr";

        return (
          <article
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (hasCoords) {
                onSelectForMap(item);
              } else {
                onOpenDetail(item);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (hasCoords) {
                  onSelectForMap(item);
                } else {
                  onOpenDetail(item);
                }
              }
            }}
            className={`group cursor-pointer rounded-2xl border p-4 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              isFocusedOnMap
                ? "border-orange-500 bg-orange-50/40 ring-2 ring-orange-200 shadow-xs"
                : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm"
            }`}
          >
            {/* 상단 배지 영역: 실제 데이터/샘플 구분 + 업종 + 지역 + 거리/좌표 상태 */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {/* 데이터 출처 명확한 구분 배지 */}
                {isSupabase ? (
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-300">
                    <Database className="h-2.5 w-2.5 text-emerald-700" />
                    DB 저장
                  </span>
                ) : isMois ? (
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-300">
                    <Sparkles className="h-2.5 w-2.5" />
                    공공데이터
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-300">
                    샘플
                  </span>
                )}

                <span
                  className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${badgeStyle}`}
                >
                  {item.category}
                </span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  {item.gu} {item.dong}
                </span>
              </div>

              {/* 좌표 보유 여부에 따른 거리 표시 */}
              {hasCoords && item.distanceMeters !== null ? (
                <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                  <MapPin className="h-3 w-3 text-orange-400" />
                  {formatDistance(item.distanceMeters)}
                </span>
              ) : (
                <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500 border border-slate-200">
                  <MapPinOff className="h-3 w-3 text-slate-400" />
                  좌표 미제공
                </span>
              )}
            </div>

            {/* 음식점 이름 및 관리번호 */}
            <div className="mt-2.5 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h2>
                {item.originalId && (
                  <p className="text-[10px] text-slate-400 font-mono">
                    식별번호: {item.originalId}
                  </p>
                )}
              </div>

              {isFocusedOnMap && (
                <span className="shrink-0 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700">
                  지도 선택됨
                </span>
              )}
            </div>

            {/* 특징/인허가 요약 */}
            <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {item.summary}
            </p>

            {/* 실제 주소 및 전화번호 */}
            <div className="mt-2 space-y-1 text-xs text-slate-500">
              <p className="truncate">{item.roadAddress || item.jibunAddress}</p>
              {item.phone && (
                <p className="flex items-center gap-1 text-slate-600 font-medium">
                  <Phone className="h-3 w-3 text-slate-400" />
                  <span>{item.phone}</span>
                </p>
              )}
            </div>

            {/* 태그 목록 */}
            <div className="mt-2.5 flex flex-wrap items-center gap-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 하단 액션 바 */}
            <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
              {hasCoords ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 group-hover:underline">
                  <Navigation className="h-3.5 w-3.5" />
                  <span>지도에서 위치 보기</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPinOff className="h-3.5 w-3.5" />
                  <span>좌표 정보 없음 (목록 전용)</span>
                </span>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetail(item);
                }}
                className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 transition-colors"
              >
                <span>상세보기</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
