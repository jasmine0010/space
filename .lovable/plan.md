## Goal
Make the typography feel a bit sharper — more crisp and precise — without changing the overall design or vibe.

## Changes

1. **Tighter heading letter-spacing** — Pull big serif headings (hero H1, section H2s) in slightly with `tracking-tight` so letters sit closer and feel more defined.

2. **Crisper small caps** — Increase letter-spacing on the small uppercase labels (e.g. "EST. 1962 · PUBLIC ASTRONOMY", nav items) just a touch and bump weight from 400 → 500 on the DM Mono labels so they read sharper.

3. **Tighter line-height on headings** — Drop hero H1 from `leading-[0.95]` to `leading-[0.9]` and section headings to a tighter leading so the type blocks feel more architectural.

4. **Body text refinement** — Bump IBM Plex Sans body from default weight to 400 with slightly tighter tracking (`tracking-[-0.01em]`) on paragraphs for a more precise read.

5. **Font smoothing** — Add `-webkit-font-smoothing: antialiased` globally in `src/styles.css` so text renders crisper on screens.

## Files touched

- `src/routes/index.tsx` — add `tracking-tight` / tighter leading utilities on headings, tracking on body paragraphs
- `src/styles.css` — one line for antialiasing, small tweak to mono label weight/tracking

No new fonts, no color changes, no layout changes.