"use client";

import { useEffect, useRef } from "react";

const MARKET_ITEMS = [
  { code: "IN", desc: "Find partners, distributors, dealers, representatives, and local expertise for India market entry." },
  { code: "US", desc: "Build U.S. go-to-market plans, executive introductions, and business development strategy." },
  { code: "TM", desc: "Join trade missions with state delegations, corporate leaders, policymakers, and investors." },
  { code: "CI", desc: "Receive cultural intelligence, negotiation readiness, regulatory context, and industry insight." },
];

export default function Markets() {
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
      className="section market-section"
      style={{
        minHeight: "100svh",
        display: "grid",
        alignItems: "center",
        background: `
          linear-gradient(90deg, rgba(7,17,29,.98), rgba(7,17,29,.72)),
          url("/assets/img/event/event_2section.png") center / cover
        `,
      }}
    >
      <div className="wrap">
        <div
          className="market-grid"
          style={{ display: "grid", gridTemplateColumns: ".72fr 1fr", gap: 36, alignItems: "stretch" }}
        >
          <div
            className="reveal market-panel"
            style={{
              padding: 34,
              border: "1px solid rgba(217,179,109,.24)",
              background: "rgba(7,17,29,.85)",
              backdropFilter: "blur(20px)",
              borderRadius: "var(--radius)",
            }}
          >
            <div className="eyebrow">Market Entry</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>Two markets. One strategic bridge.</h2>
            <p className="body-copy" style={{ color: "rgba(248,242,231,.72)", marginTop: 16 }}>
              NUICC helps companies move in both directions: from the United States into India, and from India into the United States.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {MARKET_ITEMS.map((item) => (
              <div
                key={item.code}
                className="reveal market-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: 18,
                  alignItems: "center",
                  padding: 16,
                  border: "1px solid rgba(217,179,109,.17)",
                  background: "rgba(7,17,29,.82)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "var(--radius)",
                }}
              >
                <b className="market-code" style={{ color: "var(--champagne)", fontFamily: "var(--font-display)", fontSize: 31, lineHeight: 1 }}>
                  {item.code}
                </b>
                <span className="market-desc" style={{ color: "rgba(248,242,231,.72)", lineHeight: 1.6 }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1040px) {
          .market-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 680px) {
          .market-section {
            min-height: 0 !important;
          }
          .market-grid {
            gap: 20px !important;
          }
          .market-panel {
            padding: 22px !important;
          }
          .market-item {
            grid-template-columns: 42px 1fr !important;
            gap: 14px !important;
            padding: 14px !important;
            align-items: start !important;
          }
          .market-code {
            font-size: 23px !important;
            margin-top: 2px;
          }
          .market-desc {
            font-size: 14.5px !important;
          }
        }
      `}</style>
    </section>
  );
}
