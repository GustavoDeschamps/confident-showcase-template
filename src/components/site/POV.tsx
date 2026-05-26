import { motion } from "motion/react";
import { pov } from "@/lib/content";

export function POV() {
  return (
    <section id="pov" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--royal)]">
            — POV
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--navy)]">
            How I Think
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative max-w-2xl"
        >
          <div className="absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--royal)] via-[color:var(--hairline)] to-transparent lg:block" />
          <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.2] tracking-tight text-[color:var(--navy)]">
            “{pov.opening}”
          </p>
          <p className="mt-8 text-[1.125rem] leading-[1.8] text-[color:var(--ink)]">
            {pov.body}
          </p>
          <p className="mt-10 border-t border-[color:var(--hairline)] pt-8 font-serif text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug text-[color:var(--navy)]">
            {pov.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
