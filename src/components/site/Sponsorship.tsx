import { SectionHeader } from "./Section";

const tiers = [
  {
    name: "Channel Partner",
    price: "Bespoke",
    perks: ["Branded broadcast segments", "Dedicated executive interviews", "Premium ad placements", "Global media kit"],
    featured: false,
  },
  {
    name: "Signature Sponsor",
    price: "Premier",
    perks: ["Title sponsor of flagship events", "Co-produced documentary series", "VIP networking lounges", "Year-round campaign integration"],
    featured: true,
  },
  {
    name: "Showcase",
    price: "Curated",
    perks: ["Sponsor spotlight video", "Featured event placements", "Targeted reach in industry verticals", "Performance reporting"],
    featured: false,
  },
];

const logos = ["Marriott", "Forbes", "Bloomberg", "NBC", "Hilton", "TED", "Hyatt", "Reuters", "CNBC", "Wynn", "MGM", "Delta"];

export function Sponsorship() {
  return (
    <section id="sponsors" className="relative bg-gradient-soft py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Sponsorship & Partnerships"
          title={
            <>
              Brands that move <span className="italic text-gradient-emerald">with the world’s leaders.</span>
            </>
          }
          description="From signature sponsorships to integrated campaigns — partner with the channel that defines premium event media."
        />

        {/* Logo wall */}
        <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="flex h-24 items-center justify-center whitespace-nowrap bg-white px-2 text-center font-display text-base font-light tracking-wide text-foreground/40 transition-all hover:bg-primary-soft hover:text-primary-deep sm:text-lg"
            >
              {l}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                t.featured
                  ? "bg-gradient-emerald text-primary-foreground shadow-elegant"
                  : "bg-white shadow-soft"
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  Most chosen
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.featured ? "opacity-80" : "text-primary"}`}>
                {t.price}
              </p>
              <h3 className="mt-3 font-display text-3xl font-light">{t.name}</h3>
              <ul className={`mt-6 space-y-3 text-sm ${t.featured ? "text-primary-foreground/90" : "text-foreground/75"}`}>
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${t.featured ? "bg-white" : "bg-primary"}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                  t.featured
                    ? "bg-white text-primary-deep hover:shadow-glow"
                    : "bg-foreground text-background hover:bg-primary-deep"
                }`}
              >
                Request a media kit →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
