# Nova — Development Roadmap

This roadmap translates the [vision](./vision.md) into buildable phases. It is honest about what already exists in the local prototype and what is still product fiction.

Status key:

| Mark | Meaning |
|------|---------|
| Done | Shipped in the current local-first web app |
| Now | In progress or next to harden |
| Next | Planned for the following phase |
| Later | Intentionally deferred |

---

## Guiding rules

1. **Ship the daily loop first.** If Today, Schedule, Tasks, Water, and History are weak, nothing else matters.
2. **Do not add a backend until local truth is clean.** Schema, export, and day-rollover must be right before sync.
3. **Rebrand before platform rewrite.** The product is Nova. The running UI is still DayTrack. That gap closes in Phase 0.
4. **One workspace quality bar.** A new workspace ships only when it has empty states, persistence, and a history footprint.
5. **AI is Phase 4.** No model calls until the OS has enough structured life data to coach against.

---

## Phase 0 — Identity and foundation *(Now)*

Close the gap between the README brand and the running product.

- [ ] Rename the UI from DayTrack to Nova
- [ ] Replace leftover storage keys (`daytrack_*`) with a versioned `nova_*` namespace, with a one-time migration
- [ ] Add `docs/` as the product source of truth (this set)
- [ ] Add a real favicon, banner, and wordmark (see [branding.md](./branding.md))
- [ ] Document the current local schema (see [database.md](./database.md))
- [ ] Establish a changelog habit (see [changelog.md](./changelog.md))

**Exit:** A stranger can open the app and know it is Nova.

---

## Phase 1 — Daily operating loop

The minimum Life OS. Most of this already exists and needs product polish, not invention.

| Capability | Status | Notes |
|------------|--------|-------|
| Fixed daily schedule | Done | Time-blocked routine with check-off |
| Daily tasks (max 10) | Done | Category + priority |
| Water tracker (8 glasses) | Done | Sidebar + reminders |
| Task / water reminders | Done | Interval timers in the browser |
| Streak | Done | Shown in the top bar |
| Today completion ring | Done | Sidebar overall % |
| Dark / light theme | Done | Settings toggle |
| Name-based greeting | Done | Settings |
| JSON export / clear data | Done | Local only |
| Nova branding in UI | Now | Still DayTrack |
| Recurring tasks beyond the fixed routine | Next | Distinct from routine items |
| Priority matrix view | Next | Data already has priority |
| Calendar integration | Later | External calendars |

**Exit:** A user can run a full weekday in Nova without another to-do app.

---

## Phase 2 — Money, skill, and learning

Finance and career already have a strong prototype. This phase makes them durable and less personal-hardcoded.

| Capability | Status | Notes |
|------------|--------|-------|
| Daily spend log | Done | Categories, INR |
| Monthly budgets + remaining | Done | Income + category caps |
| Predictive burn-rate chart | Done | Chart.js |
| Trips & savings goals | Done | Travel mode vault |
| Subscriptions | Done | Ghost-sub warning |
| Investment projection | Done | 12% YoY compound chart |
| Bank CSV import (ICICI / HDFC) | Done | Client-side categorize |
| Career checklist | Done | Seeded DevOps / SDET path |
| Technical Q&A practice | Done | K8s, Jenkins, AWS, Git, SDET |
| Mock interview timer | Done | STAR-oriented tips |
| English fluency workspace | Done | Word / idiom + reading paragraph |
| Configurable career tracks | Next | Remove hardcoded job-switch path |
| Learning hub (vocab collections, reading tracker) | Next | English exists; hub does not |
| Skill roadmaps & milestones | Next | Career checklist is the seed |
| Subscription manager polish | Next | Renewal calendar |

**Exit:** Finance and career work for a second person without editing `js/data.js`.

---

## Phase 3 — Memory and insight

History exists as a weekly grid. This phase turns raw days into reviews.

| Capability | Status | Notes |
|------------|--------|-------|
| Weekly history grid | Done | Day cards + detail modal |
| Daily journal + prompts | Done | Autosave |
| Weekly review ritual | Next | Guided Sunday / Friday review |
| Monthly life report | Next | Health, money, tasks, career |
| Habit streaks beyond the global fire | Next | Per-habit |
| Sleep / exercise / mood | Next | Health dashboard expansion |
| Smart (rule-based) insights | Next | No model required |
| Vision board | Later | After reviews exist |

**Exit:** A user can explain last month from Nova alone.

---

## Phase 4 — Platform

Leave the single-HTML prototype. Keep the interaction model.

| Capability | Status | Notes |
|------------|--------|-------|
| Auth (OAuth + JWT) | Later | See [architecture.md](./architecture.md) |
| PostgreSQL + sync | Later | See [database.md](./database.md) |
| REST API | Later | See [api-design.md](./api-design.md) |
| Cross-device Today | Later | Conflict rule: last-write per day-key field |
| Push notifications | Later | Replace `setInterval` reminders |
| Mobile client (Flutter or React Native) | Later | Same workspaces, native chrome |
| Docker / CI | Later | After the API exists |

**Exit:** The same life data opens on phone and laptop.

---

## Phase 5 — AI coach

Only after Phases 1–3 produce structured history.

| Capability | Status | Notes |
|------------|--------|-------|
| Plan the day from routine + unfinished goals | Later | |
| Weekly progress review in language | Later | |
| Habit and budget recommendations | Later | Finance advisor copy already exists as rules |
| Learning-path suggestions | Later | |
| Voice commands | Later | After mobile |
| Smart scheduling | Later | Must never silently overwrite the user's routine |

**Constraint:** The coach proposes. The user commits. Nova does not auto-spend, auto-apply, or auto-reschedule without confirmation.

---

## Suggested sequence for the next 90 days

```
Week 1–2    Phase 0 rebrand + storage migration + docs living in repo
Week 3–5    Harden Phase 1: empty states, day rollover, reminder reliability
Week 6–8    Make finance and career configurable (Phase 2)
Week 9–10   Weekly review + monthly report (Phase 3 start)
Week 11–12  Health dashboard: sleep / mood / movement stubs
```

A backend is **out of scope** for this 90-day window unless sync becomes a blocker.

---

## Explicit non-goals (near term)

- Multiplayer or social feeds
- Public profile
- Marketplace of third-party workspaces
- Crypto, trading, or tax filing
- Replacing the user's bank
- Replacing LinkedIn, LeetCode, or a brokerage

---

## How this document changes

- When a phase item ships, move it to Done and add a line in [changelog.md](./changelog.md).
- When a new workspace is proposed, add it to [workspaces.md](./workspaces.md) *before* code.
- Dates are not promised. Order is.
