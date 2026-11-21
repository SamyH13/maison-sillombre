---
name: Maison Sillombre
description: Parfums d'Orient vendus au marché, présentés comme les flacons posés dans les niches d'un mur de riad.
colors:
  tadelakt: "oklch(0.8 0.07 46)"
  tadelakt-light: "oklch(0.86 0.05 52)"
  terracotta: "oklch(0.64 0.1 40)"
  clay-line: "oklch(0.6 0.08 48)"
  ink: "oklch(0.22 0.04 40)"
  ink-soft: "oklch(0.36 0.06 40)"
  cedar: "oklch(0.25 0.04 40)"
  cedar-foreground: "oklch(0.9 0.04 70)"
  zellige: "oklch(0.42 0.08 175)"
  zellige-deep: "oklch(0.33 0.06 175)"
  lime-wash: "oklch(0.93 0.035 75)"
  whatsapp: "oklch(0.55 0.13 150)"
typography:
  display:
    fontFamily: "Reem Kufi, Readex Pro, system-ui, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Reem Kufi, Readex Pro, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Reem Kufi, Readex Pro, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Reem Kufi, Readex Pro, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    letterSpacing: "0.02em"
  body-lead:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 350
    lineHeight: 1.625
  body:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 350
    lineHeight: 1.5
  label:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 350
    lineHeight: 1.43
rounded:
  tile: "2px"
  none: "0px"
  round: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-desktop: "40px"
  container-max: "84rem"
  section-mobile: "80px"
  section-desktop: "112px"
components:
  button-primary:
    backgroundColor: "{colors.zellige}"
    textColor: "{colors.lime-wash}"
    rounded: "{rounded.tile}"
    padding: "0.8rem 1.6rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.zellige-deep}"
    textColor: "{colors.lime-wash}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0.8rem 1.6rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lime-wash}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.zellige}"
    textColor: "{colors.lime-wash}"
  rail-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "44px"
  footer:
    backgroundColor: "{colors.cedar}"
    textColor: "{colors.cedar-foreground}"
  mobile-menu:
    backgroundColor: "{colors.cedar}"
    textColor: "{colors.cedar-foreground}"
---

# Design System: Maison Sillombre

## Overview

**Creative North Star: "Le mur du riad"**

The site is one continuous wall of polished tadelakt plaster. Every bottle sits in a horseshoe-arch niche carved into that wall; the wall itself, warm ochre-rose with soft marbling and a fine grain, covers every page, so the colour strategy is committed rather than accented. Deeper terracotta marks secondary walls, dark cedar wood holds the footer and the mobile menu, a band of eight-pointed-star zellige forms the dado at the foot of every page, and a single emerald zellige glaze is reserved for actions.

The interface stays in service of the bottles: photography carries the emotion, type is set in two Arabic-Latin families (Reem Kufi for headings, Readex Pro for text) whose kufic geometry belongs to the same world as the arches. Density is relaxed and gallery-like; niches vary in height within a row but share one sill, as built masonry would. Depth comes from carving (inner shadow of the arch, a lit sill, a darker reveal), never from floating cards.

The build rejects the cream-and-serif perfumery look with a grid of identical cards: there are no white surfaces, no card boxes and no generic serif display face.

**Key Characteristics:**
- A plastered ground on every page (the tadelakt treatment on `body`), never a flat fill or white.
- Bottles and collections always appear inside an arch niche at 3:4, set on a terracotta sill.
- Emerald zellige is the only action colour; terracotta and cedar are walls, not accents.
- Near-square corners (2px) on everything rectilinear; the arch is the only curve, apart from circular icon controls.
- Reem Kufi headings with slightly opened word spacing; light-weight (350) Readex Pro text.

## Colors

Earth and lime from a riad interior, with one glazed green.

### Primary
- **Zellige Emerald** (`zellige`): every action. Primary button fill, selected filter chip and variant, active and hovered nav link, filled favourite heart, focus ring, text selection, input caret. Hover deepens to **Deep Glaze** (`zellige-deep`), which also colours hovered collection titles.

### Neutral
- **Tadelakt Rose-Ochre** (`tadelakt`): the page ground, always rendered through the tadelakt plaster treatment (two soft marbling ellipses plus a fractal-noise grain at ~9% opacity). Also the sticky header and catalogue toolbar at 95% opacity with a light blur once scrolled.
- **Lime Highlight** (`tadelakt-light`): the lighter marbling tone and the hover wash behind rail controls (60%).
- **Terracotta Wall** (`terracotta`): secondary walls (the collections section, the bench under the hero niches) via the terracotta plaster treatment, and every niche sill. Also the scrollbar thumb.
- **Clay Line** (`clay-line`): hairline borders and dividers (market list, olfactory pyramid rows, toolbar rule).
- **Riad Ink** (`ink`): headings and body text; fill of the outline button on hover.
- **Soft Ink** (`ink-soft`): secondary text, brand lines, prices, breadcrumbs, placeholders, the "Maison" half of the wordmark, and (at 40%) the stroke of chips and rail controls.
- **Cedar** (`cedar`) with **Cedar Light** (`cedar-foreground`): the footer, the mobile menu overlay, and the 4px rules framing the zellige band. Secondary text on cedar runs at 60-75% of Cedar Light.
- **Lime Wash** (`lime-wash`): text on zellige (buttons, selected chips, selection).

### Functional
- **WhatsApp Green** (`whatsapp`): only the floating WhatsApp button, shown when the merchant number is set.

### Named Rules
**The One Glaze Rule.** Emerald zellige means "act here". It never decorates a surface, a heading at rest or a divider; if something is green and not interactive (or the current location), it is wrong.

**The Plastered Wall Rule.** No page or section sits on a flat colour: grounds are tadelakt, terracotta tadelakt, or cedar. Never introduce white or cream surfaces.

## Typography

**Display Font:** Reem Kufi (with Readex Pro, system-ui, sans-serif)
**Body Font:** Readex Pro (with system-ui, sans-serif)

**Character:** Two Arabic-Latin families: Reem Kufi's geometric kufic forms give headings the architecture of the arches, while Readex Pro at a light 350 weight keeps running text calm and legible on the warm ground. Loaded from Google Fonts (Readex Pro 300-600, Reem Kufi 400-700).

### Hierarchy
- **Display** (500, 2.75rem mobile to 4.75rem at lg, line-height 0.98-1, -0.02em): the home hero title only.
- **Headline** (500, 2.25rem mobile / 3.75rem desktop; page heroes 3rem / 4.5rem; product name 3rem / 3.75rem; line-height 1.05, -0.01em): section and page titles.
- **Title** (500, 1.25-1.5rem cards, 1.5-1.875rem collections, 1.25rem list labels): product and collection names, market names, pyramid labels.
- **Wordmark** (600, 1.75rem desktop / 1.5rem mobile, +0.02em): "Sillombre" in Reem Kufi, preceded by "Maison" in Readex Pro 0.8rem Soft Ink.
- **Body lead** (350, 1.125rem, relaxed 1.625): hero and section intros, max ~28-36rem.
- **Body** (350, 1rem): descriptions at `max-w-prose`.
- **Label** (350, 0.875rem, Soft Ink, sentence case): brand line, price, counts, breadcrumbs, footer column heads (in sans, never uppercase-tracked).

All headings use balanced wrapping and paragraphs use pretty wrapping.

### Named Rules
**The Open Kufic Rule.** Headings carry word spacing of +0.14em: Reem Kufi's tight default spacing jams words together at display sizes. Keep it on every heading.

**The Sentence-Case Label Rule.** Small labels stay in Readex Pro, sentence case, regular tracking. No uppercase letter-spaced tags above headings.

## Layout

A single centred container (max 84rem) with 16px gutters on mobile and 40px from 768px. Sections breathe with 80px top padding on mobile and 112px on desktop; the footer starts 112-144px below the last section. Asymmetric 12-column splits (5/7, 6/6, 5/7) set text against niches; the product page keeps its niche sticky at 96px from the top on desktop.

The home hero is a full-bleed wall: title and actions on the left five columns, three niches on the right in a `0.85fr 1.4fr 0.85fr` row (centre taller, side niches lifted slightly by an 8% bottom margin), resting on a terracotta bench. The collections wall uses columns of unequal width (`1fr 1.3fr 1.15fr 0.9fr`) on a subgrid so niches of different heights bottom-align on one shared sill; on mobile it falls to two columns, each niche with its own sill.

Product listings are grids (2 / 3 / 4 columns, 48px row gap) on the catalogue, and a horizontal snap rail on the home page (cards at 62% / 38% / 26% / 21% width) with circular previous / next controls on desktop and swipe on touch. Mobile header 64px, desktop 80px; tap targets 44px.

## Elevation & Depth

Depth is carved, not lifted. Surfaces sit flush in the wall; the only shadows describe masonry (light from above falling into a recess or onto a ledge) plus a soft glaze shadow under the primary button.

### Shadow Vocabulary
- **Intrados shadow** (a ring masked to the arch's inner edge, `oklch(0.16 0.03 40)` at 75% fading to 35% then transparent at 75% height): the dark band inside every niche arch.
- **Niche reveal** (linear gradient `oklch(0.42 0.07 38)` to `oklch(0.56 0.085 42)` at 70% to `oklch(0.78 0.06 48)`): the wall thickness around the image, lit lower lip.
- **Sill drop** (`box-shadow: 0 10px 16px -10px oklch(0.2 0.04 40 / 0.6)`): under each sill, with a light top-edge highlight.
- **Bench inset** (`box-shadow: inset 0 6px 10px -6px oklch(0.2 0.04 40 / 0.5)`): the terracotta bench under the hero niches.
- **Glaze shadow** (`box-shadow: 0 6px 14px -6px oklch(0.25 0.06 175 / 0.7)`; pressed `0 3px 8px -4px`): primary button only.
- **Header settle** (`box-shadow: 0 6px 18px -12px oklch(0.25 0.04 40 / 0.6)`): sticky header once the page scrolls past 24px.

### Named Rules
**The Carved-Not-Floating Rule.** Nothing hovers above the wall. Depth is expressed as recess (niche), ledge (sill, bench) or glaze; there are no card shadows and no hard offset shadows.

## Shapes

One curve, the horseshoe arch (a single SVG mask: a 145-unit arc springing from 56% of a 300x400 box), applied at 3:4 to every product and collection image. The image is inset inside the niche (5% top, 4.5% sides, 2.5% bottom) so the darker reveal reads as wall thickness. Everything rectilinear is near-square: buttons and tags at 2px, chips and variant pickers effectively square. Circles appear only for icon controls (rail arrows, WhatsApp button). Borders are 1px hairlines; dashed 1px Soft Ink marks content the merchant still has to supply.

## Components

### Buttons
Glazed tiles: flat colour, near-square, quietly weighted.
- **Shape:** near-square (2px), min-height 48px, padding 0.8rem 1.6rem, 0.95rem text at weight 450, icon gap 0.6rem.
- **Primary:** Zellige Emerald fill, Lime Wash text, soft glaze shadow. Used for the main action of a view ("Voir les parfums", WhatsApp questions, error recovery).
- **Hover / Active:** fill deepens to Deep Glaze over 250ms (expo-out); on press it sinks 1px and the shadow tightens. Focus is the global 2px emerald outline at 3px offset.
- **Outline:** transparent with a 1px current-colour border; on hover fills with Riad Ink and Lime Wash text. Used for secondary actions (favourite, reset filters, back home).
- **Text link:** underline at 35% of current colour, 1px, 0.22em offset; full colour on hover.

### Chips
- **Style:** filter chips and format pickers, 1px Soft Ink border at 40%, square corners, 40px (chips) or 44px (formats) tall, 0.875rem text.
- **State:** hover strengthens the border to Riad Ink; selected fills with Zellige Emerald and Lime Wash text.

### Cards / Containers
There are no card boxes. A product "card" is a niche, a sill, then text on the wall.
- **Niche:** 3:4 arch with reveal, inset image and intrados shadow (see Elevation).
- **Sill:** 0.9rem terracotta ledge with a highlight and drop shadow.
- **Text:** title in Reem Kufi (turns emerald on hover), brand line and price beneath in Soft Ink label size; a 44px favourite heart at the right, filled emerald when saved.

### Inputs / Fields
- **Style:** the catalogue search is underline-only: transparent, 1px Soft Ink border-bottom at 50%, 1.125rem text, leading search icon.
- **Focus:** the underline turns Zellige Emerald; caret is emerald.

### Navigation
- **Header:** transparent over the wall at rest, plaster at 95% with blur and the settle shadow once scrolled. Wordmark left, three links (0.95rem) centre that turn emerald on hover and when active, 44px icon buttons right (cart only when commerce is on).
- **Mobile:** full-screen cedar overlay, Reem Kufi links at 2.25rem and 1.5rem, sans secondary links, a zellige band at the foot.
- **Footer:** a 56-72px zellige dado between two 4px cedar rules, then the cedar footer with the wordmark, sans column heads at 60% and underlined links.

### Niche Wall (signature)
Rows of niches of varied height (the centre or lead niche taller) bottom-aligned on one continuous sill or bench. On load, niches light up from 45% brightness over 1.6s with a staggered 180ms delay; text rises 16px into place over 0.9s. Both are disabled under reduced motion.

### Zellige Band (signature)
A repeating 48px tile of nested eight-pointed stars (deep emerald field, lime, cobalt and brass stars). Only as a horizontal band: the footer dado and the foot of the mobile menu.

## Do's and Don'ts

### Do:
- **Do** set every page on the tadelakt plaster treatment and every secondary wall on terracotta tadelakt or cedar.
- **Do** present every product and collection image inside the arch niche at 3:4, resting on a sill.
- **Do** align a row of niches of different heights on one shared sill or bench.
- **Do** keep Zellige Emerald for actions, selection and current location only, with Deep Glaze (`zellige-deep`) on hover.
- **Do** keep heading word spacing at +0.14em and body text at Readex Pro 350.
- **Do** mark missing merchant content with the dashed Soft Ink tag rather than inventing it.

### Don't:
- **Don't** use white or cream surfaces, boxed cards, or a grid of identical bordered product cards.
- **Don't** introduce a second curve family (rounded cards, pill buttons); the arch and the circular icon control are the only curves.
- **Don't** float elements with card shadows or hard offset shadows; depth is recess, ledge or glaze.
- **Don't** put uppercase letter-spaced labels or tags above headings.
- **Don't** use the zellige pattern as a surface fill or background behind text; it is a band only.
