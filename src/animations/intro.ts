import { Variants, Transition } from "framer-motion";

/**
 * Controlled physical easing with subtle luxury overshoot
 * Simulates gentle gravity and natural atmospheric settle
 */
export const luxuryDropEase = [0.175, 0.885, 0.32, 1.08] as const;
export const cinematicLightEase = [0.22, 1, 0.36, 1] as const;

export const backdropVariants: Variants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(6px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const goldLightSweepVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-120%",
    rotate: -20,
  },
  animate: {
    opacity: [0, 0.45, 0],
    x: "150%",
    rotate: -20,
    transition: {
      duration: 2.2,
      delay: 0.5,
      ease: cinematicLightEase,
    },
  },
};

export const ambientParticlesVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.65,
    transition: { duration: 1.2 },
  },
};

export const emblemRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: -25,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  reducedMotion: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4 },
  },
};

/**
 * Vertical letter drop animation with staggered timing,
 * controlled easing, motion blur, and gentle overshoot settle.
 */
export const letterDropVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -110,
    filter: "blur(10px)",
    scale: 0.96,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.95,
      delay: 0.65 + i * 0.07,
      ease: luxuryDropEase,
    },
  }),
  reducedMotion: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export const taglineDropVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 1.35,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  reducedMotion: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
};

export const dividerLineVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 1.25,
      ease: cinematicLightEase,
    },
  },
};

export const skipButtonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.6 },
  },
};
