**Current phase:** Setup
**Next task:** A1
**Last updated:** 2026-10-12
**Done:** 4 / 45

## Status key
- **TODO:** Work is queued and not yet started.
- **IN PROGRESS:** Work is actively underway.
- **REVIEW:** Work is completed but held for explicit owner sign-off (visual or decision gate).
- **DONE:** All verification gates, tests, and documentation updates have passed.
- **BLOCKED:** Task cannot move forward due to an external asset or owner dependency.
- **SKIPPED:** Task was intentionally bypassed with documented owner consent.

## How this file is maintained
- The agent updates this file at the start and end of every single task.
- Tasks are marked DONE only after `npm run verify` and `npm run test:e2e` pass cleanly.
- Tasks with a visual gate end in REVIEW status until explicitly accepted by the owner.
- Incidental issues noticed outside of the task scope are logged directly in the Observations backlog.
- Historical task rows are permanent records and must never be rewritten or modified retroactively.

## Phase summary
| Phase | Name | Done | Total | Status |
|---|---|---|---|---|
| Setup | Setup | 4 | 4 | DONE |
| A | Baseline & Bootstrap | 0 | 4 | TODO |
| 0 | Foundations | 0 | 6 | TODO |
| 1 | Hero | 0 | 5 | TODO |
| 2 | Story & Collection | 0 | 5 | TODO |
| 3 | Editorial & Atmosphere | 0 | 4 | TODO |
| 4 | Motion & Polish | 0 | 3 | TODO |
| 5 | Commerce | 0 | 4 | TODO |
| 6 | Subpages | 0 | 4 | TODO |
| 7 | Release Hardening | 0 | 6 | TODO |

## Tasks
| ID | Phase | Task | Gate | Depends | Status | Updated | Commit message | Hash | Verify | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| I0 | Setup | Install agent kit and verification tooling | auto | - | DONE | 2026-10-12 | chore: install MEHRUH agent kit and verification tooling | a52754f | tsc+build+e2e PASS; eslint had 7 pre-existing errors | Snapshot commit 658a6b7 before install |
| T1 | Setup | Create SCOPE.md and PROGRESS.md | auto | I0 | DONE | 2026-10-12 | docs: add SCOPE and PROGRESS tracking | d4dc516 | - | - |
| T2 | Setup | Add progress-tracking rule and update kit docs | auto | T1 | DONE | 2026-10-12 | chore: add progress tracking rule | 4074c4b | docs only | - |
| T3 | Setup | Progress check script wired into verify | auto | T2 | DONE | 2026-10-12 | chore: progress check script | - | progress:check OK; negative test caught 3/3 errors | - |
| A1 | A | Baseline cleanup: lint errors, single h1, accessible cart drawer, strict tests | auto | T3 | TODO | - | - | - | - | - |
| A2 | A | Session bootstrap rule | auto | A1 | TODO | - | - | - | - | - |
| A3 | A | Compliance test ("fix the hero") | visual | A2 | TODO | - | - | - | - | (manual by owner) |
| A4 | A | Record decisions and placeholder config (PKR, Pakistan data) | auto | A3 | TODO | - | - | - | - | - |
| 0.1 | 0 | Design tokens (Tailwind v4 @theme) | visual | A4 | TODO | - | - | - | - | - |
| 0.2 | 0 | Layout primitives (Container, Section, Eyebrow, Button, TextLink) | visual | 0.1 | TODO | - | - | - | - | - |
| 0.3 | 0 | Transparent monogram (review only) | decision | 0.2 | TODO | - | - | - | - | needs asset from owner |
| 0.4 | 0 | Navbar rebuild and logo swap | visual | 0.3 | TODO | - | - | - | - | - |
| 0.5 | 0 | Wrap homepage sections with Section primitive | auto | 0.4 | TODO | - | - | - | - | - |
| 0.6 | 0 | Phase 0 design review gate | visual | 0.5 | TODO | - | - | - | - | - |
| 1.1 | 1 | Hero video component and fallbacks | decision | 0.6 | TODO | - | - | - | - | needs hero video from owner |
| 1.2 | 1 | Hero overlay and text composition | visual | 1.1 | TODO | - | - | - | - | - |
| 1.3 | 1 | Hero CTA hover and scroll cue | visual | 1.2 | TODO | - | - | - | - | - |
| 1.4 | 1 | Intro to hero entrance sequence | visual | 1.3 | TODO | - | - | - | - | - |
| 1.5 | 1 | Hero acceptance review | visual | 1.4 | TODO | - | - | - | - | - |
| 2.1 | 2 | Brand story section | visual | 1.5 | TODO | - | - | - | - | better image preferred |
| 2.2 | 2 | Collection intro and transition | visual | 2.1 | TODO | - | - | - | - | - |
| 2.3 | 2 | Product data (PKR) and ProductCard | visual | 2.2 | TODO | - | - | - | - | - |
| 2.4 | 2 | Collection grid | visual | 2.3 | TODO | - | - | - | - | - |
| 2.5 | 2 | Phase 2 review gate | visual | 2.4 | TODO | - | - | - | - | - |
| 3.1 | 3 | Brand statement | visual | 2.5 | TODO | - | - | - | - | - |
| 3.2 | 3 | Featured fragrance (sand section) | visual | 3.1 | TODO | - | - | - | - | - |
| 3.3 | 3 | Newsletter | visual | 3.2 | TODO | - | - | - | - | - |
| 3.4 | 3 | Slim footer | visual | 3.3 | TODO | - | - | - | - | - |
| 4.1 | 4 | Motion consistency audit | auto | 3.4 | TODO | - | - | - | - | - |
| 4.2 | 4 | Motion fixes | visual | 4.1 | TODO | - | - | - | - | - |
| 4.3 | 4 | Whole-page review | visual | 4.2 | TODO | - | - | - | - | - |
| 5.1 | 5 | Unified cart store | visual | 4.3 | TODO | - | - | - | - | - |
| 5.2 | 5 | Cart drawer content | visual | 5.1 | TODO | - | - | - | - | - |
| 5.3 | 5 | Product detail page | visual | 5.2 | TODO | - | - | - | - | - |
| 5.4 | 5 | Checkout options document (no integration) | auto | 5.3 | TODO | - | - | - | - | - |
| 6.1 | 6 | Collection page | visual | 5.4 | TODO | - | - | - | - | - |
| 6.2 | 6 | Our Story page | visual | 6.1 | TODO | - | - | - | - | - |
| 6.3 | 6 | Journal | visual | 6.2 | TODO | - | - | - | - | - |
| 6.4 | 6 | Legal, support pages and 404 | visual | 6.3 | TODO | - | - | - | - | - |
| 7.1 | 7 | SEO and metadata | auto | 6.4 | TODO | - | - | - | - | - |
| 7.2 | 7 | Performance pass | visual | 7.1 | TODO | - | - | - | - | - |
| 7.3 | 7 | Accessibility audit and fixes | visual | 7.2 | TODO | - | - | - | - | - |
| 7.4 | 7 | Device test sheet (owner tests on devices) | decision | 7.3 | TODO | - | - | - | - | - |
| 7.5 | 7 | Pre-release clean-up | auto | 7.4 | TODO | - | - | - | - | - |
| 7.6 | 7 | Final acceptance review | decision | 7.5 | TODO | - | - | - | - | - |

## Fix log
| ID | Date | Description | Files | Commit message | Hash |
|---|---|---|---|---|---|

## Observations backlog
| ID | Found in task | Observation | Severity | Status | Linked task |
|---|---|---|---|---|---|
| OBS-1 | I0 | 12 ESLint warnings in src/ (list in A1 report) | low | open | A1 |
| OBS-2 | review | Story image is low resolution and contains baked-in text | med | open | 2.1 |
| OBS-3 | review | Footer contains invented claims (London/Dubai addresses, insured dispatch) | med | planned | 3.4 |
| OBS-4 | review | Prices shown in USD; must be PKR | med | planned | 2.3 |

## Blockers and open questions
| ID | Question | Needed by task | Owner | Status |
|---|---|---|---|---|
| Q-1 | Clean monogram SVG/PNG | 0.3 | client | open |
| Q-2 | Hero video file(s) | 1.1 | client | open |
| Q-3 | High-res story image | 2.1 | client | open |
| Q-4 | Real contact/location/social details (placeholders in use) | 3.4 | client | open |
| Q-5 | Checkout path decision (deferred) | 5.4+ | client | open |

## Session log
- **2026-10-12:** Task T3 completed. Added progress check script (scripts/check-progress.mjs), wired into package.json verify gate, verified with positive and negative tests. Commit "chore: progress check script".
- **2026-10-12:** Task T2 completed. Added progress-tracking rule 06 and updated kit governance docs. Commit "chore: add progress tracking rule".
- **2026-10-12:** Tracking files created. Initialized SCOPE.md and PROGRESS.md master roadmap governance.
