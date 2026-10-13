---
trigger: always_on
---
# Verification Protocol

After every task, run in order and paste results:
1. `npm run verify`
2. `npm run test:e2e`
3. Capture screenshots (`npm run shots`) of each changed section at **375, 768, 1440** wide.
4. Self-review against `docs/QA_CHECKLIST.md` for the changed section only.

Report format (mandatory):
```
## Done
<2-3 lines>
## Files changed
<list>
## Verification
verify: PASS/FAIL   e2e: PASS/FAIL   screenshots: <paths>
## Checklist
<items checked / not checked + why>
## Observations (NOT changed)
<issues noticed outside scope>
## Tracking
Task ID: <ID>
Status: <status> (<reason>)
PROGRESS rows changed: <list of rows updated>
New OBS/Q/FX rows: <new rows added or none>
Next task: <ID>
## Git
branch: <branch>   last commit hash: <hash>   phase push: YES/NO   tag: <tag or none>
remote verification: <git ls-remote & status result>
## Open questions
<anything needing the client/user>
```
If any gate fails: fix within scope, re-run. If still failing after 2 attempts: stop and report.
