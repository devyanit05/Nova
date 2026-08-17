# Learning

Parent: [workspaces.md](../workspaces.md)

**Question:** What did I learn today?

Learning is continuous, personal education — language, courses, books, and recall. Career *uses* learning; this workspace *is* learning.

---

## Purpose

Progress that is never written down did not happen. Learning makes a daily mark and a long collection, without turning Nova into Notion.

---

## Living template

| Area | Default objects |
|------|-----------------|
| Daily learning | One visible item for today (word, pages, lesson) |
| Vocabulary | Words |
| Phrases / idioms / proverbs | Collections |
| Flashcards | Decks with reveal |
| Reading tracker | Book, pages, cadence |
| Courses | Name, status, next action |
| Notes | Short, attached to an item — not a second Drive |

---

## Surfaces

### English fluency (exists, misplaced)

v0 lives under Job Prep. It belongs here.

- Word / idiom of the session
- Meaning + example sentence
- Read-aloud paragraph
- Next exercise

Career may deep-link: "use this word in a mock answer."

### Hub (planned)

Collections, reading tracker, course list, daily learning checkbox that feeds Dashboard.

---

## Prototype map (v0)

| Intended | Today in DayTrack |
|----------|-------------------|
| English fluency | `Job Prep` → English tab (`ENGLISH_EXERCISES`) |
| Vocabulary collections | Not built |
| Reading tracker | Not built |
| Courses | Not built |
| Daily learning mark | Not a first-class day field |

---

## Data

| Object | Lifetime |
|--------|----------|
| Content packs (words, cards) | Long-lived / shipped templates |
| Daily learning mark + optional note | Per day |
| Books, courses, custom decks | Long-lived |
| Career technical cards | Stay in [Career](./career.md) packs |

Do not merge K8s interview flashcards into "vocabulary" just to have one table.

---

## Rules

- A blank day in Learning is valid; do not shame an empty streak here more than elsewhere
- Notes are captions on learning objects, not a general wiki ([PRD](../product-requirements.md) non-goal: Notion)
- Export must include user-created cards and reading progress

---

## Out of scope

- Replacing Kindle, Coursera, or Anki as full products
- Social leaderboards
- AI that writes "what I learned" into the journal without asking
