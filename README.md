## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite](https://vite.dev) for the build
- [Tailwind CSS 4](https://tailwindcss.com) for styling

## Editing the site

Site content lives in [`src/data/profile.ts`](src/data/profile.ts) — the
components read from it and lay everything out. Editing that file and committing
is enough to change the site; no component changes are needed to add a job,
project or certification.

Images live in `public/img/` and are copied into the build as-is. Add new ones
there, never into the build output.

## Deployment

Every push to `test` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages. Editing a file on github.com is enough:
the build runs automatically, so no compiled output is committed here.

Repository settings → **Pages → Build and deployment → Source** must be set to
**GitHub Actions**.

## Analytics

Visitor numbers come from [GoatCounter](https://www.goatcounter.com), which
counts unique visitors server-side. The site code is set in
[`src/lib/analytics.ts`](src/lib/analytics.ts); clearing it disables tracking
and falls back to a simple counter.

Statistics are at <https://moahmmed.goatcounter.com>. Displaying the total on
the page needs "Allow adding visitor counts to your website" enabled in the
GoatCounter site settings.

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```
