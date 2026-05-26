// All copy below is verbatim from the source portfolio. Do not edit.

export const hero = {
  title: "AI-First Product Manager",
  tagline:
    "I use AI to ship more and go deeper — understand customers better, build faster, and deliver at a pace most teams didn't think was possible.",
  cta: "Get in touch",
};

export const stats = [
  { value: "6-8 hrs → 1 hr", label: "Report time" },
  { value: "15 min", label: "Custom demos" },
  { value: "+8%", label: "Renewal rate" },
  { value: "+3 clients", label: "Per PM" },
  { value: "1 week", label: "AI roadmap built" },
];

export type ProjectBlock = { label: string; body: string };
export type Project = {
  title: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    title: "AI Feature Request Pipeline",
    blocks: [
      {
        label: "The Problem",
        body: "After rolling out Claude company-wide, everyone started building their own skills — but without coordination. Skills weren't branded, broke when shared because not everyone had the latest version, and people were unknowingly duplicating each other's work. There was no system to capture, evaluate, or prioritize what got built.",
      },
      {
        label: "What I Built",
        body: "A two-part AI system. First, an intake agent that interviews any team member who has an idea — it searches all existing skills for matches, runs a structured discovery interview to understand the job to be done, and posts a summary to Slack for company-wide visibility. Second, an autonomous PRD writer that picks up each request and instantly generates a scored, structured PRD — no human input required.",
      },
      {
        label: "Key Decision",
        body: "Centralizing all skills in a shared repo so every department always has the latest version, and building a registry of README files so the AI itself knows what already exists before anyone starts building something new.",
      },
      {
        label: "Result",
        body: "Built the company's AI product roadmap for the next year within a week. PRDs that used to require multiple interviews and manual write-ups now generate instantly. The Slack-first visibility means the whole company weighs in with context, which means less discovery time and faster shipping.",
      },
    ],
  },
  {
    title: "Sales Demo Builder",
    blocks: [
      {
        label: "The Problem",
        body: "Every prospect saw the same generic demo with hand-built synthetic data. Nothing was tailored to their industry, competitors, or pain points — so prospects had to imagine how the platform would work for them instead of seeing it.",
      },
      {
        label: "What I Built",
        body: "A modular AI skill suite that generates a fully personalized demo environment in 15 minutes — complete with realistic win-loss transcripts, decision driver scores, HTML summaries, and a platform-ready CSV. It pulls from the web, Gong, and Salesforce to build synthetic data that actually mirrors the prospect's world.",
      },
      {
        label: "Key Decision",
        body: "Designing the whole system around constraints — keeping it token-efficient enough for Sonnet 4.6, simple enough that non-technical sales reps could import results themselves without an API, and precise enough in transcript length and CSV formatting that the platform would accept everything cleanly on the first try. A lot of engineering went into making it feel effortless.",
      },
      {
        label: "Result",
        body: "Sales leadership projects 5x sales impact. Multiple prospects have already reached out excited to explore their custom demo environment — before signing a deal.",
      },
    ],
  },
  {
    title: "Win-Loss Report Builder",
    blocks: [
      {
        label: "The Problem",
        body: "Program managers each handle ~15 clients and spent 6-8 hours building a single quarterly report deck per client. The work required reading every interview, finding trends, comparing to last quarter's findings, aligning to the client's current goals, and assembling a MECE narrative across slides. You can't spend 20 hours on one deck, but you also can't shortcut the analysis without risking your credibility with the client.",
      },
      {
        label: "What I Built",
        body: "An AI skill that profiles the raw win-loss data, synthesizes insights in two passes, and builds a full branded slide deck. But the key: it doesn't just spit out a finished product. It walks the PM through its analysis conversationally — defending its findings, answering pushback, and letting the PM shape the narrative before a single slide is generated.",
      },
      {
        label: "Key Decision",
        body: "Building a collaborative loop instead of a black box. PMs were scarred by hallucination issues with other AI tools and wouldn't trust a report they couldn't verify. So I designed the skill to show its work, take pushback, and let the PM confirm every number and insight before it hits slides. The report takes an hour instead of 10 minutes — but the PM ships it with full confidence.",
      },
      {
        label: "Result",
        body: "Report time dropped from 6-8 hours to 1 hour. PMs now carry 3 more clients on average. Renewal rates improved 8% because clients get monthly decks instead of quarterly. And it's spawned an on-demand reporting feature where clients can pull their own reports directly from the platform.",
      },
    ],
  },
];

export const pov = {
  opening:
    "As a PM, I have always felt like a jack of all trades, master of none.",
  body: "I knew enough about code to converse with engineers, enough about design to have taste, but not enough of either to actually make something. That's how I felt, until AI changed everything. Now I can prototype something in a day, not a sprint. I can ship ideas that would've sat in a backlog forever. I can put something real in front of a customer before my engineers even start. And getting it in front of users early is the thing I care about most. I've put real work into features that nobody used because I didn't involve the customer soon enough. That lesson stuck. I still build for people — but I keep them in the room the whole way, adjusting not just what gets built but how it works in their hands.",
  closing:
    "If any of this sounds like a problem you're trying to solve, I'd love to talk.",
};

export const contact = {
  email: "gustavo.macedo23@gmail.com",
  phone: "385 483 9939",
};
