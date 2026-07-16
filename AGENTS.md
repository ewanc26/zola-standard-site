# AGENTS.md

Guidance for agents working on the Zola theme for `standard.site` AT Protocol publishing.

## Structure

- `templates/` contains Zola/Tera layouts, macros, taxonomy, pagination, and verification output.
- `static/` contains CSS, JavaScript, fonts/assets, screenshot, and the 96-theme system.
- `content/` is demonstration content.
- `config.toml`, `theme.toml`, `PRODUCT.md`, and `DESIGN.md` define the public theme contract.
- `scripts/` supports Sequoia/AT Protocol publishing; `.well-known/` supports verification/discovery.

## Invariants

- Preserve graceful rendering when AT Protocol fields are absent and exact verification metadata when present.
- Keep all 96 theme combinations readable and persist selection without blocking first render.
- Maintain Zola template compatibility, stable pagination/taxonomy URLs, and syntax highlighting.
- Never commit `sequoia.json`, app passwords, keys, or production publication credentials.
- Treat generated/remote post identity, AT URI, DID, and rkey as stable protocol data.

## Validation

Run `zola check` and `zola build`, then serve/inspect home, post, taxonomy, pagination, 404, verification, and placeholder states. Check JavaScript-disabled reading, theme selection, mobile layout, contrast, code blocks, and links. Test publishing scripts in dry-run or with disposable records only.
