# Career

Parent: [workspaces.md](../workspaces.md)

**Question:** Am I growing professionally?

Career is structured professional growth — goals, evidence, and practice — not a copy of the Life task list.

---

## Purpose

A weekday can be "busy at work" and still have zero career motion. This workspace makes growth visible: applications, skills, interviews, proof.

---

## Living template

| Area | Default objects |
|------|-----------------|
| Career goals | Long-horizon outcomes |
| Resume | Living highlight list (not a Word clone) |
| Certifications | Name, status, date |
| Projects | Portfolio / impact notes |
| Learning roadmap | Phased skills (may deep-link to [Learning](./learning.md)) |
| Interview tracker | Roles, stages, dates |
| Applications | e.g. "apply to N roles" as a cadence, not a guilt counter |
| Networking | Later |
| Reading lists | Professional reading — or file in Learning |

v0 is opinionated: DevOps / SDET / AWS / Kubernetes. That pack is a **template**, not the product.

**Phase 2 requirement:** Tracks are data. A teacher, a designer, or a civil-service candidate loads a different pack without a code change.

---

## Surfaces

| Surface | Behavior |
|---------|----------|
| Career checklist | Long-lived milestones; header `done / total` |
| Technical prep | Flashcard: topic, question, reveal, next |
| Mock interview | Scenario + timer + expected points (STAR-friendly) |
| Interview tracker | Roles and stages (planned; v0 is practice-only) |
| Resume / certs / projects | Planned structured lists |

English fluency practice **moved** to [Learning](./learning.md). Career may link "use today's word in a mock answer."

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| Checklist | `Job Prep` → Career Checklist (`CAREER_MILESTONES`) |
| Technical prep | Technical tab (`PRACTICE_QUESTIONS`) |
| Mock interview | Interview tab (`MOCK_INTERVIEWS` + timer) |
| English | Still under Job Prep — relocate to Learning |
| Resume, certs, applications tracker | Checklist *titles* only, not first-class objects |
| Configurable tracks | Not built — content in `app/frontend/js/data.js` |

---

## Data

| Object | Lifetime |
|--------|----------|
| Active track / pack | Long-lived |
| Checklist ticks | Long-lived (`careerChecks[id]`) — not per-day |
| Practice cards | Content pack; draws are ephemeral |
| Applications / interviews | Long-lived (planned) |

Practice history is optional later. Do not treat a flashcard flip as a Life task.

---

## Rules

- Checklist items are milestones, not today's chores
- The coach (future) may *suggest* a drill; it does not tick a milestone
- Progress on Career may feed the Dashboard score; it does not replace Life completion

---

## Out of scope

- Replacing LinkedIn
- Replacing LeetCode as a full judge
- Auto-applying to jobs
- Public profile
