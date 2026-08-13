# Submission

Full narrative and reasoning: [WRITEUP.md](WRITEUP.md).

## Scaffold instruction given to Claude Code

See [SCAFFOLD_INSTRUCTION.md](SCAFFOLD_INSTRUCTION.md) for the exact
instruction and the command it produced.

**Start command:** `npm run dev`

## Rate lookup output

```
$ npm run print-rates
JPY: rate=146.82 decimals=0
KWD: rate=0.307 decimals=3
```

JPY prints with 0 decimal places, KWD with 3 — matching the decimal counts
in [lib/rates.ts](lib/rates.ts), which now covers all seven required
codes (USD, EUR, SGD, INR, JPY, BHD, KWD).
