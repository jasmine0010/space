Add the Discord server link in two obvious places while keeping the current dark/technical style.

1. **Top navigation** — Replace the current plain "Join" text link on the right side of the sticky header with a Discord-branded button. Use the Discord icon + "Discord" label so it reads immediately as the community entry point.
2. **Footer** — Add a small social row that includes the Discord link alongside a short "Community" label, so the link is reachable from every page.
3. **Contact section** — Optionally add a second contact path card/button reading "Join us on Discord" to make the link even more obvious for visitors scanning the page.

Technical details:
- Add `lucide-react` icon or inline SVG for the Discord mark.
- Link opens `https://discord.gg/lovable-dev` in a new tab with `rel="noopener noreferrer"`.
- Keep the same border/ghost styling as the hero "About us" button for the nav Discord button so it blends with the dark header.
- Footer link uses the existing muted/uppercase footer style.
- No new dependencies required.