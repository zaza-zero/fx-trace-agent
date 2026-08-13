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
