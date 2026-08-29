import { useState } from 'react'
import { certifications } from '../data/profile'
import { asset } from '../lib/asset'
import { ExternalLinkIcon } from './Icons'
import Section from './Section'

const badgeClass = 'h-12 w-12 shrink-0 rounded'

/**
 * Shows a certification's badge image, falling back to the issuer's initials if
 * no image is set or if the file fails to load. The fallback means a
 * certification whose artwork has not been added yet still renders cleanly
 * rather than showing a broken-image icon.
 */
function CertificationBadge({ image, issuer }: { image?: string; issuer: string }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={asset(image)}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${badgeClass} object-contain transition-transform duration-200 group-hover:scale-110`}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={`${badgeClass} flex items-center justify-center border border-slate-200 bg-slate-100 font-mono text-sm font-semibold text-slate-500 transition-colors group-hover:border-blue-300 group-hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:border-sky-500/50 dark:group-hover:text-sky-400`}
    >
      {issuer.slice(0, 2).toUpperCase()}
    </span>
  )
}

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
            className="group flex gap-4 rounded-lg border border-slate-200 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:shadow-md hover:shadow-slate-200/60 dark:border-slate-800 dark:hover:border-sky-500/50 dark:hover:bg-slate-900 dark:hover:shadow-black/40"
          >
            <CertificationBadge image={cert.image} issuer={cert.issuer} />

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-400">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-500">{cert.issued}</p>

              {cert.credential ? (
                cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-mono text-xs font-medium text-blue-700 hover:underline dark:text-sky-400"
                  >
                    {cert.credential}
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-500">
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
