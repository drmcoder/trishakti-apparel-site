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
const CAPTIONS = {};

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
