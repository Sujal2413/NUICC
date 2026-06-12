"use client";

import { useEffect } from "react";

/**
 * Magnetic hover for the gold "Become a Member" CTAs (.btn-light): the button
 * eases toward the cursor while hovered and springs back on exit. Mounted once
 * globally; skipped on touch devices and under prefers-reduced-motion.
 */
export default function MagneticButtons() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>(".btn-light"));
    const strength = 0.3;

    const cleanups = buttons.map((btn) => {
      const onMove = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${mx * strength}px, ${my * strength * 1.2}px)`;
      };
      const onLeave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("pointermove", onMove);
      btn.addEventListener("pointerleave", onLeave);
      return () => {
        btn.removeEventListener("pointermove", onMove);
        btn.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
