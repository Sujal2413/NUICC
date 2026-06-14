"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp, ArrowRight } from "lucide-react";

const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/media" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Business Matchmaking", href: "/services" },
  { label: "Trade Missions", href: "/services" },
  { label: "Policy Advocacy", href: "/services" },
  { label: "Business Opportunities", href: "/services" },
];

/* Official chamber handles, carried verbatim from the existing site. */
const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/www.nuicc.info/", Icon: Facebook, bg: "#1877F2" },
  { label: "Instagram", href: "https://www.instagram.com/reel/DPE_Z7SE5pR/", Icon: Instagram, bg: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)" },
  { label: "X", href: "https://x.com/NUICC", Icon: XIcon, bg: "#000000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/purnimavoria/", Icon: Linkedin, bg: "#0A66C2" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function NuiccFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0B132B] text-white/80">
      {/* Top CTA bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white md:text-2xl">Ready to take your business global?</h3>
            <p className="mt-1 text-sm text-white/70">Connect with 9,200+ members across industries.</p>
          </div>
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B132B] transition-colors hover:bg-[#e3c252]"
          >
            Become a Member <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand + social */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/img/home/nicuu-page.png"
                alt="National U.S.–India Chamber of Commerce logo"
                width={48}
                height={48}
                className="rounded-md bg-white object-contain p-0.5"
              />
              <span className="text-base font-bold leading-tight text-white">
                National U.S.–India
                <br />
                Chamber of Commerce
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              NUICC is a 501(c)(6) organization whose mission is to promote bilateral trade
              between the United States and India, cultivating business relationships that
              will result in business deals.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL.map(({ label, href, Icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ background: bg }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {NAVIGATION.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="text-sm text-white/70 transition-colors hover:text-[#D4AF37]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-white/70 transition-colors hover:text-[#D4AF37]">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                <span>1099 17th St, Suite 2150,<br />Denver, CO 80202,<br />United States</span>
              </li>
              <li>
                <a href="tel:+17203233728" className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-[#D4AF37]">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                  <span>+1 (720) 323-3728</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nuicc.org" className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-[#D4AF37]">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                  <span>info@nuicc.org</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
          <span className="text-xs text-white/55">© {new Date().getFullYear()} NUICC. All rights reserved.</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B132B] shadow-md transition-colors hover:bg-[#e3c252]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
