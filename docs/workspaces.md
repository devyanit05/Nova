# Nova — Workspaces

A **workspace** is a first-class life domain. It has a purpose, a living template, its own state, empty states, and a history footprint. Workspaces share a person, a day, and a theme — they are not five mini-apps glued together.

Users can customize, delete, duplicate, and eventually create their own. Defaults exist so Nova is never a blank page.

Detailed contracts live in [`workspace-specs/`](./workspace-specs/).

See also: [vision.md](./vision.md), [product-requirements.md](./product-requirements.md), [user-flows.md](./user-flows.md).

---

## The question each workspace answers

| Workspace | Question | Spec |
|-----------|----------|------|
| **Dashboard** | How am I doing, and what should I focus on next? | [dashboard.md](./workspace-specs/dashboard.md) |
| **Life** | What needs my attention today? | [life.md](./workspace-specs/life.md) |
| **Career** | Am I growing professionally? | [career.md](./workspace-specs/career.md) |
| **Health** | How is my body doing? | [health.md](./workspace-specs/health.md) |
| **Learning** | What did I learn today? | [learning.md](./workspace-specs/learning.md) |
| **Finance** | Am I becoming financially healthier? | [finance.md](./workspace-specs/finance.md) |
| **Recharge** | Have I been kind to myself today? | [recharge.md](./workspace-specs/recharge.md) |
| **Settings** | How should this OS fit me? | [settings.md](./workspace-specs/settings.md) |

These six life pillars plus Dashboard and Settings are the default OS. Additional user-created workspaces come later.

---

## Shared chrome

Every workspace sits inside the same frame.

| Region | Always shows |
|--------|----------------|
| Sidebar | Nova mark, Dashboard, the six pillars, Settings |
| Completion | A number the user can trust for *today* |
| Top bar | Date, weekday, streak, greeting |

Health water may stay visible in chrome so it does not depend on tab memory. That does not make Health a widget instead of a workspace.

**v0 note:** The running prototype still uses a DayTrack shell (Today / History / Settings) with Schedule, Tasks, Journal, Spendings, and Job Prep as tabs. The specs below describe the *intended* OS and map what already exists.

---

## Living templates

Each workspace ships with a best-practice starting system. Users own every object.

- Customize, delete, duplicate, expand
- Templates are a starting point, not a prison
- A second person must be able to use Nova without editing source files

---

## Workspace matrix

| Workspace | Writes to the day? | Long-lived store? | History footprint |
|-----------|--------------------|-------------------|-------------------|
| Dashboard | No (reads) | Inbox, reviews | Is the read-model |
| Life | Yes (tasks, chores, checks) | Routine template, lists | Tasks and checks |
| Career | Practice optional | Track, checklist, applications | Milestones |
| Health | Yes (water, sleep, …) | Goals, meds, supplements | Daily vitals |
| Learning | Yes (daily item) | Courses, books, decks | What was studied |
| Finance | Yes (expenses) | Income, budgets, goals, subs | Ledger |
| Recharge | Yes (journal, rituals) | Joy list, comfort kits | Journal + done rituals |
| Settings | No | Preferences, routine editor | No |

---

## Adding a workspace

Do not add a nav item until all of the following exist:

1. One-paragraph purpose in **this** file
2. A spec in `workspace-specs/`
3. Data ownership (day vs long-lived)
4. Empty state
5. History, or an explicit "no history" decision
6. How it affects the completion ring (or why it does not)

Inbox is a **capture layer**, not a workspace. AI Coach is a **layer**, not a peer tab.
