# Nova — REST API Design

The current app has **no API**. Everything is local. This document is the contract for Phase 4 so clients and a future server can be built without inventing resource shapes twice.

Canonical resources follow [database.md](./database.md). Interaction rules follow [user-flows.md](./user-flows.md).

---

## Conventions

| Topic | Rule |
|-------|------|
| Base | `https://api.nova.app/v1` |
| Format | JSON, UTF-8 |
| Dates | `YYYY-MM-DD` in the **user timezone** |
| Times | `HH:mm` 24-hour for routine; ISO-8601 for timestamps |
| Money | string decimal `"180.00"` + `currency` on the profile (`INR`) |
| Auth | `Authorization: Bearer <access_jwt>` |
| Errors | `{ "error": { "code": "TASK_LIMIT", "message": "…" } }` |
| Idempotency | `Idempotency-Key` on all POST that create money or days |
| Pagination | `?cursor=` + `limit=` (default 20, max 100) |

Success envelopes:

```json
{ "data": { } }
```

Lists:

```json
{ "data": [ ], "nextCursor": null }
```

---

## Status codes

| Code | When |
|------|------|
| 200 | GET / PATCH success |
| 201 | POST created |
| 204 | DELETE success |
| 400 | Validation |
| 401 | Missing / expired token |
| 403 | Authenticated but not allowed |
| 404 | Unknown id or day |
| 409 | Streak/day conflict, duplicate idempotency replay mismatch |
| 422 | Semantic rule (11th task, water > cap) |

---

## Auth

```
POST /v1/auth/oauth
  body: { "provider": "google" | "apple", "idToken": "…" }
  → { "data": { "accessToken": "…", "refreshToken": "…", "user": { "id", "email", "displayName" } } }

POST /v1/auth/refresh
  body: { "refreshToken": "…" }

POST /v1/auth/logout
```

Guest / local-only mode has no these routes. Sync starts after the first successful OAuth.

---

## Users and settings

```
GET  /v1/me
PATCH /v1/me
  body: { "displayName": "Devyani", "timezone": "Asia/Kolkata" }

GET  /v1/me/settings
PATCH /v1/me/settings
  body: { "waterReminder": true, "waterInterval": 30, "taskReminder": true, "darkMode": true }
```

---

## Days

A day is created implicitly on first write, or explicitly:

```
GET /v1/days/:date
  → Day + embedded summary (water, task counts, spend total)

PUT /v1/days/:date
  body: { "waterCount": 3, "journal": "…" }
  If missing, server creates a blank day (no seeded personal tasks).

GET /v1/days?from=2026-08-11&to=2026-08-17
  → week payload for History
```

`GET /v1/days/:date` returns 200 with an empty day document if none exists, **or** 404. Choose **200 + empty** so clients can open Today offline-first without a create race. Document the choice in the first server implementation and do not change it.

Recommended empty day:

```json
{
  "date": "2026-08-17",
  "waterCount": 0,
  "journal": "",
  "tasks": [],
  "routineChecks": [],
  "expenses": [],
  "exists": false
}
```

---

## Tasks

```
GET    /v1/days/:date/tasks
POST   /v1/days/:date/tasks
  body: { "name": "Read 15 pages", "category": "learning", "priority": "medium" }
  422 TASK_LIMIT if 10 already exist

PATCH  /v1/tasks/:id
  body: { "completed": true } | { "name": "…" } | { "priority": "high" }

DELETE /v1/tasks/:id
```

No move-between-days in v1.

---

## Routine

```
GET   /v1/routine
PUT   /v1/routine
  body: { "items": [ { "id?", "startTime": "05:30", "endTime": "06:00", "name": "…", "category": "personal" } ] }
  Full replace, ordered array. Simpler than PATCH-for-reorder.

POST  /v1/days/:date/routine-checks
  body: { "itemId": "…", "checked": true }
```

`PUT /v1/routine` does not rewrite historical check rows.

---

## Journal

Journal is a field on the day. Dedicated route for conflict handling:

```
GET   /v1/days/:date/journal
PUT   /v1/days/:date/journal
  body: { "text": "…", "baseUpdatedAt": "2026-08-17T16:01:00Z" }
  409 JOURNAL_CONFLICT if server updated_at ≠ baseUpdatedAt
  body on 409: { "serverText": "…", "serverUpdatedAt": "…" }
```

Clients must not last-write-wins a journal silently.

---

## Finance

```
GET   /v1/finance/profile
PATCH /v1/finance/profile
  body: { "monthlyIncome": "50000.00", "budgets": { "food": "8000.00" }, "travelMode": false }

GET   /v1/finance/expenses?from=&to=&category=
POST  /v1/finance/expenses
  body: { "date": "2026-08-17", "description": "Lunch", "amount": "180.00", "category": "food", "goalId": null }

PATCH /v1/finance/expenses/:id
DELETE /v1/finance/expenses/:id

GET   /v1/finance/summary?month=2026-08
  → { income, spent, remaining, byCategory[], burnRate[] }

GET    /v1/finance/goals
POST   /v1/finance/goals
PATCH  /v1/finance/goals/:id
DELETE /v1/finance/goals/:id

GET    /v1/finance/subscriptions
POST   /v1/finance/subscriptions
PATCH  /v1/finance/subscriptions/:id
DELETE /v1/finance/subscriptions/:id

GET /v1/finance/investments/projection?rate=0.12&years=10
  derived; not stored
```

CSV import:

```
POST /v1/finance/imports/csv
  multipart file (max 2 MB)
  → { "data": { "preview": [ { "description", "amount", "date", "suggestedCategory" } ] } }

POST /v1/finance/imports/csv/commit
  body: { "rows": [ { …, "category": "food" } ] }
```

Server must not retain the raw file after commit or abandon.

---

## Career

```
GET   /v1/career/track
PUT   /v1/career/track
  body: { "title": "DevOps / SDET", "milestones": [ { "id": "c1", "title": "…" } ] }

GET   /v1/career/checks
PUT   /v1/career/checks/:milestoneId
  body: { "checked": true }

GET   /v1/career/practice?kind=technical|interview|english
  → one random (or next) card from the active pack
```

Practice draws are not persisted unless we add a "history of drills" in a later version.

---

## History and insights

```
GET /v1/history/weeks?offset=0
  → seven day summaries + range label

GET /v1/insights/today
  → rule-based copy (burn rate, ghost subs, unfinished high-priority tasks)
```

Phase 5 AI:

```
POST /v1/coach/plan-day
  body: { "date": "2026-08-17" }
  → { "suggestions": [ { "type": "task", "name": "…", "reason": "…" } ] }
```

The coach never writes tasks or expenses itself. The client applies suggestions through the normal POST routes.

---

## Import / export

```
GET /v1/export
  → application/json  (same logical shape as Settings → Export)

POST /v1/import
  body: <export document>
  → { "data": { "days": 42, "skipped": 0 } }
```

---

## Error codes (stable)

| Code | HTTP | Meaning |
|------|------|---------|
| `UNAUTHENTICATED` | 401 | No / bad token |
| `VALIDATION` | 400 | Field-level issues in `details[]` |
| `TASK_LIMIT` | 422 | More than 10 tasks |
| `WATER_RANGE` | 422 | waterCount outside 0–20 |
| `JOURNAL_CONFLICT` | 409 | Stale journal put |
| `NOT_FOUND` | 404 | |
| `IMPORT_SCHEMA` | 400 | Unknown or broken export |

---

## Example: complete a task

```
PATCH /v1/tasks/2b1c0a44-…
Content-Type: application/json
Authorization: Bearer …

{ "completed": true }
```

```json
{
  "data": {
    "id": "2b1c0a44-…",
    "date": "2026-08-17",
    "name": "Walk for 30 mins",
    "category": "health",
    "priority": "high",
    "completed": true,
    "createdAt": "2026-08-17T02:30:00.000Z"
  }
}
```

---

## Versioning

- URL version `/v1` only when breaking
- Additive fields are not breaking
- Removing a category string is breaking; deprecate for one version

---

## What the API will not do

- Serve ads
- Accept bank passwords
- Expose another user's day
- Provide a public user directory
- Stream journal text to third-party model providers without a separate, explicit coach route and disclosure
