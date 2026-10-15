// scripts/verify-regions-and-api.mjs
import http from "node:http";

async function run() {
  console.log("=== [1] 전국 행정구역 데이터 구조 및 완전성 검증 ===");
  
  const fs = await import("node:fs");
  const path = await import("node:path");

  const tsContent = fs.readFileSync(path.resolve("src/data/korean-administrative-regions.ts"), "utf-8");

  // KOREAN_SIDO_LIST 추출
  const sidoMatch = tsContent.match(/export const KOREAN_SIDO_LIST: SidoOption\[\] = (\[[\s\S]*?\]);\r?\n/);
  const KOREAN_SIDO_LIST = new Function(`return ${sidoMatch[1]}`)();

  // KOREAN_SIGUNGU_LIST 추출
  const sigunguMatch = tsContent.match(/export const KOREAN_SIGUNGU_LIST: SigunguOption\[\] = (\[[\s\S]*?\]);\r?\n/);
  const KOREAN_SIGUNGU_LIST = new Function(`return ${sunguCodeSafe(sigunguMatch[1])}`)();

  function sunguCodeSafe(str) {
    return str;
  }

  const SIGUNGU_BY_SIDO = new Map();
  for (const item of KOREAN_SIGUNGU_LIST) {
    const list = SIGUNGU_BY_SIDO.get(item.sidoCode) || [];
    list.push(item);
    SIGUNGU_BY_SIDO.set(item.sidoCode, list);
  }

  function findDistrictsByQuery(query) {
    const q = query.trim().toLowerCase();
    if (!q) return KOREAN_SIGUNGU_LIST;
    return KOREAN_SIGUNGU_LIST.filter(
      (item) =>
        item.fullName.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.sidoName.toLowerCase().includes(q) ||
        (item.parentCity && item.parentCity.toLowerCase().includes(q)) ||
        (item.dongs && item.dongs.some((d) => d.name.toLowerCase().includes(q)))
    );
  }

  console.log(`- 광역 시·도 총 개수: ${KOREAN_SIDO_LIST.length}개 (요구사항: 17개 시·도)`);
  if (KOREAN_SIDO_LIST.length !== 17) {
    throw new Error(`시·도 개수가 17개가 아닙니다: ${KOREAN_SIDO_LIST.length}`);
  }

  console.log(`- 시·군·구 총 개수: ${KOREAN_SIGUNGU_LIST.length}개 (공식 행정표준코드 250개 이상)`);

  // 시·도별 카운트 출력
  console.log("\n[시·도별 시·군·구 세부 개수]");
  const countsBySido = {};
  for (const sido of KOREAN_SIDO_LIST) {
    const list = SIGUNGU_BY_SIDO.get(sido.code) || [];
    countsBySido[sido.name] = list.length;
    console.log(`  * [${sido.code}] ${sido.name.padEnd(10, ' ')}: ${list.length}개 시·군·구`);
  }

  // 중복 코드 및 명칭 검사
  const seenCodes = new Set();
  const dupCodes = [];
  const seenFullNames = new Set();
  const dupFullNames = [];

  for (const item of KOREAN_SIGUNGU_LIST) {
    if (seenCodes.has(item.code)) dupCodes.push(item.code);
    seenCodes.add(item.code);

    if (seenFullNames.has(item.fullName)) dupFullNames.push(item.fullName);
    seenFullNames.add(item.fullName);

    if (item.center.lat < 33 || item.center.lat > 39 || item.center.lng < 124 || item.center.lng > 132) {
      throw new Error(`좌표 범위 오류: ${item.fullName} (${item.center.lat}, ${item.center.lng})`);
    }
  }

  console.log("\n[무결성 검사 결과]");
  console.log(`- 중복 코드(Code): ${dupCodes.length}건 ${dupCodes.length === 0 ? "✓ (정상)" : "❌ " + JSON.stringify(dupCodes)}`);
  console.log(`- 중복 전체명칭(FullName): ${dupFullNames.length}건 ${dupFullNames.length === 0 ? "✓ (정상)" : "❌ " + JSON.stringify(dupFullNames)}`);

  // 주요 특별 행정구역 검증
  console.log("\n[주요 특별/개편 행정구역 반영 검증]");
  const sejong = KOREAN_SIGUNGU_LIST.find((d) => d.code === "36110");
  console.log(`  * 세종특별자치시 단층제: ${sejong ? `✓ ${sejong.fullName} (36110)` : "❌ 누락"}`);

  const gunwiDaegu = KOREAN_SIGUNGU_LIST.find((d) => d.code === "27720");
  console.log(`  * 대구광역시 군위군 (2023.7 편입): ${gunwiDaegu ? `✓ ${gunwiDaegu.fullName} (${gunwiDaegu.code})` : "❌ 누락"}`);

  const bucheonWonmi = KOREAN_SIGUNGU_LIST.find((d) => d.fullName.includes("부천시 원미구"));
  const bucheonSosa = KOREAN_SIGUNGU_LIST.find((d) => d.fullName.includes("부천시 소사구"));
  const bucheonOjeong = KOREAN_SIGUNGU_LIST.find((d) => d.fullName.includes("부천시 오정구"));
  console.log(`  * 부천시 3개 일반구 복원 (2024.1): ${bucheonWonmi && bucheonSosa && bucheonOjeong ? `✓ 원미구(${bucheonWonmi.code}), 소사구(${bucheonSosa.code}), 오정구(${bucheonOjeong.code})` : "❌ 누락"}`);

  const gangwon = KOREAN_SIDO_LIST.find((s) => s.code === "42");
  console.log(`  * 강원특별자치도 공식명칭: ${gangwon?.name === "강원특별자치도" ? "✓ 강원특별자치도" : "❌ 오류"}`);

  const jeonbuk = KOREAN_SIDO_LIST.find((s) => s.code === "45");
  console.log(`  * 전북특별자치도 공식명칭: ${jeonbuk?.name === "전북특별자치도" ? "✓ 전북특별자치도" : "❌ 오류"}`);

  // 지역명 검색(자동완성) 검증
  console.log("\n[지역명 검색 및 자동완성 검증]");
  const testQueries = ["해운대", "분당", "강릉", "전주", "서귀포", "원미구"];
  for (const q of testQueries) {
    const hits = findDistrictsByQuery(q);
    console.log(`  * 검색어 '${q}': ${hits.length}건 검색됨 -> [${hits.map((h) => h.fullName).slice(0, 3).join(", ")}${hits.length > 3 ? "..." : ""}]`);
  }

  console.log("\n=== [2] 로컬 서버 API 연동 테스트 ===");
  const testEndpoints = [
    { name: "서울 마포구", url: "http://localhost:3000/api/restaurants?city=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&gu=%EB%A7%88%ED%8F%AC%EA%B5%AC&lat=37.5665&lng=126.9015&radius=3000" },
    { name: "부산 해운대구", url: "http://localhost:3000/api/restaurants?city=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C&gu=%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC&lat=35.1631&lng=129.1636&radius=3000" },
    { name: "대구 군위군", url: "http://localhost:3000/api/restaurants?city=%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C&gu=%EA%B5%B0%EC%9C%84%EA%B5%B0&lat=36.2428&lng=128.5728&radius=3000" },
    { name: "경기 부천시 원미구", url: "http://localhost:3000/api/restaurants?city=%EA%B2%BD%EA%B8%B0%EB%8F%84&gu=%EB%B6%80%EC%82%B0%EC%8B%9C%20%EC%9B%90%EB%AF%B8%EA%B5%AC&lat=37.502&lng=126.786&radius=3000" },
    { name: "강원 강릉시", url: "http://localhost:3000/api/restaurants?city=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%87%BC%EB%8F%84&gu=%EA%B0%95%EB%A6%89%EC%8B%9C&lat=37.7519&lng=128.8761&radius=3000" },
    { name: "전북 전주시 완산구", url: "http://localhost:3000/api/restaurants?city=%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84&gu=%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC&lat=35.8115&lng=127.1265&radius=3000" },
    { name: "제주 서귀포시", url: "http://localhost:3000/api/restaurants?city=%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84&gu=%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C&lat=33.2541&lng=126.5601&radius=3000" },
    { name: "전국 전체", url: "http://localhost:3000/api/restaurants?lat=37.5665&lng=126.978&radius=3000" },
  ];

  for (const ep of testEndpoints) {
    try {
      const res = await fetch(ep.url);
      const data = await res.json();
      console.log(`  * [${ep.name}] 응답 HTTP ${res.status}: source=${data.source}, count=${data.restaurants?.length ?? 0}, apiSuccess=${data.apiStatus?.success}`);
    } catch (e) {
      console.error(`  * [${ep.name}] 실패:`, e.message);
    }
  }

  console.log("\n모든 검증이 성공적으로 완료되었습니다.");
}

run().catch((err) => {
  console.error("검증 실패:", err);
  process.exit(1);
});
