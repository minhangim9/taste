"use client";

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Database,
  ExternalLink,
  Info,
  MapPin,
  RefreshCw,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { ApiStatusInfo } from "@/services/restaurantService";

interface ServiceStatusBarProps {
  dataSource?: "data_go_kr" | "sample" | "supabase" | "real_data";
  sourceName?: string;
  totalCount: number;
  apiStatus?: ApiStatusInfo | null;
  onRetry?: () => void;
  isLoading?: boolean;
}

export function ServiceStatusBar({
  dataSource = "sample",
  sourceName,
  totalCount,
  apiStatus,
  onRetry,
  isLoading = false,
}: ServiceStatusBarProps) {
  const isSupabase = dataSource === "supabase";
  const isPublicData = dataSource === "data_go_kr";
  const isRealData = isSupabase || isPublicData || dataSource === "real_data";

  return (
    <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-xs">
        {/* 좌측: 데이터 출처 및 상태 표시 */}
        <div className="flex items-center gap-2">
          {isSupabase ? (
            <>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="inline-flex items-center gap-1 rounded bg-emerald-950 px-2 py-0.5 font-bold text-emerald-300 border border-emerald-700">
                <Database className="h-3 w-3 text-emerald-400" />
                Supabase DB 연동 모드
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">
                {sourceName || "Supabase 데이터베이스 (영구 보존)"}{" "}
                <strong className="text-white font-bold">{totalCount}건</strong>
              </span>
            </>
          ) : isPublicData ? (
            <>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="inline-flex items-center gap-1 rounded bg-emerald-950 px-2 py-0.5 font-bold text-emerald-300 border border-emerald-700">
                <CheckCircle2 className="h-3 w-3" />
                실제 공공데이터 연동 모드
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">
                {sourceName || "행정안전부 일반음식점 데이터"}{" "}
                <strong className="text-white font-bold">{totalCount}건</strong>
              </span>
            </>
          ) : (
            <>
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="inline-flex items-center gap-1 rounded bg-amber-950 px-2 py-0.5 font-bold text-amber-300 border border-amber-700">
                <Info className="h-3 w-3" />
                샘플 데이터 모드
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">
                공공데이터 미연동 상태로{" "}
                <strong className="text-white font-bold">{totalCount}개 샘플</strong> 표시 중
              </span>
            </>
          )}
        </div>

        {/* 우측: 연동 상세 칩 */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-300">
          {apiStatus?.withCoordinatesCount !== undefined && (
            <span className="inline-flex items-center gap-1 rounded bg-slate-800 px-2 py-0.5 border border-slate-700 text-slate-300">
              <MapPin className="h-3 w-3 text-orange-400" />
              <span>좌표 보유 {apiStatus.withCoordinatesCount}건</span>
              {apiStatus.withoutCoordinatesCount ? (
                <span className="text-amber-300 font-semibold">
                  (미보유 {apiStatus.withoutCoordinatesCount}건)
                </span>
              ) : null}
            </span>
          )}

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              disabled={isLoading}
              className="inline-flex items-center gap-1 rounded bg-slate-800 hover:bg-slate-700 px-2 py-0.5 border border-slate-600 text-slate-200 transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>{isLoading ? "조회 중..." : "새로고침"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface PublicDataNoticeBannerProps {
  dataSource: "data_go_kr" | "sample" | "supabase" | "real_data";
  apiStatus: ApiStatusInfo | null;
  onRetry?: () => void;
  isLoading?: boolean;
  selectedDongName?: string;
  selectedRegionLabel?: string;
}

/**
 * API 호출 성공/실패/결과 없음/인증키 누락 상태에 대한 상세 안내 배너
 */
export function PublicDataNoticeBanner({
  dataSource,
  apiStatus,
  onRetry,
  isLoading = false,
  selectedDongName = "",
  selectedRegionLabel = "",
}: PublicDataNoticeBannerProps) {
  if (!apiStatus) return null;

  // 1. 공공데이터 인증키 미설정인 경우
  if (apiStatus.errorCode === "SERVICE_KEY_MISSING") {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50/90 p-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-amber-100 p-2 text-amber-700 shrink-0">
            <Info className="h-5 w-5" />
          </div>
          <div className="space-y-1 text-xs text-amber-900 leading-relaxed flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
                샘플 데이터 표시 중
              </span>
              <h2 className="font-bold text-amber-950 text-sm">
                공공데이터 인증키(DATA_GO_KR_SERVICE_KEY) 입력 대기
              </h2>
            </div>
            <p className="text-amber-800">
              서버 환경변수 파일(<code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env.local</code>)에 행정안전부 일반음식점 API 인증키를 설정하시면, 선택한 동네의 실제 공공데이터(최소 20건)가 실시간으로 자동 연동됩니다.
            </p>
            <p className="text-[11px] text-amber-700">
              * 인증키가 설정되기 전까지는 UI 동작 검증을 위해 <strong>[샘플]</strong> 배지가 표기된 프로토타입 데이터를 안전하게 제공합니다.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. 공공데이터 API 통신/인증 실패인 경우
  if (!apiStatus.success) {
    return (
      <div className="rounded-2xl border border-rose-300 bg-rose-50/90 p-4 shadow-2xs">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-rose-100 p-2 text-rose-700 shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="space-y-1 text-xs text-rose-900 leading-relaxed">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-rose-200 px-1.5 py-0.5 text-[10px] font-bold text-rose-900">
                  API 연동 실패 안내
                </span>
                <h2 className="font-bold text-rose-950 text-sm">
                  공공데이터 API 호출 오류 (코드: {apiStatus.errorCode || "FAIL"})
                </h2>
              </div>
              <p className="text-rose-800">
                {apiStatus.errorMessage || "공공데이터포털 서버로부터 응답을 받지 못했습니다."}
              </p>
              <p className="text-[11px] text-rose-700">
                * 서비스 연속성을 위해 <strong>[샘플 데이터]</strong>를 대체 표기하고 있습니다.
              </p>
            </div>
          </div>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              disabled={isLoading}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-white px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-50 transition-colors shadow-2xs disabled:opacity-50"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>{isLoading ? "재시도 중" : "재시도"}</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 3. 정상 호출되었으나 결과가 0건인 경우 (행정구역 누락이 아닌 실제 데이터 0건 구분 명시)
  if ((dataSource === "data_go_kr" || dataSource === "supabase") && apiStatus.totalFetched === 0) {
    const regionDisplay = selectedRegionLabel || selectedDongName || "해당 지역";
    return (
      <div className="rounded-2xl border border-sky-300 bg-sky-50/90 p-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-sky-100 p-2 text-sky-700 shrink-0">
            <Info className="h-5 w-5" />
          </div>
          <div className="space-y-1 text-xs text-sky-900 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-sky-200 px-1.5 py-0.5 text-[10px] font-bold text-sky-900">
                공식 행정구역 조회 결과 (0건)
              </span>
              <h2 className="font-bold text-sky-950 text-sm">
                &apos;{regionDisplay}&apos; 검색 결과 0건
              </h2>
            </div>
            <p className="text-sky-800">
              선택하신 행정구역(<strong>{regionDisplay}</strong>)은 공식 행정안전부 행정표준코드에 정상 등록된 유효한 지역입니다. 현재 DB 및 공공데이터에 해당 지역의 인허가 음식점 데이터가 아직 수집되지 않았거나 필터 조건에 부합하는 업소가 없습니다.
            </p>
            <p className="text-[11px] text-sky-700">
              * 행정구역 데이터 누락 오류가 아닌, 실제 등록 데이터가 0건인 상태입니다.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 4. Supabase DB 조회 (영구 보존 및 새로고침 유지)
  if (dataSource === "supabase") {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50/90 p-3.5 shadow-2xs">
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-emerald-950">
            <Database className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Supabase DB 보존 데이터:</strong> 데이터베이스에 저장된 실제 음식점{" "}
              <strong className="text-emerald-700 font-bold">
                {apiStatus.totalFetched}건
              </strong>{" "}
              조회됨 (새로고침 후에도 유지됨 · 좌표 보유 {apiStatus.withCoordinatesCount}건
              {apiStatus.withoutCoordinatesCount
                ? `, 좌표 미보유 ${apiStatus.withoutCoordinatesCount}건`
                : ""}
              )
            </span>
          </div>
          <span className="rounded-full bg-emerald-700 text-white px-2.5 py-0.5 text-[10px] font-bold shrink-0 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            DB 영구 보존
          </span>
        </div>
      </div>
    );
  }

  // 5. 공공데이터 실시간 수집 성공
  if (dataSource === "data_go_kr") {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50/80 p-3.5 shadow-2xs">
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-emerald-950">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              <strong>공공데이터 연동 완료:</strong> 행정안전부 일반음식점 데이터{" "}
              <strong className="text-emerald-700 font-bold">
                {apiStatus.totalFetched}건
              </strong>{" "}
              조회됨 (좌표 보유 {apiStatus.withCoordinatesCount}건
              {apiStatus.withoutCoordinatesCount
                ? `, 좌표 미보유 ${apiStatus.withoutCoordinatesCount}건`
                : ""}
              )
            </span>
          </div>
          <span className="rounded-full bg-emerald-600 text-white px-2.5 py-0.5 text-[10px] font-bold shrink-0">
            실시간 공공데이터
          </span>
        </div>
      </div>
    );
  }

  return null;
}
