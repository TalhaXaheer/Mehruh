---
trigger: always_on
---

# Progress Tracking (applies to EVERY task)

Files: docs/SCOPE.md (what we build; owner-approved changes only) and docs/PROGRESS.md (what is done/pending).

AT THE START of every task:
1. Read docs/SCOPE.md and docs/PROGRESS.md. Identify the task ID the user gave. It must be the "Next task" or a user-approved exception. If its dependency is not DONE, or any earlier task is in REVIEW, stop and tell the user.
2. Back-fill: if the previous DONE row has an empty Hash cell, run `git log -1 --format=%h --grep="<its commit message>"` and fill it in.
3. After the user approves your plan, set the task to IN PROGRESS and set Updated to today. Only one task may be IN PROGRESS.

AT THE END (CLOSE) of every task, in the SAME commit as the work:
4. Run the verify gates (tsc + eslint + build + e2e + screenshots) unless the task is docs-only; say so if skipped.
5. Update the task row: Status, Updated, Commit message, Verify (e.g. "verify PASS, e2e 14/14, shots 21"), Notes (1 line max).
   - Gate "auto" tasks: set DONE only if every gate passed.
   - Gate "visual" or "decision" tasks: set REVIEW. The owner sets DONE by sending "APPROVE <ID>".
   - If anything failed or you stopped: set BLOCKED, write why in Notes, and add a row to "Blockers and open questions".
6. Recompute the header (Current phase, Next task, Last updated, Done n / total) and the Phase summary table. Next task = the first TODO row whose Depends are all DONE.
7. Add every issue you noticed but did not fix to "Observations backlog" as OBS-n (next free number) with severity and a linked task. Do not fix it now.
8. If you created or resolved an asset dependency, update the asset status in SCOPE.md and the Q-n rows.
9. Add one line to "Session log" (newest first): date, task ID, outcome, commit message.
10. Bug fixes and quick fixes outside the task list go to "Fix log" as FX-n, not into the task table.
11. If this task completes its phase (every task of the phase is DONE), run the /phase-push workflow (rule 07). If this task ended as REVIEW, do not push; the push happens when the owner approves it.

HARD RULES:
- Never mark DONE when verify or e2e failed.
- Never rewrite or reorder other tasks' rows. You may only edit the row of the current task, back-fill a Hash, and add rows to the backlog, blockers, fix log and session log.
- Never change SCOPE.md except to append to the change log or update asset status, unless the owner explicitly approves a scope change. If a request is outside SCOPE, say so and ask.
- If the owner asks for a new task, add it as a new row with the next free ID (e.g. 2.6), correct Depends, status TODO, and log it in the SCOPE change log. Do not start it unless asked.
- The numbers in the header and Phase summary must always match the table.
