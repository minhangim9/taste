"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  Copy,
  Database,
  ExternalLink,
  FileText,
  Info,
  MapPin,
  MapPinOff,
  Navigation,
  Phone,
  Sparkles,
  Tag,
  Utensils,
  X,
} from "lucide-react";
import { formatDistance } from "@/lib/geo";
import { GeoPoint, RestaurantWithDistance } from "@/types/restaurant";

interface RestaurantDetailModalProps {
  restaurant: RestaurantWithDistance | null;
  referencePoint: GeoPoint;
  onClose: () => void;
}

export function RestaurantDetailModal({
  restaurant,
  referencePoint,
  onClose,
}: RestaurantDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!restaurant) return null;

  const hasCoords =
    typeof restaurant.lat === "number" &&
    typeof restaurant.lng === "number" &&
    !isNaN(restaurant.lat) &&
    !isNaN(restaurant.lng) &&
    restaurant.lat > 0 &&
    restaurant.lng > 0;

  const isSupabase = restaurant.source === "supabase";
  const isMois = restaurant.source === "data_go_kr";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(restaurant.roadAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const kakaoMapUrl = hasCoords
    ? `https://map.kakao.com/link/map/${encodeURIComponent(restaurant.name)},${restaurant.lat},${restaurant.lng}`
    : `https://map.kakao.com/link/search/${encodeURIComponent(restaurant.name)}`;

  const kakaoNaviUrl = hasCoords
    ? `https://map.kakao.com/link/to/${encodeURIComponent(restaurant.name)},${restaurant.lat},${restaurant.lng}`
    : `https://map.kakao.com/link/search/${encodeURIComponent(restaurant.name)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-xs sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" />

        {/* 헤더 영역 */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {/* 출처 명확한 구분 배지 */}
              {isSupabase ? (
                <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-300">
                  <Database className="h-3 w-3 text-emerald-700" />
                  Supabase DB 저장됨
                </span>
              ) : isMois ? (
                <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-300">
                  <Sparkles className="h-3 w-3" />
                  실제 공공데이터
                </span>
              ) : (
                <span className="inline-flex items-center gap-0.5 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800 border border-amber-300">
                  샘플 데이터
                </span>
              )}

              <span className="rounded-md bg-orange-50 px-2 py-0.5 text-xs font-semibold text-orange-700 border border-orange-200">
                {restaurant.category}
              </span>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                {restaurant.city} {restaurant.gu} {restaurant.dong}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {restaurant.name}
            </h2>
          </div>

          <button
            type="button"
            aria-label="상세 화면 닫기"
            onClick={onClose}
            className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 거리 요약 배지 */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-white">
          <div className="flex items-center gap-2 text-xs">
            <Navigation className="h-4 w-4 text-orange-400 shrink-0" />
            <span className="text-slate-300">현재 기준점:</span>
            <strong className="font-semibold text-white">
              {referencePoint.label}
            </strong>
          </div>
          {hasCoords && restaurant.distanceMeters !== null ? (
            <span className="rounded-full bg-orange-600 px-2.5 py-0.5 text-xs font-bold text-white">
              직선거리 약 {formatDistance(restaurant.distanceMeters)}
            </span>
          ) : (
            <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-amber-300 border border-slate-700">
              좌표 미제공 (거리 계산 불가)
            </span>
          )}
        </div>

        {/* 공공데이터 원본 정보 보존 섹션 */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <FileText className="h-4 w-4 text-slate-600" />
            <span>데이터 출처 및 인허가 원본 정보</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div>
              <span className="text-slate-400">데이터 출처:</span>{" "}
              <strong className="text-slate-800">
                {restaurant.sourceName ||
                  (isSupabase
                    ? "Supabase 데이터베이스"
                    : isMois
                    ? "행정안전부 일반음식점 데이터"
                    : "샘플 데이터")}
              </strong>
            </div>
            {restaurant.originalId && (
              <div>
                <span className="text-slate-400">원본 식별번호:</span>{" "}
                <span className="font-mono text-slate-800 font-semibold">
                  {restaurant.originalId}
                </span>
              </div>
            )}
            {restaurant.originalCategory && (
              <div>
                <span className="text-slate-400">인허가 원본 업태:</span>{" "}
                <span className="text-slate-800 font-medium">
                  {restaurant.originalCategory}
                </span>
              </div>
            )}
            {restaurant.trdStateNm && (
              <div>
                <span className="text-slate-400">영업 상태:</span>{" "}
                <span className="text-emerald-700 font-bold">
                  {restaurant.trdStateNm}
                </span>
              </div>
            )}
            <div>
              <span className="text-slate-400">좌표 등록 상태:</span>{" "}
              <span className={hasCoords ? "text-emerald-700 font-semibold" : "text-amber-700 font-semibold"}>
                {hasCoords ? `WGS84 (${restaurant.lat?.toFixed(4)}, ${restaurant.lng?.toFixed(4)})` : "공공데이터 좌표 미제공"}
              </span>
            </div>
          </div>
        </div>

        {/* 기본 정보 섹션 */}
        <div className="mt-3 space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            음식점 상세 정보
          </h3>

          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2.5">
              <Utensils className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <div>
                <p className="text-xs font-medium text-slate-500">
                  특징 및 인허가 요약
                </p>
                <p className="mt-0.5 text-slate-800 font-medium">
                  {restaurant.summary}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-slate-500">
                    소재지 주소
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-600">복사 완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-0.5 font-medium text-slate-800">
                  {restaurant.roadAddress}
                </p>
                {restaurant.jibunAddress && (
                  <p className="text-xs text-slate-500">
                    지번: {restaurant.jibunAddress}
                  </p>
                )}
              </div>
            </div>

            {restaurant.phone && (
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium text-slate-500">전화번호</p>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="mt-0.5 inline-block text-orange-600 font-semibold hover:underline"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </div>
            )}

            <div className="flex items-start gap-2.5">
              <Tag className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <div>
                <p className="text-xs font-medium text-slate-500">
                  키워드 태그
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 카카오맵 길찾기 & 전화걸기 액션 바 */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {restaurant.phone ? (
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>전화 걸기</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-3.5 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed"
            >
              <span>전화번호 미등록</span>
            </button>
          )}

          <a
            href={kakaoNaviUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2.5 text-xs font-bold text-amber-950 hover:bg-amber-500"
          >
            <Navigation className="h-3.5 w-3.5" />
            <span>{hasCoords ? "카카오 길찾기" : "카카오 장소 검색"}</span>
          </a>
        </div>

        {/* 하단 닫기 버튼 */}
        <div className="mt-3 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
