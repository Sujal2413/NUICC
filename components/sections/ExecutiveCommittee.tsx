"use client";

import { useEffect, useRef } from "react";

const COMMITTEE = [
  { role: "President", name: "Purnima Voria", link: "/assets/img/home/voria-bio.pdf" },
  { role: "Vice President, Global Corporate Business Development", name: "Terry Evanston" },
  { role: "Vice President of Operations", name: "Anne Bennett" },
  { role: "Treasurer", name: "Anu Singh" },
  { role: "Secretary of Technology & Executive Administrator", name: "Spencer Cloud" },
];

export default function ExecutiveCommittee() {
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
    <section ref={sectionRef} className="section section-light">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Leadership</div>
          <h2 className="section-title reveal" style={{ color: "var(--ink)", marginTop: 16 }}>
            NUICC Executive Committee
          </h2>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {COMMITTEE.map((member, i) => (
            <div
              key={i}
              className="reveal exec-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: i < COMMITTEE.length - 1 ? "1px solid rgba(17,24,35,.12)" : "none",
                padding: "20px 0",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: 15 }}>
                {member.role}
              </div>
              <div style={{ color: "var(--dark-muted)" }}>
                {member.name}
                {member.link && (
                  <>
                    {" — "}
                    <a href={member.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                      Download Bio
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .exec-row {
            grid-template-columns: 1fr !important;
            gap: 6px;
            padding: 16px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
