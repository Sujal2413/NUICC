"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Stat } from "@/lib/content";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Animated 0 → value counter (fixes the original site's stat counters that
 * rendered as "0"). The real value is server-rendered in the markup, so with
 * JS off or reduced motion the number simply shows.
 */
export function StatCounter({ stat, inverse = false }: { stat: Stat; inverse?: boolean }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const valueClass = inverse ? "text-gold-300" : "text-heading";
  const labelClass = inverse ? "text-on-inverse" : "text-ink";
  const subClass = inverse ? "text-on-inverse-soft" : "text-muted";

  useGSAP(() => {
    const el = numberRef.current;
    if (!el || isCaptureMode()) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: stat.value,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate() {
          el.textContent = Math.round(counter.value).toLocaleString("en-US");
        },
        onComplete() {
          el.textContent = stat.value.toLocaleString("en-US");
        },
      });
    });
  });

  return (
    <div className="text-center">
      <p className={`font-serif text-h2 font-semibold ${valueClass}`}>
        {stat.prefix}
        <span ref={numberRef}>{stat.value.toLocaleString("en-US")}</span>
        {stat.suffix}
      </p>
      <p className={`mt-1 text-body-sm font-semibold ${labelClass}`}>
        {stat.label}
      </p>
      {stat.sub ? (
        <p className={`text-caption ${subClass}`}>
          {stat.sub}
        </p>
      ) : null}
    </div>
  );
}
