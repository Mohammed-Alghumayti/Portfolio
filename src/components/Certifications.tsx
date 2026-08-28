import { certifications } from '../data/profile'
import { asset } from '../lib/asset'
import { ExternalLinkIcon } from './Icons'
import Section from './Section'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      intro={`${certifications.length} professional certifications across cybersecurity, cloud, networking and development.`}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
          >
            {cert.image ? (
              <img
                src={asset(cert.image)}
                alt=""
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded object-contain"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-slate-100 text-sm font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
              >
                {cert.issuer.slice(0, 2).toUpperCase()}
              </span>
            )}

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{cert.issued}</p>

              {cert.credential ? (
                cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:underline dark:text-sky-400"
                  >
                    {cert.credential}
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                    {cert.credential}
                  </p>
                )
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
