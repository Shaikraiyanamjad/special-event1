import heroImg from "@/assets/hero.jpg";

const stats = [
  { v: "8K+", l: "U.S. events covered" },
  { v: "320", l: "Live webcasts / yr" },
  { v: "50", l: "States reached" },
  { v: "850K", l: "Executive members" },
];

const sponsors = [
  "Marriott",
  "Forbes",
  "Bloomberg",
  "NBC",
  "Hilton",
  "TED",
  "Hyatt",
  "Reuters",
  "CNBC",
  "Wynn",
];

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Full-screen video background */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImg}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-in-a-conference-room-4837-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-a-business-meeting-9166/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-32 pb-16 sm:px-6 sm:pt-36 md:pt-40 lg:px-10 lg:pt-44">
          <div className="max-w-4xl animate-fade-up [text-shadow:0_4px_24px_rgba(0,0,0,0.55)]">
            <h1 className="font-display text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Where America&rsquo;s Events &amp;{" "}
              <span className="italic text-primary-soft">
                Business Leaders
              </span>{" "}
              Connect.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
              Premier U.S. conferences, executive insights, sponsorship
              opportunities, and hospitality events — from New York and Miami
              to Las Vegas and Los Angeles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#events"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow sm:px-7 sm:py-3.5"
              >
                Explore Events

                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>

              <a
                href="#webcasts"
                className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:text-primary-soft sm:px-7 sm:py-3.5"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  ▶
                </span>

                Watch Webcasts
              </a>

              <a
                href="#sponsors"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:px-7 sm:py-3.5"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <dt className="text-xs uppercase tracking-wider text-foreground/60">
                  {s.l}
                </dt>

                <dd className="mt-1 font-display text-3xl font-medium text-gradient-emerald">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Sponsor Marquee */}
        <div className="border-y border-border/60 bg-white/60 backdrop-blur-md">
          <div className="overflow-hidden py-6">
            <div className="marquee flex w-max gap-16 px-6">
              {[...sponsors, ...sponsors].map((s, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-2xl font-light tracking-wide text-foreground/40 transition-colors hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}