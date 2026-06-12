"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  /** Stagger direct children instead of revealing the wrapper as one block. */
  stagger?: boolean;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "ul" | "li" | "figure";
};

/**
 * The default entrance everywhere: fade + token-spaced rise as the element enters,
 * triggered once. Content is never gated on animation — elements start fully
 * visible and are only hidden inside the matchMedia callback, so with JS off
 * or prefers-reduced-motion everything simply renders.
 */
export function Reveal({ children, stagger = false, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || isCaptureMode()) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? Array.from(el.children) : el;
        gsap.from(targets, {
          opacity: 0,
          y: "var(--space-5)",
          duration: 0.7,
          ease: "power2.out",
          delay,
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
            // Safety net: if a refresh finds the trigger already scrolled
            // past (deep links, layout shifts), finish the reveal instantly —
            // content must never stay hidden behind an animation.
            onRefresh(self) {
              const anim = self.animation;
              if (self.progress > 0 && anim && !anim.isActive()) anim.progress(1);
            },
          },
        });
      });
    },
    { scope: ref },
  );

  const Tag = as;
  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {children}
    </Tag>
  );
}
