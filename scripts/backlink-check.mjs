#!/usr/bin/env node
/**
 * backlink-check.mjs — verify which listings ACTUALLY link to us, and whether
 * the link passes equity (dofollow) or not (nofollow/ugc/sponsored).
 *
 * Why this exists: most B2B directories advertise a "website link" but ship
 * either no external anchor at all (verified: Fibre2Fashion supplier profiles)
 * or a nofollow. This tells you the truth before you spend time or money.
 *
 * This automates VERIFICATION + MONITORING only. It never builds links —
 * automated link building is a Google link-spam violation.
 *
 * Usage:
 *   node scripts/backlink-check.mjs                 # check all targets
 *   node scripts/backlink-check.mjs --json          # machine-readable output
 *   node scripts/backlink-check.mjs --add <url>     # append a target
 *
 * Targets live in scripts/backlink-targets.json
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGETS_FILE = join(__dirname, 'backlink-targets.json');

// Any host that means "us" — keep .com here too, ready for the domain migration.
const OUR_HOSTS = ['trishaktiapparel.com.np', 'trishaktiapparel.com'];

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';

async function loadTargets() {
  try {
    return JSON.parse(await readFile(TARGETS_FILE, 'utf8'));
  } catch {
    return [];
  }
}

/** Extract every <a> that points at one of our hosts, with its rel + anchor. */
function findOurLinks(html) {
  const out = [];
  const anchorRe = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = anchorRe.exec(html)) !== null) {
    const [, pre, href, post, inner] = m;
    if (!OUR_HOSTS.some((h) => href.includes(h))) continue;
    const attrs = `${pre} ${post}`;
    const relMatch = attrs.match(/rel=["']([^"']*)["']/i);
    const rel = relMatch ? relMatch[1].toLowerCase() : '';
    out.push({
      href,
      rel: rel || '(none)',
      dofollow: !/nofollow|ugc|sponsored/.test(rel),
      anchor: inner.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 80),
    });
  }
  return out;
}

async function checkTarget(t) {
  const res = { ...t, status: null, links: [], verdict: '', error: null };
  try {
    const r = await fetch(t.url, {
      headers: { 'User-Agent': UA, Accept: 'text/html' },
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
    res.status = r.status;
    if (!r.ok) {
      // 403/202 usually = bot protection (Europages/Kompass do this), not "no link".
      res.verdict = r.status === 403 || r.status === 202 ? 'BLOCKED — check by hand' : `HTTP ${r.status}`;
      return res;
    }
    const html = await r.text();
    res.links = findOurLinks(html);
    if (res.links.length === 0) res.verdict = 'NO LINK — zero value';
    else if (res.links.some((l) => l.dofollow)) res.verdict = 'DOFOLLOW ✅ passes equity';
    else res.verdict = 'nofollow — traffic only';
  } catch (e) {
    res.error = e.message;
    res.verdict = 'ERROR';
  }
  return res;
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] === '--add' && args[1]) {
    const targets = await loadTargets();
    targets.push({ name: new URL(args[1]).hostname, url: args[1], note: '' });
    await writeFile(TARGETS_FILE, JSON.stringify(targets, null, 2) + '\n');
    console.log(`Added: ${args[1]}`);
    return;
  }

  const targets = await loadTargets();
  if (targets.length === 0) {
    console.log(`No targets yet. Add one:\n  node scripts/backlink-check.mjs --add <url>`);
    return;
  }

  const results = [];
  for (const t of targets) {
    const r = await checkTarget(t);
    results.push(r);
  }

  if (args.includes('--json')) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  const pad = (s, n) => String(s).padEnd(n).slice(0, n);
  console.log(`\nBacklink check — ${results.length} target(s)\n`);
  console.log(pad('LISTING', 28), pad('STATUS', 7), 'VERDICT');
  console.log('-'.repeat(78));
  for (const r of results) {
    console.log(pad(r.name, 28), pad(r.status ?? '—', 7), r.verdict);
    for (const l of r.links) {
      console.log(`  └─ rel="${l.rel}" anchor="${l.anchor}"`);
    }
  }

  const live = results.filter((r) => r.links.length > 0);
  const dofollow = results.filter((r) => r.links.some((l) => l.dofollow));
  console.log('\n' + '-'.repeat(78));
  console.log(`Linking back: ${live.length}/${results.length}   ·   Dofollow: ${dofollow.length}`);
  console.log('Blocked/errors need a manual browser check (bot protection ≠ no link).\n');
}

main();
