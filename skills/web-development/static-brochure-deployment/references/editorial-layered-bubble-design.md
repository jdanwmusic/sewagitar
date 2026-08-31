---
name: editorial-layered-bubble-design
topic: Layered visual surface (warm-neutral bubble + white cards) for premium brochure landing pages
session_ref: Batch 13 (9fbab6a + 5c74d4c) — sewa-gitar / static-brochure-deployment
depends_on: static-brochure-deployment
---

# Editorial Layered Bubble Design System

Use when the user wants to upgrade a clean white brochure landing page into a premium editorial design WITHOUT redesigning the brand identity, without full redesign, and without decorative gimmicks.

## Design principle (durable)

WHITE PAGE (main bg)
→ WARM NEUTRAL CONTENT SURFACE (soft ivory / warm gray bubble)
→ WHITE CONTENT CARDS (inside the surface)
→ CLEAN WHITE BACKGROUND AGAIN (next section)

This creates visual depth through CONTRAST and SURFACE SEPARATION, not through shadows, glass, gradients, or blobs.

## Implementation rules

### Surface (section-level bubble)
- Background: `bg-ocean-deep/[0.03]` (or `#F5F5F2` / `#F7F4ED` equivalent — very subtle warm neutral)
- Border: `1px solid rgba(15,23,42,0.06)` (thin, almost invisible — intentional, not accidental)
- Border radius: `rounded-32` (large, editorial proportion — not pill-shape)
- Internal spacing: generous (section `py-10` to `py-16`) — not cramped
- Padding: `px-4` (mobile margins preserved; bubble fills content width with comfortable margins)
- DO NOT stretch full-width edge-to-edge; keep `max-w-6xl mx-auto px-4` container inside bubble for controlled proportion

### White cards inside bubble
- Cards: `bg-white`, `rounded-2xl`, subtle border (`border-subtle`), very light shadow (`shadow-card`)
- Images: full container, no heavy padding (`min-h-[260-520px]`), `object-contain` (never crop headstock/body)
- Card content: clean typography, no decorative elements — product photo + title + price + CTA only

### Transition from previous section
- Previous section (e.g., Trust Stats) ends cleanly
- Bubble starts immediately below (no large gap, no hard divider line, no decorative shape)
- Transition should feel like turning a page to a new editorial spread — not like opening a popup

### What NOT to add
- No gradients on bubble or cards
- No glassmorphism / blur
- No decorative blobs / random illustrations
- No neon / bright accent inside bubble
- No oversized drop shadows
- No pill-shaped containers
- No emoji icons
- No animation bounce/scale

## Mobile rules (375px / 390px / 414px)

- Bubble padding: keep comfortable (`px-4`) — don't shrink to zero
- Card height: `min-h-[260px]` (catalog cards) — never too small
- Section spacing: `py-10` (not `py-20`) — tighter but still breathable
- Stats: `py-6` + `gap-3` — compact grouping, not floating elements
- Hero: `py-12 md:py-16` (not `py-20 md:py-32`) — tighter first screen
- No horizontal overflow; no text wrapping breakage

## Desktop rules (1280px / 1440px)

- Max-width container (`max-w-6xl mx-auto`) — bubbles should NOT stretch to full viewport width; editorial proportion requires margins
- Section heading (`font-display text-3xl md:text-4xl`) — prominent but not oversized
- Description (`text-slate-600`, `max-w-xl mx-auto`) — readable, not faded
- Info tags (`text-xs`, `px-2.5 py-0.5`, `rounded-full`) — informative markers, not decorative

## Verification checklist

Before declaring bubble design complete, verify:
- [x] Build PASS (`npm run build` exit 0)
- [x] `bg-ocean-deep/[0.03]` or equivalent light warm neutral present on section
- [x] `rounded-32` (or `rounded-3xl`) used for surface
- [x] Subtle border (`rgba(15,23,42,0.06)`) present — not missing, not thick
- [x] White cards (`bg-white`, `rounded-2xl`) visible inside bubble
- [x] No hard horizontal divider (`<hr>`) between stats and bubble
- [x] No new shadows/decorative elements added
- [x] Mobile (375px) — no overflow, cards readable, bubble not oversized
- [x] Desktop (1440px) — editorial proportion, not full-width block
- [x] Product images (`min-h-[260-300px]`) — focal-point visible, not small
- [x] Typography unchanged (Poppins + Playfair + Inter preserved)
- [x] Ocean palette preserved (deep #0B3D5C as primary, not new colors)
- [x] Scope: ONLY target repo (`sewa-gitar`); other repos LOCKED

## Related references (existing)
- `static-brochure-deployment` SKILL.md (general build rules)
- `references/hero-density-mobile-polish.md` (Batch 12 spacing rules — applies to hero density BEFORE the bubble; not conflicting)
- `references/product-image-card-audit.md` (Batch 10 image sizing — applies inside cards within bubble, not conflicting)
- `references/design-direction-pivot-ocean-batch5.md` (Batch 5 palette: keep `#0B3D5C` primary; warm-neutral bubble complements it — NOT a return to old `#C9A86A` gold)
- `references/deployment-type-d-blocker-protocol.md` (deploy discipline: push to `main` → verify build → live site refresh; don't claim "deployed" before live confirms change)

## Anti-pattern (learned from previous batch errors)

- DON'T: Make the section a full-width gray box (`bg-slate-100` full-width, no rounded corners, thick border). That reads as generic SaaS dashboard.
- DON'T: Make the cards themselves have warm gray backgrounds (cards should be white, section surface warm). Inverting this destroys the layer hierarchy.
- DON'T: Add decorative blob shapes or wave dividers inside the bubble area (decorative elements compete with content; bubble is the visual element).
- DON'T: Make bubble padding too tight (`py-4` / `px-2`). That eliminates editorial breathing room and makes it feel like a mobile notification card.
- DON'T: Apply this bubble pattern to every section (only MAJOR content groups — hero remains clean white; pricing has its own separate surface system; footer remains dark). Overuse destroys the rhythm.
