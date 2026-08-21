#!/usr/bin/env node
// Generate a personalised one-page line card as PDF.
//   node scripts/linecard.mjs --company "Banner Ltd" --segment schoolwear
//   node scripts/linecard.mjs --all            # every TO SEND row in docs/target-list.csv
// Output: linecards/<slug>.pdf   (gitignored — regenerate rather than commit)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT = process.cwd();
const OUT = path.join(ROOT, 'linecards');

// Which products lead, per segment. Everything else still appears in the range line.
const SEGMENTS = {
  schoolwear: {
    line: 'For schoolwear ranges',
    pitch: 'The blanks behind a schoolwear range — made to your fits, colours and neck labels rather than off a wholesaler’s shelf.',
    items: [
      ['polo.webp', 'Pique polo', 'Poly-cotton or 100% cotton · structured collar and placket · XS–XXL and children’s'],
      ['sweatshirt.webp', 'Crew &amp; V-neck sweatshirt', 'Fleece-back or French terry · ribbed cuffs and hem · 280–400 GSM'],
      ['tshirt.webp', 'PE and crew tee', 'Single jersey cotton or CVC · 160–200 GSM · clean side seams'],
      ['shorts.webp', 'PE shorts', 'Jersey or French terry · elastic or drawcord waist'],
    ],
  },
  decorator: {
    line: 'For decorators and print houses',
    pitch: 'Your own blank instead of someone else’s branded one — your fit, your fabric weight, your neck label.',
    items: [
      ['tshirt.webp', 'Crew-neck tee', 'Single jersey · cotton, CVC or poly blend · 160–200 GSM'],
      ['sweatshirt.webp', 'Sweatshirt &amp; hoodie', 'Fleece-back and French terry · 280–400 GSM for streetwear weight'],
      ['polo.webp', 'Pique polo', 'Cotton or poly-cotton · corporate and retail programmes'],
      ['tanktop.webp', 'Tank and sleeveless', 'Clean binding at neck and armhole · single jersey'],
    ],
  },
  workwear: {
    line: 'For workwear and uniform programmes',
    pitch: 'Knit blanks for corporate and hospitality uniform programmes, produced to your own spec and labels.',
    items: [
      ['polo.webp', 'Pique polo', 'The corporate staple · poly-cotton for durability and print'],
      ['sweatshirt.webp', 'Crew sweatshirt', 'Fleece-back · hard-wearing 280–400 GSM'],
      ['tshirt.webp', 'Crew tee', 'Cotton or CVC · 160–200 GSM'],
      ['longsleeve.webp', 'Long-sleeve jersey', 'Layering piece for year-round programmes'],
    ],
  },
  kidswear: {
    line: 'For children’s ranges',
    pitch: 'Children’s knitwear made to your tech pack, across full children’s grading.',
    items: [
      ['kidswear.webp', 'Children’s tee', 'Single jersey cotton or CVC · 2–14 yrs'],
      ['g-kidsset.webp', 'Co-ord set', 'Matching tee and shorts · printed or plain'],
      ['sweatshirt.webp', 'Children’s sweatshirt', 'Fleece-back or French terry'],
      ['g-kids.webp', 'Printed children’s knits', 'Your artwork, our grading'],
    ],
  },
  brands: {
    line: 'For independent brands',
    pitch: 'Knit garments to your tech pack, from 500 pieces — so a new fit or colourway does not mean committing to a container.',
    items: [
      ['tshirt.webp', 'Crew-neck tee', 'Single jersey · cotton, CVC, modal or poly blends'],
      ['sweatshirt.webp', 'Hoodie &amp; sweatshirt', 'French terry and fleece · up to 400 GSM'],
      ['tanktop.webp', 'Tank and sleeveless', 'Warm-weather and athleisure'],
      ['g-womens.webp', 'Women’s knit tops', 'Graded in-house on Optitex'],
    ],
  },
};

// Thumbnails, cached. Embedding the full-size product images made a 5 MB PDF;
// they render at ~62px, so 260px is ample even for print.
const THUMBS = path.join(OUT, '.thumbs');
const dataUri = (rel) => {
  fs.mkdirSync(THUMBS, { recursive: true });
  const src = path.join(ROOT, 'public/assets/products', rel);
  const thumb = path.join(THUMBS, rel.replace(/\.webp$/, '.jpg'));
  if (!fs.existsSync(thumb)) {
    execFileSync('magick', [src, '-resize', '260x260^', '-gravity', 'center',
      '-extent', '260x260', '-quality', '72', thumb], { stdio: 'ignore' });
  }
  return 'data:image/jpeg;base64,' + fs.readFileSync(thumb).toString('base64');
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function html(company, segKey) {
  const seg = SEGMENTS[segKey] || SEGMENTS.decorator;
  const cards = seg.items.map(([img, name, spec]) => `
    <div class="prod">
      <img src="${dataUri(img)}" alt="">
      <div><p class="pname">${name}</p><p class="pspec">${spec}</p></div>
    </div>`).join('');
  return `<!doctype html><meta charset="utf-8"><title>Line card — ${company}</title>
<style>
@page { size: A4; margin: 14mm; }
*{box-sizing:border-box} body{margin:0;font-family:-apple-system,"Segoe UI",system-ui,Helvetica,Arial,sans-serif;color:#1b2230;line-height:1.45;font-size:11.5px}
.mast{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1a3e73;padding-bottom:12px}
.bn{font-size:26px;letter-spacing:.15em;font-weight:700;color:#1a3e73;margin:0;line-height:1}
.bs{margin:6px 0 0;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:#5b6474;font-weight:600}
.for{text-align:right;border-left:2px solid #1e7a34;padding-left:12px}
.for .k{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#1e7a34;font-weight:700}
.for .c{font-size:15px;font-weight:700;color:#1b2230;margin-top:3px;max-width:220px}
.for .s{font-size:9.5px;color:#5b6474;margin-top:2px}
h2{font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:#1e7a34;font-weight:700;margin:20px 0 8px;padding-bottom:5px;border-bottom:1px solid #e0dccf}
.pitch{font-size:13px;color:#1b2230;margin:14px 0 0;max-width:62ch}
.facts{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px}
.fact{border:1px solid #e0dccf;border-radius:5px;padding:9px 10px}
.fact .v{font-size:16px;font-weight:700;color:#1a3e73;line-height:1.1}
.fact .l{font-size:9px;color:#5b6474;margin-top:3px}
.prods{display:grid;grid-template-columns:1fr 1fr;gap:11px}
.prod{display:flex;gap:10px;border:1px solid #e0dccf;border-radius:5px;padding:9px;align-items:center}
.prod img{width:62px;height:62px;object-fit:cover;border-radius:4px;flex-shrink:0}
.pname{margin:0;font-weight:700;font-size:11.5px}
.pspec{margin:2px 0 0;font-size:9.5px;color:#5b6474;line-height:1.35}
.two{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:4px}
ul{margin:0;padding-left:15px} li{margin-bottom:3px;font-size:10.5px}
.hon{border-left:3px solid #c08a1e;background:#fdf6e8;padding:9px 12px;border-radius:0 4px 4px 0;font-size:10.5px;margin-top:8px}
.foot{margin-top:18px;padding-top:9px;border-top:2px solid #1a3e73;display:flex;justify-content:space-between;font-size:9.5px;color:#5b6474}
b{color:#1a3e73}
</style>
<div class="mast">
  <div><p class="bn">TRISHAKTI APPAREL</p><p class="bs">Knit Cut &amp; Sew · Gaidakot, Nepal</p></div>
  <div class="for"><div class="k">Prepared for</div><div class="c">${company}</div><div class="s">${seg.line}</div></div>
</div>

<p class="pitch">${seg.pitch}</p>

<h2>Terms at a glance</h2>
<div class="facts">
  <div class="fact"><div class="v">500 pcs</div><div class="l">Minimum per style</div></div>
  <div class="fact"><div class="v">0%</div><div class="l">UK duty under DCTS</div></div>
  <div class="fact"><div class="v">40–50 days</div><div class="l">Bulk after approval</div></div>
  <div class="fact"><div class="v">26–30k</div><div class="l">Pieces per month</div></div>
</div>

<h2>Suggested range</h2>
<div class="prods">${cards}</div>

<div class="two">
  <div>
    <h2>What you get</h2>
    <ul>
      <li>Your own fits, colours, neck and care labels</li>
      <li>In-house Optitex CAD — pattern, grading, marker</li>
      <li>Inspected to <b>AQL 2.5</b>, or your specified level</li>
      <li>Barcode/QR bundle tracking through every operation</li>
      <li>Certificate of Origin supplied · EXW Gaidakot or FOB Kolkata</li>
      <li>Staged payment terms; L/C for larger orders</li>
    </ul>
  </div>
  <div>
    <h2>Where we stand</h2>
    <ul>
      <li>91 people, ~100 machines, single knit floor</li>
      <li>80% women — all local, all permanent</li>
      <li>EXIM registered exporter</li>
      <li>Buyer-appointed third-party inspection welcome</li>
    </ul>
    <div class="hon">We do <b>not</b> yet hold BSCI, SMETA or GOTS. A social audit is being arranged. We would rather tell you now than have you find out later.</div>
  </div>
</div>

<div class="foot">
  <span>Santosh Rijal · Founder · admin@trishaktiapparel.com.np · WhatsApp +977 9863618347</span>
  <span>trishaktiapparel.com.np</span>
</div>`;
}

function build(company, segment, skipExisting = false) {
  fs.mkdirSync(OUT, { recursive: true });
  const s = slug(company);
  const tmp = path.join(OUT, `${s}.html`);
  const pdf = path.join(OUT, `${s}.pdf`);
  // Chrome costs ~9s per launch, so a full run is slow — make it resumable.
  if (skipExisting && fs.existsSync(pdf)) return false;
  fs.writeFileSync(tmp, html(company, segment));
  execFileSync(CHROME, ['--headless', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${pdf}`, `file://${tmp}`], { stdio: 'ignore' });
  fs.unlinkSync(tmp);
  const kb = (fs.statSync(pdf).size / 1024).toFixed(0);
  console.log(`  ${company.padEnd(34)} ${segment.padEnd(11)} ${kb} KB`);
  return true;
}

const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i > -1 ? argv[i + 1] : null; };

if (argv.includes('--all')) {
  const csv = fs.readFileSync(path.join(ROOT, 'docs/target-list.csv'), 'utf8').split('\n');
  const hdr = csv[0].split(',');
  const iC = hdr.indexOf('Company'), iS = hdr.indexOf('Segment'), iSt = hdr.indexOf('Status'), iE = hdr.indexOf('Email');
  let n = 0;
  for (const line of csv.slice(1)) {
    const c = line.split(',');
    if (c.length < 7 || c[iSt] !== 'TO SEND' || !c[iE].includes('@')) continue;
    const s = (c[iS] || '').toLowerCase();
    const seg = s.includes('school') ? 'schoolwear'
      : s.includes('embroid') || s.includes('print') || s.includes('decorator') ? 'decorator'
      : s.includes('workwear') || s.includes('uniform') ? 'workwear'
      : s.includes('kids') ? 'kidswear' : 'brands';
    if (build(c[iC], seg, true)) n++;
  }
  console.log(`\n${n} new line cards written. Total in linecards/: ` + fs.readdirSync(OUT).filter(f=>f.endsWith('.pdf')).length);
} else {
  const company = arg('--company');
  if (!company) { console.error('usage: --company "Name" [--segment schoolwear|decorator|workwear|kidswear|brands]  |  --all'); process.exit(1); }
  build(company, arg('--segment') || 'decorator');
}
