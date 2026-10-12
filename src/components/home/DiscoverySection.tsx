"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { GoldStar } from "@/components/ui/Ornament";
import { Check, ShoppingBag, Sparkles, Gift } from "lucide-react";
import { FragranceProduct } from "@/types/product";

export function DiscoverySection() {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Discovery Set item representation
  const discoveryProduct: FragranceProduct = {
    id: "mehruh-discovery-quintet",
    slug: "discovery-quintet",
    title: "THE IMPERIAL QUINTET",
    subtitle: "Discovery Set (5 x 10ml)",
    description:
      "All five master Extraits de Parfum housed in miniature glass flacons within a silk-lined burgundy lacquer casket. Includes a voucher for $95 toward your choice of full-size 100ml flacon.",
    storyQuote: "Five olfactory journeys through the sacred topography of South Asia.",
    family: "Amber Floral",
    notes: {
      top: ["Saffron Veil", "Kashmiri Rose", "Rain Mist"],
      heart: ["Kannauj Mitti", "Assamese Oud", "Damascus Rose"],
      base: ["Mysore Sandalwood", "Dark Leather", "Musk"],
    },
    options: [
      { size: "Discovery Set", price: 95, inStock: true },
    ],
    featuredImage: "/images/flacons-collection.webp",
    galleryImages: ["/images/flacons-collection.webp"],
    colorAccent: "#4A1726",
    accentClass: "from-burgundy-primary to-burgundy-deep",
  };

  const handleAddDiscovery = () => {
    addItem(discoveryProduct, discoveryProduct.options[0], 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="discovery" className="py-24 sm:py-32 bg-[#171515] text-[#F4EFE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="bg-gradient-to-r from-[#2B0913] via-[#1D1A1A] to-[#171515] border border-[#C5A15A]/40 rounded-[4px] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle gold decorative border corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#C5A15A]/15 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 md:h-[420px] rounded-[3px] overflow-hidden border border-[#C5A15A]/30 shadow-2xl group">
                <Image
                  src="/images/flacons-collection.webp"
                  alt="The Imperial Discovery Quintet flacon set"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171515]/90 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C5A15A] text-[#171515] text-[10px] tracking-[0.25em] font-sans uppercase font-medium px-3 py-1 rounded-[2px]">
                  INTRODUCTORY ATELIER
                </div>
              </div>
            </div>

            {/* Narrative & Purchase details */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#C5A15A] uppercase">
                <Gift className="w-3.5 h-3.5" />
                <span>EXPERIENCE ALL FIVE CREATIONS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#DFC285] tracking-[0.12em] uppercase font-light leading-tight">
                THE IMPERIAL DISCOVERY QUINTET
              </h2>

              <p className="text-sm sm:text-base text-[#D5C9B5]/85 leading-relaxed font-sans font-light">
                Delight in the complete repertoire of MEHRUH before choosing your signature flacon. Five 10ml travel sprays of SAANJH, RAAZ, MEHFIL, MITTI, and GUL, accompanied by bespoke scent blotters.
              </p>

              {/* Perk highlight */}
              <div className="p-4 bg-[#4A1726]/40 border border-[#C5A15A]/30 rounded-[3px] flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#DFC285] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#EBE3D3] font-sans">
                  <strong className="text-[#DFC285] block font-serif text-sm mb-0.5">
                    100% Redeemable Gift Voucher Included
                  </strong>
                  Your $95 investment is completely deductible toward any 100ml flacon purchased within 6 months.
                </div>
              </div>

              {/* Price and Add button */}
              <div className="pt-2 flex flex-col sm:flex-row items-baseline sm:items-center gap-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#D5C9B5]/60 uppercase block">
                    COMPLETE SET
                  </span>
                  <span className="font-serif text-3xl text-[#DFC285]">
                    $95 <span className="text-xs text-[#D5C9B5]/70 font-sans tracking-widest">USD</span>
                  </span>
                </div>

                <button
                  onClick={handleAddDiscovery}
                  className={`flex-1 w-full py-4 text-xs tracking-[0.28em] uppercase rounded-[2px] font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 ${
                    isAdded
                      ? "bg-[#2563eb] text-white border border-[#3b82f6]"
                      : "bg-[#C5A15A] text-[#171515] hover:bg-[#DFC285] hover:shadow-[0_0_25px_rgba(197,161,90,0.4)]"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO YOUR CHEST</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ACQUIRE DISCOVERY QUINTET</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
