# Life

Parent: [workspaces.md](../workspaces.md)

**Question:** What needs my attention today?

Life is the operating surface for *running* a day — the fixed timetable, the short honest task list, and the household systems that keep the lights on.

---

## Purpose

Career, Health, and Learning fail when milk, bills, and the 9:30 standup are invisible. Life holds the unglamorous work of being a person.

---

## Living template

| Area | Default objects |
|------|-----------------|
| Daily schedule | Time-blocked repeating routine |
| Daily tasks | Up to 10 variable tasks for *this* date |
| Home | Shopping, groceries, wishlist |
| House | Maintenance, recurring chores |
| Admin | Bills due, appointments |
| People | (optional) birthdays, calls — later |

Users can delete any list. The schedule and the 10-task cap are the product, not a suggestion.

---

## Surfaces

### Daily schedule (fixed routine)

The repeating day. Check-off is per *today* only.

- Items: `start`–`end`, name, category
- Ordered by start time
- Overnight blocks (sleep `22:30`–`05:30`) are valid
- Template is edited in [Settings](./settings.md) in v0; later, inline edit is allowed
- Different routines per weekday: future

**Empty:** "No routine set up yet" → Settings.

**Seed:** Prototype may install `corrected_timetable_v2` (author-specific). Must become optional.

### Daily tasks (variable)

Intentionally capped so the day stays honest.

- Maximum **10**
- Name ≤ 100 chars, category, priority (`low` | `medium` | `high`)
- Add via modal, toggle complete, progress `n / 10`

**Categories (v0):** health, work, learning, personal, social, creative, chores, skincare, haircare, nutrition, spiritual, finance, other. After the pillar split, prefer filing into the right workspace; Life keeps personal / chores / home / other.

**Seed:** `DEFAULT_TASKS` today. Phase 2: user-owned default pack, or an empty day.

**Not in v0:** due times, subtasks, recurrence (that is the schedule), delegation.

**Future:** Eisenhower matrix as an alternate view over the same 10 tasks.

### Home & admin lists (planned)

Shopping, groceries, bills, maintenance, appointments, wishlist, recurring chores. These are long-lived lists with optional due dates — not a second 10-task cap.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Schedule | `My Schedule` tab + Settings routine manager |
| Daily tasks | `Daily Tasks` tab |
| Home / admin lists | Not built (chores appear only as task categories) |

---

## Data

| Object | Lifetime |
|--------|----------|
| Routine template | Long-lived (`routineItems[]`: id, time, endTime, name, category) |
| Routine checks | Per day (`routineChecks[id]`) |
| Tasks | Per day |
| Home / admin lists | Long-lived (not built) |

Checking a routine item or task **must** update Dashboard chrome immediately.

---

## Rules

- Recurrence belongs on the schedule (or a chore list), not on the 10 daily tasks
- Do not auto-complete a block because the clock passed
- At 10 tasks, Add is refused with a clear reason
- Author-specific seeds must not ship as the only first-run path

---

## Out of scope

- Replacing a calendar (sync is later)
- Replacing email
- Project management for teams
- Turning Life into a second Notion
