const EARTH_RADIUS_METERS = 6371000;

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateDistanceMeters(lat1, lng1, lat2, lng2) {
  if (lat1 == null || lng1 == null || lat2 == null || lng2 == null) return null;
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

function formatDistance(meters) {
  if (meters == null) return '좌표 미제공';
  if (meters < 1000) return `${meters}m`;
  return `${(meters / 1000).toFixed(1)}km`;
}

console.log('========================================================');
console.log('1. 좌표 순서 및 거리 단위 검증 (PostGIS vs WGS84 Geodesic)');
console.log('========================================================');

// 서울 마포구 연남동 중심점 (연남동 주민센터 인근)
const CENTER = {
  name: '연남동 중심 기준점',
  lat: 37.5658, // 위도 (Latitude, Y축)
  lng: 126.9242, // 경도 (Longitude, X축)
};

console.log(`기준점: ${CENTER.name} (위도 lat: ${CENTER.lat}, 경도 lng: ${CENTER.lng})`);
console.log('PostGIS 호출 규약: ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography');
console.log('※ 필수 확인: ST_MakePoint의 첫 번째 인자는 경도(lng, X), 두 번째 인자는 위도(lat, Y)');

// 테스트 샘플 음식점 (실제 연남동 및 마포구 공공데이터 좌표)
const TEST_TARGETS = [
  {
    name: '타겟 1 (연남동 동진시장 부근 - 초근접)',
    lat: 37.5650,
    lng: 126.9240,
    category: '카페/디저트',
  },
  {
    name: '타겟 2 (그랜드마마 - 실제 연남동 공공데이터 음식점)',
    lat: 37.56087,
    lng: 126.922825,
    category: '한식',
  },
  {
    name: '타겟 3 (홍대입구역 2번 출구 부근 - 1km 이내)',
    lat: 37.5572,
    lng: 126.9254,
    category: '일식',
  },
  {
    name: '타겟 4 (합정역 인근 - 1km 초과, 3km 이내)',
    lat: 37.5495,
    lng: 126.9140,
    category: '양식',
  },
  {
    name: '타겟 5 (마포역 인근 - 3km 초과 반경 밖)',
    lat: 37.5398,
    lng: 126.9458,
    category: '한식',
  },
  {
    name: '타겟 6 (강남구 역삼역 - 완전 외곽)',
    lat: 37.5006,
    lng: 127.0364,
    category: '한식',
  },
];

console.log('\n--- 2. 각 타겟별 직선거리 계산 (단위: 미터) ---');
const calculatedTargets = TEST_TARGETS.map(t => {
  const dist = calculateDistanceMeters(CENTER.lat, CENTER.lng, t.lat, t.lng);
  return {
    ...t,
    distanceMeters: dist,
    formatted: formatDistance(dist),
  };
});

calculatedTargets.forEach(t => {
  console.log(`[${t.name}] 직선거리: ${t.distanceMeters}m (${t.formatted}) - 업종: ${t.category}`);
});

console.log('\n========================================================');
console.log('3. 반경 500m / 1km / 3km 필터링 (반경 안/밖 구분 검증)');
console.log('========================================================');

const RADIUS_OPTIONS = [500, 1000, 3000];

RADIUS_OPTIONS.forEach(radius => {
  console.log(`\n▶ [반경 ${radius}m (${radius >= 1000 ? radius / 1000 + 'km' : radius + 'm'}) 검색]`);
  const inside = calculatedTargets.filter(t => t.distanceMeters <= radius);
  const outside = calculatedTargets.filter(t => t.distanceMeters > radius);

  console.log(`  ✓ 반경 안 (${inside.length}건):`);
  inside.forEach(t => console.log(`     - [포함] ${t.name}: ${t.distanceMeters}m`));

  console.log(`  ✗ 반경 밖 (${outside.length}건 - 엄격히 제외됨):`);
  outside.forEach(t => console.log(`     - [제외] ${t.name}: ${t.distanceMeters}m`));
});

console.log('\n========================================================');
console.log('4. 업종 필터 및 이름 검색어 함께 적용 검증');
console.log('========================================================');

// 반경 1km 내 + 업종 '한식'
const filteredByCat = calculatedTargets.filter(t => t.distanceMeters <= 1000 && t.category === '한식');
console.log(`▶ 반경 1km + 업종 '한식' 결과 (${filteredByCat.length}건):`);
filteredByCat.forEach(t => console.log(`   - ${t.name} (${t.category}, ${t.distanceMeters}m)`));

// 반경 3km 내 + 이름 검색어 '그랜드'
const filteredByName = calculatedTargets.filter(t => t.distanceMeters <= 3000 && t.name.includes('그랜드'));
console.log(`\n▶ 반경 3km + 검색어 '그랜드' 결과 (${filteredByName.length}건):`);
filteredByName.forEach(t => console.log(`   - ${t.name} (${t.category}, ${t.distanceMeters}m)`));

console.log('\n========================================================');
console.log('5. 잘못된 좌표 순서(위도/경도 반전 오류) 시뮬레이션');
console.log('========================================================');
// 만약 X에 lat(37.56), Y에 lng(126.92)를 넣었을 때의 계산
const reversedDist = calculateDistanceMeters(CENTER.lat, CENTER.lng, 126.924, 37.565);
console.log(`경도/위도가 뒤바뀌었을 때 계산되는 비정상 거리: ${reversedDist}m (약 ${(reversedDist / 1000).toFixed(0)}km)`);
console.log('판정: 좌표 순서가 뒤바뀌면 3000m 반경 검색 시 모든 한국 음식점이 0건으로 누락되므로');
console.log('      반드시 ST_MakePoint(lng, lat) [경도 우선]으로 실행되어야 함을 확인하였습니다.');
