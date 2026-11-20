# Contributing to Zola Standard Site

A Zola theme for long-form publishing on AT Protocol: committed-dark reading surface, Inter + JetBrains Mono, 96 built-in colour themes, and standard.site verification that degrades gracefully. Thank you for wanting to help!

## Getting started

```bash
brew install zola        # or your platform's install
zola serve               # http://127.0.0.1:1111 — works immediately, all AT Protocol fields are placeholders
```

The theme must degrade cleanly with placeholder config: a fresh serve looks right before anyone fills in `[extra]` AT Protocol values.

## Notes for this project

- **Zero dependencies is a theme feature** (the copy button, back-to-top, theme persistence in localStorage are all hand-rolled). Reach for a JS library only with a strong argument.
- The 96 themes are *generated*: `scripts/generate-themes.mjs` (8 hues × 4 moods × 3 depths) writes `static/css/themes-64.css`. Don't edit the generated CSS by hand — change the generator and re-run it.
- Accessibility is a hard requirement: WCAG AA contrast, semantically correct HTML, keyboard navigation, reduced-motion support, skip link, and **zero layout shift** from the theme switcher and interactive elements.
- Design decisions are documented in `DESIGN.md` (visual system) and `PRODUCT.md` (product brief); a change that contradicts them starts as a discussion, not a PR.
- Code highlighting goes through Zola's Giallo engine (Zola 0.22+) — check `config.toml` syntax highlighting themes before adding code blocks to example content.

## Before opening a PR

- `zola build` passes and `zola serve` renders; you checked the footer, archive, taxonomy and 404 templates too.
- Conventional commits; one focused PR per change.
- AI-assisted PRs are welcome; stand behind every line.

## Licence

GPL-3.0 (see [LICENSE](LICENSE)). Contributions are accepted under the same terms.