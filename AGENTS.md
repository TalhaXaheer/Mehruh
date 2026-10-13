# MEHRUH — Agent Operating Manual

MEHRUH is a luxury haute-perfumery brand site (Next.js + TypeScript + Tailwind).
Feel: luxury perfume campaign + cinematic storytelling + premium ecommerce.
NOT: Shopify template, generic React template, "AI-looking" site.

Read in this order before ANY task:
1. `docs/PLAN.md`            – architecture + roadmap + current phase
2. `docs/SCOPE.md`           – project boundaries and decisions
3. `docs/PROGRESS.md`        – roadmap tasks and current status
4. `docs/DESIGN_SYSTEM.md`   – tokens, type, spacing, motion (the only source of visual truth)
5. `.agents/rules/*`          – hard rules (always on)
6. `.agents/rules/07-git-and-github.md` – git hygiene and phase-end push protocol
7. The matching skill in `.agents/skills/*`

## The 9 non-negotiables
1. **Plan first, code second.** Post a short plan (files to touch, what will NOT change) and wait for approval on anything larger than a single-file fix.
2. **Stay in scope.** Touch only files named in the task. No drive-by refactors, renames, reformatting, or "improvements".
3. **No new dependencies** without asking. Check `package.json` first and use what exists.
4. **Tokens only.** No hard-coded colors, font sizes, or spacings in components. Use `docs/DESIGN_SYSTEM.md` tokens.
5. **Never invent brand facts.** Addresses, shipping promises, prices, notes, awards, locations are PLACEHOLDERS and must live in `src/content/` flagged `// TODO(client)`.
6. **Never fake media.** No generated/stock substitutes for the client's video or photography. Use the specified path + a fallback.
7. **Prove it.** A task is not done until `npm run verify` passes AND you attach screenshots at 375 / 768 / 1440 (see `visual-qa` skill). "Looks good" without evidence is a failed task.
8. **Keep docs/PROGRESS.md truthful (rule 06).**
9. **Push to GitHub only at the end of a completed phase, following rule 07. Never force-push.**

## Definition of Done (paste into every task report)
- [ ] Only the agreed files changed (list them)
- [ ] `npm run verify` green (typecheck + eslint + build + progress:check)
- [ ] `npm run test:e2e` green
- [ ] Screenshots 375/768/1440 attached for every changed section
- [ ] No console errors/warnings, no horizontal scroll, no layout shift on load
- [ ] `prefers-reduced-motion` respected
- [ ] Anything uncertain is listed under "Open questions", not silently guessed
- [ ] docs/PROGRESS.md updated (`npm run progress:check` passes)

## Framework notes (from original AGENTS.md)
<!-- BEGIN:nextjs-agent-rules -->

### This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
