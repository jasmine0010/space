## What to borrow from nasa.gov

Keeping everything you already have (dark #08080f background, DM Serif headings, plasma blue accent, photo-forward layout). Just layering in a few structural cues from NASA's homepage:

1. **Hero feature strip** — Below the hero title, add a thin divider line with 3 mini "mission callouts" side by side (small uppercase category label like "DEEP SKY SURVEY", then a linked title with an arrow). Mirrors NASA's Hubble / Chandra / JWST strip along the bottom of their hero.

2. **Hero primary CTA** — Add a solid plasma-blue "Watch the film →" button under the mission tagline (NASA has a red "Watch" button in the same spot).

3. **News card tags** — Overlay a small circled-icon "ARTICLE" or "EVENT" chip in the top-left corner of each news card photo, and add a "X MIN READ" meta line above the title. Matches NASA's article chip + read-time treatment.

4. **Section headers with side link** — Update "Featured News" style header: big serif title on the left, small "Recently Published →" style link on the right with an arrow-in-circle. Apply the same pattern to Gallery and Presentations headers for consistency.

5. **Arrow-in-circle affordance** — Introduce a small circular outlined arrow button used on the section-header links and hero mission callouts. Subtle, plasma-blue outline.

6. **Nav polish** — Add a tiny "LIVE" badge next to a new "Observing" nav item (NASA has NASA+ LIVE); keep everything else the same.

## What stays exactly the same

- Color tokens, typography, spacing, fade-in-on-scroll
- Hero image, About split layout, Gallery grid + lightbox, iframe Presentations panel, Team grid, Contact form
- No new animation libraries, no icons library beyond a couple of inline SVG arrows

## Files touched

- `src/routes/index.tsx` — hero feature strip, hero CTA button, news card overlays + read-time, section header pattern, nav tweak
- `src/components/ArrowLink.tsx` (new) — small reusable arrow-in-circle link
- `src/styles.css` — one new utility for the circular arrow button; no token changes

No new dependencies, no backend changes, no layout overhauls — just NASA-flavored detailing on top of the current design.