"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-base dark:bg-base-dark" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #1F1F23 0px, #1F1F23 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #1F1F23 0px, #1F1F23 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-electric" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.3em] text-electric">
              Filming Location Guides
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-charcoal dark:text-base leading-[0.9]">
            Walk the
            <br />
            <span className="text-electric glow-electric">Scenes.</span>
          </h1>

          <p className="mt-6 font-body text-lg text-charcoal/60 dark:text-base/50 max-w-md leading-relaxed">
            City guides to real filming locations. No fluff — just the spots,
            the stories, and exactly how to get there.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/guides/new-orleans"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric hover:bg-cobalt text-base font-sub font-bold text-sm uppercase tracking-wider transition-colors"
            >
              <span>New Orleans Guide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-chrome dark:border-chrome/30 text-charcoal dark:text-base font-sub font-bold text-sm uppercase tracking-wider hover:border-electric hover:text-electric transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute top-12 right-8 md:right-16 w-32 h-32 md:w-48 md:h-48 rounded-full bg-electric/5 dark:bg-electric/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-8 right-32 w-24 h-24 rounded-full bg-hotpink/5 dark:bg-hotpink/10 blur-2xl pointer-events-none" />
      </div>
    </section>
  );
}
