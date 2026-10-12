---
description: Build or rebuild one homepage section safely
---
1. Run /plan-task first and get approval.
2. Create/modify only `src/components/sections/<Section>.tsx` and its content file.
3. Use tokens + primitives from `src/components/ui/`. Add a primitive only if used 2+ times.
4. Add motion via the `motion-restraint` skill only after the static layout is approved at 375/768/1440.
5. Run /verify.
