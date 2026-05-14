import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background/80">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, color-mix(in oklab, var(--primary) 50%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-block">
              <img src={logo} alt="Special Events Channel" className="h-14 w-auto brightness-0 invert" />
            </div>
            <h3 className="mt-8 font-display text-3xl font-light text-background sm:text-4xl">
              Stay in the room. <span className="italic text-primary">Subscribe.</span>
            </h3>
            <p className="mt-3 max-w-md text-background/60">
              Weekly executive briefings, curated events, and behind-the-scenes invites — straight to your inbox.
            </p>
            <form className="mt-6 flex max-w-md flex-col gap-2 rounded-full bg-white/10 p-1.5 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="executive@email.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm text-background placeholder:text-background/50 outline-none"
              />
              <button className="rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow">
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {[
              { h: "Channel", l: ["Events", "Webcasts", "Interviews", "Documentaries"] },
              { h: "Industry", l: ["Hospitality", "Conferences", "Trade Shows", "Galas"] },
              { h: "Business", l: ["Sponsorship", "Media Kit", "Advertising", "Partnerships"] },
            ].map((c) => (
              <div key={c.h}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{c.h}</p>
                <ul className="mt-5 space-y-3 text-sm text-background/70">
                  {c.l.map((x) => (
                    <li key={x}><a href="#" className="hover:text-background transition-colors">{x}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
              <ul className="mt-5 space-y-3 text-sm text-background/80">
                <li>
                  <a href="mailto:info@renaissanceevents.com" className="hover:text-background transition-colors">
                    info@renaissanceevents.com
                  </a>
                </li>
                <li>
                  <a href="mailto:info@specialeventschannel.com" className="hover:text-background transition-colors">
                    info@specialeventschannel.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-background/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Special Events Channel. A premium global media platform.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
