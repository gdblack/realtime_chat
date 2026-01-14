# Development checklist — realtime_chat

Purpose: a compact, actionable checklist to get a developer productive locally and to follow common contribution steps.

Prerequisites

- Node.js 18+ (recommended). Verify with:

```bash
node --version
```

- npm (or `pnpm` / `yarn`) installed.
- Recommended editor: VS Code with the `ESLint` and `TypeScript` extensions.

Quick setup (copy-paste)

```bash
# clone
git clone https://github.com/gdblack/realtime_chat.git
cd realtime_chat

# install
npm install

# start dev server
npm run dev
```

Open: http://localhost:3000

Environment variables

- This repository does not include `.env.example`. If you need provider keys (realtime, DB, etc.), create `.env.local` in the project root.
- Typical variables you might add when integrating services:
  - `NEXT_PUBLIC_API_URL` (public API base)
  - `DATABASE_URL` (server-side DB)
  - provider-specific keys: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `PUSHER_KEY`, etc.

Tailwind (notes and quick actions)

- Tailwind is enabled via PostCSS. Confirm `postcss.config.mjs` contains the Tailwind plugin and `src/app/globals.css` contains `@import "tailwindcss"`.
- There is no `tailwind.config.js` checked in. To scaffold one (recommended if you modify theme/plugins):

- The project currently relies on Tailwind's default theme and configuration. If you need to change colors, fonts, spacing, or enable plugins, create a `tailwind.config.js` and customize the `theme` and `plugins` sections.

```bash
npx tailwindcss init -p
# then edit tailwind.config.js -> set:
# content: ['./src/**/*.{js,ts,jsx,tsx}']
```

- If utility classes aren't applied, check `globals.css` import and `tailwind.config.js` `content` globs.

Project layout quick reference

- `src/app/` — App Router routes, `layout.tsx` (root), `page.tsx` (root page).
- `src/app/globals.css` — global styles + Tailwind import + font/color CSS variables.
- `postcss.config.mjs` — PostCSS plugins (Tailwind plugin configured).
- `next.config.ts` — Next configuration (contains `reactCompiler: true`).
- `public/` — static assets for `next/image`.

Adding routes & components

- New page/route: create `src/app/<route>/page.tsx` that exports a default React component.
- Shared components: create `src/components/MyComponent.tsx` and import into pages/layouts.
- Use Tailwind utility classes in `className` (see `src/app/page.tsx` for style examples).

Fonts

- `next/font` is used in `layout.tsx`. Prefer `next/font` when adding new fonts and expose any font CSS variables in `globals.css`.

Linting & formatting

- Lint with:

```bash
npm run lint
```

- Fix issues reported by ESLint before creating a PR.
- If adding new dependencies, add corresponding `@types/*` devDependencies when necessary.

Build & run production locally

```bash
npm run build
npm run start
```

Common troubleshooting

- Dev server fails to start or throws unexpected build errors:
  - Confirm Node version: `node --version` (>=18)
  - Reinstall deps:

```bash
rm -rf node_modules package-lock.json
npm install
```

- Tailwind classes not being applied:
  - Ensure `@import "tailwindcss"` exists in `src/app/globals.css`.
  - If you added `tailwind.config.js`, ensure `content` globs include `./src/**/*.{ts,tsx,js,jsx}`.

- Images not loading via `next/image`:
  - Confirm files exist in `public/` and `src` paths reference `/filename.ext`.

Contribution & PR checklist

- Create a feature branch from `main`: `git checkout -b feat/description`.
- Run `npm run lint` and `npm run dev` locally.
- Include a short description and screenshots (if UI change) in the PR.
- Document required environment variables in the PR description or update `DEVELOPMENT.md`/`README.md`.

Optional scaffolding I can add

- `tailwind.config.js` with recommended `content` and small theme tweaks.
- `.env.example` listing placeholder environment variables.
- `DEVELOPMENT.md` additions for service-specific setup (e.g., Supabase init steps).

If you want any of those, tell me which and I'll scaffold them now.
