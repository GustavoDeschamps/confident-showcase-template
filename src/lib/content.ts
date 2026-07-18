// Existing project copy is verbatim from the source portfolio.
// Projects are grouped by department; see departmentOrder and projectGroups below.

export const hero = {
  title: "AI-First Product Manager",
  tagline:
    "I use AI to ship more and go deeper — understand customers better, build faster, and deliver at a pace most teams didn't think was possible.",
  cta: "Get in touch",
};

export const stats = [
  { value: "46", label: "Agents shipped" },
  { value: "$1.2M", label: "Saved annually" },
  { value: "26K+", label: "Hours saved" },
];

export type ProjectBlock = { label: string; body: string };
export type Project = {
  department: string;
  title: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    department: "Program Management",
    title: "Win-Loss Report Builder",
    blocks: [
      {
        label: "The Problem",
        body: "Program managers each handle ~15 clients and spent 6-8 hours building a single quarterly report deck per client. The work required reading every interview, finding trends, comparing to last quarter\'s findings, aligning to the client\'s current goals, and assembling a MECE narrative across slides. You can\'t spend 20 hours on one deck, but you also can\'t shortcut the analysis without risking your credibility with the client.",
      },
      {
        label: "What I Built",
        body: "An AI skill that profiles the raw win-loss data, synthesizes insights in two passes, and builds a full branded slide deck. But the key: it doesn\'t just spit out a finished product. It walks the PM through its analysis conversationally — defending its findings, answering pushback, and letting the PM shape the narrative before a single slide is generated.",
      },
      {
        label: "Key Decision",
        body: "Building a collaborative loop instead of a black box. PMs were scarred by hallucination issues with other AI tools and wouldn\'t trust a report they couldn\'t verify. So I designed the skill to show its work, take pushback, and let the PM confirm every number and insight before it hits slides. The report takes an hour instead of 10 minutes — but the PM ships it with full confidence.",
      },
      {
        label: "Result",
        body: "Report time dropped from 6-8 hours to 1 hour. Across 294 active client programs, that recovers 5,880 hours and $302k per year in Program Management time. Program Managers now carry 3 more clients on average. Renewal rates improved 8% because clients get monthly decks instead of quarterly. And it\'s spawned an on-demand reporting feature where clients can pull their own reports directly from the platform.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "Pipeline Diagnostic Deck",
    blocks: [
      {
        label: "The Problem",
        body: "Before a client renewal or quarterly business review, account managers at Clozd had no repeatable way to show a client how much of their sales pipeline was actually being captured by their win-loss program and how much was falling through. Building that analysis manually required pulling data from two separate systems and building slides from scratch, taking one to two hours per client. The result was that it almost never happened. Expansion conversations went into QBRs without data, and clients never saw the gap between what they were learning and what they could be learning.",
      },
      {
        label: "What I Built",
        body: "A skill that generates a branded, client-ready pipeline diagnostic deck from a single prompt. An account manager types the client name and the skill does the rest: it pulls the full pipeline from Salesforce via BigQuery, reads the client\'s current program configuration through the Clozd API, calculates how many eligible deals are being captured versus falling through each workflow, generates two to three expansion scenarios with projected interview volumes, and assembles a five to seven slide deck ready to present at the QBR. The whole thing runs in under five minutes.",
      },
      {
        label: "Key Decision",
        body: "Framing the output around coverage gaps rather than raw participation numbers. The most compelling thing an account manager can show a client is not how many interviews they have completed but how many deals they are not learning from. Structuring the deck around that gap turns a renewal conversation into an expansion conversation.",
      },
      {
        label: "Result",
        body: "Replaced one to two hours of manual work with a five-minute prompt. More importantly, it made a class of conversation that almost never happened into something that can happen at every renewal. The primary value is not time saved but expansion revenue enabled, since AMs now walk into QBRs with a data-backed growth case instead of a gut-feel pitch.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "Stalled Account Intelligence",
    blocks: [
      {
        label: "The Problem",
        body: "Anyone at Clozd who needed to understand what was happening with a client account had to piece it together manually. Context was scattered across dozens of recorded sales calls, no single view combined health scores, stakeholder history, and program pacing, and the AI-generated call summaries the team relied on routinely missed executive departures. An account could be stalled for weeks with no one realizing the internal champion had left. Reconstructing the full picture took one to two hours every time someone needed it.",
      },
      {
        label: "What I Built",
        body: "A conversational skill that takes a client name and produces a self-contained HTML account intelligence report in under two minutes. The report pulls from a cloud data warehouse of sales call recordings, program health data, contract records, and pacing metrics. Depending on the account situation it assembles different sections: a stakeholder map distinguishing active champions from disengaged contacts and departed executives, a chronological call timeline with expandable next steps, a ranked blocker list with severity indicators, a status table of every use case proposed and what happened to it, a best practices compliance check, a pacing breakdown against contract quota, a path to renewal for at-risk accounts, and a concrete action plan with owners and timelines. The report adapts its structure to the account rather than producing the same output every time.",
      },
      {
        label: "Key Decision",
        body: "Building the skill to treat absence of follow-through as a first-class signal, not just a gap in the data. If a next step was committed to on a call and never appeared in any subsequent call, the skill surfaces that explicitly. The same logic applies to executive departures, which rarely appear in AI-generated call summaries but almost always appear in raw transcripts when you know what to look for.",
      },
      {
        label: "Result",
        body: "Analysis time dropped from one to two hours to under two minutes. Adopted by 50+ people across program management, sales, and leadership. Projected to save $150k to $300k per year in recovered time.",
      },
    ],
  },
  {
    department: "Sales",
    title: "Personalized Demo Builder",
    blocks: [
      {
        label: "The Problem",
        body: "Every prospect Clozd pitched saw the same generic demo. The data was synthetic but not tailored, so prospects had to mentally translate what they were seeing into their own world: their industry, their competitors, their deal types. That translation work is friction, and friction in a demo is lost attention. The reps who did personalize did it manually, which meant hours of research and data fabrication before a single call.",
      },
      {
        label: "What I Built",
        body: "A four-phase orchestration system that takes a company name and produces a fully personalized demo environment in about 15 minutes. The first phase researches the prospect using web sources and Gong data, builds a competitive landscape, and identifies the decision drivers most relevant to their industry. The AE reviews and confirms the profile before anything is generated. The second phase builds a question bank tailored to those drivers and, if requested, a branded interview guide in Clozd\'s format. The third phase generates 15 synthetic win-loss deals with realistic transcripts, HTML summaries, and decision driver scores calibrated to the prospect\'s world. The final phase validates the CSV against the platform\'s import requirements and delivers everything with upload instructions. The whole system is modular: three sub-skills running in sequence, each with its own logic, so any piece can be updated without touching the others.",
      },
      {
        label: "Key Decision",
        body: "Building a hard checkpoint between research and generation. Early versions ran straight through, which meant if the prospect profile was off, all 15 deals were generated against the wrong assumptions and had to be scrapped. The checkpoint forces the AE to confirm the competitive landscape and decision drivers before a single deal is written, which made the output trustworthy enough to use in a live call without review.",
      },
      {
        label: "Result",
        body: "Sales leadership projects 5x sales impact. Demo prep time dropped from several hours to 15 minutes. Multiple prospects have reached out excited about their custom demo environment before signing a deal.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "PM Health Dashboard",
    blocks: [
      {
        label: "The Problem",
        body: "Program managers at Clozd were monitoring client health through Catalyst, a CRM tool that did not reflect the company\'s current health score configuration. There was no single view that combined health scores, pacing, platform adoption, and renewal timelines. To build a picture of their book, PMs had to navigate across multiple screens, context-switch repeatedly throughout the day, and mentally triangulate across fragmented data. Accounts that were deteriorating could slip deeper into critical status before anyone noticed.",
      },
      {
        label: "What I Built",
        body: "A persistent, live dashboard that a PM opens once in Cowork and reloads whenever they need a current view of their book. It pulls live data from BigQuery and Salesforce on every load. Four tabs cover everything a PM needs: a top-level overview with a breakdown of account health levels and at-risk highlights, a sortable account table with health scores, pacing, adoption, and ARR, a week-over-week movers view that surfaces accounts deteriorating fastest, and a renewal pipeline scoped to the next 180 days. Each account is assigned a health tier, a severity rating that ranges from healthy to critical, so PMs can instantly see which clients need attention and which are on track. The dashboard is scoped to the individual PM\'s book of business by Salesforce name and refreshes in under 30 seconds on demand.",
      },
      {
        label: "Key Decision",
        body: "Building week-over-week change detection into the artifact itself using a locally stored baseline snapshot. There was no existing infrastructure to track health score deltas over time. Rather than waiting for a backend solution, I stored the prior week\'s scores in the artifact at load time, which meant the week-over-week movers tab worked from day one without any additional engineering dependencies.",
      },
      {
        label: "Result",
        body: "PMs can now get a full health view of their book in under 30 seconds without touching Catalyst. Estimated to save $87k to $174k per year across 26 PMs based on time recovered from fragmented navigation, which they were doing roughly 15 times per week each.",
      },
    ],
  },
  {
    department: "Sales",
    title: "Signal-Triggered Prospecting Agent",
    blocks: [
      {
        label: "The Problem",
        body: "Sales reps at Clozd received signals every week that should have triggered outreach: a contact at a key account changed jobs, a leadership team shifted, a company announced something relevant. The tools to surface these signals existed. What did not exist was the step between signal and sent email. Getting from a job change alert to a personalized, ready-to-send message required 45 minutes of manual research, context assembly, and drafting per contact. Most signals went unactioned because the personalization step was too expensive to do at scale.",
      },
      {
        label: "What I Built",
        body: "A fully automated background agent that monitors each rep\'s book of accounts for triggering signals, identifies the highest-priority contact to reach out to using win-loss pattern data from BigQuery, enriches the contact through ZoomInfo, pulls account context from Clozd\'s interview history, and drafts a personalized four to six sentence outreach email grounded in the specific signal. The draft lands in the rep\'s Slack as a ready-to-review notification with a signal summary, a contact card explaining why this person was prioritized, and the email copy. The rep reviews and sends. Nothing goes out automatically.",
      },
      {
        label: "Key Decision",
        body: "Grounding the contact prioritization in historical win-loss data rather than just seniority or role title. The agent cross-references the contact\'s role against the personas that appear most often in closed-won deals, so the rep is not just reaching out to the most senior person available but to the profile most likely to convert. That distinction is what makes the outreach feel targeted rather than automated.",
      },
      {
        label: "Result",
        body: "Reduced prospecting time from two to three hours per week to under 30 minutes of review per rep. Projected to save $127k per year across the sales team in recovered time, with the additional benefit of turning a class of high-value signals that previously went unactioned into a consistent source of pipeline.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "New User Welcome Agent",
    blocks: [
      {
        label: "The Problem",
        body: "When a contact logged into the Clozd platform for the first time, nothing happened. No personalized outreach, no notification to the account manager, no moment of connection. If an automated sequence was running, a generic email might fire a few days later. A VP-level buyer logging in for the first time, one of the highest-signal moments in the account relationship, got the same treatment as everyone else.",
      },
      {
        label: "What I Built",
        body: "A daily automated agent that detects every first-time platform login across active customer accounts and delivers a personalized draft email to the owning account manager\'s inbox, ready to forward. The agent pulls account context from recent Gong call notes, enriches the new user through ZoomInfo for seniority validation and prior employer history, and writes a four to six sentence email calibrated to the person\'s level. Executives get an email that references an account moment from recent calls and a meeting ask framed around business metrics. Managers get a slightly more operational version. Individual contributors get something practical and helpful focused on platform success. The AM reviews and forwards. Nothing auto-sends.",
      },
      {
        label: "Key Decision",
        body: "Designing three distinct email tiers instead of one template with variable fields. A VP of Revenue and an individual contributor have completely different reasons for being in the platform and completely different things an AM should say to them. A single template produces something that feels generic to everyone. Separate tiers meant the draft felt written for the person, which is the whole point.",
      },
      {
        label: "Result",
        body: "Turned a moment that previously generated zero outreach into a consistent, personalized touchpoint at the highest-signal instant in a new user\'s relationship with the platform. Every new login on a customer account now gets a context-aware draft in the owning AM\'s inbox within 24 hours.",
      },
    ],
  },
  {
    department: "Sales",
    title: "ROI Calculator",
    blocks: [
      {
        label: "The Problem",
        body: "Only about 10 percent of sales reps at Clozd consistently ran an ROI conversation with prospects and clients. The other 90 percent skipped it entirely, not because the math was hard, but because there was no repeatable way to do it. Every rep who did it worked from scratch: Googling revenue figures, doing mental math, and presenting a rough number verbally with no branded leave-behind. Two reps pitching the same account would walk in with different numbers.",
      },
      {
        label: "What I Built",
        body: "A skill that takes a company name and produces a branded, single-slide ROI projection in under 10 minutes. For existing clients, it queries Gong call transcripts and CRM data to pull actual revenue metrics and stated goals. For prospects, it pulls from ZoomInfo and web search, and falls back to industry benchmarks when financials are not public. It models three scenarios across three value levers: retention lift, win rate improvement, and deal size expansion. Every figure is anchored to the company\'s actual or estimated revenue base, and any number derived from benchmarks is flagged so the rep knows what to validate before the meeting. The output is a formatted PPTX slide that matches the template Clozd already uses in its sales pitch deck.",
      },
      {
        label: "Key Decision",
        body: "Designing the output to match an existing slide format rather than inventing a new one. Reps already knew how to use that slide in a conversation. By generating into a familiar format, the skill required zero behavior change and could be dropped into a deck that was already in rotation.",
      },
      {
        label: "Result",
        body: "Reduced ROI slide prep from one to two hours down to under 10 minutes. The full-adoption upside is estimated at $80k per year in recovered rep time, with a near-term ceiling of $18k based on current usage patterns. More importantly, it puts a capability that only the top 10 percent of reps used into the hands of the entire team.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "AI Skill Request Pipeline",
    blocks: [
      {
        label: "The Problem",
        body: "After rolling out Claude company-wide, everyone started building their own skills without coordination. Skills were duplicated across teams, broke when shared because people were on different versions, and there was no way to evaluate whether something was worth building in the first place. Good ideas sat in Slack threads and went nowhere.",
      },
      {
        label: "What I Built",
        body: "A three-skill system that takes a team member from \"I have an idea\" to a scored, builder-ready PRD with no manual handoff. An intake agent interviews any employee who has a request. It first searches a live registry of every installed org skill to check if the need is already met. If there is a full match, it tells the requester and closes the loop. If there is a partial match, it hands off to a gap analysis interview that focuses specifically on what the existing skill is missing. If there is no match, it hands off to a full discovery interview structured around job-to-be-done, current workflow, frequency, and edge cases. The completed intake gets posted as a structured Slack canvas. A separate autonomous agent picks that canvas up, scores the request using a RICE framework with dollar-value estimates, and delivers a formatted PRD to the right team\'s Google Drive folder within the hour.",
      },
      {
        label: "Key Decision",
        body: "Building the skill registry lookup as the first step, before any interview happens. Without it, the system would generate duplicate PRDs for things that already exist. The registry check is what makes the whole pipeline self-correcting.",
      },
      {
        label: "Result",
        body: "Built the company\'s AI product roadmap for the next year in one week. PRDs that previously required multiple interviews and manual write-ups now generate within an hour of a request being submitted. The Slack-first visibility means the whole company can weigh in before anything gets built, which surfaces context that would otherwise get missed.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "Renewal Gap Tracker",
    blocks: [
      {
        label: "The Problem",
        body: "Every week, account managers at Clozd needed to audit their upcoming renewals to find gaps in MEDDPICC data before entering high-stakes conversations. There was no consolidated view. AMs had to click into each Salesforce opportunity individually, manually spot which fields were blank, and then decide from memory what questions to ask to fill the gaps. Across five account managers, that was 30 to 60 minutes per person per week with no standardized output to show for it.",
      },
      {
        label: "What I Built",
        body: "A weekly automated agent that runs before the renewal review cadence begins, pulls every opportunity renewing in the next 120 days from Salesforce, scores MEDDPICC completeness per account, and emails each AM a structured report with their accounts sorted by urgency, a completeness score for each one, and two to three tailored probing questions for every missing criterion. The questions reference the specific account name and the exact gap, so an AM can use them verbatim or with minimal editing. Nothing requires manual triggering. The report arrives in the inbox before the week\'s review calls begin.",
      },
      {
        label: "Key Decision",
        body: "Using static question templates with account context injected rather than generating questions dynamically from Gong data. Dynamic generation would have been more impressive but harder to validate and slower to ship. Static templates with the account name and missing criterion woven in produced questions specific enough to be genuinely useful and consistent enough to trust, which is what the team actually needed.",
      },
      {
        label: "Result",
        body: "Eliminated 30 to 60 minutes of manual Salesforce auditing per AM per week, worth roughly $5k to $10k per year in recovered time. More importantly, AMs now enter renewal conversations knowing exactly what information is missing and exactly what to ask to get it.",
      },
    ],
  },
  {
    department: "Operations",
    title: "Interview Quality Grader",
    blocks: [
      {
        label: "The Problem",
        body: "At Clozd, published win-loss interviews are graded against a fixed rubric across four categories: quote quality, question technique, transcript body, and formatting. Associate scores are tied to compensation, which means grading consistency is not just a quality issue but a fairness one. One person was doing all of it by hand, spending about 30 minutes per cycle reading through each interview and scoring it manually. As the team grew, the process would not scale, and there was no check against scoring drift over time.",
      },
      {
        label: "What I Built",
        body: "A skill that accepts up to six interview PDFs uploaded in a single session, reads each one, evaluates it against the encoded rubric, and delivers a personalized feedback email to each associate with their scores by category and written observations on any errors. Scores are also logged to a Google Sheet with running trend graphs so the team leader can track each associate\'s performance over time. What was a 30-minute manual review becomes a five-minute upload and confirm.",
      },
      {
        label: "Key Decision",
        body: "Encoding the rubric statically into the skill rather than asking the team leader to provide it each time. The rubric is fixed and compensation-linked, which means it cannot vary by session or by reviewer interpretation. Hardcoding it into the skill removed human judgment from the scoring step and made the output consistent and auditable in a way manual grading never was.",
      },
      {
        label: "Result",
        body: "Grading cycle time dropped from 30 minutes of manual review to under five minutes of human effort. More importantly, it made compensation-linked scoring consistent across every cycle regardless of who reviews it or when, which is the thing that actually mattered to the team.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "Client Health Alert Suite",
    blocks: [
      {
        label: "The Problem",
        body: "Clozd built a new system for rating client program health on a severity scale, ranging from healthy to critical. The problem was detection. There was no automated way to know when an account\'s health level changed. Without it, catching a deteriorating account required someone to manually query a data warehouse every day, a task that would go undone or get inconsistent as the team grew. A client could slip deeper into at-risk status for 48 hours before anyone noticed, which is exactly when the intervention window matters most.",
      },
      {
        label: "What I Built",
        body: "Three coordinated automations that run together as one suite. The first runs on a daily schedule, checks for any health level changes across all accounts since the prior day, and posts a cross-team alert to an internal Slack channel with the account name and the change. The second fires alongside it and posts a context-aware action guide directly to the internal Slack channel for that client, including current status, expected pacing versus actual, and the specific required actions from the response playbook for that severity level. The third is an on-demand adoption audit agent that takes an account name, reads platform feature usage data from BigQuery, and produces a structured report showing what the client is and is not using, with prioritized recommendations for improving their health score.",
      },
      {
        label: "Key Decision",
        body: "Treating missed alerts as a churn risk rather than a time savings problem. The dollar value of the automation in recovered labor is modest. The real value is that a health level change on a strategic account that goes undetected for two days is a relationship problem, not an efficiency problem. That framing drove every design decision, including the choice to post to the client\'s internal Slack channel immediately rather than batch into a daily digest.",
      },
      {
        label: "Result",
        body: "Eliminated the need for any manual daily monitoring of client health across the full book of business. Every health level change now triggers a cross-team alert and a context-aware action guide within 24 hours, for every account, every day, without anyone having to remember to check.",
      },
    ],
  },
  {
    department: "Operations",
    title: "Skill Quality Review Agent",
    blocks: [
      {
        label: "The Problem",
        body: "As more people started building Claude skills, quality became inconsistent. Some skills worked great in isolation but broke in the hands of a non-technical user. Others had perfectly good logic but descriptions so vague that Claude never triggered them at all. There was no standard for what \"done\" looked like, and no one reviewing skills before they shipped to the whole company.",
      },
      {
        label: "What I Built",
        body: "An AI coach that reviews Claude skills at any stage of development, in two modes. When someone shares a complete SKILL.md, it runs a full audit: it identifies the end user, trigger phrases, expected output, and failure modes, then scores the skill across four layers — whether Claude knows its role, whether enough context is supplied, whether there are worked examples, and whether guardrails and escalation paths are defined. The description gets its own focused check, since a weak description is the most common reason a skill exists but never gets used. When someone is mid-build and describing what they want to create, it coaches in real time before a draft even exists. Every finding comes with a specific fix and the reasoning behind it, not just a flag.",
      },
      {
        label: "Key Decision",
        body: "Treating the skill description as a first-class deliverable, separate from the skill logic. Most builders focused on getting the instructions right and wrote a one-line description as an afterthought. But Claude reads the description first to decide whether to consult the skill at all. A skill with a weak description is effectively invisible, so the review forces that piece to be as rigorous as anything else.",
      },
      {
        label: "Result",
        body: "Skills reviewed through this process run 15 to 40 percent more efficiently in token consumption. That matters because running out of session tokens mid-task is the most disruptive thing that can happen to an AI-powered workflow. Catching bloated context, redundant instructions, and over-specified prompts before a skill ships means every person using it gets more done before hitting their daily limit.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "DEFCON Situation Room Deck Builder",
    blocks: [
      {
        label: "The Problem",
        body:
          "Every month, program managers walk into a leadership Situation Room review expected to speak to every at-risk account in their book, the ones sitting at DEFCON 1 through 4 on Clozd's internal account health severity scale. Prepping meant pulling each account's ARR, tier, contract end date, interview pacing, and workflow setup by hand from BigQuery and Salesforce, then laying it all out slide by slide. It took hours, and because it was manual it often got done at the last minute or left half finished.",
      },
      {
        label: "What I Built",
        body:
          "A skill that builds the entire monthly Situation Room deck from a single prompt. It pulls every account currently sitting at DEFCON 1 through 4 for that PM and generates one slide per client, pre-populated with the program manager, ARR, tier, contract end date, interview pacing (purchased, delivered, and how far behind), and workflow configuration: whether the account is integrated, has auto-approvals, sends from Gmail, copies reps, and uses calling or texting. The right side of each slide is left blank on purpose, so the PM fills in the narrative and the questions before the leadership meeting.",
      },
      {
        label: "Key Decision",
        body:
          "Leaving the judgment column empty instead of letting the AI write it. Assembling the data is what eats the PM's time, but the read on what is actually happening with a relationship is the part a leadership audience trusts a person to deliver. Automating the facts and reserving the interpretation for the PM kept the deck credible in a room where guesses get caught.",
      },
      {
        label: "Result",
        body:
          "Turned a multi-hour monthly scramble into a few-minute generate-and-review step, with an estimated annual value of about $35k in recovered program management time. Every at-risk account now shows up to the leadership review with consistent, current data instead of whatever the PM had time to assemble.",
      },
    ],
  },
  {
    department: "Program Management",
    title: "Implementation Meeting Follow-Up Agent",
    blocks: [
      {
        label: "The Problem",
        body:
          "After every client implementation call, a program manager owed two things: a follow-up email to the client and an internal recap for the team. Both depended on remembering what was said and writing it up while it was fresh. In practice the call recording sat in Gong, the recap got delayed or skipped, and the client follow-up went out late or generic. The information existed, but the step between the recorded call and the written follow-up was entirely manual.",
      },
      {
        label: "What I Built",
        body:
          "A background agent that watches for when a Gong transcript from an implementation meeting becomes available, then drafts the client follow-up email and posts an internal recap to the team's Slack channel. It reads the actual transcript, pulls the relevant account context from BigQuery, and produces a follow-up grounded in what was discussed and committed to, not a template. The drafts wait for the PM to review and send. Nothing goes out on its own.",
      },
      {
        label: "Key Decision",
        body:
          "Triggering on transcript availability rather than on a calendar event. A meeting being scheduled does not mean it happened, and a meeting happening does not mean the notes are ready. Keying the whole workflow to the moment the transcript lands meant the follow-up is always based on the real conversation and never fires for a call that got moved or canceled.",
      },
      {
        label: "Result",
        body:
          "Closed the gap between a call ending and the follow-up going out, with an estimated annual value of about $68k across the program management team. Client follow-ups now go out promptly and reference the actual discussion, and the internal recap happens every time instead of depending on whoever had a free hour after the call.",
      },
    ],
  },
  {
    department: "Operations",
    title: "Email Sequence Generator and Audit",
    blocks: [
      {
        label: "The Problem",
        body:
          "Clozd's interview and survey programs live or die on email deliverability. If an outreach sequence trips spam filters or reads like a blast, response rates collapse and the whole program underperforms. The team already had a way to audit an existing sequence against deliverability rules, but building a new sequence still started from a blank page, and a sequence written without those rules in mind usually needed a full rewrite anyway.",
      },
      {
        label: "What I Built",
        body:
          "I expanded the existing audit tool into one that also generates audit-compliant sequences from scratch, for Live Interview, Flex Interview, and Online Survey programs. Instead of writing a draft and then checking it, the skill applies the full deliverability methodology at the moment of writing, so the first draft already clears the bar. It still audits and rewrites existing sequences when that is what you have, but now it can also produce a clean, send-ready sequence for a new program directly.",
      },
      {
        label: "Key Decision",
        body:
          "Folding the audit rules into the generation step rather than keeping generate and check as two separate passes. Building the constraints in from the first word meant the output did not need a second cleanup round, which is what made it fast enough that people actually use it for new programs instead of reaching for an old sequence and hoping.",
      },
      {
        label: "Result",
        body:
          "Took new-sequence creation from a write-then-audit-then-rewrite loop down to a single compliant draft, with an estimated annual value of about $10k in onboarding and program management time. New programs now launch on sequences built to land in the inbox instead of being fixed after the fact.",
      },
    ],
  },
  {
    department: "Sales",
    title: "New Client Briefing Doc",
    blocks: [
      {
        label: "The Problem",
        body:
          "When Clozd signed a new client, everything the account executive learned during the sales process had to reach the program manager and account manager who would actually run the account. That handoff was usually a 15-minute verbal call. Details got lost, every AE covered different things, and the fulfillment team often walked into the kickoff missing context the AE already had. There was no standard for what a handoff should contain.",
      },
      {
        label: "What I Built",
        body:
          "A skill an AE runs before kickoff that produces a standardized briefing document for the PM and AM. It asks a few setup questions, takes any optional attachments like call transcripts or the business case, searches the AE's Gmail for the client's email threads, pulls deal and contact data from Salesforce through BigQuery, does a quick web pass on the company, and writes a Word doc with six fixed sections: what was purchased, key stakeholders, company background, tech stack and integrations, win-loss context, and the client's needs and expectations.",
      },
      {
        label: "Key Decision",
        body:
          "Fixing the six sections instead of letting the document take whatever shape each deal suggested. A consistent structure is what makes the briefing useful: the PM and AM always know where to look, and the fixed format quietly forces the AE to fill gaps they might have skipped in a free-form verbal handoff.",
      },
      {
        label: "Result",
        body:
          "Replaced an inconsistent 15-minute verbal handoff with a complete, repeatable briefing, with an estimated annual value of about $12k. The fulfillment team now starts every engagement with the same full picture the AE had, instead of reconstructing it after kickoff.",
      },
    ],
  },
  {
    department: "Sales",
    title: "Proof Point Generator",
    blocks: [
      {
        label: "The Problem",
        body:
          "When a Clozd rep is in front of a prospect, one of the most persuasive things they can say is that Clozd already works with companies like theirs. But recalling which active customers fit a given industry, and the details that make the reference land, like what they use Clozd for and at what scale, meant either knowing it from memory or digging through the data warehouse mid-conversation. At a booth or on a live call there was no time for that, so the strongest proof points often went unsaid.",
      },
      {
        label: "What I Built",
        body:
          "A skill where a rep enters a company or industry and gets two or three relevant active Clozd customers to name as proof points. A quick mode answers at booth speed with a single warehouse query, returning each customer's annual spend, interview tier and counts, use case, and the point of contact's title and team. A detailed mode goes deeper on the best two or three analogs for scheduled-call prep, with program breadth, expansion and renewal signals, tenure, and a clear rationale tying each customer to the prospect, plus an optional one-page leave-behind.",
      },
      {
        label: "Key Decision",
        body:
          "Building two depths off the same lookup instead of one. The booth and the scheduled call are different moments: one needs an instant answer, the other needs a defensible analogy. Offering the quick answer first and the deep dive on demand meant the skill fit both situations without making a rep wait through analysis they did not need in the moment.",
      },
      {
        label: "Result",
        body:
          "Put a relevant, specific customer reference within reach in seconds, with an estimated annual value of about $22k. Reps can now back a claim with the right named analog on the spot instead of falling back on a generic line about working with similar companies.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "Budget Holder Monthly Update",
    blocks: [
      {
        label: "The Problem",
        body:
          "The person who controls the budget for a Clozd program is often not the person who uses it day to day. Months can pass with the budget holder hearing nothing, and then renewal arrives and Clozd is competing for spend against tools that stayed visible. Keeping every economic buyer updated monthly was exactly the kind of consistent, low-urgency work that account managers never had time to do by hand.",
      },
      {
        label: "What I Built",
        body:
          "An agent that emails each account's budget holder a monthly program update with zero ongoing AM effort. The AM tags the economic buyer contact in Salesforce once. After that, the agent pulls program health, interview insights, and pacing from the Clozd platform and Gong every month, writes an executive-level update with the right tone for a healthy or an at-risk account, and copies the AM on every send so nothing goes out behind their back. Drafts are reviewed, not auto-fired.",
      },
      {
        label: "Key Decision",
        body:
          "Making it a one-time Salesforce tag and then fully automatic. The reason these updates never happened was the recurring effort, so any design that needed the AM to do something each month would have failed the same way. Reducing the AM's job to a single tag, then having the agent carry every month after that, is what made consistent executive visibility actually achievable.",
      },
      {
        label: "Result",
        body:
          "Keeps the people who decide renewals informed every month without adding to the account manager's workload, with an estimated annual value of about $128k tied to protected and expanded renewals. Budget holders now enter renewal conversations already knowing the program's value instead of hearing about it for the first time.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "Influencer Outreach Agent",
    blocks: [
      {
        label: "The Problem",
        body:
          "Renewal and expansion decisions at Clozd's clients usually involve senior leaders above the day-to-day champion: the CRO, the CPO, the CMO, the VP of Sales. Those executives rarely log into the platform, so they never see the buyer insights Clozd produces, and by the time budgets get consolidated they have no felt sense of the program's value. Reaching them consistently with something genuinely relevant was too much manual work for an AM to sustain across every account.",
      },
      {
        label: "What I Built",
        body:
          "An agent that sends a short monthly email to every senior leader tagged as an Influencer on an account, each one carrying a single quote from a recently published Clozd interview chosen specifically for that person's role. A CRO sees a quote about revenue risk, a CPO sees one about product signals, a CMO sees one about brand and messaging. The AM tags the influencer contacts in Salesforce once, and the agent handles selection, personalization, and a Salesforce activity log every month. It tracks what each person has already received so it never repeats a quote.",
      },
      {
        label: "Key Decision",
        body:
          "Selecting the quote by the recipient's role rather than sending the same highlight to everyone. A single shared insight feels like a newsletter and gets ignored. Matching the quote to what a specific executive actually cares about is what makes the email feel written for them, which is the difference between building real awareness above the champion and adding to inbox noise.",
      },
      {
        label: "Result",
        body:
          "Builds warm executive relationships above the champion before budget decisions happen, with an estimated annual value of about $256k, the highest of any agent in the portfolio, reflecting its influence on renewals and expansion. Senior leaders who used to be invisible to the program now hear from it every month with something relevant to their seat.",
      },
    ],
  },
  {
    department: "Account Management",
    title: "Renewal Business Case One-Pager",
    blocks: [
      {
        label: "The Problem",
        body:
          "At renewal, the champion who loves a Clozd program often has to sell it internally to a CFO or a steering committee who never used it. What those decision-makers want to know is simple: what changed in our business because of this program? Answering that well meant pulling program history and outcomes and writing a clean narrative, which most champions did not have the time or the data access to do, so strong programs went into renewal defended only by a data dump or a verbal pitch.",
      },
      {
        label: "What I Built",
        body:
          "A skill that generates an executive-ready renewal business case one-pager a champion can forward without editing. The AM provides the client, the contract dates, and any known business outcomes, and the skill pulls the full program history from the Clozd platform: response summaries, decision driver categories and counts, win rates, and delivery pace. It writes a narrative document, not a data export, covering the program at a glance, two or three key insights framed as findings, the business outcomes tied to them, and a forward-looking case for the next year. It is best run about 90 days before the renewal date.",
      },
      {
        label: "Key Decision",
        body:
          "Writing it as a narrative aimed at someone who never used the product, rather than a metrics summary for the champion. The audience that matters is the CFO or committee deciding whether to renew, and they need the story of what changed, not a dashboard. Building the output for that reader is what makes it something a champion can forward up the chain unchanged.",
      },
      {
        label: "Result",
        body:
          "Gives champions a credible, forwardable case for renewal instead of leaving them to assemble one, with an estimated annual value of about $16k tied to smoother renewals. The argument for the program now reaches the budget decision-maker in language built for them.",
      },
    ],
  },
  {
    department: "Marketing",
    title: "HubSpot Event Lead Formatter",
    blocks: [
      {
        label: "The Problem",
        body:
          "After every event, marketing came back with a pile of leads in whatever shape the source gave them: booth badge scans, handwritten conversation notes, session signups, sponsor attendee lists. Before any of it could go into HubSpot it had to be cleaned, deduplicated, enriched with missing contact details, and reshaped into the exact upload format. Doing that by hand after each event was tedious and slow, so leads sat unworked while they went cold.",
      },
      {
        label: "What I Built",
        body:
          "A skill that takes a raw event lead list in whatever form it arrives and returns a clean file ready to import into HubSpot. It standardizes the columns, removes duplicates, fills in missing contact information through ZoomInfo, and formats everything into Clozd's HubSpot upload template. It handles the common event sources, from booth scans to sponsor-provided lists, without needing the input to be tidy first.",
      },
      {
        label: "Key Decision",
        body:
          "Building it to accept messy input rather than requiring a clean template up front. The whole reason this work got delayed was that tidying the list was itself the chore. Letting the skill absorb the mess is what made it something marketing would actually run the day after an event instead of putting off.",
      },
      {
        label: "Result",
        body:
          "Turned post-event lead processing from a manual cleanup job into a quick formatting step, with an estimated annual value of about $1k. Leads now reach HubSpot and the sales team while they are still warm.",
      },
    ],
  },
  {
    department: "Marketing",
    title: "Event Rep Outreach Planner Update",
    blocks: [
      {
        label: "The Problem",
        body:
          "Clozd's event outreach planner already produced an Excel workbook with a tab of contacts for each rep to invite to an event. What it did not have was any way to track what happened after. Reps could not mark who they had reached out to, and there was no single view that rolled every rep's contacts and statuses into one place, so marketing could not see overall progress across the team without opening each tab one by one.",
      },
      {
        label: "What I Built",
        body:
          "An update to that planner that adds a status dropdown column to each rep's tab and compiles every rep's contacts and their statuses into a single unified master tab. Marketing gets one place to see how outreach is tracking across the whole event, and reps get a simple way to record progress as they work their list.",
      },
      {
        label: "Key Decision",
        body:
          "Adding tracking into the existing workbook instead of standing up a separate tool. The reps were already living in that spreadsheet. Putting the status field and the rollup where the work already happened meant adoption was automatic, with nothing new to learn.",
      },
      {
        label: "Result",
        body:
          "Gave marketing end-to-end visibility into event outreach that previously stopped at handing out lists, with an estimated annual value of about $2k. Progress is now trackable in real time across every rep from one tab.",
      },
    ],
  },
];

export const departmentOrder = [
  "Program Management",
  "Account Management",
  "Sales",
  "Operations",
  "Marketing",
] as const;

export type ProjectGroup = { department: string; projects: Project[] };

export const projectGroups: ProjectGroup[] = departmentOrder.map((department) => ({
  department,
  projects: projects.filter((p) => p.department === department),
}));

export const pov = {
  label: "The Shift",
  heading: "What AI Made Possible",
  opening:
    "Now I can prototype something in a day, not a sprint.",
  body: "I knew enough about code to converse with engineers, enough about design to have taste, but not enough of either to actually make something. That\'s how I felt until AI changed everything. Now I can prototype something in a day, not a sprint. I can ship ideas that would\'ve sat in a backlog forever. I can put something real in front of a customer before my engineers even start. Getting it in front of users early is the thing I care about most. I\'ve put real work into features that nobody used because I didn\'t involve the customer soon enough. That lesson stuck. I still build for people, but I keep them in the room the whole way, adjusting not just what gets built but how it works in their hands.",
  closing:
    "If any of this sounds like a problem you\'re trying to solve, I\'d love to talk.",
};

export const contact = {
  email: "gustavo.macedo23@gmail.com",
  phone: "385 483 9939",
};
