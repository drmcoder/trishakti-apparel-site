/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces /out that can be uploaded to any static/cPanel host.
  output: 'export',
  // No Next.js image optimization server in a static export.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so clean URLs work on cPanel/Apache.
  trailingSlash: true,
};

export default nextConfig;
