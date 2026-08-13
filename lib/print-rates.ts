import { getRate } from "./rates.ts";

for (const code of ["JPY", "KWD"]) {
  const entry = getRate(code);
  if (!entry) {
    throw new Error(`No rate entry for ${code}`);
  }
  console.log(`${code}: rate=${entry.rate} decimals=${entry.decimals}`);
}
