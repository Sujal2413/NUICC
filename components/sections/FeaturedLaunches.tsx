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

  // Reveal-on-enter for the heading + cards. No scroll hijacking anywhere:
  // the carousel is a native overflow-x scroller, so vertical wheel/touch
  // over it always moves the page, and horizontal intent scrolls the rail.
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

  return (
    <section ref={sectionRef} id="launches" className="section section-dark">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Featured Launches</div>
            <h2 className="section-title reveal">Regional chapters expanding cross-border opportunity.</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            Recent launches strengthen trade, innovation, startup ecosystems, and trusted global networks between the United States and India.
          </p>
        </div>
      </div>

      {/* Native scroll-snap carousel — never locks the page scroll. */}
      <div className="fl-carousel reveal" role="group" aria-label="Featured launches">
        {LAUNCHES.map((launch) => (
          <LaunchCard key={launch.title} launch={launch} />
        ))}
      </div>

      <style jsx global>{`
        .fl-carousel {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          /* room so first/last cards align with the page gutter */
          padding: 4px max(20px, calc((100vw - 1180px) / 2)) 28px;
          /* let vertical gestures bubble to the page; only horizontal pans here */
          touch-action: pan-y;
          scrollbar-width: thin;
          scrollbar-color: rgba(217, 179, 109, 0.4) transparent;
        }
        .fl-carousel::-webkit-scrollbar {
          height: 8px;
        }
        .fl-carousel::-webkit-scrollbar-thumb {
          background: rgba(217, 179, 109, 0.4);
          border-radius: 999px;
        }
        .fl-carousel::-webkit-scrollbar-track {
          background: transparent;
        }

        .fl-card {
          position: relative;
          flex: 0 0 auto;
          scroll-snap-align: start;
          width: min(680px, 80vw);
          height: min(56vh, 460px);
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
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fl-card:hover .fl-card-img {
          transform: scale(1.12);
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
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.05;
          margin: 8px 0 12px;
        }
        .fl-card-desc {
          margin-bottom: 0;
          color: rgba(248, 242, 231, 0.68);
          line-height: 1.6;
          max-width: 520px;
        }

        @media (max-width: 680px) {
          .fl-card {
            width: 86vw;
            height: 420px;
          }
          .fl-card-body {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}
