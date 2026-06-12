"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, BadgeCheck, Facebook, Instagram, Linkedin } from "lucide-react";
import { HeadingReveal } from "@/components/motion/HeadingReveal";
import { hero, site, socials } from "@/lib/content";
import { isCaptureMode } from "@/lib/captureMode";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

/**
 * Full-bleed hero in the reference composition: photograph across the whole
 * viewport, dark wash from the left, serif headline revealed line by line,
 * one primary action. The photograph breathes with a very slow zoom and a
 * gentle scroll parallax — all behind motion guards.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || isCaptureMode()) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(root.querySelectorAll("[data-hero-seq]"), {
          opacity: 0,
          y: "var(--space-5)",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.25,
        });
        // The slow "Ken Burns" breath on the photograph.
        gsap.fromTo(
          root.querySelector("[data-hero-photo]"),
          { scale: 1.08 },
          { scale: 1, duration: 2.4, ease: "power2.out" },
        );
      });
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 48rem)", () => {
        gsap.to(root.querySelector("[data-hero-bg]"), {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-label="Welcome"
      className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden bg-navy-900"
    >
      <div data-hero-bg className="absolute inset-[-12%_0_0_0]">
        <div data-hero-photo className="absolute inset-0">
          <Image
            src={hero.background}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={50}
            className="object-cover opacity-70"
          />
        </div>
        <div aria-hidden="true" className="hero-wash absolute inset-0" />
      </div>
      <div aria-hidden="true" className="hero-fade-bottom absolute inset-x-0 bottom-0 h-28" />

      <div className="container-site relative pb-24 pt-32">
        <div className="max-w-3xl text-left">
          <div data-hero-seq className="flex flex-wrap items-center gap-4">
            <Image
              src={hero.ribbonTop.src}
              alt={hero.ribbonTop.alt}
              width={240}
              height={40}
              priority
              className="h-auto w-44"
            />
            <Image
              src={hero.ribbon.src}
              alt={hero.ribbon.alt}
              width={420}
              height={56}
              priority
              className="h-auto w-72"
            />
          </div>
          <HeadingReveal
            as="h1"
            className="mt-8 font-serif text-h1 font-semibold leading-tight text-stone-0 md:text-display"
          >
            {hero.titleWhite} <span className="text-gold-400">{hero.titleAccent}</span>
          </HeadingReveal>
          <p data-hero-seq className="mt-6 max-w-xl text-body-lg leading-relaxed text-on-inverse-soft">
            {hero.description}
          </p>
          <div data-hero-seq className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={site.membershipUrl} className="btn-primary">
              Become a Member
            </Link>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>

          <div data-hero-seq className="mt-12 flex max-w-full flex-wrap items-center gap-x-6 gap-y-4">
            <p className="inline-flex max-w-full flex-wrap items-center gap-2 text-caption font-medium text-on-inverse">
              <BadgeCheck className="h-4 w-4 text-gold-400" aria-hidden="true" />
              <span className="min-w-0">
                501(c)(6) Chamber of Commerce · 20+ years · 9,200+ members
              </span>
            </p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-line-inverse sm:block" />
            <span className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NUICC on ${s.label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line-inverse text-on-inverse transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </span>
            <span className="flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-on-inverse-soft">
              <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {site.email}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-gold-300">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {site.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
