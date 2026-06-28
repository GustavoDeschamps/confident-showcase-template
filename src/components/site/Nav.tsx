import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[color:var(--navy-deep)]/85 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl leading-none tracking-tight text-white">
            Gustavo Santos
          </span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.18em] text-white/50 sm:inline">
            AI-First PM
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-6">
          <a
            href="#work"
            className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline"
          >
            Work
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-[color:var(--navy)] transition-all hover:bg-[color:var(--royal)] hover:text-white"
          >
            Get in touch
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
