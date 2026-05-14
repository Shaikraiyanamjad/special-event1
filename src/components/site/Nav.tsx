import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  "Events",
  "Webcasts",
  "Interviews",
  "Hospitality",
  "Sponsors",
  "Members",
];

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
        scrolled ? "py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-3 py-2 sm:px-4 transition-all duration-500 ${
            scrolled
              ? "border border-neutral-200 bg-white shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Special Events Channel"
              className={`w-auto transition-all duration-500 ${
                scrolled
                  ? "h-10 sm:h-12"
                  : "h-12 sm:h-16 brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`relative whitespace-nowrap text-sm font-medium transition-colors hover:text-primary
                after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary
                after:transition-all hover:after:w-full ${
                  scrolled
                    ? "text-foreground/80"
                    : "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]"
                }`}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#members"
              className={`hidden md:inline-flex rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white"
              }`}
            >
              Sign in
            </a>

            <a
              href="#events"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-emerald px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <span className="hidden xs:inline">
                Join the Channel
              </span>

              <span className="xs:hidden">
                Join
              </span>

              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}