"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Typewriter } from "@/components/ui/typewriter";

/* Deterministic per-element fade-in-up: tagline → heading → subtext → buttons. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const CTA_FEEDBACK =
  "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]";

export function NuiccHero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden">
      {/* Full-bleed banner background — sharp, full quality, never blurred. */}
      <Image
        src="/assets/img/home/bridging-horizons-banner.jpg"
        alt="Bridging Horizons — U.S.–India global innovation and collaboration"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Left text scrim for legibility (keeps the right side bright) + a fade
          into the white page below. No blur. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B132B]/80 via-[#0B132B]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#fbf7ee] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-4 pb-20 pt-32 md:min-h-[88vh]">
        <div className="max-w-2xl">
          <motion.span
            {...rise(0.1)}
            className="inline-flex w-fit items-center rounded-full border border-[#D4AF37]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#E8D9A8] backdrop-blur-sm"
          >
            The Right Passage to India · Since 2005
          </motion.span>
          <motion.h1
            {...rise(0.22)}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your gateway to{" "}
            <span className="text-[#D4AF37]">
              <Typewriter
                words={["Strategic Partnerships", "$1B+ Facilitated Trade", "Global Influence"]}
                speed={70}
                cursorClassName="text-[#D4AF37]"
              />
            </span>
          </motion.h1>
          <motion.p
            {...rise(0.34)}
            className="mt-6 max-w-md text-lg leading-relaxed text-white/80"
          >
            Connecting businesses, policymakers, and investors across the United States
            and India through matchmaking, trade missions, and high-level advisory.
          </motion.p>
          <motion.div {...rise(0.46)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.35}>
              <Button
                asChild
                size="lg"
                className={`w-full rounded-full border border-[#D4AF37] bg-primary text-primary-foreground hover:bg-[#D4AF37] hover:text-[#0B132B] sm:w-auto ${CTA_FEEDBACK}`}
              >
                <a href="/membership">
                  Request Membership <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={`rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white ${CTA_FEEDBACK}`}
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
