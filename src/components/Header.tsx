"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-chrome/40 dark:border-chrome/10 bg-base/80 dark:bg-base-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-heading text-2xl font-extrabold tracking-tight text-charcoal dark:text-base uppercase">
            Plot Points
          </span>
          <span className="flex items-center gap-0">
            <span className="h-[2px] flex-1 bg-electric" />
            <svg
              viewBox="0 0 12 8"
              className="w-3 h-2 text-electric fill-current -ml-px"
            >
              <polygon points="0,0 12,4 0,8" />
            </svg>
          </span>
          <span className="font-sub text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-charcoal/70 dark:text-base/70">
            Travel
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <Link
            href="/#guides"
            className="font-sub text-sm font-semibold uppercase tracking-wider text-charcoal/70 dark:text-base/70 hover:text-electric transition-colors"
          >
            Guides
          </Link>
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-chrome/60 dark:border-chrome/20 flex items-center justify-center hover:border-electric transition-colors"
          >
            {theme === "light" ? (
              <svg
                className="w-4 h-4 text-charcoal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-base"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
