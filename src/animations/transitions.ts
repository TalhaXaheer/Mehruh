import { Transition } from "framer-motion";

/**
 * Editorial and luxury easing curves
 */
export const luxuryEase = [0.22, 1, 0.36, 1] as const;
export const gentleEase = [0.4, 0, 0.2, 1] as const;
export const editorialEase = [0.16, 1, 0.3, 1] as const;

export const transitions = {
  instant: {
    duration: 0.15,
    ease: luxuryEase,
  } satisfies Transition,

  fast: {
    duration: 0.28,
    ease: luxuryEase,
  } satisfies Transition,

  base: {
    duration: 0.45,
    ease: luxuryEase,
  } satisfies Transition,

  slow: {
    duration: 0.8,
    ease: luxuryEase,
  } satisfies Transition,

  cinematic: {
    duration: 1.2,
    ease: editorialEase,
  } satisfies Transition,

  heroTitle: {
    duration: 1.4,
    ease: [0.19, 1, 0.22, 1],
  } satisfies Transition,

  springGentle: {
    type: "spring",
    stiffness: 120,
    damping: 20,
  } satisfies Transition,
} as const;
