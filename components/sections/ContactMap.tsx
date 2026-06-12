"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { contact } from "@/lib/content";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);

/** Chapter locations, in the 852×450 coordinate space of World-Map.jpg. */
const PINS = [
  { name: "North West", x: 134, y: 100 },
  { name: "Denver", x: 161, y: 186 },
  { name: "Rajasthan", x: 567, y: 212 },
  { name: "Bangalore", x: 572, y: 251 },
];

/** Gold trade routes traced over the map's own dashed arcs. */
const ROUTES = [
  { id: "route-north", d: "M 134 100 Q 370 28 567 212" },
  { id: "route-south", d: "M 161 186 Q 380 322 572 251" },
];

/**
 * The contact-section map, animated: when it scrolls into view the trade
 * routes draw themselves between the U.S. and India, the chapter pins pop in
 * and keep a soft radar pulse, and a courier dot travels each route — the
 * living version of the map's printed arcs. Fully static without JS or under
 * prefers-reduced-motion (the printed arcs already tell the story).
 */
export function ContactMap() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || isCaptureMode()) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const paths = root.querySelectorAll<SVGPathElement>("[data-route]");
        const entrance = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        });

        // 1) Routes draw themselves.
        paths.forEach((path, i) => {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
          entrance.to(
            path,
            { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" },
            i * 0.25,
          );
        });

        // 2) Pins pop in with a stagger…
        entrance.from(
          root.querySelectorAll("[data-pin]"),
          { scale: 0, transformOrigin: "center center", duration: 0.5, ease: "back.out(1.4)", stagger: 0.12 },
          0.5,
        );

        // …then keep a quiet radar pulse.
        entrance.call(() => {
          gsap.fromTo(
            root.querySelectorAll("[data-pulse]"),
            { scale: 0.4, opacity: 0.7, transformOrigin: "center center" },
            {
              scale: 2.4,
              opacity: 0,
              duration: 2.2,
              ease: "power1.out",
              repeat: -1,
              stagger: 0.5,
            },
          );

          // 3) Courier dots travel each route, forever.
          root.querySelectorAll<SVGCircleElement>("[data-courier]").forEach((dot, i) => {
            gsap.set(dot, { opacity: 1 });
            gsap.to(dot, {
              motionPath: { path: `#${ROUTES[i].id}`, align: `#${ROUTES[i].id}`, alignOrigin: [0.5, 0.5] },
              duration: 7,
              delay: i * 1.8,
              ease: "none",
              repeat: -1,
              yoyo: true,
            });
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative">
      <Image
        src={contact.map.src}
        alt={contact.map.alt}
        width={852}
        height={450}
        className="h-auto w-full rounded-md object-cover"
      />
      <svg
        viewBox="0 0 852 450"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        fill="none"
      >
        {ROUTES.map((route) => (
          <path
            key={route.id}
            id={route.id}
            data-route
            d={route.d}
            stroke="var(--gold-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0"
          />
        ))}
        {PINS.map((pin) => (
          <g key={pin.name}>
            <circle
              data-pulse
              cx={pin.x}
              cy={pin.y}
              r="9"
              fill="none"
              stroke="var(--gold-500)"
              strokeWidth="1.5"
              opacity="0"
              style={{ transformBox: "fill-box" }}
            />
            <circle
              data-pin
              cx={pin.x}
              cy={pin.y}
              r="5"
              fill="var(--gold-500)"
              stroke="var(--stone-0)"
              strokeWidth="1.5"
              style={{ transformBox: "fill-box" }}
            />
          </g>
        ))}
        {ROUTES.map((route) => (
          <circle
            key={`courier-${route.id}`}
            data-courier
            r="4"
            fill="var(--navy-600)"
            stroke="var(--stone-0)"
            strokeWidth="1.2"
            opacity="0"
          />
        ))}
      </svg>
    </div>
  );
}
