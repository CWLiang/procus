import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "專注 | Procus - 專業顧問媒合平台｜共創商業價值",
  description: "專注 Procus 是專業的顧問媒合平台，連結企業需求與專業資源，提供企業顧問媒合服務與專家品牌打造服務。讓專業落地，讓價值實現。",
  keywords: "顧問, 媒合, 企業諮詢, 專家服務, 商業諮詢, 管理顧問, 策略規劃, 營運優化",
  authors: [{ name: "Procus Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "專注 | Procus - 專業顧問媒合平台",
    description: "連結企業需求與專業資源，共創真實的商業價值",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
