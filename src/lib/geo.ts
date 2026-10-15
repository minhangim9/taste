import proj4 from "proj4";

/**
 * 위경도 좌표 간 거리 계산 및 좌표계 변환 유틸리티
 */

// EPSG:5174 (Bessel 1841 중부원점 TM - 행정안전부/지방행정데이터 표준)
proj4.defs(
  "EPSG:5174",
  "+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43"
);

const EARTH_RADIUS_METERS = 6371000;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * 두 위경도 좌표 사이의 직선 거리를 미터(m) 단위로 반환합니다.
 * 좌표가 없거나(null/undefined/NaN) 유효하지 않은 경우 null을 반환합니다.
 */
export function calculateDistanceMeters(
  lat1: number | null | undefined,
  lng1: number | null | undefined,
  lat2: number | null | undefined,
  lng2: number | null | undefined
): number | null {
  if (
    lat1 == null ||
    lng1 == null ||
    lat2 == null ||
    lng2 == null ||
    isNaN(lat1) ||
    isNaN(lng1) ||
    isNaN(lat2) ||
    isNaN(lng2) ||
    lat1 <= 0 ||
    lng1 <= 0 ||
    lat2 <= 0 ||
    lng2 <= 0
  ) {
    return null;
  }

  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(EARTH_RADIUS_METERS * c);
}

/**
 * 미터(m) 거리를 사람이 읽기 쉬운 문자열로 변환합니다. (예: 350m, 1.2km)
 * 거리가 null이거나 유효하지 않은 경우 "좌표 미제공"을 반환합니다.
 */
export function formatDistance(meters: number | null | undefined): string {
  if (meters == null || isNaN(meters)) {
    return "좌표 미제공";
  }
  if (meters < 1000) {
    return `${meters}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}

/**
 * 공공데이터 원본 X, Y 좌표를 분석하여 WGS84 (위도, 경도)로 변환합니다.
 * X, Y가 이미 WGS84이거나 Bessel TM(EPSG:5174)인 경우를 안전하게 판별합니다.
 * 좌표가 없거나 변환할 수 없는 경우 null을 반환합니다.
 */
export function parseAndConvertCoordinates(
  rawX: unknown,
  rawY: unknown
): { lat: number | null; lng: number | null } {
  if (rawX == null || rawY == null) {
    return { lat: null, lng: null };
  }

  const strX = String(rawX).trim();
  const strY = String(rawY).trim();

  if (!strX || !strY) {
    return { lat: null, lng: null };
  }

  const numX = parseFloat(strX);
  const numY = parseFloat(strY);

  if (isNaN(numX) || isNaN(numY) || numX <= 0 || numY <= 0) {
    return { lat: null, lng: null };
  }

  // 1. 이미 WGS84 좌표계인 경우 (한국 경도 약 124~132, 위도 약 33~39)
  if (numX >= 124 && numX <= 132 && numY >= 33 && numY <= 39) {
    return {
      lat: Math.round(numY * 1000000) / 1000000,
      lng: Math.round(numX * 1000000) / 1000000,
    };
  }
  // X와 Y가 [lat, lng] 순서로 들어온 경우
  if (numY >= 124 && numY <= 132 && numX >= 33 && numX <= 39) {
    return {
      lat: Math.round(numX * 1000000) / 1000000,
      lng: Math.round(numY * 1000000) / 1000000,
    };
  }

  // 2. Bessel TM (EPSG:5174) 좌표계인 경우 (중부원점: X 약 100,000~400,000, Y 약 300,000~650,000)
  try {
    const [convertedLng, convertedLat] = proj4("EPSG:5174", "WGS84", [numX, numY]);
    if (
      !isNaN(convertedLat) &&
      !isNaN(convertedLng) &&
      convertedLat >= 33 &&
      convertedLat <= 39 &&
      convertedLng >= 124 &&
      convertedLng <= 132
    ) {
      return {
        lat: Math.round(convertedLat * 1000000) / 1000000,
        lng: Math.round(convertedLng * 1000000) / 1000000,
      };
    }
  } catch {
    // 변환 실패 시
  }

  return { lat: null, lng: null };
}
