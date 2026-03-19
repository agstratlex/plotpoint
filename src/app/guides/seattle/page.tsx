import Image from "next/image";
import Link from "next/link";

const FEATURED_LOCATIONS = [
  {
    title: "Pike Place Market",
    films: "Sleepless in Seattle, Singles, Frasier, Grey's Anatomy",
    description:
      "The maze-like market has appeared in more Seattle productions than almost anywhere else. Early mornings give the cleanest recreations — by midday, you're fighting the crowds for every angle.",
    accent: "electric" as const,
  },
  {
    title: "Snoqualmie Falls & Twede's Cafe",
    films: "Twin Peaks, Twin Peaks: Fire Walk With Me",
    description:
      "The falls and the Double R Diner are the two most iconic Twin Peaks stops. The cherry pie and coffee are still on the menu at Twede's — and the interior hasn't changed much since 1990.",
    accent: "pink" as const,
  },
  {
    title: "Stadium High School",
    films: "10 Things I Hate About You",
    description:
      "The castle-like facade in Tacoma remains one of the most recognizable high schools in film history. Exterior photography is easiest from the Stadium Bowl park below.",
    accent: "lime" as const,
  },
  {
    title: "Lake Union Houseboats",
    films: "Sleepless in Seattle",
    description:
      "Sam Baldwin's houseboat defined an entire generation's idea of romantic Seattle real estate. Westlake and Fairview access points give the best views of the floating-home shoreline.",
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

export default function SeattleGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="absolute top-20 right-[15%] w-56 h-56 rounded-full bg-hotpink/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-lime/15 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <span className="h-px w-10 bg-gradient-to-r from-hotpink to-lime" />
                <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-hotpink">
                  Filming Locations Guide
                </span>
              </div>

              <h1 className="font-heading text-6xl md:text-8xl font-extrabold uppercase tracking-tight leading-[0.85]">
                <span className="text-white">Seattle &</span>
                <br />
                <span className="gradient-text-pink-lime">the PNW</span>
              </h1>

              <p className="mt-6 font-body text-lg text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From Pike Place to the Snoqualmie Valley — 145 filming
                locations across the city and the Pacific Northwest, mapped
                and contextualized.
              </p>

              {/* Metadata pills */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { label: "145 Locations", color: "border-hotpink/30 text-hotpink" },
                  { label: "19 Productions", color: "border-lime/30 text-lime" },
                  { label: "Digital PDF", color: "border-electric/30 text-electric" },
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
                <button className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-hotpink hover:bg-magenta text-white font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-pink hover:scale-[1.02]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span>Get the Guide — $14.99</span>
                </button>
                <Link
                  href="#preview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/70 font-sub font-bold text-sm uppercase tracking-wider hover:border-lime hover:text-lime transition-all"
                >
                  Preview
                </Link>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative w-64 md:w-72 lg:w-80 shrink-0">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-hotpink/30 neon-border-pink">
                <Image
                  src="/images/seattle-cover.png"
                  alt="Seattle & PNW Filming Locations Guide cover"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="320px"
                />
                <div className="absolute inset-0 holo-shimmer pointer-events-none" />
              </div>
              <div className="absolute -inset-6 bg-hotpink/8 rounded-3xl blur-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-lime/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome/20 to-transparent" />
      </section>

      {/* ── What's Inside ── */}
      <section id="preview" className="relative bg-base-dark">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-10 bg-lime" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-lime">
              What&apos;s Inside
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Featured{" "}
            <span className="gradient-text-pink-lime">Locations</span>
          </h2>
          <p className="mt-3 font-body text-white/40 max-w-lg">
            A preview of the iconic spots covered in this guide — from the
            Space Needle to the Snoqualmie Valley.
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

      {/* ── Productions covered ── */}
      <section className="relative bg-charcoal border-t border-white/[0.06]">
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-10 bg-electric" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-electric">
              19 Productions
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-8">
            What&apos;s{" "}
            <span className="gradient-text-electric-pink">Covered</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Twin Peaks",
              "Sleepless in Seattle",
              "10 Things I Hate About You",
              "Grey's Anatomy",
              "Frasier",
              "Singles",
              "The Ring",
              "The Killing",
              "Harry and the Hendersons",
              "Say Anything…",
              "Fifty Shades of Grey",
              "Kimi",
              "WarGames",
              "The Hand That Rocks the Cradle",
              "Laggies",
              "The Parallax View",
              "Cinderella Liberty",
              "Scorchy",
              "It Happened at the World's Fair",
            ].map((title) => (
              <span
                key={title}
                className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-sub font-semibold text-white/50"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-hotpink/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9]">
            <span className="text-white">Ready to walk</span>
            <br />
            <span className="gradient-text-neon">the scenes?</span>
          </h2>
          <p className="mt-5 font-body text-white/40 max-w-md mx-auto">
            145 filming locations. Maps, directions, and behind-the-scenes
            context for every stop.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-hotpink hover:bg-magenta text-white font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-pink hover:scale-[1.02]">
            <span>Get the Guide — $14.99</span>
          </button>
        </div>
      </section>
    </>
  );
}
