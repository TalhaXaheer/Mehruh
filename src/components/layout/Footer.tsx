"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { GoldStar } from "@/components/ui/Ornament";

export function Footer() {
  return (
    <footer className="bg-[#0A0809] text-[#F4EFE5] border-t border-[#C5A15A]/20 pt-20 pb-14 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Top Brand Statement */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-[#C5A15A]/15">
          <BrandLogo variant="stacked" theme="dark" size="md" as="p" />
        </div>

        {/* 4 Clean Editorial Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#C5A15A]/15 text-xs">
          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-sans tracking-[0.3em] text-[#C5A15A] uppercase font-medium">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-[#D5C9B5]/75 font-light">
              <li>
                <a href="#hero" className="hover:text-[#DFC285] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#DFC285] transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#DFC285] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#statement" className="hover:text-[#DFC285] transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-sans tracking-[0.3em] text-[#C5A15A] uppercase font-medium">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-[#D5C9B5]/75 font-light">
              <li>
                <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
                  Private Consultations
                </span>
              </li>
              <li>
                <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
                  Flacon Care
                </span>
              </li>
              <li>
                <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
                  Authenticity Verification
                </span>
              </li>
              <li>
                <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
                  Bespoke Engraving
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Shipping & Returns */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-sans tracking-[0.3em] text-[#C5A15A] uppercase font-medium">
              SHIPPING & RETURNS
            </h4>
            <ul className="space-y-2.5 text-[#D5C9B5]/75 font-light">
              <li>
                <span className="text-[#D5C9B5]/75">
                  Complimentary Insured Dispatch
                </span>
              </li>
              <li>
                <span className="text-[#D5C9B5]/75">
                  Archival Wax Casket Packaging
                </span>
              </li>
              <li>
                <span className="text-[#D5C9B5]/75">
                  Global Courier Delivery
                </span>
              </li>
              <li>
                <span className="text-[#D5C9B5]/75">
                  Complimentary Sample Included
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-sans tracking-[0.3em] text-[#C5A15A] uppercase font-medium">
              CONTACT & MAISON
            </h4>
            <ul className="space-y-2.5 text-[#D5C9B5]/75 font-light">
              <li className="text-[#DFC285]">concierge@mehruh.com</li>
              <li>Mayfair Salon • London</li>
              <li>DIFC Atelier • Dubai</li>
              <li className="pt-2 flex items-center gap-4 text-[#DFC285]">
                <a href="#instagram" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <span>•</span>
                <a href="#journal" className="hover:text-white transition-colors">
                  Editorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Privacy, Terms, Replay */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D5C9B5]/50 tracking-[0.1em] gap-4">
          <div className="flex items-center gap-2">
            <GoldStar size={8} className="text-[#C5A15A]" />
            <span>© 2026 MEHRUH HAUTE PERFUMERY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 uppercase text-[10px] tracking-[0.2em]">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("mehruh:replay-intro"));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="hover:text-[#DFC285] transition-colors text-[#C5A15A]/80 cursor-pointer flex items-center gap-1.5"
            >
              <span>↺</span>
              <span>REPLAY PROLOGUE</span>
            </button>
            <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
              PRIVACY
            </span>
            <span className="hover:text-[#DFC285] transition-colors cursor-pointer">
              TERMS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
