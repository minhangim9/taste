import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우리 동네 음식점 찾기 (1단계 샘플 프로토타입)",
  description:
    "특정 구·동 기반 우리 동네 음식점 찾기 반응형 웹 서비스 - 샘플 음식점 20개 UI 프로토타입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased selection:bg-orange-100 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
