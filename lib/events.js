// Build-time gallery source. Reads whatever image files live in
// public/assets/events/ when the site builds — so adding a photo needs NO code,
// just an upload. Optional richer captions/alt live in CAPTIONS below.
import fs from 'node:fs';
import path from 'node:path';

const EVENTS_DIR = path.join(process.cwd(), 'public/assets/events');
const IMG_RE = /\.(jpe?g|png|webp|avif)$/i;
// Filenames that are camera/app codes, not descriptive — show no caption for these.
const NONDESCRIPTIVE = /^(img|dsc|dscf|photo|image|screenshot|snapseed|pxl|mvimg|\d)/i;

// OPTIONAL: add rich captions/alt for specific files here. Everything works
// without this — it's just for nicer captions than the filename gives.
//   'dashain-lunch-2025.jpg': { caption: 'Dashain team lunch, 2025', alt: 'The Trishakti team sharing Dashain lunch' },
const CAPTIONS = {
  '01-at-the-sewing-line.jpg': {
    caption: 'On the line in Gaindakot — single-needle lockstitch, mid-seam.',
    alt: 'A machine operator sewing at a JACK industrial lockstitch machine on the Trishakti Apparel production floor in Gaindakot, Nepal, with the rest of the sewing line behind',
  },
  '02-the-sewing-floor.jpg': {
    caption: 'The floor from above — one dedicated knit line, 150+ machines.',
    alt: 'Overhead view of the Trishakti Apparel sewing floor in Gaindakot, Nepal — rows of industrial machines with operators working on knit garments',
  },
  '03-teej-celebration-at-the-factory.jpg': {
    caption: 'Teej at the factory gate, Gaindakot.',
    alt: 'Women of the Trishakti Apparel team in red and white saris outside the factory gate in Gaindakot, Nepal, celebrating Teej',
  },
  '04-puja-ceremony-at-the-factory.jpg': {
    caption: 'A puja on the factory grounds — the team, and their families, together.',
    alt: 'Trishakti Apparel staff and families gathered for a puja ceremony on the factory grounds in Gaindakot, Nepal',
  },
  '05-picnic-programme-2082.jpg': {
    caption: 'Picnic Programme 2082 — the whole company, one day out.',
    alt: 'The full Trishakti Apparel workforce at the 2082 company picnic, holding the Trishakti Apparel banner',
  },
  '06-annual-team-picnic.jpg': {
    caption: 'The annual picnic is a fixture here — one bus, the whole floor.',
    alt: 'The Trishakti Apparel team photographed with the company picnic banner before boarding the bus',
  },
  '07-team-picnic-group-photo.jpg': {
    caption: 'Picnic Programme 2081. Most of these faces are still on the floor today.',
    alt: 'Group photograph of the Trishakti Apparel team at the 2081 company picnic programme',
  },
  '08-team-day-out.jpg': {
    caption: 'A day out, the whole company.',
    alt: 'The Trishakti Apparel team and their families photographed together outdoors on a company day out',
  },
  '09-team-outing-kalika-temple.jpg': {
    caption: 'A team outing to Kalika Bhagwati temple, Chitwan.',
    alt: 'The Trishakti Apparel team on an outing at the Kalika Bhagwati temple gate in Chitwan, Nepal',
  },
  '10-team-winter-trip.jpg': {
    caption: 'A winter trip to the hills — staff trips are a standing tradition.',
    alt: 'Members of the Trishakti Apparel team on a winter trip in the Nepali hills',
  },
  '11-festival-day-in-gaindakot.jpg': {
    caption: 'Festival day in Gaindakot. Our whole workforce is local and permanent.',
    alt: 'Women of the Trishakti Apparel team in traditional dress on a festival day in Gaindakot, Nepal',
  },
  '12-teej-programme-outside-the-factory.jpg': {
    caption: 'The Teej programme, just outside the factory.',
    alt: 'Trishakti Apparel staff celebrating Teej on the road outside the factory in Gaindakot, Nepal',
  },
  '13-a-gathering-on-the-factory-grounds.jpg': {
    caption: 'An ordinary afternoon on the factory grounds.',
    alt: 'Trishakti Apparel staff and families gathered on the factory grounds in Gaindakot, Nepal',
  },
  '14-inclusive-production-team.jpg': {
    caption: 'On the sewing floor in Gaindakot.',
    alt: 'A Trishakti Apparel production operator working at an industrial sewing machine in Gaindakot, Nepal',
  },
};

function humanize(file) {
  const base = file.replace(/\.[^.]+$/, '').replace(/^\d+[-_\s]*/, ''); // strip ext + leading order prefix
  if (NONDESCRIPTIVE.test(base)) return '';
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getEventImages() {
  let files = [];
  try {
    files = fs.readdirSync(EVENTS_DIR).filter((f) => IMG_RE.test(f) && !f.startsWith('.'));
  } catch {
    files = [];
  }
  // Sort by filename: prefix files with 01_, 02_ … to control order.
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return files.map((file) => {
    const meta = CAPTIONS[file] || {};
    const caption = meta.caption ?? humanize(file);
    return {
      src: `/assets/events/${file}`,
      caption,
      alt: meta.alt || caption || 'Life at Trishakti Apparel — our team and factory in Gaindakot, Nepal',
    };
  });
}

export const hasEvents = getEventImages().length > 0;
