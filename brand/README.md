# Backwill brand

Everything here is built on the **Figma design system**, which is the single source of truth.
The older `Context/brand.md` sage palette is retired and no longer appears in any file.

## Where things are

```
brand/
  README.md              this file
  figma-system/          THE SOURCE OF TRUTH
    colour-and-type.md     the system written out, with measured contrast
    *.png                  the exported Figma frames
  logo/
    backwill-logo-sheet.svg        concepts + the two masters, for Figma
    backwill-logo-sheet-preview.png
    svg/                 the mark and the lockups, vector, transparent
    png/                 the mark on transparency, four inks, two sizes
    tiles/               app icon tiles, square and rounded
    favicon/             favicon.ico plus every PNG size
  moodboard/
    backwill-moodboard.html        open this one, it loads the real fonts
    backwill-moodboard.svg         import this into Figma
    backwill-moodboard.png         quick look, stand-in fonts
  source/
    backwill-concept-logo-source.png   the original brush artwork
    masters/                           transparency masters, regenerate anything from these
```

## The two master logos

| | Mark | Ground | Use |
|---|---|---|---|
| **Master 01** | `#EDEDE6` | `#4A5E3C` | dark surfaces, app icons, avatars |
| **Master 02** | `#4A5E3C` | `#EDEDE6` | documents, light pages, print |

One colour swap apart, so both hold 6.04:1.

## Which file do I want?

| I need | Use |
|---|---|
| The logo on a website | `logo/svg/backwill-mark-full.svg` (fill follows CSS `color`) |
| A small logo, under 128px | `logo/svg/backwill-mark-icon.svg`, the B alone |
| Logo with the name | `logo/svg/backwill-lockup-horizontal-primary.svg` |
| An app icon or avatar | `logo/tiles/backwill-tile-primary-rounded-1024.png` |
| A browser tab icon | `logo/favicon/favicon.ico` |
| To put the logo on a photo | `logo/png/backwill-full-white-2048.png` |
| To show someone the brand | `moodboard/backwill-moodboard.html` |

## The lockups

Four files: horizontal and stacked, each in `primary` (`#4A5E3C`) and `offwhite` (`#EDEDE6`).
All transparent, no background baked in, so they sit on whatever ground you choose.

The wordmark is live Coustard text, not outlines, so it stays editable and renders correctly in
Figma and in browsers. One caveat: the spacing was set from an estimate of Coustard's width,
because the font was not installable in the environment that built these. Open one in Figma and
check the gap between the mark and the word looks right. If it needs a nudge it will be small.

## Rules worth not breaking

1. **The full mark does not go below 128px.** Its brush trail collapses into a smudge.
   Use the icon (the B alone) below that. It stays legible to 16px.
2. **The accent gold never carries a white label.** White on it reads 1.98:1. Use deep forest.
3. **Hover darkens, never lightens.** Contrast climbs on interaction rather than falling.

## Regenerating

Every colour variant is a recolour of the three transparency masters in `source/masters/`.
Nothing needs re-extracting from the original artwork, so a palette change is minutes of work.
