"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  backdropVariants,
  emblemRevealVariants,
  letterDropVariants,
  taglineDropVariants,
  dividerLineVariants,
  goldLightSweepVariants,
  skipButtonVariants,
} from "@/animations/intro";
import { GoldStar } from "@/components/ui/Ornament";

export interface BrandIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
  durationMs?: number;
}

const INTRO_STORAGE_KEY = "mehruh_intro_viewed_v1";
const BRAND_LETTERS = ["M", "E", "H", "R", "U", "H"];

export function BrandIntro({
  onComplete,
  forcePlay = false,
  durationMs = 3400,
}: BrandIntroProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check storage and reduced-motion preference on client mount
  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const hasViewed = sessionStorage.getItem(INTRO_STORAGE_KEY);
    const urlParams = new URLSearchParams(window.location.search);
    const forceUrl = urlParams.get("intro") === "true";

    if (!hasViewed || forcePlay || forceUrl) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      onComplete?.();
    }

    const handleReplayEvent = () => {
      setIsVisible(true);
    };

    window.addEventListener("mehruh:replay-intro", handleReplayEvent);
    return () => {
      window.removeEventListener("mehruh:replay-intro", handleReplayEvent);
    };
  }, [forcePlay, onComplete]);

  const handleComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Storage unavailable
    }
    setIsVisible(false);
    onComplete?.();
  }, [onComplete]);

  // Automatic exit transition after timing window
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      handleComplete();
    }, prefersReducedMotion ? 900 : durationMs);

    return () => clearTimeout(timer);
  }, [isVisible, durationMs, prefersReducedMotion, handleComplete]);

  // Subtle floating golden dust specks
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: `${(i * 19) % 100}%`,
      y: `${(i * 23) % 100}%`,
      size: (i % 3) + 1.5,
      delay: (i * 0.18) % 1.5,
      duration: 3 + (i % 3),
    }));
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="mehruh-cinematic-intro"
          role="dialog"
          aria-label="MEHRUH Brand Prologue"
          aria-modal="true"
          variants={backdropVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0407] select-none"
        >
          {/* Deep Burgundy & Velvet Midnight Radial Gradients */}
          <div className="absolute inset-0 bg-radial-[circle_at_50%_45%_#380E1B_0%,#1A050B_45%,#070204_100%] opacity-90 pointer-events-none" />

          {/* Anamorphic Gold Light Sweep Beam */}
          {!prefersReducedMotion && (
            <motion.div
              variants={goldLightSweepVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-y-0 w-3/4 bg-gradient-to-r from-transparent via-[#DFC285]/15 to-transparent pointer-events-none mix-blend-screen blur-xl"
            />
          )}

          {/* Central Pulsing Golden Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#C5A15A]/10 blur-[90px] pointer-events-none animate-pulse" />

          {/* Atmospheric Floating Gold Dust Specks */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    y: -30,
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: p.x,
                    top: p.y,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                  }}
                  className="absolute rounded-full bg-[#DFC285]/70 shadow-[0_0_8px_#C5A15A]"
                />
              ))}
            </div>
          )}

          {/* Subtle Archival Film Grain Texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(rgba(244, 239, 229, 0.4) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Central Logo & Dropping Text Composition */}
          <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
            {/* 1. Regal Heritage Emblem (revealed from darkness) */}
            <motion.div
              variants={emblemRevealVariants}
              initial="hidden"
              animate={prefersReducedMotion ? "reducedMotion" : "visible"}
              className="relative w-20 h-22 sm:w-24 sm:h-28 mb-6 drop-shadow-[0_0_30px_rgba(197,161,90,0.45)]"
            >
              <Image
                src="/images/mehruh-monogram-gold.png"
                alt="MEHRUH Imperial Crest"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* 2. THE SOPHISTICATED VERTICAL TEXT DROP: "MEHRUH" */}
            <div className="flex items-center justify-center overflow-visible py-1">
              <h1 className="flex font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.32em] sm:tracking-[0.38em] uppercase font-light text-gold-gradient drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                {BRAND_LETTERS.map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    custom={index}
                    variants={letterDropVariants}
                    initial="hidden"
                    animate={prefersReducedMotion ? "reducedMotion" : "visible"}
                    className="inline-block transform-gpu will-change-transform"
                    style={{
                      // Slight natural character offset for imperial dignity
                      marginRight: index === BRAND_LETTERS.length - 1 ? 0 : "0.08em",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* 3. Delicate Center Editorial Hairline */}
            <motion.div
              variants={dividerLineVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-3 w-48 sm:w-64 my-4"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15A]/60" />
              <GoldStar size={8} className="text-[#DFC285]/90 flex-shrink-0" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15A]/60" />
            </motion.div>

            {/* 4. Descending Tagline: "SCENT. SOUL. MEMORY." */}
            <motion.div
              variants={taglineDropVariants}
              initial="hidden"
              animate={prefersReducedMotion ? "reducedMotion" : "visible"}
            >
              <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.42em] uppercase text-[#DFC285]/90 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                SCENT. SOUL. MEMORY.
              </p>
            </motion.div>
          </div>

          {/* Premium Accessible "SKIP INTRO" Button */}
          <motion.button
            variants={skipButtonVariants}
            initial="hidden"
            animate="visible"
            onClick={handleComplete}
            className="absolute bottom-8 sm:bottom-10 right-6 sm:right-10 z-30 group flex items-center gap-2.5 px-4 py-2 rounded-[2px] border border-[#C5A15A]/25 hover:border-[#DFC285] bg-[#171515]/40 hover:bg-[#171515]/80 backdrop-blur-sm transition-all duration-300 text-[10px] font-sans tracking-[0.28em] uppercase text-[#DFC285]/80 hover:text-[#F3E4C3] focus:outline-none focus:ring-1 focus:ring-[#C5A15A]"
            aria-label="Skip brand introduction"
          >
            <span>SKIP INTRO</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#C5A15A]">
              →
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
