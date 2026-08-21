export const workspaces = [
  {
    name: "Daily Planning",
    description: "A quiet agenda for the day you actually have — not a list of everything you could do.",
    accent: "#7C6CF2",
  },
  {
    name: "Finance",
    description: "See where money went, what remains, and what you are saving toward. Awareness, not accounting.",
    accent: "#8FD3D3",
  },
  {
    name: "Career",
    description: "Goals, interviews, skills, and proof of growth — so busy weeks still move you forward.",
    accent: "#7C6CF2",
  },
  {
    name: "Health",
    description: "Water, sleep, movement, and the small rituals that keep a body in the same room as a mind.",
    accent: "#8FD3D3",
  },
  {
    name: "Self Care",
    description: "Slow moments, comfort, and a joy list. Rest is a workspace, not leftover time.",
    accent: "#E8B4A0",
  },
  {
    name: "Learning",
    description: "Courses, vocabulary, and a mark for what you learned today — so progress is visible.",
    accent: "#7C6CF2",
  },
  {
    name: "Reading",
    description: "Books, pages, and a gentle cadence. Reading without a streak that scolds you.",
    accent: "#C4B5A5",
  },
  {
    name: "Journal",
    description: "Private prose for the day. Prompts if you want them. Silence if you do not.",
    accent: "#8FD3D3",
  },
  {
    name: "Travel",
    description: "Trips as goals with a vault — so a weekend away does not surprise the month.",
    accent: "#7C6CF2",
  },
  {
    name: "Goals",
    description: "Long horizons broken into the next honest step. Milestones you can actually see.",
    accent: "#8FD3D3",
  },
  {
    name: "Vision Board",
    description: "A quiet collage of who you are becoming — not a moodboard for someone else.",
    accent: "#E8B4A0",
  },
] as const;

export const features = [
  {
    title: "Daily Planning",
    kicker: "The morning desk",
    body: "Open Nova and the day is already there: a repeating schedule, a short list of intentions, and enough space to breathe. Ten honest tasks beat a hundred forgotten ones.",
  },
  {
    title: "Finance",
    kicker: "Money, without the noise",
    body: "Log a spend in a few seconds. See the month remaining. Watch subscriptions before they become ghosts. Nova is a ledger and a compass — never a bank, never a lecture.",
  },
  {
    title: "Career Dashboard",
    kicker: "Growth you can point to",
    body: "Checklists, interviews, and skill practice live beside the rest of your life. A busy job is not the same as a career in motion. Nova makes the difference visible.",
  },
  {
    title: "Reading Tracker",
    kicker: "Pages, not performance",
    body: "Keep a book nearby. Note what you finished. Return tomorrow. No leaderboard. No public heat map. Just a record that you read.",
  },
  {
    title: "Water Tracker",
    kicker: "Always within reach",
    body: "Eight glasses on the side of the desk. Tap to the glass you have already had. A quiet reminder if you want one — never a red fail.",
  },
  {
    title: "Self Care",
    kicker: "Kindness, scheduled",
    body: "A walk, a mask, rain sounds, a café. Recharge is a first-class workspace so rest is not squeezed into whatever Career left over.",
  },
  {
    title: "Journal",
    kicker: "A private page",
    body: "Write gratitude, a feeling, or nothing. Autosave. No share button. The most sensitive surface in Nova is treated that way on purpose.",
  },
  {
    title: "Progress Tracking",
    kicker: "How am I doing?",
    body: "A single honest ring for today. Domain scores for health, career, learning, and money. History that proves weeks existed — without turning life into a dashboard job.",
  },
  {
    title: "Weekly Review",
    kicker: "Sunday, without the spiral",
    body: "Three wins. One leak. One focus for next week. A review is a conversation with yourself, not a performance review from an app.",
  },
] as const;

export const roadmap = [
  {
    title: "Landing website",
    detail: "This page. A public face before the OS is finished — so the feeling is agreed before the features multiply.",
  },
  {
    title: "Web app",
    detail: "The Life OS in the browser: workspaces, a daily loop, and a desk you can actually sit down at.",
  },
  {
    title: "Cross-device sync",
    detail: "The same day on your laptop and your phone. Conflict-aware. Journal never overwritten in silence.",
  },
  {
    title: "Mobile apps",
    detail: "The same workspaces, native chrome. Water and reminders that survive a closed tab.",
  },
  {
    title: "AI Coach",
    detail: "Suggestions from your own history. It may propose a plan. You commit. It never spends, applies, or reschedules without you.",
  },
] as const;

export const faqs = [
  {
    q: "What is Nova?",
    a: "Nova is a Life Operating System. It is one calm home for planning, money, health, learning, career, journaling, and rest — so you are not managing a stack of apps that do not talk to each other.",
  },
  {
    q: "Who is it for?",
    a: "People who already try to live intentionally and are tired of switching tools. Young professionals, students, and anyone who wants one private desk for the whole of their life — not a team workspace, not a social network.",
  },
  {
    q: "Will it be free?",
    a: "The daily loop — schedule, tasks, water, journal, history — is meant to stay free. Later, sync across devices and an optional coach may be paid. Export, your journal, and your streak will never be held hostage.",
  },
  {
    q: "Does it work offline?",
    a: "The first version is local-first: your day lives on the device. Sync comes later. Even then, a day should still work if the network does not.",
  },
  {
    q: "Will there be AI?",
    a: "Yes, eventually — as a coach inside the OS, not as the product. It recommends. You decide. It will not write your journal or rearrange your day unless you ask, and it will not send private text anywhere without an explicit action.",
  },
  {
    q: "How do you treat privacy?",
    a: "Journal and finance are not content. There are no ads against your life data. You can export everything. You can leave. That is a design requirement, not a settings footnote.",
  },
] as const;

export const scattered = [
  "Tasks",
  "Calendar",
  "Notes",
  "Reminders",
  "Habits",
  "Water",
  "Journal",
  "Budget",
] as const;
