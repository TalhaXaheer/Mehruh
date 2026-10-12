---
trigger: always_on
---
# Scope & Behavior (anti-overreach)

- Work in **small vertical slices**: one section or one component per task.
- Before editing, output: (a) understanding of the task, (b) files to change, (c) files that must NOT change, (d) risks.
- If the task is ambiguous, ask ONE batched question block. Do not guess and build.
- Do not create new pages, routes, or components that were not requested.
- Do not rewrite a file from scratch when a targeted edit works. Prefer minimal diffs.
- Do not delete or rename existing files, assets, or exports without explicit approval.
- Do not "fix" things you were not asked about. Report them under **Observations** at the end instead.
- Do not leave dead code, commented-out blocks, console.logs, or TODOs without an owner tag.
- Do not run the dev server in a loop or restart it repeatedly. One instance; reuse it.
- If a command fails twice for the same reason, STOP and report the error instead of trying random fixes.
- Never modify `.env*`, lockfiles, or config files (`next.config`, `tailwind.config`, `tsconfig`) unless the task says so.
