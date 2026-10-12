"use client";

import React, { useState } from "react";
import { GoldStar, EditorialDivider } from "@/components/ui/Ornament";
import { Sparkles, Flower2, Flame, Droplets } from "lucide-react";

export function FragrancePyramidSection() {
  const [activeTier, setActiveTier] = useState<"top" | "heart" | "base">("heart");

  const tiers = {
    top: {
      name: "TOP NOTES",
      subtitle: "The Immediate Awakening (0 - 30 minutes)",
      icon: Droplets,
      desc: "Volatile, incandescent floral whispers and exotic spice filaments that introduce the scent upon first application.",
      notes: [
        { name: "Persian Saffron Veil", origin: "Pampore Valley", scent: "Golden warmth, dry bittersweet leather" },
        { name: "Pre-Dawn Rosewater", origin: "Kashmir Valley", scent: "Dewy, ethereal, crystalline freshness" },
        { name: "Fresh Monsoon Mist", origin: "Gangetic Plain", scent: "Ozone, electric humidity, cool rain" },
        { name: "Green Cardamom Pods", origin: "Idukki Hills", scent: "Resinous camphor, sweet herbal snap" },
      ],
    },
    heart: {
      name: "HEART NOTES",
      subtitle: "The Soul of The Distillation (2 - 6 hours)",
      icon: Flower2,
      desc: "The emotional core of MEHRUH, where royal florals and ancestral attars intertwine in slow harmonic warmth.",
      notes: [
        { name: "Kannauj Mitti Attar", origin: "Kannauj, Uttar Pradesh", scent: "Sun-baked earth, baked clay in copper stills" },
        { name: "Assamese Wild Oud", origin: "Upper Assam Rain Forests", scent: "Dark balsamic wood, golden resin, temple incense" },
        { name: "Damascus Heritage Rose", origin: "Royal Mughal Gardens", scent: "Opulent crimson velvet, honeyed spice" },
        { name: "Night-Blooming Sambac", origin: "Madurai Temples", scent: "Narcotic white petal radiance, sensual warmth" },
      ],
    },
    base: {
      name: "BASE NOTES",
      subtitle: "The Memory & Sacred Sillage (8 - 18+ hours)",
      icon: Flame,
      desc: "Heavy botanical resins, ancient woods, and warm ambers that fuse with your personal body chemistry to create an eternal memory.",
      notes: [
        { name: "Mysore Sandalwood (Santala)", origin: "Protected Mysore Groves", scent: "Creamy, holy milkwood, buttery soothing peace" },
        { name: "Smoked Birch & Labdanum", origin: "High Himalayas", scent: "Campfire embers, aged leather armchairs" },
        { name: "Raw Golden Amber", origin: "Indian Ocean Coastal Trade", scent: "Caramelized sunlit warmth, golden aura" },
        { name: "Tahitian Vanilla & Musk", origin: "Artisanal Extraction", scent: "Silken skin intimate resonance, dark sweetness" },
      ],
    },
  };

  const currentTier = tiers[activeTier];
  const IconComponent = currentTier.icon;

  return (
    <section id="olfactory" className="py-24 sm:py-32 bg-[#121010] text-[#F4EFE5] relative border-y border-[#C5A15A]/15">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#C5A15A] uppercase mb-3">
            <GoldStar size={10} />
            <span>ALCHEMICAL ARCHITECTURE</span>
            <GoldStar size={10} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#DFC285] tracking-[0.14em] uppercase font-light">
            THE OLFACTORY PYRAMID
          </h2>
          <EditorialDivider className="my-4" />
          <p className="font-serif italic text-base sm:text-lg text-[#D5C9B5]/85">
            A three-act symphony of botanical evaporation, crafted by traditional attar masters to evolve across sixteen hours of wear.
          </p>

          {/* Tier Selectors */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 mt-10">
            {(["top", "heart", "base"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setActiveTier(tierKey)}
                className={`flex-1 sm:flex-initial px-5 sm:px-8 py-3 text-xs tracking-[0.24em] uppercase rounded-[2px] font-sans transition-all duration-300 ${
                  activeTier === tierKey
                    ? "bg-[#4A1726] text-[#DFC285] border border-[#C5A15A] shadow-[0_0_20px_rgba(197,161,90,0.35)]"
                    : "border border-[#C5A15A]/20 text-[#D5C9B5]/70 hover:border-[#C5A15A]/60 hover:text-[#DFC285]"
                }`}
              >
                {tierKey === "top" && "01 • TOP"}
                {tierKey === "heart" && "02 • HEART"}
                {tierKey === "base" && "03 • BASE"}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Pyramid Tier Display */}
        <div className="bg-[#1D1A1A] border border-[#C5A15A]/30 rounded-[4px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#C5A15A]/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-[#C5A15A]/40 bg-[#4A1726]/40 flex items-center justify-center text-[#DFC285]">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#DFC285] tracking-[0.12em] uppercase font-light">
                  {currentTier.name}
                </h3>
                <p className="text-xs tracking-[0.2em] text-[#C5A15A]/80 uppercase font-sans">
                  {currentTier.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#D5C9B5]/80 font-sans max-w-md leading-relaxed">
              {currentTier.desc}
            </p>
          </div>

          {/* Ingredient Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {currentTier.notes.map((note) => (
              <div
                key={note.name}
                className="p-5 rounded-[2px] bg-[#171515] border border-[#C5A15A]/15 hover:border-[#DFC285]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] text-[#C5A15A] uppercase mb-2">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{note.origin}</span>
                </div>
                <h4 className="font-serif text-lg text-[#DFC285] group-hover:text-white transition-colors mb-2">
                  {note.name}
                </h4>
                <p className="text-xs text-[#D5C9B5]/70 font-sans italic leading-relaxed">
                  &ldquo;{note.scent}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
