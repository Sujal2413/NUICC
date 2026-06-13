"use client";

import { useEffect, useRef } from "react";

/* Real press coverage — external article URLs verified from the original
   nuicc.org. Opens in a new tab. The Hussars Ride gallery link lives on a
   separate chamber domain (nuicc.website) and is flagged for the chamber. */
const PRESS = [
  {
    outlet: "South Asian Herald",
    year: "2025",
    headline: "Dr. Purnima Voria appointed President of Rajasthan Foundation&rsquo;s New York Chapter",
    href: "https://southasianherald.com/purnima-voria-appointed-president-of-rajasthan-foundations-new-york-chapter-to-strengthen-us-rajasthan-ties/",
  },
  {
    outlet: "South Asian Herald",
    year: "2025",
    headline: "NUICC launches South India Regional Chamber in Bengaluru to boost U.S.–India trade",
    href: "https://southasianherald.com/nuicc-launches-south-india-regional-chamber-in-bengaluru-to-boost-u-s-india-trade-and-innovation/",
  },
  {
    outlet: "425Business",
    year: "2025",
    headline: "Bellevue Chamber &amp; National U.S.–India Chamber announce partnership",
    href: "https://www.425business.com/news/bellevue-chamber-national-us-india-chambers-partnership/article_bec26e38-ef06-11ef-b822-e379a1660d61.html",
  },
  {
    outlet: "South Asian Herald",
    year: "2025",
    headline: "Dr. Voria meets the Chief Minister of Rajasthan to strengthen U.S.–Rajasthan collaboration",
    href: "https://southasianherald.com/purnima-voria-meets-chief-minister-of-rajasthan-to-strengthen-u-s-rajasthan-collaboration/",
  },
  {
    outlet: "Patrika",
    year: "2025",
    headline: "प्रवासी राजस्थानी दिवस पर शामिल होंगी बुश–ओबामा के साथ काम कर चुकीं डॉ. पूर्णिमा वोरिया",
    href: "https://www.patrika.com/national-news/purnima-voria-interview-global-investment-pravasi-rajasthani-diwas-summit-20154984",
  },
  {
    outlet: "The Denver Post",
    year: "2007",
    headline: "Where East Meets West",
    href: "https://www.denverpost.com/2007/04/13/where-east-meets-west/",
  },
  {
    outlet: "NUICC Gallery",
    year: "2025",
    headline: "Gallery — Hussars Ride",
    href: "https://nuicc.website/2025/03/28/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
  },
];

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = Array.from(section.querySelectorAll<HTMLElement>(".reveal"));
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 8) * 80}ms`;
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
    <section ref={sectionRef} id="press" className="section section-dark">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">In the News</div>
            <h2 className="section-title reveal">A chamber making headlines.</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            Recent coverage of NUICC&rsquo;s launches, diplomatic engagements, and
            leadership across U.S. and Indian press.
          </p>
        </div>

        <div className="press-list">
          {PRESS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal press-row"
            >
              <div className="press-meta">
                <span className="press-outlet">{p.outlet}</span>
                <span className="press-year">{p.year}</span>
              </div>
              <h3 className="press-headline" dangerouslySetInnerHTML={{ __html: p.headline }} />
              <span className="press-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .press-list {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(217, 179, 109, 0.18);
        }
        .press-row {
          display: grid;
          grid-template-columns: 200px 1fr 32px;
          align-items: center;
          gap: 24px;
          padding: 24px 8px;
          border-bottom: 1px solid rgba(217, 179, 109, 0.18);
          color: var(--ivory);
          transition: background 0.3s ease, padding-left 0.3s ease;
        }
        .press-row:hover {
          background: rgba(217, 179, 109, 0.06);
          padding-left: 18px;
        }
        .press-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .press-outlet {
          color: var(--champagne);
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .press-year {
          color: rgba(248, 242, 231, 0.45);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .press-headline {
          margin: 0;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          color: rgba(248, 242, 231, 0.92);
        }
        .press-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--champagne);
          opacity: 0.5;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .press-row:hover .press-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        @media (max-width: 768px) {
          .press-row {
            grid-template-columns: 1fr 24px;
            grid-template-areas:
              "meta arrow"
              "headline headline";
            gap: 10px 16px;
            padding: 20px 4px;
          }
          .press-row:hover {
            padding-left: 4px;
          }
          .press-meta {
            grid-area: meta;
            flex-direction: row;
            align-items: baseline;
            gap: 10px;
          }
          .press-arrow {
            grid-area: arrow;
          }
          .press-headline {
            grid-area: headline;
            font-size: 16px;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
}
