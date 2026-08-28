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
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500/50 dark:hover:shadow-black/40"
          >
            <div className="overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800">
              <img
                src={asset(project.image)}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="h-40 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-400">
                {project.name}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 transition-colors hover:bg-blue-100 hover:text-blue-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-sky-500/15 dark:hover:text-sky-300"
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
                  className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-sky-400 dark:focus-visible:ring-offset-slate-900"
                >
                  {project.linkLabel ?? 'View project'}
                  <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
