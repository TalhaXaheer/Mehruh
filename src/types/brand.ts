export interface BrandIdentity {
  name: "MEHRUH";
  tagline: "SCENT. SOUL. MEMORY.";
  founded: "Heritage Perfumery";
  story: string;
}

export type ThemeMode = "cinematic-dark" | "editorial-cream";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
