# Nova — Changelog

Product evolution, written for humans. Newest first.

Convention: every user-visible change that ships gets a dated entry. Roadmap status updates belong in [roadmap.md](./roadmap.md); this file is what actually landed.

---

## Unreleased

### Repository

- Laid out the root as a full product repo: `docs/`, `design/`, `website/`, `app/`, `infrastructure/`, `database/`, `api/`, `research/`, `assets/`, `.github/`.
- Restored the DayTrack prototype into `app/frontend/` (it had been dropped from `master`).
- Added MIT `LICENSE`, expanded `.gitignore`, and GitHub issue / PR templates.

### Documentation

- Added the `docs/` set: vision, roadmap, architecture, workspaces, user-flows, database, API design, UI/UX principles, branding, monetization, and this changelog.

### Known gaps vs brand

- Running UI and `localStorage` keys still say **DayTrack**
- README banner asset is referenced but not in the tree
- Default routine, tasks, and career pack are author-specific

---

## 2026-08 — Nova named, prototype already a Life OS

**Brand**

- README rewritten around **Nova**: *A Life Operating System. Plan. Track. Grow.*
- Vision, planned features, and a four-phase roadmap published at repo root (now superseded in detail by `docs/`)

**Already in the web prototype (DayTrack shell)**

The app at this point is a local-first SPA (`index.html` + modular JS) with three nav views and five Today workspaces.

*Today — Schedule*

- Fixed daily routine with start/end times and categories
- Per-day check-off, progress `done / total`
- Settings manager to add items and reorder
- One-time seed of a full weekday timetable (`corrected_timetable_v2`)

*Today — Tasks*

- Up to 10 daily tasks
- Categories (health, work, learning, personal, social, creative, chores, skincare, haircare, nutrition, spiritual, finance, other)
- Priority low / medium / high
- New days seeded from `DEFAULT_TASKS`
- Progress bar and sidebar counts

*Health*

- 8-glass water tracker in the sidebar
- Click-to-set count
- Optional interval reminders (15–60 min)
- Optional task-progress reminders

*Journal*

- Daily textarea with autosave
- Prompts: gratitude, learnings, feelings, tomorrow
- Character count and saved indicator

*Finance*

- Daily transactions (INR) and today's total
- Monthly income, category budgets, remaining
- Predictive burn-rate chart (Chart.js)
- Rule-based finance advisor copy
- Trips & goals + Travel Mode
- Subscriptions + ghost-sub warning (>5% of income)
- Investment monthly total + 10-year 12% projection chart
- Client-side ICICI / HDFC CSV auto-categorization

*Career / Job Prep*

- Long-lived checklist (AWS, Jenkins, Kubernetes, IaC, SDET, Git, applications)
- Technical flashcards
- Mock interview scenarios with timer and expected points
- English fluency: idiom/vocab + read-aloud paragraph

*History & OS chrome*

- Weekly history grid and day-detail modal
- Overall completion ring
- Streak badge
- Time-of-day greeting + optional name
- Motivational quote banner
- Dark mode default, light theme toggle
- JSON export and clear-all-data
- Toasts and completion confetti
- Mobile sidebar toggle

*Persistence*

- `localStorage`: `daytrack_data`, `daytrack_settings`, `daytrack_routine`, `daytrack_career_checks`, `daytrack_finance_state`

---

## 2026 — Initial commit

- First version of the daily tracker prototype (later branded DayTrack in the UI, then Nova in the README)

---

## How to add an entry

```
## YYYY-MM-DD — Short title

### Added
- …

### Changed
- …

### Fixed
- …

### Removed
- …
```

If the change is only internal (refactor, docs typo), skip the changelog unless it alters a contract in `docs/`.
