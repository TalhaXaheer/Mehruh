---
trigger: always_on
---
# Content Integrity

- Brand copy given by the client is **verbatim**: headline, tagline, CTA labels. Do not reword.
- Facts not provided by the client (locations, shipping terms, certifications, "complimentary X", press, awards, stockists, currencies) are **placeholders**. Put them in `src/content/placeholders.ts` with `// TODO(client): confirm`.
- Footer must stay minimal: brand + tagline, Navigation, Customer Care, Shipping & Returns, Contact, Privacy, Terms, Social. No invented services.
- Currency/price formatting through ONE helper `formatPrice()`; currency is a config value.
- Product data comes from `src/data/products.ts` typed with `Product`. Components never contain product literals.
