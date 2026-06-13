"use client";

import { useEffect, useRef } from "react";

const BENEFITS = [
  { num: "01", title: "Access", desc: "Reach 9,200+ members and deep relationships across business, government, policy, and diplomacy.", bg: "#fffaf0", color: "var(--ink)" },
  { num: "02", title: "Expertise", desc: "Get regulatory guidance, tax strategy, market intelligence, and referrals that save time and reduce costly mistakes.", bg: "#0c1f35", color: "var(--ivory)" },
  { num: "03", title: "Influence", desc: "Shape conversations and policies that stimulate U.S.-India trade, investment, and business expansion.", bg: "#10291f", color: "var(--ivory)" },
];

/* Targeted value by member type — surfaces what was previously buried in the
   FAQ. Copy is grounded in NUICC's documented services (matchmaking, trade
   missions, market-entry, advisory, investor access). */
const SEGMENTS = [
  { who: "Startups", desc: "Cross-border mentorship, investor introductions, regulatory insight, innovation roundtables, and pitch opportunities." },
  { who: "Established Companies", desc: "Business matchmaking, trade missions, and market intelligence to expand across the U.S.–India corridor." },
  { who: "Investors", desc: "Curated deal flow, sector insights, and direct connections to founders and partners in both markets." },
  { who: "Market-Entry Firms", desc: "Regulatory roadmaps plus trusted legal, compliance, and local-partner referrals for a confident launch." },
  { who: "Institutions & Nonprofits", desc: "Policy access, delegations, and partnerships that advance bilateral initiatives." },
];

export default function Membership() {
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
    <section
      ref={sectionRef}
      id="membership"
      className="section"
      style={{
        color: "var(--ink)",
        background: `
          linear-gradient(180deg, rgba(248,242,231,.96), rgba(255,250,240,.92)),
          url("/assets/img/home/World-Map.jpg") center / cover
        `,
      }}
    >
      <div className="section-orbit" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Why Join NUICC?</div>
            <h2 className="section-title reveal" style={{ color: "var(--ink)" }}>
              Membership is not about belonging. It is about winning.
            </h2>
          </div>
          <p className="lead reveal">
            Bilateral trade is too important and too complicated to navigate alone. NUICC gives members access, expertise, and influence across two of the world&rsquo;s most dynamic economies.
          </p>
        </div>

        <div
          className="benefit-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
        >
          {BENEFITS.map((b) => (
            <article
              key={b.num}
              className="reveal benefit-card"
              style={{
                minHeight: 390,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 26,
                border: "1px solid rgba(17,24,35,.12)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                position: "relative",
                background: b.bg,
                color: b.color,
                boxShadow: "0 20px 70px rgba(17,24,35,.1)",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(217,179,109,.22), transparent 42%, rgba(224,124,35,.1))",
                  opacity: 0.7, pointerEvents: "none",
                }}
              />
              <span className="eyebrow" style={{ position: "relative" }}>{b.num}</span>
              <div style={{ position: "relative" }}>
                <h3 className="benefit-title" style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 58, lineHeight: 0.9 }}>
                  {b.title}
                </h3>
                <p className="benefit-desc" style={{ margin: "16px 0 0", opacity: 0.72, lineHeight: 1.75 }}>
                  {b.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Targeted value by member type */}
        <div className="seg-block">
          <h3 className="seg-heading reveal">Built for how you do business.</h3>
          <div className="segment-grid">
            {SEGMENTS.map((s) => (
              <div key={s.who} className="reveal segment-card">
                <b className="segment-who">{s.who}</b>
                <p className="segment-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/membership" className="btn btn-light" style={{ fontSize: 14, padding: "0 32px" }}>
            Become a Member
          </a>
        </div>
      </div>

      <style jsx>{`
        .seg-block {
          margin-top: 56px;
        }
        .seg-heading {
          font-family: var(--font-display);
          font-size: clamp(24px, 3.4vw, 36px);
          line-height: 1.1;
          color: var(--ink);
          margin: 0 0 24px;
        }
        .segment-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        .segment-card {
          padding: 22px 20px;
          border: 1px solid rgba(17, 24, 35, 0.14);
          border-top: 3px solid var(--gold);
          border-radius: var(--radius);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .segment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 44px rgba(17, 24, 35, 0.12);
        }
        .segment-who {
          display: block;
          font-family: var(--font-display);
          font-size: 18px;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .segment-desc {
          margin: 0;
          color: #465568;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (prefers-reduced-motion: reduce) {
          .segment-card {
            transition: none;
          }
        }

        @media (max-width: 1040px) {
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .segment-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .benefit-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .seg-block {
            margin-top: 40px;
          }
          .segment-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .benefit-card {
            min-height: 0 !important;
            padding: 22px !important;
            gap: 20px;
          }
          .benefit-title {
            font-size: 32px !important;
          }
          .benefit-desc {
            font-size: 14.5px !important;
            line-height: 1.65 !important;
            margin-top: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
