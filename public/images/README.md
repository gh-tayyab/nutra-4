# Image assets checklist

Drop your real files into this folder using the names below, then swap the
matching `<AssetSlot label="..." />` in the component for a Next.js
`<Image>` tag. Every slot is already sized and framed, so images will drop
straight into the layout.

| File | Used in | Notes |
|---|---|---|
| `logo.png` | Header, Footer, JSON-LD | Transparent background, min 400px wide |
| `og-cover.jpg` | Social share previews | 1200×630px |
| `product-box-front.jpg` | Hero, Product schema | Box, front-facing |
| `product-box-angle-2.jpg` | Ingredients section | Optional second angle |
| `icon-192.png`, `icon-512.png` | site.webmanifest | Square, transparent |
| `reviews/review-01.jpg` … | Reviews section | Real WhatsApp/Instagram screenshots only, with permission |

## Swapping an AssetSlot for a real image

```tsx
// Before
<AssetSlot label="Hero Product Shot — Box, Front-Facing" aspect="aspect-[4/5]" />

// After
import Image from "next/image";

<div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-line">
  <Image
    src="/images/product-box-front.jpg"
    alt="Nutra-4 weight gainer box"
    fill
    className="object-cover"
    priority
  />
</div>
```

Use `priority` only on the hero image (it's above the fold). Every other
image should stay lazy-loaded by default.
