+++
title       = "Hello, World"
date        = 2026-01-01
description = "An introductory post."

[taxonomies]
tags = ["intro", "meta"]

[extra]
# ─────────────────────────────────────────────────────────────────────────────
# Standard.site document verification
#
# Steps:
#   1. Create a site.standard.document record on your PDS pointing at this
#      post. The record's required fields are:
#        - site        → your publication's AT-URI
#        - title       → matches this page's `title`
#        - publishedAt → matches this page's `date`
#        - path        → "/posts/hello-world" (the Zola permalink path)
#
#   2. Copy the rkey from the created record and paste it below.
#
#   3. The template will then emit in <head>:
#        <link rel="site.standard.document"
#              href="at://did:plc:YOURDIIDHERE/site.standard.document/RKEY">
#
# Leave this field absent or empty to skip the link tag for this page.
# ─────────────────────────────────────────────────────────────────────────────
standard_site_document_rkey = "REPLACE_WITH_DOCUMENT_RKEY"
+++

This is the first post. Replace this content and update the
`standard_site_document_rkey` in the frontmatter once you've created the
corresponding `site.standard.document` record on your PDS.
