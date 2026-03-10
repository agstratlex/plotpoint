import { Hero } from "@/components/Hero";
import { GuideCard } from "@/components/GuideCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Guides section */}
      <section id="guides" className="bg-base dark:bg-base-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-hotpink" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.3em] text-hotpink">
              Available Now
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-charcoal dark:text-base">
            City Guides
          </h2>
          <p className="mt-3 font-body text-charcoal/50 dark:text-base/40 max-w-lg">
            Each guide maps the real locations from your favorite films and
            shows — organized by neighborhood, with directions and context.
          </p>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Newsletter / CTA strip */}
      <section className="border-t border-chrome/30 dark:border-chrome/10 bg-base dark:bg-base-dark">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-charcoal dark:text-base">
            New guides dropping soon.
          </h2>
          <p className="mt-3 font-body text-charcoal/50 dark:text-base/40">
            Follow along — we&apos;ll let you know when the next city drops.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-l-full border border-chrome/40 dark:border-chrome/20 bg-base dark:bg-charcoal text-charcoal dark:text-base font-body text-sm focus:outline-none focus:border-electric transition-colors"
              />
              <button className="px-6 py-3 rounded-r-full bg-electric hover:bg-cobalt text-base font-sub font-bold text-sm uppercase tracking-wider transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
