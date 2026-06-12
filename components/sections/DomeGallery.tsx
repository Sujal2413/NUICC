"use client";

import { useEffect, useRef } from "react";

const ROW_1 = [
  { img: "/assets/img/vip/DrV_Birla.jpg", name: "With Kumar Mangalam Birla" },
  { img: "/assets/img/vip/DrV_Chandrashekar.jpg", name: "With Dr. Chandrashekar" },
  { img: "/assets/img/vip/DrV_HonRSingh.jpg", name: "With Hon. Rajnath Singh" },
  { img: "/assets/img/vip/rajasthan_cm.jpg", name: "With Rajasthan CM" },
  { img: "/assets/img/vip/vip1.jpeg", name: "Diplomatic Summit" },
  { img: "/assets/img/vip/vip2.png", name: "Global Business Forum" },
];

const ROW_2 = [
  { img: "/assets/img/vip/DrV_Africa.jpeg", name: "Africa Trade Mission" },
  { img: "/assets/img/vip/DrV_Amb_Kwatra.jpeg", name: "With Amb. Kwatra" },
  { img: "/assets/img/vip/DrV_Amb_Supriya.png", name: "With Amb. Supriya" },
  { img: "/assets/img/vip/DrV_ArvindKrishna.jpg", name: "With Arvind Krishna, IBM" },
  { img: "/assets/img/vip/DrV_Biden.jpeg", name: "With President Biden" },
  { img: "/assets/img/vip/DrV_Dixit.jpeg", name: "With Amb. Dixit" },
];

function MarqueeRow({ items, direction, speed }: { items: typeof ROW_1; direction: "left" | "right"; speed: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;
    let pos = direction === "left" ? 0 : -(track.scrollWidth / 2);
    const step = direction === "left" ? -speed : speed;

    const animate = () => {
      pos += step;
      const half = track.scrollWidth / 2;

      if (direction === "left" && pos <= -half) pos = 0;
      if (direction === "right" && pos >= 0) pos = -half;

      track.style.transform = `translate3d(${pos}px, 0, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="gl-marquee-row">
      <div ref={trackRef} className="gl-marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="gl-card">
            <div className="gl-card-inner">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="gl-card-overlay">
                <span className="gl-card-name">{item.name}</span>
              </div>
              {/* Gold corner accents */}
              <div className="gl-corner gl-corner--tl" />
              <div className="gl-corner gl-corner--br" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 3D Dome Arc (desktop) ───────────────────
   A concave museum wall: every card sits on the inside of a cylinder via
   rotateY(angle) → translateZ(-R), and scrolling through the tall section
   pans the whole wall so each portrait sweeps past center stage. */
function DomeArc({ items }: { items: typeof ROW_1 }) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const wall = wallRef.current;
    if (!sticky || !wall) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const track = sticky.parentElement!;
      const rect = track.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0.5;
      const rotation = -62 + p * 124; // pan the wall across the full arc
      wall.style.transform = `translateZ(-260px) rotateY(${rotation}deg)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const STEP = 13; // degrees between portraits
  const RADIUS = 1400; // concave wall radius
  const startAngle = -((items.length - 1) / 2) * STEP;

  return (
    <div className="dome-track">
      <div ref={stickyRef} className="dome-sticky">
        <div className="dome-stage">
          <div ref={wallRef} className="dome-wall">
            {items.map((item, i) => (
              <div
                key={item.img}
                className="dome-card"
                style={{
                  transform: `rotateY(${startAngle + i * STEP}deg) translateZ(-${RADIUS}px)`,
                }}
              >
                <div className="gl-card-inner">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="gl-card-overlay">
                    <span className="gl-card-name">{item.name}</span>
                  </div>
                  <div className="gl-corner gl-corner--tl" />
                  <div className="gl-corner gl-corner--br" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gl-fade-left" />
        <div className="gl-fade-right" />
      </div>
    </div>
  );
}

export default function DomeGallery() {
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

  const ALL = [...ROW_1, ...ROW_2];

  return (
    <section ref={sectionRef} id="leaders" className="section section-dark" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div className="wrap" style={{ marginBottom: 48 }}>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Global Leaders</div>
          <h2 className="section-title reveal" style={{ marginTop: 16 }}>
            Where influence meets opportunity.
          </h2>
          <p className="lead reveal" style={{ color: "var(--muted)", marginTop: 16 }}>
            NUICC connects members with world leaders, policymakers, and executives shaping the future of U.S.–India business.
          </p>
        </div>
      </div>

      {/* Desktop: 3D dome wall, panned by scroll */}
      <div className="dome-only">
        <DomeArc items={ALL} />
      </div>

      {/* Mobile / fallback: dual-direction marquee rows */}
      <div className="marquee-only" style={{ position: "relative" }}>
        <div className="gl-gallery">
          <MarqueeRow items={ROW_1} direction="left" speed={0.4} />
          <MarqueeRow items={ROW_2} direction="right" speed={0.3} />
        </div>
        <div className="gl-fade-left" />
        <div className="gl-fade-right" />
      </div>

      <style jsx global>{`
        /* ── Dome (desktop) ───────────── */
        .dome-track {
          height: 240vh;
          position: relative;
        }
        .dome-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .dome-stage {
          width: 100%;
          height: 480px;
          perspective: 1500px;
          perspective-origin: 50% 42%;
        }
        .dome-wall {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform: translateZ(-260px) rotateY(0deg);
          will-change: transform;
        }
        .dome-card {
          position: absolute;
          left: calc(50% - 150px);
          top: calc(50% - 190px);
          width: 300px;
          height: 380px;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .dome-only { display: block; }
        .marquee-only { display: none; }
        @media (max-width: 1040px), (prefers-reduced-motion: reduce) {
          .dome-only { display: none; }
          .marquee-only { display: block; }
        }

        /* ── Gallery Container ─────────── */
        .gl-gallery {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: hidden;
          padding: 0;
        }

        /* ── Marquee Row ──────────────── */
        .gl-marquee-row {
          overflow: hidden;
          position: relative;
        }
        .gl-marquee-row:hover .gl-marquee-track {
          /* Slow down on hover via will-change hint — actual pause handled by JS */
        }

        .gl-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
        }

        /* ── Card ─────────────────────── */
        .gl-card {
          flex-shrink: 0;
          width: 300px;
          height: 380px;
        }

        .gl-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(217, 179, 109, 0.2);
          background: var(--navy);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease;
          cursor: pointer;
        }

        .gl-card-inner:hover {
          transform: scale(1.04) translateY(-6px);
          border-color: rgba(217, 179, 109, 0.5);
          box-shadow: 0 32px 80px rgba(217, 179, 109, 0.15),
                      0 16px 40px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .gl-card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.4s ease;
        }

        .gl-card-inner:hover img {
          transform: scale(1.08);
        }

        /* ── Overlay ──────────────────── */
        .gl-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          background: linear-gradient(
            180deg,
            transparent 40%,
            rgba(7, 17, 29, 0.3) 65%,
            rgba(7, 17, 29, 0.85) 100%
          );
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }

        .gl-card-inner:hover .gl-card-overlay {
          opacity: 1;
        }

        .gl-card-name {
          color: var(--ivory);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          transform: translateY(6px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.4s ease;
          opacity: 0;
        }

        .gl-card-inner:hover .gl-card-name {
          transform: translateY(0);
          opacity: 1;
        }

        /* ── Gold Corner Accents ──────── */
        .gl-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gl-card-inner:hover .gl-corner {
          opacity: 1;
        }
        .gl-corner--tl {
          top: 10px;
          left: 10px;
          border-top: 2px solid var(--champagne);
          border-left: 2px solid var(--champagne);
        }
        .gl-corner--br {
          bottom: 10px;
          right: 10px;
          border-bottom: 2px solid var(--champagne);
          border-right: 2px solid var(--champagne);
        }

        /* ── Edge Fades ───────────────── */
        .gl-fade-left,
        .gl-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 5;
        }
        .gl-fade-left {
          left: 0;
          background: linear-gradient(90deg, var(--night), transparent);
        }
        .gl-fade-right {
          right: 0;
          background: linear-gradient(-90deg, var(--night), transparent);
        }

        /* ── Responsive ───────────────── */
        @media (max-width: 1040px) {
          .gl-card {
            width: 260px;
            height: 330px;
          }
        }

        @media (max-width: 680px) {
          .gl-card {
            width: 200px;
            height: 260px;
          }
          .gl-gallery {
            gap: 10px;
          }
          .gl-marquee-track {
            gap: 10px;
          }
          .gl-fade-left,
          .gl-fade-right {
            width: 40px;
          }
          .gl-card-overlay {
            padding: 12px;
          }
          .gl-card-name {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gl-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
