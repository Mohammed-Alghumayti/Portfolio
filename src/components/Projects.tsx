import { projects } from '../data/profile'
import { asset } from '../lib/asset'
import { ExternalLinkIcon } from './Icons'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Selected products and design work from professional roles and university study."
      muted
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
          >
            <img
              src={asset(project.image)}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="h-40 w-full border-b border-slate-200 bg-white object-contain p-4 dark:border-slate-800 dark:bg-slate-800"
            />

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {project.name}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline dark:text-sky-400"
                >
                  {project.linkLabel ?? 'View project'}
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
