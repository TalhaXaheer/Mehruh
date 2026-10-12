"use client";

import React, { useState } from "react";
import { subscribeNewsletter, NewsletterState } from "@/actions/newsletter";
import { GoldStar } from "@/components/ui/Ornament";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [state, setState] = useState<NewsletterState>({});
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await subscribeNewsletter({}, formData);
      setState(res);
    } catch {
      setState({ success: false, error: "Something went wrong. Please try again." });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="py-28 sm:py-36 bg-[#0E0B0C] text-[#F4EFE5] relative border-t border-[#C5A15A]/15 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.38em] text-[#C5A15A] uppercase mb-4">
          <GoldStar size={8} />
          <span>CORRESPONDENCE</span>
          <GoldStar size={8} />
        </div>

        {/* Requested Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl text-[#DFC285] tracking-[0.12em] uppercase font-light">
          Stay close to the scent.
        </h2>

        <p className="font-serif italic text-sm sm:text-base text-[#D5C9B5]/80 max-w-md mx-auto mt-4 leading-relaxed">
          &ldquo;Be the first to receive notice of limited seasonal harvests, private atelier viewings, and bespoke formulations.&rdquo;
        </p>

        {/* Minimal Sophisticated Input Form */}
        <div className="mt-10 max-w-md mx-auto">
          {state.success ? (
            <div className="p-6 bg-[#181416] border border-[#C5A15A]/60 rounded-[2px] text-center space-y-2 animate-in fade-in duration-500">
              <CheckCircle2 className="w-6 h-6 text-[#DFC285] mx-auto" />
              <h3 className="font-serif text-lg text-[#DFC285] tracking-[0.15em] uppercase">
                WELCOME TO MEHRUH
              </h3>
              <p className="text-xs text-[#EBE3D3]/80 font-sans">
                {state.message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 border-b border-[#C5A15A]/40 pb-2 focus-within:border-[#DFC285] transition-colors">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-2 py-3 bg-transparent text-xs font-sans text-[#F4EFE5] placeholder:text-[#D5C9B5]/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-6 py-3 bg-transparent hover:bg-[#C5A15A] text-[#DFC285] hover:text-[#0E0B0C] border border-[#C5A15A] text-[11px] tracking-[0.28em] uppercase font-sans font-medium rounded-[1px] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  <span>{isPending ? "CONNECTING..." : "JOIN MEHRUH"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {state.error && (
                <p className="text-xs text-rose-300 text-left font-sans">
                  {state.error}
                </p>
              )}

              <p className="text-[10px] text-[#D5C9B5]/45 tracking-[0.15em] uppercase font-sans text-center">
                Private batch notices only. No unsolicited communications.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
