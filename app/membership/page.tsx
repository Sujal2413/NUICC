"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";

/* Tiers, prices, and inclusions are the chamber's own, carried over from the
   existing nuicc.org membership page. Prices shown in USD (canonical). INR
   equivalents are intentionally NOT hardcoded here — the old site's INR figures
   were computed at a stale rate; they should be confirmed at current rates.
   TODO(chamber): confirm billing period and wire the form to a real payment
   processor / inbox. */
const TIERS = [
  {
    name: "Individual / Nonprofit",
    price: "$400",
    perks: [
      "1-hour individual consultation",
      "International Trade Alert emails",
      "Daily Investor News emails",
    ],
  },
  {
    name: "Small Business",
    price: "$1,000",
    perks: [
      "2½ hours consultation",
      "Discounted bi-monthly event invitations",
      "Business promotion to 9,000+ members",
      "Discounted educational events & trade missions",
      "International Trade Alerts & Daily Investor News",
      "Preferred website placement",
    ],
  },
  {
    name: "Associate",
    price: "$5,000",
    perks: [
      "12½ hours consultation",
      "All Small Business benefits",
      "Premium website placement",
      "Banner ads on the NUICC website",
      "Recognition in NUICC communications",
    ],
  },
  {
    name: "Corporate",
    price: "$10,000",
    featured: true,
    perks: [
      "25 hours consultation",
      "All Associate benefits",
      "Speaking opportunities at NUICC events",
      "Business referral services",
    ],
  },
  {
    name: "Chairman's Circle",
    price: "$15,000",
    perks: [
      "37½ hours consultation",
      "All Corporate benefits",
      "Invitation to the NUICC Board of Advisors",
    ],
  },
];

const ELIGIBLE = [
  "Companies", "Professionals", "Startups", "Investors", "Nonprofits", "Public Institutions",
];

export default function MembershipPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", tier: TIERS[0].name, amount: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No payment backend yet — capture intent and hand off to the team.
    // TODO(chamber): connect to a real processor / CRM inbox.
    setSubmitted(true);
  };

  return (
    <main>
      <Header />

      {/* ── Hero ───────────────────────────── */}
      <section className="mb-hero">
        <div className="wrap">
          <div className="eyebrow">Membership</div>
          <h1 className="mb-title">Choose the membership that moves your business forward.</h1>
          <p className="mb-lead">
            Membership is open to U.S. and India based companies, professionals, nonprofits,
            startups, investors, and public institutions seeking growth across both markets.
            Every tier unlocks consultation hours, trade intelligence, and access to NUICC&rsquo;s
            network of 9,200+ members.
          </p>
          <div className="mb-eligible">
            {ELIGIBLE.map((e) => (
              <span key={e} className="mb-chip">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tiers ──────────────────────────── */}
      <section className="mb-tiers-section">
        <div className="wrap">
          <div className="mb-tiers">
            {TIERS.map((t) => (
              <article key={t.name} className={`mb-tier ${t.featured ? "mb-tier--featured" : ""}`}>
                {t.featured && <span className="mb-badge">Most Popular</span>}
                <h2 className="mb-tier-name">{t.name}</h2>
                <div className="mb-price">
                  {t.price}
                  <span className="mb-price-note">membership</span>
                </div>
                <ul className="mb-perks">
                  {t.perks.map((p) => (
                    <li key={p}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#join" className={`btn ${t.featured ? "btn-light" : ""} mb-tier-cta`}>
                  Select {t.name.split(" ")[0]}
                </a>
              </article>
            ))}
          </div>
          <p className="mb-fineprint">
            Contributions shown in U.S. dollars. Billing terms and current INR equivalents are
            confirmed at signup.
          </p>
        </div>
      </section>

      {/* ── Join / Form ────────────────────── */}
      <section id="join" className="mb-join">
        <div className="wrap mb-join-grid">
          <div>
            <div className="eyebrow">How to Join</div>
            <h2 className="mb-join-title">Three steps to membership.</h2>
            <ol className="mb-steps">
              <li><b>Choose your tier</b> from the options above based on your goals and size.</li>
              <li><b>Submit your details</b> using the form, and our team confirms your selection.</li>
              <li><b>Complete payment</b> securely via PayPal Checkout — we send the payment link and QR on confirmation.</li>
            </ol>
            <p className="mb-contact-note">
              Prefer to speak first? Email{" "}
              <a href="mailto:info@nuicc.org">info@nuicc.org</a> or call{" "}
              <a href="tel:+17203233728">+1 (720) 323-3728</a>.
            </p>
          </div>

          <div className="mb-form-card">
            {submitted ? (
              <div className="mb-thanks" role="status">
                <h3>Thank you, {form.name || "and welcome"}!</h3>
                <p>
                  Our team will contact you shortly to confirm your{" "}
                  <b>{form.tier}</b> membership and share secure payment details.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mb-form">
                <label>
                  Full Name
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label>
                  Email
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label>
                  Phone
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
                <label>
                  Membership Tier
                  <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}>
                    {TIERS.map((t) => (
                      <option key={t.name} value={t.name}>{t.name} — {t.price}</option>
                    ))}
                  </select>
                </label>
                <button type="submit" className="btn btn-light mb-submit">Request Membership</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────── */}
      <footer className="mb-footer">
        <div className="wrap mb-footer-inner">
          <span>National U.S.-India Chamber of Commerce · 501(c)(6)</span>
          <span>1099 17th St, Suite 2150, Denver, CO 80202</span>
          <Link href="/">← Back to home</Link>
        </div>
      </footer>

      <style jsx>{`
        .mb-hero {
          padding: 150px 0 60px;
        }
        .mb-title {
          font-family: var(--font-display);
          font-size: clamp(34px, 6vw, 72px);
          line-height: 1.02;
          font-weight: 700;
          margin: 18px 0 22px;
          max-width: 14ch;
          color: var(--ivory);
        }
        .mb-lead {
          max-width: 640px;
          color: var(--muted);
          font-size: clamp(16px, 1.6vw, 19px);
          line-height: 1.75;
          margin: 0 0 26px;
        }
        .mb-eligible {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .mb-chip {
          padding: 7px 16px;
          border: 1px solid rgba(217, 179, 109, 0.34);
          border-radius: 999px;
          color: var(--champagne);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .mb-tiers-section {
          padding: 20px 0 80px;
        }
        .mb-tiers {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          align-items: stretch;
        }
        .mb-tier {
          position: relative;
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 26px 22px;
          border: 1px solid rgba(217, 179, 109, 0.22);
          border-radius: var(--radius);
          background: linear-gradient(180deg, rgba(7, 17, 29, 0.86), rgba(12, 31, 53, 0.78));
          backdrop-filter: blur(18px);
        }
        .mb-tier--featured {
          border-color: rgba(217, 179, 109, 0.7);
          box-shadow: 0 24px 60px rgba(217, 179, 109, 0.14);
        }
        .mb-badge {
          position: absolute;
          top: -11px;
          left: 22px;
          padding: 4px 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f7d994, #d9b36d);
          color: var(--night);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .mb-tier-name {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 1.1;
          margin: 0 0 14px;
          color: var(--ivory);
          min-height: 44px;
        }
        .mb-price {
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 700;
          color: var(--champagne);
          line-height: 1;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .mb-price-note {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: rgba(248, 242, 231, 0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .mb-perks {
          list-style: none;
          padding: 0;
          margin: 20px 0 22px;
          display: grid;
          gap: 11px;
          flex: 1;
        }
        .mb-perks li {
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 9px;
          align-items: start;
          color: rgba(248, 242, 231, 0.78);
          font-size: 13.5px;
          line-height: 1.45;
        }
        .mb-perks svg {
          color: var(--emerald);
          margin-top: 2px;
        }
        .mb-tier-cta {
          width: 100%;
          font-size: 11px;
        }
        .mb-fineprint {
          margin: 24px 0 0;
          color: rgba(248, 242, 231, 0.5);
          font-size: 13px;
          text-align: center;
        }

        .mb-join {
          padding: 0 0 90px;
        }
        .mb-join-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }
        .mb-join-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05;
          color: var(--ivory);
          margin: 16px 0 24px;
        }
        .mb-steps {
          margin: 0 0 24px;
          padding-left: 20px;
          color: var(--muted);
          line-height: 1.7;
        }
        .mb-steps li {
          margin-bottom: 12px;
        }
        .mb-steps b {
          color: var(--ivory);
        }
        .mb-contact-note {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }
        .mb-contact-note a {
          color: var(--champagne);
          font-weight: 700;
        }

        .mb-form-card {
          padding: 30px;
          border: 1px solid rgba(217, 179, 109, 0.24);
          border-radius: var(--radius);
          background: rgba(7, 17, 29, 0.6);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }
        .mb-form {
          display: grid;
          gap: 16px;
        }
        .mb-form label {
          display: grid;
          gap: 7px;
          color: rgba(248, 242, 231, 0.78);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .mb-form input,
        .mb-form select {
          padding: 13px 14px;
          border: 1px solid rgba(217, 179, 109, 0.28);
          border-radius: var(--radius);
          background: rgba(255, 250, 240, 0.04);
          color: var(--ivory);
          font-size: 15px;
        }
        .mb-form input:focus,
        .mb-form select:focus {
          outline: none;
          border-color: var(--champagne);
        }
        .mb-form option {
          background: var(--night);
          color: var(--ivory);
        }
        .mb-submit {
          width: 100%;
          margin-top: 4px;
          font-size: 13px;
        }
        .mb-thanks h3 {
          font-family: var(--font-display);
          font-size: 26px;
          color: var(--champagne);
          margin: 0 0 12px;
        }
        .mb-thanks p {
          color: rgba(248, 242, 231, 0.8);
          line-height: 1.7;
          margin: 0;
        }
        .mb-thanks b {
          color: var(--ivory);
        }

        .mb-footer {
          border-top: 1px solid rgba(217, 179, 109, 0.18);
          padding: 28px 0;
        }
        .mb-footer-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 28px;
          align-items: center;
          justify-content: space-between;
          color: rgba(248, 242, 231, 0.55);
          font-size: 13px;
        }
        .mb-footer-inner a {
          color: var(--champagne);
          font-weight: 700;
        }

        @media (max-width: 1040px) {
          .mb-tiers {
            grid-template-columns: repeat(2, 1fr);
          }
          .mb-join-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 680px) {
          .mb-hero {
            padding: 120px 0 44px;
          }
          .mb-tiers {
            grid-template-columns: 1fr;
          }
          .mb-tier-name {
            min-height: 0;
          }
          .mb-form-card {
            padding: 22px;
          }
        }
      `}</style>
    </main>
  );
}
