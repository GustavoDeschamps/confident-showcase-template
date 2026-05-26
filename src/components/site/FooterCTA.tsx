import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { contact } from "@/lib/content";

function CopyRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={copy}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-5 text-left transition-all hover:border-white/40 hover:bg-white/10 sm:px-7"
    >
      <div className="flex items-center gap-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
          <Icon className="size-4" />
        </span>
        <div>
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/50">
            {label}
          </div>
          <div className="mt-0.5 font-serif text-xl text-white sm:text-2xl">
            {value}
          </div>
        </div>
      </div>
      <span className="flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors group-hover:text-white">
        {copied ? (
          <>
            <Check className="size-3.5" /> Copied
          </>
        ) : (
          <>
            <Copy className="size-3.5" /> Copy
          </>
        )}
      </span>
    </a>
  );
}

export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-[color:var(--navy-deep)] text-white"
    >
      <div className="footer-grid absolute inset-0 opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
            Contact
          </p>
          <h2 className="font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[1] tracking-[-0.01em]">
            Let's <span className="italic text-white/90">talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Currently exploring summer 2026 product internships out of BYU's
            MBA. The fastest way to reach me:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          <CopyRow
            icon={Mail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <CopyRow
            icon={Phone}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          />
        </motion.div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Gustavo Macedo</span>
          <span>BYU Marriott MBA · Provo, UT</span>
        </div>
      </div>
    </footer>
  );
}
