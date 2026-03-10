import Image from "next/image";
import Link from "next/link";

const FEATURED_LOCATIONS = [
  {
    title: "The French Quarter",
    films: "Interview with the Vampire, The Curious Case of Benjamin Button, NCIS: New Orleans",
    description:
      "The most filmed neighborhood in the city. Wrought-iron balconies and gas-lit streets that have doubled for 18th-century Paris and modern-day crime dramas alike.",
  },
  {
    title: "Garden District",
    films: "Dracula 2000, The Skeleton Key, 12 Years a Slave",
    description:
      "Antebellum mansions and live-oak canopies. The contrast between beauty and history makes it irresistible to period-film directors.",
  },
  {
    title: "St. Louis Cemetery No. 1",
    films: "Easy Rider, Double Jeopardy, Live and Let Die",
    description:
      "Above-ground tombs dating back centuries. The oldest cemetery in the city and one of the most iconic filming locations in Louisiana.",
  },
  {
    title: "Pontchartrain Hotel",
    films: "Bad Lieutenant: Port of Call New Orleans, Glory Road",
    description:
      "Old-world glamour on St. Charles Avenue. The rooftop bar alone has appeared in more films than most entire neighborhoods.",
  },
];

export default function NewOrleansGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Neon gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-hotpink/20 pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                <span className="h-px w-8 bg-electric" />
                <span className="font-sub text-xs font-bold uppercase tracking-[0.3em] text-electric">
                  Filming Locations Guide
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-base leading-[0.9]">
                New
                <br />
                <span className="text-electric glow-electric">Orleans</span>
              </h1>

              <p className="mt-6 font-body text-base/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From the iron lace of the French Quarter to the moss-draped
                oaks of the Garden District — every scene, mapped and
                contextualized.
              </p>

              {/* Metadata pills */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                {["50+ Locations", "8 Neighborhoods", "Digital PDF"].map(
                  (label) => (
                    <span
                      key={label}
                      className="px-3 py-1 rounded-full border border-base/20 text-xs font-sub font-semibold uppercase tracking-wider text-base/60"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>

              {/* Buy CTA */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-electric hover:bg-cobalt text-base font-sub font-bold text-sm uppercase tracking-wider transition-colors neon-border-electric">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  <span>Get the Guide — $14.99</span>
                </button>
                <Link
                  href="#preview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-base/20 text-base font-sub font-bold text-sm uppercase tracking-wider hover:border-electric hover:text-electric transition-colors"
                >
                  Preview
                </Link>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative w-64 md:w-72 lg:w-80 shrink-0">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden neon-border-electric">
                <Image
                  src="/images/nola-cover.svg"
                  alt="New Orleans Filming Locations Guide cover"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="320px"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-electric/10 rounded-2xl blur-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hotpink/15 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-base dark:bg-base-dark border-t border-chrome/20 dark:border-chrome/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-hotpink" />
            <span className="font-sub text-xs font-bold uppercase tracking-[0.3em] text-hotpink">
              What&apos;s Inside
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-charcoal dark:text-base">
            Featured Locations
          </h2>
          <p className="mt-3 font-body text-charcoal/50 dark:text-base/40 max-w-lg">
            A preview of the neighborhoods and iconic spots covered in this
            guide.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_LOCATIONS.map((loc) => (
              <div
                key={loc.title}
                className="p-6 rounded-lg border border-chrome/30 dark:border-chrome/10 bg-base dark:bg-charcoal/50 hover:border-electric/50 transition-colors"
              >
                <h3 className="font-heading text-lg font-bold text-charcoal dark:text-base uppercase tracking-tight">
                  {loc.title}
                </h3>
                <p className="mt-1 font-sub text-xs font-semibold uppercase tracking-wider text-electric">
                  {loc.films}
                </p>
                <p className="mt-3 font-body text-sm text-charcoal/60 dark:text-base/50 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="preview"
        className="border-t border-chrome/20 dark:border-chrome/10 bg-charcoal"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-base leading-tight">
            Ready to walk
            <br />
            <span className="text-electric glow-electric">the scenes?</span>
          </h2>
          <p className="mt-4 font-body text-base/50 max-w-md mx-auto">
            50+ filming locations. Maps, directions, and behind-the-scenes
            context for every stop.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-electric hover:bg-cobalt text-base font-sub font-bold text-sm uppercase tracking-wider transition-colors neon-border-electric">
            <span>Get the Guide — $14.99</span>
          </button>
        </div>
      </section>
    </>
  );
}
