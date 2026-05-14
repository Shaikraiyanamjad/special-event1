import { SectionHeader } from "./Section";
import exec1 from "@/assets/exec1.jpg";
import exec2 from "@/assets/exec2.jpg";
import interview from "@/assets/interview.jpg";

export function Interviews() {
  return (
    <section id="interviews" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Executive Corner"
          title={
            <>
              Conversations with the leaders <span className="italic text-gradient-emerald">shaping tomorrow.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Featured split-screen interview */}
          <article className="lg:col-span-7">
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl shadow-elegant">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={exec1} alt="Helena Vargas" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={exec2} alt="Daniel Okafor" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Cover Story · Issue 47</p>
                <h3 className="mt-2 font-display text-3xl font-light leading-snug sm:text-4xl">
                  &ldquo;American hospitality isn&rsquo;t a service —<br className="hidden sm:block" />
                  it&rsquo;s a stage for human moments.&rdquo;
                </h3>
                <p className="mt-3 text-foreground/65">
                  Helena Vargas (The Plaza, NYC) and Daniel Okafor (Marriott) on the new economics of luxury U.S. events.
                </p>
              </div>
              <button
                aria-label="Play"
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-emerald text-primary-foreground shadow-glow transition-transform hover:scale-110"
              >
                ▶
              </button>
            </div>
          </article>

          {/* Side stories */}
          <div className="space-y-8 lg:col-span-5">
            {[
              { img: interview, cat: "Leadership", title: "What boardrooms get wrong about events", read: "8 min read" },
              { img: exec1, cat: "Industry Insight", title: "The quiet rise of bleisure travel", read: "6 min read" },
              { img: exec2, cat: "Commentary", title: "Why sponsorship needs a creative reboot", read: "5 min read" },
            ].map((a) => (
              <a
                key={a.title}
                href="#"
                className="group flex gap-5 rounded-2xl p-3 transition-colors hover:bg-primary-soft/40"
              >
                <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-2xl">
                  <img src={a.img} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{a.cat}</p>
                  <h4 className="mt-1 font-display text-xl font-medium leading-snug group-hover:text-primary-deep">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-xs text-foreground/55">{a.read}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
