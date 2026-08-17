# Nova app

The Life OS itself — the product people open every day.

```
app/
├── frontend/    Local-first web prototype (current)
└── backend/     API server (not started — see docs/api-design.md)
```

## Frontend

Vanilla HTML, CSS, and JavaScript. No build step.

Open `frontend/index.html` in a browser, or serve the folder:

```bash
npx serve app/frontend
```

Data stays in `localStorage`. Workspaces: Schedule, Tasks, Journal, Finance, Career, plus History and Settings.

Product contracts: [docs/workspaces.md](../docs/workspaces.md), [docs/architecture.md](../docs/architecture.md).

## Backend

Empty on purpose. When Phase 4 starts, this folder holds the Spring Boot or Node API described in [docs/api-design.md](../docs/api-design.md) and [docs/database.md](../docs/database.md).
