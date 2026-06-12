"use client";

import { useEffect, useRef } from "react";

const INDUSTRIES = [
  { title: "Technology", sub: "Software" },
  { title: "Healthcare", sub: "Pharmaceuticals" },
  { title: "Finance", sub: "Banking" },
  { title: "Aerospace", sub: "Defense" },
  { title: "Energy", sub: "Renewables" },
  { title: "Education", sub: "Research" },
  { title: "Legal", sub: "Professional Services" },
  { title: "Consumer Goods", sub: "Retail" },
];

export default function Industries() {
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
    <section ref={sectionRef} className="section section-dark">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Industries</div>
            <h2 className="section-title reveal">The sectors shaping global growth.</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            NUICC members span every major industry, from early-stage ventures to Fortune 500 partnerships.
          </p>
        </div>
        <div
          className="industries-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
        >
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.title}
              className="reveal ind-card"
              style={{
                minHeight: 150, padding: 20,
                border: "1px solid rgba(217,179,109,.2)",
                borderRadius: "var(--radius)",
                background: "rgba(255,250,240,.07)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1, marginBottom: 12 }}>
                {ind.title}
              </h3>
              <p style={{ color: "rgba(248,242,231,.68)", fontSize: 14, marginBottom: 0 }}>
                {ind.sub}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ind-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
        }
        .ind-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, var(--saffron), var(--champagne), var(--emerald));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ind-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 250, 240, 0.1);
          border-color: rgba(217, 179, 109, 0.55) !important;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
        }
        .ind-card:hover::before {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .ind-card, .ind-card::before { transition: none; }
        }

        @media (max-width: 1040px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
