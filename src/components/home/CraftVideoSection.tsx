"use client";

import React, { useRef, useState } from "react";
import { GoldStar, EditorialDivider } from "@/components/ui/Ornament";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function CraftVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="atelier" className="py-24 sm:py-32 bg-[#121010] text-[#F4EFE5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#C5A15A] uppercase mb-3">
            <GoldStar size={10} />
            <span>CINEMATIC ATELIER</span>
            <GoldStar size={10} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#DFC285] tracking-[0.14em] uppercase font-light">
            THE ART OF THE FLACON
          </h2>
          <EditorialDivider className="my-4" />
          <p className="font-serif italic text-base sm:text-lg text-[#D5C9B5]/85">
            Every bottle is an architectural monument. Hand-poured French ultra-clear crystal, solid zamak cap weighing 180 grams, finished with an antique gold emblem.
          </p>
        </div>

        {/* Video Card Showcase */}
        <div className="relative rounded-[4px] overflow-hidden border border-[#C5A15A]/35 shadow-[0_15px_50px_rgba(0,0,0,0.8)] aspect-video bg-[#0A0909] group">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
          >
            <source src="/videos/craft-commercial.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#171515]/80 via-transparent to-transparent pointer-events-none" />

          {/* Interactive Player Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-[#171515]/80 backdrop-blur-md text-[#DFC285] border border-[#C5A15A]/40 hover:bg-[#C5A15A] hover:text-[#171515] transition-all"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-[#171515]/80 backdrop-blur-md text-[#DFC285] border border-[#C5A15A]/40 hover:bg-[#C5A15A] hover:text-[#171515] transition-all"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#DFC285] font-mono bg-[#171515]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#C5A15A]/30">
              MEHRUH ATELIER REEL
            </span>
          </div>
        </div>

        {/* Flacon Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
          <div className="p-6 bg-[#1D1A1A]/50 border border-[#C5A15A]/15 rounded-[2px]">
            <span className="font-serif text-xl text-[#DFC285] block mb-1">180g Zamak Cap</span>
            <p className="text-xs text-[#D5C9B5]/70 font-sans">
              Substantial hand-polished metallic closure that snaps with an audible royal click.
            </p>
          </div>
          <div className="p-6 bg-[#1D1A1A]/50 border border-[#C5A15A]/15 rounded-[2px]">
            <span className="font-serif text-xl text-[#DFC285] block mb-1">Hand-Poured Glass</span>
            <p className="text-xs text-[#D5C9B5]/70 font-sans">
              Ultra-dense optical crystal base engineered to refract sunlight like imperial gemstones.
            </p>
          </div>
          <div className="p-6 bg-[#1D1A1A]/50 border border-[#C5A15A]/15 rounded-[2px]">
            <span className="font-serif text-xl text-[#DFC285] block mb-1">Archival Velvet</span>
            <p className="text-xs text-[#D5C9B5]/70 font-sans">
              Every shipment is cradled in custom deep-wine velvet casket stamped with gold foil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
