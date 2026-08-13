# FX Trace Agent

See [WRITEUP.md](WRITEUP.md) for what this is and how it was built, and
[SCAFFOLD_INSTRUCTION.md](SCAFFOLD_INSTRUCTION.md) for the exact instruction used to scaffold it.

![App running locally at localhost:3000, showing the question box and all 4 labelled blocks](docs/app-running-screenshot.png)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Rate table

`lib/rates.ts` holds a fixed (non-live) exchange-rate table keyed by currency
code. Run:

```bash
npm run print-rates
```

to print the JPY and BHD rates and confirm they render with the right
number of decimal places (0 for JPY, 3 for BHD).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
