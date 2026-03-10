# AGENTS.md

## Cursor Cloud specific instructions

**Stack**: Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript.

- `npm run dev` starts the dev server on port 3000.
- `npm run lint` runs ESLint; `npm run build` does a production build.
- Fonts are loaded via external CDN imports in `src/app/globals.css` (Fontshare for Cabinet Grotesk, Google Fonts for Fira Sans Condensed + Inter).
- Dark mode uses a `.dark` class on `<html>` with `@custom-variant dark` in Tailwind v4 — NOT the default media query approach.
- Cover images are SVG placeholders; the user will replace with actual JPG/PNG assets.
- Buy buttons are non-functional placeholders for future Gumroad/Shopify integration.
