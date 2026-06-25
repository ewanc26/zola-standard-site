---
name: Zola Standard Site
description: A Zola theme for AT Protocol long-form publishing — committed dark surface, Inter + JetBrains Mono, warm amber accent, flat elevation.
colors:
  surface:
    value: "oklch(0.12 0.01 75)"
    dark: "oklch(0.12 0.01 75)"
    role: primary-bg
  surface-raised:
    value: "oklch(0.16 0.012 75)"
    dark: "oklch(0.16 0.012 75)"
    role: surface-bg
  text:
    value: "oklch(0.93 0.01 80)"
    dark: "oklch(0.93 0.01 80)"
    role: primary-text
  muted:
    value: "oklch(0.65 0.02 75)"
    dark: "oklch(0.65 0.02 75)"
    role: muted-text
  dim:
    value: "oklch(0.45 0.02 75)"
    dark: "oklch(0.45 0.02 75)"
    role: tertiary-text
  border:
    value: "oklch(0.25 0.015 75)"
    dark: "oklch(0.25 0.015 75)"
    role: border
  accent:
    value: "oklch(0.72 0.16 75)"
    dark: "oklch(0.72 0.16 75)"
    canonical: "#d4a040"
    role: primary-accent
  accent-hover:
    value: "oklch(0.78 0.16 75)"
    dark: "oklch(0.78 0.16 75)"
    role: primary-accent-hover
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    fontSize: "clamp(1.75rem, 4vw + 0.5rem, 2.75rem)"
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
    fontSize: "clamp(1.35rem, 2.5vw + 0.5rem, 1.75rem)"
    lineHeight: 1.25
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 400
    fontSize: "0.8125rem"
    lineHeight: 1.5
    letterSpacing: "0.04em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 400
    fontSize: "0.82em"
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "2.5rem"
  "3xl": "3.5rem"
  "4xl": "5rem"
components:
  tag-chip:
    backgroundColor: "oklch(0.78 0.16 75 / 0.12)"
    borderColor: "oklch(0.78 0.16 75 / 0.15)"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    typography: "{typography.label}"
  post-entry:
    borderColor: "{colors.border-subtle}"
  post-meta:
    typography: "{typography.label}"
    textColor: "{colors.dim}"
---

# Design System: Zola Standard Site

## 1. Overview

**Creative North Star: "The Ship's Log at Anchor"**

A quiet record. Warm enough to linger, structured enough to scan. The surface is dark and warm — not cold "dark mode," not terminal cosplay. The accent is amber — a point of light against the deep surface, used sparingly so it actually draws the eye.

This theme is built from the Croft design language — the same Inter + JetBrains Mono stack, committed dark surface, amber accent, and flat elevation vocabulary used across devlog, faol-website, and inkwell. It is designed for AT Protocol long-form publishing via the standard.site lexicons, but works as a general-purpose blog theme.

Sources: **devlog** (color direction — warm dark surface, amber accent, monospace structural markers), **faol-website** (flat elevation via tonal layering + borders, tag chip pattern), **inkwell** (typography hierarchy, out-quart motion easing, single-accent discipline), **website** (token structure, OKLCH throughout).

**Key Characteristics:**
- Dark-first, warm-tinted surface — committed color carries the identity
- Inter for prose and headings, JetBrains Mono for dates, tags, code, and structural markers
- Single amber accent used on ≤10% of any screen — links, active states, inline code
- Flat elevation — tonal layering (surface → surface-raised) and borders, no shadows
- Monospace pill-shaped tag chips with accent tint background
- Restrained motion — out-quart easing, state changes only, no entrance choreography
- AT Protocol native — standard.site verification and document linking degrade gracefully

## 2. Colors

A committed dark palette with warm amber accent. Every neutral is tinted toward amber (hue 75–80). No pure black, no pure white.

### Primary — Accent (amber)
The single brand accent (hue ≈75, warm gold-amber). Used on links, active navigation, inline code, and tag chips. Its rarity is the point — one focal accent per section.

### Neutral — Surface & Text
The surface ramp sits at OKLCH lightness 0.12–0.25 with chroma 0.01–0.015 at hue 75, giving a warm-earth dark that reads as deliberate, not as "dark mode default." Text is a near-white at hue 80 with slight chroma for warmth.

### Named Rules
**The One Accent Rule.** Amber is used on ≤10% of any given screen. Links, active nav state, inline code — pick one focal point per section.

**The No-Pure Rule.** No pure black (`#000`) or pure white (`#fff`). Every neutral is tinted toward amber. The surface is `oklch(0.12 0.01 75)`, not `#1a1a1a`.

**The Tonal + Border Rule.** Depth is conveyed through tonal layering (surface → surface-raised) and a 1px border, never through box-shadows. This system is flat.

## 3. Typography

**Display & Body Font:** Inter (ui-sans-serif, system-ui, sans-serif)
**Mono Font:** JetBrains Mono (ui-monospace, monospace)

**Character:** Inter carries the page — readable at body sizes, authoritative at display weights. JetBrains Mono handles dates, tags, code, and structural markers (section labels, table headers, footer). The pairing is sans + mono utility — no serif/sans tension. This is the Croft standard stack used across all projects.

### Hierarchy
- **Display** (600 weight, fluid clamp, 1.15 line-height, -0.02em tracking): Post titles. One per page.
- **Headline** (500 weight, fluid clamp, 1.25 line-height): Section headings within posts.
- **Body** (400 weight, 1rem, 1.65 line-height): Prose. Max line length 65ch.
- **Label** (400 weight, 0.8125rem, 0.04em tracking, uppercase): Mono. Dates, section markers, table headers.
- **Mono** (400 weight, 0.82em): Inline code, code blocks.

### Named Rules
**The Weight-Jump Rule.** 600 → 500 → 400. Each step is a full weight. No half-steps.

**The Mono-Metadata Rule.** Dates, tags, table headers, and footer text are JetBrains Mono. It signals "this is metadata" without needing color or decoration.

## 4. Elevation

Flat by default. No box-shadows. Depth is conveyed entirely through tonal layering (surface → surface-raised → border). Cards, code blocks, and raised surfaces use a 1px border and a lighter background tone. That is the entire elevation vocabulary.

Hover on interactive elements shifts color (text → accent, border → brighter), never lifts or shadows.

## 5. Components

### Tag Chips
- **Style:** Full pill radius, monospace lowercase text, accent tint background, 1px accent-tinted border.
- **Hover:** Background deepens, border solidifies.
- **Font:** JetBrains Mono, 0.8125rem, 0.04em tracking, lowercase.

### Post Entries (list)
- **Style:** Baseline-aligned flex row (title + date), 1px subtle border between entries.
- **Title:** Body size, medium weight, text color. Hover → accent.
- **Date:** Mono, caption size, dim color. Right-aligned on wide, stacks on mobile.
- **Description:** Full-width below, small size, muted color.

### Navigation
- **Header:** Flex row, site title left (medium weight), nav links right.
- **Links:** Mono-styled, dim color. Hover → text color. Active → accent.
- **Mobile:** Stacks vertically.

### Post Meta
- **Style:** Mono, caption size, dim color, baseline flex row.
- **Date, author, updated date** — separated by horizontal rhythm.

## 6. Do's and Don'ts

### Do:
- **Do** use Inter for all prose and headings, JetBrains Mono for all metadata (dates, tags, code, structural markers).
- **Do** use the amber accent on ≤10% of any given screen. A link, active nav, or inline code — pick one focal point.
- **Do** differentiate surfaces through tonal layering and 1px borders, not shadows.
- **Do** cap body line length at 65ch.
- **Do** use `text-wrap: balance` on headings, `text-wrap: pretty` on prose.
- **Do** let AT Protocol integration degrade gracefully — standard.site link tags are conditional, nothing breaks when config values are placeholders.
- **Do** use lowercase monospace for tag labels.

### Don't:
- **Don't** use a cream, sand, beige, paper, or warm-tinted near-white body background. This is the saturated AI default.
- **Don't** add box-shadows. This system is flat. Tonal layering and borders carry depth.
- **Don't** use gradient text, gradient hero sections, or `background-clip: text`.
- **Don't** add tiny uppercase tracked eyebrow labels above every section heading.
- **Don't** use numbered section markers (01 / 02 / 03) as page scaffolding.
- **Don't** use glassmorphism, backdrop blur, or decorative transparency.
- **Don't** add side-stripe borders (`border-left` > 1px) as colored accents.
- **Don't** use pure black (`#000`) or pure white (`#fff`). Every neutral is tinted.
- **Don't** animate images on hover. If a post entry needs hover feedback, shift the title color.
- **Don't** use SaaS landing-page patterns: gradient backgrounds, hero metrics, CTA buttons. This is a reading surface, not a funnel.
- **Don't** use terminal/hacker aesthetic. No green-on-black monospace pages, no ASCII borders. The warm dark surface is a reading environment, not a terminal.
