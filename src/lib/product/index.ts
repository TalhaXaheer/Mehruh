import { FragranceProduct } from "@/types/product";

/**
 * MEHRUH Master Fragrance Collection
 * Inspired by South Asian heritage, royal courts, and sacred botanical distillation.
 */
export const MEHRUH_COLLECTION: FragranceProduct[] = [
  {
    id: "mehruh-saanjh",
    slug: "saanjh",
    title: "SAANJH",
    subtitle: "The Twilight",
    description:
      "A golden hour tribute composed of rich Kashmiri red rose petals, smoldering amber resin, aged Mysore sandalwood, and warm skin musk.",
    storyQuote:
      "When the desert sun descends beneath the sandstone arches, dusk awakens sacred intimacies.",
    family: "Amber Floral",
    notes: {
      top: ["Crimson Rose Petals", "Pink Peppercorn", "Saffron Veil"],
      heart: ["Amber Resin", "Smoked Labdanum", "Jasmine Sambac"],
      base: ["Mysore Sandalwood", "Skin Musk", "Bourbon Vanilla"],
    },
    options: [
      { size: "50ml", price: 185, inStock: true },
      { size: "100ml", price: 265, inStock: true },
    ],
    featuredImage: "/images/products/bottle-1.jpg",
    galleryImages: ["/images/products/bottle-1.jpg"],
    colorAccent: "#4A1726",
    accentClass: "from-burgundy-primary to-burgundy-deep",
    isBestseller: true,
  },
  {
    id: "mehruh-raaz",
    slug: "raaz",
    title: "RAAZ",
    subtitle: "The Secret",
    description:
      "An enigmatic alchemy of Assamese wild oud, dark Iranian saffron filaments, temple frankincense, and earthy patchouli leaves.",
    storyQuote:
      "A veiled whisper spoken in the courtyards of forgotten royalty.",
    family: "Oriental Woody",
    notes: {
      top: ["Persian Saffron", "Bergamot Noir", "Nutmeg"],
      heart: ["Assamese Wild Oud", "Temple Frankincense", "Cedarwood"],
      base: ["Smoked Patchouli", "Dark Leather", "Black Amber"],
    },
    options: [
      { size: "50ml", price: 210, inStock: true },
      { size: "100ml", price: 295, inStock: true },
    ],
    featuredImage: "/images/products/bottle-2.jpg",
    galleryImages: ["/images/products/bottle-2.jpg"],
    colorAccent: "#17251F",
    accentClass: "from-forest-primary to-forest-deep",
  },
  {
    id: "mehruh-mehfil",
    slug: "mehfil",
    title: "MEHFIL",
    subtitle: "The Gathering",
    description:
      "The warmth of candlelight, raw leather upholstery, vintage amber, and deep Damascus rose evoking late-night poetic gatherings.",
    storyQuote:
      "Where melodies linger in velvet cushions and time softens into golden memories.",
    family: "Warm Spicy",
    notes: {
      top: ["Cardamom Pods", "Coriander Seed", "Bergamot"],
      heart: ["Damascus Rose", "Cuir Antique", "Caramelized Amber"],
      base: ["Smoked Birch", "Tonka Bean", "Golden Oud"],
    },
    options: [
      { size: "50ml", price: 195, inStock: true },
      { size: "100ml", price: 280, inStock: true },
    ],
    featuredImage: "/images/products/bottle-3.jpg",
    galleryImages: ["/images/products/bottle-3.jpg"],
    colorAccent: "#3D2E26",
    accentClass: "from-earth-sandalwood to-charcoal-deep",
  },
  {
    id: "mehruh-mitti",
    slug: "mitti",
    title: "MITTI",
    subtitle: "After Rain",
    description:
      "The divine petrichor of baked clay steeped in first monsoon showers, blended with green vetiver roots and creamy sandalwood.",
    storyQuote:
      "The earth exhales its oldest prayer as the first drops touch sacred soil.",
    family: "Petrichor & Oud",
    notes: {
      top: ["Fresh Rain Mist", "Baked Terracotta", "Crushed Mint"],
      heart: ["Kannauj Mitti Attar", "Wild Vetiver", "Lotus Blossom"],
      base: ["Sandalwood Bark", "White Amber", "Earthy Musk"],
    },
    options: [
      { size: "50ml", price: 190, inStock: true },
      { size: "100ml", price: 275, inStock: true },
    ],
    featuredImage: "/images/products/pic-1.png",
    galleryImages: ["/images/products/pic-1.png"],
    colorAccent: "#1B2A32",
    accentClass: "from-[#1B2A32] to-[#0E151A]",
  },
  {
    id: "mehruh-gul",
    slug: "gul",
    title: "GUL",
    subtitle: "The Flower",
    description:
      "A dew-kissed dawn harvest of heirloom centifolia roses, grandiflorum jasmine, soft Tahitian vanilla pods, and crystalline musk.",
    storyQuote:
      "An imperial garden bathed in morning mist, pure and everlasting.",
    family: "Amber Floral",
    notes: {
      top: ["Dewy Rosewater", "Green Violet Leaf", "Neroli"],
      heart: ["Centifolia Rose", "Night Jasmine Sambac", "Ylang Ylang"],
      base: ["Tahitian Vanilla", "Crystalline Musk", "Blonde Cedar"],
    },
    options: [
      { size: "50ml", price: 185, inStock: true },
      { size: "100ml", price: 265, inStock: true },
    ],
    featuredImage: "/images/products/pic-2.png",
    galleryImages: ["/images/products/pic-2.png"],
    colorAccent: "#3E1E28",
    accentClass: "from-[#3E1E28] to-[#1F0A12]",
  },
];

export function getFragranceBySlug(slug: string): FragranceProduct | undefined {
  return MEHRUH_COLLECTION.find((f) => f.slug === slug);
}
