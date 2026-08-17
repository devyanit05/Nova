# Nova — UI / UX Principles

Nova should feel like a quiet desk at 6 a.m., not a growth-hacked consumer app. This is the design philosophy for every screen. Visual tokens live in [branding.md](./branding.md). Flows live in [user-flows.md](./user-flows.md).

---

## Product feeling

**Calm command.** The user sits down, sees the day, acts, leaves.

Not: infinite feed, badge counts, streaks used as guilt, confetti on every tap.

Celebration is reserved for *meaningful* completion (a full task list, a real streak milestone) — the prototype's confetti is a spice, not a food group.

---

## Principles

### 1. One day on the table

The primary surface is Today. History and Settings are exits, not homes. If a feature needs a sixth top-level nav item, it is probably a tab inside Today or it is too early.

### 2. Honesty over completeness

The 10-task cap, the 8-glass goal, and unchecked routine boxes are features. Do not "help" the user by auto-completing because the clock moved. A 40% ring that is true is better than a 100% ring that is theater.

### 3. Progressive presence

Show the next useful action, not the whole OS.

- Empty routine → one button to Settings
- Empty tasks → add first task
- Empty spend → log first expense
- Journal → a blinking cursor, not a tutorial carousel

### 4. Shared chrome, local work

Sidebar ring, water, streak, and greeting are always there so health and progress do not depend on remembering a tab. Workspace complexity (finance, career) hides behind inner tabs.

### 5. Write locally, confirm globally

Every check, glass, and rupee updates the chrome the user already sees. If the ring does not move, the click did not happen.

### 6. Private surfaces look private

Journal is a large text area, not a social composer. No share icon. No word-count gamification beyond a quiet character count. Finance amounts are readable in the app and hidden in lock-screen notifications later.

### 7. Density for operators, not for dashboards

The weekday operator lives in lists and time blocks. Charts appear when they explain a decision (burn rate, compound growth) — they are not the homepage.

### 8. Defaults that can be undone

Dark mode on, reminders on, seeded day — acceptable only if Settings can reverse them in one visit. Phase 2 must make seeds *opt-in* so a second person is not living someone else's timetable.

### 9. Motion is feedback, not entertainment

- Fast easing for toggles and tabs (`0.2s`)
- No page-flip animations that delay checking a box
- Toasts: appear, readable, dismiss, gone in ~7s
- Confetti: rare

### 10. Mobile is a first-class squeeze, not a separate product

The prototype already has a hamburger and a 260px sidebar. Touch targets for glasses, checks, and tabs must stay at least 44px. Horizontal inner tabs may scroll — they must not wrap into a confused brick.

---

## Layout grammar

```
┌──────── sidebar (260) ─────┬──────── main ────────────────┐
│ mark                       │ date          streak  hello  │
│ Today / History / Settings │                              │
│ ring + mini stats          │ [ workspace body ]           │
│ water glasses              │                              │
└────────────────────────────┴──────────────────────────────┘
```

- **Cards** wrap a workspace body: header, subtitle, actions, list, empty state
- **Tabs** are a single row of text + icon, one active underline/fill
- **Modals** for create/detail only (add task, history day). Not for routine check-off
- **Toasts** for reminders and confirmations, top of the stack, never blocking the list

---

## Component rules

| Component | Do | Don't |
|-----------|----|-------|
| Primary button | One per card header | Rainbow of primaries |
| Checkbox / glass | Immediate persist | Optimistic UI that rolls back silently |
| Form | Inline for expense; modal for task (more fields) | Multi-step wizards |
| Chart | One question ("will I burn the month?") | Dual-axis decoration |
| Empty state | Icon, one sentence, one action | Illustration essay |
| Danger | Clear data, destructive deletes | Red for ordinary subtract |

---

## Copy voice (UX writing)

Match [branding.md](./branding.md) tone.

- Subtitles explain *what this list is*, not the company's mission
- Errors name the rule: "You can have 10 tasks today — finish or remove one."
- Advisor lines in finance are suggestions, never moral verdicts
- No "Oops!" and no "Let's get this bread"

Good: `Fixed routine — these repeat every day.`  
Bad: `Unlock your legendary morning protocol!`

---

## Color in the interface

Color means state, not decoration spam.

| Token | Use |
|-------|-----|
| Accent purple | Primary actions, ring fill, focus |
| Cyan | Secondary accent, info, links |
| Green | Success, remaining money when healthy, completed |
| Amber | Warning, timer, streak heat |
| Red | Danger, overspend, ghost-sub warning |

Do not assign a unique neon to every task category. Category emoji + label is enough (already in the prototype).

Light theme is a first-class inversion of the same tokens, not a grey afterthought. Keep contrast on muted text (`#4a4a6a` on white).

---

## Feedback map

| Event | Feedback |
|-------|----------|
| Saved journal | Quiet "Saved" + time |
| Added task / expense | List insert + toast optional |
| Hit 10-task cap | Inline reason, no modal lecture |
| Completed all tasks | Confetti allowed once |
| Water reminder | Toast, not a blocking modal |
| Ghost subscriptions | Persistent banner in that tab only |
| Clear data | Confirm with consequence language |

---

## Accessibility

- Visible focus rings on tabs, buttons, glasses
- `aria-label` on icon-only controls
- Theme must not be the only way to read status
- Journal textarea is a real `<textarea>`, not a contenteditable div
- Charts need a numeric summary next to the canvas (month spent, 10y projection already do this)

---

## Anti-patterns

- Onboarding of more than one screen before Today
- Streak repair paywall
- Unread dots on Journal
- Auto-playing motivational video
- AI chat docked over the task list
- Skeleton loaders that last longer than localStorage reads (v0 should never skeleton)

---

## Review questions for any new UI

1. Can the weekday operator do this in under three taps from Today?
2. Does chrome (ring, water, spend) update?
3. Is there an honest empty state?
4. Would I be ashamed if this screen leaked on a train?
5. Did we add a nav item we will regret?
