/* Verify deployable assets without requesting external services. Run after build. */
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const manifest = require("../src/data/images.json");
const { homepage } = require("../package.json");
const root = path.resolve(__dirname, "..");
const build = path.join(root, "build");
const base = new URL(homepage).pathname.replace(/\/$/, "");
let checked = 0;
function exists(file) {
  assert(fs.existsSync(file), `Missing asset: ${path.relative(root, file)}`);
  checked += 1;
}
Object.values(manifest).forEach((photo) => {
  assert(
    photo.width > 0 && photo.height > 0,
    "Image dimensions must be positive",
  );
  photo.variants.forEach((variant) => {
    exists(path.join(root, "public", variant.src));
    exists(path.join(build, variant.src));
  });
});
[
  "images/DART.svg",
  "images/DART-white.svg",
  "images/CaldersLogo.jpg",
  "images/USSVT.png",
  "videos/IMG_9158.mp4",
].forEach((file) => exists(path.join(build, file)));
const html = fs.readFileSync(path.join(build, "index.html"), "utf8");
assert.equal(
  (html.match(/<title>/g) || []).length,
  1,
  "Exactly one page title",
);
assert(
  html.includes(`href="${homepage}/"`),
  "Canonical URL must include the project path",
);
assert(!html.includes("hhttps:"), "Malformed URL");
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (match[1].startsWith("/")) {
    assert(
      match[1].startsWith(base + "/"),
      `Wrong deployment base: ${match[1]}`,
    );
    exists(
      path.join(build, decodeURIComponent(match[1].slice(base.length + 1))),
    );
  }
}
const sitemap = fs.readFileSync(path.join(build, "sitemap.xml"), "utf8");
assert.equal(
  (sitemap.match(/<loc>/g) || []).length,
  1,
  "Hash site sitemap must only list the base document",
);
assert(
  sitemap.includes(`<loc>${homepage}/</loc>`),
  "Sitemap must use canonical project URL",
);
const cssDir = path.join(build, "static/css");
for (const file of fs
  .readdirSync(cssDir)
  .filter((file) => file.endsWith(".css"))) {
  const css = fs.readFileSync(path.join(cssDir, file), "utf8");
  for (const [, url] of css.matchAll(/url\(([^)]+)\)/g)) {
    const clean = url.replace(/["']/g, "");
    if (clean.startsWith("data:")) continue;
    exists(
      clean.startsWith(base + "/")
        ? path.join(build, clean.slice(base.length + 1))
        : path.resolve(cssDir, clean),
    );
  }
}
console.log(
  `Verified ${checked} asset references, production base paths, canonical metadata, and sitemap.`,
);
