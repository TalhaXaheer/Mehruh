---
trigger: always_on
---

# Session Bootstrap (applies to EVERY prompt, including short ones)

At the start of every conversation, before doing anything else:
1. Read AGENTS.md, docs/SCOPE.md, docs/PROGRESS.md and docs/PLAN.md. Identify the current phase and the Next task from docs/PROGRESS.md.
2. State in one line: "Kit loaded. Phase: <phase>. Next task: <ID>. Skills I will use: <names>."
3. Pick skills by task type:
   - layout, spacing, type, cards, nav, footer, colors -> luxury-ui-design
   - animation, scroll, hover, reveal, intro, parallax -> motion-restraint
   - video, images, logo, fonts, public/ assets -> media-pipeline
   - products, cart, prices, product pages -> commerce-data
   - any UI change, or any "check/verify/test/review" request -> visual-qa (always last)
4. If the prompt is short or vague (e.g. "fix the hero", "make it look better"), DO NOT start coding. Run /plan-task and wait for approval.
5. If the prompt is a bug report, reproduce and explain the cause first, then fix with the smallest diff.
6. Never skip the final report (rules/04-verification.md), even for one-line changes.
7. If a user prompt conflicts with a rule, name the rule, explain the conflict, and ask. Do not silently choose.
8. If a request needs something that does not exist yet (transparent logo, better image, video), say so and stop. Do not substitute.
9. TEST INTEGRITY: never weaken, loosen, skip, or delete a test assertion to make it pass. Fix the app. If a test is genuinely wrong or the fix is out of scope, mark it test.fixme with a written reason and tell me. Selector-only corrections are allowed and must be listed.
10. GATE INTEGRITY: never report DONE while `npm run verify` or `npm run test:e2e` fails. Report FAIL honestly and stop.
11. Commit at the end of each task with a descriptive message. Never commit .env files, videos, or files over 5 MB without asking.
12. TRACKING: follow .agents/rules/06-progress-tracking.md for every task. Keep docs/PROGRESS.md truthful, and never work outside docs/SCOPE.md without asking me.
