"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Global Leaders", href: "#leaders" },
  { label: "Services", href: "#services" },
  { label: "Letters of Support", href: "#endorsements" },
  { label: "Membership", href: "/membership" },
];

const CONTACT = [
  { icon: Mail, text: "info@nuicc.org", href: "mailto:info@nuicc.org" },
  { icon: Phone, text: "+1 (720) 323-3728", href: "tel:+17203233728" },
  { icon: MapPin, text: "1099 17th St, Suite 2150, Denver, CO 80202" },
];

export function NuiccFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 pt-20 pb-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/img/home/nicuu-page.png"
                alt="National U.S.-India Chamber of Commerce Logo"
                width={44}
                height={44}
                className="rounded-md bg-white object-contain p-0.5"
              />
              <span className="text-base font-bold leading-tight text-card-foreground">
                National U.S.–India
                <br />
                Chamber of Commerce
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A 501(c)(6) organisation promoting bilateral trade between the United
              States and India since 2005.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-card-foreground">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-card-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              {CONTACT.map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <span className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{c.text}</span>
                  </span>
                );
                return (
                  <li key={i}>
                    {c.href ? (
                      <a href={c.href} className="transition-colors hover:text-primary">{inner}</a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} NUICC. All rights reserved.</span>
          <span>Strategic Trade Alliance · U.S. — India</span>
        </div>
      </div>

      {/* Oversized wordmark wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-4 pb-3 text-center text-[18vw] font-extrabold leading-none tracking-tighter text-primary/[0.09]"
      >
        NUICC
      </div>
    </footer>
  );
}
