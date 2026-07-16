# AGENTS.md

Guidance for agents working on the AGPL-licensed `dark-study` Zola site/theme for `standard.site` publishing.

## Architecture and sources of truth

- `config.toml` is the standalone example/site configuration; `theme.toml` is redistribution metadata. `DESIGN.md` is the visual authority and `PRODUCT.md` defines the restrained reading-first product direction.
- `templates/base.html` owns metadata, publication discovery hint, skip/header/footer structure, code-copy behavior, and the eight-dot theme picker. `page.html` emits per-document AT URI links, reading time, ToC, and adjacent navigation; section/archive/taxonomy templates own listings.
- `static/css/dark-study.css` is the core design system. `static/css/themes-64.css` is generated and currently contains 96 monotone themes (8 hues x 4 moods x 3 depths) despite its legacy filename.
- `scripts/generate-themes.mjs` currently writes both the tracked monotone file and an untracked/unreferenced `themes-duo-64.css`. Its header/count comments still say 64/128 although the loops generate 96/192. Do not commit or advertise duotone output until the template loads it and the product intentionally supports it.
- `.well-known/site.standard.publication`, `config.toml` DID/rkey/AT URI fields, and per-post `standard_site_document_rkey` frontmatter form one verification contract and must agree.

## Development rules

- Preserve placeholder-safe degradation: publication/document link tags must remain absent when `YOURDIIDHERE` is still configured.
- Keep the 96 theme IDs synchronized across generator output, the `STEPS` array in `base.html`, default configuration, and CSS selectors. Preserve the committed-dark, no-shadow, single-accent, Inter/JetBrains Mono design constraints.
- Treat `| safe` content paths and shortcode inputs carefully; do not widen them to untrusted runtime HTML.
- The publish workflow runs Sequoia only when a local `sequoia.json` and both secrets exist, auto-commits changes under `content/`, then builds Zola. Deployment is intentionally commented out.
- Never commit `sequoia.json`, app passwords, keys, or production publication credentials.

## Validation

Run `zola check` and `zola build`; after palette work run `node scripts/generate-themes.mjs`, verify the expected tracked diff, and remove/resolve unintended duotone output. Serve and inspect home, post, archive, taxonomy, pagination, 404, feed, placeholder and configured verification states, ToC, reading time, copy buttons, all theme steps, localStorage corruption fallback, mobile/print/reduced-motion behavior, and keyboard/contrast accessibility. Use disposable AT records for publishing tests.
