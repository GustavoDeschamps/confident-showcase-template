import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function ProofStrip() {
  return (
    <section className="border-b border-[color:var(--hairline)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="mb-10 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
          Outcomes shipped
        </p>
        <ul className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 lg:divide-x lg:divide-[color:var(--hairline)] lg:gap-x-0">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className="px-2 text-center lg:px-6"
            >
              <div className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none tracking-tight tabular-nums text-[color:var(--navy)]">
                {s.value}
              </div>
              <div className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                {s.label}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
