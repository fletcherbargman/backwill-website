# Backwill design system

**Source of truth: the Figma file `qD2V7Z1ZyuGqrabvZfjLR5`.** Everything here was read from the
exported frames in this folder. The earlier `Context/brand.md` palette is retired.

## Colour roles

Sampled directly from the pixels of `Merged Proposal.png`. These are exact, not estimated.

| Role | Hex | Use |
|---|---|---|
| `action-primary` | `#4A5E3C` | buttons, the mark, dark surfaces |
| `action-primary-hover` | `#3B4B30` | hover only, never a resting state |
| `action-secondary` | `#8A9A5B` | dark labels only |
| `accent-highlight` | `#C9B96A` | dark labels only, never a white label |
| `border-subtle` | `#C9C4B8` | hairlines, dividers |
| `text-on-primary` | `#EDEDE6` | type on any dark ground |
| `text-on-dark` | `#1E2B22` | type on any light ground |
| `surface-card` | `#FFFFFF` | cards |
| `background` | `#FFFFFF` | page ground |

### Measured contrast

Calculated from the sampled values. **Two of the figures printed on the Figma board are wrong**;
the numbers below are the real ones and should be trusted over the board.

| Pair | Actual | Board says |
|---|---|---|
| `text-on-primary` on `action-primary` | **6.04:1** | 5.67:1 (wrong) |
| `text-on-primary` on `action-primary-hover` | **7.99:1** | 7.09:1 (wrong) |
| `text-on-dark` on `accent-highlight` | **7.47:1** | 7.45:1 |
| white on `accent-highlight` | **1.98:1** | 1.97:1 |
| `text-on-dark` on `action-secondary` | **4.81:1** | not printed |
| `text-on-dark` on `text-on-primary` | **12.54:1** | 12.5:1 |

The accent must carry a deep forest label. A white label on it reads 1.98:1 and is unusable.

## Typography

Coustard for display and headings, Inter from h3 down. Coustard ships only Regular and Black.

| Step | Face | Size / line height / tracking |
|---|---|---|
| display | Coustard Regular | 55 / 110% / -1% |
| h1 | Coustard Regular | 44 / 115% / 0% |
| h2 | Coustard Regular | 32 / 120% / 0% |
| h3 | Inter SemiBold | 22 / 130% / 0% |
| body-lg | Inter Regular | 18 / 155% / 0.5% |
| body | Inter Regular | 16 / 155% / 0.5% |
| small | Inter Light | 14 / 155% / 0.5% |
| label | Inter SemiBold | 12 / 140% / 10% |

## Visual direction

From `Brand direction.png`: soft-focus, atmospheric, natural. Muted greens at low contrast,
editorial layouts, generous white space, natural light. Unhurried rather than energetic.

## Frames in this folder

| File | What it is |
|---|---|
| `Brand direction.png` | The photographic tonality moodboard. Not in git, re-export from Figma if needed |
| `Merged Proposal.png` | Colour roles, type scale, button states. The system itself |
| `Brand Description.png` | Written positioning |
| `Frame 3.png` | Working frame. Not in git, re-export from Figma if needed |

## A note on version control

`Brand direction.png` and `Frame 3.png` are deliberately excluded from git. They are large,
they re-export from Figma in under a minute, and git cannot delta-compress PNGs, so every
re-export would add a whole new copy to the repository permanently.

They exist on disk and in Figma. Everything that actually matters, the hexes, the type scale
and the measured contrast, is captured as text in this file and travels with the repo.
