"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Typewriter } from "@/components/ui/typewriter";

/* Deterministic per-element fade-in-up so the hero reveals in sequence:
   tagline → heading → subtext → buttons. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const CTA_FEEDBACK =
  "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]";

export function NuiccHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D tilt on the hero image based on cursor position.
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 150, damping: 15 });
  const springRy = useSpring(ry, { stiffness: 150, damping: 15 });

  // Caption badge floats slightly faster than the image on scroll.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const badgeY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto w-full max-w-6xl px-4 pt-28 md:pt-32"
    >
      <section
        id="home"
        className="grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-14 md:pb-28"
      >
        {/* Staggered text column */}
        <div className="flex flex-col">
          <motion.span
            {...rise(0.1)}
            className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-secondary-foreground"
          >
            The Right Passage to India · Since 2005
          </motion.span>
          <motion.h1
            {...rise(0.22)}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Your gateway to{" "}
            <span className="text-accent">
              <Typewriter
                words={["Strategic Partnerships", "$1B+ Facilitated Trade", "Global Influence"]}
                speed={70}
                cursorClassName="text-[#D4AF37]"
              />
            </span>
          </motion.h1>
          <motion.p
            {...rise(0.34)}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Connecting businesses, policymakers, and investors across the United States
            and India through matchmaking, trade missions, and high-level advisory.
          </motion.p>
          <motion.div {...rise(0.46)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.35}>
              <Button asChild size="lg" className={`w-full rounded-full sm:w-auto ${CTA_FEEDBACK}`}>
                <a href="/membership">
                  Request Membership <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="outline" className={`rounded-full ${CTA_FEEDBACK}`}>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>

        {/* 3D tilt image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ perspective: 1000 }}
          className="relative"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
            const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
            ry.set(px * 7);
            rx.set(-py * 7);
          }}
          onMouseLeave={() => {
            rx.set(0);
            ry.set(0);
          }}
        >
          <motion.div
            style={{ rotateX: springRx, rotateY: springRy, transformStyle: "preserve-3d" }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-2xl"
          >
            <Image
              src="/assets/img/home/bridging-horizons.jpg"
              alt="Bridging Horizons — U.S.–India global innovation and collaboration"
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[center_42%]"
            />
          </motion.div>

          {/* Glassmorphism caption badge that floats on scroll */}
          <motion.div
            style={{ y: badgeY }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md"
          >
            <p className="text-sm font-semibold text-white">Bridging Horizons</p>
            <p className="text-xs text-white/80">Two decades connecting U.S. &amp; India enterprise</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
