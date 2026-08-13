export type RateEntry = {
  rate: number; // units of this currency per 1 USD
  decimals: number; // decimal places this currency is written with
};

// Fixed rate table -- NOT a live feed. Snapshot values for demo purposes only.
export const rates: Record<string, RateEntry> = {
  USD: { rate: 1, decimals: 2 },
  EUR: { rate: 0.92, decimals: 2 },
  SGD: { rate: 1.34, decimals: 2 },
  INR: { rate: 87.1, decimals: 2 },
  JPY: { rate: 146.82, decimals: 0 },
  BHD: { rate: 0.376, decimals: 3 },
};

export function getRate(code: string): RateEntry | undefined {
  return rates[code.toUpperCase()];
}
