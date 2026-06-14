"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { HeroParticles } from "@/components/ui/hero-particles";

/* Deterministic per-element fade-in-up: tagline → heading → subtext → buttons. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* Static buttons — colour transition only, no position/scale movement. */
const CTA_FEEDBACK = "transition-colors duration-200";

export function NuiccHero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Honour reduced-motion: freeze the hero video on its poster frame.
  useEffect(() => {
    if (reduce) videoRef.current?.pause();
  }, [reduce]);

  return (
    <section id="home" className="relative isolate w-full overflow-hidden bg-[#0B132B]">
      {/* Banner tucks UNDER the opaque navbar (top < navbar height) so there is
          no white gap/line between them, while its baked-in "Bridging Horizons"
          title still clears the bar. Sharp, full quality. */}
      <div className="absolute inset-x-0 bottom-0 top-[40px] z-0 md:top-[48px]">
        {/* Animated "Bridging Horizons" banner. Muted/looped autoplay; falls back
            to the poster frame before load and for reduced-motion users. */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/video/bridging-horizons-poster.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="/assets/video/bridging-horizons.mp4" type="video/mp4" />
        </video>
        {/* Top scrim masks the image's light top edge so the banner meets the
            navbar as clean navy (no light/white seam). */}
        <div className="absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-[#0B132B] to-transparent" />
        {/* Dim the whole video so its baked-in "Bridging Horizons" title recedes
            behind the overlay headline (darkest on the left for text legibility),
            plus a vertical lift and a fade into the white page below. */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B132B]/92 via-[#0B132B]/62 to-[#0B132B]/35" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B132B]/70 via-transparent to-[#0B132B]/30" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-[#fbf7ee] to-transparent" />
        {/* Drifting trade-route particles over the banner (subtle, behind text). */}
        <HeroParticles className="pointer-events-none absolute inset-0 z-[2] opacity-60" />
      </div>

      {/* Content. Anchored from the top with a width-proportional offset so the
          copy always clears the banner's baked-in "Bridging Horizons / Global
          Innovation" title with a consistent gap (the title's height scales with
          viewport width because the banner is object-cover by width). */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-start px-4 pb-20 pt-72 md:min-h-[88vh] md:pt-[calc(10vw+15rem)]">
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
            <span className="text-[#D4AF37]">strategic partnerships for business deals</span>
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

      {/* Infinite scroll cue */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 9, 0] }}
          transition={reduce ? undefined : { duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white/40 text-[#B8902A] backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.div>
    </section>
  );
}
