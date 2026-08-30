# Gravity Well Kits Design QA

**Source visual truth**

- Finished-device photo: `/Users/ashersuter/Pictures/Photos Library.photoslibrary/resources/derivatives/1/1175C82E-7E0F-44A1-B86E-46D5E0B1CC34_1_105_c.jpeg` (768 x 1024 px).
- CAD assembly image: `/var/folders/3j/j_77v6gs3sx0gvbxzfgsvb7c0000gn/T/codex-clipboard-ecddff15-2b53-4a9d-a884-94ff7d8fcfe9.png` (1542 x 1256 px).
- The supplied images define the product and assembly visuals; the existing site defines the article styling, typography, and dark visual system.

**Implementation evidence**

- Kits section: `/tmp/gravity-well-kit-desktop.png`.
- Desktop guide: `/tmp/gravity-well-guide-desktop.png`, 1280 x 900 CSS px at device scale 1.
- Mobile guide top: `/tmp/gravity-well-guide-mobile.png`, 390 x 844 CSS px at device scale 1.
- Mobile assembly: `/tmp/gravity-well-assembly-mobile.png`, 390 x 844 CSS px at device scale 1.
- Combined visual comparison: `/tmp/gravity-well-comparison.png`.
- State: Kits section at `#kits`, Gravity Well guide opened as a modal.

**Full-view comparison evidence**

- The finished-device image is used directly for the Kits card and guide hero without recreation or substitution.
- The desktop guide places the finished device on the left and the complete supplies panel on the right, matching the requested structure.
- At 390 px, the guide stacks into a single column with the title and device image first, followed by supplies, assembly steps, and the CAD explanation.
- No horizontal overflow was detected: document width and viewport width both measured 1280 px on desktop and 390 px on mobile.

**Focused-region comparison evidence**

- The CAD image remains legible at mobile width and sits directly below the four numbered assembly steps.
- The finished photo preserves the full circular frame, fabric, center bearing, and supporting body in both desktop and mobile crops.
- The supply link retains the supplied Amazon destination, opens in a new tab, and visibly identifies the listed price.

**Required fidelity surfaces**

- Fonts and typography: existing display, body, and spaced-uppercase styles are preserved across the Kits card and guide.
- Spacing and layout rhythm: desktop uses the requested balanced two-column introduction; mobile uses a readable one-column stack with consistent 20 px side spacing.
- Colors and visual tokens: existing near-black surfaces, cool gray copy, cyan accents, fine borders, and square controls are reused.
- Image quality and asset fidelity: both user-supplied images are copied into the application and rendered without generated replacements.
- Copy and content: the former News content is removed; the Gravity Well supplies, M3 assembly instructions, safety note, and observation prompt are present.

**Interactions tested**

- Kits navigation link scrolls to `#kits`.
- Gravity Well article card opens the build guide.
- Close control works and the Escape key closes the guide.
- Background scrolling is locked while the guide is open and restored after closing.
- Cross-stretch fabric link uses the supplied URL and opens in a new tab.
- Keyboard-accessible button and dialog labels are exposed in the rendered accessibility tree.

**Findings**

- No actionable P0, P1, or P2 visual or interaction findings remain in the tested desktop and mobile states.
- The development console retains the pre-existing `data-tsd-source` hydration warning from the local component tagger. It does not affect this layout or the production build.

**Comparison history**

1. Implemented the existing article-card style with the supplied finished-device image and a single Gravity Well entry.
2. Added a responsive build guide with finished photo and supplies side by side on desktop, stacked on mobile.
3. Checked the source assets and rendered guide together; image subjects, assembly relationship, and requested content are preserved.
4. Verified both responsive states, the link destination, modal close behavior, and absence of horizontal overflow.

**Implementation checklist**

- [x] Replace News navigation and content with Kits.
- [x] Remove all previous article content.
- [x] Add one Gravity Well kit article using the existing visual language.
- [x] Add finished-device image, complete supplies, and linked fabric listing.
- [x] Add simple M3 assembly directions and CAD explanation.
- [x] Verify desktop and mobile layouts and interactions.
- [x] Verify production build.

**Follow-up polish**

- No P3 changes are required for this scoped implementation.

## Hero duplicate cleanup

**Source and implementation evidence**

- Source: the browser annotation screenshot supplied in the cleanup request, showing the selected `Hands-on kit / Build a Gravity Well` hero strip at a 628 x 1155 viewport.
- Implementation: `/tmp/space-hero-divider-only-628x1155.png`, captured from the public Tailscale URL at the same 628 x 1155 viewport.
- The source annotation and updated capture were inspected together in the same review context.

**Comparison result**

- Removed the duplicate Gravity Well label, title, link, and arrow from the hero.
- Preserved the original divider position and empty breathing room so the approved nebula, headline, description, and button composition does not shift.
- Confirmed the Kits section remains directly below the hero and retains the only Gravity Well article entry.
- The rendered hero accessibility tree contains only the headline, description, and About link; the decorative divider is hidden from assistive technology.
- No horizontal overflow or new console errors were introduced. The existing development-only `data-tsd-source` hydration warning remains unchanged.
- Production build and `git diff --check` pass.

## About image replacement

**Source and implementation evidence**

- Source: the browser annotation screenshot supplied with the request, identifying the existing observatory image in the About section.
- Replacement source asset: `src/assets/gallery-stephan-quintet.png`, the same Stephan's Quintet image already used in the gallery.
- Implementation: `/tmp/space-about-stephan-quintet-628x1155.png`, captured from the public Tailscale URL at the annotated 628 x 1155 viewport.
- The selected About region, replacement asset, and updated browser capture were inspected together.

**Comparison result**

- The observatory image is fully replaced by Stephan's Quintet.
- The existing 4:5 image frame, dimensions, lazy loading, spacing, and About copy remain unchanged.
- The rendered image exposes the accurate `Stephan's Quintet` alternative text.
- The image fills the mobile frame without distortion or horizontal overflow.
- Production build and `git diff --check` pass. The pre-existing development-only `data-tsd-source` hydration warning remains unchanged.

## Gallery header cleanup

**Source and implementation evidence**

- Source: the browser annotation screenshot supplied with the request, identifying the redundant `Full archive` link in the Gallery header at a 628 x 1155 viewport.
- Implementation: `/tmp/space-gallery-no-full-archive-628x1155.png`, captured from the public Tailscale URL at the same viewport.
- The selected Gallery header and the updated capture were reviewed together.

**Comparison result**

- Removed the self-referential `Full archive` link and arrow control.
- Preserved the Gallery eyebrow, heading, image credit, SARA-RM link, grid spacing, and all gallery image interactions.
- The heading now occupies the available row without an empty control or awkward gap.
- Verified no `Full archive` link remains in the rendered page and no horizontal overflow was introduced.
- Production build and `git diff --check` pass. The existing development-only `data-tsd-source` hydration warning remains unchanged.

final result: passed
