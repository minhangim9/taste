import { NextResponse } from "next/server";
import { getLiveRestaurants } from "@/services/restaurantService";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawCity = searchParams.get("city");
  const rawGu = searchParams.get("gu");
  const rawDong = searchParams.get("dong");

  const city = rawCity && rawCity !== "all" ? rawCity.trim() : undefined;
  const gu = rawGu && rawGu !== "all" ? rawGu.trim() : undefined;
  const dong = rawDong && rawDong !== "all" ? rawDong.trim() : undefined;

  const numOfRows = parseInt(
    searchParams.get("limit") || searchParams.get("numOfRows") || "50",
    10
  );
  const pageNo = parseInt(searchParams.get("pageNo") || "1", 10);
  const forceRefresh = searchParams.get("refresh") === "true";

  const rawLat = searchParams.get("lat");
  const rawLng = searchParams.get("lng");
  const rawRadius = searchParams.get("radius");
  const category = searchParams.get("category") || undefined;
  const query = searchParams.get("query") || searchParams.get("keyword") || undefined;

  const lat = rawLat ? parseFloat(rawLat) : undefined;
  const lng = rawLng ? parseFloat(rawLng) : undefined;
  const radius = rawRadius ? parseInt(rawRadius, 10) : 3000;

  try {
    const result = await getLiveRestaurants({
      city,
      gu,
      dong,
      lat,
      lng,
      radius,
      category,
      query,
      numOfRows,
      pageNo,
      forceRefresh,
    });
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "음식점 정보를 불러오는 데 실패했습니다.",
        detail: error?.message,
      },
      { status: 500 }
    );
  }
}
