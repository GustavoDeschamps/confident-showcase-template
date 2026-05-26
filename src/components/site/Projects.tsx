import { motion } from "motion/react";
import { projects } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
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
            Tap a project to see the problem, the build, and the outcome.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
