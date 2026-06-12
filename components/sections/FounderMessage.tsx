"use client";

import { useEffect, useRef } from "react";

export default function FounderMessage() {
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
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: `
          linear-gradient(90deg, rgba(7,17,29,.96), rgba(7,17,29,.7)),
          url("/assets/img/gallery/sulekha_nk_q25.jpg") center / cover
        `,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="wrap">
        <div
          className="reveal"
          style={{
            width: "min(760px, 100%)",
            padding: 40,
            border: "1px solid rgba(217,179,109,.28)",
            borderRadius: "var(--radius)",
            background: "rgba(7,17,29,.72)",
            backdropFilter: "blur(22px)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="eyebrow">Founder Message</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>A vital bridge for ambitious businesses.</h2>
          <p style={{ color: "rgba(248,242,231,.76)", fontSize: 18, lineHeight: 1.85, marginTop: 20 }}>
            It is with great pride and a deep sense of responsibility that I welcome you to the National U.S.-India Chamber of Commerce. Our organization was founded on the belief that stronger economic and cultural ties between the United States and India are essential for global progress in the 21st century.
          </p>
          <p style={{ color: "rgba(248,242,231,.76)", fontSize: 18, lineHeight: 1.85 }}>
            The U.S. and India share a unique bond rooted in democratic values, innovation, and a shared vision for prosperity. NUICC serves as the bridge connecting ambitious businesses with opportunity in two of the world&rsquo;s most dynamic economies.
          </p>
          <div style={{ marginTop: 28, color: "var(--champagne)", fontWeight: 900, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Ms. Purnima Voria<br />
            <span style={{ fontWeight: 600, fontSize: 14, opacity: 0.8 }}>Founder &amp; CEO, NUICC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
