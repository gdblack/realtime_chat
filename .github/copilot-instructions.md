# Copilot instructions for realtime_chat

Purpose: give AI coding agents the immediate, actionable knowledge they need to be productive in this repository.

Quick context
- Framework: Next.js (App Router) using TypeScript. Main source is under `src/app`.
- Styling: Tailwind CSS is used (see `postcss.config.mjs` and `src/app/globals.css` which `@import "tailwindcss"`).
- Tooling: `next`, `react`, `eslint`, `tailwindcss` are present in `package.json`.

Where to look first
- `package.json` — scripts and dependency versions (`dev`, `build`, `start`, `lint`).
- `src/app/layout.tsx` — root layout, global fonts (`next/font`) and `globals.css` import.
- `src/app/page.tsx` — example route showing Tailwind class usage and components.
- `postcss.config.mjs` — confirms Tailwind PostCSS plugin is enabled.
- `next.config.ts` — repo-level Next.js options (e.g. `reactCompiler: true`).

Big-picture architecture notes
- App Router: routing and pages are organized under `src/app`. Add a new route by creating `src/app/<route>/page.tsx`.
- Single root layout in `src/app/layout.tsx` controls fonts and shared wrappers.
- Styling: Tailwind utility classes are used in components; global Tailwind imports live in `src/app/globals.css`.
- Static assets live in `public/` (images referenced by `next/image`).

Developer workflows (what the repo actually uses)
- Start dev server: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start prod: `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `eslint`).

Conventions and patterns to follow
- Keep routes inside `src/app` (App Router). Use `page.tsx` for a route entry point and `layout.tsx` for nested layouts.
- Prefer Tailwind utility classes in JSX; look at `src/app/page.tsx` for examples (e.g. `className="flex min-h-screen ..."`).
- Global fonts are configured with `next/font` in `layout.tsx` — prefer adding scoped CSS variables there if introducing fonts.
- There are currently no test scripts or test frameworks configured—avoid assuming tests exist.

Integration points / external dependencies
- Tailwind is wired through PostCSS (`postcss.config.mjs`). `tailwind.config.js` is not present in the repo root — check before editing Tailwind setup.
- No database or realtime provider files discovered. If adding Supabase/Pusher/etc., add `.env.local` entries and update README to document them.

Helpful examples for common tasks
- Add a new route: `src/app/chat/page.tsx` with a default export React component.
- Add a shared component: create `src/components/MyComponent.tsx` and import it in `src/app/*` routes.
- Wire Tailwind config (if needed): run `npx tailwindcss init -p` to create `tailwind.config.js` and adjust `content` paths to include `src/**/*.{js,ts,tsx}`.

What NOT to change without checking tests/owner
- `next.config.ts` flags like `reactCompiler` — changing Next config may require testing with `npm run build`.
- Global font variables in `layout.tsx` — altering these affects UI across the app.

If you need more info
- Read `README.md` for onboarding (some bootstrap text may remain). If anything is missing (env keys, provider details), ask the repo owner.

Please run changes locally with `npm install` then `npm run dev` and confirm the app starts on `http://localhost:3000` before opening a PR.
