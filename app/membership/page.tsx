"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccFooter } from "@/components/ui/nuicc-footer";

/* Tiers, prices, and inclusions mirror the chamber's official membership matrix
   (carried from nuicc.org). Benefits are cumulative — each tier includes every
   lower tier's benefits. USD is canonical; INR confirmed at signup.
   TODO(chamber): wire form to a real processor / inbox. */
const TIERS = [
  { name: "Individual / Nonprofit", price: "$400", perks: [
    "1 hour of consultation on doing business in the Indian marketplace",
    "International Trade Alert emails (current US/India trade information)",
    "“Daily Investor News” emails",
  ] },
  { name: "Small Business", price: "$1,000", perks: [
    "2½ hours of consultation on doing business in the Indian marketplace",
    "Discounted invitations to bi-monthly India & U.S. opportunity events",
    "Promote your business to NUICC’s 9,000 members worldwide",
    "Discounted admission to NUICC educational events",
    "Discounted arranged trade missions to India / the United States",
    "International Trade Alert & “Daily Investor News” emails",
  ] },
  { name: "Associate", price: "$5,000", perks: [
    "12½ hours of consultation on doing business in the Indian marketplace",
    "All Small Business benefits",
    "Preferred company status & product placement on the NUICC website",
  ] },
  { name: "Corporate", price: "$10,000", featured: true, perks: [
    "25 hours of consultation on doing business in the Indian marketplace",
    "All Associate benefits",
    "Premium company status & product placement on the NUICC website",
    "Banner ads promoting your business at nuicc.org",
    "Recognition in NUICC Communications",
  ] },
  { name: "Chairman's Circle", price: "$15,000", perks: [
    "37½ hours of consultation on doing business in the Indian marketplace",
    "All Corporate benefits",
    "Speaking opportunities at NUICC events & seminars in India and the U.S.",
    "Business referral services — access to U.S. & Indian business leaders and government officials",
    "Invitation for NUICC Board of Advisors membership",
  ] },
];

const ELIGIBLE = ["Companies", "Professionals", "Startups", "Investors", "Nonprofits", "Public Institutions"];

export default function MembershipPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", tier: TIERS[0].name });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGradient gradientFrom="#fbf7ee" gradientTo="#e7eef5" gradientStop="35%" className="bg-background" />
      <NuiccNavbar />

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-32 md:pt-36">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Membership</span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Choose the membership that moves your business forward.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Membership is open to U.S. and India based companies, professionals, nonprofits,
          startups, investors, and public institutions seeking growth across both markets.
          Every tier unlocks consultation hours, trade intelligence, and access to NUICC&rsquo;s
          network of 9,200+ members.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {ELIGIBLE.map((e) => (
            <span key={e} className="rounded-full border border-[#D4AF37]/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#B8902A]">
              {e}
            </span>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`relative flex min-w-0 flex-col rounded-2xl border bg-card p-6 ${
                t.featured ? "border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/40" : "border-border shadow-sm"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0B132B]">
                  Most Popular
                </span>
              )}
              <h2 className="min-h-[2.6rem] text-xl font-bold leading-tight text-card-foreground">{t.name}</h2>
              <div className="mt-2">
                <span className="block text-3xl font-extrabold leading-none text-[#B8902A]">{t.price}</span>
                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Membership</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-snug text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className="mt-5 inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#D4AF37] px-3 text-[11px] font-semibold uppercase tracking-wide text-[#0B132B] transition-colors hover:bg-[#c39d2f]"
              >
                Select {t.name.split(" ")[0]}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Contributions shown in U.S. dollars. Billing terms and current INR equivalents are confirmed at signup.
        </p>
      </section>

      {/* Join / form */}
      <section id="join" className="mx-auto w-full max-w-6xl px-4 pb-20 md:pb-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How to Join</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Three steps to membership.</h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 leading-relaxed text-muted-foreground">
              <li><b className="text-foreground">Choose your tier</b> from the options above based on your goals and size.</li>
              <li><b className="text-foreground">Submit your details</b> using the form, and our team confirms your selection.</li>
              <li><b className="text-foreground">Complete payment</b> securely via PayPal Checkout — we send the link and QR on confirmation.</li>
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer to speak first? Email{" "}
              <a href="mailto:info@nuicc.org" className="font-semibold text-[#B8902A] hover:underline">info@nuicc.org</a> or call{" "}
              <a href="tel:+17203233728" className="font-semibold text-[#B8902A] hover:underline">+1 (720) 323-3728</a>.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            {submitted ? (
              <div role="status">
                <h3 className="text-2xl font-bold text-card-foreground">Thank you, {form.name || "and welcome"}!</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Our team will contact you shortly to confirm your <b className="text-card-foreground">{form.tier}</b> membership and share secure payment details.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-4">
                {([["Full Name", "name", "text"], ["Email", "email", "email"], ["Phone", "phone", "tel"]] as const).map(([label, key, type]) => (
                  <label key={key} className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-card-foreground">
                    {label}
                    <input
                      type={type}
                      required
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="rounded-md border border-border bg-white px-3.5 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30"
                    />
                  </label>
                ))}
                <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-card-foreground">
                  Membership Tier
                  <select
                    value={form.tier}
                    onChange={(e) => setForm({ ...form, tier: e.target.value })}
                    className="rounded-md border border-border bg-white px-3.5 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30"
                  >
                    {TIERS.map((t) => (
                      <option key={t.name} value={t.name}>{t.name} — {t.price}</option>
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#0B132B] transition-colors hover:bg-[#c39d2f]"
                >
                  Request Membership
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <NuiccFooter />
    </main>
  );
}
