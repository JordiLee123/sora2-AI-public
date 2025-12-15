# Sora 2 AI – Public GitHub Mirror

This repository intentionally contains only a **minimal placeholder** for [sora-2-ai.com](https://sora-2-ai.com/). The production source code stays private while GitHub viewers still get a branded landing page.

Looking for the real experience? Head to **[https://sora-2-ai.com/](https://sora-2-ai.com/)** for the full product, changelog, and support resources. This repo simply links there to provide a trusted GitHub footprint.

## Why this repo exists

1. Provide an official GitHub link without disclosing proprietary implementation.
2. Offer a lightweight Next.js scaffold that can run on Vercel, Cloudflare Pages, or any Node host.
3. Keep maintenance trivial—only stock Next.js/React dependencies remain.

## What’s inside

```
src/
└── app/
    ├── globals.css   # Small gradient + glassmorphism helpers
    ├── layout.tsx    # Basic HTML shell
    └── page.tsx      # Placeholder text + external links
```

There are **no APIs, auth integrations, payment logic, or data stores** in this project.

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000

npm run build
npm start
```

## Customization ideas

- Update `src/app/page.tsx` to change copy, CTA buttons, or add more links.
- Adjust `src/app/globals.css` for different gradients or typography.
- Drop in static assets (logos, favicons) under `public/` as needed.

## License & contact

MIT License. For official product details or support, please visit [sora-2-ai.com](https://sora-2-ai.com/).
