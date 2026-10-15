import { SAMPLE_RESTAURANTS } from "@/data/sample-restaurants";
import { parseAndConvertCoordinates } from "@/lib/geo";
import { Restaurant, RestaurantCategory } from "@/types/restaurant";

export interface ApiStatusInfo {
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  endpoint?: string;
  totalFetched?: number;
  withCoordinatesCount?: number;
  withoutCoordinatesCount?: number;
}

export interface LiveRestaurantsResponse {
  restaurants: Restaurant[];
  source: "data_go_kr" | "sample" | "supabase" | "real_data";
  sourceName: string;
  apiStatus: ApiStatusInfo;
}

/**
 * 행정안전부 업태명을 화면 표시용 표준 업종(RestaurantCategory)으로 매핑
 */
export function mapMoisCategory(
  original: string = ""
): Exclude<RestaurantCategory, "전체"> {
  const cat = (original || "").trim();
  if (
    /한식|탕|찌개|구이|백반|국밥|삼겹살|갈비|냉면|해장국|족발|보쌈|죽|샤브|순대/i.test(
      cat
    )
  ) {
    return "한식";
  }
  if (
    /일식|초밥|스시|돈가스|돈까스|라멘|우동|사시미|회|이자카야/i.test(cat)
  ) {
    return "일식";
  }
  if (/중식|중화|짜장|짬뽕|탕수육|마라탕|양꼬치/i.test(cat)) {
    return "중식";
  }
  if (
    /양식|경양식|이탈리안|파스타|피자|스테이크|패밀리레스토랑|패스트푸드|햄버거/i.test(
      cat
    )
  ) {
    return "양식";
  }
  if (/분식|떡볶이|김밥|라면|튀김|만두/i.test(cat)) {
    return "분식";
  }
  if (
    /카페|커피|디저트|베이커리|제과점|찻집|아이스크림|휴게음식점|주점|호프/i.test(
      cat
    )
  ) {
    return "카페/디저트";
  }
  return "한식";
}

/**
 * 주소 문자열에서 법정동/행정동 이름 추출
 */
function extractDongFromAddress(
  address: string,
  fallbackDong: string = ""
): string {
  if (!address) return fallbackDong;
  const match = address.match(/([가-힣0-9]+(?:동|가|로\d*길|로))\b/);
  return match ? match[1] : fallbackDong;
}

/**
 * 주소 문자열에서 광역 시/도 명칭 추출 (전국 지원)
 */
function extractCityFromAddress(
  address: string,
  fallbackCity: string = "서울특별시"
): string {
  if (!address) return fallbackCity;
  const match = address.match(/^([가-힣]+(?:특별시|광역시|특별자치시|특별자치도|도))\b/);
  return match ? match[1] : fallbackCity;
}

/**
 * 행정안전부 일반음식점 데이터 API 호출 (서버 전용, 전국 지역 지원)
 * 공식 엔드포인트: https://apis.data.go.kr/1741000/general_restaurants/info
 */
export async function fetchFromMoisGeneralRestaurants(params: {
  city?: string;
  gu?: string;
  dong?: string;
  numOfRows?: number;
  pageNo?: number;
}): Promise<{
  success: boolean;
  restaurants: Restaurant[];
  totalCount: number;
  withCoordinatesCount: number;
  withoutCoordinatesCount: number;
  errorCode?: string;
  errorMessage?: string;
}> {
  const serviceKey = process.env.DATA_GO_KR_SERVICE_KEY?.trim();
  const rawBaseUrl =
    process.env.DATA_GO_KR_GENERAL_RESTAURANTS_URL?.trim() ||
    "https://apis.data.go.kr/1741000/general_restaurants/info";

  // 1. 서버 환경변수 인증키 유무 검증
  if (!serviceKey) {
    return {
      success: false,
      restaurants: [],
      totalCount: 0,
      withCoordinatesCount: 0,
      withoutCoordinatesCount: 0,
      errorCode: "SERVICE_KEY_MISSING",
      errorMessage:
        "공공데이터 일반 인증키(DATA_GO_KR_SERVICE_KEY)가 서버 환경변수에 설정되지 않았습니다. .env.local에 인증키를 입력해 주세요.",
    };
  }

  const city = params.city?.trim() || "";
  const gu = params.gu?.trim() || "";
  const dong =
    params.dong?.trim() && params.dong !== "all" ? params.dong.trim() : "";
  const numOfRows = Math.max(params.numOfRows || 20, 20); // 20건부터 조회
  const pageNo = params.pageNo || 1;

  try {
    const url = new URL(rawBaseUrl);
    url.searchParams.set("serviceKey", serviceKey);
    url.searchParams.set("pageNo", String(pageNo));
    url.searchParams.set("numOfRows", String(numOfRows));
    url.searchParams.set("returnType", "json");

    // 지역 필터 설정 (전국 지원: 중구/동구/서구/남구/북구 등 전국 공통 구 이름일 경우 공식 광역 시/도 명칭을 접두사로 함께 검색)
    const isAmbiguousGu = /^(중구|동구|서구|남구|북구)$/.test(gu);
    let searchQuery = "";
    if (city && gu) {
      searchQuery = isAmbiguousGu
        ? (dong ? `${city} ${gu} ${dong}` : `${city} ${gu}`)
        : (dong ? `${gu} ${dong}` : gu);
    } else if (gu) {
      searchQuery = dong ? `${gu} ${dong}` : gu;
    } else if (city) {
      searchQuery = dong ? `${city} ${dong}` : city;
    }

    if (searchQuery) {
      url.searchParams.set("cond[LOTNO_ADDR::LIKE]", searchQuery);
    }
    url.searchParams.set("cond[SALS_STTS_CD::EQ]", "01"); // 영업/정상 업소 우선 조회

    const res = await fetch(url.toString(), {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return {
        success: false,
        restaurants: [],
        totalCount: 0,
        withCoordinatesCount: 0,
        withoutCoordinatesCount: 0,
        errorCode: `HTTP_${res.status}`,
        errorMessage: `공공데이터 API 서버 응답 오류 (상태 코드 ${res.status}): ${errText.slice(
          0,
          150
        )}`,
      };
    }

    const text = await res.text();
    // 공공데이터포털은 에러 발생 시 200 OK와 함께 XML 에러를 반환하는 경우가 있음
    if (
      text.includes("<OpenAPI_ServiceResponse>") ||
      text.includes("<cmmMsgHeader>")
    ) {
      const errMsgMatch =
        text.match(/<returnAuthMsg>(.*?)<\/returnAuthMsg>/i) ||
        text.match(/<errMsg>(.*?)<\/errMsg>/i);
      const errDesc = errMsgMatch
        ? errMsgMatch[1]
        : "인증 실패 또는 잘못된 요청입니다.";
      return {
        success: false,
        restaurants: [],
        totalCount: 0,
        withCoordinatesCount: 0,
        withoutCoordinatesCount: 0,
        errorCode: "API_AUTH_ERROR",
        errorMessage: `공공데이터포털 응답 오류: ${errDesc}`,
      };
    }

    let json: any;
    try {
      json = JSON.parse(text);
    } catch {
      return {
        success: false,
        restaurants: [],
        totalCount: 0,
        withCoordinatesCount: 0,
        withoutCoordinatesCount: 0,
        errorCode: "INVALID_JSON_RESPONSE",
        errorMessage: "공공데이터 API로부터 유효한 JSON 형식을 수신하지 못했습니다.",
      };
    }

    // 공식 응답 구조 파싱 (response.body.items.item 혹은 response.body.items 등)
    let rawItems: any[] = [];
    const body = json?.response?.body || json?.body;
    if (body) {
      if (Array.isArray(body.items)) {
        rawItems = body.items;
      } else if (body.items?.item) {
        rawItems = Array.isArray(body.items.item)
          ? body.items.item
          : [body.items.item];
      }
    }

    if (!Array.isArray(rawItems) || rawItems.length === 0) {
      return {
        success: true,
        restaurants: [],
        totalCount: 0,
        withCoordinatesCount: 0,
        withoutCoordinatesCount: 0,
        errorCode: "NO_RESULTS",
        errorMessage: `'${searchQuery}' 지역에 조회된 공공데이터 음식점이 없습니다.`,
      };
    }

    let withCoordinatesCount = 0;
    let withoutCoordinatesCount = 0;

    const mapped: Restaurant[] = rawItems.map((item: any, idx: number) => {
      // 행정안전부 공식 필드 추출 (MNG_NO, BPLC_NM, SNTTN_BZSTAT_NM, LOTNO_ADDR, ROAD_NM_ADDR, CRD_INFO_X, CRD_INFO_Y, TELNO)
      const managementNo = String(
        item.MNG_NO || item.managementNo || item.MGTNO || item.mgtNo || `gen-${idx + 1}`
      ).trim();
      const bizplcNm = String(
        item.BPLC_NM || item.bizplcNm || item.bizesNm || "일반음식점"
      ).trim();
      const originalCat = String(
        item.SNTTN_BZSTAT_NM ||
          item.BZSTAT_SE_NM ||
          item.bstNm ||
          item.sanittnIndutypeNm ||
          item.UPTAE_NM ||
          item.uptaeNm ||
          "일반음식점"
      ).trim();
      const siteRdAddress = String(
        item.ROAD_NM_ADDR || item.siteRdAddress || item.RDN_WHL_ADDR || item.roadAddress || ""
      ).trim();
      const sitePostalAddress = String(
        item.LOTNO_ADDR || item.sitePostalAddress || item.SITE_WHL_ADDR || item.jibunAddress || ""
      ).trim();
      const siteTel = String(
        item.TELNO || item.siteTel || item.SITE_TEL || item.telNo || ""
      ).trim();
      const trdStateNm = String(
        item.DTL_SALS_STTS_NM || item.SALS_STTS_NM || item.trdStateNm || item.TRD_STATE_NM || "영업"
      ).trim();

      // 좌표 추출 및 WGS84 변환 (행정안전부 CRD_INFO_X, CRD_INFO_Y Bessel TM -> WGS84)
      const rawX = item.CRD_INFO_X ?? item.x ?? item.X ?? item.lon ?? null;
      const rawY = item.CRD_INFO_Y ?? item.y ?? item.Y ?? item.lat ?? null;
      const coords = parseAndConvertCoordinates(rawX, rawY);

      if (coords.lat !== null && coords.lng !== null) {
        withCoordinatesCount++;
      } else {
        withoutCoordinatesCount++;
      }

      const itemDong =
        dong ||
        extractDongFromAddress(siteRdAddress || sitePostalAddress, gu);

      const itemCity =
        city ||
        extractCityFromAddress(siteRdAddress || sitePostalAddress, "서울특별시");

      const standardCategory = mapMoisCategory(originalCat);

      return {
        id: `mois-${managementNo}`,
        originalId: managementNo,
        name: bizplcNm,
        category: standardCategory,
        originalCategory: originalCat,
        city: itemCity,
        gu,
        dong: itemDong,
        roadAddress: siteRdAddress || sitePostalAddress || "주소 정보 없음",
        jibunAddress: sitePostalAddress || siteRdAddress || "",
        lat: coords.lat,
        lng: coords.lng,
        phone: siteTel || undefined,
        placeUrl: `https://map.kakao.com/link/search/${encodeURIComponent(
          bizplcNm
        )}`,
        summary: `[공공데이터] ${originalCat} · ${trdStateNm} 업소`,
        tags: [standardCategory, originalCat, itemDong, "행정안전부"].filter(
          Boolean
        ),
        source: "data_go_kr",
        sourceName: "행정안전부 일반음식점 데이터",
        trdStateNm,
      };
    });

    return {
      success: true,
      restaurants: mapped,
      totalCount: mapped.length,
      withCoordinatesCount,
      withoutCoordinatesCount,
    };
  } catch (err: any) {
    return {
      success: false,
      restaurants: [],
      totalCount: 0,
      withCoordinatesCount: 0,
      withoutCoordinatesCount: 0,
      errorCode: "FETCH_EXCEPTION",
      errorMessage: `공공데이터 서버 통신 중 예외가 발생했습니다: ${
        err?.message || err
      }`,
    };
  }
}

import {
  fetchRestaurantsFromSupabase,
  upsertRestaurantsToSupabase,
  searchNearbyRestaurantsFromSupabase,
} from "@/lib/supabase";
import { RestaurantWithDistance } from "@/types/restaurant";
import { calculateDistanceMeters } from "@/lib/geo";

export interface GetLiveRestaurantsParams {
  city?: string;
  gu?: string;
  dong?: string;
  numOfRows?: number;
  pageNo?: number;
  forceRefresh?: boolean;
  lat?: number;
  lng?: number;
  radius?: number; // 500, 1000, 3000
  category?: string;
  query?: string;
}

/**
 * 실제 음식점 목록 조회 및 주변 검색 통합 서비스
 * 1. PostGIS 주변 검색: lat, lng가 주어지면 Supabase PostGIS RPC(search_nearby_restaurants) 우선 조회
 * 2. 반경(500m/1km/3km), 업종 필터, 이름 검색어, 거리 계산/정렬을 DB/서버에서 수행
 * 3. DB에 데이터가 없거나 동기화(forceRefresh) 요청 시: 행정안전부 공공데이터 API 호출 및 Supabase 자동 Upsert
 * 4. 새로고침 후에도 Supabase DB에서 영구 보존된 실제 데이터 유지
 */
export async function getLiveRestaurants(
  params: GetLiveRestaurantsParams
): Promise<LiveRestaurantsResponse> {
  const city =
    params.city && params.city !== "all" ? params.city.trim() : undefined;
  const gu = params.gu && params.gu !== "all" ? params.gu.trim() : undefined;
  const dong =
    params.dong && params.dong !== "all" ? params.dong.trim() : undefined;
  const numOfRows = Math.max(params.numOfRows || 20, 20);
  const forceRefresh = Boolean(params.forceRefresh);
  const hasCoords =
    typeof params.lat === "number" &&
    typeof params.lng === "number" &&
    !isNaN(params.lat) &&
    !isNaN(params.lng) &&
    params.lat > 0 &&
    params.lng > 0;

  // 1. PostGIS 주변 검색 (lat, lng가 주어진 경우 Supabase DB 우선 확인)
  if (hasCoords && !forceRefresh) {
    const nearbyData = await searchNearbyRestaurantsFromSupabase({
      lat: params.lat!,
      lng: params.lng!,
      radiusMeters: params.radius || 3000,
      category: params.category,
      query: params.query,
      city,
      gu,
      dong,
      limit: numOfRows,
    });

    if (nearbyData && nearbyData.length > 0) {
      const withCoords = nearbyData.filter((r) => r.lat !== null).length;
      return {
        restaurants: nearbyData,
        source: "supabase",
        sourceName: "Supabase DB (PostGIS 공간 검색)",
        apiStatus: {
          success: true,
          endpoint: "Supabase PostGIS: search_nearby_restaurants",
          totalFetched: nearbyData.length,
          withCoordinatesCount: withCoords,
          withoutCoordinatesCount: nearbyData.length - withCoords,
        },
      };
    }
  }

  // 2. 동네 기준 Supabase DB 우선 확인 (lat, lng 미제공 시 일반 목록)
  if (!hasCoords && !forceRefresh) {
    const dbData = await fetchRestaurantsFromSupabase({ city, gu, dong });
    if (dbData && dbData.length > 0) {
      const withCoords = dbData.filter(
        (r) => r.lat !== null && r.lng !== null
      ).length;
      return {
        restaurants: dbData,
        source: "supabase",
        sourceName: "Supabase 데이터베이스 (영구 보존)",
        apiStatus: {
          success: true,
          endpoint: "Supabase DB: public.restaurants",
          totalFetched: dbData.length,
          withCoordinatesCount: withCoords,
          withoutCoordinatesCount: dbData.length - withCoords,
        },
      };
    }
  }
  // 2. 행정안전부 일반음식점 공공데이터 API 호출 (20건부터)
  const moisResult = await fetchFromMoisGeneralRestaurants({
    city,
    gu,
    dong,
    numOfRows,
    pageNo: params.pageNo || 1,
  });

  // 3. 공공데이터 수집 성공 시: Supabase DB에 서버 전용으로 Upsert (중복 방지 및 갱신)
  if (moisResult.success && moisResult.restaurants.length > 0) {
    await upsertRestaurantsToSupabase(moisResult.restaurants);

    // 1) 좌표가 주어진 경우 PostGIS 주변 검색으로 반경/거리 정렬된 결과 반환
    if (hasCoords) {
      const nearbySaved = await searchNearbyRestaurantsFromSupabase({
        lat: params.lat!,
        lng: params.lng!,
        radiusMeters: params.radius || 3000,
        category: params.category,
        query: params.query,
        city,
        gu,
        dong,
        limit: numOfRows,
      });

      if (nearbySaved && nearbySaved.length > 0) {
        return {
          restaurants: nearbySaved,
          source: "supabase",
          sourceName: "Supabase DB 저장됨 (PostGIS 공간 검색)",
          apiStatus: {
            success: true,
            endpoint: "Supabase PostGIS: search_nearby_restaurants",
            totalFetched: nearbySaved.length,
            withCoordinatesCount: nearbySaved.filter((r) => r.lat !== null).length,
            withoutCoordinatesCount: nearbySaved.filter((r) => r.lat === null).length,
          },
        };
      }
    }

    // 2) 일반 목록 조회
    const savedData = await fetchRestaurantsFromSupabase({ city, gu, dong });
    let finalRestaurants: (Restaurant | RestaurantWithDistance)[] =
      savedData && savedData.length > 0 ? savedData : moisResult.restaurants;
    const isSavedInDb = Boolean(savedData && savedData.length > 0);

    if (hasCoords) {
      finalRestaurants = finalRestaurants
        .map((r) => ({
          ...r,
          distanceMeters: calculateDistanceMeters(
            params.lat!,
            params.lng!,
            r.lat,
            r.lng
          ),
        }))
        .filter((r) => {
          if (params.radius && r.distanceMeters !== null) {
            if (r.distanceMeters > params.radius) return false;
          }
          if (params.category && params.category !== "전체") {
            if (r.category !== params.category) return false;
          }
          if (params.query) {
            const q = params.query.toLowerCase().trim();
            const match =
              r.name.toLowerCase().includes(q) ||
              r.roadAddress?.toLowerCase().includes(q) ||
              r.jibunAddress?.toLowerCase().includes(q);
            if (!match) return false;
          }
          return true;
        })
        .sort((a, b) => {
          if (a.distanceMeters == null && b.distanceMeters == null) return 0;
          if (a.distanceMeters == null) return 1;
          if (b.distanceMeters == null) return -1;
          return a.distanceMeters - b.distanceMeters;
        })
        .slice(0, numOfRows);
    }

    return {
      restaurants: finalRestaurants,
      source: isSavedInDb ? "supabase" : "data_go_kr",
      sourceName: isSavedInDb
        ? "Supabase DB 저장됨 (행정안전부 공공데이터 연동)"
        : "행정안전부 일반음식점 데이터",
      apiStatus: {
        success: true,
        endpoint: isSavedInDb
          ? "Supabase DB (동기화 완료)"
          : "https://apis.data.go.kr/1741000/general_restaurants/info",
        totalFetched: finalRestaurants.length,
        withCoordinatesCount: finalRestaurants.filter((r) => r.lat !== null)
          .length,
        withoutCoordinatesCount: finalRestaurants.filter((r) => r.lat === null)
          .length,
      },
    };
  }

  // 4. 공공데이터 API 결과 없음인 경우
  if (moisResult.success && moisResult.totalCount === 0) {
    return {
      restaurants: [],
      source: "data_go_kr",
      sourceName: "행정안전부 일반음식점 데이터",
      apiStatus: {
        success: true,
        errorCode: "NO_RESULTS",
        errorMessage:
          moisResult.errorMessage ||
          "선택하신 지역에 등록된 공공데이터 음식점이 없습니다.",
        totalFetched: 0,
        withCoordinatesCount: 0,
        withoutCoordinatesCount: 0,
      },
    };
  }

  // 5. 공공데이터 API 실패 시: DB에 이전 저장 데이터가 있는지 확인
  const fallbackDbData = await fetchRestaurantsFromSupabase({ city, gu, dong });
  if (fallbackDbData && fallbackDbData.length > 0) {
    return {
      restaurants: fallbackDbData,
      source: "supabase",
      sourceName: "Supabase 데이터베이스 (이전 저장 데이터)",
      apiStatus: {
        success: true,
        totalFetched: fallbackDbData.length,
        withCoordinatesCount: fallbackDbData.filter((r) => r.lat !== null)
          .length,
        withoutCoordinatesCount: fallbackDbData.filter((r) => r.lat === null)
          .length,
      },
    };
  }

  // 6. DB도 비어있고 API도 실패한 경우: 샘플 데이터로 안전하게 대체
  return {
    restaurants: SAMPLE_RESTAURANTS,
    source: "sample",
    sourceName: "샘플 데이터",
    apiStatus: {
      success: false,
      errorCode: moisResult.errorCode || "API_ERROR",
      errorMessage:
        moisResult.errorMessage ||
        "공공데이터 연동 실패로 샘플 데이터를 표시합니다.",
      totalFetched: SAMPLE_RESTAURANTS.length,
      withCoordinatesCount: SAMPLE_RESTAURANTS.filter((r) => r.lat !== null)
        .length,
      withoutCoordinatesCount: 0,
    },
  };
}
