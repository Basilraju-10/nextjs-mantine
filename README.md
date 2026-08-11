# Parts Catalog

A polished Next.js + Mantine application for aircraft parts search, service navigation, quality workflows, and customer-facing marketing pages.

## Features

- Next.js App Router with server and client components
- Mantine UI for responsive layout, navigation, forms, and cards
- Search landing experience with tabbed inputs and modern hero presentation
- Modular route structure for home, services, quality, careers, catalog, and product detail pages
- Remote image support for external brand assets via `next.config.ts`
- TypeScript enabled with linting and production build checks

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build the production app
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint checks

## Project Structure

- `app/` — route pages and route-specific components
- `components/` — shared UI components across pages
- `lib/api.ts` — product API helper functions
- `types/product.ts` — product model definitions
- `theme.ts` — Mantine theme configuration
- `next.config.ts` — Next.js configuration and image remote patterns

## Notes

- `app/AboutUs.tsx` was updated for lint-safe apostrophe usage.
- `next.config.ts` includes remote image patterns for `gfa.aero` asset loading.
- The app builds successfully with Next.js and passes ESLint.

## Deployment

This project is ready to deploy to Vercel or any platform that supports Next.js.
