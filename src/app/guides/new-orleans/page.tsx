import Image from "next/image";
import Link from "next/link";

const FEATURED_LOCATIONS = [
  {
    title: "The French Quarter",
    films: "Interview with the Vampire, The Curious Case of Benjamin Button, NCIS: New Orleans",
    description:
      "The most filmed neighborhood in the city. Wrought-iron balconies and gas-lit streets that have doubled for 18th-century Paris and modern-day crime dramas alike.",
    accent: "electric" as const,
  },
  {
    title: "Garden District",
    films: "Dracula 2000, The Skeleton Key, 12 Years a Slave",
    description:
      "Antebellum mansions and live-oak canopies. The contrast between beauty and history makes it irresistible to period-film directors.",
    accent: "pink" as const,
  },
  {
    title: "St. Louis Cemetery No. 1",
    films: "Easy Rider, Double Jeopardy, Live and Let Die",
    description:
      "Above-ground tombs dating back centuries. The oldest cemetery in the city and one of the most iconic filming locations in Louisiana.",
    accent: "lime" as const,
  },
  {
    title: "Pontchartrain Hotel",
    films: "Bad Lieutenant: Port of Call New Orleans, Glory Road",
    description:
      "Old-world glamour on St. Charles Avenue. The rooftop bar alone has appeared in more films than most entire neighborhoods.",
    accent: "electric" as const,
  },
];

const accentBorder = {
  electric: "border-electric/20 hover:border-electric hover:neon-border-electric",
  pink: "border-hotpink/20 hover:border-hotpink hover:neon-border-pink",
  lime: "border-lime/20 hover:border-lime hover:neon-border-lime",
};

const accentText = {
  electric: "text-electric",
  pink: "text-hotpink",
  lime: "text-lime",
};

export default function NewOrleansGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* Neon orbs */}
        <div className="absolute top-20 right-[15%] w-56 h-56 rounded-full bg-electric/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-hotpink/15 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <span className="h-px w-10 bg-gradient-to-r from-electric to-hotpink" />
                <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-electric">
                  Filming Locations Guide
                </span>
              </div>

              <h1 className="font-heading text-6xl md:text-8xl font-extrabold uppercase tracking-tight leading-[0.85]">
                <span className="text-white">New</span>
                <br />
                <span className="gradient-text-electric-pink">Orleans</span>
              </h1>

              <p className="mt-6 font-body text-lg text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From the iron lace of the French Quarter to the moss-draped
                oaks of the Garden District — every scene, mapped and
                contextualized.
              </p>

              {/* Metadata pills */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { label: "50+ Locations", color: "border-electric/30 text-electric" },
                  { label: "8 Neighborhoods", color: "border-hotpink/30 text-hotpink" },
                  { label: "Digital PDF", color: "border-lime/30 text-lime" },
                ].map(({ label, color }) => (
                  <span
                    key={label}
                    className={`px-3.5 py-1 rounded-full border text-xs font-sub font-semibold uppercase tracking-wider ${color}`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Buy CTA */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-electric hover:bg-cobalt text-white font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-electric hover:scale-[1.02]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span>Get the Guide — $14.99</span>
                </button>
                <Link
                  href="#preview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/70 font-sub font-bold text-sm uppercase tracking-wider hover:border-hotpink hover:text-hotpink transition-all"
                >
                  Preview
                </Link>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative w-64 md:w-72 lg:w-80 shrink-0">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-electric/30 neon-border-electric">
                <Image
                  src="/images/nola-cover.png"
                  alt="New Orleans Filming Locations Guide cover"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="320px"
                />
                <div className="absolute inset-0 holo-shimmer pointer-events-none" />
              </div>
              {/* Neon glow behind */}
              <div className="absolute -inset-6 bg-electric/8 rounded-3xl blur-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-hotpink/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Chrome line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome/20 to-transparent" />
      </section>

      {/* ── What's Inside ── */}
      <section id="preview" className="relative bg-base-dark">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-10 bg-hotpink" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-hotpink">
              What&apos;s Inside
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Featured{" "}
            <span className="gradient-text-pink-lime">Locations</span>
          </h2>
          <p className="mt-3 font-body text-white/40 max-w-lg">
            A preview of the neighborhoods and iconic spots covered in this
            guide.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_LOCATIONS.map((loc) => (
              <div
                key={loc.title}
                className={`p-6 rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${accentBorder[loc.accent]}`}
              >
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-tight">
                  {loc.title}
                </h3>
                <p className={`mt-1.5 font-sub text-xs font-semibold uppercase tracking-wider ${accentText[loc.accent]}`}>
                  {loc.films}
                </p>
                <p className="mt-3 font-body text-sm text-white/40 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-electric/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9]">
            <span className="text-white">Ready to walk</span>
            <br />
            <span className="gradient-text-neon">the scenes?</span>
          </h2>
          <p className="mt-5 font-body text-white/40 max-w-md mx-auto">
            50+ filming locations. Maps, directions, and behind-the-scenes
            context for every stop.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-electric hover:bg-cobalt text-white font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-electric hover:scale-[1.02]">
            <span>Get the Guide — $14.99</span>
          </button>
        </div>
      </section>
    </>
  );
}
