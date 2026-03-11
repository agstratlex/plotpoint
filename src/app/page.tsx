import { Hero } from "@/components/Hero";
import { GuideCard } from "@/components/GuideCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Guides section (AVAILABLE NOW — kept the same) ── */}
      <section id="guides" className="relative bg-base-dark">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
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

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <GuideCard
              slug="new-orleans"
              city="New Orleans"
              tagline="Filming locations from the French Quarter to the Garden District."
              coverSrc="/images/nola-cover.png"
              accentColor="electric"
            />
            <GuideCard
              slug="seattle"
              city="Seattle"
              tagline="From Sleepless houseboats to Twin Peaks diners."
              coverSrc="/images/placeholder-cover.svg"
              accentColor="pink"
              comingSoon
            />
            <GuideCard
              slug="chicago"
              city="Chicago"
              tagline="Ferris Bueller's downtown to The Dark Knight's skyline."
              coverSrc="/images/placeholder-cover.svg"
              accentColor="lime"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* ── Coming Soon section ── */}
      <section className="relative overflow-hidden bg-charcoal border-t border-white/[0.06]">
        <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-electric/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-hotpink/10 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            More Cities.{" "}
            <span className="gradient-text-pink-lime">Coming.</span>
          </h2>
          <p className="mt-4 font-body text-white/40 max-w-md mx-auto leading-relaxed">
            New guides drop regularly. If your city isn&apos;t here yet,
            it&apos;s probably next.
          </p>
        </div>
      </section>

      {/* ── Email CTA / Sign-up ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-electric/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9]">
            <span className="text-white">Ready to walk</span>
            <br />
            <span className="gradient-text-neon">the scenes?</span>
          </h2>
          <p className="mt-5 font-body text-white/40 max-w-sm mx-auto leading-relaxed">
            Be the first to know when new guides drop.
            <br />
            No noise. Just a note when something new is ready.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-l-full border border-white/10 bg-white/5 text-white font-body text-sm focus:outline-none focus:border-electric focus:neon-border-electric transition-all placeholder:text-white/25"
              />
              <button className="px-7 py-3.5 rounded-r-full bg-electric hover:bg-cobalt text-white font-sub font-bold text-sm uppercase tracking-wider transition-all hover:neon-border-electric">
                I&apos;m In
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
