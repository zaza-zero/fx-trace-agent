# Submission

Full narrative and reasoning: [WRITEUP.md](WRITEUP.md).

## Scaffold instruction given to Claude Code

See [SCAFFOLD_INSTRUCTION.md](SCAFFOLD_INSTRUCTION.md) for the exact
instruction and the command it produced.

**Start command:** `npm run dev`

## Rate lookup output

```
$ npm run print-rates
JPY: 147
BHD: 0.376
```

JPY prints with 0 decimal places, BHD with 3 — matching the decimal counts
in [lib/rates.ts](lib/rates.ts).
