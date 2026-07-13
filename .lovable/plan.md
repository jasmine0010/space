The hero "About us" button currently uses a solid plasma-blue background (`bg-accent`), which draws too much attention against the dark space image.

### Proposed change
Replace the solid accent button with a subdued, institutional treatment that sits quietly on the hero:

- **Visual style:** transparent background with a thin white/soft border (`border-white/30`) and white text, matching the feature-strip arrow circles and the overall dark, technical aesthetic.
- **Typography:** keep the small uppercase tracked label in DM Mono, same as the current button.
- **Hover:** slightly brighten the border and text (`hover:border-white/60 hover:text-accent`) for feedback without adding a new loud color.
- **Shape:** keep the same inline-flex layout with the `ArrowUpRight` icon.

This makes the CTA feel like part of the hero's information layer rather than a separate, high-conversion marketing button.

### Alternative (if you want it even quieter)
Reduce it to a minimal text link: white text + arrow, no border or background, with only an underline or color shift on hover.

### Files to edit
- `src/routes/index.tsx` — restyle the hero "About us" anchor around line 182.

No new dependencies or sections needed.