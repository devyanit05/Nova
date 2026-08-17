# Nova — Workspaces

A **workspace** is a first-class life domain with its own UI, state, empty states, and history footprint. Workspaces share a day, a theme, and a user — they are not separate apps.

This spec describes the current prototype and the intended contract. Implementation today still uses the DayTrack shell.

See also: [user-flows.md](./user-flows.md), [database.md](./database.md).

---

## Shared chrome

Every workspace sits inside the same OS frame.

| Region | Always shows | Notes |
|--------|--------------|-------|
| Sidebar nav | Today, History, Settings | Mobile: hamburger |
| Logo | Product name + mark | Must become Nova |
| Completion ring | Overall % for today | Routine + tasks (and later health) |
| Mini stats | Routine `done/total`, tasks `done/total`, spent today | |
| Water block | 8 glasses | Health, but always visible |
| Top bar | Date, weekday, streak, greeting | Greeting uses Settings name |

**Overall completion** is a single number the user can trust. Formula in v0: blend of routine checks and task completions. Water is tracked beside the ring, not inside it, until a Health workspace exists.

---

## 1. Today

**Purpose:** The home of the Life OS. Not a report — the day itself.

**Contains:** Motivation banner + section tabs that host Schedule, Tasks, Journal, Finance, Career.

**Rules:**

- Exactly one section is active.
- The day key is always *today* in this view. History is a different view.
- Motivation is a random quote from the local library. It is atmosphere, not a workspace.

**Empty / first-run:** If routine is empty, Today still loads. The Schedule tab explains how to add items in Settings.

**Future:** Domain score bars (Health, Career, Learning, Finance, Habits) above the tabs, matching the vision dashboard.

---

## 2. Schedule (My Daily Schedule)

**Purpose:** The fixed day — things that repeat every weekday unless the user edits the template.

**v0 name:** My Schedule / Routine.

**User can:**

- See time-blocked items (`start`–`end`, name, category)
- Check off items for *today* only
- See `done / total`
- Jump to Settings to edit the template

**User cannot (v0):**

- Edit the template from the Today list (Settings only)
- Have different routines per weekday (future)

**Data:**

- Template: `routineItems[]` → `{ id, time, endTime, name, category }`
- Today: `routineChecks[id] = boolean`

**Empty state:** "No routine set up yet" + button to Settings.

**Seeding:** First load may install a corrected personal timetable (`corrected_timetable_v2`). That seed is author-specific and must become optional in Phase 2.

**Quality bar:**

- Items ordered by start time
- Overnight blocks (e.g. sleep `22:30`–`05:30`) are valid
- Checking an item updates the sidebar immediately

---

## 3. Daily Tasks

**Purpose:** Variable work for this date. Intentionally capped so the day stays honest.

**Limits:**

- Maximum **10** tasks (`MAX_TASKS`)
- Each task: name (≤100 chars), category, priority (`low` | `medium` | `high`), completed, createdAt

**Categories (v0):** health, work, learning, personal, social, creative, chores, skincare, haircare, nutrition, spiritual, finance, other.

**User can:**

- Add via modal
- Toggle complete
- See `n / 10` and a progress bar

**Seeding:** A new day is prefilled with `DEFAULT_TASKS` (personal defaults). Phase 2: user-owned default task pack, or an empty day.

**Empty state:** Only if the user deletes all seeded tasks.

**Not in v0:** due times, subtasks, recurrence (that is Schedule), delegation.

**Future:** Priority matrix (Eisenhower) as an alternate view over the same 10 tasks.

---

## 4. Health — Water (sidebar)

**Purpose:** The first health habit. Always on screen so it does not depend on tab memory.

**Contract:**

- Goal: **8 glasses** (`WATER_GOAL`)
- Click a glass to fill up to that index (not only +1)
- Label: `n / 8 glasses`
- Optional reminder every 15 / 30 / 45 / 60 minutes

**Data:** `waterCount` on the day record (0–8).

**Future Health workspace** (not built):

| Tracker | Unit | Notes |
|---------|------|-------|
| Water | glasses or litres | Already live |
| Sleep | hours + quality | |
| Exercise | minutes / type | Swim already appears as a task/routine |
| Mood | 1–5 + tag | Pair with journal |
| Habits | streak per habit | |

Health should graduate from a sidebar widget to a tab **without removing** the glasses from chrome.

---

## 5. Journal

**Purpose:** Private prose for the date. Reflection, not publishing.

**User can:**

- Write freely in a large textarea
- Insert prompts: Gratitude, Learnings, Feelings, Tomorrow
- See character count and last-saved time
- Rely on autosave

**Data:** `journal` string on the day record.

**Rules:**

- Never sync-clobber without prompt (future)
- Never send journal text to analytics or an AI without an explicit action
- Prompts append; they do not wipe

**Empty state:** Placeholder copy, not a dead-end card. A blank journal is valid.

---

## 6. Finance Manager

**Purpose:** Make money visible at daily and monthly resolution.

Finance is the only workspace with **internal tabs**. Those tabs are views, not workspaces.

### 6.1 Daily Spends

- Add transaction: description, amount (INR), category
- List + today's total
- Optional ICICI / HDFC **CSV drop** for auto-categorization (client-side)

### 6.2 Monthly Budget

- Fixed monthly income (default ₹50,000 — must become user-owned)
- Category budgets (investments, PPF, rent, fuel, swimming, emergency, food, transport, shopping, bills, entertainment, health, education, other)
- Month spent, remaining
- Predictive burn-rate chart
- Rule-based "Finance Advisor" copy

### 6.3 Trips & Goals

- Named goal, target amount, target month
- **Travel Mode:** new expenses can route to a trip vault instead of the monthly budget

### 6.4 Subscriptions

- Recurring expenses
- Warning when "ghost" subs exceed ~5% of income

### 6.5 Investments

- Monthly invested total
- 10-year projection at **12% YoY** (illustrative, not advice)
- Compound growth chart

**Currency:** INR (₹) in v0. Multi-currency is out of scope until Phase 4.

**Rules:**

- Nova is a ledger and a planner, not a bank
- CSV import does not store the file
- Projections are educational
- Sidebar "Spent" is **today**, not month

---

## 7. Career (Job Prep)

**Purpose:** Structured practice toward a role change. v0 is opinionated: DevOps / SDET / AWS / Kubernetes.

Internal tabs:

| Tab | Behavior |
|-----|----------|
| Career Checklist | Long-lived milestones (resume, K8s phases, Jenkins, IaC, SDET, Git, applications) |
| Technical Prep | Flashcard: topic, question, reveal answer, next |
| Mock Interview | Scenario + timer + expected points |
| English Fluency | Word/idiom of the session + meaning + example + read-aloud paragraph |

**Data:**

- Checklist: `careerChecks[id] = boolean` (not per-day)
- Practice content: static libraries in `js/data.js`

**Progress:** `career-done / career-total` in the section header.

**Phase 2 requirement:** Tracks become data. A teacher, a designer, or a civil-service candidate should load a different pack without a code change.

**Not a workspace (yet):** generic Learning Hub (collections, reading tracker). English Fluency is the seed.

---

## 8. History

**Purpose:** Proof that days existed. The anti-amnesia view.

**User can:**

- Page by week (previous / next)
- See a grid of day cards
- Open a day modal with that date's routine, tasks, journal excerpt, spend, water

**Empty state:** "Complete some daily activities to start building your history."

**Rules:**

- History is read-only in v0 (no editing past days — add in Phase 3 if needed)
- Do not render the entire `appData` map at once

---

## 9. Settings

**Purpose:** Shape the OS.

| Group | Controls |
|-------|----------|
| Daily Schedule | Add routine line (name + time), reorder, persist template |
| Reminders | Water on/off, water interval, task-progress on/off |
| Personalization | Display name for greeting |
| Appearance | Dark mode (default on) |
| Data | Export JSON, clear all data |

**Rules:**

- Clear data requires confirmation
- Export is a user right, not a power-user easter egg
- Routine manager is the only place the repeating day is edited

---

## Workspace matrix

| Workspace | Nav home | Writes to day? | Long-lived store? | History footprint |
|-----------|----------|----------------|-------------------|-------------------|
| Today | Today | No (shell) | No | No |
| Schedule | Today tab | Checks | Template | Checks |
| Tasks | Today tab | Yes | Defaults only | Task list |
| Water | Sidebar | Yes | Settings (reminders) | Count |
| Journal | Today tab | Yes | No | Text |
| Finance | Today tab | Expenses | Income, budgets, goals, subs | Expenses |
| Career | Today tab | No | Checklist | Optional later |
| History | History | No | No | Is the footprint |
| Settings | Settings | No | Settings + routine | No |

---

## Adding a new workspace

Do not add a tab until all of the following exist:

1. One-paragraph purpose in this file
2. Data ownership (day vs long-lived)
3. Empty state
4. History or an explicit "no history" decision
5. How it affects the completion ring (or why it does not)

Candidates already named in vision, not yet workspaces:

- Learning Hub
- Sleep / Exercise / Mood
- Weekly Review
- Vision Board
- AI Coach (a layer, preferably not a peer tab)
