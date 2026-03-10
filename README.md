# Plot Points Travel

E-commerce website for Plot Points Travel — city guides to real filming locations.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Cabinet Grotesk / Fira Sans Condensed / Inter

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Homepage with hero, guide grid, email signup
- `/guides/new-orleans` — New Orleans filming locations guide

## Replacing Placeholder Assets

Drop your actual image files into `public/images/`:

- `nola-cover.svg` → replace with `nola-cover.jpg` (or `.png`/`.webp`) and update the `src` prop in `src/app/page.tsx` and `src/app/guides/new-orleans/page.tsx`

## E-Commerce Integration

Buy buttons are placeholder `<button>` elements ready for Gumroad or Shopify embed integration. Search for `Get the Guide` in the source to find them.
