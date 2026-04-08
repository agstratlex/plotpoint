import Image from "next/image";
import Link from "next/link";

const FEATURED_LOCATIONS = [
  {
    title: "The Art Institute of Chicago",
    films: "Ferris Bueller's Day Off, The Dark Knight, When Harry Met Sally…",
    description:
      "The lion statues, the grand staircase, and the galleries inside — Ferris and Cameron's museum montage turned this into one of the most recognizable filming locations in the country.",
    accent: "lime" as const,
  },
  {
    title: "Wrigley Field & Wrigleyville",
    films: "Ferris Bueller's Day Off, A League of Their Own, The Blues Brothers",
    description:
      "The ivy-covered outfield walls and the surrounding neighborhood have appeared in comedies, dramas, and one very famous day of ditching school.",
    accent: "electric" as const,
  },
  {
    title: "Lower Wacker Drive",
    films: "The Dark Knight, The Blues Brothers, Batman Begins",
    description:
      "Chicago's underground double-decker roadway is a favorite for car chases. The Batmobile tore through here, and so did Jake and Elwood — decades apart.",
    accent: "pink" as const,
  },
  {
    title: "Millennium Park & Cloud Gate",
    films: "The Break-Up, Source Code, Jupiter Ascending",
    description:
      "The Bean is the most photographed thing in Chicago for a reason. Its mirrored surface and the surrounding park have become shorthand for 'we're in Chicago now' in dozens of productions.",
    accent: "lime" as const,
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

export default function ChicagoGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden animated-gradient-bg scanlines">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="absolute top-20 right-[15%] w-56 h-56 rounded-full bg-lime/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-electric/15 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <span className="h-px w-10 bg-gradient-to-r from-lime to-electric" />
                <span className="font-sub text-xs font-bold uppercase tracking-[0.35em] text-lime">
                  Filming Locations Guide
                </span>
              </div>

              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.85]">
                <span className="gradient-text-lime-warm">Chicago</span>
              </h1>

              <p className="mt-6 font-body text-lg text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From the Bean to the L tracks — filming locations across
                the Loop, the lakefront, and the neighborhoods that
                Hollywood keeps coming back to.
              </p>

              {/* Metadata pills */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { label: "133 Locations", color: "border-lime/30 text-lime" },
                  { label: "23 Productions", color: "border-electric/30 text-electric" },
                  { label: "Digital PDF", color: "border-hotpink/30 text-hotpink" },
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
                <a href="https://payhip.com/b/EXk5q" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-lime hover:bg-chartreuse text-charcoal font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-lime hover:scale-[1.02]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span>Get the Guide — $10</span>
                </a>
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
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-lime/30 neon-border-lime">
                <Image
                  src="/images/chicago-cover.png"
                  alt="Chicago Filming Locations Guide cover"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="320px"
                />
                <div className="absolute inset-0 holo-shimmer pointer-events-none" />
              </div>
              <div className="absolute -inset-6 bg-lime/8 rounded-3xl blur-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-electric/10 rounded-full blur-2xl -z-10" />
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
            <span className="gradient-text-lime-warm">Locations</span>
          </h2>
          <p className="mt-3 font-body text-white/40 max-w-lg">
            A preview of the iconic spots covered in this guide — from the
            Loop to the lakefront.
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
              23 Films &amp; Series
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-8">
            What&apos;s{" "}
            <span className="gradient-text-lime-warm">Covered</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Batman Begins",
              "Candyman",
              "Chicago Fire",
              "Chicago P.D.",
              "Divergent",
              "Empire",
              "Ferris Bueller's Day Off",
              "High Fidelity",
              "Home Alone",
              "My Best Friend's Wedding",
              "Prison Break",
              "Public Enemies",
              "Risky Business",
              "Road to Perdition",
              "Shameless",
              "The Bear",
              "The Blues Brothers",
              "The Dark Knight",
              "The Exorcist III",
              "The Fugitive",
              "The Untouchables",
              "Transformers: Dark of the Moon",
              "Widows",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lime/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9]">
            <span className="text-white">Ready to walk</span>
            <br />
            <span className="gradient-text-neon">the scenes?</span>
          </h2>
          <p className="mt-5 font-body text-white/40 max-w-md mx-auto">
            133 filming locations. Maps, directions, and behind-the-scenes
            context for every stop.
          </p>
          <a href="https://payhip.com/b/EXk5q" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-lime hover:bg-chartreuse text-charcoal font-sub font-bold text-sm uppercase tracking-wider transition-all neon-border-lime hover:scale-[1.02]">
            <span>Get the Guide — $10</span>
          </a>
        </div>
      </section>
    </>
  );
}
