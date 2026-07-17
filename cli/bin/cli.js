#!/usr/bin/env node
/**
 * UX Skills CLI — Impeccable-style installer for multi-harness UX skills.
 *
 *   npx ux-skills install
 *   npx ux-skills update
 *   npx ux-skills help
 *   npx ux-skills link --source=.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8'));

const HELP = `
Usage: ux-skills <command> [options]

Commands:
  install    Install UX skills into your AI harness (Claude, Cursor, Codex, …)
  update     Re-install / refresh skills to this package version
  link       Symlink skills from a local checkout (for git submodule workflows)
  help       List skills and how to use them
  version    Print package version

Install options:
  -y, --yes                 Non-interactive (use defaults or provided flags)
  --providers=<list>        Comma-separated: claude,cursor,codex,gemini,github,opencode,agents
  --scope=project|global    project = cwd harness folders, global = home dirs
  --force                   Overwrite existing skill directories
  --skills=<list>           Install only these skill names (default: all)
  --agents                  Also install agents/ (Claude Code subagents)

Examples:
  npx ux-skills install
  npx ux-skills install -y --providers=claude,cursor --scope=project
  npx ux-skills install -y --scope=global --providers=claude
  npx ux-skills update
  npx ux-skills link --source=. --providers=claude,cursor

After install, reload your agent, then:
  /ux-skills init          # set project UX context
  /intent                  # foundation + routing
  /journey signup          # design a flow
  /ai-governors            # AI product control patterns

Docs: https://github.com/princepal9120/ux-skills
`.trim();

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (!cmd || cmd === '--help' || cmd === '-h') {
    console.log(HELP);
    process.exit(0);
  }
  if (cmd === '--version' || cmd === '-v' || cmd === 'version') {
    console.log(PKG.version);
    process.exit(0);
  }

  if (cmd === 'help') {
    const { showHelp } = await import('../lib/help.mjs');
    await showHelp();
    return;
  }

  if (cmd === 'install' || cmd === 'update') {
    const { runInstall } = await import('../lib/install.mjs');
    await runInstall(args.slice(1), { mode: cmd });
    return;
  }

  if (cmd === 'link') {
    const { runLink } = await import('../lib/install.mjs');
    await runLink(args.slice(1));
    return;
  }

  console.error(`Unknown command: "${cmd}"\n\n${HELP}`);
  process.exit(1);
}

main().catch(err => {
  console.error(err?.message || err);
  process.exit(1);
});
