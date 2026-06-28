import { useState } from "react";
import { motion } from "motion/react";
import { projectGroups } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [active, setActive] = useState(0);
  const group = projectGroups[active];

  return (
    <section id="work" className="bg-[color:var(--mist)] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--royal)]">
              Selected work
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--navy)]">
              What I've Built
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-[color:var(--muted-foreground)] sm:block">
            Grouped by the team each agent serves. Tap a project to see the
            problem, the build, and the outcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by department"
        >
          {projectGroups.map((g, i) => {
            const selected = i === active;
            return (
              <button
                key={g.department}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  selected
                    ? "border-[color:var(--navy)] bg-[color:var(--navy)] text-white shadow-[0_10px_28px_-14px_rgba(0,46,93,0.6)]"
                    : "border-[color:var(--hairline)] bg-white text-[color:var(--navy)] hover:border-[color:var(--navy)]/40 hover:bg-white",
                ].join(" ")}
              >
                {g.department}
                <span
                  className={[
                    "text-xs tabular-nums",
                    selected
                      ? "text-white/65"
                      : "text-[color:var(--muted-foreground)]",
                  ].join(" ")}
                >
                  {g.projects.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={group.department}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4"
        >
          {group.projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              defaultOpen={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
