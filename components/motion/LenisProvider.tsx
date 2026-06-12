"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Buttery smooth scrolling on desktop pointers, wired into GSAP's ticker so
 * ScrollTrigger stays in sync. Mobile keeps native momentum scrolling, and
 * everything is off under prefers-reduced-motion. Also owns the load-time
 * ScrollTrigger refresh that keeps deep links (/#gallery) revealing correctly.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopPointer = window.matchMedia("(min-width: 48rem) and (pointer: fine)").matches;

    let lenis: Lenis | undefined;
    let tick: ((time: number) => void) | undefined;
    if (!reducedMotion && desktopPointer) {
      lenis = new Lenis({ lerp: 0.12 });
      lenis.on("scroll", ScrollTrigger.update);
      // Exposed for anchor handling and debugging.
      (window as Window & { __lenis?: Lenis }).__lenis = lenis;
      tick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Re-measure triggers once everything (fonts, images) has settled, so
    // deep links like /#gallery fire the reveals that are already in view.
    // Scroll memory must be off or refresh() would yank an anchored load
    // back to the top.
    ScrollTrigger.clearScrollMemory("manual");
    const refresh = () => {
      ScrollTrigger.refresh();
      // Re-anchor deep links after layout settles (images can shift targets).
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          if (lenis) lenis.scrollTo(target, { immediate: true });
          else target.scrollIntoView();
        }
      }
    };
    if (document.readyState === "complete") {
      requestAnimationFrame(refresh);
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
