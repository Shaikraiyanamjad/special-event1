import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = ["Events", "Webcasts", "Interviews", "Hospitality", "Sponsors", "Members"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Special Events Channel"
              className={`w-auto transition-all duration-500 ${
                scrolled
                  ? "h-12"
                  : "h-16 brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
              }`}
            />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`relative text-sm font-medium transition-colors hover:text-primary
                after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary
                after:transition-all hover:after:w-full ${
                  scrolled ? "text-foreground/80" : "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]"
                }`}
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#members"
              className={`hidden rounded-full px-4 py-2 text-sm font-medium hover:text-primary md:inline-block ${
                scrolled ? "text-foreground/80" : "text-white"
              }`}
            >
              Sign in
            </a>
            <a
              href="#events"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              Join the Channel
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
