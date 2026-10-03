
import fs from 'node:fs';
const url=(process.argv[2]||'').replace(/\/$/,'');
if(!/^https:\/\//.test(url)){console.error('Usage: node scripts/set-domain.mjs https://your-domain.com');process.exit(1);}
const tpl=fs.readFileSync('sitemap.template.xml','utf8');fs.writeFileSync('sitemap.xml',tpl.replaceAll('{{SITE_URL}}',url));
fs.writeFileSync('robots.txt',`User-agent: *
Allow: /
Disallow: /api/
Sitemap: ${url}/sitemap.xml
`);
console.log(`SEO domain files generated for ${url}`);
