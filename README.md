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
