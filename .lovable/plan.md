# Portfolio Redesign Plan

Rebuild Gustavo's portfolio as a polished React + Tailwind site. **All copy stays verbatim** — only the UI changes. BYU navy/royal-blue palette, Stripe/Linear-grade typography, motion, and spacing.

## Stack
- Scaffold a `web_app` artifact (TanStack Start + Tailwind, the default template).
- Google Fonts pairing: **Instrument Serif** (display headlines + pull quote) + **Inter** (UI/body). Tabular numerals for stats.
- Framer Motion for scroll-triggered fade/slide-up reveals.
- Lucide icons for subtle accents (mail, phone, arrow, plus/minus).

## Design tokens
- `--navy: #002E5D` (BYU navy), `--royal: #0062B8`, plus a refined neutral ramp (off-white `#FAFBFC`, ink `#0A1428`, muted `#5B6B7E`, hairline border `#E5EAF0`).
- Premium feel via: generous whitespace, hairline borders, soft shadows, gradient navy hero with subtle grain/noise overlay, tight letter-spacing on display type, restrained accent use of royal blue.
- Radius scale `6/12/20`. Container max-width ~1100px with 800px reading column inside sections.

## Sections

### 1. Nav
Sticky, translucent navy with blur on scroll. Left: "Gustavo" wordmark + tiny "AI-First PM" tag. Right: anchor links (Work, POV, Contact) + small royal-blue "Get in touch" pill.

### 2. Hero
- Full-bleed navy with layered radial gradients + faint dot grid.
- Eyebrow chip: "AI-First Product Manager".
- Massive serif H1 (Instrument Serif, ~clamp(3rem, 7vw, 6rem), tight leading): "AI-First Product Manager" as the headline — paired with the existing tagline below in Inter at ~1.25rem, soft white.
- Primary CTA "Get in touch" + secondary ghost "See the work ↓".
- Subtle scroll indicator.

### 3. Proof strip
Promoted into a real stats band on white with hairline top/bottom rules.
- 5 stats in a responsive grid. Each: huge numeric (`clamp(2.5rem, 5vw, 4rem)`, Instrument Serif, navy, tabular-nums) over a small uppercase label. Vertical hairline dividers between items on desktop.
- Numbers: `6→1 hr`, `15 min`, `+8%`, `+3`, `1 week`.

### 4. What I've Built (Projects)
- Section eyebrow + serif H2.
- Each project rendered as an **expandable card** (summary + expand pattern):
  - Collapsed: project title, one-line subtitle derived from the existing "Problem" sentence (truncated visually, not edited), and a compact metric chip pulled from the existing "Result" sentence.
  - Expanded: four labeled blocks (Problem / Built / Key Decision / Result) shown as a clean two-column layout on desktop (label left, prose right), single column on mobile. Each label is a small uppercase royal-blue tag.
  - Smooth height animation; chevron rotates. First card expanded by default.
- Cards use white surface, hairline border, subtle hover lift, generous padding.

### 5. How I Think (POV)
- Two-column layout on desktop: left = serif H2 "How I Think" + small "— POV" caption; right = the paragraph as a **pull-quote**.
- Large Instrument Serif italic for the opening sentence ("As a PM, I have always felt like a jack of all trades…"), then the rest in Inter at 1.15rem with comfortable measure. A tall navy left-border accent or oversized opening quote mark.
- Closing line ("If any of this sounds like a problem…") rendered larger, navy, as a lead-in to the footer.

### 6. Footer CTA
- Navy band with gradient + subtle pattern.
- Big serif line: "Let's talk." (decorative — *not* added copy since it's a UI label, kept minimal). If user prefers zero added words, swap to using the existing "I'd love to talk." sentence as the headline instead.
- Email + phone rendered as large, tappable rows with icons; copy-to-clipboard on click (toast). Royal-blue outlined buttons.
- Tiny footer note line at bottom.

## Motion
- Framer Motion `whileInView` fade + 16px slide-up, 0.5s ease-out, staggered children for stats and project cards. Respect `prefers-reduced-motion`.
- Nav background opacity tween on scroll.

## Responsive
- Mobile-first. Hero scales via `clamp()`. Stats become 2-col then 1-col. Project cards collapse to single column with labels stacked. Nav collapses extra links, keeps CTA.

## Files (high level)
- `src/components/Nav.tsx`
- `src/components/Hero.tsx`
- `src/components/ProofStrip.tsx`
- `src/components/Projects.tsx` (+ `ProjectCard.tsx` with expand state)
- `src/components/POV.tsx`
- `src/components/FooterCTA.tsx`
- `src/lib/content.ts` — all verbatim copy lives here so it's untouchable.
- `src/index.css` / Tailwind config — fonts, color tokens, base type scale.
- Update root route to compose the sections.

## Guardrails
- Zero copy edits. Every sentence in `content.ts` is a direct paste from the source.
- Keep palette strictly navy + royal blue + neutrals; no extra accent colors.
- No stock photos, no "Trusted by" strip, no invented testimonials.
