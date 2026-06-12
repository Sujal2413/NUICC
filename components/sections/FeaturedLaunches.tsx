"use client";

import { useEffect, useRef } from "react";

const LAUNCHES = [
  {
    region: "Pacific Northwest",
    title: "Northwest U.S.-India Chamber",
    desc: "Launched March 19, 2025 with the Bellevue Chamber of Commerce, serving nine Northwest states.",
    img: "/assets/img/event/Feature_launches_1.png",
  },
  {
    region: "South India",
    title: "Bangalore Branch",
    desc: "A strategic hub connecting U.S. companies to Bengaluru's AI, IT, manufacturing, clean energy, and startup ecosystem.",
    img: "/assets/img/gallery/AUS_Cham.png",
  },
  {
    region: "New York",
    title: "Rajasthan Foundation Chapter",
    desc: "Strengthening U.S.-Rajasthan collaboration, investment, diaspora engagement, and cultural ties.",
    img: "/assets/img/gallery/DrV_Amb_Kwatra.png",
  },
  {
    region: "Media Center",
    title: "Global Business Moments",
    desc: "Launch ceremonies, diplomatic meetings, press coverage, and executive gatherings across both countries.",
    img: "/assets/img/event/image_3section_2.png",
  },
];

function LaunchCard({ launch }: { launch: (typeof LAUNCHES)[0] }) {
  return (
    <article className="fl-card">
      <img src={launch.img} alt={launch.title} loading="lazy" className="fl-card-img" />
      <div className="fl-card-shade" />
      <div className="fl-card-body">
        <div className="eyebrow">{launch.region}</div>
        <h3 className="fl-card-title">{launch.title}</h3>
        <p className="fl-card-desc">{launch.desc}</p>
      </div>
    </article>
  );
}

export default function FeaturedLaunches() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Reveal-on-enter for the heading block.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Desktop: pin the row and translate it horizontally with scroll.
  useEffect(() => {
    const row = rowRef.current;
    const track = trackRef.current;
    if (!row || !track) return;
    const mq = window.matchMedia("(min-width: 1041px) and (prefers-reduced-motion: no-preference)");

    let raf = 0;
    const update = () => {
      raf = 0;
      if (!mq.matches) {
        row.style.transform = "";
        return;
      }
      const rect = track.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
      const maxShift = Math.max(0, row.scrollWidth - row.parentElement!.clientWidth);
      row.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="launches" className="section-dark" style={{ position: "relative" }}>
      <div ref={trackRef} className="fl-track">
        <div className="fl-sticky">
          <div className="wrap" style={{ paddingTop: 90 }}>
            <div className="section-head" style={{ marginBottom: 34 }}>
              <div>
                <div className="eyebrow reveal">Featured Launches</div>
                <h2 className="section-title reveal">Regional chapters expanding cross-border opportunity.</h2>
              </div>
              <p className="lead reveal" style={{ color: "var(--muted)" }}>
                Recent launches strengthen trade, innovation, startup ecosystems, and trusted global networks between the United States and India.
              </p>
            </div>
          </div>
          <div className="fl-viewport">
            <div ref={rowRef} className="fl-row">
              {LAUNCHES.map((launch) => (
                <LaunchCard key={launch.title} launch={launch} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Track gives scroll room; the stage stays pinned while cards glide. */
        .fl-track {
          height: 280vh;
          position: relative;
        }
        .fl-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .fl-viewport {
          flex: 1;
          overflow: hidden;
          padding: 0 max(20px, calc((100vw - 1180px) / 2));
          display: flex;
          align-items: center;
        }
        .fl-row {
          display: flex;
          gap: 22px;
          will-change: transform;
        }
        .fl-card {
          position: relative;
          flex-shrink: 0;
          width: min(720px, 72vw);
          height: min(56vh, 480px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          border: 1px solid rgba(217, 179, 109, 0.26);
          border-radius: var(--radius);
          background: var(--navy);
          box-shadow: var(--shadow);
        }
        .fl-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.88;
          transform: scale(1.06);
        }
        .fl-card-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 20%, rgba(7, 17, 29, 0.92));
        }
        .fl-card-body {
          position: relative;
          z-index: 1;
          padding: 30px;
        }
        .fl-card-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1;
          margin: 8px 0 12px;
        }
        .fl-card-desc {
          margin-bottom: 0;
          color: rgba(248, 242, 231, 0.68);
          line-height: 1.75;
          max-width: 520px;
        }

        /* Mobile / reduced motion: no pin, stacked cards. */
        @media (max-width: 1040px), (prefers-reduced-motion: reduce) {
          .fl-track {
            height: auto;
          }
          .fl-sticky {
            position: static;
            height: auto;
            overflow: visible;
          }
          .fl-viewport {
            overflow: visible;
            padding: 0 20px 60px;
          }
          .fl-row {
            flex-direction: column;
            transform: none !important;
          }
          .fl-card {
            width: 100%;
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
}
