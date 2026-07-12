// Prefix a public asset path with the deploy base path.
// next/image with `unoptimized: true` does NOT apply basePath to raw src, so we
// do it here. Returns the path unchanged on a root-domain deploy (BASE = '').
const BASE =
  (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_BASE_PATH) || '';

export function asset(path) {
  if (!path) return path;
  return BASE && path.startsWith('/') ? `${BASE}${path}` : path;
}
