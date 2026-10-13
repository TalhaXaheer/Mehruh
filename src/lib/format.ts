import { CURRENCY_CONFIG, type CurrencyConfig } from "@/content/placeholders";

/**
 * Formats a monetary price using the configured currency parameters.
 * Defaults to Pakistani Rupee (PKR, e.g. "Rs. 14,500").
 *
 * @param amount Numeric price amount to format
 * @param override Optional partial CurrencyConfig overrides
 * @returns Formatted price string (e.g. "Rs. 14,500")
 */
export function formatPrice(
  amount: number,
  override: Partial<CurrencyConfig> = {}
): string {
  const config = { ...CURRENCY_CONFIG, ...override };

  const formattedNumber = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: config.fractionDigits,
    maximumFractionDigits: config.fractionDigits,
  }).format(amount);

  const spacing = config.space ? " " : "";

  if (config.symbolPosition === "prefix") {
    return `${config.symbol}${spacing}${formattedNumber}`;
  }

  return `${formattedNumber}${spacing}${config.symbol}`;
}
