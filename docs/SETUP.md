# Install the kit

1. Copy into your project root: `AGENTS.md`, `.agents/`, `docs/`, `tests/`, `playwright.config.ts`.
2. Install tests: `npm i -D @playwright/test && npx playwright install chromium`
3. Add to `package.json` scripts:
```json
"verify": "tsc --noEmit && eslint . && next build",
"test:e2e": "playwright test --grep-invert screenshots",
"shots": "playwright test shots.spec.ts"
```
4. Every homepage `<section>` gets `data-section="hero|story|collection|statement|featured|newsletter|footer"`
   (the `Section` primitive in Phase 0 should do this automatically).
5. Add `tests/screenshots/` to `.gitignore`.
6. `git init` / commit before each task.

Antigravity notes (check against your version): workspace rules live in `.agents/rules/`,
workflows (slash commands) in `.agents/workflows/`, skills in `.agents/skills/<name>/SKILL.md`.
`AGENTS.md` at the root is read as the project instructions. The Playwright tests are
written but have not been run against your project, so expect to adjust selectors once.
