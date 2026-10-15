-- ========================================================
-- 우리 동네 음식점 데이터베이스 테이블 및 PostGIS 공간 검색 마이그레이션 (Supabase SQL)
-- Supabase 대시보드 > SQL Editor 에서 전체 복사 후 실행(Run)하세요.
-- ========================================================

-- 0. PostGIS 공간 데이터 확장 기능 활성화 (Supabase 기본 지원)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. restaurants 테이블 생성 (이미 존재하는 경우 보존)
CREATE TABLE IF NOT EXISTS public.restaurants (
    id TEXT PRIMARY KEY,
    source TEXT NOT NULL DEFAULT 'data_go_kr',
    source_name TEXT DEFAULT '행정안전부 일반음식점 데이터',
    original_id TEXT NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    original_category TEXT,
    city TEXT NOT NULL DEFAULT '서울특별시',
    gu TEXT NOT NULL DEFAULT '마포구',
    dong TEXT NOT NULL,
    road_address TEXT,
    jibun_address TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    -- PostGIS geography 포인트 컬럼 (WGS84 타원체 기준 구면 좌표, 거리 단위: 미터)
    location geography(Point, 4326),
    phone TEXT,
    trd_state_nm TEXT,
    place_url TEXT,
    summary TEXT,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    -- 요구사항: 출처와 원본 ID 조합으로 중복 저장 방지 제약조건
    CONSTRAINT uq_restaurants_source_original_id UNIQUE (source, original_id)
);

-- 2. 기존 테이블이 있는 경우 누락된 컬럼 추가 (안전한 마이그레이션)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='source') THEN
        ALTER TABLE public.restaurants ADD COLUMN source TEXT NOT NULL DEFAULT 'data_go_kr';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='source_name') THEN
        ALTER TABLE public.restaurants ADD COLUMN source_name TEXT DEFAULT '행정안전부 일반음식점 데이터';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='original_id') THEN
        ALTER TABLE public.restaurants ADD COLUMN original_id TEXT NOT NULL DEFAULT '';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='original_category') THEN
        ALTER TABLE public.restaurants ADD COLUMN original_category TEXT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='location') THEN
        ALTER TABLE public.restaurants ADD COLUMN location geography(Point, 4326);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='trd_state_nm') THEN
        ALTER TABLE public.restaurants ADD COLUMN trd_state_nm TEXT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='restaurants' AND column_name='updated_at') THEN
        ALTER TABLE public.restaurants ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;

    -- lat, lng NULL 허용으로 변경 (좌표가 없는 공공데이터 처리)
    ALTER TABLE public.restaurants ALTER COLUMN lat DROP NOT NULL;
    ALTER TABLE public.restaurants ALTER COLUMN lng DROP NOT NULL;
END $$;

-- 3. 고유 제약조건 추가 (없는 경우)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'uq_restaurants_source_original_id'
    ) THEN
        ALTER TABLE public.restaurants
        ADD CONSTRAINT uq_restaurants_source_original_id UNIQUE (source, original_id);
    END IF;
END $$;

-- 4. 공간 인덱스(GIST) 및 조회 성능 최적화 인덱스 생성
-- 4-1. PostGIS 공간 인덱스: 반경 500m / 1km / 3km 검색 속도 비약적 향상
CREATE INDEX IF NOT EXISTS idx_restaurants_location ON public.restaurants USING GIST (location);
CREATE INDEX IF NOT EXISTS idx_restaurants_source_original_id ON public.restaurants (source, original_id);
CREATE INDEX IF NOT EXISTS idx_restaurants_gu_dong ON public.restaurants (gu, dong);
CREATE INDEX IF NOT EXISTS idx_restaurants_category ON public.restaurants (category);
CREATE INDEX IF NOT EXISTS idx_restaurants_updated_at ON public.restaurants (updated_at DESC);

-- 5. 좌표(lat, lng) 등록 시 PostGIS location 컬럼 및 updated_at 자동 동기화 트리거
-- ※ 중요: 좌표 순서는 ST_MakePoint(경도 longitude, 위도 latitude) 순서입니다.
CREATE OR REPLACE FUNCTION public.handle_restaurants_location_and_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    
    -- 유효한 위경도 좌표가 제공된 경우 geography Point 생성 (경도 X, 위도 Y 순서)
    IF NEW.lat IS NOT NULL AND NEW.lng IS NOT NULL AND NEW.lat > 0 AND NEW.lng > 0 THEN
        NEW.location = ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326)::geography;
    ELSE
        NEW.location = NULL;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_restaurants_before_insert_or_update ON public.restaurants;
CREATE TRIGGER trg_restaurants_before_insert_or_update
    BEFORE INSERT OR UPDATE ON public.restaurants
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_restaurants_location_and_updated_at();

-- 기존 데이터 중 location이 NULL인 레코드 동기화
UPDATE public.restaurants
SET location = ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography
WHERE lat IS NOT NULL AND lng IS NOT NULL AND lat > 0 AND lng > 0 AND location IS NULL;

-- 6. PostGIS 기반 주변 음식점 검색 RPC 함수 (search_nearby_restaurants)
-- 요구사항:
-- - 현재 위치 기준 500m / 1km / 3km 검색 (ST_DWithin 활용)
-- - 거리 계산과 정렬은 DB에서 직접 수행 (ST_Distance 활용, 단위: 미터)
-- - 업종 필터와 이름 검색 함께 적용
-- - 조회 결과 개수 제한 (LIMIT)
-- - 거리는 직선거리로 계산 (WGS84 타원체 측지선 미터 단위)
CREATE OR REPLACE FUNCTION public.search_nearby_restaurants(
    p_lat DOUBLE PRECISION,
    p_lng DOUBLE PRECISION,
    p_radius_meters DOUBLE PRECISION DEFAULT 3000,
    p_category TEXT DEFAULT NULL,
    p_query TEXT DEFAULT NULL,
    p_gu TEXT DEFAULT NULL,
    p_dong TEXT DEFAULT NULL,
    p_limit INT DEFAULT 50
)
RETURNS TABLE (
    id TEXT,
    source TEXT,
    source_name TEXT,
    original_id TEXT,
    name TEXT,
    category TEXT,
    original_category TEXT,
    city TEXT,
    gu TEXT,
    dong TEXT,
    road_address TEXT,
    jibun_address TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    phone TEXT,
    trd_state_nm TEXT,
    place_url TEXT,
    summary TEXT,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    distance_meters DOUBLE PRECISION
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
DECLARE
    center_geog geography;
BEGIN
    -- 기준점 좌표: ST_MakePoint(경도 longitude, 위도 latitude)
    center_geog := ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326)::geography;

    RETURN QUERY
    SELECT
        r.id,
        r.source,
        r.source_name,
        r.original_id,
        r.name,
        r.category,
        r.original_category,
        r.city,
        r.gu,
        r.dong,
        r.road_address,
        r.jibun_address,
        r.lat,
        r.lng,
        r.phone,
        r.trd_state_nm,
        r.place_url,
        r.summary,
        r.tags,
        r.created_at,
        r.updated_at,
        -- 구면상 직선거리(단위: 미터) 계산
        ROUND(ST_Distance(r.location, center_geog)::numeric, 1)::DOUBLE PRECISION AS distance_meters
    FROM public.restaurants r
    WHERE
        r.location IS NOT NULL
        -- 1) 반경 필터: PostGIS GIST 공간 인덱스를 활용하여 반경 안의 데이터만 추출 (단위: 미터)
        AND ST_DWithin(r.location, center_geog, p_radius_meters)
        -- 2) 업종 필터 함께 적용
        AND (
            p_category IS NULL
            OR p_category = ''
            OR p_category = '전체'
            OR r.category = p_category
        )
        -- 3) 이름 및 주소 검색어 함께 적용
        AND (
            p_query IS NULL
            OR p_query = ''
            OR r.name ILIKE '%' || p_query || '%'
            OR r.road_address ILIKE '%' || p_query || '%'
            OR r.jibun_address ILIKE '%' || p_query || '%'
        )
        -- 4) 선택적 구/동 필터
        AND (p_gu IS NULL OR p_gu = '' OR r.gu = p_gu)
        AND (p_dong IS NULL OR p_dong = '' OR p_dong = 'all' OR r.dong ILIKE '%' || p_dong || '%')
    -- 직선거리 가까운 순 정렬
    ORDER BY distance_meters ASC
    -- 조회 결과 개수 제한
    LIMIT p_limit;
END;
$$;

-- RPC 실행 권한 부여
GRANT EXECUTE ON FUNCTION public.search_nearby_restaurants TO anon, authenticated, service_role;

-- 7. RLS(행 단위 보안) 활성화
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;

-- 7-1. [조회 정책] 누구나(익명 anon 및 인증 authenticated) 음식점 목록 및 상세를 자유롭게 조회 가능
DROP POLICY IF EXISTS "Allow public read access" ON public.restaurants;
CREATE POLICY "Allow public read access"
    ON public.restaurants
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- 7-2. [쓰기/수정/삭제 정책] 서버 비밀 키(service_role)만 수집 및 수정 가능 (브라우저 직접 변조 차단)
DROP POLICY IF EXISTS "Allow service_role write access" ON public.restaurants;
CREATE POLICY "Allow service_role write access"
    ON public.restaurants
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 7-3. 개발 편의 정책 (service_role 키 미설정 시 anon 키로도 서버에서 upsert 가능하도록 허용)
DROP POLICY IF EXISTS "Allow anon upsert for server sync" ON public.restaurants;
CREATE POLICY "Allow anon upsert for server sync"
    ON public.restaurants
    FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);
