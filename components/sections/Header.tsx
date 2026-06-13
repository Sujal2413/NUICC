"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leaders", href: "#leaders" },
  { label: "Membership", href: "#membership" },
  { label: "Launches", href: "#launches" },
  { label: "Contact", href: "#contact" },
];

function splitChars(text: string, baseDelay: number, itemIndex: number) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="char"
      style={{
        transitionDelay: `${baseDelay + itemIndex * 80 + i * 30}ms`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // On phones the pill nav competes with content for a small screen — tuck it
  // away while scrolling down, bring it back on the first upward scroll.
  // CSS limits the effect to <=768px; desktop never moves.
  useEffect(() => {
    let lastY = window.scrollY;
    let travel = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      if (y <= 160) {
        setNavHidden(false);
        travel = 0;
        return;
      }
      // Accumulate same-direction travel and only flip after 24px, so the
      // jittery small-delta scroll events mobile browsers fire (URL bar
      // collapse, rubber-banding) can't thrash the nav in and out.
      travel = (delta >= 0) === (travel >= 0) ? travel + delta : delta;
      if (travel > 24) setNavHidden(true);
      else if (travel < -24) setNavHidden(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling underneath the open menu overlay.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Nav ─────────────────── */}
      <nav
        id="main-nav"
        className={navHidden && !menuOpen ? "nav-hidden" : ""}
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "min(1180px, calc(100% - 28px))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          minHeight: 70,
          padding: "10px 12px 10px 14px",
          border: "1px solid rgba(217,179,109,.24)",
          background: "rgba(7,17,29,.72)",
          backdropFilter: "blur(24px) saturate(1.25)",
          boxShadow: "0 20px 70px rgba(0,0,0,.28)",
          borderRadius: "var(--radius)",
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          aria-label="NUICC home"
          style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}
        >
          <img
            src="/assets/img/home/nicuu-page.png"
            alt="NUICC logo"
            className="brand-logo"
            style={{
              width: 48,
              height: 48,
              objectFit: "contain",
              padding: 4,
              background: "var(--ivory)",
              borderRadius: "var(--radius)",
            }}
          />
          <div style={{ minWidth: 0 }}>
            <strong
              className="brand-title"
              style={{
                display: "block",
                color: "var(--ivory)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.1,
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              National U.S.-India
              <br />
              Chamber of Commerce
            </strong>
            <span
              className="brand-sub"
              style={{
                display: "block",
                marginTop: 4,
                color: "var(--champagne)",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              Strategic Trade Alliance
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div
          className="nav-links-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            color: "rgba(248,242,231,.74)",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ position: "relative", padding: "8px 0" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--champagne)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "rgba(248,242,231,.74)";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://nuicc.org/membership"
            className="btn btn-light"
            id="nav-cta"
            style={{ fontSize: 12 }}
          >
            Become a Member
          </a>
          <button
            id="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              display: "none",
              width: 44,
              height: 44,
              background: "transparent",
              border: "1px solid rgba(217,179,109,.3)",
              borderRadius: "var(--radius)",
              cursor: "pointer",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 10,
                top: menuOpen ? 20 : 14,
                width: 22,
                height: 2,
                background: "var(--ivory)",
                borderRadius: 2,
                transform: menuOpen ? "rotate(45deg)" : "none",
                transition: "all .3s ease",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 10,
                top: menuOpen ? 20 : 26,
                width: 22,
                height: 2,
                background: "var(--ivory)",
                borderRadius: 2,
                transform: menuOpen ? "rotate(-45deg)" : "none",
                transition: "all .3s ease",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Flowing Menu Overlay ─────────── */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} id="flowing-menu">
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "transparent",
            border: "none",
            color: "var(--ivory)",
            fontSize: 32,
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ✕
        </button>
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="menu-item"
              onClick={closeMenu}
            >
              {splitChars(item.label, 200, idx)}
            </a>
          ))}
        </nav>
        <a
          href="https://nuicc.org/membership"
          className="btn btn-light"
          onClick={closeMenu}
          style={{ marginTop: 40, fontSize: 14 }}
        >
          Become a Member
        </a>
      </div>

      {/* ── Responsive styles ─────────────── */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .nav-links-desktop {
            display: none !important;
          }
          #menu-toggle {
            display: flex !important;
          }
          #nav-cta {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          #main-nav {
            transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.35s ease;
          }
          #main-nav.nav-hidden {
            transform: translateX(-50%) translateY(-140%) !important;
            opacity: 0;
            pointer-events: none;
          }
        }
        @media (max-width: 680px) {
          #main-nav {
            top: 10px !important;
            width: calc(100% - 16px) !important;
            min-height: 54px !important;
            padding: 7px 10px !important;
            gap: 10px !important;
          }
          .brand-logo {
            width: 36px !important;
            height: 36px !important;
          }
          .brand-title {
            font-size: 11px !important;
          }
          .brand-sub {
            font-size: 8.5px !important;
            letter-spacing: 0.14em !important;
          }
          #menu-toggle {
            width: 40px !important;
            height: 40px !important;
          }
          #menu-toggle span {
            left: 9px !important;
          }
        }
        @media (max-width: 380px) {
          .brand-sub {
            display: none !important;
          }
          .brand-title {
            font-size: 11px !important;
          }
        }
      `}</style>
    </>
  );
}
