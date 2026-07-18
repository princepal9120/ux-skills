# UX Skills usage guide

For install, compatibility, and the complete command directory, see [README.md](README.md).

## Recommended operating loop

1. Run `/ux-skills init` once per project. Keep `UX-CONTEXT.md` concise and current.
2. Frame before drawing: `/strategize` for a product decision; `/investigate` for missing evidence.
3. Design the experience with `/journey`, `/organize`, and `/articulate`.
4. For AI features, begin with `/ai-governors`, then use trust, input, identity, tuner, and wayfinder skills as needed.
5. Review with `/evaluate`, `/include`, and `/fortify` before handoff.
6. Use `/specify` to produce engineering-ready behavior, states, acceptance criteria, and measurement.

## Team handoff convention

Carry forward these artifacts between sessions: problem statement, evidence and assumptions, user flow, required states, accessibility requirements, ethical constraints, and success signals. Keep unresolved questions explicit instead of inventing answers.

## Installation commands

```bash
# skills.sh: all skills, all supported agents
npx skills add princepal9120/ux-skills --all --full-depth

# UX Skills installer: selected local targets
npx ux-skills install -y --providers=claude,cursor,codex --scope=project --agents
```
