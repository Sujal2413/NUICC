import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CredentialPill } from "@/components/primitives/CredentialPill";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join the National U.S.-India Chamber of Commerce — 9,200+ members across every major industry in the world's two largest democracies.",
};

/**
 * /membership lives as its own route. The original membership page content
 * (tiers, pricing, application) was not part of the homepage inventory —
 * marked as a labelled placeholder rather than invented.
 */
export default function MembershipPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-site max-w-3xl text-center">
          <p className="overline-label">Membership</p>
          <h1 className="mt-3 font-serif text-h1">Become a Member</h1>
          <span className="gold-rule gold-rule--center" aria-hidden="true" />
          <p className="mt-4 text-body-lg text-secondary">
            Membership is open to U.S. and India based companies, professionals, nonprofits,
            startups, investors, and public institutions seeking to grow their presence,
            partnerships, or influence across both markets.
          </p>
          <div className="mt-6 flex justify-center">
            <CredentialPill>501(c)(6) Chamber of Commerce · 9,200+ members</CredentialPill>
          </div>

          <div className="mt-10 rounded-card border border-line bg-surface p-8 shadow-xs">
            <p className="text-body font-semibold text-ink">
              Placeholder — membership tiers &amp; application
            </p>
            <p className="mt-2 text-body-sm text-secondary">
              The membership tier details, pricing, and application flow from the current site are
              pending migration. Until then, apply through the existing membership page or contact
              the chamber directly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href={site.liveMembershipUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply on nuicc.org
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`mailto:${site.email}`} className="btn-secondary">
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
