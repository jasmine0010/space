## Typography Update

Replace the current font stack so every text tier uses the requested typeface.

### What will change

1. **Headings / titles** → **Inter**, bold
   - Keep Inter loaded from Google Fonts.
   - Set `h1–h4` to `font-weight: 700` in `src/styles.css`.

2. **Body / most text** → **Public Sans Web** (Google Fonts “Public Sans”)
   - Swap out IBM Plex Sans in the Google Fonts link in `src/routes/__root.tsx`.
   - Point `--font-sans` to `"Public Sans", sans-serif` in `src/styles.css`.

3. **Small notes / technical labels** → **DM Mono** as self-hosted `.woff2`
   - Add DM Mono `.woff2` files under `public/fonts/`.
   - Declare `@font-face` for DM Mono in `src/styles.css`.
   - Keep `--font-mono` mapped to DM Mono for chips, eyebrow text, nav labels, etc.

### Files touched

- `src/routes/__root.tsx` — update Google Fonts link (Inter + Public Sans, remove IBM Plex Sans).
- `src/styles.css` — set `--font-sans` to Public Sans, `--font-serif` to Inter, add `@font-face` for DM Mono woff2, make headings bold.
- `public/fonts/` — add DM Mono woff2 files.

### What stays the same

- Color tokens, layout, sections, images, and all existing component logic.
- DM Mono remains the font for uppercase technical/eyebrow text; only the file format/loading method changes.