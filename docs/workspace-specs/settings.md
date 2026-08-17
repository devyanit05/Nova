# Settings

Parent: [workspaces.md](../workspaces.md)

**Question:** How should this OS fit me?

Settings is where the user shapes Nova. It is a workspace in the nav because identity, data, and the repeating day are part of the OS — not a buried gear icon with forty pages.

---

## Purpose

Defaults should be undoable in one visit. A Life OS that cannot be named, themed, exported, or emptied is not personal.

---

## Surfaces

| Group | Controls |
|-------|----------|
| Daily schedule | Add routine line (name + time), reorder, persist template — see [Life](./life.md) |
| Reminders | Water on/off, interval, task-progress on/off |
| Personalization | Display name for greeting |
| Appearance | Dark mode (default on) |
| Workspaces | Later: hide, reorder, duplicate, add custom workspace |
| Data | Export JSON, clear all data |
| Account | Later: auth, devices, delete account |

v0: the routine manager is the **only** place the repeating day is edited.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Routine manager | Settings group |
| Reminders, name, theme | Settings groups |
| Export / clear | Settings → Data |
| Workspace library | Not built |
| Account | No auth |

---

## Data

Long-lived only: `settings`, routine template, (later) workspace layout.

Settings does not write the day record except indirectly (reminders fire; routine edits change what *appears* today).

---

## Rules

- Clear data requires confirmation and consequence language
- Export is a user right, not a power-user easter egg
- Theme is not a paid unlock ([monetization.md](../monetization.md))
- First-run seeds (timetable, default tasks, finance, career pack) must be reversible here
- Quiet hours (future) should follow a sleep block if the user has one

---

## Out of scope

- A settings search page before there are twenty groups
- Per-workspace micro-billing
- Selling streak freezes
- Analytics SDKs that read journal text
