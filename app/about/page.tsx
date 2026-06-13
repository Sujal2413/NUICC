import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccFooter } from "@/components/ui/nuicc-footer";
import {
  AboutIntro,
  VisionMission,
  CommitteeBody,
  FounderMessage,
} from "@/components/ui/nuicc-about";

export const metadata: Metadata = {
  title: "About & Leadership — National U.S.–India Chamber of Commerce | NUICC",
  description:
    "For over 20 years NUICC has bridged the United States and India — facilitating $1B+ in bilateral trade for 500+ businesses. Meet founder Dr. Purnima Voria and the executive committee.",
};

export default function AboutPage() {
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
          About NUICC
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          A chamber built at the intersection of commerce, policy, and influence.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          If you are ready to do business between the world&rsquo;s oldest and largest
          democracies, this is where it happens.
        </p>
      </section>

      <section className="section-pad mx-auto w-full max-w-6xl px-4">
        <AboutIntro />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-4">
        <VisionMission />
      </section>

      <section className="section-pad mx-auto w-full max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            The people behind the chamber.
          </h2>
        </div>
        <CommitteeBody />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:pb-28">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Founder Message
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            A vital bridge for ambitious businesses.
          </h2>
        </div>
        <FounderMessage />
      </section>

      <NuiccFooter />
    </main>
  );
}
