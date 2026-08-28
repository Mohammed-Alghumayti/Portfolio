import { education } from '../data/profile'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education" muted>
      <ul className="grid gap-6 sm:grid-cols-3">
        {education.map((item) => (
          <li
            key={item.qualification}
            className="group rounded-lg border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500/50 dark:hover:shadow-black/40"
          >
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
            <h3 className="mt-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-400">
              {item.qualification}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-700 dark:text-sky-400">
              {item.institution}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
