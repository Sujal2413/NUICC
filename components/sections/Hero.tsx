"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, BadgeCheck, Facebook, Instagram, Linkedin } from "lucide-react";
import { hero, site, socials, aboutIntro } from "@/lib/content";
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
 * Hero: left-aligned diplomatic composition — commemorative ribbons, display
 * headline, CTAs, credential line, and a framed photograph of the Founder
 * with the Prime Minister of India as immediate proof of standing. Gentle
 * parallax (desktop) and a sequenced entrance, all behind motion guards.
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
          stagger: 0.1,
        });
      });
      // Parallax only on larger screens — on throttled mobile CPUs the
      // hydration-time transform repaints the LCP image and tanks LCP.
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
    <section ref={ref} aria-label="Welcome" className="relative isolate overflow-hidden bg-navy-900">
      <div data-hero-bg className="absolute inset-[-12%_0_0_0]">
        <Image
          src={hero.background}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="hero-gradient-overlay absolute inset-0"
        />
        {/* Quiet gold aura behind the photo column */}
        <div
          aria-hidden="true"
          className="hero-gold-aura absolute inset-0"
        />
      </div>

      <div className="container-site relative grid items-center gap-12 pb-20 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <div data-hero-seq>
            <Image
              src={hero.ribbonTop.src}
              alt={hero.ribbonTop.alt}
              width={300}
              height={50}
              priority
              className="mx-auto h-auto w-56 lg:mx-0"
            />
          </div>
          <div data-hero-seq>
            <Image
              src={hero.ribbon.src}
              alt={hero.ribbon.alt}
              width={560}
              height={74}
              priority
              className="mx-auto mt-3 h-auto w-full max-w-md lg:mx-0"
            />
          </div>
          <h1 data-hero-seq className="mt-7 font-serif text-display font-semibold leading-tight text-stone-0">
            {hero.titleWhite}{" "}
            <span className="text-gold-400">{hero.titleAccent}</span>
          </h1>
          <p data-hero-seq className="mx-auto mt-5 max-w-xl text-body-lg leading-relaxed text-on-inverse-soft lg:mx-0">
            {hero.description}
          </p>
          <div data-hero-seq className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link href={site.membershipUrl} className="btn-primary">
              Become a Member
            </Link>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>
          <p
            data-hero-seq
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-pill border border-line-inverse bg-inverse-glass px-4 py-2 text-caption font-medium text-on-inverse lg:justify-start"
          >
            <BadgeCheck className="h-4 w-4 text-gold-400" aria-hidden="true" />
            501(c)(6) Chamber of Commerce · 20+ years · 9,200+ members
          </p>
          <div data-hero-seq className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <span className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NUICC on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-inverse text-on-inverse transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-body-sm text-on-inverse">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold-300">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {site.email}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-300">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Framed credential photograph */}
        <figure data-hero-seq className="relative mx-auto hidden w-full max-w-md lg:block">
          <span
            aria-hidden="true"
            className="border-gold-soft absolute -inset-3 rotate-2 rounded-xl border"
          />
          <div className="relative overflow-hidden rounded-xl border border-gold-700/40 bg-navy-800 shadow-lg">
            <Image
              src={aboutIntro.photo.src}
              alt={aboutIntro.photo.alt}
              width={920}
              height={620}
              priority
              sizes="28rem"
              className="h-auto w-full object-cover"
            />
            <figcaption className="flex items-start gap-3 px-5 py-4">
              <Image
                src={aboutIntro.sealLogo.src}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="text-body-sm leading-snug text-on-inverse-soft">
                {aboutIntro.photo.caption}
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
