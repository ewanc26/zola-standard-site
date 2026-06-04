# Zola template with standard.site support

A minimal Zola starter template that implements the
[standard.site](https://standard.site) lexicons for long-form publishing on
AT Protocol.

## What this does

standard.site defines shared AT Protocol lexicons (`site.standard.publication`
and `site.standard.document`) that let indexers, readers, and social platforms
discover and link to your content. This template wires up both halves of the
verification mechanism:

| Mechanism | Purpose |
|-----------|---------|
| `/.well-known/site.standard.publication` | Proves your domain owns the publication record |
| `<link rel="site.standard.publication">` | Optional discovery hint in every page `<head>` |
| `<link rel="site.standard.document">` | Proves each post owns its document record |

## Setup

### 1. Create a publication record

Using your AT Protocol client or the
[atproto](https://github.com/bluesky-social/atproto) SDK, create a
`site.standard.publication` record on your PDS:

```json
{
  "$type": "site.standard.publication",
  "url": "https://example.com",
  "name": "My Site",
  "description": "A personal blog.",
  "preferences": {
    "showInDiscover": true
  }
}
```

Note the `rkey` from the response (e.g. `self` or an auto-generated tid).

### 2. Update config.toml

Fill in the three standard.site fields:

```toml
[extra]
atproto_did                      = "did:plc:yourDIDhere"
standard_site_publication_rkey   = "self"
standard_site_publication_at_uri = "at://did:plc:yourDIDhere/site.standard.publication/self"
```

### 3. Update the well-known file

Edit `static/.well-known/site.standard.publication` so it contains your
publication's AT-URI on a single line:

```
at://did:plc:yourDIDhere/site.standard.publication/self
```

This file is served verbatim by Zola (and any CDN/proxy in front of it) at
`/.well-known/site.standard.publication`. No special server config needed.

### 4. Link individual posts

For each post you want to link to a `site.standard.document` record:

1. Create the record on your PDS:

```json
{
  "$type": "site.standard.document",
  "site": "at://did:plc:yourDIDhere/site.standard.publication/self",
  "path": "/posts/my-post",
  "title": "My Post Title",
  "publishedAt": "2026-01-01T00:00:00.000Z",
  "description": "Post description.",
  "tags": ["example"]
}
```

2. Add the rkey to the post's frontmatter:

```toml
[extra]
standard_site_document_rkey = "3lwafzkjqm25s"
```

The template emits this in the rendered page's `<head>`:

```html
<link rel="site.standard.document"
      href="at://did:plc:yourDIDhere/site.standard.document/3lwafzkjqm25s">
```

Posts without `standard_site_document_rkey` render normally — the link tag
is simply omitted.

## File structure

```
.
├── config.toml                              # site config + standard.site fields
├── static/
│   └── .well-known/
│       └── site.standard.publication        # plain-text AT-URI endpoint
├── templates/
│   ├── base.html                            # publication discovery link tag
│   ├── index.html                           # homepage
│   ├── section.html                         # /posts/ index
│   ├── page.html                            # posts (document verification link)
│   └── 404.html
└── content/
    ├── _index.md
    └── posts/
        ├── _index.md
        └── hello-world.md                   # example post with standard.site extras
```

## Non-root publications

If your publication lives at a sub-path (e.g. `/blog`), the well-known
endpoint should be at `/.well-known/site.standard.publication/blog`. Create
`static/.well-known/site.standard.publication/blog` (a directory with the
path as its name) and put the plain-text AT-URI inside an extensionless file
at that path.

## References

- [standard.site docs](https://standard.site/docs/introduction/)
- [Verification spec](https://standard.site/docs/verification/)
- [Publication lexicon](https://standard.site/docs/lexicons/publication/)
- [Document lexicon](https://standard.site/docs/lexicons/document/)
- [Zola docs](https://www.getzola.org/documentation/)
