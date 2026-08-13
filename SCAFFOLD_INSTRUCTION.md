# Scaffold instruction given to Claude Code

This is the exact instruction used to scaffold this app: minimal stack, a
single start command, the next file to edit, and an explicit exclusion list
so the scaffold doesn't grow beyond what's needed.

> Scaffold a minimal Next.js app using the App Router and TypeScript. It must
> start with a single command — tell me exactly what that command is. The
> file I'll edit next is `app/page.tsx`. Do not add a database, a styling
> library beyond Next's defaults, auth, a UI component kit, example pages,
> or tests — just the minimal App Router starting point.

Carried out with:

```bash
npx create-next-app@latest . --typescript --app --no-tailwind --eslint --no-src-dir --import-alias "@/*" --use-npm --yes
```

**The one command that starts it:** `npm run dev`

`create-next-app` also produced `AGENTS.md` / `CLAUDE.md` unprompted —
neither is a database, styling library, auth, component kit, example page,
or test, so they were left as ordinary Next.js tooling metadata rather than
removed by hand.

## Follow-up instructions (after the initial scaffold)

The scaffold command above only produced the bare App Router starting
point. The question form, the 4 trace blocks, and the rate table were added
in follow-up prompts to Claude Code, not the scaffold command itself:

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

The first pass of the trace blocks used different labels and JSON-shaped
placeholder text; the labels above are the corrected wording after
review — see WRITEUP.md for how that revision happened.
