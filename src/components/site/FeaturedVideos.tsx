import { SectionHeader } from "./Section";
import expo from "@/assets/expo.jpg";
import hospitality from "@/assets/hospitality.jpg";
import stage from "@/assets/stage.jpg";
import networking from "@/assets/networking.jpg";
import interview from "@/assets/interview.jpg";

const videos = [
  { img: stage, cat: "Conference", title: "Inside the CES 2026 Las Vegas Keynote", duration: "12:48" },
  { img: hospitality, cat: "Hospitality", title: "The Plaza Unveils its Manhattan Estate", duration: "08:22" },
  { img: networking, cat: "Networking", title: "The Art of Executive Connection", duration: "06:10" },
  { img: expo, cat: "Trade Show", title: "NRF New York — Floor Highlights", duration: "14:37" },
  { img: interview, cat: "Interview", title: "Hilton CEO on the Next American Decade", duration: "22:05" },
];

export function FeaturedVideos() {
  return (
    <section id="webcasts" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Stories"
            title={
              <>
                Cinematic event journalism,<br />
                <span className="italic text-gradient-emerald">on demand.</span>
              </>
            }
          />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep hover:gap-3 transition-all"
          >
            Browse the library →
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Hero video */}
          <article className="group relative col-span-12 overflow-hidden rounded-3xl shadow-elegant lg:col-span-7 lg:row-span-2">
            <img
              src={videos[0].img}
              alt={videos[0].title}
              className="h-full max-h-[640px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {videos[0].cat} · {videos[0].duration}
              </span>
              <h3 className="mt-4 font-display text-3xl font-light text-white sm:text-4xl">
                {videos[0].title}
              </h3>
              <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:bg-white">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-emerald text-primary-foreground">▶</span>
                Watch Feature
              </button>
            </div>
          </article>

          {videos.slice(1).map((v) => (
            <article
              key={v.title}
              className="group relative col-span-12 overflow-hidden rounded-3xl shadow-soft sm:col-span-6 lg:col-span-5 lg:[&:nth-child(n+4)]:hidden xl:[&:nth-child(n+4)]:block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full glass-dark px-2.5 py-1 text-[11px] font-semibold text-white">
                  {v.duration}
                </span>
                <button
                  aria-label="Play"
                  className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full glass text-primary-deep opacity-0 transition-all duration-500 group-hover:opacity-100 shadow-glow"
                >
                  <span className="ml-0.5">▶</span>
                </button>
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{v.cat}</p>
                <h3 className="mt-1 font-display text-xl font-medium leading-snug">{v.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
