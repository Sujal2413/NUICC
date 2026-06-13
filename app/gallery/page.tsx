import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccFooter } from "@/components/ui/nuicc-footer";
import { GalleryGrid } from "@/components/ui/nuicc-gallery";

export const metadata: Metadata = {
  title: "Gallery — Global Leaders & Diplomatic Moments | NUICC",
  description:
    "NUICC connects members with heads of state, policymakers, and executives shaping U.S.–India business. A gallery of the chamber's diplomatic and leadership engagements.",
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGradient gradientFrom="#fbf7ee" gradientTo="#e7eef5" gradientStop="35%" className="bg-background" />
      <NuiccNavbar />

      <section className="mx-auto w-full max-w-6xl px-4 pt-28 md:pt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Gallery · Global Leaders
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Where influence meets opportunity.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          NUICC connects members with the heads of state, policymakers, and industry leaders
          shaping the future of U.S.–India business.
        </p>
      </section>

      <section className="section-pad mx-auto w-full max-w-6xl px-4 pb-20 md:pb-28">
        <GalleryGrid />
      </section>

      <NuiccFooter />
    </main>
  );
}
