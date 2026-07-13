#!/usr/bin/env node
// Submit the site's URLs to IndexNow (Bing, Yandex, Seznam, Naver — instant crawl
// notification). Google does NOT participate in IndexNow; for Google, rely on the
// sitemap submitted in Search Console. Run: `node scripts/indexnow.mjs`.

const HOST = 'trishaktiapparel.com.np';
const KEY = '8cc12be327a2f4b7ad9ba8879b70c591';
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function main() {
  // Pull the current URL list from the live sitemap.
  const res = await fetch(SITEMAP, { headers: { 'User-Agent': 'indexnow-submit' } });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) throw new Error('no URLs found in sitemap');

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  const submit = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${submit.status}`);
  // 200/202 = accepted. 403 = key not verified yet (deploy the key file first).
  if (submit.status >= 400) {
    console.error('response:', await submit.text());
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('IndexNow error:', e.message);
  process.exit(1);
});
