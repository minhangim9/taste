import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  FileText,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
  Tag,
  Utensils,
} from "lucide-react";
import {
  DEFAULT_SIMULATED_LOCATION,
  REAL_RESTAURANTS,
} from "@/data/real-restaurants";
import { calculateDistanceMeters, formatDistance } from "@/lib/geo";
import { fetchRestaurantByIdFromSupabase } from "@/lib/supabase";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RestaurantDetailPage({
  params,
}: DetailPageProps) {
  const { id } = await params;

  // 1. Supabase DB에서 우선 조회
  const dbRestaurant = await fetchRestaurantByIdFromSupabase(id);

  // 2. DB에 없을 경우 샘플/기존 데이터셋에서 조회
  const restaurant =
    dbRestaurant || REAL_RESTAURANTS.find((item) => item.id === id);

  if (!restaurant) {
    notFound();
  }

  const hasCoords =
    typeof restaurant.lat === "number" &&
    typeof restaurant.lng === "number" &&
    !isNaN(restaurant.lat) &&
    !isNaN(restaurant.lng) &&
    restaurant.lat > 0 &&
    restaurant.lng > 0;

  const distanceFromDefaultCenter = calculateDistanceMeters(
    DEFAULT_SIMULATED_LOCATION.lat,
    DEFAULT_SIMULATED_LOCATION.lng,
    restaurant.lat,
    restaurant.lng
  );

  const kakaoNaviUrl = hasCoords
    ? `https://map.kakao.com/link/to/${encodeURIComponent(
        restaurant.name
      )},${restaurant.lat},${restaurant.lng}`
    : `https://map.kakao.com/link/search/${encodeURIComponent(
        restaurant.name
      )}`;
  const kakaoMapUrl = hasCoords
    ? `https://map.kakao.com/link/map/${encodeURIComponent(
        restaurant.name
      )},${restaurant.lat},${restaurant.lng}`
    : `https://map.kakao.com/link/search/${encodeURIComponent(
        restaurant.name
      )}`;

  const isRealData =
    restaurant.source === "supabase" || restaurant.source === "data_go_kr";

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="mx-auto max-w-2xl px-4 pt-6">
        {/* 상단 뒤로가기 바 */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>목록·지도로 돌아가기</span>
          </Link>

          <div className="flex items-center gap-1.5">
            {isRealData ? (
              <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-900 border border-emerald-300">
                <Sparkles className="h-3 w-3" />
                {restaurant.source === "supabase" ? "DB 저장됨" : "공공데이터"}
              </span>
            ) : (
              <span className="rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900 border border-amber-300">
                샘플
              </span>
            )}
            <span className="rounded-lg bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-900 border border-orange-300">
              {restaurant.category} · {restaurant.dong}
            </span>
          </div>
        </div>

        {/* 메인 상세 카드 */}
        <main className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs sm:p-7 space-y-6">
          {/* 타이틀 영역 */}
          <div className="border-b border-slate-100 pb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 border border-orange-200">
                {restaurant.category}
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                {restaurant.city} {restaurant.gu} {restaurant.dong}
              </span>
            </div>

            <h1 className="mt-2.5 text-2xl font-bold text-slate-900">
              {restaurant.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {restaurant.summary}
            </p>
          </div>

          {/* 기준점 거리 정보 */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-slate-900 p-4 text-white">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Compass className="h-4 w-4 text-orange-400 shrink-0" />
              <span>마포구 중심({DEFAULT_SIMULATED_LOCATION.label}) 거리</span>
            </div>
            <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold">
              약 {formatDistance(distanceFromDefaultCenter)}
            </span>
          </div>

          {/* 데이터 원본 및 저장 정보 */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <FileText className="h-4 w-4 text-slate-600" />
              <span>데이터베이스 및 원본 인허가 정보</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
              <div>
                <span className="text-slate-400">데이터 출처:</span>{" "}
                <strong className="text-slate-800">
                  {restaurant.sourceName || "Supabase 데이터베이스"}
                </strong>
              </div>
              {restaurant.originalId && (
                <div>
                  <span className="text-slate-400">인허가 관리번호:</span>{" "}
                  <span className="font-mono font-semibold text-slate-800">
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
            </div>
          </section>

          {/* 상세 주소 및 기본 정보 */}
          <section className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900">
              위치 및 매장 정보
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>소재지 주소</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">
                  {restaurant.roadAddress}
                </p>
                {restaurant.jibunAddress && (
                  <p className="mt-0.5 text-xs text-slate-500">
                    지번: {restaurant.jibunAddress}
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Phone className="h-3.5 w-3.5 text-orange-600" />
                  <span>전화번호</span>
                </div>
                {restaurant.phone ? (
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="mt-1.5 inline-block text-sm font-semibold text-orange-600 hover:underline"
                  >
                    {restaurant.phone}
                  </a>
                ) : (
                  <p className="mt-1.5 text-xs text-slate-400">
                    전화번호 정보 없음
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Tag className="h-3.5 w-3.5 text-orange-600" />
                <span>키워드 태그</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {restaurant.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 카카오맵 길찾기 & 전화걸기 액션 버튼 */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {restaurant.phone ? (
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                <Phone className="h-4 w-4" />
                <span>전화 걸기</span>
              </a>
            ) : (
              <div className="flex items-center justify-center rounded-2xl bg-slate-100 py-3 text-xs text-slate-400">
                전화번호 미등록
              </div>
            )}

            <a
              href={kakaoNaviUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3 text-sm font-bold text-amber-950 hover:bg-amber-500"
            >
              <Navigation className="h-4 w-4" />
              <span>{hasCoords ? "카카오 길찾기" : "카카오 장소 검색"}</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
