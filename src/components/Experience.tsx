import { experience } from '../data/profile'
import Section from './Section'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Six roles across cyber defense, software engineering and technical product management."
    >
      <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden="true"
              className={
                job.current
                  ? 'absolute top-1.5 -left-[2.15rem] h-3 w-3 rounded-full border-2 border-blue-700 bg-blue-700 dark:border-sky-400 dark:bg-sky-400'
                  : 'absolute top-1.5 -left-[2.15rem] h-3 w-3 rounded-full border-2 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950'
              }
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{job.role}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
            </div>

            <p className="mt-1 text-sm font-medium text-blue-700 dark:text-sky-400">{job.company}</p>

            {job.location ? (
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-500">{job.location}</p>
            ) : null}

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {job.description}
            </p>

            {job.skills?.length ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  )
}
