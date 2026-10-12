---
name: commerce-data
description: Use for products, collection data, cart state, cart drawer, pricing, product pages, checkout wiring or any ecommerce logic in MEHRUH. Trigger on product, price, cart, bag, add to cart, variant, size, 50ml/100ml, checkout, currency.
---
# Commerce & Data

Types in `src/types/product.ts`:
```ts
type Product = {
  slug: string; name: string; epithet: string;   // "Saanjh", "The Twilight"
  family: string;                                // "Amber Floral"
  blurb: string; story?: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  variants: { size: '50ml' | '100ml'; price: number; sku: string }[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};
```
- Data in `src/data/products.ts` (temporary seed, flagged `// TODO(client)`).
- Cart: one store (Context+reducer, or Zustand only if already installed), persisted to localStorage under a versioned key. Actions: add, remove, setQty, clear. Selectors: count, subtotal.
- Drawer reads the store only; the navbar badge shows count.
- Prices as integers in minor units; format via `formatPrice(amount, currency)`. Currency comes from `src/config/site.ts` (to be confirmed with the client).
- Cards link to `/collection/[slug]`; "Add to bag" never navigates.
- No payment or backend code unless the task says so. Prepare interfaces only.
