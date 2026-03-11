import { Hero } from "@/components/Hero";
import { GuideCard } from "@/components/GuideCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Guides section ── */}
      <section id="guides" className="relative bg-base-dark">
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-10 bg-hotpink" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-hotpink">
              Available Now
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            City{" "}
            <span className="gradient-text-electric-pink">Guides</span>
          </h2>
          <p className="mt-3 font-body text-white/40 max-w-lg leading-relaxed">
            Each guide maps the real locations from your favorite films and
            shows — organized by neighborhood, with directions and context.
          </p>

          {/* Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <GuideCard
              slug="new-orleans"
              city="New Orleans"
              tagline="Filming locations from the French Quarter to the Garden District."
              coverSrc="/images/nola-cover.svg"
              accentColor="electric"
            />
            <GuideCard
              slug="new-york"
              city="New York"
              tagline="From Seinfeld diners to Scorsese streets."
              coverSrc="/images/placeholder-cover.svg"
              accentColor="pink"
              comingSoon
            />
            <GuideCard
              slug="los-angeles"
              city="Los Angeles"
              tagline="Studio lots to street-level scenes."
              coverSrc="/images/placeholder-cover.svg"
              accentColor="lime"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA strip ── */}
      <section className="relative overflow-hidden bg-charcoal border-t border-white/[0.06]">
        {/* Neon accent orbs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-electric/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-hotpink/10 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
            New guides{" "}
            <span className="gradient-text-pink-lime">dropping soon.</span>
          </h2>
          <p className="mt-3 font-body text-white/40">
            Follow along — we&apos;ll let you know when the next city drops.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-l-full border border-white/10 bg-white/5 text-white font-body text-sm focus:outline-none focus:border-electric focus:neon-border-electric transition-all placeholder:text-white/25"
              />
              <button className="px-7 py-3.5 rounded-r-full bg-electric hover:bg-cobalt text-white font-sub font-bold text-sm uppercase tracking-wider transition-all hover:neon-border-electric">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
