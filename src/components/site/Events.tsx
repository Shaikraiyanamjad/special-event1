import { SectionHeader } from "./Section";
import expo from "@/assets/expo.jpg";
import hospitality from "@/assets/hospitality.jpg";
import stage from "@/assets/stage.jpg";
import networking from "@/assets/networking.jpg";

const events = [
  { img: stage, date: "MAR 12–14", title: "Aspen Ideas Leadership Forum", tag: "Conference", countdown: "12d 04h" },
  { img: hospitality, date: "APR 02–05", title: "American Luxury Hospitality Summit", tag: "Hospitality", countdown: "33d 11h" },
  { img: expo, date: "MAY 18–22", title: "Las Vegas Trade Expo", tag: "Trade Show", countdown: "78d 20h" },
  { img: networking, date: "JUN 09", title: "Forbes 400 Executive Gala", tag: "Gala", countdown: "100d 03h" },
];

export function Events() {
  return (
    <section id="events" className="relative py-16 lg:py-20">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-96"
        style={{
          background:
            "radial-gradient(50% 80% at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Events"
            title={
              <>
                The world’s calendar of <span className="italic text-gradient-emerald">flagship gatherings.</span>
              </>
            }
          />
          <div className="hidden gap-2 md:flex">
            {["All", "Conference", "Hospitality", "Gala", "Expo"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  i === 0
                    ? "border-primary bg-gradient-emerald text-primary-foreground"
                    : "border-border bg-white text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 rounded-2xl glass px-3 py-2 text-center shadow-soft">
                  <p className="font-display text-xs font-semibold tracking-wider text-primary-deep">{e.date}</p>
                </div>
                <span className="absolute right-4 top-4 rounded-full glass-dark px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {e.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                  <h3 className="font-display text-xl font-medium leading-snug">{e.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 p-5">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-foreground/55">Starts in</p>
                  <p className="font-display text-lg tabular-nums text-gradient-emerald">{e.countdown}</p>
                </div>
                <button className="rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-primary-deep">
                  Register →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
