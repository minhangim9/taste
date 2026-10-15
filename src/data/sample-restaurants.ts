import { REAL_RESTAURANTS } from "./real-restaurants";
import { Restaurant } from "@/types/restaurant";

export * from "./real-restaurants";

/**
 * 1단계 화면 프로토타입용 샘플 데이터 (명확한 샘플 구분 표기)
 */
export const SAMPLE_RESTAURANTS: Restaurant[] = REAL_RESTAURANTS.map((item) => ({
  ...item,
  source: "sample" as const,
  sourceName: "샘플 데이터",
  originalId: `sample-${item.id}`,
}));
