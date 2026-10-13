import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatPrice } from "./format";

export { formatPrice };

/**
 * Merges class names safely with Tailwind CSS precedence.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency with internationalization.
 * Preserved for backward compatibility, delegates to formatPrice for PKR.
 */
export function formatCurrency(amount: number, currency: string = "USD"): string {
  if (currency === "PKR") {
    return formatPrice(amount);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
