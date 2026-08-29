# Portfolio

Personal portfolio site for Mohammed Alghumayti — Cyber Defense Engineer.

Live at <https://mohammed-alghumayti.github.io/Portfolio/>

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite](https://vite.dev) for the build
- [Tailwind CSS 4](https://tailwindcss.com) for styling

## Editing content

All site content — bio, experience, projects, certifications, education — lives in
[`src/data/profile.ts`](src/data/profile.ts). Edit that file to update the site; the
components read from it and lay everything out automatically. No component changes
are needed to add a job, project or certification.

Images referenced from that file live in `public/img/`, and the CV PDF is
`public/Mohammed-Alghumayti-CV.pdf`.

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build into docs/
npm run preview  # preview the production build
```

## Deployment

GitHub Pages serves the committed [`docs/`](docs) folder from this branch, so the
built site lives alongside its source rather than on a separate branch.

In the repository settings, **Pages → Build and deployment** is set to
**Deploy from a branch**, branch `test`, folder `/docs`.

To publish a change:

```bash
npm run build          # rebuilds docs/
git add -A && git commit -m "..."
git push
```

`docs/` is generated output — edit files in `src/` and rebuild, never edit
`docs/` by hand. The `.nojekyll` marker in `public/` is copied into the build so
Pages serves the files verbatim instead of running them through Jekyll.
