import { useState } from "react";
import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <header
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--navy-deep)] text-white"
    >
      <div className="hero-grid absolute inset-0 opacity-90" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col items-start justify-center gap-10 px-6 pb-14 pt-28 sm:px-8 sm:pt-32 lg:flex-row lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div
            className="absolute -inset-4 rounded-[2.25rem] bg-[color:var(--royal)]/20 blur-2xl"
            aria-hidden
          />
          <div className="relative grid aspect-square w-44 place-items-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[color:var(--royal)]/30 to-[color:var(--navy-deep)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/10 sm:w-56 lg:w-[320px]">
            {imgOk ? (
              <img
                src="/portrait.jpg"
                alt="Gustavo Santos"
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
                loading="eager"
              />
            ) : (
              <span className="font-serif text-6xl tracking-tight text-white/85">
                GS
              </span>
            )}
          </div>
        </motion.div>

        <div className="min-w-0 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-[color:var(--royal)]" />
            Product Manager · Available for internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.02em]"
          >
            {hero.title.split("-")[0]}-
            <span className="italic text-white/95">First</span>
            <br />
            Product Manager
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--royal)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,98,184,0.6)] transition-all hover:bg-white hover:text-[color:var(--navy)] hover:shadow-[0_10px_28px_-8px_rgba(255,255,255,0.35)]"
            >
              {hero.cta}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition-all hover:border-white/50 hover:text-white"
            >
              See the work
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
