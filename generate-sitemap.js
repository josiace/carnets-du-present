const fs = require('fs');
const path = require('path');

const siteUrl = 'https://carnets-du-present.netlify.app'; // ← à adapter si besoin
const pages = [
  '/',
  '/a-propos',
  '/contact',
  '/archives',
];

const postsDir = path.join(__dirname, 'posts');

function getPostUrls() {
  const files = fs.readdirSync(postsDir);
  return files
    .filter(file => file.endsWith('.html') || file.endsWith('.md'))
    .map(file => `/articles/${file.replace(/\.(html|md)/, '')}`);
}

function buildSitemap(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const footer = `</urlset>`;
  const body = urls.map(url => 
    `  <url><loc>${siteUrl}${url}</loc></url>`
  ).join('\n');
  return `${header}\n${body}\n${footer}`;
}

const allUrls = [...pages, ...getPostUrls()];
const sitemap = buildSitemap(allUrls);

fs.writeFileSync('sitemap.xml', sitemap);
console.log('✅ Sitemap generated as sitemap.xml');
