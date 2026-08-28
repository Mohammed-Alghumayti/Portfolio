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
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages. In the repository settings,
**Pages → Build and deployment → Source** must be set to **GitHub Actions**.
