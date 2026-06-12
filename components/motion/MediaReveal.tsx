"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type MediaRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Reveal direction for the clip wipe. */
  from?: "bottom" | "left";
};

/**
 * Image entrance: the frame wipes open while the photograph settles from a
 * slight over-scale — quiet, editorial, never bouncy. Wrap a single <Image>
 * (or any media block). Content stays fully visible without JS.
 */
export function MediaReveal({ children, className, from = "bottom" }: MediaRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || isCaptureMode()) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const clipFrom = from === "bottom" ? "inset(0% 0% 100% 0%)" : "inset(0% 100% 0% 0%)";
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
        tl.from(el, {
          clipPath: clipFrom,
          duration: 0.9,
          ease: "power3.out",
        }).from(
          el.firstElementChild,
          { scale: 1.12, duration: 1.2, ease: "power2.out" },
          "<",
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      {children}
    </div>
  );
}
