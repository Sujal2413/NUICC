# Design & Code Provenance

_Prepared for the National U.S.-India Chamber of Commerce._

This document explains where the website's design and code come from, so the
chamber can be confident about originality and licensing.

## Summary

The website is **original, custom-built work** — a hand-coded Next.js
application. It is **not** a purchased theme, a website-builder template, or a
copy of another organisation's site. No third-party page template or "UI kit"
was used; the layout, styling, and interactive effects were written
specifically for NUICC.

## Why it resembles the chamber's current site (nuicc.org)

This is intentional and is the chamber's own intellectual property being carried
forward — not borrowing from anyone else. The new site deliberately reuses:

- **The chamber's brand colours** — navy and gold/champagne (rendered here in a
  darker "premium" treatment of the same palette).
- **The chamber's own photographs** — the founder with government and industry
  leaders, event and gallery images, and the NUICC logo.
- **The U.S. and India flag motif** and partner/member logos.
- **The chamber's own content** — section structure, copy, and the historical
  letters of support.

In other words, the design "looks like nuicc.org" because it *is* NUICC's brand,
imagery, and content — reused appropriately in a rebuilt, modernised shell.

## How it was built

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS 4 with a custom design-token system
  (`app/globals.css`) and per-component scoped CSS (`styled-jsx`)
- **Motion:** GSAP + Lenis for smooth scrolling, plus custom canvas/CSS effects
- **Fonts:** Inter, Montserrat, and Playfair Display (open-source, OFL-licensed)

## Interactive components — originality audit

Each custom motion/effect component was reviewed line-by-line. Several share a
*name* with effects from the popular open-source gallery **React Bits**
(reactbits.dev), but the implementations here are independent and, in the two
most prominent cases, use entirely different techniques:

| Component | What it is | Status |
|---|---|---|
| `SplashCursor` | 2D canvas particle-trail + cursor glow | Original. React Bits' same-named effect is a WebGL fluid simulation — only the name is shared, no code. |
| `DomeGallery` | Pure-CSS two-row infinite marquee of leader photos | Original. React Bits' "DomeGallery" is a draggable 3D sphere — a completely different technique. |
| `Globe` | 2D canvas dot-globe with a U.S.↔India trade arc | Original. Uses standard, public-domain geometry (Fibonacci-sphere distribution, rotation matrices); no 3D library. |
| `MagneticButtons` | Cursor-follow "magnetic" hover on CTAs | Original implementation of a widely-used micro-interaction pattern. |
| `PixelReveal` | Tiles fading from the centre to reveal a section | Original implementation of a common reveal pattern. |
| `ProgressRail` | Scroll-progress indicator bar | Original; trivial scroll-percentage calculation. |
| `CurvedTicker` | Marquee ticker of service keywords | Original CSS marquee. |

**Conclusion:** no third-party effect code was copied into this project. Where
component names echo React Bits, that reflects design *inspiration* (a common
practice), not reused source code.

## Third-party libraries and their licences

All dependencies are mainstream open-source packages used as intended (installed
via npm, not copied into the source):

| Package | Version | Licence |
|---|---|---|
| next | 16.2.9 | MIT |
| react / react-dom | 19.2.7 | MIT |
| gsap | 3.15.0 | GSAP Standard "No Charge" licence (see note) |
| lenis | 1.3.23 | MIT |
| @radix-ui/react-accordion | 1.2.13 | MIT |
| lucide-react | 0.475.0 | ISC |
| react-hook-form | 7.78.0 | MIT |
| zod | 3.25.76 | MIT |
| resend | 4.8.0 | MIT |
| @fontsource/inter, montserrat, playfair-display | 5.2.x | SIL OFL 1.1 |

**Note on GSAP:** GSAP is free to use under its Standard "No Charge" licence for
the way it is used here (standard animation on a public website). It is the only
dependency without a conventional OSI licence, so it is called out for
transparency. No paid "Club GSAP" bonus plugins are used.

## Imagery & content

All photographs, the logo, the letters of support, and the written content are
the chamber's own materials (carried over from the existing nuicc.org). No
stock-photo or third-party imagery requiring separate licensing is used in the
core design.

---

_If a formal third-party review is ever desired, this repository is fully
auditable: every component is plain, readable source with no minified or
obfuscated code._
