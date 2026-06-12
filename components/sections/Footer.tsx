import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { site, socials, footerLinkedIn, footerNav, footerLogo } from "@/lib/content";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21.5l-7.51 8.57L23 22h-7.078l-5.51-7.21L4.9 22H1.64l8.06-9.2L1 2h7.203l5.05 6.63L18.244 2zm-2.49 18h2.31L8.1 4h-2.4l10.054 16z" />
    </svg>
  );
}

const footerSocials = [
  { label: "Facebook", href: socials[0].href, icon: <Facebook className="h-4 w-4" aria-hidden="true" /> },
  { label: "Instagram", href: socials[1].href, icon: <Instagram className="h-4 w-4" aria-hidden="true" /> },
  { label: "X", href: socials[2].href, icon: <XLogo className="h-3.5 w-3.5" /> },
  { label: "LinkedIn", href: footerLinkedIn, icon: <Linkedin className="h-4 w-4" aria-hidden="true" /> },
];

export function Footer() {
  return (
    <footer className="surface-inverse-gradient bg-inverse">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src={footerLogo.src}
            alt={footerLogo.alt}
            width={70}
            height={70}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 font-serif text-h4 text-on-inverse">{site.name}</p>
          {/* 501(c)(6) trust line */}
          <p className="mt-3 max-w-sm text-body-sm leading-relaxed text-on-inverse-soft">{site.trustLine}</p>
          <div className="mt-5 flex gap-2">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NUICC on ${s.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line-inverse text-on-inverse transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="font-sans text-body font-semibold text-on-inverse">Navigation</h3>
          <ul className="mt-4 space-y-2">
            {footerNav.navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-body-sm text-on-inverse-soft transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="font-sans text-body font-semibold text-on-inverse">Services</h3>
          <ul className="mt-4 space-y-2">
            {footerNav.services.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-body-sm text-on-inverse-soft transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-body font-semibold text-on-inverse">Contact Us</h3>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex items-start gap-2.5 text-body-sm text-on-inverse-soft">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              {site.address}
            </p>
            <p className="flex items-center gap-2.5 text-body-sm">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={site.phoneHref} className="text-on-inverse-soft hover:text-gold-300">
                {site.phone}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-body-sm">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="text-on-inverse-soft hover:text-gold-300">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-line-inverse">
        <div className="container-site py-5 text-center text-caption text-on-inverse-soft">
          © 2025 NUICC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
