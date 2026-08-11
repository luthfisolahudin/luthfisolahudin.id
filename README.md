# Luthfi Solahudin

Personal website for Luthfi Solahudin, built with Astro and plain CSS.

## Development

Install dependencies and run the local development server with pnpm:

```sh
pnpm install
pnpm dev
```

Run the validation and production build with:

```sh
pnpm check
pnpm build
```

## Writing

Add future Markdown posts to `src/content/writing`. Each post uses this frontmatter:

```yaml
---
title: A clear title
description: A short description for listings and metadata.
publishedAt: 2026-08-11
updatedAt: 2026-08-12
draft: false
---
```

`updatedAt` is optional. Draft posts are excluded from the homepage, article routes, and RSS feed. Published posts are available at `/writing/[slug]/` and are listed newest-first.

## License

The source code in this repository is licensed under the [MIT License](LICENSE).

The content in `src/content/writing`, personal copy, and identity assets are excluded from that license. They remain © Luthfi Solahudin, all rights reserved. The existing favicon is an identity asset.
