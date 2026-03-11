"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-charcoal/90 backdrop-blur-xl border-b border-white/[0.06]">
      {/* Top chrome accent line */}
      <div className="h-[2px] bg-gradient-to-r from-electric via-hotpink to-lime" />

      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-heading text-[1.4rem] font-extrabold tracking-tight text-white uppercase">
            Plot Points
          </span>
          <span className="flex items-center gap-0 mt-0.5">
            <span className="h-[2px] flex-1 bg-gradient-to-r from-electric to-hotpink" />
            <svg
              viewBox="0 0 12 8"
              className="w-3 h-2 text-hotpink fill-current -ml-px"
            >
              <polygon points="0,0 12,4 0,8" />
            </svg>
          </span>
          <span className="font-sub text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-white/50 mt-px">
            Travel
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-5">
          <Link
            href="/#guides"
            className="font-sub text-sm font-semibold uppercase tracking-wider text-white/50 hover:text-electric transition-colors"
          >
            Guides
          </Link>

          {/* Neon dot separator */}
          <span className="w-1 h-1 rounded-full bg-hotpink/60" />

          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-electric hover:neon-border-electric transition-all"
          >
            {theme === "light" ? (
              <svg className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
