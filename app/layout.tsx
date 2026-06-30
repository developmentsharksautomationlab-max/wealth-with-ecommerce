import type { Metadata } from "next";
import { Inter, Exo_2, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";
import RevealObserver from "./components/RevealObserver";
import CursorGlow from "./components/CursorGlow";
import PositionAwareButtons from "./components/PositionAwareButtons";
import Tilt3D from "./components/Tilt3D";
import Scroll3D from "./components/Scroll3D";
import LoadingScreen from "./components/LoadingScreen";

const archivo = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

const fraunces = Exo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-fraunces",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "WealthWithEcom — Systematic E-Commerce Wealth",
  description:
    "WealthWithEcom builds and runs automated stores across Amazon, Shopify, Walmart, Etsy and TikTok. You invest. We operate. You collect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <LoadingScreen />
        <div className="grain" />
        <CursorGlow />
        <PositionAwareButtons />
        <Tilt3D />
        <Scroll3D />
        <RevealObserver />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
