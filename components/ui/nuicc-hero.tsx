"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";

/* Deterministic per-element fade-in-up: tagline → heading → subtext → buttons. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* Static buttons — colour transition only, no position/scale movement. */
const CTA_FEEDBACK = "transition-colors duration-200";

export function NuiccHero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden bg-white">
      {/* Banner is offset clearly below the fixed navbar (which is ~71px tall) so
          its baked-in "Bridging Horizons" title gets real breathing room and is
          never tucked behind the bar. The white strip above matches the navbar.
          Sharp, full quality. */}
      <div className="absolute inset-x-0 bottom-0 top-[80px] z-0 md:top-[92px]">
        <Image
          src="/assets/img/home/bridging-horizons-banner.jpg"
          alt="Bridging Horizons — U.S.–India global innovation and collaboration"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Left text scrim for legibility (keeps the right side bright) + a fade
            into the white page below. No blur. */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B132B]/80 via-[#0B132B]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#fbf7ee] to-transparent" />
      </div>

      {/* Content. Anchored from the top with a width-proportional offset so the
          copy always clears the banner's baked-in "Bridging Horizons / Global
          Innovation" title with a consistent gap (the title's height scales with
          viewport width because the banner is object-cover by width). */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-start px-4 pb-20 pt-64 md:min-h-[88vh] md:pt-[calc(10vw+13rem)]">
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
            <Button
              asChild
              size="lg"
              className={`w-full rounded-full bg-[#D4AF37] font-bold text-[#0B132B] shadow-lg hover:bg-[#e3c252] sm:w-auto ${CTA_FEEDBACK}`}
            >
              <a href="/membership">
                Request Membership <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={`rounded-full border-2 border-white bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white ${CTA_FEEDBACK}`}
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
