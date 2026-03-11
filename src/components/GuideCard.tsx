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
    border: "border-electric/30",
    hoverBorder: "group-hover:border-electric",
    badge: "bg-electric text-white",
    glowClass: "group-hover:neon-border-electric",
    tagColor: "text-electric",
  },
  pink: {
    border: "border-hotpink/30",
    hoverBorder: "group-hover:border-hotpink",
    badge: "bg-hotpink text-white",
    glowClass: "group-hover:neon-border-pink",
    tagColor: "text-hotpink",
  },
  lime: {
    border: "border-lime/30",
    hoverBorder: "group-hover:border-lime",
    badge: "bg-lime text-charcoal",
    glowClass: "group-hover:neon-border-lime",
    tagColor: "text-lime",
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
  const a = accentMap[accentColor];

  const card = (
    <div
      className={`group relative rounded-xl border ${a.border} ${a.hoverBorder} ${a.glowClass} bg-charcoal overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Cover image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={coverSrc}
          alt={`${city} Filming Locations Guide cover`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Holographic shimmer overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 holo-shimmer pointer-events-none" />

        {comingSoon && (
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center">
            <span className="font-sub text-sm font-bold uppercase tracking-[0.25em] text-white/60 border border-white/10 px-4 py-1.5 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className={`font-heading text-xl font-bold text-white uppercase tracking-tight`}>
          {city}
        </h3>
        <p className="mt-1.5 font-body text-sm text-white/40 leading-relaxed">
          {tagline}
        </p>
        {!comingSoon && (
          <span
            className={`inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 rounded-full text-xs font-sub font-bold uppercase tracking-wider ${a.badge} transition-transform group-hover:scale-105`}
          >
            View Guide
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (comingSoon) return card;

  return <Link href={`/guides/${slug}`}>{card}</Link>;
}
