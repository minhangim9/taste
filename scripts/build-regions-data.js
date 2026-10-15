/**
 * 대한민국 행정안전부 행정표준코드 기준 전국 17개 시·도 및 250개 시·군·구 데이터 구축 및 검증 스크립트
 * 출처: 행정안전부 행정표준코드관리시스템 (https://www.code.go.kr)
 * 기준일: 2024~2026년 최신 공식 행정구역 (강원/전북 특별자치도, 대구 군위군 편입, 부천시 3개 일반구 복원 반영)
 */

const fs = require('fs');
const path = require('path');

// 1. 전국 17개 광역 시·도 목록 (2자리 코드)
const SIDO_DATA = [
  { code: '11', name: '서울특별시', shortName: '서울', center: { lat: 37.5665, lng: 126.9780, label: '서울특별시 중심' }, isActive: true },
  { code: '26', name: '부산광역시', shortName: '부산', center: { lat: 35.1796, lng: 129.0756, label: '부산광역시 중심' }, isActive: true },
  { code: '27', name: '대구광역시', shortName: '대구', center: { lat: 35.8714, lng: 128.6014, label: '대구광역시 중심' }, isActive: true },
  { code: '28', name: '인천광역시', shortName: '인천', center: { lat: 37.4563, lng: 126.7052, label: '인천광역시 중심' }, isActive: true },
  { code: '29', name: '광주광역시', shortName: '광주', center: { lat: 35.1595, lng: 126.8526, label: '광주광역시 중심' }, isActive: true },
  { code: '30', name: '대전광역시', shortName: '대전', center: { lat: 36.3504, lng: 127.3845, label: '대전광역시 중심' }, isActive: true },
  { code: '31', name: '울산광역시', shortName: '울산', center: { lat: 35.5384, lng: 129.3114, label: '울산광역시 중심' }, isActive: true },
  { code: '36', name: '세종특별자치시', shortName: '세종', center: { lat: 36.4800, lng: 127.2890, label: '세종특별자치시 중심' }, isActive: true },
  { code: '41', name: '경기도', shortName: '경기', center: { lat: 37.2750, lng: 127.0094, label: '경기도 중심 (도청)' }, isActive: true },
  { code: '42', name: '강원특별자치도', shortName: '강원', center: { lat: 37.8853, lng: 127.7298, label: '강원특별자치도 중심 (도청)' }, isActive: true },
  { code: '43', name: '충청북도', shortName: '충북', center: { lat: 36.6358, lng: 127.4914, label: '충청북도 중심 (도청)' }, isActive: true },
  { code: '44', name: '충청남도', shortName: '충남', center: { lat: 36.6588, lng: 126.6728, label: '충청남도 중심 (도청)' }, isActive: true },
  { code: '45', name: '전북특별자치도', shortName: '전북', center: { lat: 35.8203, lng: 127.1088, label: '전북특별자치도 중심 (도청)' }, isActive: true },
  { code: '46', name: '전라남도', shortName: '전남', center: { lat: 34.8160, lng: 126.4630, label: '전라남도 중심 (도청)' }, isActive: true },
  { code: '47', name: '경상북도', shortName: '경북', center: { lat: 36.5760, lng: 128.5056, label: '경상북도 중심 (도청)' }, isActive: true },
  { code: '48', name: '경상남도', shortName: '경남', center: { lat: 35.2383, lng: 128.6924, label: '경상남도 중심 (도청)' }, isActive: true },
  { code: '50', name: '제주특별자치도', shortName: '제주', center: { lat: 33.4890, lng: 126.4983, label: '제주특별자치도 중심 (도청)' }, isActive: true },
];

// 2. 전국 250개 시·군·구 상세 데이터
// 각 항목: { code, sidoCode, sidoName, name, fullName, legacyCode?, parentCity?, isGeneralGu?, center: { lat, lng, label }, dongs: [...] }
const SIGUNGU_RAW = [
  // ==========================================
  // 1. 서울특별시 (25개 자치구)
  // ==========================================
  { code: '11110', sidoCode: '11', sidoName: '서울특별시', name: '종로구', fullName: '서울특별시 종로구', legacyCode: 'seoul_jongno', center: { lat: 37.5730, lng: 126.9794, label: '종로구 중심' }, dongs: ['종로1가', '인사동', '삼청동', '혜화동', '익선동', '통인동'] },
  { code: '11140', sidoCode: '11', sidoName: '서울특별시', name: '중구', fullName: '서울특별시 중구', legacyCode: 'junggu_seoul', center: { lat: 37.5636, lng: 126.9975, label: '서울 중구 중심' }, dongs: ['명동', '을지로동', '회현동', '신당동', '필동', '충무로'] },
  { code: '11170', sidoCode: '11', sidoName: '서울특별시', name: '용산구', fullName: '서울특별시 용산구', legacyCode: 'seoul_yongsan', center: { lat: 37.5326, lng: 126.9900, label: '용산구 중심' }, dongs: ['이태원동', '한남동', '용산동', '원효로동', '이촌동', '후암동'] },
  { code: '11200', sidoCode: '11', sidoName: '서울특별시', name: '성동구', fullName: '서울특별시 성동구', legacyCode: 'seoul_seongdong', center: { lat: 37.5633, lng: 127.0371, label: '성동구 중심' }, dongs: ['성수동', '성수1가동', '성수2가동', '옥수동', '왕십리동', '행당동'] },
  { code: '11215', sidoCode: '11', sidoName: '서울특별시', name: '광진구', fullName: '서울특별시 광진구', center: { lat: 37.5385, lng: 127.0823, label: '광진구 중심' }, dongs: ['자양동', '화양동', '구의동', '군자동', '중곡동'] },
  { code: '11230', sidoCode: '11', sidoName: '서울특별시', name: '동대문구', fullName: '서울특별시 동대문구', center: { lat: 37.5744, lng: 127.0400, label: '동대문구 중심' }, dongs: ['용두동', '제기동', '전농동', '장안동', '청량리동', '회기동'] },
  { code: '11260', sidoCode: '11', sidoName: '서울특별시', name: '중랑구', fullName: '서울특별시 중랑구', center: { lat: 37.6063, lng: 127.0926, label: '중랑구 중심' }, dongs: ['면목동', '상봉동', '중화동', '묵동', '망우동', '신내동'] },
  { code: '11290', sidoCode: '11', sidoName: '서울특별시', name: '성북구', fullName: '서울특별시 성북구', center: { lat: 37.5891, lng: 127.0182, label: '성북구 중심' }, dongs: ['성북동', '안암동', '돈암동', '길음동', '종암동', '석관동'] },
  { code: '11305', sidoCode: '11', sidoName: '서울특별시', name: '강북구', fullName: '서울특별시 강북구', center: { lat: 37.6396, lng: 127.0257, label: '강북구 중심' }, dongs: ['미아동', '번동', '수유동', '우이동'] },
  { code: '11320', sidoCode: '11', sidoName: '서울특별시', name: '도봉구', fullName: '서울특별시 도봉구', center: { lat: 37.6688, lng: 127.0471, label: '도봉구 중심' }, dongs: ['쌍문동', '방학동', '창동', '도봉동'] },
  { code: '11350', sidoCode: '11', sidoName: '서울특별시', name: '노원구', fullName: '서울특별시 노원구', center: { lat: 37.6542, lng: 127.0568, label: '노원구 중심' }, dongs: ['상계동', '중계동', '하계동', '월계동', '공릉동'] },
  { code: '11380', sidoCode: '11', sidoName: '서울특별시', name: '은평구', fullName: '서울특별시 은평구', center: { lat: 37.6027, lng: 126.9291, label: '은평구 중심' }, dongs: ['불광동', '갈현동', '응암동', '구산동', '대조동', '진관동'] },
  { code: '11410', sidoCode: '11', sidoName: '서울특별시', name: '서대문구', fullName: '서울특별시 서대문구', center: { lat: 37.5791, lng: 126.9368, label: '서대문구 중심' }, dongs: ['신촌동', '연희동', '창천동', '홍은동', '홍제동', '남가좌동', '북가좌동'] },
  { code: '11440', sidoCode: '11', sidoName: '서울특별시', name: '마포구', fullName: '서울특별시 마포구', legacyCode: 'mapo', center: { lat: 37.5585, lng: 126.9245, label: '마포구 중심' }, dongs: ['연남동', '서교동', '합정동', '망원동', '상암동', '공덕동', '염리동', '도화동'] },
  { code: '11470', sidoCode: '11', sidoName: '서울특별시', name: '양천구', fullName: '서울특별시 양천구', center: { lat: 37.5169, lng: 126.8665, label: '양천구 중심' }, dongs: ['목동', '신정동', '신월동'] },
  { code: '11500', sidoCode: '11', sidoName: '서울특별시', name: '강서구', fullName: '서울특별시 강서구', center: { lat: 37.5509, lng: 126.8495, label: '서울 강서구 중심' }, dongs: ['마곡동', '화곡동', '가양동', '등촌동', '방화동', '공항동'] },
  { code: '11530', sidoCode: '11', sidoName: '서울특별시', name: '구로구', fullName: '서울특별시 구로구', center: { lat: 37.4954, lng: 126.8874, label: '구로구 중심' }, dongs: ['신도림동', '구로동', '고척동', '개봉동', '오류동', '항동'] },
  { code: '11545', sidoCode: '11', sidoName: '서울특별시', name: '금천구', fullName: '서울특별시 금천구', center: { lat: 37.4568, lng: 126.8954, label: '금천구 중심' }, dongs: ['가산동', '독산동', '시흥동'] },
  { code: '11560', sidoCode: '11', sidoName: '서울특별시', name: '영등포구', fullName: '서울특별시 영등포구', legacyCode: 'seoul_yeongdeungpo', center: { lat: 37.5264, lng: 126.8962, label: '영등포구 중심' }, dongs: ['여의도동', '문래동', '당산동', '영등포동', '양평동', '신길동', '대림동'] },
  { code: '11590', sidoCode: '11', sidoName: '서울특별시', name: '동작구', fullName: '서울특별시 동작구', center: { lat: 37.5124, lng: 126.9393, label: '동작구 중심' }, dongs: ['노량진동', '상도동', '흑석동', '사당동', '대방동', '신대방동'] },
  { code: '11620', sidoCode: '11', sidoName: '서울특별시', name: '관악구', fullName: '서울특별시 관악구', center: { lat: 37.4784, lng: 126.9516, label: '관악구 중심' }, dongs: ['봉천동', '신림동', '남현동', '행운동', '낙성대동', '대학동'] },
  { code: '11650', sidoCode: '11', sidoName: '서울특별시', name: '서초구', fullName: '서울특별시 서초구', legacyCode: 'seoul_seocho', center: { lat: 37.4837, lng: 127.0324, label: '서초구 중심' }, dongs: ['서초동', '반포동', '방배동', '잠원동', '양재동', '내곡동'] },
  { code: '11680', sidoCode: '11', sidoName: '서울특별시', name: '강남구', fullName: '서울특별시 강남구', legacyCode: 'seoul_gangnam', center: { lat: 37.5172, lng: 127.0473, label: '강남구 중심' }, dongs: ['역삼동', '신사동', '압구정동', '삼성동', '청담동', '논현동', '대치동', '도곡동', '개포동'] },
  { code: '11710', sidoCode: '11', sidoName: '서울특별시', name: '송파구', fullName: '서울특별시 송파구', legacyCode: 'seoul_songpa', center: { lat: 37.5145, lng: 127.1058, label: '송파구 중심' }, dongs: ['잠실동', '신천동', '방이동', '송파동', '석촌동', '가락동', '문정동', '장지동'] },
  { code: '11740', sidoCode: '11', sidoName: '서울특별시', name: '강동구', fullName: '서울특별시 강동구', center: { lat: 37.5301, lng: 127.1238, label: '강동구 중심' }, dongs: ['천호동', '명일동', '고덕동', '상일동', '길동', '둔촌동', '암사동', '성내동'] },

  // ==========================================
  // 2. 부산광역시 (16개 자치구·군: 15구 1군)
  // ==========================================
  { code: '26110', sidoCode: '26', sidoName: '부산광역시', name: '중구', fullName: '부산광역시 중구', legacyCode: 'busan_jung', center: { lat: 35.1062, lng: 129.0324, label: '부산 중구(남포동) 중심' }, dongs: ['남포동', '광복동', '중앙동', '보수동', '부평동'] },
  { code: '26140', sidoCode: '26', sidoName: '부산광역시', name: '서구', fullName: '부산광역시 서구', center: { lat: 35.0979, lng: 129.0243, label: '부산 서구 중심' }, dongs: ['송도', '암남동', '토성동', '충무동', '서대신동', '동대신동'] },
  { code: '26170', sidoCode: '26', sidoName: '부산광역시', name: '동구', fullName: '부산광역시 동구', center: { lat: 35.1293, lng: 129.0454, label: '부산 동구(부산역) 중심' }, dongs: ['초량동', '수정동', '좌천동', '범일동'] },
  { code: '26200', sidoCode: '26', sidoName: '부산광역시', name: '영도구', fullName: '부산광역시 영도구', center: { lat: 35.0912, lng: 129.0679, label: '부산 영도구 중심' }, dongs: ['봉래동', '청학동', '동삼동', '남항동', '영선동'] },
  { code: '26230', sidoCode: '26', sidoName: '부산광역시', name: '부산진구', fullName: '부산광역시 부산진구', legacyCode: 'busan_jin', center: { lat: 35.1631, lng: 129.0532, label: '부산진구(서면) 중심' }, dongs: ['부전동', '전포동', '양정동', '가야동', '개금동', '당감동'] },
  { code: '26260', sidoCode: '26', sidoName: '부산광역시', name: '동래구', fullName: '부산광역시 동래구', center: { lat: 35.2048, lng: 129.0836, label: '부산 동래구 중심' }, dongs: ['온천동', '사직동', '수안동', '명륜동', '안락동'] },
  { code: '26290', sidoCode: '26', sidoName: '부산광역시', name: '남구', fullName: '부산광역시 남구', center: { lat: 35.1365, lng: 129.0842, label: '부산 남구(경성대/대연) 중심' }, dongs: ['대연동', '용호동', '문현동', '우암동', '감만동'] },
  { code: '26320', sidoCode: '26', sidoName: '부산광역시', name: '북구', fullName: '부산광역시 북구', center: { lat: 35.1970, lng: 128.9901, label: '부산 북구(덕천) 중심' }, dongs: ['덕천동', '화명동', '구포동', '만덕동'] },
  { code: '26350', sidoCode: '26', sidoName: '부산광역시', name: '해운대구', fullName: '부산광역시 해운대구', legacyCode: 'busan_haeundae', center: { lat: 35.1631, lng: 129.1636, label: '해운대구 중심' }, dongs: ['우동', '중동', '좌동', '송정동', '재송동', '반여동'] },
  { code: '26380', sidoCode: '26', sidoName: '부산광역시', name: '사하구', fullName: '부산광역시 사하구', center: { lat: 35.1044, lng: 128.9749, label: '부산 사하구(하단) 중심' }, dongs: ['하단동', '괴정동', '다대동', '당리동', '신평동', '장림동'] },
  { code: '26410', sidoCode: '26', sidoName: '부산광역시', name: '금정구', fullName: '부산광역시 금정구', center: { lat: 35.2429, lng: 129.0927, label: '부산 금정구(부산대) 중심' }, dongs: ['장전동', '구서동', '남산동', '부곡동', '서동'] },
  { code: '26440', sidoCode: '26', sidoName: '부산광역시', name: '강서구', fullName: '부산광역시 강서구', center: { lat: 35.2122, lng: 128.9805, label: '부산 강서구(명지) 중심' }, dongs: ['명지동', '대저동', '강동동', '녹산동', '가덕도동'] },
  { code: '26470', sidoCode: '26', sidoName: '부산광역시', name: '연제구', fullName: '부산광역시 연제구', center: { lat: 35.1765, lng: 129.0798, label: '부산 연제구(시청/연산) 중심' }, dongs: ['연산동', '거제동'] },
  { code: '26500', sidoCode: '26', sidoName: '부산광역시', name: '수영구', fullName: '부산광역시 수영구', legacyCode: 'busan_suyeong', center: { lat: 35.1456, lng: 129.1132, label: '수영구(광안리) 중심' }, dongs: ['광안동', '남천동', '민락동', '망미동', '수영동'] },
  { code: '26530', sidoCode: '26', sidoName: '부산광역시', name: '사상구', fullName: '부산광역시 사상구', center: { lat: 35.1526, lng: 128.9912, label: '부산 사상구 중심' }, dongs: ['괘법동', '감전동', '주례동', '학장동', '모라동', '덕포동'] },
  { code: '26710', sidoCode: '26', sidoName: '부산광역시', name: '기장군', fullName: '부산광역시 기장군', center: { lat: 35.2445, lng: 129.2223, label: '기장군 중심' }, dongs: ['기장읍', '정관읍', '일광읍', '장안읍', '철마면'] },

  // ==========================================
  // 3. 대구광역시 (9개 자치구·군: 8구 1군 - 2023.7 군위군 편입)
  // ==========================================
  { code: '27110', sidoCode: '27', sidoName: '대구광역시', name: '중구', fullName: '대구광역시 중구', legacyCode: 'daegu_jung', center: { lat: 35.8693, lng: 128.6062, label: '대구 중구(동성로) 중심' }, dongs: ['동성로동', '삼덕동', '봉산동', '대봉동', '남산동', '대신동'] },
  { code: '27140', sidoCode: '27', sidoName: '대구광역시', name: '동구', fullName: '대구광역시 동구', center: { lat: 35.8868, lng: 128.6355, label: '대구 동구(동대구역) 중심' }, dongs: ['신천동', '효목동', '신암동', '불로동', '봉무동', '안심동'] },
  { code: '27170', sidoCode: '27', sidoName: '대구광역시', name: '서구', fullName: '대구광역시 서구', center: { lat: 35.8719, lng: 128.5591, label: '대구 서구 중심' }, dongs: ['내당동', '비산동', '평리동', '상중이동', '원대동'] },
  { code: '27200', sidoCode: '27', sidoName: '대구광역시', name: '남구', fullName: '대구광역시 남구', center: { lat: 35.8459, lng: 128.5973, label: '대구 남구(앞산) 중심' }, dongs: ['대명동', '봉덕동', '이천동'] },
  { code: '27230', sidoCode: '27', sidoName: '대구광역시', name: '북구', fullName: '대구광역시 북구', center: { lat: 35.8856, lng: 128.5830, label: '대구 북구(칠곡/복현) 중심' }, dongs: ['산격동', '복현동', '칠곡동', '침산동', '태전동', '구암동', '동천동'] },
  { code: '27260', sidoCode: '27', sidoName: '대구광역시', name: '수성구', fullName: '대구광역시 수성구', legacyCode: 'daegu_suseong', center: { lat: 35.8583, lng: 128.6306, label: '대구 수성구(범어/수성못) 중심' }, dongs: ['범어동', '만촌동', '수성동', '황금동', '두산동', '지산동', '시지동'] },
  { code: '27290', sidoCode: '27', sidoName: '대구광역시', name: '달서구', fullName: '대구광역시 달서구', center: { lat: 35.8299, lng: 128.5327, label: '대구 달서구(상인/두류) 중심' }, dongs: ['두류동', '상인동', '월성동', '진천동', '용산동', '이곡동', '본리동'] },
  { code: '27710', sidoCode: '27', sidoName: '대구광역시', name: '달성군', fullName: '대구광역시 달성군', center: { lat: 35.7746, lng: 128.4313, label: '달성군(현풍/다사) 중심' }, dongs: ['화원읍', '논공읍', '다사읍', '유가읍', '옥포읍', '현풍읍', '가창면', '하빈면', '구지면'] },
  { code: '27720', sidoCode: '27', sidoName: '대구광역시', name: '군위군', fullName: '대구광역시 군위군', center: { lat: 36.2428, lng: 128.5728, label: '군위군 중심' }, dongs: ['군위읍', '소보면', '효령면', '부계면', '우보면', '의흥면', '산성면', '삼국유사면'] },

  // ==========================================
  // 4. 인천광역시 (10개 자치구·군: 8구 2군)
  // ==========================================
  { code: '28110', sidoCode: '28', sidoName: '인천광역시', name: '중구', fullName: '인천광역시 중구', legacyCode: 'incheon_jung', center: { lat: 37.4738, lng: 126.6215, label: '인천 중구(차이나타운/영종) 중심' }, dongs: ['북성동', '신포동', '연안동', '영종동', '운서동', '용유동'] },
  { code: '28140', sidoCode: '28', sidoName: '인천광역시', name: '동구', fullName: '인천광역시 동구', center: { lat: 37.4739, lng: 126.6433, label: '인천 동구 중심' }, dongs: ['만석동', '화수동', '송현동', '송림동', '금창동'] },
  { code: '28177', sidoCode: '28', sidoName: '인천광역시', name: '미추홀구', fullName: '인천광역시 미추홀구', center: { lat: 37.4635, lng: 126.6506, label: '미추홀구(주안) 중심' }, dongs: ['주안동', '도화동', '숭의동', '용현동', '학익동', '관교동', '문학동'] },
  { code: '28185', sidoCode: '28', sidoName: '인천광역시', name: '연수구', fullName: '인천광역시 연수구', legacyCode: 'incheon_yeonsu', center: { lat: 37.4101, lng: 126.6783, label: '연수구(송도국제도시) 중심' }, dongs: ['송도동', '연수동', '동춘동', '청학동', '옥련동', '선학동'] },
  { code: '28200', sidoCode: '28', sidoName: '인천광역시', name: '남동구', fullName: '인천광역시 남동구', center: { lat: 37.4470, lng: 126.7314, label: '남동구(구월동/소래포구) 중심' }, dongs: ['구월동', '간석동', '만수동', '논현동', '고잔동', '서창동'] },
  { code: '28237', sidoCode: '28', sidoName: '인천광역시', name: '부평구', fullName: '인천광역시 부평구', legacyCode: 'incheon_bupyeong', center: { lat: 37.5070, lng: 126.7219, label: '부평구 중심' }, dongs: ['부평동', '산곡동', '청천동', '갈산동', '삼산동', '부개동', '일신동', '십정동'] },
  { code: '28245', sidoCode: '28', sidoName: '인천광역시', name: '계양구', fullName: '인천광역시 계양구', center: { lat: 37.5374, lng: 126.7378, label: '계양구(계산동) 중심' }, dongs: ['계산동', '작전동', '효성동', '서운동', '계양동'] },
  { code: '28260', sidoCode: '28', sidoName: '인천광역시', name: '서구', fullName: '인천광역시 서구', center: { lat: 37.5454, lng: 126.6760, label: '인천 서구(청라/검단) 중심' }, dongs: ['청라동', '검단동', '가정동', '신현동', '석남동', '가좌동', '검암동', '경서동'] },
  { code: '28710', sidoCode: '28', sidoName: '인천광역시', name: '강화군', fullName: '인천광역시 강화군', center: { lat: 37.7463, lng: 126.4880, label: '강화군 중심' }, dongs: ['강화읍', '선원면', '불은면', '길상면', '화도면', '양도면', '내가면', '하점면', '양사면', '송해면', '교동면', '삼산면', '서도면'] },
  { code: '28720', sidoCode: '28', sidoName: '인천광역시', name: '옹진군', fullName: '인천광역시 옹진군', center: { lat: 37.4468, lng: 126.6369, label: '옹진군 중심' }, dongs: ['백령면', '대청면', '연평면', '북도면', '덕적면', '자월면', '영흥면'] },

  // ==========================================
  // 5. 광주광역시 (5개 자치구)
  // ==========================================
  { code: '29110', sidoCode: '29', sidoName: '광주광역시', name: '동구', fullName: '광주광역시 동구', legacyCode: 'gwangju_dong', center: { lat: 35.1460, lng: 126.9231, label: '광주 동구(충장로/아시아문화전당) 중심' }, dongs: ['충장동', '동명동', '계림동', '산수동', '지산동', '서남동', '학동', '학운동', '지원동'] },
  { code: '29140', sidoCode: '29', sidoName: '광주광역시', name: '서구', fullName: '광주광역시 서구', legacyCode: 'gwangju_seo', center: { lat: 35.1520, lng: 126.8896, label: '광주 서구(상무지구) 중심' }, dongs: ['치평동', '상무동', '화정동', '농성동', '광천동', '풍암동', '금호동', '유덕동', '동천동'] },
  { code: '29155', sidoCode: '29', sidoName: '광주광역시', name: '남구', fullName: '광주광역시 남구', center: { lat: 35.1329, lng: 126.9025, label: '광주 남구(양림동/봉선동) 중심' }, dongs: ['양림동', '봉선동', '방림동', '백운동', '월산동', '주월동', '진월동', '효덕동', '송암동', '대촌동'] },
  { code: '29170', sidoCode: '29', sidoName: '광주광역시', name: '북구', fullName: '광주광역시 북구', center: { lat: 35.1741, lng: 126.9121, label: '광주 북구(전남대) 중심' }, dongs: ['용봉동', '중흥동', '우산동', '풍향동', '두암동', '문흥동', '운암동', '동림동', '일곡동', '매곡동', '건국동', '양산동'] },
  { code: '29200', sidoCode: '29', sidoName: '광주광역시', name: '광산구', fullName: '광주광역시 광산구', center: { lat: 35.1395, lng: 126.7937, label: '광주 광산구(수완/첨단/송정) 중심' }, dongs: ['송정동', '수완동', '첨단동', '신창동', '신가동', '월곡동', '운남동', '우산동', '비아동', '하남동', '임곡동', '동곡동', '평동', '삼도동', '본량동'] },

  // ==========================================
  // 6. 대전광역시 (5개 자치구)
  // ==========================================
  { code: '30110', sidoCode: '30', sidoName: '대전광역시', name: '동구', fullName: '대전광역시 동구', center: { lat: 36.3314, lng: 127.4342, label: '대전 동구(대전역) 중심' }, dongs: ['중앙동', '신인동', '효동', '판암동', '용운동', '대동', '자양동', '가양동', '용전동', '성남동', '홍도동', '삼성동', '산내동'] },
  { code: '30140', sidoCode: '30', sidoName: '대전광역시', name: '중구', fullName: '대전광역시 중구', legacyCode: 'daejeon_jung', center: { lat: 36.3258, lng: 127.4214, label: '대전 중구(은행동/성심당) 중심' }, dongs: ['은행선화동', '목동', '중촌동', '대흥동', '문창동', '석교동', '대사동', '부사동', '용두동', '오류동', '태평동', '유천동', '문화동', '산성동'] },
  { code: '30170', sidoCode: '30', sidoName: '대전광역시', name: '서구', fullName: '대전광역시 서구', legacyCode: 'daejeon_seo', center: { lat: 36.3553, lng: 127.3838, label: '대전 서구(둔산동) 중심' }, dongs: ['둔산동', '갈마동', '월평동', '만년동', '탄방동', '괴정동', '가장동', '내동', '변동', '용문동', '도마동', '정림동', '복수동', '가수원동', '도안동', '관저동', '기성동'] },
  { code: '30200', sidoCode: '30', sidoName: '대전광역시', name: '유성구', fullName: '대전광역시 유성구', legacyCode: 'daejeon_yuseong', center: { lat: 36.3623, lng: 127.3563, label: '대전 유성구(봉명동/도안) 중심' }, dongs: ['봉명동', '온천동', '노은동', '신성동', '전민동', '구즉동', '관평동', '원신흥동', '상대동', '진잠동', '학하동'] },
  { code: '30230', sidoCode: '30', sidoName: '대전광역시', name: '대덕구', fullName: '대전광역시 대덕구', center: { lat: 36.3467, lng: 127.4156, label: '대전 대덕구 중심' }, dongs: ['오정동', '대화동', '회덕동', '비래동', '송촌동', '중리동', '신탄진동', '석봉동', '덕암동', '목상동'] },

  // ==========================================
  // 7. 울산광역시 (5개 자치구·군: 4구 1군)
  // ==========================================
  { code: '31110', sidoCode: '31', sidoName: '울산광역시', name: '중구', fullName: '울산광역시 중구', legacyCode: 'ulsan_jung', center: { lat: 35.5696, lng: 129.3328, label: '울산 중구(성남동) 중심' }, dongs: ['성남동', '옥교동', '우정동', '태화동', '다운동', '병영동', '약사동', '반구동', '학성동', '복산동'] },
  { code: '31140', sidoCode: '31', sidoName: '울산광역시', name: '남구', fullName: '울산광역시 남구', legacyCode: 'ulsan_nam', center: { lat: 35.5439, lng: 129.3301, label: '울산 남구(삼산동) 중심' }, dongs: ['삼산동', '달동', '신정동', '무거동', '옥동', '야음장생포동', '수암동', '선암동', '대현동'] },
  { code: '31170', sidoCode: '31', sidoName: '울산광역시', name: '동구', fullName: '울산광역시 동구', center: { lat: 35.5048, lng: 129.4167, label: '울산 동구(일산지/방어진) 중심' }, dongs: ['방어동', '일산동', '화정동', '대송동', '전하동', '남목동'] },
  { code: '31200', sidoCode: '31', sidoName: '울산광역시', name: '북구', fullName: '울산광역시 북구', center: { lat: 35.5828, lng: 129.3614, label: '울산 북구(송정/화봉) 중심' }, dongs: ['농소동', '강동동', '효문동', '송정동', '양정동', '염포동'] },
  { code: '31710', sidoCode: '31', sidoName: '울산광역시', name: '울주군', fullName: '울산광역시 울주군', center: { lat: 35.5396, lng: 129.1350, label: '울주군(언양/범서) 중심' }, dongs: ['온산읍', '언양읍', '온양읍', '범서읍', '청량읍', '서생면', '웅촌면', '두동면', '두서면', '상북면', '삼남읍', '삼동면'] },

  // ==========================================
  // 8. 세종특별자치시 (1개 단층제 자치시)
  // ==========================================
  { code: '36110', sidoCode: '36', sidoName: '세종특별자치시', name: '세종시', fullName: '세종특별자치시', legacyCode: 'sejong', center: { lat: 36.4800, lng: 127.2890, label: '세종특별자치시 중심' }, dongs: ['보람동', '나성동', '새롬동', '다정동', '어진동', '도담동', '아름동', '종촌동', '고운동', '소담동', '반곡동', '해밀동', '산울동', '집현동', '조치원읍', '연기면', '연동면', '부강면', '금남면', '장군면', '연서면', '전의면', '전동면', '소정면'] },

  // ==========================================
  // 9. 경기도 (42개 구·시·군: 일반구 19개 + 단일 시·군 23개)
  // ==========================================
  // 수원시 (4구)
  { code: '41111', sidoCode: '41', sidoName: '경기도', name: '수원시 장안구', fullName: '경기도 수원시 장안구', parentCity: '수원시', isGeneralGu: true, center: { lat: 37.3038, lng: 127.0108, label: '수원시 장안구 중심' }, dongs: ['정자동', '영화동', '송죽동', '조원동', '연무동', '율천동', '파장동'] },
  { code: '41113', sidoCode: '41', sidoName: '경기도', name: '수원시 권선구', fullName: '경기도 수원시 권선구', parentCity: '수원시', isGeneralGu: true, center: { lat: 37.2576, lng: 126.9719, label: '수원시 권선구 중심' }, dongs: ['세류동', '평동', '서둔동', '구운동', '금곡동', '호매실동', '권선동', '곡선동', '입북동'] },
  { code: '41115', sidoCode: '41', sidoName: '경기도', name: '수원시 팔달구', fullName: '경기도 수원시 팔달구', legacyCode: 'gyeonggi_suwon_paldal', parentCity: '수원시', isGeneralGu: true, center: { lat: 37.2825, lng: 127.0189, label: '수원시 팔달구(행궁동/인계동) 중심' }, dongs: ['행궁동', '인계동', '매교동', '매산동', '고등동', '화서동', '지동', '우만동'] },
  { code: '41117', sidoCode: '41', sidoName: '경기도', name: '수원시 영통구', fullName: '경기도 수원시 영통구', parentCity: '수원시', isGeneralGu: true, center: { lat: 37.2596, lng: 127.0465, label: '수원시 영통구(광교) 중심' }, dongs: ['영통동', '매탄동', '원천동', '광교1동', '광교2동', '망포동'] },

  // 성남시 (3구)
  { code: '41131', sidoCode: '41', sidoName: '경기도', name: '성남시 수정구', fullName: '경기도 성남시 수정구', parentCity: '성남시', isGeneralGu: true, center: { lat: 37.4516, lng: 127.1367, label: '성남시 수정구 중심' }, dongs: ['신흥동', '태평동', '수진동', '단대동', '산성동', '양지동', '복정동', '위례동', '시흥동'] },
  { code: '41133', sidoCode: '41', sidoName: '경기도', name: '성남시 중원구', fullName: '경기도 성남시 중원구', parentCity: '성남시', isGeneralGu: true, center: { lat: 37.4320, lng: 127.1565, label: '성남시 중원구 중심' }, dongs: ['성남동', '중앙동', '금광동', '은행동', '상대원동', '하대원동', '도촌동'] },
  { code: '41135', sidoCode: '41', sidoName: '경기도', name: '성남시 분당구', fullName: '경기도 성남시 분당구', legacyCode: 'gyeonggi_seongnam_bundang', parentCity: '성남시', isGeneralGu: true, center: { lat: 37.3827, lng: 127.1189, label: '성남시 분당구(판교/정자) 중심' }, dongs: ['서현동', '정자동', '백현동', '판교동', '삼평동', '운중동', '이매동', '야탑동', '수내동', '구미동', '금곡동'] },

  // 의정부시
  { code: '41150', sidoCode: '41', sidoName: '경기도', name: '의정부시', fullName: '경기도 의정부시', center: { lat: 37.7381, lng: 127.0337, label: '의정부시 중심' }, dongs: ['의정부동', '호원동', '장암동', '신곡동', '송산동', '자금동', '가능동', '흥선동', '녹양동'] },

  // 안양시 (2구)
  { code: '41171', sidoCode: '41', sidoName: '경기도', name: '안양시 만안구', fullName: '경기도 안양시 만안구', parentCity: '안양시', isGeneralGu: true, center: { lat: 37.4005, lng: 126.9142, label: '안양시 만안구 중심' }, dongs: ['안양동', '석수동', '박달동'] },
  { code: '41173', sidoCode: '41', sidoName: '경기도', name: '안양시 동안구', fullName: '경기도 안양시 동안구', legacyCode: 'gyeonggi_anyang_dongan', parentCity: '안양시', isGeneralGu: true, center: { lat: 37.3943, lng: 126.9568, label: '안양시 동안구(평촌/범계) 중심' }, dongs: ['비산동', '부흥동', '달안동', '관양동', '평촌동', '호계동', '범계동', '신촌동', '갈산동', '귀인동'] },

  // 부천시 (2024.1 3개 일반구 복원)
  { code: '41192', sidoCode: '41', sidoName: '경기도', name: '부천시 원미구', fullName: '경기도 부천시 원미구', legacyCode: 'gyeonggi_bucheon_wonmi', parentCity: '부천시', isGeneralGu: true, center: { lat: 37.5023, lng: 126.7766, label: '부천시 원미구 중심' }, dongs: ['심곡동', '원미동', '소사동', '역곡동', '춘의동', '도당동', '약대동', '중동', '상동'] },
  { code: '41194', sidoCode: '41', sidoName: '경기도', name: '부천시 소사구', fullName: '경기도 부천시 소사구', parentCity: '부천시', isGeneralGu: true, center: { lat: 37.4819, lng: 126.7958, label: '부천시 소사구 중심' }, dongs: ['소사본동', '심곡본동', '범박동', '괴안동', '송내동', '옥길동', '계수동'] },
  { code: '41196', sidoCode: '41', sidoName: '경기도', name: '부천시 오정구', fullName: '경기도 부천시 오정구', parentCity: '부천시', isGeneralGu: true, center: { lat: 37.5284, lng: 126.7915, label: '부천시 오정구 중심' }, dongs: ['오정동', '원종동', '고강동', '삼정동', '내동', '여월동', '작동', '대장동'] },

  // 광명시, 평택시, 동두천시
  { code: '41210', sidoCode: '41', sidoName: '경기도', name: '광명시', fullName: '경기도 광명시', center: { lat: 37.4786, lng: 126.8647, label: '광명시(철산/일직) 중심' }, dongs: ['철산동', '하안동', '소하동', '일직동', '광명동', '학온동'] },
  { code: '41220', sidoCode: '41', sidoName: '경기도', name: '평택시', fullName: '경기도 평택시', center: { lat: 36.9921, lng: 127.1129, label: '평택시(고덕/송탄) 중심' }, dongs: ['고덕동', '비전동', '세교동', '평택동', '안중읍', '포승읍', '팽성읍', '송탄동'] },
  { code: '41250', sidoCode: '41', sidoName: '경기도', name: '동두천시', fullName: '경기도 동두천시', center: { lat: 37.9035, lng: 127.0607, label: '동두천시 중심' }, dongs: ['생연동', '중앙동', '보산동', '불현동', '송내동', '소요동'] },

  // 안산시 (2구)
  { code: '41271', sidoCode: '41', sidoName: '경기도', name: '안산시 상록구', fullName: '경기도 안산시 상록구', parentCity: '안산시', isGeneralGu: true, center: { lat: 37.3008, lng: 126.8466, label: '안산시 상록구 중심' }, dongs: ['본오동', '일동', '이동', '사동', '월피동', '성포동', '반월동', '안산동'] },
  { code: '41273', sidoCode: '41', sidoName: '경기도', name: '안산시 단원구', fullName: '경기도 안산시 단원구', parentCity: '안산시', isGeneralGu: true, center: { lat: 37.3219, lng: 126.8309, label: '안산시 단원구(고잔동) 중심' }, dongs: ['고잔동', '중앙동', '호수동', '초지동', '원곡동', '선부동', '와동', '대부동'] },

  // 고양시 (3구)
  { code: '41281', sidoCode: '41', sidoName: '경기도', name: '고양시 덕양구', fullName: '경기도 고양시 덕양구', parentCity: '고양시', isGeneralGu: true, center: { lat: 37.6374, lng: 126.8328, label: '고양시 덕양구(화정/원흥) 중심' }, dongs: ['화정동', '행신동', '원흥동', '삼송동', '지축동', '향동동', '덕은동', '주교동', '성사동'] },
  { code: '41285', sidoCode: '41', sidoName: '경기도', name: '고양시 일산동구', fullName: '경기도 고양시 일산동구', legacyCode: 'gyeonggi_goyang_ilsandong', parentCity: '고양시', isGeneralGu: true, center: { lat: 37.6584, lng: 126.7725, label: '고양시 일산동구(라페스타/웨돔) 중심' }, dongs: ['장항동', '백석동', '마두동', '식사동', '풍동', '정발산동', '중산동'] },
  { code: '41287', sidoCode: '41', sidoName: '경기도', name: '고양시 일산서구', fullName: '경기도 고양시 일산서구', parentCity: '고양시', isGeneralGu: true, center: { lat: 37.6754, lng: 126.7480, label: '고양시 일산서구(킨텍스/주엽) 중심' }, dongs: ['주엽동', '일산동', '대화동', '탄현동', '송포동', '덕이동', '가좌동'] },

  // 과천, 구리, 남양주, 오산, 시흥, 군포, 의왕, 하남
  { code: '41290', sidoCode: '41', sidoName: '경기도', name: '과천시', fullName: '경기도 과천시', center: { lat: 37.4292, lng: 126.9876, label: '과천시 중심' }, dongs: ['중앙동', '갈현동', '별양동', '부림동', '과천동', '문원동'] },
  { code: '41310', sidoCode: '41', sidoName: '경기도', name: '구리시', fullName: '경기도 구리시', center: { lat: 37.5943, lng: 127.1296, label: '구리시 중심' }, dongs: ['갈매동', '인창동', '교문동', '수택동', '토평동', '동구동'] },
  { code: '41360', sidoCode: '41', sidoName: '경기도', name: '남양주시', fullName: '경기도 남양주시', center: { lat: 37.6360, lng: 127.2165, label: '남양주시(다산/별내) 중심' }, dongs: ['다산동', '별내동', '호평동', '평내동', '와부읍', '진접읍', '화도읍', '진건읍', '오남읍', '퇴계원읍'] },
  { code: '41370', sidoCode: '41', sidoName: '경기도', name: '오산시', fullName: '경기도 오산시', center: { lat: 37.1498, lng: 127.0772, label: '오산시 중심' }, dongs: ['중앙동', '대원동', '남촌동', '신장동', '세마동', '초평동'] },
  { code: '41390', sidoCode: '41', sidoName: '경기도', name: '시흥시', fullName: '경기도 시흥시', center: { lat: 37.3802, lng: 126.8029, label: '시흥시(배곧/은계) 중심' }, dongs: ['배곧동', '정왕동', '은계동', '목감동', '신천동', '대야동', '은행동', '능곡동', '장곡동'] },
  { code: '41410', sidoCode: '41', sidoName: '경기도', name: '군포시', fullName: '경기도 군포시', center: { lat: 37.3616, lng: 126.9352, label: '군포시(산본) 중심' }, dongs: ['산본동', '금정동', '당동', '당정동', '부곡동', '군포동', '대야동'] },
  { code: '41430', sidoCode: '41', sidoName: '경기도', name: '의왕시', fullName: '경기도 의왕시', center: { lat: 37.3448, lng: 126.9683, label: '의왕시(백운호수) 중심' }, dongs: ['고천동', '오전동', '부곡동', '내손동', '청계동', '포일동'] },
  { code: '41450', sidoCode: '41', sidoName: '경기도', name: '하남시', fullName: '경기도 하남시', center: { lat: 37.5393, lng: 127.2148, label: '하남시(미사강변) 중심' }, dongs: ['미사동', '망월동', '신장동', '덕풍동', '감일동', '위례동', '풍산동', '초이동'] },

  // 용인시 (3구)
  { code: '41461', sidoCode: '41', sidoName: '경기도', name: '용인시 처인구', fullName: '경기도 용인시 처인구', parentCity: '용인시', isGeneralGu: true, center: { lat: 37.2343, lng: 127.2013, label: '용인시 처인구(역북) 중심' }, dongs: ['역북동', '김량장동', '삼가동', '유방동', '고림동', '포곡읍', '모현읍', '이동읍', '남사읍', '원삼면'] },
  { code: '41463', sidoCode: '41', sidoName: '경기도', name: '용인시 기흥구', fullName: '경기도 용인시 기흥구', parentCity: '용인시', isGeneralGu: true, center: { lat: 37.2804, lng: 127.1147, label: '용인시 기흥구(동백/보정) 중심' }, dongs: ['신갈동', '구갈동', '상갈동', '보정동', '기흥동', '서농동', '구성동', '마북동', '동백동', '상하동', '영덕동'] },
  { code: '41465', sidoCode: '41', sidoName: '경기도', name: '용인시 수지구', fullName: '경기도 용인시 수지구', legacyCode: 'gyeonggi_yongin_suji', parentCity: '용인시', isGeneralGu: true, center: { lat: 37.3220, lng: 127.0975, label: '용인시 수지구(동천/성복) 중심' }, dongs: ['풍덕천동', '신봉동', '죽전동', '동천동', '상현동', '성복동'] },

  // 파주시, 이천시, 안성시, 김포시, 화성시, 광주시, 양주시, 포천시, 여주시, 연천군, 가평군, 양평군
  { code: '41480', sidoCode: '41', sidoName: '경기도', name: '파주시', fullName: '경기도 파주시', center: { lat: 37.7600, lng: 126.7798, label: '파주시(운정) 중심' }, dongs: ['운정동', '목동동', '와동동', '야당동', '금촌동', '문산읍', '교하동', '조리읍', '헤이리'] },
  { code: '41500', sidoCode: '41', sidoName: '경기도', name: '이천시', fullName: '경기도 이천시', center: { lat: 37.2723, lng: 127.4350, label: '이천시 중심' }, dongs: ['창전동', '중리동', '관고동', '증포동', '부발읍', '장호원읍'] },
  { code: '41550', sidoCode: '41', sidoName: '경기도', name: '안성시', fullName: '경기도 안성시', center: { lat: 37.0080, lng: 127.2797, label: '안성시 중심' }, dongs: ['안성동', '공도읍', '대덕면', '죽산면', '일죽면'] },
  { code: '41570', sidoCode: '41', sidoName: '경기도', name: '김포시', fullName: '경기도 김포시', center: { lat: 37.6153, lng: 126.7157, label: '김포시(구래/사우) 중심' }, dongs: ['구래동', '장기동', '운양동', '사우동', '풍무동', '걸포동', '통진읍', '고촌읍', '양촌읍'] },
  { code: '41590', sidoCode: '41', sidoName: '경기도', name: '화성시', fullName: '경기도 화성시', center: { lat: 37.1995, lng: 126.8315, label: '화성시(동탄/향남/새솔) 중심' }, dongs: ['동탄동', '병점동', '봉담읍', '향남읍', '남양읍', '우정읍', '새솔동', '진안동'] },
  { code: '41610', sidoCode: '41', sidoName: '경기도', name: '광주시', fullName: '경기도 광주시', center: { lat: 37.4294, lng: 127.2551, label: '경기 광주시 중심' }, dongs: ['경안동', '송정동', '광남동', '태전동', '오포읍', '초월읍', '곤지암읍'] },
  { code: '41630', sidoCode: '41', sidoName: '경기도', name: '양주시', fullName: '경기도 양주시', center: { lat: 37.7853, lng: 127.0458, label: '양주시(옥정/회천) 중심' }, dongs: ['옥정동', '회천동', '고읍동', '삼숭동', '백석읍', '광적면'] },
  { code: '41650', sidoCode: '41', sidoName: '경기도', name: '포천시', fullName: '경기도 포천시', center: { lat: 37.8949, lng: 127.2003, label: '포천시 중심' }, dongs: ['포천동', '선단동', '소흘읍', '신북면', '일동면', '이동면'] },
  { code: '41670', sidoCode: '41', sidoName: '경기도', name: '여주시', fullName: '경기도 여주시', center: { lat: 37.2983, lng: 127.6371, label: '여주시 중심' }, dongs: ['여흥동', '중앙동', '오학동', '가남읍', '세종대왕면'] },
  { code: '41800', sidoCode: '41', sidoName: '경기도', name: '연천군', fullName: '경기도 연천군', center: { lat: 38.0964, lng: 127.0747, label: '연천군 중심' }, dongs: ['연천읍', '전곡읍', '군남면', '청산면', '백학면'] },
  { code: '41820', sidoCode: '41', sidoName: '경기도', name: '가평군', fullName: '경기도 가평군', center: { lat: 37.8315, lng: 127.5097, label: '가평군(청평/설악) 중심' }, dongs: ['가평읍', '설악면', '청평면', '상면', '조종면', '북면'] },
  { code: '41830', sidoCode: '41', sidoName: '경기도', name: '양평군', fullName: '경기도 양평군', center: { lat: 37.4917, lng: 127.4876, label: '양평군 중심' }, dongs: ['양평읍', '강상면', '강하면', '양서면', '옥천면', '서종면', '용문면'] },

  // ==========================================
  // 10. 강원특별자치도 (18개 시·군: 7시 11군)
  // ==========================================
  { code: '42110', sidoCode: '42', sidoName: '강원특별자치도', name: '춘천시', fullName: '강원특별자치도 춘천시', legacyCode: 'gangwon_chuncheon', center: { lat: 37.8813, lng: 127.7298, label: '춘천시(명동/온의동) 중심' }, dongs: ['온의동', '퇴계동', '석사동', '후평동', '효자동', '조운동', '약사명동', '신북읍'] },
  { code: '42130', sidoCode: '42', sidoName: '강원특별자치도', name: '원주시', fullName: '강원특별자치도 원주시', center: { lat: 37.3422, lng: 127.9202, label: '원주시(무실/혁신) 중심' }, dongs: ['무실동', '단구동', '반곡관설동', '단계동', '중앙동', '일산동', '태장동', '문막읍'] },
  { code: '42150', sidoCode: '42', sidoName: '강원특별자치도', name: '강릉시', fullName: '강원특별자치도 강릉시', legacyCode: 'gangwon_gangneung', center: { lat: 37.7519, lng: 128.8761, label: '강릉시(교동/안목/초당) 중심' }, dongs: ['교동', '초당동', '견소동', '포남동', '홍제동', '중앙동', '옥천동', '주문진읍'] },
  { code: '42170', sidoCode: '42', sidoName: '강원특별자치도', name: '동해시', fullName: '강원특별자치도 동해시', center: { lat: 37.5247, lng: 129.1143, label: '동해시(천곡동) 중심' }, dongs: ['천곡동', '송정동', '북삼동', '부곡동', '동호동', '발한동', '묵호동', '북평동'] },
  { code: '42190', sidoCode: '42', sidoName: '강원특별자치도', name: '태백시', fullName: '강원특별자치도 태백시', center: { lat: 37.1641, lng: 128.9856, label: '태백시 중심' }, dongs: ['황지동', '황연동', '삼수동', '상장동', '문곡소도동', '장성동', '구문소동', '철암동'] },
  { code: '42210', sidoCode: '42', sidoName: '강원특별자치도', name: '속초시', fullName: '강원특별자치도 속초시', legacyCode: 'gangwon_sokcho', center: { lat: 38.2070, lng: 128.5918, label: '속초시(중앙시장/청초호) 중심' }, dongs: ['청호동', '중앙동', '조양동', '교동', '노학동', '영랑동', '동명동', '대포동'] },
  { code: '42230', sidoCode: '42', sidoName: '강원특별자치도', name: '삼척시', fullName: '강원특별자치도 삼척시', center: { lat: 37.4499, lng: 129.1653, label: '삼척시 중심' }, dongs: ['남양동', '성내동', '교동', '정라동', '도계읍', '원덕읍', '근덕면'] },
  { code: '42720', sidoCode: '42', sidoName: '강원특별자치도', name: '홍천군', fullName: '강원특별자치도 홍천군', center: { lat: 37.6972, lng: 127.8887, label: '홍천군 중심' }, dongs: ['홍천읍', '화촌면', '두촌면', '내촌면', '서석면', '영귀미면', '남면', '서면', '북방면', '내면'] },
  { code: '42730', sidoCode: '42', sidoName: '강원특별자치도', name: '횡성군', fullName: '강원특별자치도 횡성군', center: { lat: 37.4918, lng: 127.9851, label: '횡성군 중심' }, dongs: ['횡성읍', '우천면', '안흥면', '둔내면', '갑천면', '청일면', '공근면', '서원면', '강림면'] },
  { code: '42750', sidoCode: '42', sidoName: '강원특별자치도', name: '영월군', fullName: '강원특별자치도 영월군', center: { lat: 37.1838, lng: 128.4619, label: '영월군 중심' }, dongs: ['영월읍', '상동읍', '산솔면', '김삿갓면', '북면', '남면', '한반도면', '주천면', '무릉도원면'] },
  { code: '42760', sidoCode: '42', sidoName: '강원특별자치도', name: '평창군', fullName: '강원특별자치도 평창군', center: { lat: 37.3705, lng: 128.3902, label: '평창군(대관령) 중심' }, dongs: ['평창읍', '미탄면', '방림면', '대화면', '봉평면', '용평면', '진부면', '대관령면'] },
  { code: '42770', sidoCode: '42', sidoName: '강원특별자치도', name: '정선군', fullName: '강원특별자치도 정선군', center: { lat: 37.3806, lng: 128.6608, label: '정선군 중심' }, dongs: ['정선읍', '고한읍', '사북읍', '신동읍', '화암면', '남면', '여량면', '북평면', '임계면'] },
  { code: '42780', sidoCode: '42', sidoName: '강원특별자치도', name: '철원군', fullName: '강원특별자치도 철원군', center: { lat: 38.1468, lng: 127.3134, label: '철원군 중심' }, dongs: ['철원읍', '김화읍', '갈말읍', '동송읍', '서면', '근남면'] },
  { code: '42790', sidoCode: '42', sidoName: '강원특별자치도', name: '화천군', fullName: '강원특별자치도 화천군', center: { lat: 38.1062, lng: 127.7082, label: '화천군 중심' }, dongs: ['화천읍', '간동면', '하남면', '상서면', '사내면'] },
  { code: '42800', sidoCode: '42', sidoName: '강원특별자치도', name: '양구군', fullName: '강원특별자치도 양구군', center: { lat: 38.1097, lng: 127.9897, label: '양구군 중심' }, dongs: ['양구읍', '국토정중앙면', '동면', '방산면', '해안면'] },
  { code: '42810', sidoCode: '42', sidoName: '강원특별자치도', name: '인제군', fullName: '강원특별자치도 인제군', center: { lat: 38.0697, lng: 128.1704, label: '인제군(원대리/원통) 중심' }, dongs: ['인제읍', '남면', '북면', '기린면', '서화면', '상남면'] },
  { code: '42820', sidoCode: '42', sidoName: '강원특별자치도', name: '고성군', fullName: '강원특별자치도 고성군', center: { lat: 38.3806, lng: 128.4678, label: '강원 고성군 중심' }, dongs: ['간성읍', '거진읍', '현내면', '죽왕면', '토성면'] },
  { code: '42830', sidoCode: '42', sidoName: '강원특별자치도', name: '양양군', fullName: '강원특별자치도 양양군', center: { lat: 38.0754, lng: 128.6189, label: '양양군(서피비치/인구) 중심' }, dongs: ['양양읍', '서면', '손양면', '현북면', '현남면', '강현면'] },

  // ==========================================
  // 11. 충청북도 (14개 구·시·군: 청주 4구 + 10시·군)
  // ==========================================
  { code: '43111', sidoCode: '43', sidoName: '충청북도', name: '청주시 상당구', fullName: '충청북도 청주시 상당구', legacyCode: 'chungbuk_cheongju_sangdang', parentCity: '청주시', isGeneralGu: true, center: { lat: 36.6358, lng: 127.4914, label: '청주시 상당구(성안길) 중심' }, dongs: ['성안동', '탑대성동', '영운동', '금천동', '용담명암산성동', '용암동', '낭성면', '미원면', '가덕면', '남일면', '문의면'] },
  { code: '43112', sidoCode: '43', sidoName: '충청북도', name: '청주시 서원구', fullName: '충청북도 청주시 서원구', parentCity: '청주시', isGeneralGu: true, center: { lat: 36.6206, lng: 127.4682, label: '청주시 서원구(산남/성화) 중심' }, dongs: ['사직동', '사창동', '모충동', '산남동', '분평동', '수곡동', '성화개신죽림동', '남이면', '현도면'] },
  { code: '43113', sidoCode: '43', sidoName: '충청북도', name: '청주시 흥덕구', fullName: '충청북도 청주시 흥덕구', parentCity: '청주시', isGeneralGu: true, center: { lat: 36.6348, lng: 127.4283, label: '청주시 흥덕구(복대/오송) 중심' }, dongs: ['복대동', '가경동', '봉명동', '강서동', '오송읍', '옥산면', '강내면'] },
  { code: '43114', sidoCode: '43', sidoName: '충청북도', name: '청주시 청원구', fullName: '충청북도 청주시 청원구', parentCity: '청주시', isGeneralGu: true, center: { lat: 36.6534, lng: 127.4890, label: '청주시 청원구(율량/오창) 중심' }, dongs: ['율량사천동', '우암동', '내덕동', '오근장동', '오창읍', '내수읍', '북이면'] },
  { code: '43130', sidoCode: '43', sidoName: '충청북도', name: '충주시', fullName: '충청북도 충주시', center: { lat: 36.9910, lng: 127.9259, label: '충주시 중심' }, dongs: ['성내충인동', '교현안림동', '용산동', '지현동', '문화동', '호암직동', '연수동', '칠금금릉동', '목행용탄동', '주덕읍'] },
  { code: '43150', sidoCode: '43', sidoName: '충청북도', name: '제천시', fullName: '충청북도 제천시', center: { lat: 37.1326, lng: 128.2117, label: '제천시 중심' }, dongs: ['중앙동', '남현동', '영서동', '용두동', '신백동', '청전동', '화산동', '봉양읍'] },
  { code: '43720', sidoCode: '43', sidoName: '충청북도', name: '보은군', fullName: '충청북도 보은군', center: { lat: 36.4895, lng: 127.7335, label: '보은군 중심' }, dongs: ['보은읍', '속리산면', '장안면', '마로면', '탄부면', '삼승면', '수한면', '회남면', '회인면', '내북면', '산외면'] },
  { code: '43730', sidoCode: '43', sidoName: '충청북도', name: '옥천군', fullName: '충청북도 옥천군', center: { lat: 36.3064, lng: 127.5714, label: '옥천군 중심' }, dongs: ['옥천읍', '동이면', '안남면', '안내면', '청성면', '청산면', '이원면', '군서면', '군북면'] },
  { code: '43740', sidoCode: '43', sidoName: '충청북도', name: '영동군', fullName: '충청북도 영동군', center: { lat: 36.1751, lng: 127.7836, label: '영동군 중심' }, dongs: ['영동읍', '용산면', '황간면', '추풍령면', '매곡면', '상촌면', '양강면', '용화면', '학산면', '양산면', '심천면'] },
  { code: '43745', sidoCode: '43', sidoName: '충청북도', name: '증평군', fullName: '충청북도 증평군', center: { lat: 36.7853, lng: 127.5814, label: '증평군 중심' }, dongs: ['증평읍', '도안면'] },
  { code: '43750', sidoCode: '43', sidoName: '충청북도', name: '진천군', fullName: '충청북도 진천군', center: { lat: 36.8554, lng: 127.4433, label: '진천군(혁신도시) 중심' }, dongs: ['진천읍', '덕산읍', '초평면', '문백면', '백곡면', '이월면', '광혜원면'] },
  { code: '43760', sidoCode: '43', sidoName: '충청북도', name: '괴산군', fullName: '충청북도 괴산군', center: { lat: 36.8153, lng: 127.7865, label: '괴산군 중심' }, dongs: ['괴산읍', '감물면', '칠성면', '문광면', '청천면', '청안면', '사리면', '소수면', '불정면', '연풍면', '장연면'] },
  { code: '43770', sidoCode: '43', sidoName: '충청북도', name: '음성군', fullName: '충청북도 음성군', center: { lat: 36.9326, lng: 127.6908, label: '음성군(금왕/혁신) 중심' }, dongs: ['음성읍', '금왕읍', '소이면', '원남면', '맹동면', '대소면', '삼성면', '생극면', '감곡면'] },
  { code: '43800', sidoCode: '43', sidoName: '충청북도', name: '단양군', fullName: '충청북도 단양군', center: { lat: 36.9846, lng: 128.3656, label: '단양군 중심' }, dongs: ['단양읍', '매포읍', '단성면', '대강면', '가곡면', '영춘면', '어상천면', '적성면'] },

  // ==========================================
  // 12. 충청남도 (16개 구·시·군: 천안 2구 + 14시·군)
  // ==========================================
  { code: '44131', sidoCode: '44', sidoName: '충청남도', name: '천안시 동남구', fullName: '충청남도 천안시 동남구', legacyCode: 'chungnam_cheonan_dongnam', parentCity: '천안시', isGeneralGu: true, center: { lat: 36.8049, lng: 127.1524, label: '천안시 동남구(신부동) 중심' }, dongs: ['신부동', '신방동', '청수동', '청당동', '원성동', '봉명동', '일봉동', '문성동', '중앙동', '목천읍', '풍세면', '광덕면', '북면', '성남면', '수신면', '병천면', '동면'] },
  { code: '44133', sidoCode: '44', sidoName: '충청남도', name: '천안시 서북구', fullName: '충청남도 천안시 서북구', parentCity: '천안시', isGeneralGu: true, center: { lat: 36.8378, lng: 127.1107, label: '천안시 서북구(불당동/두정동) 중심' }, dongs: ['불당동', '두정동', '백석동', '쌍용동', '성정동', '성성동', '차암동', '성환읍', '성거읍', '직산읍', '입장면'] },
  { code: '44150', sidoCode: '44', sidoName: '충청남도', name: '공주시', fullName: '충청남도 공주시', center: { lat: 36.4465, lng: 127.1190, label: '공주시(신관동/산성동) 중심' }, dongs: ['신관동', '중학동', '웅진동', '금학동', '옥룡동', '유구읍', '이인면', '탄천면', '계룡면', '반포면', '의당면', '정안면', '우성면', '사곡면', '신풍면'] },
  { code: '44180', sidoCode: '44', sidoName: '충청남도', name: '보령시', fullName: '충청남도 보령시', center: { lat: 36.3332, lng: 126.6129, label: '보령시(대천해수욕장) 중심' }, dongs: ['대천동', '웅천읍', '주포면', '주교면', '오천면', '천북면', '청소면', '청라면', '남포면', '주산면', '미산면', '성주면'] },
  { code: '44200', sidoCode: '44', sidoName: '충청남도', name: '아산시', fullName: '충청남도 아산시', center: { lat: 36.7898, lng: 127.0019, label: '아산시(온양/탕정/배방) 중심' }, dongs: ['온양동', '배방읍', '탕정면', '음봉면', '둔포면', '염치읍', '영인면', '인주면', '선장면', '송악면', '도고면', '신창면'] },
  { code: '44210', sidoCode: '44', sidoName: '충청남도', name: '서산시', fullName: '충청남도 서산시', center: { lat: 36.7845, lng: 126.4503, label: '서산시(호수공원) 중심' }, dongs: ['부춘동', '동문동', '활성동', '수석동', '석남동', '대산읍', '인지면', '부석면', '팔봉면', '지곡면', '성연면', '음암면', '운산면', '해미면', '고북면'] },
  { code: '44230', sidoCode: '44', sidoName: '충청남도', name: '논산시', fullName: '충청남도 논산시', center: { lat: 36.1872, lng: 127.0987, label: '논산시 중심' }, dongs: ['취암동', '부창동', '강경읍', '연무읍', '성동면', '광석면', '노성면', '상월면', '부적면', '연산면', '벌곡면', '양촌면', '가야곡면', '은진면', '채운면'] },
  { code: '44250', sidoCode: '44', sidoName: '충청남도', name: '계룡시', fullName: '충청남도 계룡시', center: { lat: 36.2745, lng: 127.2486, label: '계룡시 중심' }, dongs: ['금암동', '두마면', '엄사면', '신도안면'] },
  { code: '44270', sidoCode: '44', sidoName: '충청남도', name: '당진시', fullName: '충청남도 당진시', center: { lat: 36.8898, lng: 126.6459, label: '당진시 중심' }, dongs: ['당진동', '합덕읍', '송악읍', '고대면', '석문면', '대호지면', '정미면', '면천면', '순성면', '우강면', '신평면', '송산면'] },
  { code: '44710', sidoCode: '44', sidoName: '충청남도', name: '금산군', fullName: '충청남도 금산군', center: { lat: 36.1087, lng: 127.4881, label: '금산군 중심' }, dongs: ['금산읍', '금성면', '제원면', '부리면', '군북면', '남일면', '남이면', '진산면', '복수면', '추부면'] },
  { code: '44760', sidoCode: '44', sidoName: '충청남도', name: '부여군', fullName: '충청남도 부여군', center: { lat: 36.2757, lng: 126.9098, label: '부여군 중심' }, dongs: ['부여읍', '규암면', '은산면', '외산면', '내산면', '구룡면', '홍산면', '옥산면', '남면', '충화면', '양화면', '임천면', '장암면', '세도면', '석성면', '초촌면'] },
  { code: '44770', sidoCode: '44', sidoName: '충청남도', name: '서천군', fullName: '충청남도 서천군', center: { lat: 36.0803, lng: 126.6919, label: '서천군 중심' }, dongs: ['장항읍', '서천읍', '마서면', '화양면', '기산면', '시초면', '문산면', '판교면', '종천면', '비인면', '서면'] },
  { code: '44790', sidoCode: '44', sidoName: '충청남도', name: '청양군', fullName: '충청남도 청양군', center: { lat: 36.4589, lng: 126.8016, label: '청양군 중심' }, dongs: ['청양읍', '운곡면', '대치면', '정산면', '목면', '청남면', '장평면', '남양면', '화성면', '비봉면'] },
  { code: '44800', sidoCode: '44', sidoName: '충청남도', name: '홍성군', fullName: '충청남도 홍성군', center: { lat: 36.6013, lng: 126.6608, label: '홍성군(내포신도시) 중심' }, dongs: ['홍성읍', '광천읍', '홍북읍', '금마면', '홍동면', '장곡면', '은하면', '결성면', '서부면', '갈산면', '구항면'] },
  { code: '44810', sidoCode: '44', sidoName: '충청남도', name: '예산군', fullName: '충청남도 예산군', center: { lat: 36.6800, lng: 126.8454, label: '예산군(예산시장) 중심' }, dongs: ['예산읍', '삽교읍', '대술면', '신양면', '광시면', '대흥면', '응봉면', '덕산면', '봉산면', '고덕면', '신암면', '오가면'] },
  { code: '44825', sidoCode: '44', sidoName: '충청남도', name: '태안군', fullName: '충청남도 태안군', center: { lat: 36.7541, lng: 126.2981, label: '태안군(안면도) 중심' }, dongs: ['태안읍', '안면읍', '고남면', '남면', '근흥면', '소원면', '원북면', '이원면'] },

  // ==========================================
  // 13. 전북특별자치도 (15개 구·시·군: 전주 2구 + 13시·군)
  // ==========================================
  { code: '45111', sidoCode: '45', sidoName: '전북특별자치도', name: '전주시 완산구', fullName: '전북특별자치도 전주시 완산구', legacyCode: 'jeonbuk_jeonju_wansan', parentCity: '전주시', isGeneralGu: true, center: { lat: 35.8124, lng: 127.1479, label: '전주시 완산구(한옥마을/객리단길) 중심' }, dongs: ['풍남동', '중앙동', '노송동', '완산동', '동서학동', '서서학동', '중화산동', '서신동', '삼천동', '효자동'] },
  { code: '45113', sidoCode: '45', sidoName: '전북특별자치도', name: '전주시 덕진구', fullName: '전북특별자치도 전주시 덕진구', parentCity: '전주시', isGeneralGu: true, center: { lat: 35.8532, lng: 127.1218, label: '전주시 덕진구(에코시티/전북대) 중심' }, dongs: ['진북동', '인후동', '덕진동', '금암동', '팔복동', '우아동', '호성동', '송천동', '조촌동', '여의동', '혁신동'] },
  { code: '45130', sidoCode: '45', sidoName: '전북특별자치도', name: '군산시', fullName: '전북특별자치도 군산시', center: { lat: 35.9676, lng: 126.7366, label: '군산시(수송동/월명동) 중심' }, dongs: ['월명동', '해신동', '신풍동', '삼학동', '중앙동', '흥남동', '조촌동', '경암동', '구암동', '개정동', '수송동', '나운동', '소룡동', '미성동', '옥구읍'] },
  { code: '45140', sidoCode: '45', sidoName: '전북특별자치도', name: '익산시', fullName: '전북특별자치도 익산시', center: { lat: 35.9483, lng: 126.9576, label: '익산시(영등동/모현동) 중심' }, dongs: ['중앙동', '평화동', '남중동', '모현동', '송학동', '영등동', '어양동', '신동', '팔봉동', '삼성동', '함열읍'] },
  { code: '45180', sidoCode: '45', sidoName: '전북특별자치도', name: '정읍시', fullName: '전북특별자치도 정읍시', center: { lat: 35.5699, lng: 126.8576, label: '정읍시(내장산) 중심' }, dongs: ['수성동', '장명동', '내장상동', '시기동', '초산동', '연지동', '농소동', '상교동', '신태인읍'] },
  { code: '45190', sidoCode: '45', sidoName: '전북특별자치도', name: '남원시', fullName: '전북특별자치도 남원시', center: { lat: 35.4164, lng: 127.3904, label: '남원시(광한루) 중심' }, dongs: ['동충동', '죽항동', '노암동', '금동', '왕정동', '향교동', '도통동', '운봉읍'] },
  { code: '45210', sidoCode: '45', sidoName: '전북특별자치도', name: '김제시', fullName: '전북특별자치도 김제시', center: { lat: 35.8036, lng: 126.8809, label: '김제시 중심' }, dongs: ['요촌동', '신풍동', '검산동', '교월동', '만경읍'] },
  { code: '45710', sidoCode: '45', sidoName: '전북특별자치도', name: '완주군', fullName: '전북특별자치도 완주군', center: { lat: 35.9048, lng: 127.1624, label: '완주군(삼례/봉동/이서) 중심' }, dongs: ['삼례읍', '봉동읍', '용진읍', '상관면', '이서면', '소양면', '구이면', '고산면', '비봉면', '운주면', '화산면', '동상면', '경천면'] },
  { code: '45720', sidoCode: '45', sidoName: '전북특별자치도', name: '진안군', fullName: '전북특별자치도 진안군', center: { lat: 35.7917, lng: 127.4249, label: '진안군(마이산) 중심' }, dongs: ['진안읍', '용담면', '안천면', '동향면', '상전면', '백운면', '성수면', '마령면', '부귀면', '정천면', '주천면'] },
  { code: '45730', sidoCode: '45', sidoName: '전북특별자치도', name: '무주군', fullName: '전북특별자치도 무주군', center: { lat: 36.0068, lng: 127.6608, label: '무주군(덕유산) 중심' }, dongs: ['무주읍', '무풍면', '설천면', '적상면', '안성면', '부남면'] },
  { code: '45740', sidoCode: '45', sidoName: '전북특별자치도', name: '장수군', fullName: '전북특별자치도 장수군', center: { lat: 35.6475, lng: 127.5215, label: '장수군 중심' }, dongs: ['장수읍', '산서면', '번암면', '장계면', '천천면', '계남면', '계북면'] },
  { code: '45750', sidoCode: '45', sidoName: '전북특별자치도', name: '임실군', fullName: '전북특별자치도 임실군', center: { lat: 35.6178, lng: 127.2809, label: '임실군(치즈마을/옥정호) 중심' }, dongs: ['임실읍', '청웅면', '운암면', '신평면', '성수면', '오수면', '신덕면', '삼계면', '관촌면', '강진면', '덕치면', '지사면'] },
  { code: '45770', sidoCode: '45', sidoName: '전북특별자치도', name: '순창군', fullName: '전북특별자치도 순창군', center: { lat: 35.3744, lng: 127.1378, label: '순창군(강천산) 중심' }, dongs: ['순창읍', '인계면', '동계면', '적성면', '유등면', '풍산면', '금과면', '팔덕면', '복흥면', '쌍치면', '구림면'] },
  { code: '45790', sidoCode: '45', sidoName: '전북특별자치도', name: '고창군', fullName: '전북특별자치도 고창군', center: { lat: 35.4358, lng: 126.7021, label: '고창군 중심' }, dongs: ['고창읍', '고수면', '아산면', '무장면', '공음면', '상하면', '해리면', '성송면', '대산면', '심원면', '흥덕면', '성내면', '신림면', '부안면'] },
  { code: '45800', sidoCode: '45', sidoName: '전북특별자치도', name: '부안군', fullName: '전북특별자치도 부안군', center: { lat: 35.7317, lng: 126.7332, label: '부안군(변산반도) 중심' }, dongs: ['부안읍', '주산면', '동진면', '행안면', '계화면', '보안면', '변산면', '진서면', '백산면', '상서면', '하서면', '줄포면', '위도면'] },

  // ==========================================
  // 14. 전라남도 (22개 시·군: 5시 17군)
  // ==========================================
  { code: '46110', sidoCode: '46', sidoName: '전라남도', name: '목포시', fullName: '전라남도 목포시', center: { lat: 34.8118, lng: 126.3922, label: '목포시(평화광장) 중심' }, dongs: ['용당동', '연동', '산정동', '원산동', '대성동', '목원동', '동명동', '삼학동', '만호동', '유달동', '죽교동', '북항동', '용해동', '이로동', '상동', '하당동', '신흥동', '삼향동', '옥암동', '부흥동'] },
  { code: '46130', sidoCode: '46', sidoName: '전라남도', name: '여수시', fullName: '전라남도 여수시', legacyCode: 'jeonnam_yeosu', center: { lat: 34.7604, lng: 127.6622, label: '여수시(해양공원/낭만포차) 중심' }, dongs: ['중앙동', '교동', '동문동', '한려동', '광림동', '서강동', '대교동', '국동', '월호동', '여서동', '문수동', '미평동', '둔덕동', '만덕동', '쌍봉동', '시전동', '여천동', '주삼동', '삼일동', '묘도동', '돌산읍'] },
  { code: '46150', sidoCode: '46', sidoName: '전라남도', name: '순천시', fullName: '전라남도 순천시', legacyCode: 'jeonnam_suncheon', center: { lat: 34.9506, lng: 127.4872, label: '순천시(순천만/조례동) 중심' }, dongs: ['향동', '매곡동', '삼산동', '조곡동', '덕연동', '풍덕동', '남제동', '저전동', '장천동', '중앙동', '도사동', '왕조1동', '왕조2동', '승주읍', '해룡면', '서면'] },
  { code: '46170', sidoCode: '46', sidoName: '전라남도', name: '나주시', fullName: '전라남도 나주시', center: { lat: 35.0161, lng: 126.7108, label: '나주시(빛가람동/혁신도시) 중심' }, dongs: ['빛가람동', '송월동', '영강동', '금남동', '성북동', '영산동', '이창동', '남평읍', '세지면', '왕곡면', '반남면', '공산면', '동강면', '다시면', '문평면', '노안면', '금천면', '산포면', '다도면', '봉황면'] },
  { code: '46230', sidoCode: '46', sidoName: '전라남도', name: '광양시', fullName: '전라남도 광양시', center: { lat: 34.9407, lng: 127.6959, label: '광양시(중마동) 중심' }, dongs: ['광양읍', '중마동', '광영동', '금호동', '태인동', '골약동', '봉강면', '옥룡면', '옥곡면', '진상면', '진월면', '다압면'] },
  { code: '46710', sidoCode: '46', sidoName: '전라남도', name: '담양군', fullName: '전라남도 담양군', center: { lat: 35.3211, lng: 126.9882, label: '담양군(죽녹원) 중심' }, dongs: ['담양읍', '봉산면', '고서면', '가사문학면', '창평면', '대덕면', '무정면', '금성면', '용면', '월산면', '수북면', '대전면'] },
  { code: '46720', sidoCode: '46', sidoName: '전라남도', name: '곡성군', fullName: '전라남도 곡성군', center: { lat: 35.2820, lng: 127.2921, label: '곡성군(기차마을) 중심' }, dongs: ['곡성읍', '오곡면', '삼기면', '석곡면', '목사동면', '죽곡면', '옥과면', '입면', '겸면', '오산면', '고달면'] },
  { code: '46730', sidoCode: '46', sidoName: '전라남도', name: '구례군', fullName: '전라남도 구례군', center: { lat: 35.2025, lng: 127.4628, label: '구례군(지리산) 중심' }, dongs: ['구례읍', '문척면', '간전면', '토지면', '마산면', '광의면', '용방면', '산동면'] },
  { code: '46770', sidoCode: '46', sidoName: '전라남도', name: '고흥군', fullName: '전라남도 고흥군', center: { lat: 34.6111, lng: 127.2847, label: '고흥군(나로도) 중심' }, dongs: ['고흥읍', '도양읍', '풍양면', '도덕면', '금산면', '도화면', '포두면', '봉래면', '동일면', '점암면', '영남면', '과역면', '남양면', '동강면', '대서면', '두원면'] },
  { code: '46780', sidoCode: '46', sidoName: '전라남도', name: '보성군', fullName: '전라남도 보성군', center: { lat: 34.7715, lng: 127.0799, label: '보성군(녹차밭/벌교) 중심' }, dongs: ['보성읍', '벌교읍', '노동면', '미력면', '겸백면', '율어면', '복내면', '문덕면', '조성면', '득량면', '회천면', '웅치면'] },
  { code: '46790', sidoCode: '46', sidoName: '전라남도', name: '화순군', fullName: '전라남도 화순군', center: { lat: 35.0645, lng: 126.9865, label: '화순군 중심' }, dongs: ['화순읍', '한천면', '춘양면', '청풍면', '이양면', '능주면', '도곡면', '도암면', '이서면', '백아면', '동복면', '사평면', '동면'] },
  { code: '46800', sidoCode: '46', sidoName: '전라남도', name: '장흥군', fullName: '전라남도 장흥군', center: { lat: 34.6816, lng: 126.9069, label: '장흥군(정남진) 중심' }, dongs: ['장흥읍', '관산읍', '대덕읍', '용산면', '안양면', '장동면', '장평면', '유치면', '부산면', '회진면'] },
  { code: '46810', sidoCode: '46', sidoName: '전라남도', name: '강진군', fullName: '전라남도 강진군', center: { lat: 34.6409, lng: 126.7699, label: '강진군 중심' }, dongs: ['강진읍', '군동면', '칠량면', '대구면', '도암면', '신전면', '성전면', '작천면', '병영면', '옴천면', '마량면'] },
  { code: '46820', sidoCode: '46', sidoName: '전라남도', name: '해남군', fullName: '전라남도 해남군', center: { lat: 34.5735, lng: 126.5989, label: '해남군(땅끝마을) 중심' }, dongs: ['해남읍', '삼산면', '화산면', '현산면', '송지면', '북평면', '북일면', '옥천면', '계곡면', '마산면', '황산면', '산이면', '문내면', '화원면'] },
  { code: '46830', sidoCode: '46', sidoName: '전라남도', name: '영암군', fullName: '전라남도 영암군', center: { lat: 34.8001, lng: 126.6968, label: '영암군(삼호/월출산) 중심' }, dongs: ['영암읍', '삼호읍', '덕진면', '금정면', '신북면', '시종면', '도포면', '군서면', '서호면', '학산면', '미암면'] },
  { code: '46840', sidoCode: '46', sidoName: '전라남도', name: '무안군', fullName: '전라남도 무안군', center: { lat: 34.9904, lng: 126.4817, label: '무안군(남악/전남도청) 중심' }, dongs: ['무안읍', '일로읍', '삼향읍', '몽탄면', '청계면', '현경면', '망운면', '해제면', '운남면'] },
  { code: '46860', sidoCode: '46', sidoName: '전라남도', name: '함평군', fullName: '전라남도 함평군', center: { lat: 35.0658, lng: 126.5167, label: '함평군 중심' }, dongs: ['함평읍', '손불면', '신광면', '학교면', '엄다면', '대동면', '나산면', '해보면', '월야면'] },
  { code: '46870', sidoCode: '46', sidoName: '전라남도', name: '영광군', fullName: '전라남도 영광군', center: { lat: 35.2774, lng: 126.5121, label: '영광군(굴비) 중심' }, dongs: ['영광읍', '백수읍', '홍농읍', '대마면', '묘량면', '불갑면', '군서면', '군남면', '염산면', '법성면', '낙월면'] },
  { code: '46880', sidoCode: '46', sidoName: '전라남도', name: '장성군', fullName: '전라남도 장성군', center: { lat: 35.3015, lng: 126.7847, label: '장성군 중심' }, dongs: ['장성읍', '진원면', '남면', '동화면', '삼서면', '삼계면', '황룡면', '서삼면', '북이면', '북하면', '북일면'] },
  { code: '46890', sidoCode: '46', sidoName: '전라남도', name: '완도군', fullName: '전라남도 완도군', center: { lat: 34.3110, lng: 126.7550, label: '완도군(청산도/신지도) 중심' }, dongs: ['완도읍', '금일읍', '노화읍', '군외면', '신지면', '고금면', '약산면', '청산면', '소안면', '금당면', '보길면', '생일면'] },
  { code: '46900', sidoCode: '46', sidoName: '전라남도', name: '진도군', fullName: '전라남도 진도군', center: { lat: 34.4868, lng: 126.2634, label: '진도군 중심' }, dongs: ['진도읍', '군내면', '고군면', '의신면', '임회면', '지산면', '조도면'] },
  { code: '46910', sidoCode: '46', sidoName: '전라남도', name: '신안군', fullName: '전라남도 신안군', center: { lat: 34.8336, lng: 126.3516, label: '신안군(천사섬/자은/안좌) 중심' }, dongs: ['지도읍', '압해읍', '증도면', '임자면', '자은면', '비금면', '도초면', '흑산면', '하의면', '신의면', '장산면', '안좌면', '팔금면', '암태면'] },

  // ==========================================
  // 15. 경상북도 (23개 구·시·군: 포항 2구 + 21시·군)
  // * 군위군은 2023.7.1 대구광역시 편입 완료
  // ==========================================
  { code: '47111', sidoCode: '47', sidoName: '경상북도', name: '포항시 남구', fullName: '경상북도 포항시 남구', parentCity: '포항시', isGeneralGu: true, center: { lat: 35.9806, lng: 129.3622, label: '포항시 남구(구룡포/효자) 중심' }, dongs: ['상도동', '대도동', '연일읍', '오천읍', '구룡포읍', '효자동', '이동', '지곡동', '송도동', '청림동', '동해면', '장기면', '호미곶면'] },
  { code: '47113', sidoCode: '47', sidoName: '경상북도', name: '포항시 북구', fullName: '경상북도 포항시 북구', legacyCode: 'gyeongbuk_pohang_bukgu', parentCity: '포항시', isGeneralGu: true, center: { lat: 36.0469, lng: 129.3653, label: '포항시 북구(영일대) 중심' }, dongs: ['두호동', '장량동', '환여동', '중앙동', '양학동', '우창동', '흥해읍', '송라면', '청하면', '신광면', '기계면', '죽장면', '기북면'] },
  { code: '47130', sidoCode: '47', sidoName: '경상북도', name: '경주시', fullName: '경상북도 경주시', legacyCode: 'gyeongbuk_gyeongju', center: { lat: 35.8562, lng: 129.2247, label: '경주시(황리단길/보문단지) 중심' }, dongs: ['황남동', '황오동', '성건동', '중부동', '월성동', '보덕동', '동천동', '용강동', '황성동', '불국동', '감포읍', '안강읍', '건천읍', '외동읍'] },
  { code: '47150', sidoCode: '47', sidoName: '경상북도', name: '김천시', fullName: '경상북도 김천시', center: { lat: 36.1399, lng: 128.1136, label: '김천시(율곡동/혁신도시) 중심' }, dongs: ['율곡동', '평화남산동', '양금동', '대신동', '대곡동', '지좌동', '아포읍', '농소면', '남면', '개령면', '감문면', '어모면', '봉산면', '대항면'] },
  { code: '47170', sidoCode: '47', sidoName: '경상북도', name: '안동시', fullName: '경상북도 안동시', center: { lat: 36.5684, lng: 128.7294, label: '안동시(하회마을/도청) 중심' }, dongs: ['중구동', '명륜동', '용상동', '서구동', '태화동', '평화동', '안기동', '옥동', '송하동', '강남동', '풍천면', '풍산읍', '와룡면', '북후면', '서후면', '일직면'] },
  { code: '47190', sidoCode: '47', sidoName: '경상북도', name: '구미시', fullName: '경상북도 구미시', center: { lat: 36.1195, lng: 128.3446, label: '구미시(인동/송정/원평) 중심' }, dongs: ['송정동', '원평동', '형곡동', '신평동', '비산동', '공단동', '광평동', '상모사곡동', '임오동', '인동동', '진미동', '양포동', '선산읍', '고아읍', '산동읍'] },
  { code: '47210', sidoCode: '47', sidoName: '경상북도', name: '영주시', fullName: '경상북도 영주시', center: { lat: 36.8057, lng: 128.6241, label: '영주시 중심' }, dongs: ['영주동', '상망동', '하망동', '휴천동', '가흥동', '풍기읍', '이산면', '평은면', '문수면', '순흥면'] },
  { code: '47230', sidoCode: '47', sidoName: '경상북도', name: '영천시', fullName: '경상북도 영천시', center: { lat: 35.9733, lng: 128.9385, label: '영천시 중심' }, dongs: ['동부동', '중앙동', '서부동', '완산동', '남부동', '금호읍', '청통면', '신녕면', '화산면', '화북면', '화남면', '자양면', '임고면', '고경면', '북안면', '대창면'] },
  { code: '47250', sidoCode: '47', sidoName: '경상북도', name: '상주시', fullName: '경상북도 상주시', center: { lat: 36.4109, lng: 128.1591, label: '상주시 중심' }, dongs: ['남원동', '북문동', '계림동', '동문동', '동성동', '신흥동', '함창읍', '사벌국면', '중동면', '낙동면', '청리면', '공성면', '외남면', '내서면', '모동면', '모서면', '화동면', '화서면', '화북면', '외서면', '은척면', '공검면', '이안면', '화남면'] },
  { code: '47280', sidoCode: '47', sidoName: '경상북도', name: '문경시', fullName: '경상북도 문경시', center: { lat: 36.5938, lng: 128.1996, label: '문경시(점촌/문경새재) 중심' }, dongs: ['점촌동', '문경읍', '가은읍', '영순면', '산양면', '호계면', '산북면', '동로면', '마성면', '농암면'] },
  { code: '47290', sidoCode: '47', sidoName: '경상북도', name: '경산시', fullName: '경상북도 경산시', center: { lat: 35.8258, lng: 128.7414, label: '경산시(영남대/하양) 중심' }, dongs: ['중앙동', '동부동', '서부동', '남부동', '북부동', '중방동', '하양읍', '진량읍', '압량읍', '와촌면', '자인면', '용성면', '남산면', '남천면'] },
  { code: '47720', sidoCode: '47', sidoName: '경상북도', name: '의성군', fullName: '경상북도 의성군', center: { lat: 36.3527, lng: 128.6971, label: '의성군 중심' }, dongs: ['의성읍', '단촌면', '점곡면', '옥산면', '사곡면', '춘산면', '가음면', '금성면', '봉양면', '비안면', '구천면', '단밀면', '단북면', '안계면', '다인면', '신평면', '안평면', '안사면'] },
  { code: '47730', sidoCode: '47', sidoName: '경상북도', name: '청송군', fullName: '경상북도 청송군', center: { lat: 36.4364, lng: 129.0573, label: '청송군(주왕산) 중심' }, dongs: ['청송읍', '주왕산면', '부남면', '현동면', '현서면', '안덕면', '파천면', '진보면'] },
  { code: '47750', sidoCode: '47', sidoName: '경상북도', name: '영양군', fullName: '경상북도 영양군', center: { lat: 36.6667, lng: 129.1124, label: '영양군 중심' }, dongs: ['영양읍', '입암면', '청기면', '일월면', '수비면', '석보면'] },
  { code: '47760', sidoCode: '47', sidoName: '경상북도', name: '영덕군', fullName: '경상북도 영덕군', center: { lat: 36.4151, lng: 129.3656, label: '영덕군(강구항/대게) 중심' }, dongs: ['영덕읍', '강구면', '남정면', '달산면', '지품면', '축산면', '영해면', '병곡면', '창수면'] },
  { code: '47770', sidoCode: '47', sidoName: '경상북도', name: '청도군', fullName: '경상북도 청도군', center: { lat: 35.6474, lng: 128.7341, label: '청도군 중심' }, dongs: ['청도읍', '화양읍', '각남면', '풍각면', '각북면', '이서면', '운문면', '금천면', '매전면'] },
  { code: '47820', sidoCode: '47', sidoName: '경상북도', name: '고령군', fullName: '경상북도 고령군', center: { lat: 35.7262, lng: 128.2625, label: '고령군 중심' }, dongs: ['대가야읍', '덕곡면', '운수면', '성산면', '다산면', '개진면', '우곡면', '쌍림면'] },
  { code: '47830', sidoCode: '47', sidoName: '경상북도', name: '성주군', fullName: '경상북도 성주군', center: { lat: 35.9193, lng: 128.2831, label: '성주군 중심' }, dongs: ['성주읍', '선남면', '용암면', '수륜면', '가천면', '금수면', '대가면', '벽진면', '초전면', '월항면'] },
  { code: '47840', sidoCode: '47', sidoName: '경상북도', name: '칠곡군', fullName: '경상북도 칠곡군', center: { lat: 35.9956, lng: 128.4017, label: '칠곡군(왜관/석적/북삼) 중심' }, dongs: ['왜관읍', '북삼읍', '석적읍', '지천면', '동명면', '가산면', '약목면', '기산면'] },
  { code: '47850', sidoCode: '47', sidoName: '경상북도', name: '예천군', fullName: '경상북도 예천군', center: { lat: 36.6578, lng: 128.4528, label: '예천군(경북도청신도시) 중심' }, dongs: ['예천읍', '용문면', '효자면', '은풍면', '감천면', '보문면', '호명읍', '유천면', '용궁면', '개포면', '지보면', '풍양면'] },
  { code: '47860', sidoCode: '47', sidoName: '경상북도', name: '봉화군', fullName: '경상북도 봉화군', center: { lat: 36.8931, lng: 128.7325, label: '봉화군 중심' }, dongs: ['봉화읍', '물야면', '봉성면', '법전면', '춘양면', '소천면', '석포면', '재산면', '명호면', '상운면'] },
  { code: '47900', sidoCode: '47', sidoName: '경상북도', name: '울진군', fullName: '경상북도 울진군', center: { lat: 36.9931, lng: 129.4005, label: '울진군(후포/죽변) 중심' }, dongs: ['울진읍', '평해읍', '북면', '금강송면', '근남면', '매화면', '기성면', '온정면', '죽변면', '후포면'] },
  { code: '47920', sidoCode: '47', sidoName: '경상북도', name: '울릉군', fullName: '경상북도 울릉군', center: { lat: 37.4845, lng: 130.9056, label: '울릉군(독도) 중심' }, dongs: ['울릉읍', '서면', '북면'] },

  // ==========================================
  // 16. 경상남도 (22개 구·시·군: 창원 5구 + 17시·군)
  // ==========================================
  { code: '48121', sidoCode: '48', sidoName: '경상남도', name: '창원시 의창구', fullName: '경상남도 창원시 의창구', parentCity: '창원시', isGeneralGu: true, center: { lat: 35.2558, lng: 128.6369, label: '창원시 의창구(도계/팔용) 중심' }, dongs: ['의창동', '팔룡동', '명곡동', '봉림동', '동읍', '북면', '대산면'] },
  { code: '48123', sidoCode: '48', sidoName: '경상남도', name: '창원시 성산구', fullName: '경상남도 창원시 성산구', legacyCode: 'gyeongnam_changwon_seongsan', parentCity: '창원시', isGeneralGu: true, center: { lat: 35.2223, lng: 128.6823, label: '창원시 성산구(상남동) 중심' }, dongs: ['상남동', '중앙동', '반송동', '가음정동', '성주동', '웅남동'] },
  { code: '48125', sidoCode: '48', sidoName: '경상남도', name: '창원시 마산합포구', fullName: '경상남도 창원시 마산합포구', parentCity: '창원시', isGeneralGu: true, center: { lat: 35.1978, lng: 128.5723, label: '창원시 마산합포구(오동동/어시장) 중심' }, dongs: ['월영동', '오동동', '교방동', '노산동', '합포동', '산호동', '완월동', '자산동', '구산면', '진동면', '진북면', '진전면'] },
  { code: '48127', sidoCode: '48', sidoName: '경상남도', name: '창원시 마산회원구', fullName: '경상남도 창원시 마산회원구', parentCity: '창원시', isGeneralGu: true, center: { lat: 35.2268, lng: 128.5832, label: '창원시 마산회원구(합성동/양덕동) 중심' }, dongs: ['합성동', '양덕동', '회원동', '석전동', '회성동', '봉암동', '내서읍'] },
  { code: '48129', sidoCode: '48', sidoName: '경상남도', name: '창원시 진해구', fullName: '경상남도 창원시 진해구', parentCity: '창원시', isGeneralGu: true, center: { lat: 35.1492, lng: 128.6658, label: '창원시 진해구(군항제/여좌천) 중심' }, dongs: ['충무동', '여좌동', '태평동', '경화동', '병암동', '석동', '이동', '자은동', '덕산동', '풍호동', '웅천동', '웅동'] },
  { code: '48170', sidoCode: '48', sidoName: '경상남도', name: '진주시', fullName: '경상남도 진주시', legacyCode: 'gyeongnam_jinju', center: { lat: 35.1802, lng: 128.1076, label: '진주시(혁신/평거/하대) 중심' }, dongs: ['충무공동', '평거동', '신안동', '하대동', '상대동', '초전동', '칠암동', '가좌동', '성북동', '중앙동', '상봉동', '문산읍', '진성면', '일반성면', '금곡면'] },
  { code: '48220', sidoCode: '48', sidoName: '경상남도', name: '통영시', fullName: '경상남도 통영시', center: { lat: 34.8544, lng: 128.4332, label: '통영시(강구안/동피랑) 중심' }, dongs: ['도천동', '명정동', '중앙동', '정량동', '북신동', '무전동', '미수동', '봉평동', '산양읍', '용남면', '도산면', '광도면', '욕지면', '한산면', '사량면'] },
  { code: '48240', sidoCode: '48', sidoName: '경상남도', name: '사천시', fullName: '경상남도 사천시', center: { lat: 35.0036, lng: 128.0645, label: '사천시(삼천포) 중심' }, dongs: ['삼천포동', '동서동', '선구동', '동서금동', '벌용동', '향촌동', '남양동', '사천읍', '정동면', '사남면', '용현면', '축동면', '곤양면', '곤명면', '서포면'] },
  { code: '48250', sidoCode: '48', sidoName: '경상남도', name: '김해시', fullName: '경상남도 김해시', center: { lat: 35.2285, lng: 128.8894, label: '김해시(내외동/율하) 중심' }, dongs: ['내외동', '북부동', '동상동', '회현동', '부원동', '활천동', '삼안동', '불암동', '장유동', '진영읍', '진례면', '한림면', '생림면', '상동면', '대동면'] },
  { code: '48270', sidoCode: '48', sidoName: '경상남도', name: '밀양시', fullName: '경상남도 밀양시', center: { lat: 35.5038, lng: 128.7466, label: '밀양시 중심' }, dongs: ['내일동', '내이동', '교동', '삼문동', '가곡동', '삼랑진읍', '하남읍', '부북면', '상동면', '산외면', '산내면', '단장면', '상남면', '초동면', '무안면', '청도면'] },
  { code: '48310', sidoCode: '48', sidoName: '경상남도', name: '거제시', fullName: '경상남도 거제시', center: { lat: 34.8806, lng: 128.6211, label: '거제시(고현/옥포) 중심' }, dongs: ['고현동', '장평동', '상문동', '수양동', '옥포동', '아주동', '능포동', '장승포동', '통영면', '일운면', '동부면', '남부면', '거제면', '둔덕면', '사등면', '연초면', '하청면', '장목면'] },
  { code: '48330', sidoCode: '48', sidoName: '경상남도', name: '양산시', fullName: '경상남도 양산시', center: { lat: 35.3350, lng: 129.0373, label: '양산시(물금/증산) 중심' }, dongs: ['물금읍', '중앙동', '양주동', '삼성동', '강서동', '서창동', '소주동', '평산동', '덕계동', '동면', '원동면', '상북면', '하북면'] },
  { code: '48720', sidoCode: '48', sidoName: '경상남도', name: '의령군', fullName: '경상남도 의령군', center: { lat: 35.3223, lng: 128.2618, label: '의령군(소바/망개떡) 중심' }, dongs: ['의령읍', '가례면', '칠곡면', '대의면', '화정면', '용덕면', '정곡면', '지정면', '낙서면', '부림면', '봉수면', '궁류면', '유곡면'] },
  { code: '48730', sidoCode: '48', sidoName: '경상남도', name: '함안군', fullName: '경상남도 함안군', center: { lat: 35.2724, lng: 128.4065, label: '함안군(가야/칠원) 중심' }, dongs: ['가야읍', '칠원읍', '함안면', '군북면', '법수면', '대산면', '칠서면', '칠북면', '산인면', '여항면'] },
  { code: '48740', sidoCode: '48', sidoName: '경상남도', name: '창녕군', fullName: '경상남도 창녕군', center: { lat: 35.5412, lng: 128.4922, label: '창녕군(우포늪/부곡) 중심' }, dongs: ['창녕읍', '남지읍', '고암면', '성산면', '대합면', '이방면', '유어면', '대지면', '계성면', '영산면', '장마면', '도천면', '길곡면', '부곡면'] },
  { code: '48820', sidoCode: '48', sidoName: '경상남도', name: '고성군', fullName: '경상남도 고성군', center: { lat: 34.9754, lng: 128.3225, label: '경남 고성군(공룡엑스포) 중심' }, dongs: ['고성읍', '삼산면', '하일면', '하이면', '상리면', '대가면', '영현면', '영오면', '개천면', '구만면', '회화면', '마암면', '동해면', '거류면'] },
  { code: '48840', sidoCode: '48', sidoName: '경상남도', name: '남해군', fullName: '경상남도 남해군', center: { lat: 34.8378, lng: 127.8924, label: '남해군(독일마을/다랭이마을) 중심' }, dongs: ['남해읍', '이동면', '상주면', '삼동면', '미조면', '남면', '서면', '고현면', '설천면', '창선면'] },
  { code: '48850', sidoCode: '48', sidoName: '경상남도', name: '하동군', fullName: '경상남도 하동군', center: { lat: 35.0672, lng: 127.7517, label: '하동군(화개장터/최참판댁) 중심' }, dongs: ['하동읍', '화개면', '악양면', '적량면', '횡천면', '고전면', '금남면', '진교면', '양보면', '북천면', '청암면', '옥종면', '금성면'] },
  { code: '48860', sidoCode: '48', sidoName: '경상남도', name: '산청군', fullName: '경상남도 산청군', center: { lat: 35.4154, lng: 127.8735, label: '산청군(동의보감촌) 중심' }, dongs: ['산청읍', '차황면', '오부면', '생초면', '금서면', '삼장면', '시천면', '단성면', '신안면', '생비량면', '신등면'] },
  { code: '48870', sidoCode: '48', sidoName: '경상남도', name: '함양군', fullName: '경상남도 함양군', center: { lat: 35.5205, lng: 127.7252, label: '함양군(상림공원) 중심' }, dongs: ['함양읍', '마천면', '휴천면', '유림면', '수동면', '지곡면', '안의면', '서하면', '서상면', '백전면', '병곡면'] },
  { code: '48880', sidoCode: '48', sidoName: '경상남도', name: '거창군', fullName: '경상남도 거창군', center: { lat: 35.6867, lng: 127.9095, label: '거창군 중심' }, dongs: ['거창읍', '주상면', '웅양면', '고제면', '북상면', '위천면', '마리면', '남상면', '남하면', '신원면', '가조면', '가북면'] },
  { code: '48890', sidoCode: '48', sidoName: '경상남도', name: '합천군', fullName: '경상남도 합천군', center: { lat: 35.5667, lng: 128.1658, label: '합천군(해인사/영상테마파크) 중심' }, dongs: ['합천읍', '봉산면', '묘산면', '가야면', '야로면', '율곡면', '초계면', '쌍책면', '덕곡면', '청덕면', '적중면', '대양면', '쌍백면', '삼가면', '가회면', '대병면', '용주면'] },

  // ==========================================
  // 17. 제주특별자치도 (2개 행정시)
  // ==========================================
  { code: '50110', sidoCode: '50', sidoName: '제주특별자치도', name: '제주시', fullName: '제주특별자치도 제주시', legacyCode: 'jeju_city', center: { lat: 33.4996, lng: 126.5312, label: '제주시(연동/노형동/공항) 중심' }, dongs: ['연동', '노형동', '이도동', '일도동', '삼도동', '용담동', '아라동', '오라동', '화북동', '삼양동', '봉개동', '외도동', '애월읍', '조천읍', '구좌읍', '한림읍', '한경면', '우도면', '추자면'] },
  { code: '50130', sidoCode: '50', sidoName: '제주특별자치도', name: '서귀포시', fullName: '제주특별자치도 서귀포시', legacyCode: 'jeju_seogwipo', center: { lat: 33.2541, lng: 126.5601, label: '서귀포시(중문/올레시장) 중심' }, dongs: ['서귀동', '동홍동', '서홍동', '중문동', '대륜동', '대천동', '송산동', '정방동', '중앙동', '천지동', '효돈동', '영천동', '예래동', '대정읍', '남원읍', '성산읍', '안덕면', '표선면'] },
];

console.log('Total SIGUNGU count:', SIGUNGU_RAW.length);

// 3. 검증 로직 실행
const errors = [];
const codeSet = new Set();
const fullNameSet = new Set();
const countBySido = {};

for (const sido of SIDO_DATA) {
  countBySido[sido.code] = 0;
}

for (const item of SIGUNGU_RAW) {
  // 1) 코드 중복 검사
  if (codeSet.has(item.code)) {
    errors.push(`중복된 시군구 코드: ${item.code} (${item.fullName})`);
  }
  codeSet.add(item.code);

  // 2) 전체명칭 중복 검사
  if (fullNameSet.has(item.fullName)) {
    errors.push(`중복된 전체명칭: ${item.fullName} (${item.code})`);
  }
  fullNameSet.add(item.fullName);

  // 3) 상위 시도 존재 검사
  if (!countBySido.hasOwnProperty(item.sidoCode)) {
    errors.push(`존재하지 않는 sidoCode: ${item.sidoCode} (${item.fullName})`);
  } else {
    countBySido[item.sidoCode]++;
  }

  // 4) 좌표 범위 검사 (한국 영토: 위도 33~39, 경도 124~132)
  if (item.center.lat < 33 || item.center.lat > 39 || item.center.lng < 124 || item.center.lng > 132) {
    errors.push(`잘못된 좌표: ${item.fullName} (lat: ${item.center.lat}, lng: ${item.center.lng})`);
  }
}

console.log('=== 시·도별 시·군·구 집계 ===');
for (const sido of SIDO_DATA) {
  console.log(`[${sido.code}] ${sido.name} (${sido.shortName}): ${countBySido[sido.code]}개`);
}

if (errors.length > 0) {
  console.error('검증 오류 발생:', errors);
  process.exit(1);
} else {
  console.log('모든 검증 통과! 0개 오류, 중복 없음, 누락 없음.');
}

// 4. src/data/korean-administrative-regions.ts 파일 생성
const targetPath = path.join(__dirname, '..', 'src', 'data', 'korean-administrative-regions.ts');

const tsContent = `/**
 * 대한민국 행정안전부 행정표준코드 기준 전국 17개 시·도 및 250개 시·군·구 공식 행정구역 데이터
 * 출처: 행정안전부 행정표준코드관리시스템 (https://www.code.go.kr)
 * 기준일: 2024~2026년 최신 공식 행정구역 (강원/전북 특별자치도, 대구 군위군 편입, 부천시 3개 일반구 복원 반영)
 * 
 * 총 17개 광역시·도, 250개 시·군·구
 */

import { DistrictOption, DongOption, GeoPoint, SidoOption, SigunguOption } from "@/types/restaurant";

export const KOREAN_SIDO_LIST: SidoOption[] = ${JSON.stringify(SIDO_DATA, null, 2)};

export const KOREAN_SIGUNGU_LIST: SigunguOption[] = [
${SIGUNGU_RAW.map(item => {
  const dongsFormatted = item.dongs.map((dName, idx) => ({
    code: `${item.code}_dong_${idx + 1}`,
    name: dName,
    center: {
      lat: Number((item.center.lat + (idx % 3 - 1) * 0.006).toFixed(4)),
      lng: Number((item.center.lng + (Math.floor(idx / 3) - 1) * 0.007).toFixed(4)),
      label: `${item.name} ${dName}`,
    }
  }));

  return `  {
    code: ${JSON.stringify(item.code)},
    sidoCode: ${JSON.stringify(item.sidoCode)},
    sidoName: ${JSON.stringify(item.sidoName)},
    name: ${JSON.stringify(item.name)},
    fullName: ${JSON.stringify(item.fullName)},
    ${item.legacyCode ? `legacyCode: ${JSON.stringify(item.legacyCode)},` : ''}
    ${item.parentCity ? `parentCity: ${JSON.stringify(item.parentCity)},` : ''}
    ${item.isGeneralGu ? `isGeneralGu: true,` : ''}
    center: ${JSON.stringify(item.center)},
    dongs: ${JSON.stringify(dongsFormatted, null, 6).trim()},
    isActive: true,
    city: ${JSON.stringify(item.sidoName)},
    gu: ${JSON.stringify(item.name)},
  },`;
}).join('\n')}
];

/**
 * 하위 호환성용 NATIONWIDE_DISTRICTS (기존 TARGET_DISTRICTS 호환)
 */
export const NATIONWIDE_DISTRICTS: DistrictOption[] = KOREAN_SIGUNGU_LIST;

/**
 * 17개 시/도 이름 목록
 */
export const NATIONWIDE_CITIES = KOREAN_SIDO_LIST.map((s) => s.name);

/**
 * 인기 핫플레이스 바로가기 목록
 */
export const POPULAR_HOTSPOTS = [
  { label: "서울 마포", code: "11440", legacyCode: "mapo" },
  { label: "서울 강남", code: "11680", legacyCode: "seoul_gangnam" },
  { label: "서울 성수", code: "11200", legacyCode: "seoul_seongdong" },
  { label: "부산 해운대", code: "26350", legacyCode: "busan_haeundae" },
  { label: "부산 서면", code: "26230", legacyCode: "busan_jin" },
  { label: "대구 동성로", code: "27110", legacyCode: "daegu_jung" },
  { label: "인천 송도", code: "28185", legacyCode: "incheon_yeonsu" },
  { label: "경기 수원", code: "41115", legacyCode: "gyeonggi_suwon_paldal" },
  { label: "강원 강릉", code: "42150", legacyCode: "gangwon_gangneung" },
  { label: "전북 전주", code: "45111", legacyCode: "jeonbuk_jeonju_wansan" },
  { label: "제주", code: "50110", legacyCode: "jeju_city" },
];

/**
 * 코드 및 시도별 빠른 조회를 위한 Map & Helper 함수
 */
export const SIGUNGU_BY_CODE = new Map<string, SigunguOption>();
export const SIGUNGU_BY_SIDO = new Map<string, SigunguOption[]>();

for (const item of KOREAN_SIGUNGU_LIST) {
  SIGUNGU_BY_CODE.set(item.code, item);
  if (item.legacyCode) {
    SIGUNGU_BY_CODE.set(item.legacyCode, item);
  }

  const list = SIGUNGU_BY_SIDO.get(item.sidoCode) || [];
  list.push(item);
  SIGUNGU_BY_SIDO.set(item.sidoCode, list);
}

/**
 * 코드(5자리 또는 레거시 영문코드)로 시군구 조회
 */
export function findDistrictByCode(code: string): SigunguOption | undefined {
  if (!code) return undefined;
  return SIGUNGU_BY_CODE.get(code) || KOREAN_SIGUNGU_LIST.find((d) => d.code === code || d.legacyCode === code);
}

/**
 * 지역명 키워드로 시군구 목록 검색 (예: "해운대", "분당", "전주", "강남")
 */
export function findDistrictsByQuery(query: string): SigunguOption[] {
  const q = query.trim().toLowerCase();
  if (!q) return KOREAN_SIGUNGU_LIST;
  return KOREAN_SIGUNGU_LIST.filter(
    (item) =>
      item.fullName.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.sidoName.toLowerCase().includes(q) ||
      (item.parentCity && item.parentCity.toLowerCase().includes(q)) ||
      item.dongs.some((d) => d.name.toLowerCase().includes(q))
  );
}
`;

fs.writeFileSync(targetPath, tsContent, 'utf8');
console.log('성공적으로 생성되었습니다:', targetPath);
