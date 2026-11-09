const fs = require("fs");
const path = require("path");
const { homepage } = require("./package.json");

// Hash routes are views of one document, not independently crawlable URLs.
const canonical = homepage.replace(/\/$/, "") + "/";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${canonical}</loc></url>
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("Sitemap generated for " + canonical);
