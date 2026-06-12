"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { site, nav, socials, headerLogo } from "@/lib/content";

/** Inline X (Twitter) mark — lucide has no current X logo. */
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21.5l-7.51 8.57L23 22h-7.078l-5.51-7.21L4.9 22H1.64l8.06-9.2L1 2h7.203l5.05 6.63L18.244 2zm-2.49 18h2.31L8.1 4h-2.4l10.054 16z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="h-4 w-4" aria-hidden="true" />,
  Instagram: <Instagram className="h-4 w-4" aria-hidden="true" />,
  X: <XLogo className="h-3.5 w-3.5" />,
  LinkedIn: <Linkedin className="h-4 w-4" aria-hidden="true" />,
};

type HeaderProps = {
  /** Float transparently over the hero (home); solidifies once scrolled. */
  overlay?: boolean;
};

/**
 * Slim single-row institutional header. In overlay mode it sits transparent
 * over the hero photograph with white chrome, then settles into the solid
 * surface bar after the first scroll — as in the reference motion.
 */
export function Header({ overlay = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [overlay]);

  const floating = overlay && !scrolled && !open;

  return (
    <header
      className={`${overlay ? "fixed" : "sticky"} inset-x-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        floating ? "header-overlay" : "border-line bg-surface/90 shadow-xs backdrop-blur-md"
      }`}
    >
      <div className="container-site flex h-[var(--nav-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="NUICC home" className="header-logo-plate flex shrink-0 items-center">
          <Image
            src={headerLogo.src}
            alt={headerLogo.alt}
            width={170}
            height={44}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="header-link group relative whitespace-nowrap py-2 text-body-sm font-medium transition-colors"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href={site.phoneHref}
            className="header-phone hidden items-center gap-2 text-body-sm font-semibold transition-colors xl:flex"
          >
            <span className="header-phone-chip flex h-9 w-9 items-center justify-center rounded-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            {site.phone}
          </a>
          <Link href={site.membershipUrl} className="btn-primary hidden lg:inline-flex">
            Become a Member
          </Link>
          <button
            type="button"
            className="header-menu-btn flex h-10 w-10 items-center justify-center rounded-sm lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav
        id="site-menu"
        aria-label="Mobile"
        className={`${open ? "block" : "hidden"} border-t border-line bg-surface lg:hidden`}
      >
        <div className="container-site flex flex-col gap-1 py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-body font-medium text-ink transition-colors hover:text-link-hover"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NUICC on ${s.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-stone-0 transition-colors hover:bg-navy-700"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 text-body-sm font-medium text-navy-700">
            <a href={site.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>
          <Link href={site.membershipUrl} onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Become a Member
          </Link>
        </div>
      </nav>
    </header>
  );
}
