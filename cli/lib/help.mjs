import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILLS_SRC = join(__dirname, '..', '..', 'skills');

function frontmatterDescription(skillMd) {
  if (!skillMd.startsWith('---')) return '';
  const end = skillMd.indexOf('---', 3);
  if (end < 0) return '';
  const fm = skillMd.slice(3, end);
  const m = fm.match(/^description:\s*>?\s*\n?([\s\S]*?)(?=^[a-zA-Z0-9_-]+:|\s*$)/m);
  if (!m) {
    const one = fm.match(/^description:\s*(.+)$/m);
    return one ? one[1].trim() : '';
  }
  return m[1]
    .split('\n')
    .map(l => l.replace(/^\s+/, '').replace(/^>\s?/, ''))
    .join(' ')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 120);
}

const GROUPS = {
  Start: ['ux-skills', 'intent'],
  'Strategy & research': [
    'strategize',
    'investigate',
    'blueprint',
    'double-diamond',
    'empathy-mapping',
    'ux-personas',
    'feature-prioritization',
  ],
  'Experience design': [
    'journey',
    'organize',
    'articulate',
    'ux-storyboard',
    'like-wish-what-if',
  ],
  'AI product design': [
    'ai-governors',
    'ai-identifiers',
    'ai-inputs',
    'ai-trust-builders',
    'ai-tuners',
    'ai-wayfinders',
  ],
  'Quality & craft': [
    'evaluate',
    'fortify',
    'include',
    'general-design-review',
    'craft',
    'cognitive-load-conversion',
    'persuasive-ux',
  ],
  Adapt: ['transpose', 'localize', 'measure'],
  Think: ['philosopher', 'storytelling'],
  Handoff: ['specify'],
};

export async function showHelp() {
  const names = existsSync(SKILLS_SRC)
    ? readdirSync(SKILLS_SRC, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name)
        .sort()
    : [];

  const desc = {};
  for (const name of names) {
    const p = join(SKILLS_SRC, name, 'SKILL.md');
    if (!existsSync(p)) continue;
    desc[name] = frontmatterDescription(readFileSync(p, 'utf8'));
  }

  console.log(`
  UX Skills — commands for AI harnesses

  Install:  npx ux-skills install
  Update:   npx ux-skills update
  Link:     npx ux-skills link --source=.
  Repo:     https://github.com/princepal9120/ux-skills

  Session path (like Impeccable docs):
    1. /ux-skills init     write UX context for the project
    2. /strategize         frame the problem
    3. /journey            design the experience
    4. /evaluate           review quality
    5. /specify            hand off to engineering
    AI product path: /ai-governors → /ai-inputs → /ai-trust-builders
`);

  const pad = (s, n) => s + ' '.repeat(Math.max(0, n - s.length));
  const shown = new Set();

  for (const [group, skills] of Object.entries(GROUPS)) {
    const present = skills.filter(s => names.includes(s));
    if (!present.length) continue;
    console.log(`  ${group}`);
    for (const s of present) {
      shown.add(s);
      console.log(`    /${pad(s, 28)} ${(desc[s] || '').slice(0, 70)}`);
    }
    console.log('');
  }

  const rest = names.filter(n => !shown.has(n));
  if (rest.length) {
    console.log('  Other');
    for (const s of rest) {
      console.log(`    /${pad(s, 28)} ${(desc[s] || '').slice(0, 70)}`);
    }
    console.log('');
  }

  console.log(`  ${names.length} skills total. After install, invoke with /skill-name in your agent.\n`);
}
