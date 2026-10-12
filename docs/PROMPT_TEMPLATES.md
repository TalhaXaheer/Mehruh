# How to prompt Antigravity (copy/paste)

## 1. Task brief (use for every task)
```
TASK: <one section or one component>
PHASE: <from docs/PLAN.md>
READ FIRST: AGENTS.md, docs/PLAN.md, docs/DESIGN_SYSTEM.md, skill: <name>
CHANGE ONLY: <file paths>
DO NOT TOUCH: everything else
GOAL (visual): <what it should look like, reference screenshot if any>
ACCEPTANCE: <3-5 bullets>
FIRST: run /plan-task and wait for my approval.
AFTER: run /verify and give the standard report.
```

## 2. Review-only prompt
```
Run /design-review on <section>. Do not edit anything. Give the top 5 fixes by visual impact.
```

## 3. Bug prompt
```
BUG: <what happens, where, viewport>. 
Reproduce first and tell me the cause. Fix in the minimal number of lines. Do not refactor. Run /verify.
```

## 4. When the agent goes off the rails
```
Stop. Revert to the last commit state for files outside <allowed paths>. List what you changed that was not requested. Then continue only with the agreed scope.
```
Tip: commit to git before every task (`git commit -am "before: <task>"`) so any overreach can be undone with one command.
