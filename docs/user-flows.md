# Nova — User Flows

How a person actually moves through Nova. Screens and data contracts live in [workspaces.md](./workspaces.md), [workspace-specs/](./workspace-specs/), and [database.md](./database.md). This file is the interaction story.

---

## Personas (v1)

**A. The weekday operator**  
Has a fixed timetable, a short task list, and a water goal. Opens Nova in the morning and again at night.

**B. The money-aware professional**  
Logs spend the same day, checks budget mid-month, plans a trip without blowing rent.

**C. The career switcher**  
Uses Job Prep in focused bursts: checklist, one technical card, one mock answer, one English paragraph.

Nova v0 was built as all three in one person. Flows must still work if a user only cares about one persona.

---

## Flow 0 — First open

```
Open app/frontend/index.html
  → loadState()
  → if no routine: may install seed timetable
  → if no today key: create day, seed DEFAULT_TASKS, water 0, empty journal
  → apply theme (dark default)
  → Today view, Schedule tab
```

**What the user should feel:** The day is already there. They are not staring at a blank SaaS onboarding.

**Friction to remove (Phase 0–2):**

- Seed timetable and default tasks are someone else's life
- Product still says DayTrack
- No "this is your first day" moment

**Happy path after rebrand:**

1. See Nova mark and today's date
2. Set name in Settings (or a first-run card)
3. Confirm or replace the routine
4. Confirm or clear seeded tasks
5. Drink the first glass

---

## Flow 1 — Run a weekday (core loop)

This is the product.

```
Morning
  Open Nova
  Read greeting + quote
  Scan Schedule — what block is now?
  Check off completed morning blocks
  Review the 10 tasks — keep, delete, add
  Tap first water glass

During the day
  Check off routine blocks as they end
  Complete tasks when they happen
  Log a spend when money leaves
  Water glasses keep climbing
  Optional: reminder toast if the tab is open

Night
  Finish remaining honest checks (do not fake the ring)
  Write journal (gratitude / learnings / feelings / tomorrow)
  Glance at today's spend
  Optional: one career card
  Close the tab — data is already saved
```

**Success:** Tomorrow, History shows a non-empty yesterday, and the streak increments.

**Failure modes:**

| Failure | Cause | Mitigation |
|---------|-------|------------|
| Day feels empty | User cleared seeds, added nothing | Empty states with one action |
| Streak breaks | No open that calendar day | Phase 3: timezone-safe day key; optional "did you live?" ping |
| Reminders silent | Tab backgrounded | Phase 4 notifications |
| Double day | Open after midnight, yesterday unfinished | Phase 3: gentle "close yesterday" |

---

## Flow 2 — Edit the repeating day

```
Settings → My Daily Schedule
  Type name + time → Add
  Drag to reorder
  Return to Today → Schedule
  New item appears, unchecked
```

**Rules:**

- Template edits apply to today and future days
- Past days keep the checks they already stored
- Overnight sleep blocks are allowed

---

## Flow 3 — Add and complete a task

```
Today → Daily Tasks → + Add Task
  Name
  Category
  Priority (low / medium / high)
  Add
→ Task appears in the list
→ Click / check to complete
→ Counter and sidebar update
→ If all complete: celebration (confetti) is allowed
```

**Guard:** At 10 tasks, Add is refused with a clear reason. The cap is the product.

---

## Flow 4 — Drink water

```
Sidebar glasses
  Click glass N → waterCount = N
  Label updates  N / 8
```

If water reminders are on:

```
Every N minutes (if tab active)
  → toast: drink water
```

**Intentional UX:** Clicking glass 5 fills 1–5. This is faster than +1 spam and matches "I already drank that many."

---

## Flow 5 — Journal the day

```
Today → Journal
  Optional: tap a prompt chip (appends a starter line)
  Type
  Pause → autosave
  "Saved" indicator + timestamp
```

**Non-goals:** rich text, publishing, tags (until Phase 3 weekly review needs them).

---

## Flow 6 — Log money

```
Today → Spendings → Daily Spends
  + Add Transaction
  Description, amount, category
  Add
  Today's total and sidebar ₹ update
```

**CSV variant:**

```
Browse ICICI/HDFC CSV
  → parse in browser
  → preview categorized rows
  → user accepts
  → expenses written to today / month (implementation must not upload the file)
```

**Budget check:**

```
Monthly Budget tab
  See income, month spent, remaining
  Scan category bars
  Read advisor sentence
  Optional: glance burn-rate chart
```

**Trip planning:**

```
Trips & Goals → + Plan
  Name, target ₹, month
  Later: enable Travel Mode
  New spends can go to the vault
```

**Subscriptions:**

```
Add recurring item
  If subs > 5% income → warning banner
```

---

## Flow 7 — Career practice burst (20–30 min)

```
Today → Job Prep
  Checklist: tick one milestone if it is actually done
  Technical: read question → speak answer → Show Answer → Next
  Interview: Start Timer → speak → Expected Answer → Next Scenario
  English: read word, meaning, example → read paragraph aloud → Next
```

**Success:** Practice happened. Checklist is not a second task list for the same chores.

---

## Flow 8 — Review a past week

```
History
  Default: current week
  Previous / Next
  Click a day card
  Modal: that day's routine, tasks, journal, spend, water
  Close — no edit in v0
```

**Weekly review (Phase 3, not built):**

```
Friday night or Sunday
  Guided prompts over the last 7 day records
  3 wins, 1 leak (money or energy), 1 focus for next week
  Saved as a review document, not a journal overwrite
```

---

## Flow 9 — Personalize and leave

```
Settings
  Set name → greeting updates
  Toggle dark mode
  Export JSON → file downloads
  Clear All Data → confirm → empty OS, first-open rules apply again
```

Export is the **off-ramp**. A Life OS that cannot be left is a trap.

---

## Navigation map

```
Sidebar
├── Today ────────────────────────────── default
│     tabs: Schedule | Tasks | Journal | Spendings | Career
│           Spendings tabs: Log | Budget | Goals | Subs | Investments
│           Career tabs: Checklist | Technical | Interview | English
├── History
└── Settings
```

Cross-links that must keep working:

- Schedule empty state → Settings
- Mobile menu → same three views
- Modals (add task, history detail) → Esc / backdrop / X

---

## Notification ethics

v0 toasts are in-page and dismissible.

When push exists:

- Water and task reminders are opt-in (already modeled in Settings)
- No streak-shaming push ("you failed")
- No finance push that reveals amounts on a lock screen by default
- Quiet hours should follow local sleep block if the user has one

---

## Accessibility and input

Minimum bar for every new flow:

- Keyboard: tab through add-task modal, Escape closes
- Labels on icon-only buttons (`aria-label` already on menu and close)
- Do not convey state with color alone (completed tasks need a check, not only a green wash)
- Journal and finance inputs must work at mobile width

---

## Anti-flows (do not build)

- Swiping a task into a social share sheet
- Auto-marking the routine because the clock passed
- Auto-logging bank transactions in the background
- Streak freezes sold as a premium feature (see [monetization.md](./monetization.md))
- An AI that writes the journal for the user and saves it silently
