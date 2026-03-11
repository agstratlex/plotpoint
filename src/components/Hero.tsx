"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden animated-gradient-bg scanlines">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Neon orbs */}
      <div className="absolute top-16 right-[10%] w-64 h-64 rounded-full bg-electric/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-48 h-48 rounded-full bg-hotpink/15 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-[30%] w-32 h-32 rounded-full bg-lime/10 blur-[60px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-40 md:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gradient-to-r from-electric to-hotpink" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-electric">
              Filming Location Guides
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-hotpink to-lime opacity-50" />
          </div>

          {/* Headline */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tight">
            <span className="text-white">You&apos;ve seen</span>
            <br />
            <span className="text-white">the scenes.</span>
            <br />
            <span className="gradient-text-electric-pink">Now go </span>
            <span className="gradient-text-lime-warm">find them.</span>
          </h1>

          <p className="mt-8 font-body text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
            Filming location guides for the cities you&apos;ve been dreaming
            about — built for the trip you&apos;re already planning.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/#guides"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-electric hover:bg-cobalt text-white font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-electric hover:scale-[1.02]"
            >
              <span>Browse the Guides</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Chrome decorative bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome/30 to-transparent" />
      </div>
    </section>
  );
}
