"use client";

import { useEffect, useRef } from "react";

/* Real letters of support — the PDFs live in public/assets/img/home/ and were
   carried over from the original nuicc.org. Labels mirror the old site. */
const LETTERS = [
  {
    name: "Prime Minister of India",
    role: "Government of India",
    context: "Letter of support recognising NUICC's role in U.S.–India trade.",
    file: "/assets/img/home/NUICC___Prime_Minister_of_India_Letter_of_Support.pdf",
  },
  {
    name: "Commerce Minister of India",
    role: "Ministry of Commerce & Industry",
    context: "Letter of support for the chamber's bilateral trade mission.",
    file: "/assets/img/home/NUICC___Commerce_Minister_of_India_Letter_of_Support.pdf",
  },
  {
    name: "President George W. Bush",
    role: "43rd President of the United States",
    context: "Letter of recommendation addressed to the U.S. President.",
    file: "/assets/img/home/NUICC_Co_Chair_Letter_of_Recommendation_to_President_George_W_1_._Bush.pdf",
  },
  {
    name: "Congressman Mark Udall",
    role: "United States Congress · NUICC Co-Chair",
    context: "Letter of support for the National U.S.-India Chamber of Commerce.",
    file: "/assets/img/home/NUICC_Co_Chair_Congressman_Mark_Udall.pdf",
  },
  {
    name: "Congressman Bob Beauprez",
    role: "United States Congress",
    context: "Support for NUICC in the Indo–U.S. civil nuclear deal.",
    file: "/assets/img/home/Congressman_Bob_Beauprez_Supports_NUICC_in_Indo_US_Nuclear_Deal.pdf",
  },
  {
    name: "Governor Bill Owens",
    role: "Governor of Colorado",
    context: "Letter to NUICC Founder & CEO Dr. Purnima Voria.",
    file: "/assets/img/home/Colorado_Gov_1_._Bill_Owens___Purnima_Voria.pdf",
  },
];

export default function Endorsements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = Array.from(section.querySelectorAll<HTMLElement>(".reveal"));
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 8) * 90}ms`;
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="endorsements" className="section section-dark">
      <div className="section-orbit" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Letters of Support</div>
            <h2 className="section-title reveal">Backed at the highest levels of government.</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            For two decades, NUICC&rsquo;s work has been recognised by heads of state,
            members of the U.S. Congress, and ministers of the Government of India.
            The original letters are reproduced below.
          </p>
        </div>

        <div className="endorse-grid">
          {LETTERS.map((l) => (
            <a
              key={l.name}
              href={l.file}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal endorse-card glass-card"
            >
              <div className="endorse-seal" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
              </div>
              <div className="endorse-body">
                <b className="endorse-name">{l.name}</b>
                <span className="endorse-role">{l.role}</span>
                <p className="endorse-context">{l.context}</p>
              </div>
              <span className="endorse-cta">
                View Letter
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .endorse-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .endorse-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 26px;
          color: var(--ivory);
          cursor: pointer;
        }
        .endorse-seal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: var(--champagne);
          border: 1px solid rgba(217, 179, 109, 0.4);
          background: rgba(217, 179, 109, 0.08);
          flex-shrink: 0;
        }
        .endorse-body {
          flex: 1;
        }
        .endorse-name {
          display: block;
          font-family: var(--font-display);
          font-size: 21px;
          line-height: 1.15;
        }
        .endorse-role {
          display: block;
          margin-top: 6px;
          color: var(--champagne);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .endorse-context {
          margin: 12px 0 0;
          color: rgba(248, 242, 231, 0.72);
          font-size: 14.5px;
          line-height: 1.6;
        }
        .endorse-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--champagne);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 1040px) {
          .endorse-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .endorse-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .endorse-card {
            padding: 20px;
            gap: 12px;
          }
          .endorse-name {
            font-size: 19px;
          }
          .endorse-context {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
