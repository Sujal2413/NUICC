"use client";

import { useEffect, useRef, useCallback } from "react";

const SERVICES = [
  { num: "01", title: "Business Matchmaking", desc: "Curated B2B and B2C connections for your business to succeed in the U.S. and India markets." },
  { num: "02", title: "Trade Missions", desc: "Access state delegations and corporate leader missions to India and the United States." },
  { num: "03", title: "Policy Advocacy", desc: "Sector-specific lobbying and strategic positioning with business, diplomatic, and policy leaders." },
  { num: "04", title: "Market Intelligence", desc: "Support with trade regulations, market studies, sector insights, and industry expertise." },
  { num: "05", title: "High Value Networking", desc: "Connect with thought leaders, executives, investors, founders, and government officials." },
  { num: "06", title: "Strategic Advisory", desc: "Expert consultation for doing business between India and the United States." },
];

/* Pointer-driven 3D tilt + tracking radial glow for one card. */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rotY = (px - 0.5) * 10;
    const rotX = (0.5 - py) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    el.style.setProperty("--glow-x", `${px * 100}%`);
    el.style.setProperty("--glow-y", `${py * 100}%`);
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }, []);

  return (
    <article
      ref={ref}
      className="glass-card reveal tilt-card"
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="tilt-glow" aria-hidden="true" />
      {children}
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section section-dark">
      <div className="section-orbit" aria-hidden="true" />
      <div className="wrap">
        {/* Section Head */}
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">What We Do</div>
            <h2 className="section-title reveal">Partner with NUICC to ensure global business success.</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            NUICC promotes bilateral trade through curated connections, market guidance, executive access, and advocacy across the U.S. and India.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {SERVICES.map((service) => (
            <TiltCard
              key={service.num}
              style={{
                minHeight: 270,
                transformStyle: "preserve-3d",
                cursor: "default",
              }}
            >
              <span style={{ display: "block", marginBottom: 46, color: "var(--champagne)", fontSize: 12, fontWeight: 900, letterSpacing: ".18em" }}>
                {service.num}
              </span>
              <h3 style={{ marginBottom: 12, fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1 }}>
                {service.title}
              </h3>
              <p style={{ marginBottom: 0, color: "rgba(248,242,231,.68)", lineHeight: 1.75 }}>
                {service.desc}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .tilt-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          will-change: transform;
        }
        .tilt-card:hover {
          border-color: rgba(217, 179, 109, 0.45);
        }
        .tilt-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
          background: radial-gradient(
            340px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(217, 179, 109, 0.14),
            transparent 65%
          );
        }
        .tilt-card:hover .tilt-glow {
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .tilt-card { transition: none; }
          .tilt-glow { display: none; }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 1040px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
