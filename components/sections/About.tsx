"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section section-light" style={{ position: "relative" }}>
      <div className="section-orbit" aria-hidden="true" />
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr .82fr", gap: 54, alignItems: "center" }}>
        {/* Text Column */}
        <div>
          <div className="eyebrow reveal">About NUICC</div>
          <h2 className="section-title reveal" style={{ color: "var(--ink)" }}>
            A chamber built at the intersection of commerce, policy, and influence.
          </h2>
          <div className="body-copy reveal" style={{ marginTop: 24 }}>
            <p>
              The National U.S.-India Chamber of Commerce exists to connect American and Indian businesses to the opportunities, partners, and policymakers that matter.
            </p>
            <p>
              For over twenty years, NUICC has helped companies navigate two complex markets with qualified local partners, regulatory roadmaps, tax and legal guidance, market-entry strategies, trade missions, and high-value introductions.
            </p>
            <p>
              Founded and led by Dr. Purnima Voria, NUICC has facilitated over $1 billion in bilateral trade and delivered successful deals for more than 500 U.S.-India businesses.
            </p>
          </div>
          <div className="quote reveal">
            &ldquo;If you are ready to do business between the world&rsquo;s oldest and largest democracies, this is where it happens.&rdquo;
          </div>
        </div>

        {/* Portrait Stack */}
        <div className="reveal" style={{ position: "relative", minHeight: 580 }}>
          {/* Main Portrait */}
          <div
            style={{
              position: "absolute", inset: "0 0 70px 54px",
              overflow: "hidden",
              border: "1px solid rgba(185,138,54,.34)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              background: "var(--night)",
            }}
          >
            <img
              src="/assets/img/home/nuicc_image.jpg"
              alt="Dr. Purnima Voria with Prime Minister Narendra Modi"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Small Portrait */}
          <div
            style={{
              position: "absolute", left: 0, bottom: 0, width: "58%",
              overflow: "hidden",
              border: "1px solid rgba(185,138,54,.34)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              background: "var(--night)",
            }}
          >
            <img
              src="/assets/img/gallery/DrV_Amb_Kwatra.png"
              alt="NUICC diplomatic leadership event"
              style={{ width: "100%", aspectRatio: "1.08 / 1", objectFit: "cover" }}
            />
          </div>
          {/* Caption */}
          <div
            style={{
              position: "absolute", right: 18, bottom: 18,
              width: "min(360px, calc(100% - 36px))",
              padding: 16,
              border: "1px solid rgba(217,179,109,.28)",
              borderRadius: "var(--radius)",
              background: "rgba(7,17,29,.72)",
              color: "rgba(248,242,231,.82)",
              backdropFilter: "blur(18px)",
              fontSize: 13,
            }}
          >
            NUICC Founder and CEO, Dr. Purnima Voria, with H. E. Prime Minister of India, Narendra Modi.
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="wrap" style={{ marginTop: 64 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div className="reveal" style={{ padding: 32, background: "rgba(4,171,20,.06)", border: "1px solid rgba(4,171,20,.2)", borderRadius: "var(--radius)" }}>
            <h3 style={{ color: "#04ab14", fontSize: 24, fontFamily: "var(--font-display)", marginBottom: 12 }}>OUR VISION</h3>
            <p style={{ color: "var(--ink)", lineHeight: 1.8, marginBottom: 0 }}>
              The chamber&apos;s vision is to promote a business and cultural climate between the United States and India, and potentially other countries which motivates and empowers individuals to create value in the pursuit of prosperity and fulfillment.
            </p>
          </div>
          <div className="reveal" style={{ padding: 32, background: "rgba(4,171,20,.06)", border: "1px solid rgba(4,171,20,.2)", borderRadius: "var(--radius)" }}>
            <h3 style={{ color: "#04ab14", fontSize: 24, fontFamily: "var(--font-display)", marginBottom: 12 }}>OUR MISSION</h3>
            <p style={{ color: "var(--ink)", lineHeight: 1.8, marginBottom: 0 }}>
              The chamber&apos;s mission is to promote bilateral trade between the United States and India, cultivating business relationships that will result in business deals.
            </p>
          </div>
        </div>

        {/* Quotes */}
        <div className="reveal" style={{ marginTop: 32, padding: "0 32px" }}>
          <p style={{ fontStyle: "italic", fontWeight: 600, color: "var(--ink)", lineHeight: 1.8, marginBottom: 16 }}>
            &ldquo;India has the fastest growing economy in the world... Together, our countries can help chart an optimistic path into the future, one that unleashes the power of new technology, new infrastructure, and the enthusiasm and excitement of very hardworking and very dynamic people.&rdquo; ~Donald Trump
          </p>
          <p style={{ fontStyle: "italic", fontWeight: 600, color: "var(--ink)", lineHeight: 1.8, marginBottom: 0 }}>
            &ldquo;We have … set ourselves the target of more than doubling our bilateral trade to attain US$500 billion by 2030.&rdquo; - Narendra Modi, 2025
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1040px) {
          div[style*="gridTemplateColumns: 1fr .82fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 680px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="minHeight: 580"] {
            min-height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}
