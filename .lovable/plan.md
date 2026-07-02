Swap the site's heading font from **DM Serif Display** (heavy) to a slimmer serif in the same elegant style. Body font (Inter) and mono font (DM Mono) stay the same.

Recommended: **Instrument Serif** — closest visual match, noticeably lighter.

Alternatives if you'd prefer: Cormorant Garamond (very thin), Playfair Display (balanced), or EB Garamond (classic book serif).

## Changes

- `src/routes/__root.tsx` — update the Google Fonts `<link>` to load the new font instead of DM Serif Display.
- `src/styles.css` — update `--font-serif` to the new family name.

That's it — every heading (hero title, section titles, 404, etc.) picks it up automatically since they all use `--font-serif`.

Just tell me which font to use and I'll build it.