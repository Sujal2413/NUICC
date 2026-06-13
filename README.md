# NUICC

National U.S.-India Chamber of Commerce official website built with Next.js.

## Local Development

```bash
npm ci
npm run dev
```

## Deployment

This project is ready for Vercel with the included `vercel.json`.

- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: Vercel default for Next.js (`.next`)
- Node requirement: `>=20.9.0`

Validate before deploying:

```bash
npm run lint
npm run build
```

No Vercel environment variables are required for the current static site.

## Credits & Provenance

This is original, custom-built work — not a purchased theme or template. The
site reuses the chamber's own brand, photography, and content, which is why it
resembles the existing nuicc.org.

Custom interactive components (`components/motion/`, `DomeGallery`) are original
implementations; several names are inspired by the open-source
[React Bits](https://reactbits.dev) gallery, but no third-party effect code was
copied. Dependencies are mainstream open-source packages (MIT/ISC/OFL); GSAP is
used under its Standard "No Charge" licence.

See [`PROVENANCE.md`](./PROVENANCE.md) for the full design-and-code provenance
breakdown, including a component-by-component originality audit and a dependency
licence table.
