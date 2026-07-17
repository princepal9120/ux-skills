# UX Skills

**UX strategy + AI product design skills for AI harnesses.**

Install, set context, then run one command — same packaging model as [Impeccable](https://impeccable.style/docs/).

Intent-depth strategy (research, journeys, a11y, ethics) **plus** Awesome UX AI product patterns and craft.

---

## Start with `/ux-skills`

1. **01 Install** — `npx ux-skills install`  
   Run from the project root (or use `--scope=global`), then reload your agent.

2. **02 Set context** — `/ux-skills init`  
   Creates `UX-CONTEXT.md` (users, constraints, ethics, success).

3. **03 Try it** — `/journey signup` or `/evaluate` or `/ai-governors`  
   Point it at a real flow or screen.

```bash
npx ux-skills install
# non-interactive:
npx ux-skills install -y --providers=claude,cursor,codex --scope=project --agents
```

Update later:

```bash
npx ux-skills update
```

List vocabulary:

```bash
npx ux-skills help
```

---

## Full session path

| Phase | Command | What it does |
|-------|---------|--------------|
| Context | `/ux-skills init` | Project UX context |
| Plan | `/strategize` · `/investigate` | Frame problem with evidence |
| Design | `/journey` · `/organize` · `/articulate` | Flows, IA, words |
| AI product | `/ai-governors` · `/ai-inputs` · `/ai-trust-builders` | Control, trust, inputs |
| Review | `/evaluate` · `/include` · `/fortify` | Quality, a11y, edge cases |
| Craft | `/craft` · `/cognitive-load-conversion` | Visual craft + load |
| Ship | `/specify` | Engineering handoff |

Stuck? `/philosopher`. Metrics? `/measure`.

---

## Choose a command

### Start

| Command | Use when |
|---------|----------|
| `/ux-skills` | Route / next-step recommendation |
| `/ux-skills init` | First run — write `UX-CONTEXT.md` |
| `/intent` | Principles, anti-pattern catalog, full routing |

### Strategy & research

| Command | Use when |
|---------|----------|
| `/strategize` | Frame the problem before solutions |
| `/investigate` | Research plan, interviews, synthesis |
| `/blueprint` | Service maps, systems, dependencies |
| `/double-diamond` | Discover → Define → Develop → Deliver |
| `/empathy-mapping` | Says / Thinks / Does / Feels |
| `/ux-personas` | Research-based personas |
| `/feature-prioritization` | Weighted prioritization matrix |

### Experience design

| Command | Use when |
|---------|----------|
| `/journey` | End-to-end flows & multi-channel journeys |
| `/organize` | IA, navigation, taxonomy |
| `/articulate` | UX writing, voice, microcopy |
| `/ux-storyboard` | Scenario storyboards |
| `/like-wish-what-if` | Critique / retro framework |

### AI product design

| Command | Use when |
|---------|----------|
| `/ai-governors` | Human-in-the-loop control |
| `/ai-identifiers` | AI name, look, personality |
| `/ai-inputs` | How users instruct the AI |
| `/ai-trust-builders` | Consent, disclosure, trust |
| `/ai-tuners` | User-configurable AI behavior |
| `/ai-wayfinders` | Blank-slate onboarding |

Or invoke agent **`@atlas`** for the whole AI suite.

### Quality & craft

| Command | Use when |
|---------|----------|
| `/evaluate` | Heuristic + anti-pattern audit |
| `/fortify` | Empty, error, offline, edge cases |
| `/include` | Accessibility as design discipline |
| `/general-design-review` | Compact multi-framework review |
| `/craft` | 12 visual-craft rules |
| `/cognitive-load-conversion` | Cut form/flow load |
| `/persuasive-ux` | Fogg tools (ethics-checked) |

### Adapt · think · handoff

| Command | Use when |
|---------|----------|
| `/transpose` | Cross-platform adaptation |
| `/localize` | Cultural / linguistic adaptation |
| `/measure` | HEART, experiments, ethical metrics |
| `/philosopher` | Sit with the problem |
| `/storytelling` | Narrative for design work |
| `/specify` | Specs & eng handoff |

**33 skills total** (Intent 16 + Awesome UX 16 + this router).

---

## Install options

### Option 1: CLI (recommended)

```bash
npx ux-skills install
```

Detects Claude Code, Cursor, Codex (`.agents`), Gemini, GitHub Copilot, OpenCode.  
Flags: `--providers=claude,cursor` · `--scope=project|global` · `--agents` · `--force` · `-y`

### Option 2: Git submodule + link

```bash
git submodule add https://github.com/princepal9120/ux-skills .ux-skills
npx ux-skills link --source=.ux-skills --providers=claude,cursor
```

### Option 3: Plugin / skills CLI

```bash
# Open agent skills ecosystem
npx skills add princepal9120/ux-skills --all

# Claude Code marketplace
/plugin marketplace add princepal9120/ux-skills
```

### Option 4: Manual copy

```bash
git clone https://github.com/princepal9120/ux-skills
cp -R ux-skills/skills/* ~/.claude/skills/
cp -R ux-skills/agents/* ~/.claude/agents/   # optional
```

---

## Agents

| Agent | Skills |
|-------|--------|
| **Noor** | `/intent` — context + ethics |
| **Ember** | strategy + research |
| **Wren** | journey + organize + articulate |
| **Vigil** | evaluate + fortify + include |
| **Rune** | specify |
| **Sage** | philosopher |
| **Atlas** | all `ai-*` skills |

---

## Why both Intent and Awesome UX?

| | Intent | Awesome UX | **This pack** |
|--|--------|------------|----------------|
| Strategy / ethics / a11y | Deep | Light | Intent |
| AI product patterns | Thin | Strong | Awesome |
| Visual craft rules | — | `craft` | Included |
| Install UX | Plugin + skills | Shell script | **`npx ux-skills install`** (Impeccable-style) |

Duplicates dropped on purpose (`accessibility` → `/include`, etc.). See [CREDITS.md](CREDITS.md).

---

## Useful pairs

| Start with | Then |
|------------|------|
| `/strategize` | `/investigate` → `/journey` |
| `/evaluate` | `/fortify` / `/include` / `/articulate` |
| `/ai-governors` | `/ai-trust-builders` → `/ai-inputs` |
| `/journey` | `/craft` → `/specify` |
| `/ux-skills init` | `/intent` or `/strategize` |

---

## Package layout

```
skills/           # source skills (SKILL.md) — all harnesses
agents/           # Claude Code subagents
cli/              # npx ux-skills installer
.claude-plugin/   # Claude marketplace manifest
.cursor/rules/    # generated Cursor rules (./build.sh)
.github/          # Copilot instructions (./build.sh)
```

Maintainers:

```bash
./build.sh                 # refresh Cursor + Copilot dists
./release.sh 1.1.0         # version bump + tag
npm publish                # optional npm registry
```

---

## License

**CC0 1.0** — public domain dedication for this distribution.  
Intent is CC0 (Ghaida Zahran). Awesome UX extensions attributed to Tommy Jepsen — keep CREDITS when forking.

Packaging pattern inspired by [Impeccable](https://impeccable.style) / [pbakaus/impeccable](https://github.com/pbakaus/impeccable).
