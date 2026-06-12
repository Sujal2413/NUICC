# NUICC — National U.S.-India Chamber of Commerce

Official website rebuild per `NUICC-Build-Specification.pdf`: a formal,
government-grade experience for policy and diplomatic audiences, with **100%
of the original site's content preserved** (every photo, video, PDF letter,
and section).

## Stack

- **Next.js 16 (App Router) · React 19 · TypeScript strict** — static-rendered, Vercel-ready
- **Tailwind CSS 4** themed from [`nuicc-tokens.css`](nuicc-tokens.css) (the single source of visual truth — never hardcode a hex/px where a token exists)
- **GSAP + ScrollTrigger + Lenis** — dignified motion (fade + 24px rise reveals, gentle hero parallax, stat count-ups, slow marquees); fully disabled under `prefers-reduced-motion`, content never gated on animation
- **Radix accordion** (keyboard/screen-reader correct), **lucide-react** icons
- **react-hook-form + zod** contact form delivered via **Resend** server action
- **next/font** self-hosted Source Serif 4 + Inter; **next/image** for all photography; click-to-load YouTube facades (~14 videos)

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (all routes static)
```

Contact-form delivery requires env vars — see [`.env.example`](.env.example).
Without `RESEND_API_KEY`, the form shows a friendly error directing visitors
to info@nuicc.org.

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/content.ts` | **The complete content inventory** — every section's text, image, video ID, PDF, and link, extracted 1:1 from the original site. Edit content here, not in components. |
| `components/sections/` | One component per section (Header → Footer, 20 sections in original order) |
| `components/primitives/` | Button, SectionHeader, StatCounter, DocumentCard, DignitaryQuote, LeaderPhoto, ServiceCard, FAQAccordion, YouTubeFacade, MarqueeRow, CredentialPill, PressCard, EventCardGrid, ExpandableText |
| `components/motion/` | LenisProvider (smooth scroll) and Reveal (scroll entrance) |
| `nuicc-tokens.css` | Design tokens (color, type, spacing, radii, shadows, motion) |
| `index.html` / `styles.css` | The restored original site, kept as the content reference |
| `download-assets.sh` | Re-pulls all real assets from nuicc.org into `public/assets/img` |

## Measured quality (Lighthouse, production build, June 2026)

| Category | Mobile (throttled emulation) | Desktop |
| --- | --- | --- |
| Performance | 86 | 99 |
| Accessibility | **100** | 100 |
| Best Practices | **100** | 100 |
| SEO | **100** | 100 |

Mobile performance is bounded by hydrating a single page that carries 100% of
the chamber's content (130+ images, 14 video facades) plus the GSAP motion
system on a 4×-throttled CPU — the LCP image loads in <400 ms but Chrome
schedules its paint behind hydration. Pushing past ~86 would require dropping
the GSAP/React architecture or splitting content across pages, both spec
trade-offs to decide deliberately.

## Flagged for the chamber (preserved as-is, do not silently change)

1. **prakhardemos.com demo links** — "Pride of India" and "NUICC Business Survey" buttons point to demo URLs; production URLs needed.
2. **"Hussars Ride" press link** — unrelated placeholder post on nuicc.website; replace or remove (labelled "Under review" in the UI).
3. **Empty `#` links** — "NUICC's Mission, Vision, Services and Membership" document has no target (labelled "pending" in the UI).
4. **/membership** — tiers/pricing/application were not part of the homepage inventory; the route is a labelled placeholder linking to the live application page.
5. **Two YouTube videos are no longer available on YouTube** (`NCNOAIUm5q4`, `gzAzi46z0v4` — no thumbnails at any size, oEmbed returns 404; they would show "Video unavailable" even on the original site). Their slots now render authentic NUICC event photography as posters and still attempt the embed on click. The chamber should supply replacement video links.
6. The Instagram/Facebook embeds render as click-to-load facades backed by real Rajasthan-chapter photography (no third-party cookies until the visitor opts in).

## Figma design file

`NUICC Website Redesign` — https://www.figma.com/design/dYkYbdxsGeKX10f8VrIPEw — contains the
NUICC token foundation (29 color variables in the "NUICC Tokens" collection) and a pixel
capture of the homepage was submitted. Further design-system work via the Figma MCP is
blocked by the **Starter plan limit (6 tool calls/month)**; upgrade to Pro with a Full/Dev
seat (200 calls/day) to continue. The site supports `?nomotion=1` (and the capture hash)
to disable all entrance motion for clean captures.
