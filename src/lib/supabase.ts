import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Restaurant, RestaurantWithDistance } from "@/types/restaurant";
import { calculateDistanceMeters } from "@/lib/geo";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://dugahlhohvyyjkproagg.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_Ug2cybjtEY8YUhK2EL9wyQ_JFzlx0kC";

// 1. 브라우저/클라이언트용 공개 클라이언트 (RLS SELECT 전용)
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);

/**
 * 2. 서버 전용 Supabase 클라이언트 생성 (데이터 수집 및 수정용)
 * SUPABASE_SERVICE_ROLE_KEY가 환경변수에 설정되어 있으면 RLS를 우회하여 안전하게 서버에서만 쓰기 작업을 수행합니다.
 * 브라우저에 비밀 키가 노출되지 않도록 NEXT_PUBLIC_ 접두사 없이 관리됩니다.
 */
export function getServerSupabaseClient(): SupabaseClient {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const apiKey = serviceRoleKey || supabaseAnonKey;
  return createClient(supabaseUrl, apiKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Supabase DB row를 애플리케이션 Restaurant 도메인 모델로 변환
 */
export function mapRowToRestaurant(row: any): Restaurant {
  const hasCoords =
    row.lat !== null &&
    row.lat !== undefined &&
    row.lng !== null &&
    row.lng !== undefined &&
    !isNaN(Number(row.lat)) &&
    !isNaN(Number(row.lng)) &&
    Number(row.lat) > 0 &&
    Number(row.lng) > 0;

  return {
    id: String(row.id),
    originalId: row.original_id ? String(row.original_id) : undefined,
    name: String(row.name),
    category: row.category,
    originalCategory: row.original_category || undefined,
    city: row.city || "서울특별시",
    gu: row.gu || "마포구",
    dong: row.dong || "",
    roadAddress: row.road_address || row.jibun_address || "",
    jibunAddress: row.jibun_address || row.road_address || "",
    lat: hasCoords ? Number(row.lat) : null,
    lng: hasCoords ? Number(row.lng) : null,
    phone: row.phone || undefined,
    placeUrl: row.place_url || undefined,
    summary:
      row.summary ||
      `[DB 저장] ${row.original_category || row.category} · ${
        row.trd_state_nm || "영업"
      }`,
    tags: Array.isArray(row.tags) ? row.tags : [],
    source: "supabase",
    sourceName: row.source_name || "Supabase 데이터베이스",
    trdStateNm: row.trd_state_nm || undefined,
  };
}

/**
 * Supabase DB의 restaurants 테이블에서 동네별 음식점 목록 조회 (서버/클라이언트 겸용)
 */
export async function fetchRestaurantsFromSupabase(params?: {
  city?: string;
  gu?: string;
  dong?: string;
  limit?: number;
}): Promise<Restaurant[] | null> {
  try {
    const client = getServerSupabaseClient();
    let query = client
      .from("restaurants")
      .select("*")
      .order("updated_at", { ascending: false });

    if (params?.city && params.city !== "all") {
      query = query.ilike("city", `%${params.city.slice(0, 2)}%`);
    }

    if (params?.gu && params.gu !== "all") {
      query = query.eq("gu", params.gu);
    }

    if (params?.dong && params.dong !== "all") {
      query = query.ilike("dong", `%${params.dong}%`);
    }

    if (params?.limit) {
      query = query.limit(params.limit);
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
      return null;
    }

    return data.map(mapRowToRestaurant);
  } catch (err) {
    console.warn("Supabase 조회 예외:", err);
    return null;
  }
}

export interface NearbySearchParams {
  lat: number;
  lng: number;
  radiusMeters?: number; // 500, 1000, 3000
  category?: string;
  query?: string;
  city?: string;
  gu?: string;
  dong?: string;
  limit?: number;
}

/**
 * PostGIS 기반 주변 음식점 검색 (서버 전용)
 * 1. search_nearby_restaurants RPC 함수 호출 (PostGIS ST_DWithin + ST_Distance + GIST 공간 인덱스)
 * 2. DB RPC 함수 미등록 시: Supabase 테이블 조회 후 서버 사이드 반경/거리 정렬 Fallback
 */
export async function searchNearbyRestaurantsFromSupabase(
  params: NearbySearchParams
): Promise<RestaurantWithDistance[] | null> {
  const radius = params.radiusMeters || 3000;
  const limit = params.limit || 50;

  try {
    const client = getServerSupabaseClient();

    // 1. PostGIS RPC 함수(search_nearby_restaurants) 호출
    const { data: rpcData, error: rpcError } = await client.rpc(
      "search_nearby_restaurants",
      {
        p_lat: params.lat,
        p_lng: params.lng,
        p_radius_meters: radius,
        p_category:
          params.category && params.category !== "전체" ? params.category : null,
        p_query: params.query?.trim() || null,
        p_gu: params.gu && params.gu !== "all" ? params.gu : null,
        p_dong: params.dong && params.dong !== "all" ? params.dong : null,
        p_limit: limit,
      }
    );

    if (!rpcError && Array.isArray(rpcData) && rpcData.length > 0) {
      return rpcData.map((row: any) => ({
        ...mapRowToRestaurant(row),
        distanceMeters:
          row.distance_meters !== null && row.distance_meters !== undefined
            ? Math.round(Number(row.distance_meters))
            : calculateDistanceMeters(
                params.lat,
                params.lng,
                Number(row.lat),
                Number(row.lng)
              ),
      }));
    }

    // 2. RPC 함수가 아직 없거나 오류 발생 시 Fallback: 서버 사이드 직선거리 계산 및 필터링
    let query = client.from("restaurants").select("*");
    if (params.city && params.city !== "all") {
      query = query.ilike("city", `%${params.city.slice(0, 2)}%`);
    }
    if (params.gu && params.gu !== "all") {
      query = query.eq("gu", params.gu);
    }
    if (params.dong && params.dong !== "all") {
      query = query.ilike("dong", `%${params.dong}%`);
    }
    if (params.category && params.category !== "전체") {
      query = query.eq("category", params.category);
    }

    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      return null;
    }

    const keyword = params.query?.trim().toLowerCase();

    const matched: RestaurantWithDistance[] = data
      .map((row: any) => {
        const rest = mapRowToRestaurant(row);
        const distance = calculateDistanceMeters(
          params.lat,
          params.lng,
          rest.lat,
          rest.lng
        );
        return {
          ...rest,
          distanceMeters: distance,
        };
      })
      .filter((item: RestaurantWithDistance) => {
        // 반경 필터 (500m, 1km, 3km)
        if (item.distanceMeters !== null && item.distanceMeters > radius) {
          return false;
        }
        // 이름 및 키워드 검색
        if (keyword) {
          const matchName = item.name.toLowerCase().includes(keyword);
          const matchAddr =
            item.roadAddress.toLowerCase().includes(keyword) ||
            item.jibunAddress.toLowerCase().includes(keyword);
          if (!matchName && !matchAddr) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (a.distanceMeters === null && b.distanceMeters === null) return 0;
        if (a.distanceMeters === null) return 1;
        if (b.distanceMeters === null) return -1;
        return a.distanceMeters - b.distanceMeters;
      })
      .slice(0, limit);

    return matched;
  } catch (err) {
    console.warn("Supabase 주변 검색 예외:", err);
    return null;
  }
}

/**
 * Supabase DB에서 단일 음식점 상세 정보 조회
 */
export async function fetchRestaurantByIdFromSupabase(
  id: string
): Promise<Restaurant | null> {
  try {
    const client = getServerSupabaseClient();
    // 1) id로 검색
    let { data, error } = await client
      .from("restaurants")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    // 2) 없으면 original_id로 검색
    if (!data) {
      const res = await client
        .from("restaurants")
        .select("*")
        .eq("original_id", id)
        .maybeSingle();
      data = res.data;
      error = res.error;
    }

    if (error || !data) return null;
    return mapRowToRestaurant(data);
  } catch {
    return null;
  }
}

/**
 * 공공데이터에서 수집한 음식점 목록을 Supabase DB에 Upsert (서버 전용)
 * - 출처(source)와 원본 ID(original_id) 조합으로 중복 저장 방지
 * - 기존 데이터가 이미 존재할 경우 최신 정보 및 갱신일(updated_at)로 자동 갱신
 * - 영업상태(trd_state_nm)는 제공되는 데이터에만 저장
 */
export async function upsertRestaurantsToSupabase(
  restaurants: Restaurant[]
): Promise<{ success: boolean; count: number; error?: string }> {
  if (!restaurants || restaurants.length === 0) {
    return { success: true, count: 0 };
  }

  try {
    const client = getServerSupabaseClient();

    const rows = restaurants.map((item) => ({
      id: item.id,
      source: item.source || "data_go_kr",
      source_name: item.sourceName || "행정안전부 일반음식점 데이터",
      original_id: item.originalId || item.id,
      name: item.name,
      category: item.category,
      original_category: item.originalCategory || null,
      city: item.city || "서울특별시",
      gu: item.gu || "마포구",
      dong: item.dong,
      road_address: item.roadAddress || null,
      jibun_address: item.jibunAddress || null,
      lat: item.lat,
      lng: item.lng,
      phone: item.phone || null,
      // 영업상태는 제공되는 데이터에만 저장
      trd_state_nm: item.trdStateNm || null,
      place_url: item.placeUrl || null,
      summary: item.summary || null,
      tags: item.tags || [],
      updated_at: new Date().toISOString(),
    }));

    const { data, error } = await client.from("restaurants").upsert(rows, {
      onConflict: "source,original_id",
    });

    if (error) {
      console.warn("Supabase upsert 오류:", error.message);
      return { success: false, count: 0, error: error.message };
    }

    return { success: true, count: rows.length };
  } catch (err: any) {
    console.warn("Supabase upsert 예외:", err?.message || err);
    return {
      success: false,
      count: 0,
      error: err?.message || "DB 저장 중 오류가 발생했습니다.",
    };
  }
}
