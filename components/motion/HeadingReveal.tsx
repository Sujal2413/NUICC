"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type HeadingRevealProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

/**
 * Masked line-by-line text reveal — each line rises out of its own clip
 * wrapper. The signature move of the reference motion. SplitText's autoSplit
 * waits for fonts and re-splits on resize; reverted entirely under reduced
 * motion or capture mode, so the text is always plainly present.
 */
export function HeadingReveal({ children, as = "h2", className, delay = 0 }: HeadingRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || isCaptureMode()) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              duration: 0.9,
              ease: "power3.out",
              delay,
              stagger: 0.09,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          },
        });
        return () => split.revert();
      });
    },
    { scope: ref },
  );

  const Tag = as;
  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
