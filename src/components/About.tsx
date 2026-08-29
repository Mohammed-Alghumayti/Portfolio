import { profile, skillGroups, stats } from '../data/profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About" muted>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-semibold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-400">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs font-semibold tracking-widest text-slate-900 uppercase dark:text-white">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
