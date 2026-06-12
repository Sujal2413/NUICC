import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/motion/SplashCursor";
import ProgressRail from "@/components/motion/ProgressRail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NUICC | National U.S.-India Chamber of Commerce",
  description:
    "Connecting businesses, fostering trade relationships, and building bridges between the United States and India through strategic partnerships and comprehensive business deals.",
  keywords: [
    "US India trade",
    "chamber of commerce",
    "bilateral trade",
    "NUICC",
    "business matchmaking",
    "India market entry",
  ],
  openGraph: {
    title: "NUICC | National U.S.-India Chamber of Commerce",
    description:
      "Your gateway to strategic partnership for business deals between the United States and India.",
    type: "website",
    url: "https://nuicc.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        {/* Noise texture overlay */}
        <div className="noise" aria-hidden="true" />
        {/* Splash cursor glow */}
        <SplashCursor />
        {/* Scroll progress */}
        <ProgressRail />
        {children}
      </body>
    </html>
  );
}
