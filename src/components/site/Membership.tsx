import { SectionHeader } from "./Section";
import hospitality from "@/assets/hospitality.jpg";

export function Membership() {
  return (
    <section id="members" className="relative overflow-hidden py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionHeader
            eyebrow="Membership"
            title={
              <>
                A private channel for the <span className="italic text-gradient-emerald">global event class.</span>
              </>
            }
            description="Personalised feeds, saved conferences, member-only documentaries, AI-curated recommendations, and digital VIP passes — all in one premium dashboard."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Personalised event feed",
              "VIP networking access",
              "Member-only video library",
              "AI-curated recommendations",
              "Digital event passes",
              "Concierge ticketing desk",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-emerald text-primary-foreground">✓</span>
                <span className="text-sm font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-gradient-emerald px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow"
            >
              Become a member
            </a>
            <a href="#" className="rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              Compare plans
            </a>
          </div>
        </div>

        {/* Dashboard mock */}
        <div className="relative">
          <div className="absolute -inset-10 -z-10 bg-gradient-emerald opacity-20 blur-3xl" />
          <div className="rounded-3xl bg-white p-3 shadow-elegant">
            <div className="overflow-hidden rounded-2xl bg-gradient-soft">
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-emerald font-semibold text-primary-foreground">VG</div>
                  <div>
                    <p className="font-medium leading-tight">Welcome back, Victoria</p>
                    <p className="text-xs text-foreground/55">VIP member · Tier Platinum</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-deep">3 passes</span>
              </div>

              <div className="grid grid-cols-3 gap-3 px-5">
                {[
                  { l: "Saved", v: "18" },
                  { l: "Upcoming", v: "5" },
                  { l: "Watched", v: "142" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white p-3 text-center shadow-soft">
                    <p className="font-display text-2xl text-gradient-emerald">{s.v}</p>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/55">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <div className="relative">
                    <img src={hospitality} alt="Curated for you" className="h-44 w-full object-cover" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-[10px] uppercase tracking-wider opacity-80">AI pick for you</p>
                      <p className="font-display text-lg">Mediterranean Hospitality Forum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chip */}
          <div className="float-slow absolute -right-4 top-10 hidden rounded-2xl glass p-4 shadow-soft md:block">
            <p className="text-[10px] uppercase tracking-wider text-foreground/55">Live concierge</p>
            <p className="font-medium">Reserved · Davos Suite 12</p>
          </div>
        </div>
      </div>
    </section>
  );
}
