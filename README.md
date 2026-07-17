# UX Skills

**One install. Full UX practice for AI agents.**

Strategy, research, journeys, accessibility, ethics — plus AI product design and visual craft.

Built from the best of:

| Source | What you get |
|--------|----------------|
| [ghaida/intent](https://github.com/ghaida/intent) | Design-with-Intent system: 16 strategy skills, anti-pattern catalog, 6 specialist agents, deep references |
| [tommyjepsen/awesome-ux-skills](https://github.com/tommyjepsen/awesome-ux-skills) | AI product patterns (governors, trust, inputs…) + craft, personas, prioritization, process tactics |

See [CREDITS.md](CREDITS.md) for full provenance.

---

## Install (everyone)

Works with **Claude Code, Cursor, Codex, OpenCode**, and [many more](https://skills.sh) via the open skills CLI:

```bash
npx skills add princepal9120/ux-skills --all
```

Install only what you need:

```bash
# List skills
npx skills add princepal9120/ux-skills --list

# Intent core only (examples)
npx skills add princepal9120/ux-skills -s intent -s journey -s evaluate -s include

# AI product suite
npx skills add princepal9120/ux-skills -s ai-governors -s ai-trust-builders -s ai-inputs -s ai-wayfinders
```

### Claude Code plugin

```text
/plugin marketplace add princepal9120/ux-skills
```

Then open `/plugin` and install **ux-skills**. You get slash commands + agents (Noor, Ember, Wren, Vigil, Rune, Sage, Atlas).

### Manual / local

```bash
git clone https://github.com/princepal9120/ux-skills.git
cd ux-skills
npx skills add . --all
# or for Claude Code skills dir only:
# cp -R skills/* ~/.claude/skills/
```

---

## What's inside

### 32 skills

#### Foundation (Intent)

| Skill | Use when |
|-------|----------|
| `intent` | Set context, principles, anti-patterns, route to specialists |
| `strategize` | Frame the problem before solutions |
| `investigate` | Plan/run research and synthesis |
| `blueprint` | Service maps, systems, dependencies |
| `journey` | End-to-end flows and multi-channel journeys |
| `organize` | IA, navigation, taxonomy |
| `articulate` | UX writing, voice, microcopy |
| `evaluate` | Heuristic + anti-pattern audit |
| `fortify` | Edge cases, empty/error/offline states |
| `include` | Accessibility as design discipline |
| `transpose` | Cross-platform adaptation |
| `localize` | Cultural / linguistic adaptation |
| `measure` | HEART, experiments, ethical metrics |
| `philosopher` | Sit with the problem; expand thinking |
| `storytelling` | Narrative structure for design work |
| `specify` | Engineering handoff specs |

#### Extensions (Awesome UX)

| Skill | Use when |
|-------|----------|
| `ai-governors` | Human-in-the-loop control for AI actions |
| `ai-identifiers` | AI name, look, personality |
| `ai-inputs` | How users prompt / instruct AI |
| `ai-trust-builders` | Consent, disclosure, trust signals |
| `ai-tuners` | User-configurable AI behavior |
| `ai-wayfinders` | Onboarding out of the blank slate |
| `craft` | 12 visual-craft rules (UI polish) |
| `cognitive-load-conversion` | Cut form/flow cognitive load |
| `double-diamond` | Discover → Define → Develop → Deliver |
| `empathy-mapping` | Says / Thinks / Does / Feels |
| `ux-personas` | Research-based personas |
| `ux-storyboard` | Scenario storyboards |
| `feature-prioritization` | Weighted prioritization matrix |
| `like-wish-what-if` | Critique / retro framework |
| `general-design-review` | Compact multi-framework review |
| `persuasive-ux` | Fogg tools — **ethics-checked** via Intent catalog |

### 7 agents

| Agent | Role | Skills |
|-------|------|--------|
| **Noor** | Entry / context / ethics routing | `intent` |
| **Ember** | Strategy + research | `strategize` + `investigate` |
| **Wren** | Experience design | `journey` + `organize` + `articulate` |
| **Vigil** | Quality + a11y + resilience | `evaluate` + `fortify` + `include` |
| **Rune** | Engineering handoff | `specify` |
| **Sage** | Expansive thinking | `philosopher` |
| **Atlas** | AI product design | all `ai-*` skills |

---

## How to use (decision tree)

```
I have a design challenge
│
├─ Set project context / ethics
│  └─ /intent  (or @noor)
│
├─ Don't know the problem yet
│  └─ /strategize + /investigate  (or @ember)
│
├─ Design the experience
│  └─ /journey + /organize + /articulate  (or @wren)
│
├─ AI feature (control, trust, identity, inputs)
│  └─ /ai-governors … /ai-wayfinders  (or @atlas)
│
├─ Does this work? For everyone?
│  └─ /evaluate + /fortify + /include  (or @vigil)
│
├─ Polish the UI surface
│  └─ /craft + /cognitive-load-conversion
│
├─ Ready for engineering
│  └─ /specify  (or @rune)
│
└─ Stuck / need expansion
   └─ /philosopher  (or @sage)
```

More detail: [HOW-TO-USE.md](HOW-TO-USE.md)

---

## Why this package

| Intent alone | Awesome UX alone | **UX Skills (this repo)** |
|--------------|------------------|---------------------------|
| Deep strategy, ethics, a11y | Fast tactical prompts | Both |
| Weak on AI product UX | Strong AI pattern library | Atlas + 6 AI skills |
| Full agent system + multi-platform packaging | Simple install script | `npx skills add` + Claude plugin + Cursor/Copilot build |
| No visual craft rules | `craft` + load/conversion | Included |

Duplicates removed on purpose (prefer Intent depth for a11y, journeys, heuristics, research methods).

---

## Build distributions (maintainers)

Claude Code reads `skills/` and `agents/` directly.

For Cursor + GitHub Copilot rules:

```bash
./build.sh
```

Release (semver tag + push):

```bash
./release.sh 1.0.1
```

---

## License

**CC0 1.0 Universal** — public domain dedication for this distribution.

- Intent foundation is CC0 by Ghaida Zahran.
- Extension skill bodies are adapted from Tommy Jepsen's Awesome UX Skills; please keep [CREDITS.md](CREDITS.md) when you fork.

---

## Contributing

PRs welcome.

1. Skills live in `skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`, `version`, `user-invocable`).
2. Prefer extending Intent routing in `skills/intent/SKILL.md` over duplicating domains.
3. Run `./build.sh` before release if Cursor/Copilot outputs changed.
4. Update `CREDITS.md` when adding third-party material.
