"use client";

import React from "react";
import Image from "next/image";
import { GoldStar, EditorialDivider } from "@/components/ui/Ornament";

export function HeritageStory() {
  const pillars = [
    {
      num: "I",
      title: "DEG-BHAPKA COPPER ALCHEMY",
      desc: "For over five centuries, master attarmahars of Kannauj have distilled sacred botanicals using ancient clay-sealed copper stills over slow wood fires, capturing fleeting souls into Mysore sandalwood.",
    },
    {
      num: "II",
      title: "MYSORE SANTALUM & OUD NOIR",
      desc: "We source legally aged wild Assamese agarwood and sacred Mysore sandalwood, aged in subterranean dark vaults to mature their resinous depths into velvet sillage.",
    },
    {
      num: "III",
      title: "PRE-DAWN DAMASCENE HARVEST",
      desc: "Our red roses are hand-plucked in the misty valley of Kashmir between 4:00 AM and 6:30 AM before the first sunrise burns the dewy, crystalline facets of the bloom.",
    },
    {
      num: "IV",
      title: "MITTI: SOUL OF MONSOON RAIN",
      desc: "The sacred petrichor extracted from baked Gangetic alluvial clay, celebrating the primordial scent of earth surrendering to first torrential monsoon drops.",
    },
  ];

  return (
    <section id="heritage" className="py-24 sm:py-32 bg-[#171515] text-[#F4EFE5] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4A1726]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C5A15A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#C5A15A] uppercase mb-3">
            <GoldStar size={10} />
            <span>THE SACRED MAISON</span>
            <GoldStar size={10} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#DFC285] tracking-[0.14em] uppercase font-light">
            AN ARCHIVE OF SCENT & MEMORY
          </h2>
          <EditorialDivider className="my-4" />
          <p className="font-serif italic text-base sm:text-lg text-[#D5C9B5]/85 leading-relaxed">
            &ldquo;We do not merely create perfumes. We bottle the sacred architectures, royal courtyards, and monsoon memories of an empire.&rdquo;
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Visual Showcase with Wax Seal */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[520px] rounded-[3px] overflow-hidden border border-[#C5A15A]/30 shadow-2xl group">
              <Image
                src="/images/story-palace.jpg"
                alt="Imperial South Asian palace courtyard and botanical conservatory"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171515] via-[#171515]/20 to-transparent" />

              {/* Floating Wax Seal Medallion */}
              <div className="absolute bottom-6 right-6 flex items-center gap-4 bg-[#171515]/90 backdrop-blur-md p-4 rounded border border-[#C5A15A]/40 shadow-xl">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src="/images/wax-seal.webp"
                    alt="MEHRUH Archival Wax Seal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] tracking-[0.25em] text-[#DFC285] uppercase font-mono">
                    SEAL OF AUTHENTICITY
                  </span>
                  <span className="text-xs text-[#EBE3D3] font-serif italic">
                    Single-Origin Distillations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-xs font-sans tracking-[0.28em] text-[#C5A15A] uppercase">
              PHILOSOPHY OF EXTRAIT DE PARFUM
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#DFC285] leading-tight font-light">
              Where Royal Mystique Meets Modern High Perfumery
            </h3>
            <p className="text-sm sm:text-base text-[#D5C9B5]/85 leading-relaxed font-sans font-light">
              MEHRUH was founded to reclaim the magnificent olfactory prestige of the East. Long before European perfume houses flourished, the fragrant courts of South Asia mastered the delicate art of hydro-distillation.
            </p>
            <p className="text-sm sm:text-base text-[#D5C9B5]/85 leading-relaxed font-sans font-light">
              Every formula is compounded at an extraordinarily concentrated 32% pure Extrait de Parfum strength, delivering a luxurious sillage that lingers intimately on skin for 16 hours. Each flacon is hand-polished and presented in a velvet-lined casket bearing our signature wax insignia.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div className="border-l-2 border-[#C5A15A] pl-4">
                <div className="text-2xl font-serif text-[#DFC285]">100%</div>
                <div className="text-[10px] tracking-[0.2em] text-[#D5C9B5]/70 uppercase">
                  Ethically Distilled
                </div>
              </div>
              <div className="border-l-2 border-[#C5A15A] pl-4">
                <div className="text-2xl font-serif text-[#DFC285]">32%</div>
                <div className="text-[10px] tracking-[0.2em] text-[#D5C9B5]/70 uppercase">
                  Extrait Concentration
                </div>
              </div>
              <div className="border-l-2 border-[#C5A15A] pl-4">
                <div className="text-2xl font-serif text-[#DFC285]">16+ Hrs</div>
                <div className="text-[10px] tracking-[0.2em] text-[#D5C9B5]/70 uppercase">
                  Sacred Sillage
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#C5A15A]/20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-[3px] bg-[#1D1A1A]/70 border border-[#C5A15A]/20 hover:border-[#DFC285]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="font-serif text-2xl text-[#C5A15A]/50 group-hover:text-[#DFC285] transition-colors block mb-2">
                {pillar.num}
              </span>
              <h4 className="font-sans text-xs tracking-[0.22em] text-[#DFC285] uppercase mb-3 font-medium">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#D5C9B5]/70 leading-relaxed font-sans font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
