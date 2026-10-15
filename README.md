# taste - 우리동네맛집, 전국맛집 탐색 서비스

행정안전부 일반음식점 공공데이터 및 Supabase PostGIS 공간 데이터베이스를 기반으로 동작하는 모바일 우선 반응형 맛집 탐색 웹 애플리케이션입니다.

## ✨ 주요 기능

1. **전국 공식 행정구역 지원**
   - 행정안전부 행정표준코드(code.go.kr) 기준 대한민국 17개 광역시·도 및 252개 시·군·구 공식 데이터 완비
   - 2단계 연동 드롭다운 (1차: 시·도 + 전국 전체 / 2차: 시·군·구 + 시·도 전체)
   - 실시간 지역명 검색 및 자동완성 ("해운대", "분당", "강릉", "전주" 등)
   - 최신 개편 사항 반영: 강원/전북 특별자치도, 대구 군위군 편입(2023.7), 부천시 3개 일반구 복원(2024.1), 세종특별자치시 단층제 처리

2. **실시간 위치 & 주변 반경 탐색 (PostGIS)**
   - WGS84 좌표계 및 PostGIS 공간 인덱스(GIST) 기반 반경 검색 (500m / 1km / 3km)
   - 브라우저 Geolocation API (GPS) 연동 및 기준점 중심 탐색
   - 개인정보 보호: 사용자 실제 위치 좌표는 DB에 저장하지 않고 클라이언트 메모리에서만 안전하게 처리

3. **공공데이터 & Supabase 실시간 동기화**
   - 행정안전부 일반음식점 API (`apis.data.go.kr/1741000/general_restaurants/info`) 서버 전용 호출
   - 중복 방지: 공공데이터 원본 고유 관리번호(`MGT_NO`) 기반 Upsert로 갱신
   - 영구 보존: 새로고침 후에도 Supabase DB에 저장된 실제 음식점 정보 유지
   - 투명한 상태 안내 배너: 실제 공공데이터, Supabase DB 보존 데이터, 미연동 시 샘플 데이터 명확히 구분

4. **직관적인 지도 및 목록 연동 (카카오 맵)**
   - 카카오 지도 SDK 기반 마커 클러스터링 및 반경 가이드 원 표시
   - 목록 클릭 시 지도 마커로 스무스 포커스 이동
   - 업종별(한식/일식/중식/양식/분식/카페/디저트) 필터링 및 이름/주소 통합 검색

## 🛠 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons
- **Backend / DB**: Next.js Server Route Handlers, Supabase (PostgreSQL 15 + PostGIS)
- **Maps & External APIs**: Kakao Maps JavaScript SDK, 공공데이터포털(행정안전부 일반음식점 인허가 API)

## 🚀 시작하기

### 1. 환경 변수 설정
프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 다음 키를 설정합니다. (`.env.example` 참조)

```env
# 카카오 지도 JavaScript 앱 키
NEXT_PUBLIC_KAKAO_MAP_APP_KEY=your_kakao_javascript_app_key

# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# 공공데이터포털 API 키
DATA_GO_KR_SERVICE_KEY=your_data_go_kr_service_key
```

### 2. 패키지 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드 및 실행
npm run build
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하여 서비스를 확인할 수 있습니다.
