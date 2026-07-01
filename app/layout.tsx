import type { Metadata } from "next";
import { Inter, Exo_2, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
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

/* DejaVu — the actual fonts embedded in the client's reference PDF. Self-hosted
   (not on Google Fonts) and used ONLY on the /ecommerce-automation funnel (.ad
   scope): DejaVu Serif for headings (incl. italic for the gold .g accents) and
   DejaVu Sans for body + labels. See app/fonts/. */
const dejavuSerif = localFont({
  src: [
    { path: "./fonts/DejaVuSerif.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DejaVuSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-dejavu-serif",
});

const dejavuSans = localFont({
  src: [
    { path: "./fonts/DejaVuSans.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DejaVuSans-Oblique.ttf", weight: "400", style: "italic" },
    { path: "./fonts/DejaVuSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-dejavu-sans",
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
      className={`${archivo.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${dejavuSerif.variable} ${dejavuSans.variable}`}
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
