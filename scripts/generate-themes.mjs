#!/usr/bin/env node
/*
  Generate 128 theme definitions for dark-study.
  64 monotone (8 hues × 4 moods × 2 depths)
  64 duotone  (8 hue-pairs × 4 moods × 2 depths)

  Output: CSS blocks to static/css/themes-64.css and static/css/themes-duo-64.css
  Usage:  node scripts/generate-themes.mjs
*/

import { writeFileSync, mkdirSync } from "fs";

const HUES = [
  { name: "amber",   h: 75,  label: "Amber" },
  { name: "orange",  h: 45,  label: "Orange" },
  { name: "rose",    h: 10,  label: "Rose" },
  { name: "magenta", h: 330, label: "Magenta" },
  { name: "violet",  h: 290, label: "Violet" },
  { name: "blue",    h: 250, label: "Blue" },
  { name: "teal",    h: 180, label: "Teal" },
  { name: "green",   h: 145, label: "Green" },
];

const MOODS = [
  { name: "soft",    label: "Soft",    accentC: 0.06, surfC: 0.004, textSat: 0.004 },
  { name: "neutral", label: "Neutral", accentC: 0.12, surfC: 0.008, textSat: 0.006 },
  { name: "vivid",   label: "Vivid",   accentC: 0.18, surfC: 0.012, textSat: 0.008 },
  { name: "deep",    label: "Deep",    accentC: 0.22, surfC: 0.016, textSat: 0.010 },
];

const DEPTHS = [
  { name: "dim",    label: "Dim",    surfL: 0.18, textL: 0.95, mutedL: 0.70, dimL: 0.50, borderL: 0.30 },
  { name: "dark",   label: "Dark",   surfL: 0.13, textL: 0.93, mutedL: 0.66, dimL: 0.46, borderL: 0.26 },
  { name: "darker", label: "Darker", surfL: 0.10, textL: 0.91, mutedL: 0.62, dimL: 0.42, borderL: 0.22 },
];

// Complementary pairings: 3-step offset in the 8-hue wheel
const PAIRS = HUES.map((hue, i) => ({
  ...hue,
  partner: HUES[(i + 3) % 8],
}));

function colorBlock(id, accentH, accentC, accentLabel, surfH, surfC, depth, mood, secondary) {
  const surfL  = depth.surfL;
  const surfRaisedL = surfL + 0.04;
  const surfRaisedC = surfC + 0.003;
  const accentL = 0.55 + accentC * 0.8;

  const borderL = depth.borderL;
  const borderC = surfC + 0.005;
  const textH = surfH + 5;

  let css = `[data-theme="${id}"] {\n`;
  css += `  --color-surface:        oklch(${surfL.toFixed(2)} ${surfC.toFixed(3)} ${surfH});\n`;
  css += `  --color-surface-raised: oklch(${surfRaisedL.toFixed(2)} ${surfRaisedC.toFixed(3)} ${surfH});\n`;
  css += `  --color-surface-code:   oklch(${surfRaisedL.toFixed(2)} ${surfRaisedC.toFixed(3)} ${surfH});\n\n`;

  css += `  --color-text:           oklch(${depth.textL.toFixed(2)} ${mood.textSat.toFixed(3)} ${textH});\n`;
  css += `  --color-text-muted:     oklch(${depth.mutedL.toFixed(2)} ${(mood.textSat * 2).toFixed(3)} ${textH});\n`;
  css += `  --color-text-dim:       oklch(${depth.dimL.toFixed(2)} ${(mood.textSat * 2.5).toFixed(3)} ${textH});\n\n`;

  css += `  --color-accent:         oklch(${accentL.toFixed(2)} ${accentC.toFixed(2)} ${accentH});\n`;
  css += `  --color-accent-hover:   oklch(${(accentL + 0.06).toFixed(2)} ${accentC.toFixed(2)} ${accentH});\n`;
  css += `  --color-accent-subtle:  oklch(${(accentL - 0.08).toFixed(2)} ${(accentC * 0.7).toFixed(2)} ${accentH});\n`;
  css += `  --color-accent-bg:      oklch(${accentL.toFixed(2)} ${accentC.toFixed(2)} ${accentH} / 0.12);\n\n`;

  if (secondary) {
    const sH = secondary.h;
    const sL = 0.55 + accentC * 0.7;
    const sC = accentC * 0.85;
    css += `  --color-accent-secondary:       oklch(${sL.toFixed(2)} ${sC.toFixed(2)} ${sH});\n`;
    css += `  --color-accent-secondary-hover: oklch(${(sL + 0.06).toFixed(2)} ${sC.toFixed(2)} ${sH});\n`;
    css += `  --color-accent-secondary-bg:    oklch(${sL.toFixed(2)} ${sC.toFixed(2)} ${sH} / 0.10);\n`;
    css += `  --color-accent-secondary-subtle: oklch(${(sL - 0.08).toFixed(2)} ${(sC * 0.7).toFixed(2)} ${sH});\n\n`;
  } else {
    // Monotone: secondary = same as primary, just quieter
    css += `  --color-accent-secondary:       oklch(${(accentL - 0.05).toFixed(2)} ${(accentC * 0.5).toFixed(2)} ${accentH});\n`;
    css += `  --color-accent-secondary-hover: oklch(${(accentL + 0.01).toFixed(2)} ${(accentC * 0.5).toFixed(2)} ${accentH});\n`;
    css += `  --color-accent-secondary-bg:    oklch(${accentL.toFixed(2)} ${(accentC * 0.3).toFixed(2)} ${accentH} / 0.08);\n`;
    css += `  --color-accent-secondary-subtle: oklch(${(accentL - 0.08).toFixed(2)} ${(accentC * 0.4).toFixed(2)} ${accentH});\n\n`;
  }

  css += `  --color-border:         oklch(${borderL.toFixed(2)} ${borderC.toFixed(3)} ${surfH});\n`;
  css += `  --color-border-subtle:  oklch(${(borderL - 0.04).toFixed(2)} ${(borderC - 0.003).toFixed(3)} ${surfH});\n\n`;

  css += `  --color-focus-ring:     oklch(${(accentL + 0.06).toFixed(2)} ${accentC.toFixed(2)} ${accentH} / 0.5);\n`;
  css += `  --theme-accent-hex:      [accent];\n`;
  css += `  --theme-label:           "${accentLabel}";\n`;
  css += `}\n\n`;
  return css;
}

// ── Monotone (64 themes) ──────────────────────────────────────────────────

let mono = "/* ── 64 Monotone Themes (8 hues × 4 moods × 2 depths) ──────────────── */\n\n";
let first = true;

for (const hue of HUES) {
  for (const mood of MOODS) {
    for (const depth of DEPTHS) {
      const id = `${hue.name}-${mood.name}-${depth.name}`;
      const label = `${hue.label} ${mood.label} ${depth.label}`;

      let block = colorBlock(id, hue.h, mood.accentC, label, hue.h, mood.surfC, depth, mood, null);
      if (first) {
        block = block.replace('[data-theme="', ':root,\n[data-theme="');
        first = false;
      }
      mono += `/* ── ${label} ──${"—".repeat(Math.max(0, 58 - label.length))} */\n`;
      mono += block;
    }
  }
}

const MONO_COUNT = HUES.length * MOODS.length * DEPTHS.length;
writeFileSync("static/css/themes-64.css", mono);
console.log(`Wrote ${MONO_COUNT} monotone themes to static/css/themes-64.css`);

// ── Duotone ───────────────────────────────────────────────────────────────

let duo = `/* ── ${MONO_COUNT} Duotone Themes (8 hue-pairs × 4 moods × 3 depths) ────── */\n\n`;

for (const pair of PAIRS) {
  for (const mood of MOODS) {
    for (const depth of DEPTHS) {
      const id = `${pair.name}-${mood.name}-${depth.name}-duo`;
      const label = `${pair.label} + ${pair.partner.label} ${mood.label} ${depth.label}`;

      duo += `/* ── ${label} ──${"—".repeat(Math.max(0, 54 - label.length))} */\n`;
      duo += colorBlock(id, pair.h, mood.accentC, label, pair.h, mood.surfC, depth, mood, pair.partner);
    }
  }
}

const DUO_COUNT = PAIRS.length * MOODS.length * DEPTHS.length;
writeFileSync("static/css/themes-duo-64.css", duo);
console.log(`Wrote ${DUO_COUNT} duotone themes to static/css/themes-duo-64.css`);

console.log(`\n${MONO_COUNT + DUO_COUNT} themes total (${MONO_COUNT} mono + ${DUO_COUNT} duo)`);
