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

type Item = { img: string; name: string };

function Card({ item }: { item: Item }) {
  return (
    <div className="gl-card">
      <div className="gl-card-inner">
        <img src={item.img} alt={item.name} />
        <div className="gl-card-overlay">
          <span className="gl-card-name">{item.name}</span>
        </div>
        <div className="gl-corner gl-corner--tl" />
        <div className="gl-corner gl-corner--br" />
      </div>
    </div>
  );
}

/**
 * Pure-CSS infinite marquee. The track holds the items twice, so animating
 * translate3d from 0 to -50% lands exactly on the duplicate and loops with
 * zero visual seam. Linear easing + GPU compositing = no stutter; no scroll
 * listener, no rAF loop, nothing tied to the page scroll position.
 */
function MarqueeRow({ items, direction, duration }: { items: Item[]; direction: "left" | "right"; duration: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="gl-marquee-row">
      <div
        className={`gl-marquee-track ${direction === "right" ? "gl-marquee-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <Card key={`${item.img}-${i}`} item={item} />
        ))}
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

  return (
    <section ref={sectionRef} id="leaders" className="section section-dark gl-section">
      {/* Header */}
      <div className="wrap" style={{ marginBottom: 40 }}>
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

      {/* Infinite marquee — two opposing rows, GPU-composited */}
      <div className="gl-gallery">
        <MarqueeRow items={ROW_1} direction="left" duration={28} />
        <MarqueeRow items={ROW_2} direction="left" duration={38} />
        <div className="gl-fade-left" />
        <div className="gl-fade-right" />
      </div>

      <style jsx global>{`
        /* Tight bottom — the next section hooks cleanly right below. */
        .gl-section {
          padding-bottom: 96px;
        }

        .gl-gallery {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 28px;
          overflow: hidden;
          padding: 0;
        }

        /* ── Marquee ──────────────────── */
        .gl-marquee-row {
          overflow: hidden;
          position: relative;
        }
        .gl-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          animation-name: gl-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .gl-marquee-track--reverse {
          animation-name: gl-marquee-reverse;
        }
        /* Never pauses — the rows glide continuously even on hover; the
           portrait name still fades in on hover via .gl-card-inner:hover. */
        @keyframes gl-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes gl-marquee-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        /* ── Card ─────────────────────── */
        .gl-card {
          flex-shrink: 0;
          width: 300px;
          height: 380px;
          margin-right: 16px;
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
          .gl-section {
            padding-bottom: 72px;
          }
          .gl-card {
            width: 200px;
            height: 260px;
            margin-right: 10px;
          }
          .gl-gallery {
            gap: 18px;
          }
          .gl-marquee-track {
            /* gap handled by card margin */
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
