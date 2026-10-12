/**
 * MEHRUH Design System Tokens
 * "SCENT. SOUL. MEMORY."
 *
 * Centralized design tokens capturing South Asian luxury,
 * traditional craftsmanship, and modern editorial perfumery aesthetics.
 */

export const colors = {
  // Deep Burgundy / Velvet Wine
  burgundy: {
    DEFAULT: "#4A1726",
    primary: "#4A1726",
    deep: "#2B0913",
    dark: "#1A050B",
    wine: "#380E1B",
    glow: "#5F1C30",
    surface: "#250912",
  },
  // Antique Gold / Metallic Radiance
  gold: {
    DEFAULT: "#C5A15A",
    primary: "#C5A15A",
    light: "#DFC285",
    sheen: "#F3E4C3",
    antique: "#A8833E",
    dark: "#876629",
    border: "rgba(197, 161, 90, 0.35)",
    borderSubtle: "rgba(197, 161, 90, 0.18)",
    borderGlow: "rgba(197, 161, 90, 0.55)",
    accentBg: "rgba(197, 161, 90, 0.08)",
  },
  // Warm Cream / Ivory / Parchment
  cream: {
    DEFAULT: "#F4EFE5",
    primary: "#F4EFE5",
    soft: "#FAF7F2",
    parchment: "#EBE3D3",
    muted: "#D5C9B5",
    border: "#E2D8C3",
  },
  // Charcoal / Near-Black
  charcoal: {
    DEFAULT: "#171515",
    primary: "#171515",
    deep: "#0F0E0E",
    surface: "#1D1A1A",
    card: "#221F1F",
  },
  // Forest / Deep Emerald
  forest: {
    DEFAULT: "#17251F",
    primary: "#17251F",
    deep: "#0D1713",
    glow: "#21362C",
  },
  // Muted Earth / Sandalwood Brown
  earth: {
    DEFAULT: "#3D2E26",
    sandalwood: "#4A362C",
    bark: "#2C1E17",
  },
} as const;

export const typography = {
  fontFamily: {
    serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
    sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  },
  letterSpacing: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.12em",
    widest: "0.22em",
    luxury: "0.32em",
    editorial: "0.45em",
  },
  lineHeight: {
    tight: "1.15",
    snug: "1.3",
    normal: "1.6",
    relaxed: "1.8",
  },
} as const;

export const spacing = {
  xs: "0.25rem",  // 4px
  sm: "0.5rem",   // 8px
  md: "1rem",     // 16px
  lg: "1.5rem",   // 24px
  xl: "2rem",     // 32px
  "2xl": "3rem",  // 48px
  "3xl": "4.5rem",// 72px
  "4xl": "6rem",  // 96px
  "5xl": "8rem",  // 128px
  "6xl": "10rem", // 160px
} as const;

// Refined luxury border radii (strict anti-overly rounded philosophy)
export const borderRadius = {
  none: "0px",
  xs: "1px",
  sm: "2px",
  md: "3px",
  lg: "4px",
  pill: "9999px",
} as const;

export const transitions = {
  durations: {
    instant: "150ms",
    fast: "250ms",
    base: "400ms",
    slow: "700ms",
    cinematic: "1200ms",
  },
  timing: {
    luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
    editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
    soft: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const shadows = {
  subtle: "0 2px 10px rgba(0, 0, 0, 0.15)",
  ambient: "0 10px 30px rgba(15, 14, 14, 0.4)",
  goldGlow: "0 0 25px rgba(197, 161, 90, 0.22)",
  goldGlowSm: "0 0 12px rgba(197, 161, 90, 0.18)",
  card: "0 8px 32px rgba(23, 7, 14, 0.35)",
  heroVignette: "inset 0 0 120px rgba(15, 5, 8, 0.75)",
} as const;

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  transitions,
  shadows,
} as const;

export default tokens;
