import { SectionHeader } from "./Section";
import stage from "@/assets/stage.jpg";

const upcoming = [
  { time: "Today · 18:00 EST", title: "The U.S. Hospitality Reset 2026", speaker: "Anthony Capuano, CEO Marriott", in: "02:14:09" },
  { time: "Tomorrow · 10:00 EST", title: "Sponsorship in the AI Era", speaker: "Marcus Whitfield, Forbes", in: "1d 10h" },
  { time: "Fri · 14:00 PST", title: "Inside SXSW: Behind the Curtain", speaker: "Jessica Reynolds, Austin", in: "3d 02h" },
  { time: "Mon · 09:00 CST", title: "American Trade Outlook 2026", speaker: "Dr. Robert Hayes", in: "6d 17h" },
];

export function LiveWebcasts() {
  return (
    <section className="relative bg-gradient-soft py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Live & Upcoming"
          title={
            <>
              Webcasts that put you <span className="italic text-gradient-emerald">in the room.</span>
            </>
          }
          description="Tune into executive panels, keynote livestreams and exclusive backstage broadcasts — the way modern leaders learn."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Live player */}
          <div className="lg:col-span-3">
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={stage} alt="Live broadcast" className="aspect-video w-full object-cover" loading="lazy" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live · 8.2K watching
              </span>
              <button
                aria-label="Play"
                className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full glass text-2xl text-primary-deep shadow-glow transition-transform hover:scale-110"
              >
                <span className="ml-1">▶</span>
              </button>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
                <p className="text-xs uppercase tracking-wider opacity-80">Now broadcasting</p>
                <h3 className="mt-1 font-display text-2xl font-light sm:text-3xl">
                  The Future of Global Hospitality — A CEO Roundtable
                </h3>
              </div>
            </div>
          </div>

          {/* Upcoming list */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-3 shadow-soft">
              <div className="flex items-center justify-between px-4 py-3">
                <h4 className="font-display text-lg font-medium">Upcoming schedule</h4>
                <a href="#" className="text-xs font-semibold text-primary-deep hover:underline">
                  View all
                </a>
              </div>
              <ul className="space-y-1">
                {upcoming.map((u) => (
                  <li
                    key={u.title}
                    className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-primary-soft/40"
                  >
                    <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-emerald text-primary-foreground shadow-soft">
                      <span className="font-display text-sm">●</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-deep">{u.time}</p>
                      <p className="mt-0.5 font-medium leading-snug">{u.title}</p>
                      <p className="text-sm text-foreground/60">{u.speaker}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold tabular-nums text-foreground/70">
                      {u.in}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-2 w-full rounded-2xl bg-gradient-emerald py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow">
                Register for upcoming webcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
