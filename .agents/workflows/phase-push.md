---
description: Push a completed phase to GitHub with a tag
---

0. Phase id: ask the owner or read it from PROGRESS.md.
1. Confirm the phase is complete (every task with that Phase value in docs/PROGRESS.md is DONE) and the working tree is clean (`git status`). If not clean, stop and list the files.
2. Run the gates: `npm run verify`, `npm run test:e2e`, `npm run progress:check`. All must pass. (Docs-only phases may skip build/e2e and say so.)
3. Safety scan of everything that will be pushed: no `.env*` files, no keys/tokens/private keys (scan the commits since the previous tag), no files over 5 MB, no videos unless the owner approved them in this task, nothing from `Images/`, `tests/screenshots/`, `test-results/`. Report by file and pattern name only; never print a secret value. If anything is found: stop, do not push, mark the phase task BLOCKED, add a Q-n row.
4. Update `docs/PROGRESS.md`: in the Phase summary set the "Pushed" cell to the tag name; add a row to "Git push log" (date, phase, tag, hash, branch, result, notes); add a Session log line. Commit as "docs: phase <X> pushed".
5. Create an annotated tag: `phase-<x>-complete` (lowercase phase id, e.g. `phase-0-complete`, `phase-a-complete`, `phase-setup-complete`) with the message "Phase <X> complete: <list of task IDs>".
6. `git push origin main`, then `git push origin <tag>`. NEVER use `--force` or `--force-with-lease`. NEVER rewrite history.
7. Verify: `git ls-remote origin` shows main and the tag at the local hashes; `git status -sb` shows up to date. Report the remote URL, commit hash, tag, number of commits pushed.
