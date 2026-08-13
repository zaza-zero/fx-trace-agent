# Submission

Full narrative and reasoning: [WRITEUP.md](WRITEUP.md).

## First commit

`04570f6` — Scaffold Next.js FX-question trace agent with question form, 4
trace blocks, and rate table

## Scaffold instruction given to Claude Code

Initial scaffold prompt:

> Scaffold a minimal Next.js app using the App Router and TypeScript. It must
> start with a single command — tell me exactly what that command is. The
> file I'll edit next is `app/page.tsx`. Do not add a database, a styling
> library beyond Next's defaults, auth, a UI component kit, example pages,
> or tests — just the minimal App Router starting point.

Carried out with:

```bash
npx create-next-app@latest . --typescript --app --no-tailwind --eslint --no-src-dir --import-alias "@/*" --use-npm --yes
```

Follow-up prompts, after the bare scaffold existed:

> Add a text input for a currency question, a submit button (display-only
> for now, no model call wired up), and 4 labelled trace blocks below it in
> order: **Model decision**, **Tool call arguments**, **Tool result**,
> **Final answer**. Each block gets a one-line placeholder describing what
> it will show once a real agent call is wired in.

> Add `lib/rates.ts`: a fixed (non-live) exchange-rate table keyed by
> currency code, covering USD, EUR, SGD, INR, JPY, BHD, KWD — each entry
> holding `rate` (units per 1 USD) and `decimals` (how many decimal places
> that currency is normally written with). Add `lib/print-rates.ts` that
> prints JPY and KWD, showing both the rate and the decimal count, to prove
> the 0-decimal and 3-decimal cases render correctly.

**Start command:** `npm run dev`

## What broke and how it got fixed

`lib/print-rates.ts` broke `tsc --noEmit` under the project's
`moduleResolution: "bundler"` setting because it imports `./rates.ts` with
an explicit `.ts` extension — required by Node's ESM loader at runtime,
rejected at typecheck time for files still inside the app's compile. Fixed
by excluding `lib/print-rates.ts` from the main tsconfig's type-checked
set, so it runs fine via `node` while the rest of the app still typechecks
clean.

## Rate lookup output

```
$ npm run print-rates
JPY: rate=146.82 decimals=0
KWD: rate=0.307 decimals=3
```

JPY prints with 0 decimal places, KWD with 3 — matching the decimal counts
in [lib/rates.ts](lib/rates.ts), which now covers all seven required
codes (USD, EUR, SGD, INR, JPY, BHD, KWD).
