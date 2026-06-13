"use client";

import { useEffect, useRef } from "react";

/* Per-sector blurbs are framed around NUICC's documented services
   (matchmaking, trade missions, market-entry, regulatory guidance, policy
   advocacy, executive introductions) — no invented figures or claims. */
const INDUSTRIES = [
  {
    title: "Technology",
    sub: "Software & IT",
    blurb:
      "Partner matchmaking and market-entry support connecting U.S. and Indian software, SaaS, and IT-services firms to qualified clients, distributors, and engineering talent.",
  },
  {
    title: "Healthcare",
    sub: "Pharmaceuticals",
    blurb:
      "Regulatory roadmaps and partner introductions for pharma, medical-device, and healthcare companies navigating compliance across both markets.",
  },
  {
    title: "Finance",
    sub: "Banking",
    blurb:
      "Executive introductions and trade-mission access linking banks, investors, and fintech ventures to cross-border capital and partners.",
  },
  {
    title: "Aerospace",
    sub: "Defense",
    blurb:
      "Policy advocacy and delegation access for aerospace and defense firms working within sensitive bilateral trade and procurement frameworks.",
  },
  {
    title: "Energy",
    sub: "Renewables",
    blurb:
      "Trade missions and market intelligence for clean-energy, renewables, and infrastructure companies entering India's fast-growing energy sector.",
  },
  {
    title: "Education",
    sub: "Research",
    blurb:
      "Institutional partnerships and diaspora networks connecting universities, research bodies, and edtech ventures across the U.S. and India.",
  },
  {
    title: "Legal",
    sub: "Professional Services",
    blurb:
      "Regulatory guidance and vetted local advisors for law, accounting, and consulting firms supporting cross-border clients.",
  },
  {
    title: "Consumer Goods",
    sub: "Retail",
    blurb:
      "Distribution partnerships and go-to-market strategy for consumer-goods and retail brands expanding into U.S. or Indian markets.",
  },
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
            NUICC members span every major industry, from early-stage ventures to Fortune 500 partnerships — with sector-specific support for each.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind) => (
            <article key={ind.title} className="reveal ind-card">
              <span className="ind-sub">{ind.sub}</span>
              <h3 className="ind-title">{ind.title}</h3>
              <p className="ind-blurb">{ind.blurb}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .ind-card {
          position: relative;
          overflow: hidden;
          padding: 26px;
          border: 1px solid rgba(217, 179, 109, 0.2);
          border-radius: var(--radius);
          background: rgba(255, 250, 240, 0.07);
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
          border-color: rgba(217, 179, 109, 0.55);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
        }
        .ind-card:hover::before {
          transform: scaleX(1);
        }
        .ind-sub {
          display: block;
          color: var(--champagne);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .ind-title {
          font-family: var(--font-display);
          font-size: 30px;
          line-height: 1.05;
          margin: 10px 0 12px;
        }
        .ind-blurb {
          margin: 0;
          color: rgba(248, 242, 231, 0.7);
          font-size: 14.5px;
          line-height: 1.65;
        }
        @media (prefers-reduced-motion: reduce) {
          .ind-card,
          .ind-card::before {
            transition: none;
          }
        }

        @media (max-width: 680px) {
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .ind-card {
            padding: 20px;
          }
          .ind-title {
            font-size: 24px;
            margin: 8px 0 10px;
          }
          .ind-blurb {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
