import type { Metadata, Viewport } from "next";
import "@fontsource/inter/latin.css";
import "@fontsource/montserrat/latin.css";
import "@fontsource/playfair-display/latin.css";
import "@fontsource/playfair-display/latin-italic.css";
import "./globals.css";
import SplashCursor from "@/components/motion/SplashCursor";
import ProgressRail from "@/components/motion/ProgressRail";
import MagneticButtons from "@/components/motion/MagneticButtons";

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
    <html lang="en">
      <body>
        {/* Noise texture overlay */}
        <div className="noise" aria-hidden="true" />
        {/* Splash cursor glow */}
        <SplashCursor />
        {/* Scroll progress */}
        <ProgressRail />
        {/* Magnetic hover on the gold CTAs */}
        <MagneticButtons />
        {children}
      </body>
    </html>
  );
}
