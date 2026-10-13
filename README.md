# MEHRUH

MEHRUH haute perfumery website.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — Start the local Next.js development server
- `npm run build` — Create an optimized production build
- `npm run start` — Start the production server
- `npm run verify` — Execute full verification gate (`tsc --noEmit && eslint . && next build && npm run progress:check`)
- `npm run test:e2e` — Run Playwright end-to-end smoke tests
- `npm run shots` — Capture visual regression screenshots across viewports
- `npm run progress:check` — Validate roadmap consistency in `docs/PROGRESS.md`

## Project Documentation & Governance

- [AGENTS.md](AGENTS.md) — Agent operating manual and definition of done
- [docs/SCOPE.md](docs/SCOPE.md) — Project boundaries and scope decisions
- [docs/PROGRESS.md](docs/PROGRESS.md) — Roadmap tasks, status tracking, and logs

Status: see docs/PROGRESS.md
