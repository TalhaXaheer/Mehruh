---
trigger: always_on
---

# Git and GitHub (applies to EVERY task)

Remote: origin = https://github.com/TalhaXaheer/Mehruh.git. Branch: main. Work happens on main, tasks are committed one by one (rule 06).

WHEN TO PUSH
- Push ONLY at the end of a phase, or when the owner asks (prompt R13). Never push mid-phase on your own.
- A phase is complete only when EVERY task with that Phase value in docs/PROGRESS.md is DONE (not REVIEW, not BLOCKED; SKIPPED counts as done only if the owner approved skipping).
- A task that ends as REVIEW does not trigger a push. The push runs after the owner approves the last task of the phase (prompt R8). Auto-gate tasks that finish a phase push right away.

HOW (the /phase-push workflow, in this exact order; stop at the first failure)
1. Confirm the phase is complete (see above) and the working tree is clean (git status). If not clean, stop and list the files.
2. Run the gates: npm run verify, npm run test:e2e, npm run progress:check. All must pass. (Docs-only phases may skip build/e2e and say so.)
3. Safety scan of everything that will be pushed: no .env* files, no keys/tokens/private keys (scan the commits since the previous tag), no files over 5 MB, no videos unless the owner approved them in this task, nothing from Images/, tests/screenshots/, test-results/. Report by file and pattern name only; never print a secret value. If anything is found: stop, do not push, mark the phase task BLOCKED, add a Q-n row.
4. Update docs/PROGRESS.md: in the Phase summary set the "Pushed" cell to the tag name; add a row to "Git push log" (date, phase, tag, hash, branch, result, notes); add a Session log line. Commit as "docs: phase <X> pushed".
5. Create an annotated tag: phase-<x>-complete (lowercase phase id, e.g. phase-0-complete, phase-a-complete, phase-setup-complete) with the message "Phase <X> complete: <list of task IDs>".
6. git push origin main, then git push origin <tag>. NEVER use --force or --force-with-lease. NEVER rewrite history.
7. Verify: git ls-remote origin shows main and the tag at the local hashes; git status -sb shows up to date. Report the remote URL, commit hash, tag, number of commits pushed.

IF A PUSH FAILS
- Rejected or non-fast-forward: stop. Do not pull, rebase, merge or force without the owner's decision. Report the exact error and the output of git log --oneline origin/main..HEAD and HEAD..origin/main.
- Authentication error or a push that waits for a sign-in window: stop after 2 minutes and tell the owner to run the push in their own PowerShell window (outside Antigravity). Never ask for a password or token in chat, never write credentials into any file or command history, never read or print stored credentials, never kill processes or change credential-manager settings.
- Network error: retry once, then stop and report.

COMMIT HYGIENE
- Never commit .env*, secrets, node_modules, .next, test screenshots, large originals, or any file over 5 MB without asking. Videos and other big media need explicit approval (propose Git LFS above 25 MB, but do not install anything without asking).
- Commit messages follow the ones given in the task prompt. One task = one commit (plus its tracking changes).
- Do not create other branches, forks, PRs or GitHub settings unless the owner asks (prompt R10 for scope changes).
