import { getRate } from "./rates.ts";

for (const code of ["JPY", "BHD"]) {
  const entry = getRate(code);
  console.log(`${code}: ${entry?.rate.toFixed(entry.decimals)}`);
}
