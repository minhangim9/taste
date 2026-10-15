/**
 * 음식점 도메인 모델 및 위치/필터 타입 정의
 */

export type RestaurantCategory =
  | "전체"
  | "한식"
  | "일식"
  | "중식"
  | "양식"
  | "분식"
  | "카페/디저트";

export type RadiusOption = 500 | 1000 | 3000;

export type ViewMode = "list" | "map";

export type LocationMode = "gps" | "simulated" | "manual";

export type LocationErrorCode =
  | "PERMISSION_DENIED"
  | "POSITION_UNAVAILABLE"
  | "TIMEOUT"
  | "NOT_SUPPORTED";

export interface GpsState {
  status: "idle" | "requesting" | "success" | "error";
  point: GeoPoint | null;
  errorCode: LocationErrorCode | null;
  errorMessage: string | null;
}

export interface GeoPoint {
  lat: number;
  lng: number;
  label: string;
  accuracyMeters?: number;
}

export interface DongOption {
  code: string;
  name: string;
  center: GeoPoint;
}

export interface SidoOption {
  code: string;
  name: string;
  shortName: string;
  center: GeoPoint;
  isActive: boolean;
}

export interface SigunguOption {
  code: string;
  sidoCode: string;
  sidoName: string;
  name: string;
  fullName: string;
  legacyCode?: string;
  parentCity?: string;
  isGeneralGu?: boolean;
  center: GeoPoint;
  dongs: DongOption[];
  isActive: boolean;
  city: string;
  gu: string;
}

export interface DistrictOption extends SigunguOption {}

export interface Restaurant {
  /** 고유 식별자 */
  id: string;
  /** 공공데이터 원본 고유 관리번호/식별자 (MGTNO / managementNo 등 보존) */
  originalId?: string;
  /** 상호명 */
  name: string;
  /** 업종 구분 (표준 분류) */
  category: Exclude<RestaurantCategory, "전체">;
  /** 공공데이터 원본 업태명 (UPTAE_NM / bstNm 등 보존) */
  originalCategory?: string;
  /** 시/도 */
  city: string;
  /** 시/군/구 */
  gu: string;
  /** 법정동/행정동 */
  dong: string;
  /** 도로명 주소 (RDN_WHL_ADDR / siteRdAddress) */
  roadAddress: string;
  /** 지번 주소 (SITE_WHL_ADDR / sitePostalAddress) */
  jibunAddress: string;
  /** 위도 (좌표가 없는 데이터는 null 처리) */
  lat: number | null;
  /** 경도 (좌표가 없는 데이터는 null 처리) */
  lng: number | null;
  /** 전화번호 (SITE_TEL / siteTel) */
  phone?: string;
  /** 카카오맵 장소 링크 */
  placeUrl?: string;
  /** 특징 및 인허가 요약 (가짜 평점/리뷰 제외) */
  summary: string;
  /** 검색 키워드 태그 */
  tags: string[];
  /** 데이터 출처 구분 ("data_go_kr" | "sample" | "supabase" | "real_data") */
  source: "data_go_kr" | "sample" | "supabase" | "real_data";
  /** 출처 명칭 (예: "행정안전부 일반음식점 데이터", "샘플 데이터" 등) */
  sourceName?: string;
  /** 인허가 영업상태명 (영업, 정상, 폐업 등) */
  trdStateNm?: string;
}

export interface RestaurantWithDistance extends Restaurant {
  /** 기준점으로부터의 직선거리(m) (좌표 미제공 시 null) */
  distanceMeters: number | null;
}

export type SampleRestaurant = Restaurant;

