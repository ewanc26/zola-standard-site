+++
title       = "Hello, World"
date        = 2026-01-01
updated     = 2026-06-15
description = "An introductory post about this site and what to expect."

[taxonomies]
tags = ["meta", "intro"]

[extra]
# Uncomment and fill in after creating a site.standard.document record:
# standard_site_document_rkey = "3lwafzkjqm25s"
+++

This is the first post on this site. It serves as a placeholder — replace it with your own writing, or keep it as a reminder of where things started.

## What this site is

A personal blog built with [Zola](https://www.getzola.org) and published on [AT Protocol](https://atproto.com) via [standard.site](https://standard.site). The design is intentionally quiet: a dark reading surface, a single typeface for prose, and just enough structure to let the words do the work.

## How it works

Each post is a Markdown file in `content/posts/`. Zola builds the site into static HTML, which you can deploy anywhere — a VPS, a CDN, or [Vercel](https://vercel.com).

The standard.site integration means your posts are discoverable on AT Protocol. When you create a `site.standard.document` record for a post, readers on the network can find it through their usual AT Protocol clients.

## What's next

- Replace the placeholder config values in `config.toml`
- Create your AT Protocol publication and document records
- Write more posts
- Customise the theme to make it your own

Here's a quick example of the syntax highlighting:

```rust
fn main() {
    println!("Hello, world!");
    // This is a Zola-powered site on AT Protocol
    let theme = "dark-study";
    println!("Theme: {}", theme);
}
```
