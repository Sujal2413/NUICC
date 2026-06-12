"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Data ────────────────────────────────── */
const STATS = [
  { target: 50, suffix: "+", label: "Countries" },
  { target: 1, suffix: "B+", label: "Trade Volume", prefix: "$" },
  { target: 10000, suffix: "+", label: "Jobs Created", format: true },
  { target: 500, suffix: "+", label: "Partnerships" },
];

const SOCIAL = [
  { label: "X", href: "https://x.com/NUICC", icon: "X" },
  { label: "Facebook", href: "https://www.facebook.com/www.nuicc.info/", icon: "f" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/purnimavoria/", icon: "in" },
  { label: "Instagram", href: "https://www.instagram.com/reel/DPE_Z7SE5pR/", icon: "ig" },
];

/* ─── Animated Counter Hook ───────────────── */
function useCountUp(target: number, duration = 2000, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);
  return value;
}

/* ─── Particle Canvas ─────────────────────── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const count = 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * (w / window.devicePixelRatio),
      y: Math.random() * (h / window.devicePixelRatio),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5,
      pulseSpeed: 0.005 + Math.random() * 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let rafId: number;
    let time = 0;

    const draw = () => {
      time += 1;
      const cw = w / window.devicePixelRatio;
      const ch = h / window.devicePixelRatio;
      ctx.clearRect(0, 0, cw, ch);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.12;
            ctx.strokeStyle = `rgba(217, 179, 109, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const a = p.alpha * pulse;

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(217, 179, 109, ${a * 0.4})`);
        grad.addColorStop(1, `rgba(217, 179, 109, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255, 250, 240, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* ─── Rotating Badge ──────────────────────── */
function AnniversaryBadge() {
  return (
    <div className="hero-badge" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="140" height="140">
        <defs>
          <path id="badgeCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        {/* Outer ring */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(217,179,109,.25)" strokeWidth="1" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(217,179,109,.15)" strokeWidth="0.5" />
        {/* Rotating text */}
        <text fill="var(--champagne)" fontSize="11.5" fontWeight="800" letterSpacing="4">
          <textPath href="#badgeCircle">
            ★ STRATEGIC TRADE ALLIANCE ★ SINCE 2005 ★ U.S. — INDIA
          </textPath>
        </text>
        {/* Center content */}
        <text x="100" y="88" textAnchor="middle" fill="var(--champagne)" fontFamily="var(--font-display)" fontSize="48" fontWeight="700">20</text>
        <text x="100" y="118" textAnchor="middle" fill="var(--ivory)" fontFamily="var(--font-body)" fontSize="11" fontWeight="800" letterSpacing="3" style={{ textTransform: "uppercase" }}>YEARS</text>
      </svg>
    </div>
  );
}

/* ─── Stat Counter Card ───────────────────── */
function StatCard({ stat, index, started }: { stat: typeof STATS[0]; index: number; started: boolean }) {
  const count = useCountUp(stat.target, 2200 + index * 200, started);
  const display = stat.format ? count.toLocaleString() : count.toString();

  return (
    <div className="hero-stat">
      <strong className="hero-stat-value">
        {stat.prefix || ""}{display}{stat.suffix}
      </strong>
      <span className="hero-stat-label">{stat.label}</span>
      {/* Hover shimmer */}
      <div className="hero-stat-shimmer" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════ */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // Entry animation
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Stats counter trigger
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax on scroll
  const onScroll = useCallback(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const scrollY = window.scrollY;
    const heroH = hero.offsetHeight;
    if (scrollY > heroH) return;
    const progress = scrollY / heroH;
    hero.style.setProperty("--scroll", `${progress}`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header ref={heroRef} id="home" className="hero-section">
      {/* ── Animated Gradient Mesh Background ── */}
      <div className="hero-bg-mesh" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
        <div className="hero-orb hero-orb--4" />
      </div>

      {/* ── Particle Field ─────────────────── */}
      <ParticleField />

      {/* ── Gradient Overlays ──────────────── */}
      <div className="hero-gradient-overlay" />
      <div className="hero-bottom-glow" />

      {/* ── Decorative Rings ───────────────── */}
      <div className="hero-deco-ring hero-deco-ring--1" aria-hidden="true" />
      <div className="hero-deco-ring hero-deco-ring--2" aria-hidden="true" />

      {/* ── Main Content ───────────────────── */}
      <div className="wrap hero-content-wrap">
        <div className="hero-layout">
          {/* LEFT — Main Text Content */}
          <div className="hero-text-col">
            {/* Eyebrow */}
            <div className={`eyebrow hero-anim hero-anim--1 ${loaded ? "hero-anim--in" : ""}`}>
              The Right Passage to India
            </div>

            {/* Sub-eyebrow */}
            <div className={`hero-sub-eyebrow hero-anim hero-anim--2 ${loaded ? "hero-anim--in" : ""}`}>
              20 Years of Successful Trade Deals between U.S. and India
            </div>

            {/* Headline with reveal */}
            <h1 className="hero-headline" aria-label="Your gateway to strategic partnership for business deals">
              <span className={`hero-headline-line hero-anim hero-anim--3 ${loaded ? "hero-anim--in" : ""}`}>
                <span className="hero-headline-word hero-headline-word--accent">YOUR</span> GATEWAY
              </span>
              <span className={`hero-headline-line hero-anim hero-anim--4 ${loaded ? "hero-anim--in" : ""}`}>
                TO <span className="hero-headline-word hero-headline-word--gradient">STRATEGIC</span>
              </span>
              <span className={`hero-headline-line hero-anim hero-anim--5 ${loaded ? "hero-anim--in" : ""}`}>
                PARTNERSHIP
              </span>
            </h1>

            {/* Description */}
            <p className={`hero-desc hero-anim hero-anim--6 ${loaded ? "hero-anim--in" : ""}`}>
              Connecting businesses, fostering trade relationships, and building bridges between the United States and India through strategic partnerships and comprehensive business deals.
            </p>

            {/* CTA Buttons */}
            <div className={`hero-actions hero-anim hero-anim--7 ${loaded ? "hero-anim--in" : ""}`}>
              <a href="https://nuicc.org/membership" className="hero-btn hero-btn--primary">
                <span className="hero-btn-text">BECOME A MEMBER</span>
                <span className="hero-btn-arrow">→</span>
              </a>
              <a href="#services" className="hero-btn hero-btn--secondary">
                <span className="hero-btn-text">EXPLORE SERVICES</span>
              </a>
            </div>

            {/* Contact Strip */}
            <div className={`hero-contact hero-anim hero-anim--8 ${loaded ? "hero-anim--in" : ""}`}>
              <a href="mailto:info@nuicc.org" className="hero-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@nuicc.org
              </a>
              <a href="tel:+17203233728" className="hero-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.84.36 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.34 1.97.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1(720) 323-3728
              </a>
              <div className="hero-social">
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="hero-social-link" target="_blank" rel="noopener noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Card + Badge */}
          <div className="hero-right-col">
            <AnniversaryBadge />
            <aside className={`hero-deal-card hero-anim hero-anim--5 ${loaded ? "hero-anim--in" : ""}`}>
              <div className="hero-deal-shine" />
              <div className="hero-deal-img-wrap">
                <img
                  src="/assets/img/gallery/sulekha_nk_q25.jpg"
                  alt="NUICC Founder Dr. Purnima Voria"
                />
                <div className="hero-deal-img-overlay" />
              </div>
              <div className="hero-deal-content">
                <b className="hero-deal-title">
                  Where policy conversations become signed business deals.
                </b>
                <span className="hero-deal-sub">
                  Serving startups, enterprises, investors &amp; public institutions across U.S. and India.
                </span>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Stats Rail ──────────────────── */}
        <div ref={railRef} className={`hero-stats ${statsVisible ? "hero-stats--visible" : ""}`}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} started={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────── */}
      <div className={`hero-scroll-hint hero-anim hero-anim--9 ${loaded ? "hero-anim--in" : ""}`}>
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>

      {/* ═══ Scoped Styles ═══════════════════ */}
      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 130px 0 40px;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Gradient Mesh BG ────────────── */
        .hero-bg-mesh {
          position: absolute;
          inset: 0;
          z-index: -4;
          overflow: hidden;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform;
        }
        .hero-orb--1 {
          width: 60vw; height: 60vw;
          top: -20%; right: -15%;
          background: radial-gradient(circle, rgba(217,179,109,.3), transparent 70%);
          animation: orbFloat1 20s ease-in-out infinite;
        }
        .hero-orb--2 {
          width: 50vw; height: 50vw;
          bottom: -25%; left: -10%;
          background: radial-gradient(circle, rgba(13,118,81,.25), transparent 70%);
          animation: orbFloat2 25s ease-in-out infinite;
        }
        .hero-orb--3 {
          width: 35vw; height: 35vw;
          top: 30%; left: 20%;
          background: radial-gradient(circle, rgba(224,124,35,.18), transparent 70%);
          animation: orbFloat3 18s ease-in-out infinite;
        }
        .hero-orb--4 {
          width: 25vw; height: 25vw;
          top: 10%; right: 25%;
          background: radial-gradient(circle, rgba(159,39,49,.12), transparent 70%);
          animation: orbFloat1 22s ease-in-out infinite reverse;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, -8%) scale(1.05); }
          66% { transform: translate(-3%, 5%) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-6%, 4%) scale(1.08); }
          66% { transform: translate(4%, -6%) scale(0.92); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8%, 10%); }
        }

        /* ── Overlays ────────────────────── */
        .hero-gradient-overlay {
          position: absolute; inset: 0; z-index: 1;
          background:
            radial-gradient(ellipse at 80% 10%, rgba(217,179,109,.2), transparent 40%),
            linear-gradient(180deg, rgba(7,17,29,.6), rgba(7,17,29,.85) 50%, rgba(7,17,29,.98)),
            linear-gradient(90deg, rgba(7,17,29,.95), rgba(7,17,29,.5) 50%, rgba(7,17,29,.3));
          pointer-events: none;
        }
        .hero-bottom-glow {
          position: absolute; inset: auto -8% 0; height: 35%; z-index: 1;
          background: linear-gradient(90deg, rgba(224,124,35,.22), rgba(217,179,109,.12), rgba(13,118,81,.22));
          filter: blur(60px); opacity: 0.7;
          pointer-events: none;
        }

        /* ── Deco Rings ──────────────────── */
        .hero-deco-ring {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 1;
        }
        .hero-deco-ring--1 {
          width: 600px; height: 600px;
          top: -10%; right: -5%;
          border: 1px solid rgba(217,179,109,.1);
          animation: ringRotate 40s linear infinite;
        }
        .hero-deco-ring--2 {
          width: 400px; height: 400px;
          top: 5%; right: 5%;
          border: 1px dashed rgba(13,118,81,.12);
          animation: ringRotate 30s linear infinite reverse;
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Content Layout ──────────────── */
        .hero-content-wrap {
          position: relative;
          z-index: 2;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: end;
        }

        /* ── Text Column ─────────────────── */
        .hero-sub-eyebrow {
          color: var(--champagne);
          font-weight: 700;
          font-size: 16px;
          margin-top: 14px;
          margin-bottom: 20px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(52px, 8.5vw, 120px);
          font-weight: 700;
          line-height: 0.88;
          letter-spacing: -0.01em;
          margin: 0 0 28px;
          color: var(--ivory);
        }
        .hero-headline-line {
          display: block;
          overflow: hidden;
          padding-bottom: 0.06em;
        }
        .hero-headline-word--accent {
          color: var(--champagne);
        }
        .hero-headline-word--gradient {
          background: linear-gradient(135deg, var(--champagne), var(--saffron), var(--emerald));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          max-width: 640px;
          color: rgba(248,242,231,.7);
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.75;
          margin-bottom: 0;
        }

        /* ── CTA Buttons ─────────────────── */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 28px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .hero-btn--primary {
          color: var(--night);
          background: linear-gradient(135deg, #f7d994 0%, #d9b36d 50%, #b98a36 100%);
          border: none;
          box-shadow: 0 8px 32px rgba(217,179,109,.35), 0 2px 8px rgba(0,0,0,.2);
        }
        .hero-btn--primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 48px rgba(217,179,109,.45), 0 4px 16px rgba(0,0,0,.3);
        }
        .hero-btn-arrow {
          transition: transform 0.3s ease;
          font-size: 18px;
        }
        .hero-btn--primary:hover .hero-btn-arrow {
          transform: translateX(4px);
        }
        .hero-btn--secondary {
          color: var(--ivory);
          background: rgba(255,250,240,.08);
          border: 1px solid rgba(217,179,109,.3);
          backdrop-filter: blur(12px);
        }
        .hero-btn--secondary:hover {
          background: rgba(217,179,109,.15);
          border-color: rgba(217,179,109,.6);
          transform: translateY(-2px);
        }

        /* ── Contact Strip ───────────────── */
        .hero-contact {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(217,179,109,.15);
        }
        .hero-contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(248,242,231,.7);
          letter-spacing: 0.04em;
          transition: color 0.25s;
        }
        .hero-contact-link:hover {
          color: var(--champagne);
        }
        .hero-social {
          display: flex;
          gap: 8px;
          margin-left: auto;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(217,179,109,.25);
          background: rgba(255,250,240,.06);
          color: rgba(248,242,231,.7);
          font-size: 11px;
          font-weight: 900;
          transition: all 0.25s ease;
        }
        .hero-social-link:hover {
          background: rgba(217,179,109,.2);
          border-color: var(--champagne);
          color: var(--champagne);
          transform: translateY(-2px);
        }

        /* ── Right Column ────────────────── */
        .hero-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .hero-badge {
          position: absolute;
          top: -60px;
          right: -10px;
          z-index: 3;
          animation: badgeSpin 30s linear infinite;
          filter: drop-shadow(0 0 20px rgba(217,179,109,.3));
        }
        @keyframes badgeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Deal Card ───────────────────── */
        .hero-deal-card {
          position: relative;
          border: 1px solid rgba(217,179,109,.2);
          background: linear-gradient(180deg, rgba(255,250,240,.12), rgba(255,250,240,.04));
          backdrop-filter: blur(24px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,.4);
        }
        .hero-deal-shine {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(130deg, transparent 30%, rgba(217,179,109,.15) 50%, transparent 70%);
          transform: translateX(-120%);
          animation: shine 6s ease-in-out infinite;
        }
        .hero-deal-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .hero-deal-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 14%;
          transition: transform 0.6s ease;
        }
        .hero-deal-card:hover .hero-deal-img-wrap img {
          transform: scale(1.05);
        }
        .hero-deal-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7,17,29,.6));
        }
        .hero-deal-content {
          position: relative; z-index: 2;
          padding: 20px 22px 24px;
        }
        .hero-deal-title {
          display: block;
          color: var(--ivory);
          font-family: var(--font-display);
          font-size: 26px;
          line-height: 1.1;
        }
        .hero-deal-sub {
          display: block;
          margin-top: 10px;
          color: rgba(248,242,231,.6);
          font-size: 13px;
          line-height: 1.6;
        }

        /* ── Stats Rail ──────────────────── */
        .hero-stats {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(217,179,109,.2);
          background: rgba(7,17,29,.5);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-stats--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Scroll Indicator ────────────── */
        .hero-scroll-hint {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 3;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(180deg, var(--champagne), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-scroll-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(248,242,231,.4);
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }

        /* ── Entry Animations ────────────── */
        .hero-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-anim--in { opacity: 1; transform: translateY(0); }
        .hero-anim--1 { transition-delay: 0.1s; }
        .hero-anim--2 { transition-delay: 0.2s; }
        .hero-anim--3 { transition-delay: 0.35s; }
        .hero-anim--4 { transition-delay: 0.5s; }
        .hero-anim--5 { transition-delay: 0.65s; }
        .hero-anim--6 { transition-delay: 0.8s; }
        .hero-anim--7 { transition-delay: 0.95s; }
        .hero-anim--8 { transition-delay: 1.1s; }
        .hero-anim--9 { transition-delay: 1.4s; }

        /* ── Responsive ──────────────────── */
        @media (max-width: 1040px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
          }
          .hero-right-col {
            align-items: center;
          }
          .hero-deal-card {
            max-width: 420px;
          }
          .hero-badge {
            top: -70px; right: 50%;
            transform: translateX(50%);
          }
          .hero-deco-ring { display: none; }
        }

        @media (max-width: 680px) {
          .hero-section {
            min-height: auto;
            padding: 110px 0 30px;
          }
          .hero-headline {
            font-size: clamp(40px, 14vw, 60px);
            line-height: 0.92;
          }
          .hero-layout {
            gap: 32px !important;
          }
          .hero-actions {
            flex-direction: column;
          }
          .hero-btn {
            width: 100%;
            justify-content: center;
          }
          .hero-stats {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-contact {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-social {
            margin-left: 0;
          }
          .hero-badge {
            display: none;
          }
          .hero-deal-card {
            max-width: none;
          }
          .hero-scroll-hint {
            display: none;
          }
          .hero-deco-ring { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orb,
          .hero-badge,
          .hero-deco-ring,
          .hero-scroll-line {
            animation: none !important;
          }
          .hero-anim {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ═══ Global stat styles ═══════════════ */}
      <style jsx global>{`
        .hero-stat {
          position: relative;
          padding: 22px 24px;
          border-right: 1px solid rgba(217,179,109,.15);
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .hero-stat:last-child {
          border-right: 0;
        }
        .hero-stat:hover {
          background: rgba(217,179,109,.06);
        }
        .hero-stat-value {
          display: block;
          font-family: var(--font-display);
          color: var(--champagne);
          font-size: clamp(36px, 4vw, 56px);
          line-height: 0.9;
          font-weight: 700;
        }
        .hero-stat-label {
          display: block;
          margin-top: 10px;
          color: rgba(248,242,231,.58);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .hero-stat-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,250,240,.08), transparent 60%);
          transform: translateX(-120%);
          pointer-events: none;
        }
        .hero-stat:hover .hero-stat-shimmer {
          transform: translateX(120%);
          transition: transform 0.7s ease;
        }

        @media (max-width: 680px) {
          .hero-stat {
            padding: 16px 18px;
            border-right: 0 !important;
            border-bottom: 1px solid rgba(217,179,109,.12);
          }
          .hero-stat:nth-child(2n) {
            border-right: 0;
          }
          .hero-stat:nth-child(odd) {
            border-right: 1px solid rgba(217,179,109,.12) !important;
          }
          .hero-stat:nth-last-child(-n+2) {
            border-bottom: 0;
          }
        }
      `}</style>
    </header>
  );
}
