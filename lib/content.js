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
  email: 'admin@trishaktiapparel.com.np',
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
  // ---- CONFIRMED by Santosh (owner) 2026-07-13. Typical ranges; each order is
  // ---- confirmed per program.
  {
    key: 'capacity',
    label: 'Monthly capacity',
    value: '~60,000–80,000 pcs',
    detail: 'Per month · confirmed per program',
    confirmed: true,
  },
  {
    key: 'moq',
    label: 'MOQ',
    value: 'From ~300 pcs',
    detail: 'Per style / color · small-batch friendly',
    confirmed: true,
  },
  {
    key: 'leadtime',
    label: 'Lead time',
    value: 'Sample 7–14d · Bulk 30–45d',
    detail: 'After tech-pack approval',
    confirmed: true,
  },
  {
    key: 'incoterms',
    label: 'Incoterms',
    value: 'EXW / FOB',
    detail: 'EXW Gaindakot · FOB Kolkata',
    confirmed: true,
  },
];

// Homepage hero trust bar — curated 4 (the fuller set shows in SourcingFacts).
export const trustBar = sourcing.filter((s) =>
  ['machines', 'focus', 'cad', 'origin'].includes(s.key)
);

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
// Images are the factory's own real product photography (public/assets/products).
// -----------------------------------------------------------------------------
export const products = [
  {
    key: 'tshirt',
    slug: 't-shirts',
    name: 'Crew-neck T-shirt',
    h1: 'Private-Label T-Shirt Manufacturer in Nepal',
    seoDescription:
      'Private-label crew-neck t-shirt manufacturer in Nepal — single jersey cotton/CVC, low MOQ from ~300 pcs/style, duty-free to the EU/UK/Canada. Made to your tech pack.',
    fabric: 'Single jersey · cotton / CVC',
    gsm: { value: '160–200 GSM', confirmed: false },
    sizes: 'XS–XXL',
    tag: 'Core · knit',
    image: '/assets/products/tshirt.jpg',
    alt: 'Folded private-label crew-neck t-shirts in multiple colours with hangtags',
    blurb:
      'The everyday tee — clean side-seams, consistent necklines, and a finish that holds up wash after wash.',
    intro:
      'We manufacture private-label crew-neck t-shirts for brands, importers, and resellers worldwide — produced to your own designs and tech pack. Single jersey in cotton or CVC, with the clean side-seams, consistent necklines, and durable finish a retail programme needs. Low minimums make us a fit for emerging labels; duty-free access to the EU, UK, and Canada makes the landed cost work.',
    details: [
      'Single jersey knit — 100% cotton, CVC, or poly-cotton blends',
      'Crew, V-neck, and long-sleeve variants',
      'Screen/DTG-ready blanks or fully finished with your labels & tags',
      'Combed/ring-spun options for a premium hand-feel',
    ],
    keywords: ['t-shirt manufacturer Nepal', 'private label t-shirt manufacturer', 'custom t-shirt manufacturer Nepal', 'low MOQ t-shirt manufacturer'],
  },
  {
    key: 'polo',
    slug: 'polo-shirts',
    name: 'Polo shirt',
    h1: 'Polo Shirt Manufacturer in Nepal',
    seoDescription:
      'Private-label polo shirt manufacturer in Nepal — cotton pique, structured collar & placket, low MOQ, duty-free to the EU/UK/Canada. Retail & corporate programmes.',
    fabric: 'Pique · cotton',
    gsm: { value: '180–220 GSM', confirmed: false },
    sizes: 'XS–XXL',
    tag: 'Core · knit',
    image: '/assets/products/polo.jpg',
    alt: 'Private-label pique polo shirts folded with brand hangtags',
    blurb:
      'Classic pique polo with a structured collar and placket — a private-label staple for retail and corporate programs.',
    intro:
      'Our pique polo is a private-label staple for retail lines and corporate/uniform programmes — a structured collar, clean placket, and consistent fit across the size run. Produced to your spec in cotton pique, with your labels, tipping, and packaging. Low MOQ per style and colour, duty-free into the EU, UK, and Canada.',
    details: [
      'Cotton pique (single/double), structured collar & placket',
      'Contrast tipping, custom buttons, side-vents on request',
      'Embroidery/print-ready or finished with your branding',
      'Retail, corporate, and uniform programmes',
    ],
    keywords: ['polo shirt manufacturer Nepal', 'private label polo shirt supplier', 'custom polo shirt manufacturer', 'pique polo manufacturer'],
  },
  {
    key: 'jersey',
    slug: 'knit-jersey',
    name: 'Long-sleeve & jersey basics',
    h1: 'Knit & Jersey Basics Manufacturer in Nepal',
    seoDescription:
      'Knit jersey basics manufacturer in Nepal — long-sleeve tees, henleys, ribbed tops across men’s, women’s & kids. Made to your tech pack, low MOQ, duty-free EU/UK/CA.',
    fabric: 'Knit · cotton / blends',
    gsm: { value: null, confirmed: false },
    sizes: "Men's · Women's · Kids",
    tag: 'Knit · made to spec',
    image: '/assets/products/longsleeve.jpg',
    alt: 'Long-sleeve knit tops in pastel and burgundy laid flat',
    blurb:
      'Long-sleeve tees, henleys, ribbed tops and related knit basics built to your tech pack across adult and children’s sizing.',
    intro:
      'Beyond tees and polos, we make the wider family of knit jersey basics — long-sleeve tees, henleys, ribbed tops, and layering pieces — across men’s, women’s, and children’s sizing. All built to your tech pack, with the fit and finish to sit alongside your core range.',
    details: [
      'Long-sleeve tees, henleys, ribbed & layering knits',
      "Men's, women's, and children's grading",
      'Single jersey, rib, and interlock constructions',
      'Coordinated sets and multi-style programmes',
    ],
    keywords: ['knitwear manufacturer Nepal', 'jersey manufacturer Nepal', 'long sleeve t-shirt manufacturer', 'knit basics supplier'],
  },
  {
    key: 'woven',
    slug: 'woven-shirts',
    name: 'Woven shirts',
    h1: 'Woven Shirt Manufacturer in Nepal',
    seoDescription:
      'Woven shirt manufacturer in Nepal — casual and printed cotton shirts produced to your spec. Knit specialists, woven-capable. Low MOQ, duty-free EU/UK/Canada.',
    fabric: 'Woven · cotton / blends',
    gsm: { value: null, confirmed: false },
    sizes: 'XS–XXL',
    tag: 'Woven · available',
    image: '/assets/products/woven.jpg',
    alt: 'Woven casual shirts folded with hangtags',
    blurb:
      'Knit is our specialty, but we also run woven — casual and printed shirts produced to your spec when your program needs them.',
    intro:
      'Knit is our specialty, but we also run woven when your programme needs it — casual and printed cotton shirts produced to your spec. A convenient single-source option when you want your knit and woven styles from one trusted partner.',
    details: [
      'Casual, printed, and solid woven shirts',
      'Cotton and cotton-blend wovens',
      'Made to your tech pack alongside your knit range',
      'Single-source your knit + woven programme',
    ],
    keywords: ['woven shirt manufacturer Nepal', 'custom shirt manufacturer', 'private label woven shirts', 'cotton shirt manufacturer Nepal'],
  },
];

// Heritage / social proof — CONFIRMED. The established business behind the factory.
export const heritage = {
  statement:
    'Trishakti Apparel is the manufacturing arm of Trishakti Stores — a fashion business trusted since 1991 and supplying 750+ retail and wholesale stores across Nepal. A young factory, backed by three decades of proven trade.',
  proof: [
    { value: 'Since 1991', label: 'Parent business established' },
    { value: '750+', label: 'Stores served across Nepal' },
    { value: '33 yrs', label: 'In the fashion trade' },
  ],
};

// Two ways to buy — custom private-label OR our own ready-made designs.
export const offerings = [
  {
    key: 'private-label',
    title: 'Private label — your designs',
    icon: 'pencil',
    body:
      'Send us your designs, tech pack, or a reference and we build it to your spec — your labels, your fits, your colors. Full development support with in-house CAD.',
    points: ['Your brand & labels', 'Made to your tech pack', 'Sample-approved before bulk'],
    cta: 'Request a quote',
  },
  {
    key: 'ready-made',
    title: 'Ready-made — our designs, ready to import',
    icon: 'tag',
    body:
      'Short on time? Import our own ready designs — proven knit styles you can order, ship, and sell with minimal lead time. Ideal for resellers, wholesalers, and importers who want a fast, low-risk first order.',
    points: ['Our proven styles', 'Faster lead time', 'For resellers & importers'],
    cta: 'See what’s available',
  },
];

// Extra real product photography for the "what we make" gallery.
export const gallery = [
  { src: '/assets/products/g-polos.jpg', alt: 'Range of pique polo shirts in multiple colours' },
  { src: '/assets/products/g-womens.jpg', alt: 'Women’s printed knit t-shirts' },
  { src: '/assets/products/g-kids.jpg', alt: 'Kids’ co-ord t-shirt and shorts set' },
  { src: '/assets/products/g-polo-life.jpg', alt: 'Model wearing a knit polo shirt' },
  { src: '/assets/products/g-sleeveless.jpg', alt: 'Sleeveless knit tees laid flat' },
  { src: '/assets/products/g-womens-ls.jpg', alt: 'Women’s long-sleeve ribbed tops' },
  { src: '/assets/products/g-kidsset.jpg', alt: 'Children’s knit apparel sets' },
  { src: '/assets/products/g-shorts.jpg', alt: 'Knit shorts in multiple colours' },
];

// -----------------------------------------------------------------------------
// Factory / production imagery.
// NOTE: these are LICENSED STOCK photos (Pexels, free commercial license, no
// attribution required) used ILLUSTRATIVELY of cut-and-sew production — they are
// NOT captioned as Trishakti's specific floor. Swap for real factory photos when
// available (drop into public/assets/factory and update the src below).
// -----------------------------------------------------------------------------
export const factory = {
  eyebrow: 'Inside cut & sew',
  title: 'Where your garments take shape',
  body:
    'A dedicated single-floor knit line — cutting, sewing, and finishing under one roof. We’d rather show you the real thing than tell you: come for a factory visit, or ask for a live video walkthrough of your order on the line.',
  // honest disclosure shown as a small caption under the images
  caption:
    'Images illustrate garment cut-and-sew production. For photos or a live tour of our own floor, book a visit or a video call.',
  images: [
    { src: '/assets/factory/floor-1.jpg', alt: 'Garment factory worker at an industrial sewing machine on a production floor' },
    { src: '/assets/factory/floor-2.jpg', alt: 'Industrial sewing station with garments on a cut-and-sew line' },
  ],
};

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
// Why source from Nepal — verified trade advantages, worldwide audience.
// ACCURACY GUARDRAILS (do not loosen without re-checking):
//  - Duty-free (0%) applies to EU / UK / Canada / Australia / Japan under LDC
//    "single transformation" rules — imported (Chinese) fabric still qualifies.
//  - This is tied to Nepal's LDC status; EU transition runs ~to Nov 2029.
//  - NEVER claim duty-free to the USA for knit tees/polos. US angle = "lowest
//    tariff in South Asia" (~10% vs India ~50%, Bangladesh ~20%).
//  - Buyer should verify exact HS-code rule of origin for their market.
// -----------------------------------------------------------------------------
export const whyNepal = [
  {
    title: 'Duty-free access to the EU, UK & Canada',
    icon: 'globe',
    body:
      'As a Nepal-based LDC producer, our t-shirts and polos qualify for 0% import duty into the EU (Everything But Arms), the UK (DCTS), and Canada (LDCT) under single-transformation rules — so they count as Nepal-made even though the fabric is imported, and we supply the Certificate of Origin.',
    note: 'Applies to EU / UK / Canada / Australia / Japan. Ask us about the LDC-transition window (EU ~to 2029) and your exact product.',
  },
  {
    title: 'The lowest US tariff in South Asia',
    icon: 'spark',
    body:
      'Goods from Nepal face roughly a 10% US tariff — versus about 50% for India and 20% for Bangladesh. If you’re de-risking away from higher-tariff sourcing, Nepal is the smart move. (We don’t claim US duty-free — we quote the real landed advantage.)',
    note: null,
  },
  {
    title: 'Competitive labor — without the queue',
    icon: 'check',
    body:
      'Nepali production costs sit below India, Vietnam, and China. And because we’re not overbooked like the mega-factories, you get dedicated capacity, faster scheduling, and direct attention on every order.',
    note: null,
  },
  {
    title: 'Genuinely low MOQs',
    icon: 'tag',
    body:
      'Built for growing and emerging brands — start small and scale as you grow, with flexible minimums and adaptable timelines.',
    note: null,
  },
  {
    title: 'Ethically made, transparently',
    icon: 'grid',
    body:
      'Fair wages, safe conditions, and a strict no-child-labor policy on our own floor — with social-compliance auditing in progress. Clear English communication from sample to shipment.',
    note: null,
  },
  {
    title: 'Worldwide shipping',
    icon: 'pin',
    body:
      'We ship to importers in any market — by sea (via Kolkata/Vizag) or air for samples and urgent runs — with export documentation and duty management handled for you.',
    note: null,
  },
];

// -----------------------------------------------------------------------------
// Duty-free / market-access explainer (for the /why-nepal landing page).
// ACCURACY: verified across research. Duty-free = EU/UK/Canada (+AU/JP) under LDC
// single-transformation (imported fabric qualifies). NOT the US. Tied to Nepal's
// LDC status; EU transition ~to 2029, then double-transformation risk. Buyers
// must verify the exact HS-code rule for their market — say so.
// -----------------------------------------------------------------------------
export const dutyFree = {
  intro:
    'Because Nepal is a Least Developed Country (LDC), garments cut and sewn here qualify for preferential, often zero, import duty in major markets — under “single transformation” rules, meaning your goods count as Nepal-made even though the fabric is imported. We supply the Certificate of Origin. Here is what that means market by market.',
  markets: [
    {
      market: 'European Union',
      scheme: 'Everything But Arms (EBA)',
      rate: '0% duty',
      rule: 'Single transformation — imported fabric qualifies',
      note: 'Standard EU (MFN) duty on cotton knit t-shirts is ~12%, so this is a direct landed-cost advantage.',
      strong: true,
    },
    {
      market: 'United Kingdom',
      scheme: 'DCTS — Comprehensive Preferences',
      rate: '0% duty',
      rule: 'Single transformation (2025 liberalisation)',
      note: 'Same duty-free access as the EU for LDC garments.',
      strong: true,
    },
    {
      market: 'Canada',
      scheme: 'LDCT',
      rate: '0% duty',
      rule: 'Cut/sewn/knit in an LDC qualifies — even with foreign fabric (from Jan 2025)',
      note: 'The most fabric-friendly rule of the three.',
      strong: true,
    },
    {
      market: 'Australia & Japan',
      scheme: 'LDC duty-free programs',
      rate: '0% duty',
      rule: 'LDC status qualifies — confirm the HS-line rule per product',
      note: 'Secondary markets; ask us to verify your product.',
      strong: false,
    },
    {
      market: 'United States',
      scheme: 'No duty-free (be clear)',
      rate: '~10% tariff',
      rule: 'GSP lapsed; Nepal Trade Preference Program expired Dec 2025',
      note: 'We don’t claim US duty-free — but Nepal’s ~10% is the lowest tariff in South Asia (vs ~50% India, ~20% Bangladesh). The de-risking play.',
      strong: false,
    },
  ],
  timeline:
    'Nepal is scheduled to graduate from LDC status in November 2026, with an EU/UK transition keeping duty-free access to roughly 2029. After that, access likely shifts to standard GSP with “double transformation” rules — under which imported fabric may no longer qualify. Translation: there’s a real window to lock in duty-free sourcing now, and we’ll help you plan for the transition.',
  disclaimer:
    'Duty rates and rules of origin depend on your market and your product’s exact HS code, and LDC preferences change over time. Treat the above as guidance — tell us your destination country and product and we’ll confirm precisely what applies to your order.',
};

// Duty-free FAQ (renders on /why-nepal with FAQPage schema).
export const dutyFaqs = [
  {
    q: 'Is clothing from Nepal duty-free into the EU?',
    a: 'Yes — under the EU’s Everything But Arms (EBA) scheme for Least Developed Countries, garments made in Nepal enter at 0% import duty, versus the standard ~12% MFN rate on cotton knit t-shirts. We supply the Certificate of Origin.',
  },
  {
    q: 'Does Chinese fabric disqualify the duty-free origin?',
    a: 'No. The EU, UK, and Canada apply “single transformation” rules of origin to LDC garments — cutting and sewing the garment in Nepal is enough for it to qualify as Nepal-made, even though the fabric is imported.',
  },
  {
    q: 'Do UK and Canadian buyers get duty-free access too?',
    a: 'Yes — the UK (DCTS) and Canada (LDCT) both grant 0% duty on LDC-made garments under single-transformation rules. Canada’s rule is the most fabric-friendly.',
  },
  {
    q: 'What about the United States?',
    a: 'The US does not currently offer duty-free access for knit t-shirts and polos from Nepal (GSP lapsed; the Nepal Trade Preference Program expired end-2025). However, Nepal carries roughly a 10% US tariff — far below India (~50%) or Bangladesh (~20%) — making it a strong option for de-risking US sourcing.',
  },
  {
    q: 'What happens after Nepal’s LDC graduation in 2026?',
    a: 'Nepal graduates from LDC status in November 2026, with an EU/UK transition keeping duty-free access to around 2029. After that, rules likely tighten to “double transformation.” We help buyers lock in duty-free programs now and plan for the transition.',
  },
];

// -----------------------------------------------------------------------------
// Buyer confidence / trust — answers the unspoken "can I trust a small, new,
// overseas supplier not to take my deposit and disappear?" Framed as PROOF, not
// pleading. This is the factory's own commitment to buyers.
// -----------------------------------------------------------------------------
export const trust = {
  headline: 'Small factory, serious about trust',
  intro:
    'We know sending money overseas to a supplier you’ve never met takes a leap of faith — especially with a young, smaller factory. So we don’t ask you to just believe us. We prove it, order by order.',
  points: [
    {
      title: 'A real, registered exporter',
      body: 'A physical factory in Gaindakot with a registered EXIM code — not a trading desk. Visit us in person, or ask for a live video walkthrough of your goods on the line any time.',
      icon: 'check',
    },
    {
      title: 'Approve before you commit',
      body: 'Nothing goes to bulk until you sign off a pre-production sample. You see the fabric, fit, and finish first — no surprises after payment.',
      icon: 'grid',
    },
    {
      title: 'Payment terms that protect you',
      body: 'We work on fair, staged terms and accept L/C for larger orders, with balances structured against inspection and shipping documents — so your money tracks real progress.',
      icon: 'tag',
    },
    {
      title: 'One team, direct and accountable',
      body: 'You deal directly with the people running the floor — photo and status updates at every stage, straight answers, and the owner reachable when it matters.',
      icon: 'spark',
    },
  ],
  pledge:
    'Being small doesn’t mean cutting corners — it means every single order matters to us. We’d rather earn a little less than ever break your trust.',
  // Cultural trust — reputation PLUS proof (never a defensive "we won't cheat").
  culture: {
    title: 'Trust, the Nepali way',
    body:
      'Nepal is known the world over for warmth, hospitality, and integrity — the land whose Gurkha soldiers became a global byword for loyalty and honour. We do business in that same spirit: honest, straight-dealing, and built for the long term. And we don’t ask you to take it on faith — we back it with a registered company you can visit, an open-door audit, and payment terms that keep you protected.',
  },
};

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
  buyerTypes: [
    'Brand / label',
    'Importer',
    'Wholesaler / distributor',
    'Reseller / retailer',
    'Buying house / agent',
    'Other',
  ],
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
  'Knit specialists',
  '~100 machines',
  'Low-MOQ export',
  'Duty-free to EU / UK / CA',
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
  { href: '/why-nepal/', label: 'Why Nepal' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Get a Quote' },
];

// SEO defaults.
export const seo = {
  siteName: 'Trishakti Apparel',
  titleDefault:
    'Trishakti Apparel — Private-Label Knitwear & T-Shirt Manufacturer in Nepal',
  description:
    'Export cut-and-sew garment manufacturer in Gaindakot, Nepal. Private-label t-shirts, polos, and knit basics — your designs, made in Nepal. Low MOQ, in-house Optitex CAD, duty-free access to the EU, UK & Canada, and worldwide shipping.',
  keywords: [
    'Nepal garment manufacturer',
    'private label knitwear manufacturer',
    'cut and sew factory Nepal',
    't-shirt manufacturer Nepal',
    'polo shirt manufacturer Nepal',
    'low MOQ clothing manufacturer Nepal',
    'ethical clothing manufacturer Nepal',
    'Nepal garment duty free EU',
    'Nepal apparel LDC duty free UK Canada',
    'OEM ODM apparel Nepal',
    'private label t-shirt manufacturer',
    'alternative to India garment manufacturing',
    'contract sewing Nepal',
  ],
  url: 'https://trishaktiapparel.com.np',
};
