# Nova — Architecture

Nova is currently a **local-first single-page app**. The long-term system is a synced Life OS. This document describes both, and the rules for getting from one to the other.

Related: [database.md](./database.md), [api-design.md](./api-design.md), [workspaces.md](./workspaces.md).

---

## Design stance

1. **The day is the aggregate root.** Almost every user action writes to "today".
2. **Workspaces are modules, not microservices.** They share one identity, one theme, one history.
3. **UI never invents truth.** Renderers read state. Modules write state. Persistence is explicit.
4. **Local must remain useful.** Even after a backend exists, a day should still work offline.

---

## Current system (v0 — prototype)

The running product is a static web app. There is no server, no auth, and no network dependency except Google Fonts and Chart.js CDN.

```
┌─────────────────────────────────────────────────────────┐
│                     Browser                             │
│                                                         │
│  index.html          layout, views, section shells      │
│  index.css           design tokens + components         │
│                                                         │
│  js/init.js          boot sequence                      │
│  js/state.js         load / save / todayKey             │
│  js/constants.js     limits, labels, default finance    │
│  js/data.js          quotes, career content             │
│  js/utils.js         DOM + helpers                      │
│  js/ui.js            theme, greeting, toasts, confetti  │
│                                                         │
│  js/modules/                                            │
│    navigation.js     views + section tabs               │
│    routine.js        fixed schedule                     │
│    tasks.js          daily tasks                        │
│    water.js          glasses + reminders                │
│    journal.js        autosave journal                   │
│    spendings.js      finance workspace                  │
│    career.js         job-prep workspace                 │
│    history.js        weekly review                      │
│    settings.js       preferences + data tools           │
│                                                         │
│  localStorage                                           │
│    daytrack_data                                        │
│    daytrack_settings                                    │
│    daytrack_routine                                     │
│    daytrack_career_checks                               │
│    daytrack_finance_state                               │
└─────────────────────────────────────────────────────────┘
```

### Boot sequence

`DOMContentLoaded` → `init()`:

1. `loadState()`
2. Theme, date, greeting, motivation quote
3. Render water, routine, tasks, journal
4. Init finance and career
5. Sidebar stats
6. Wire navigation, tabs, task modal, settings, routine manager
7. Start reminder timers
8. Update streak and history

### State model

| Store | Key | Lifetime |
|-------|-----|----------|
| Daily log | `daytrack_data` | Map of `YYYY-MM-DD` → day record |
| Settings | `daytrack_settings` | Durable preferences |
| Routine template | `daytrack_routine` | Repeats every day |
| Career checks | `daytrack_career_checks` | Checklist progress |
| Finance | `daytrack_finance_state` | Income, budgets, goals, subs |

A missing today-key is created on first read and **seeded with `DEFAULT_TASKS`**. That is a product decision, not an accident — a new day is never empty.

Day record shape:

```
{
  tasks: [{ name, category, priority, completed, createdAt }],
  waterCount: number,
  routineChecks: { [routineId]: boolean },
  journal: string,
  expenses: [{ desc, amount, category, createdAt }]
}
```

### Rendering rule

Modules own their DOM islands (`#routine-list`, `#task-list`, `#journal-textarea`, …). Shared chrome (sidebar ring, streak, greeting) is updated by explicit calls after writes. There is no reactive framework.

### Known architectural debts

| Debt | Why it matters | Pay-down |
|------|----------------|----------|
| DayTrack storage keys | Blocks clean branding and future sync | Phase 0 migration |
| Global mutable `let` state | Hard to test, easy to desync | Introduce a single store API |
| CDN Chart.js + Google Fonts | Offline and privacy | Vendor locally |
| Reminders via `setInterval` | Die when the tab is backgrounded | OS notifications later |
| Career / finance defaults in source | Second user cannot adopt the app | Settings-driven config |
| No schema version field | Migrations will be guesswork | Add `schemaVersion` now |

---

## Target system (v1 — platform)

```
                    ┌──────────────┐
                    │  Clients     │
                    │  Web (SPA)   │
                    │  iOS / Android
                    └──────┬───────┘
                           │ HTTPS + JWT
                    ┌──────▼───────┐
                    │  API gateway │
                    │  Rate limit  │
                    │  Auth        │
                    └──────┬───────┘
                           │
              ┌────────────▼────────────┐
              │  Nova API (Spring or    │
              │  Node)                  │
              │                         │
              │  /days  /tasks  /routine│
              │  /journal /finance      │
              │  /career  /insights     │
              └──────┬─────────┬────────┘
                     │         │
              ┌──────▼──┐  ┌───▼────┐
              │ Postgres│  │ Redis  │
              │ source  │  │ sessions│
              │ of truth│  │ cache  │
              └─────────┘  └────────┘
                     │
              ┌──────▼──┐  ┌────────┐
              │ S3      │  │ FCM /  │
              │ exports,│  │ APNs   │
              │ avatars │  │ notify │
              └─────────┘  └────────┘
```

Planned stack (from product intent, not yet implemented):

| Layer | Choice | Why |
|-------|--------|-----|
| Web / mobile | Flutter **or** React Native + a thin web shell | One interaction model on every device |
| API | Spring Boot **or** Node.js | Boring, hireable, JWT-friendly |
| Database | PostgreSQL | Relational days, transactions, JSONB for workspace extras |
| Cache | Redis | Sessions, reminder locks, rate limits |
| Auth | OAuth + JWT | Google / Apple first; email later |
| Files | S3 | CSV imports, exports, optional attachments |
| Notify | Firebase / APNs | Water and task reminders that survive the browser |
| CI | GitHub Actions | Lint, test, image build |
| Runtime | Docker, later Kubernetes | Match the career workspace the product already teaches |

Pick **one** frontend and **one** API language before Phase 4 starts. Dual options in the README are a decision still to make, not a dual-stack plan.

---

## Module boundaries (stable across v0 and v1)

These boundaries should survive a rewrite.

```
Identity        who the user is
Day             the calendar date being viewed
Routine         template of a repeating day
Tasks           variable work for one date
Health          water now; sleep / movement / mood later
Journal         prose for one date
Finance         money across the month (not only today)
Career          long-lived prep, lightly tied to today
History         read-model over days
Insights        derived, never stored as source of truth
Settings        user-shaped OS
```

**Write rules:**

- Routine *template* is not per-day. Routine *checks* are per-day.
- Finance budgets are monthly. Expenses may be daily.
- Career checklist is long-lived. Practice cards are ephemeral.
- Insights can be rebuilt from days. Do not persist them as facts.

---

## Sync model (future)

When a backend exists:

1. Each day-key is a document with field-level timestamps.
2. Conflict policy: **last-write-wins per field**, except journal (append-or-prompt, never silent clobber).
3. Routine template is a single document per user.
4. Clients keep a local cache that looks like today's `localStorage` map.
5. Export JSON remains a first-class feature — users can leave.

---

## Security and privacy

**v0**

- Data never leaves the browser unless the user exports JSON or uploads a bank CSV (parsed locally).
- Clearing data is destructive and must stay behind a confirm.

**v1**

- TLS everywhere
- JWT access + rotating refresh
- Journal and finance encrypted at rest if the host allows it
- CSV imports scanned and discarded after parse
- No analytics SDK that reads journal text

Nova stores the kind of data people would not post in Slack. Architecture should treat it that way.

---

## Performance budget (v0)

- First paint from a cold local open: under 1s on a laptop
- Module scripts are plain files, not bundled — keep the graph small
- History renders one week at a time, not the full `appData` map
- Charts instantiate only when their finance tab is opened

---

## What not to do

- Do not split workspaces into separate deployables in v1
- Do not put AI between the user and a checkbox
- Do not require an account to try the daily loop (a local guest mode should survive)
- Do not store bank passwords — CSV import is one-shot, not aggregation
