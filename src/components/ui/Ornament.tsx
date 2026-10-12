import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Antique Gold Diamond Star Ornament (the 4-point star seen at apex of MEHRUH emblem)
 */
export function GoldStar({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#C5A15A] inline-block", className)}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Editorial divider line with centered gold diamond
 */
export function EditorialDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-4 w-full", className)}>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#C5A15A]/40" />
      <GoldStar size={10} className="text-[#C5A15A]/80" />
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#C5A15A]/40" />
    </div>
  );
}
