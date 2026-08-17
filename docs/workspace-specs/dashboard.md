# Dashboard

Parent: [workspaces.md](../workspaces.md)

**Question:** How am I doing, and what should I focus on next?

The Dashboard is the homepage of the Life OS. It is not a report warehouse and not a seventh life pillar. It *reads* the other workspaces and puts the day on the table.

---

## Purpose

Opening Nova should feel like sitting down at a desk that already knows you.

The Dashboard must answer four things without a click:

1. **What needs my attention today?** — from Life (and overdue Health / Finance / Career items)
2. **Am I becoming who I want to become?** — scores or bars for Career, Learning, Health, Finance, Recharge
3. **Where am I falling behind?** — neglected habits, sleep, budget, empty learning
4. **What should I focus on next?** — a short focus list, later a coach suggestion

---

## Surfaces

| Surface | Role |
|---------|------|
| Greeting + date | Time of day + Settings name |
| Motivation line | Atmosphere only — not a workspace |
| Domain scores | Health, Career, Learning, Finance, Recharge / Habits |
| Today's focus | 3–7 concrete items pulled from workspaces |
| Inbox | Capture first, file later (universal, not a pillar) |
| History | Proof that days existed — week grid, day detail |
| Completion ring | One honest % for today |

### Inbox

Ideas arrive randomly. The user should not have to pick a workspace first.

Examples: *Buy milk*, *Book dentist*, *Learn Docker*, *Buy headphones*.

Later, items are filed into Life, Career, Learning, etc. Capture first. Organize later.

Inbox is a layer on the Dashboard (and optionally a quick-add in chrome). It is not a ninth workspace.

### History

- Page by week
- Day cards open a read-only detail: Life checks, tasks, journal excerpt, spend, water
- Do not render the entire day map at once
- Editing past days is Phase 3, not v0

Weekly Review (Phase 3) lives here: three wins, one leak, one next focus — stored as a review document, not a journal overwrite.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Dashboard | `Today` view + sidebar ring + greeting |
| Domain scores | Not built — vision mock only |
| Today's focus | Implied by Schedule + Tasks tabs |
| Inbox | Not built |
| History | Separate `History` nav view + day modal |
| Completion | Blend of routine checks + task completions |

---

## Data

- **Reads** day records and workspace stores; writes only Inbox items and (later) weekly reviews
- Completion % is **derived**. Do not persist it as truth
- Streak is derived from consecutive dates with activity

---

## Empty states

- First open: the day still loads. Focus list may be empty; Inbox invites the first capture
- History: "Complete some daily activities to start building your history."

---

## Rules

- Exactly one primary workspace is "open" after the user leaves the Dashboard; the Dashboard itself is the default home
- The day key on the Dashboard is *today*. History is how you leave today
- Motivation quotes are atmosphere
- The ring must move when Life / Health checkboxes move
- No sixth top-level nav item for "Analytics" — that is this page, or a History subview

---

## Out of scope

- Social feed
- Widget marketplace
- Auto-marking the day complete because the clock passed
- AI that writes the focus list and saves it without confirmation
