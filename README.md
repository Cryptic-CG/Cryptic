# Cryptic

Official website for **Cryptic**, an independent software studio.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4

## Routes

- `/` — homepage (hero, featured project, projects, about)
- `/projects` — all projects
- `/projects/<slug>` — individual project pages (data-driven, e.g. `/projects/zeus`)
- `/about` — about Cryptic

## Adding a project

Projects live in one central file: `src/config/projects.ts`. Add an entry to the
`projects` array and a page is generated automatically at `/projects/<slug>`.
To link a project to an external site, set its `url` field.

Central company/brand config lives in `src/config/site.ts`.

## Development

```bash
npm run dev
npm run lint
npm run build
```