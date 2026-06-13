"use client";

import { useEffect, useRef } from "react";

/* The other four officers have no photo or bio on the original nuicc.org or in
   this repo — rendered as monogram cards so nothing is fabricated.
   TODO(chamber): supply real headshots + bios for Evanston, Bennett, Singh,
   and Cloud to upgrade these to full portrait cards. */
const COMMITTEE = [
  { role: "Vice President, Global Corporate Business Development", name: "Terry Evanston" },
  { role: "Vice President of Operations", name: "Anne Bennett" },
  { role: "Treasurer", name: "Anu Singh" },
  { role: "Secretary of Technology & Executive Administrator", name: "Spencer Cloud" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

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
    <section ref={sectionRef} id="committee" className="section section-light">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Leadership</div>
          <h2 className="section-title reveal" style={{ color: "var(--ink)", marginTop: 16 }}>
            The people behind the chamber.
          </h2>
        </div>

        {/* Founder feature card — the only officer with a real photo + bio. */}
        <div className="reveal founder-card">
          <div className="founder-photo">
            <img src="/assets/img/gallery/sulekha_nk_q25.jpg" alt="Dr. Purnima Voria, Founder & CEO of NUICC" />
          </div>
          <div className="founder-info">
            <span className="founder-tag">President · Founder &amp; CEO</span>
            <h3 className="founder-name">Dr. Purnima Voria</h3>
            <p className="founder-bio">
              Dr. Voria has spent her career building bridges between the United States
              and India. Recognised by <i>The Wall Street Journal</i>{" "}
              as Business Woman of the Year and a recipient of the Congressional Medal of Distinction, she
              was appointed National Advisor to the U.S. Minority Business Development
              Agency and serves as President of the Rajasthan Foundation&rsquo;s New York
              Chapter. She founded NUICC to turn high-level policy relationships into
              signed business deals.
            </p>
            <a
              href="/assets/img/home/voria-bio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light founder-bio-btn"
            >
              Download Full Bio
            </a>
          </div>
        </div>

        {/* Remaining officers — name + title only (no fabricated photos/bios). */}
        <div className="exec-grid">
          {COMMITTEE.map((member) => (
            <div key={member.name} className="reveal exec-card">
              <div className="exec-monogram" aria-hidden="true">{initials(member.name)}</div>
              <div className="exec-text">
                <b className="exec-name">{member.name}</b>
                <span className="exec-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .founder-card {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 36px;
          align-items: center;
          max-width: 980px;
          margin: 0 auto 40px;
          padding: 28px;
          border: 1px solid rgba(17, 24, 35, 0.12);
          border-radius: var(--radius);
          background: #fff;
          box-shadow: 0 24px 60px rgba(17, 24, 35, 0.1);
        }
        .founder-photo {
          overflow: hidden;
          border-radius: var(--radius);
          aspect-ratio: 4 / 5;
          background: var(--navy);
        }
        .founder-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 18%;
        }
        .founder-tag {
          display: block;
          color: var(--gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .founder-name {
          margin: 8px 0 14px;
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.05;
          color: var(--ink);
        }
        .founder-bio {
          margin: 0 0 22px;
          color: #465568;
          font-size: 16px;
          line-height: 1.75;
        }
        .founder-bio-btn {
          width: auto;
        }

        .exec-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 980px;
          margin: 0 auto;
        }
        .exec-card {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px;
          border: 1px solid rgba(17, 24, 35, 0.12);
          border-radius: var(--radius);
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .exec-card:hover {
          transform: translateY(-4px);
          border-color: rgba(185, 138, 54, 0.5);
          box-shadow: 0 20px 44px rgba(17, 24, 35, 0.12);
        }
        .exec-monogram {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 50%;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--gold);
          background: linear-gradient(135deg, rgba(217, 179, 109, 0.22), rgba(185, 138, 54, 0.12));
          border: 1px solid rgba(185, 138, 54, 0.34);
        }
        .exec-name {
          display: block;
          color: var(--ink);
          font-size: 17px;
        }
        .exec-role {
          display: block;
          margin-top: 4px;
          color: var(--dark-muted);
          font-size: 13.5px;
          line-height: 1.4;
        }

        @media (prefers-reduced-motion: reduce) {
          .exec-card {
            transition: none;
          }
        }

        @media (max-width: 760px) {
          .founder-card {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 22px;
            text-align: center;
          }
          .founder-photo {
            max-width: 240px;
            margin: 0 auto;
          }
          .founder-bio-btn {
            width: 100%;
          }
          .exec-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
