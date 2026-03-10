import Image from "next/image";
import Link from "next/link";

interface GuideCardProps {
  slug: string;
  city: string;
  tagline: string;
  coverSrc: string;
  accentColor: "electric" | "pink" | "lime";
  comingSoon?: boolean;
}

const accentMap = {
  electric: {
    border: "border-electric/40 hover:border-electric",
    badge: "bg-electric text-base",
    glow: "group-hover:shadow-[0_0_24px_#0066FF33]",
  },
  pink: {
    border: "border-hotpink/40 hover:border-hotpink",
    badge: "bg-hotpink text-base",
    glow: "group-hover:shadow-[0_0_24px_#FF2E9F33]",
  },
  lime: {
    border: "border-lime/40 hover:border-lime",
    badge: "bg-lime text-charcoal",
    glow: "group-hover:shadow-[0_0_24px_#A8FF0033]",
  },
};

export function GuideCard({
  slug,
  city,
  tagline,
  coverSrc,
  accentColor,
  comingSoon,
}: GuideCardProps) {
  const accent = accentMap[accentColor];

  const card = (
    <div
      className={`group relative rounded-lg border ${accent.border} ${accent.glow} bg-base dark:bg-base-dark overflow-hidden transition-all duration-300`}
    >
      {/* Cover image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={coverSrc}
          alt={`${city} Filming Locations Guide cover`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {comingSoon && (
          <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
            <span className="font-sub text-sm font-bold uppercase tracking-widest text-base/80">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-charcoal dark:text-base uppercase tracking-tight">
          {city}
        </h3>
        <p className="mt-1 font-body text-sm text-charcoal/60 dark:text-base/50">
          {tagline}
        </p>
        {!comingSoon && (
          <span
            className={`inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-sub font-bold uppercase tracking-wider ${accent.badge}`}
          >
            View Guide →
          </span>
        )}
      </div>
    </div>
  );

  if (comingSoon) return card;

  return <Link href={`/guides/${slug}`}>{card}</Link>;
}
