import { SectionHeader } from "./Section";

const pins = [
  { x: "22%", y: "38%" },
  { x: "44%", y: "34%" },
  { x: "50%", y: "40%" },
  { x: "56%", y: "52%" },
  { x: "72%", y: "48%" },
  { x: "82%", y: "42%" },
  { x: "30%", y: "62%" },
  { x: "60%", y: "70%" },
];

export function GlobalMap() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Nationwide Coverage"
          title={
            <>
              50 states. One <span className="italic text-gradient-emerald">live channel.</span>
            </>
          }
          description="Track American conferences, hospitality venues, and trade shows happening right now across the U.S. event ecosystem."
        />

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-soft p-6 shadow-soft sm:p-10">
          <div
            className="relative aspect-[2/1] w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--primary) 35%, transparent) 1px, transparent 0)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            }}
          >
            {pins.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: p.x, top: p.y }}
              >
                <span className="block h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-primary/20" />
                <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-primary/40" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              { l: "U.S. cities", v: "180+" },
              { l: "Live now", v: "32" },
              { l: "Venues mapped", v: "1,240" },
              { l: "Annual reach", v: "8M" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white p-5 text-center shadow-soft">
                <p className="font-display text-3xl text-gradient-emerald">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-foreground/55">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
