# DART Robotics website

The official Destructive Arena Robotics Team website at Virginia Tech. DART is represented within the Competitive Robotics Organization at Virginia Tech (VT CRO) as CroDart.

## Local development

Use Node.js 20 (matching GitHub Actions) and npm.

```sh
npm ci
npm start
```

The development server prints its local address. Production is hosted at
https://dart-vt.github.io/Official-DART-Website/ with hash routes:

- `#/` â€” Home
- `#/about` â€” About and team history
- `#/robots` â€” Robot portfolio
- `#/team` â€” Leadership, contributors, and alumni
- `#/events` â€” Events and archived requirements
- `#/sponsors` â€” Sponsors and sponsorship inquiries

## Verify changes

```sh
npm run lint
npm test -- --watchAll=false --runInBand
npm run build
npm run verify:assets
```

Tests cover routes, menu/focus behavior, themes, gallery controls, event archival state, content retention, and deployment paths. Also inspect all pages at desktop, tablet, and mobile widths, with keyboard navigation, both themes, reduced motion, and 200% zoom. Tests do not substitute for browser layout checks.

## Deployment

The authoritative pipeline is `.github/workflows/pages.yml`: a push to `main` installs with `npm ci`, builds using Node 20, uploads `build/`, and deploys through GitHub Pages Actions. Work on a feature branch and review before merging.

The `homepage` field controls the project base path. Keep `HashRouter` so shared URLs and refreshes work without server rewrites. All public asset paths go through `src/utils/assets.js`; imported fonts are bundled by CRA.

The legacy `npm run deploy` script publishes to the `gh-pages` branch. It is not the current Actions pipeline and should not be used for ordinary development. Root-level `static/`, `images/`, and `docs/` are historical artifacts; edit `src/` and `public/`, not those copies.

## Updating content

| Content                                                 | Source                                    |
| ------------------------------------------------------- | ----------------------------------------- |
| Navigation, metadata, email, social links, VT CRO links | `src/data/site.js`                        |
| Robots and retained descriptions                        | `src/data/robots.js`                      |
| Leadership, operations, web contributors, alumni        | `src/data/team.js`                        |
| Sponsors and logo destinations                          | `src/data/sponsors.js`                    |
| Event schedule, rules, dates, weight classes            | `src/data/events.js`                      |
| Homepage and About narrative                            | `src/pages/Land.js`, `src/pages/About.js` |
| Design tokens, components, responsive layouts           | `src/pages/GlobalStyles.css`              |

Use real, verified content. Empty or `#` member links are intentionally hidden. Commented-out historical records remain inactive. Do not infer current membership or competition results from old photographs.

Event records include an ISO date and an explicit `endsAt` timestamp with timezone offset. After that timestamp the UI shows an archived event, retaining its original requirements without advertising expired registration. Add a new record for a new event rather than overwriting history.

VT CRO is an organizational affiliation, not a sponsor. Preserve both the VT CRO homepage and CroDart team profile links.

## Images and fonts

Original assets are retained. The site uses responsive WebP derivatives described by `src/data/images.json`. To regenerate them after updating the source map:

```sh
python -m pip install Pillow
python scripts/optimize-images.py
```

Commit the derivatives and manifest; Python is not required by the production build. Add a source entry and use the shared `Photo` component. It supplies dimensions, responsive sizes, and lazy loading. Only prominent page images should opt into eager loading. Sponsor logos use their original assets on neutral white surfaces.

The locally hosted Barlow and Barlow Condensed fonts are licensed under the SIL Open Font License; see `src/assets/fonts/OFL.txt`. There are no runtime font or icon CDN dependencies.

The gallery preserves the original combat video with native controls and no autoplay. Any replacement video should include accurate captions for speech and meaningful audio, plus an appropriate visual description.

## Accessibility and themes

Shared navigation includes active states, a mobile disclosure, Escape handling, and focus restoration. A skip link and route focus management support keyboard navigation. Standard details/summary controls expose event rules. Reduced-motion settings disable decorative transitions.

One theme hook runs in the application shell. It honors a valid saved `theme` preference, otherwise follows the operating system; the toggle saves an explicit choice. Storage failures do not prevent theme changes. Do not add page-level theme mutations.

## SEO limitations

The HTML template provides one canonical site URL and social preview. Client navigation updates titles and descriptions. Hash routes are not independently indexed pages, and social crawlers generally see the base HTML metadata. The sitemap intentionally lists only the canonical base document; do not add fictitious `/about` or `/robots` server URLs.

Regenerate the sitemap after changing `homepage` with `npm run sitemap`. Independent page indexing would require a separately reviewed routing/prerendering change.

## Content requiring confirmation

- Pickle Jar's existing weapon label says â€œSpikes,â€ while its stored description describes a spinner. Refuse's stored description also needs verification against its photograph. All six original descriptions remain in data; none is newly published as a verified specification.
- Older homepage copy referenced AutoNav and VEX-style matches alongside RoboGames. The current About copy and official CroDart profile describe combat robotics and NHRL. The refresh uses that focused description; confirm historical participation before reintroducing those older claims.
- The restored Team and Sponsors records are the repository's existing records, not a newly verified current roster or sponsorship list.
- The existing Discord invite and organization contact addresses are retained; automated HTTP checks cannot establish invite validity or email deliverability.
