"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "What is NUICC?",
    a: "NUICC is a premier international chamber dedicated to strengthening economic, trade, and investment relationships between the United States and India.",
  },
  {
    q: "What does NUICC do?",
    a: "NUICC provides business matchmaking, policy advocacy, trade mission facilitation, executive roundtables, market insights, and high-level networking opportunities.",
  },
  {
    q: "Who can become a member?",
    a: "Membership is open to U.S. and India based companies, professionals, nonprofits, startups, investors, and public institutions seeking growth across both markets.",
  },
  {
    q: "Does NUICC support market entry?",
    a: "Yes. NUICC supports expansion through business introductions, investor connections, sector insights, and trusted legal, compliance, and local partner referrals.",
  },
  {
    q: "Does NUICC support startups?",
    a: "Startups benefit from cross-border mentorship, investor introductions, regulatory insight, innovation roundtables, and pitch opportunities.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

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
    <section ref={sectionRef} id="faq" className="section section-light">
      <div className="wrap">
        <div
          className="faq-grid"
          style={{ display: "grid", gridTemplateColumns: ".55fr 1fr", gap: 34, alignItems: "start" }}
        >
          <div>
            <div className="eyebrow reveal">FAQ</div>
            <h2 className="section-title reveal" style={{ color: "var(--ink)", marginTop: 16 }}>
              Answers for new members.
            </h2>
          </div>
          <div className="reveal">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(17,24,35,.16)",
                  padding: "20px 0",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 900,
                    color: "var(--ink)",
                    fontSize: 16,
                    textAlign: "left",
                    padding: 0,
                  }}
                >
                  {faq.q}
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      marginLeft: 16,
                      color: openIndex === i ? "var(--saffron)" : "var(--gold)",
                    }}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  style={{
                    maxHeight: openIndex === i ? 320 : 0,
                    opacity: openIndex === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height .45s cubic-bezier(.16,1,.3,1), opacity .4s ease",
                  }}
                >
                  <p style={{ margin: "12px 0 0", color: "var(--dark-muted)", lineHeight: 1.75 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1040px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
