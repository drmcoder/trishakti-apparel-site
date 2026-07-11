// =============================================================================
// SINGLE SOURCE OF TRUTH for all site content.
// Mirrors docs/site-data.md. Change copy/data HERE, not in the page files.
//
// `confirmed: true`  -> verified fact, safe to show buyers.
// `confirmed: false` -> DRAFT estimate. Rendered as "on request" framing, NOT as
//                       a hard number, until Santosh confirms. Flip to true (and
//                       set the real value) to publish it as a stated spec.
//
// HARD RULE: never present an unconfirmed number to a buyer as final. Omit or
// soften instead. See docs/START-HERE.md.
// =============================================================================

export const company = {
  name: 'Trishakti Apparel',
  legalNote: 'A garment cut-and-sew manufacturer in Gaindakot, Nepal.',
  founded: '2023',
  legacyYears: 33,
  parentFounded: '1991', // Trishakti Stores
  nameMeaning:
    'In Sanskrit, "Trishakti" means the three powers — creation, preservation, and transformation.',
  tagline: 'Your designs, made in Nepal.',
  taglineSub: 'Private-label knit garments — cut, sewn, and finished to your spec.',
  taglinePoetic:
    'Crafting fashion legacies — stitched with tradition, woven into tomorrow.',
};

// -----------------------------------------------------------------------------
// Contact — all CONFIRMED.
// -----------------------------------------------------------------------------
export const contact = {
  address: {
    line1: 'Gaida Chowk, Ward-6',
    line2: 'Gaidakot Municipality',
    line3: 'Nawalparasi (East), Gandaki Province, Nepal',
    full:
      'Gaida Chowk, Ward-6, Gaidakot Municipality, Nawalparasi (East), Gandaki Province, Nepal',
  },
  phones: ['+977-78-590826', '+977-9863618347', '+977-9865005120'],
  whatsapp: '+9779863618347', // digits only for wa.me links
  whatsappDisplay: '+977 9863618347',
  email: 'admin@trishaktiapparel.com',
  hours: {
    factory: 'Factory: 7:00 AM – 8:00 PM',
    office: 'Office: 9:00 AM – 6:00 PM (Sun–Fri)',
  },
  facebook: 'https://facebook.com/trishaktiapparel',
  // Google Maps embed/search query for the address.
  mapQuery: 'Gaidakot, Nawalparasi, Gandaki Province, Nepal',
};

// -----------------------------------------------------------------------------
// Sourcing facts — the numbers buyers decide on.
// Only `confirmed: true` rows render as hard specs.
// -----------------------------------------------------------------------------
export const sourcing = [
  {
    key: 'machines',
    label: 'Sewing machines',
    value: '~100',
    detail: 'Single-floor knit line (scaled up 2026)',
    confirmed: true,
  },
  {
    key: 'focus',
    label: 'Specialty',
    value: 'Knit basics',
    detail: 'T-shirts, polos & jersey/pique garments',
    confirmed: true,
  },
  {
    key: 'cad',
    label: 'In-house CAD',
    value: 'Optitex',
    detail: 'Pattern making, marking & on-site resizing',
    confirmed: true,
  },
  {
    key: 'origin',
    label: 'Made in',
    value: 'Nepal',
    detail: 'Fabric & trims sourced from China',
    confirmed: true,
  },
  // ---- DRAFT estimates: shown softened until confirmed ----
  {
    key: 'capacity',
    label: 'Monthly capacity',
    value: 'On request',
    draftValue: '~60,000–80,000 pcs/mo',
    detail: 'Confirmed per program',
    confirmed: false,
  },
  {
    key: 'moq',
    label: 'MOQ',
    value: 'Small-batch friendly',
    draftValue: '300–500 pcs / style / color',
    detail: 'Flexible for emerging brands',
    confirmed: false,
  },
  {
    key: 'leadtime',
    label: 'Lead time',
    value: 'Program-based',
    draftValue: 'Sampling 7–14 days; bulk 30–45 days',
    detail: 'Quoted per order after tech pack',
    confirmed: false,
  },
  {
    key: 'incoterms',
    label: 'Incoterms',
    value: 'EXW / FOB',
    draftValue: 'EXW Gaindakot / FOB Kolkata',
    detail: 'Export routing supported',
    confirmed: false,
  },
];

// Convenience: the confirmed subset for the homepage trust bar.
export const trustBar = sourcing.filter((s) => s.confirmed);

// -----------------------------------------------------------------------------
// Capabilities — CONFIRMED (grounded in real operations).
// -----------------------------------------------------------------------------
export const capabilities = [
  {
    key: 'design',
    title: 'Design & development',
    icon: 'pencil',
    body:
      'We produce to your designs and spec charts, and can help develop patterns and fits from a reference or sketch. Not just contract sewing — a development partner.',
  },
  {
    key: 'cad',
    title: 'In-house CAD & pattern making',
    icon: 'grid',
    body:
      'Optitex CAD for pattern making, marking, and on-site resizing. Consistent graded patterns and efficient markers mean cleaner fits and less fabric waste.',
  },
  {
    key: 'cutsew',
    title: 'Cut & sew production',
    icon: 'scissors',
    body:
      'A dedicated single-floor knit line of ~100 machines, focused on quality knit basics — t-shirts, polos, and similar jersey and pique garments.',
  },
  {
    key: 'privatelabel',
    title: 'Private-label finishing',
    icon: 'tag',
    body:
      'Your labels, care labels, hangtags, size/composition marking, and retail-ready packaging. Garments arrive branded and ready for your shelves.',
  },
  {
    key: 'qc',
    title: 'Quality control',
    icon: 'check',
    body:
      'In-line and final inspection with attention to stitch quality, measurements, and finish. Compliance-ready and building toward formal audits.',
  },
  {
    key: 'sourcing',
    title: 'Fabric & trims sourcing',
    icon: 'globe',
    body:
      'Flexible global sourcing of fabric and trims (primarily from China), with duty management support so your goods move smoothly.',
  },
];

// -----------------------------------------------------------------------------
// Product line card. GSM values are DRAFT until confirmed -> shown as "on request".
// -----------------------------------------------------------------------------
export const products = [
  {
    key: 'tshirt',
    name: 'Crew-neck T-shirt',
    fabric: 'Single jersey · cotton / CVC',
    gsm: { value: '160–200 GSM', confirmed: false },
    sizes: 'XS–XXL',
    tag: 'Core product',
    blurb:
      'The everyday tee — clean side-seams, consistent necklines, and a finish that holds up wash after wash.',
  },
  {
    key: 'polo',
    name: 'Polo shirt',
    fabric: 'Pique · cotton',
    gsm: { value: '180–220 GSM', confirmed: false },
    sizes: 'XS–XXL',
    tag: 'Core product',
    blurb:
      'Classic pique polo with a structured collar and placket — a private-label staple for retail and corporate programs.',
  },
  {
    key: 'jersey',
    name: 'Jersey & pique basics',
    fabric: 'Knit · cotton / blends',
    gsm: { value: null, confirmed: false },
    sizes: "Men's · Women's · Kids",
    tag: 'Made to spec',
    blurb:
      'Long-sleeve tees, henleys, and related knit basics built to your tech pack across adult and children’s sizing.',
  },
];

// -----------------------------------------------------------------------------
// "How we work" — the corporate-order process (CONFIRMED from live site).
// -----------------------------------------------------------------------------
export const process = [
  { step: 1, title: 'Consultation', body: 'Share your designs, tech pack, or reference and target quantities. We align on what’s buildable.' },
  { step: 2, title: 'Design proposal', body: 'We develop patterns and a spec, and quote MOQ, pricing, and lead time for your program.' },
  { step: 3, title: 'Sample approval', body: 'We make a sample to your spec. You review fit, fabric, and finish; we revise until approved.' },
  { step: 4, title: 'Bulk production', body: 'Approved sample goes to the floor. Cut, sew, and finish under in-line quality checks.' },
  { step: 5, title: 'Delivery & logistics', body: 'Retail-ready packing, export documentation, and duty management — shipped by air or sea.' },
  { step: 6, title: 'Repeat & scale', body: 'Reorders run faster on an approved spec. We scale timelines and volume as your program grows.' },
];

// -----------------------------------------------------------------------------
// Why Trishakti — differentiators (CONFIRMED positioning).
// -----------------------------------------------------------------------------
export const differentiators = [
  {
    title: 'Small-MOQ flexibility',
    body: 'Built for emerging brands and test programs — flexible minimums, scalable planning, and adaptable timelines.',
  },
  {
    title: 'Design, not just sewing',
    body: 'Own designs and spec charts, in-house CAD pattern making, and on-site resizing. We develop, not only assemble.',
  },
  {
    title: 'Quality-focused knit specialist',
    body: 'A sewing-only floor concentrated on knit basics means a top-notch finish on what we actually make.',
  },
  {
    title: '33 years of fashion legacy',
    body: 'Backed by three decades of family experience in the fashion trade — modern precision on a deep foundation.',
  },
];

// -----------------------------------------------------------------------------
// Leadership & team (CONFIRMED roster).
// -----------------------------------------------------------------------------
export const leadership = [
  { name: 'Santosh Rijal', role: 'Founder & CEO' },
  { name: 'Bishnu Rijal', role: 'Principal Founder' },
  { name: 'Saroj Rijal', role: 'Chief Operating Officer' },
];

export const team = [
  { name: 'Uttam Dhakal', role: 'Production & Technical Head' },
  { name: 'Puja Sharma', role: 'Asst. Production Head' },
  { name: 'Jeena Thakuri', role: 'Production Supervisor' },
  { name: 'Chandra Nath Dahal', role: 'Supervisor' },
  { name: 'Zakir Hussain', role: 'CAD Pattern Engineer' },
  { name: 'Bishal Pariyar', role: 'CAD Operator / Cutting Master' },
  { name: 'Narayan Chaudhary', role: 'Cutting Master' },
  { name: 'Sangita Adhikari', role: 'Account Executive' },
  { name: 'Sunil Sharma', role: 'Junior Account Executive' },
];

// -----------------------------------------------------------------------------
// Stats for counters — CONFIRMED only.
// -----------------------------------------------------------------------------
export const stats = [
  { value: '2023', label: 'Founded' },
  { value: '33 yrs', label: 'Family fashion legacy' },
  { value: '~100', label: 'Sewing machines' },
  { value: 'Optitex', label: 'In-house CAD' },
];

// -----------------------------------------------------------------------------
// Compliance / export posture — stated honestly (no unearned cert claims).
// -----------------------------------------------------------------------------
export const compliance = {
  headline: 'Compliance-ready, and building toward formal audits.',
  points: [
    { label: 'EXIM code', value: 'Held', note: 'Registered exporter.' },
    { label: 'REX (EU)', value: 'In progress', note: 'Via TEPC.' },
    { label: 'Social & quality audits', value: 'In progress', note: 'We do not claim certifications we don’t yet hold.' },
    { label: 'Ethical production', value: 'Yes', note: 'Safe conditions and fair labor on our own floor.' },
  ],
};

// -----------------------------------------------------------------------------
// Inquiry form config. Static export -> the form posts to a configurable
// endpoint (Web3Forms / Formspree). Until set, it falls back to a mailto:.
// Set NEXT_PUBLIC_FORM_ENDPOINT at build time to enable direct submission.
// -----------------------------------------------------------------------------
export const inquiry = {
  // Guarded: this module is imported by client components where `process` may be undefined.
  endpoint:
    (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_FORM_ENDPOINT) || '',
  productOptions: [
    'Crew-neck T-shirts',
    'Polo shirts',
    'Jersey / pique knit basics',
    'Other knit garment',
    'Not sure yet',
  ],
};

// -----------------------------------------------------------------------------
// Hero spec string — scannable, pipe-delimited. CONFIRMED facts only.
// -----------------------------------------------------------------------------
export const heroSpecs = [
  'Sewing specialists',
  '~100 machines',
  'Small-MOQ export',
  'In-house Optitex CAD',
];

// -----------------------------------------------------------------------------
// FAQ — answers the questions overseas buyers ask first. Kept honest: where a
// number isn't confirmed, we say it's quoted per program rather than invent one.
// -----------------------------------------------------------------------------
export const faqs = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'We’re built for emerging brands and test programs, so our minimums are flexible and small-batch friendly. Exact MOQ depends on the style, fabric, and colors — send us your spec and we’ll confirm it precisely.',
  },
  {
    q: 'What are your sampling and production lead times?',
    a: 'We quote sampling and bulk timelines against your tech pack once we understand the fabric and quantities. As a focused single-floor factory, we keep communication tight so you always know where your order stands.',
  },
  {
    q: 'Where do you source fabric and trims?',
    a: 'Fabric and trims are sourced flexibly — primarily from China — and the garment is cut, sewn, and finished in Nepal. If you nominate your own fabric or mill, we’re happy to sew to it.',
  },
  {
    q: 'What products do you specialise in?',
    a: 'Knit basics — crew-neck t-shirts, polo shirts, and similar jersey and pique garments across men’s, women’s, and children’s sizing. If it’s a knit garment, we can most likely make it to your spec.',
  },
  {
    q: 'Do you handle export and shipping?',
    a: 'Yes. We hold an EXIM code, offer duty management and export documentation, and ship worldwide by air or sea. REX registration for the EU is in progress via TEPC.',
  },
  {
    q: 'Are you certified / audited?',
    a: 'We’re a young factory and we state our posture honestly: compliance-ready with social and quality audits in progress. We won’t claim certifications we don’t yet hold — but we welcome your audit.',
  },
];

// Primary navigation.
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/capabilities/', label: 'Capabilities' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Get a Quote' },
];

// SEO defaults.
export const seo = {
  siteName: 'Trishakti Apparel',
  titleDefault: 'Trishakti Apparel — Private-Label Knitwear Manufacturer in Nepal',
  description:
    'Export-ready cut-and-sew garment manufacturer in Gaindakot, Nepal. Private-label t-shirts, polos, and knit basics — your designs, made in Nepal. In-house Optitex CAD, small-MOQ flexibility, worldwide shipping.',
  keywords: [
    'Nepal garment manufacturer',
    'private label knitwear manufacturer',
    'cut and sew factory Nepal',
    't-shirt manufacturer Nepal',
    'polo shirt manufacturer',
    'OEM ODM apparel Nepal',
    'contract sewing Nepal',
  ],
  url: 'https://trishaktiapparel.com.np',
};
