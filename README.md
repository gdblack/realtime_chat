# realtime_chat

A small realtime chat starter scaffolded with Next.js (App Router) and TypeScript. This README gives exact dependency versions, setup and run steps, Tailwind notes, and troubleshooting so a developer can get up and running quickly.

## Quick facts

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (imported via PostCSS in `src/app/globals.css`)
- Linting: ESLint

## Exact dependency versions (from `package.json`)

- `next` — 16.1.1
- `react` — 19.2.3
- `react-dom` — 19.2.3
- `tailwindcss` — ^4
- `@tailwindcss/postcss` — ^4
- `typescript` — ^5
- `eslint` — ^9
- `eslint-config-next` — 16.1.1
- `babel-plugin-react-compiler` — 1.0.0

Check `package.json` for the complete, up-to-date list of dependencies and devDependencies.

## Requirements

- Node.js 18 or later (recommended)
- `npm` (examples below use `npm`, substitute `pnpm` or `yarn` if preferred)

## Developer onboarding — step-by-step

1) Clone and open the repo

```bash
git clone https://github.com/gdblack/realtime_chat.git
cd realtime_chat
```

2) Install dependencies

```bash
npm install
```

3) Environment

- Create a local env file if you need runtime keys: `cp .env.example .env.local` (this repo currently does not include `.env.example`). Typical names you might add:
  - `NEXT_PUBLIC_API_URL` (public endpoints)
  - `DATABASE_URL` (server-side DB)
  - provider keys for Supabase/Pusher/Firebase if you integrate one

4) Tailwind (what's already wired)

- Tailwind is enabled via PostCSS. See `postcss.config.mjs` — it uses `@tailwindcss/postcss`.
- `src/app/globals.css` includes `@import "tailwindcss"` and declares CSS variables and dark-mode rules.
- There is no `tailwind.config.js` in the repo. If you need to customize Tailwind (safelist, theme, plugins), generate a config and set content paths:

- This project currently uses Tailwind's default theme/configuration. If the default theme isn't ideal for your UI, add a `tailwind.config.js` to override `theme` values (colors, fonts, spacing), enable plugins, or safelist classes.

```bash
npx tailwindcss init -p
# then edit tailwind.config.js -> content: ["./src/**/*.{js,ts,jsx,tsx}"]
```

5) Run the app

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Important scripts

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Build for production
- `npm run start` — Run production build
- `npm run lint` — Run ESLint

Refer to `package.json` for any additional scripts.

## Project layout (high-value files)

- `src/app/` — App Router routes, `layout.tsx` (root layout, fonts) and `page.tsx` (example route)
- `src/app/globals.css` — Global stylesheet (imports Tailwind; defines color/font variables)
- `postcss.config.mjs` — PostCSS setup (Tailwind plugin)
- `next.config.ts` — Next configuration (note: `reactCompiler: true`)
- `public/` — Static assets used with `next/image`
- `eslint.config.mjs`, `tsconfig.json` — linter/typescript configs

## Patterns & conventions

- Routes: use App Router patterns. Add `src/app/<route>/page.tsx` for pages and `layout.tsx` for nested layouts.
- Styling: favor Tailwind utility classes in JSX. See `className` usage in `src/app/page.tsx` for examples.
- Fonts: `next/font` is used in `layout.tsx` and font variables are consumed in `globals.css`.
- No tests or CI configured in the repo; do not assume test frameworks are present.

## Integration points & missing pieces to be aware of

- Tailwind is wired, but `tailwind.config.js` is not present — if you need to enable JIT safelisting or add plugins, add that file and set `content` to `./src/**/*.{ts,tsx,js,jsx}`.
- No realtime provider or database integration is included. When integrating Supabase/Pusher/Firebase, add required `.env.local` keys and document them in this README or a `DEVELOPMENT.md`.

## Troubleshooting

- Dev server won't start: confirm Node version: `node --version` (>= 18). Try reinstalling dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

- Tailwind classes not applied: ensure `src/app/globals.css` contains `@import "tailwindcss"` and, if you added `tailwind.config.js`, that the `content` paths include `./src/**/*.{ts,tsx,js,jsx}`.

## Contributing

- Branch from `main`: `git checkout -b feat/your-feature`
- Run dev and lint locally: `npm run dev` and `npm run lint`
- Open a PR with a clear description and any environment variables required

## Acknowledgements

This project was created while following a YouTube tutorial on using Next.js, Redis and Tailwind. Many thanks to the tutorial author for the walkthrough and example code:

- Tutorial (YouTube): https://www.youtube.com/watch?v=D8CLV-MRH0k&t=2724s

If you are learning the same stack, refer to the video for the original guided steps and context.