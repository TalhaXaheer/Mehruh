export interface FragrancePyramid {
  top: string[];
  heart: string[];
  base: string[];
}

export type FragranceFamily =
  | "Oriental Woody"
  | "Amber Floral"
  | "Warm Spicy"
  | "Earthy Vetiver"
  | "Petrichor & Oud";

export interface FlaconOption {
  size: "50ml" | "100ml" | "Discovery Set";
  price: number;
  stripePriceId?: string;
  inStock: boolean;
}

export interface FragranceProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  storyQuote: string;
  notes: FragrancePyramid;
  family: FragranceFamily;
  options: FlaconOption[];
  featuredImage: string;
  galleryImages: string[];
  colorAccent: string; // e.g. burgundy, emerald, amber, midnight
  accentClass: string;
  isBestseller?: boolean;
}
