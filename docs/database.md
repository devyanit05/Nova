# Nova — Database Design

Nova v0 has no server database. Truth lives in **browser `localStorage`**. This document specifies that schema, the migration path, and the PostgreSQL model for Phase 4.

Related: [architecture.md](./architecture.md), [api-design.md](./api-design.md).

---

## Principles

1. **`YYYY-MM-DD` is the day primary key.** Use local calendar date, not UTC midnight, once timezone support lands.
2. **Templates vs instances.** Routine *items* are a template. Routine *checks* belong to a day.
3. **Workspace extras must not break the day.** Unknown fields are ignored, never fatal.
4. **Every persisted blob has a `schemaVersion`.** v0 does not — add it before any rename.
5. **Export is a full logical dump.** A user can rebuild their life from one JSON file.

---

## v0 — localStorage

### Keys

| Key | Type | Contents |
|-----|------|----------|
| `daytrack_data` | `Record<date, DayRecord>` | All days |
| `daytrack_settings` | `Settings` | Preferences |
| `daytrack_routine` | `RoutineItem[]` | Repeating schedule |
| `daytrack_career_checks` | `Record<id, boolean>` | Career milestone ticks |
| `daytrack_finance_state` | `FinanceState` | Money OS |
| `corrected_timetable_v2` | `"true"` | One-shot seed flag |

Phase 0 rename: `nova_data`, `nova_settings`, `nova_routine`, `nova_career_checks`, `nova_finance`, `nova_meta`. Read old keys once, write new keys, then stop writing `daytrack_*`.

### DayRecord

```json
{
  "tasks": [
    {
      "name": "Walk for 30 mins",
      "category": "health",
      "priority": "high",
      "completed": false,
      "createdAt": "2026-08-17T08:00:00.000Z"
    }
  ],
  "waterCount": 3,
  "routineChecks": { "rt_1": true, "rt_2": false },
  "journal": "Grateful for...",
  "expenses": [
    {
      "desc": "Lunch",
      "amount": 180,
      "category": "food",
      "createdAt": "2026-08-17T13:40:00.000Z"
    }
  ]
}
```

Constraints:

- `tasks.length` ≤ 10
- `waterCount` integer 0–8
- `amount` ≥ 0
- Missing arrays/objects are hydrated on read (`getTodayData`)

### Settings

```json
{
  "userName": "Devyani",
  "waterReminder": true,
  "waterInterval": 30,
  "taskReminder": true,
  "darkMode": true
}
```

### RoutineItem

```json
{
  "id": "rt_4",
  "time": "09:30",
  "endTime": "10:30",
  "name": "Analyze Runs, Mark Excel",
  "category": "work"
}
```

`time` / `endTime` are `HH:mm` 24-hour strings. `endTime` may be earlier than `time` (overnight).

### FinanceState

```json
{
  "monthlyIncome": 50000,
  "budgets": {
    "investments": 12500,
    "ppf": 2000,
    "rent": 6000,
    "fuel": 1000,
    "swimming": 3000,
    "emergency": 5000,
    "food": 8000,
    "transport": 2000,
    "shopping": 4000,
    "bills": 2000,
    "entertainment": 2000,
    "health": 1000,
    "education": 500,
    "other": 1000
  },
  "upcoming": [
    {
      "name": "Goa Trip",
      "target": 20000,
      "month": "2026-12"
    }
  ]
}
```

Subscriptions, travel mode, and investment display state live in the finance module's runtime object. Phase 0 should fold them into this document as first-class fields:

```json
{
  "travelMode": false,
  "subscriptions": [{ "id": "sub_1", "name": "…", "amount": 199, "cycle": "monthly" }],
  "goals": [{ "id": "g1", "name": "Goa Trip", "target": 20000, "month": "2026-12", "vault": 0 }]
}
```

### Career checks

```json
{ "c1": true, "c3": false }
```

Keys match `CAREER_MILESTONES[].id` in `js/data.js`. Content is not stored — only ticks.

### Suggested `nova_meta`

```json
{
  "schemaVersion": 1,
  "seededTimetable": false,
  "createdAt": "2026-08-17T00:00:00.000Z"
}
```

---

## Day lifecycle

```
Read today
  if date key missing
    create DayRecord
    copy DEFAULT_TASKS → tasks (completed: false)
    waterCount = 0
    routineChecks = {}
    journal = ""
    expenses = []
    persist
```

There is no automatic archival. Old keys remain in `daytrack_data` until the user clears data.

---

## v1 — PostgreSQL

One user owns many days. Workspaces that are not per-day get their own tables.

### Identity

```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY,
  email         CITEXT UNIQUE,
  display_name  TEXT NOT NULL DEFAULT '',
  timezone      TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE user_settings (
  user_id         UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  water_reminder  BOOLEAN NOT NULL DEFAULT true,
  water_interval  SMALLINT NOT NULL DEFAULT 30,
  task_reminder   BOOLEAN NOT NULL DEFAULT true,
  dark_mode       BOOLEAN NOT NULL DEFAULT true,
  schema_version  INT NOT NULL DEFAULT 1
);
```

### Days and child rows

```sql
CREATE TABLE days (
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date        DATE NOT NULL,
  water_count SMALLINT NOT NULL DEFAULT 0 CHECK (water_count BETWEEN 0 AND 20),
  journal     TEXT NOT NULL DEFAULT '',
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, date)
);

CREATE TABLE tasks (
  id          UUID PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date        DATE NOT NULL,
  name        TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  category    TEXT NOT NULL,
  priority    TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high')),
  completed   BOOLEAN NOT NULL DEFAULT false,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  FOREIGN KEY (user_id, date) REFERENCES days(user_id, date) ON DELETE CASCADE
);

CREATE UNIQUE INDEX tasks_user_date_id ON tasks (user_id, date, id);

-- Enforce max 10 tasks per day
-- (application-level + optional trigger)
```

### Routine

```sql
CREATE TABLE routine_items (
  id         UUID PRIMARY KEY,
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  sort_order INT NOT NULL,
  start_time TIME NOT NULL,
  end_time   TIME,
  name       TEXT NOT NULL,
  category   TEXT NOT NULL DEFAULT 'personal'
);

CREATE TABLE routine_checks (
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date       DATE NOT NULL,
  item_id    UUID NOT NULL REFERENCES routine_items(id) ON DELETE CASCADE,
  checked    BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (user_id, date, item_id)
);
```

Deleting a routine item removes future meaning; historical checks may SET NULL or keep a snapshot name on the check row in a later migration.

### Finance

```sql
CREATE TABLE finance_profile (
  user_id         UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  monthly_income  NUMERIC(12,2) NOT NULL DEFAULT 0,
  currency        CHAR(3) NOT NULL DEFAULT 'INR',
  travel_mode     BOOLEAN NOT NULL DEFAULT false,
  budgets         JSONB NOT NULL DEFAULT '{}'
);

CREATE TABLE expenses (
  id          UUID PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date        DATE NOT NULL,
  description TEXT NOT NULL,
  amount      NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
  category    TEXT NOT NULL,
  goal_id     UUID REFERENCES finance_goals(id),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE finance_goals (
  id         UUID PRIMARY KEY,
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  target     NUMERIC(12,2) NOT NULL,
  month      DATE,
  vault      NUMERIC(12,2) NOT NULL DEFAULT 0
);

CREATE TABLE subscriptions (
  id      UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name    TEXT NOT NULL,
  amount  NUMERIC(12,2) NOT NULL,
  cycle   TEXT NOT NULL DEFAULT 'monthly'
);
```

### Career

```sql
CREATE TABLE career_tracks (
  id      UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title   TEXT NOT NULL,
  pack    JSONB NOT NULL
);

CREATE TABLE career_checks (
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  milestone_id TEXT NOT NULL,
  checked      BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (user_id, milestone_id)
);
```

Practice questions stay in content packs (`pack` JSON or a CMS), not in transactional tables.

### History / reviews (Phase 3)

```sql
CREATE TABLE weekly_reviews (
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week_start DATE NOT NULL,
  wins       TEXT,
  leak       TEXT,
  next_focus TEXT,
  PRIMARY KEY (user_id, week_start)
);
```

---

## Indexes (v1)

- `expenses (user_id, date)`
- `tasks (user_id, date)`
- `days (user_id, date DESC)` for history pagination
- `subscriptions (user_id)`

---

## Derived data (do not persist as source)

| Derived | From |
|---------|------|
| Today completion % | routine checks + task completions |
| Streak | consecutive dates with activity |
| Month spent | sum of expenses in calendar month |
| Remaining | income − month spent |
| 10-year investment projection | monthly invested × compound assumption |
| Ghost-sub warning | sum(subs) / income |

Rebuild on read. Cache in Redis later if needed.

---

## Migration from v0 → v1

1. User authenticates
2. Client PUT `/v1/import` with the export JSON
3. Server validates `schemaVersion`, rejects unknown critical types
4. Days upserted by `(user_id, date)`
5. Client keeps local cache; server wins on `updated_at` except journal (prompt)

---

## Retention and deletion

- Clear All Data (v0): drop all keys
- Account delete (v1): cascade user row; object storage exports deleted within 30 days
- Journal and finance are in the same database — no "anonymous telemetry" table gets a copy

---

## What we will not store

- Bank login credentials
- Raw CSV files after import
- Card numbers
- Journal embeddings unless the user opts into AI and we disclose it
- Location trails
