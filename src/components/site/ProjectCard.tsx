import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Project } from "@/lib/content";

type Props = { project: Project; index: number; defaultOpen?: boolean };

export function ProjectCard({ project, index, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const summary = project.blocks[0]?.body ?? "";
  const result = project.blocks.find((b) => b.label === "Result")?.body ?? "";
  const resultFirstSentence = result.split(/(?<=\.)\s/)[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white transition-all hover:border-[color:var(--navy)]/30 hover:shadow-[0_18px_40px_-24px_rgba(0,46,93,0.25)]"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-6 p-6 text-left sm:p-8"
      >
        <div className="hidden font-serif text-2xl text-[color:var(--navy)]/40 tabular-nums sm:block">
          0{index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl leading-tight tracking-tight text-[color:var(--navy)] sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">
            {summary}
          </p>
          {resultFirstSentence && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--mist)] px-3 py-1 text-xs font-medium text-[color:var(--navy)]">
              <span className="size-1.5 rounded-full bg-[color:var(--royal)]" />
              {resultFirstSentence}
            </div>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] text-[color:var(--navy)] group-hover:border-[color:var(--navy)]/40"
          aria-hidden
        >
          <Plus className="size-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[color:var(--hairline)] px-6 pb-8 pt-6 sm:px-8 sm:pl-[5.25rem]">
              <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-[160px_1fr]">
                {project.blocks.map((block) => (
                  <div key={block.label} className="contents">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--royal)] sm:pt-1">
                      {block.label}
                    </dt>
                    <dd className="text-[1rem] leading-[1.75] text-[color:var(--ink)]">
                      {block.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
