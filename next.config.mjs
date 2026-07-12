/** @type {import('next').NextConfig} */
// Optional subpath deploy (e.g. a /claude preview folder). Set NEXT_BASE_PATH=/claude
// at build time; leave unset for a root-domain deploy.
const basePath = process.env.NEXT_BASE_PATH || '';

const nextConfig = {
  // Static HTML export — produces /out that can be uploaded to any static/cPanel host.
  output: 'export',
  // No Next.js image optimization server in a static export.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so clean URLs work on cPanel/Apache.
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
