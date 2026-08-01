// Single source of truth for the site's version stamp (shown in the footer).
//
// SITE_VERSION — bump this by hand on a meaningful release (content/design change).
//   v1.0 → v1.1 → v1.2 … (minor) ; v2.0 for a big overhaul.
// PUBLISH_ID  — automatic, unique per deploy: the Vercel deploy's git commit SHA
//   (first 7 chars). Falls back to 'dev' for local builds. Lets you match the
//   live site to an exact commit.
export const SITE_VERSION = 'v1.1';

export const PUBLISH_ID = (
  (typeof process !== 'undefined' &&
    process.env &&
    (process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_COMMIT_SHA)) ||
  'dev'
).slice(0, 7);
