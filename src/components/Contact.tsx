import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from './Icons'
import Section from './Section'

const itemClass =
  'flex items-center gap-3 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Available for opportunities in cybersecurity, DevOps and software engineering. The quickest way to reach me is by email or LinkedIn."
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <ul className="space-y-4">
          <li>
            <a href={`mailto:${profile.email}`} className={itemClass}>
              <MailIcon className="h-4 w-4 shrink-0 text-slate-400" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={itemClass}>
              <PhoneIcon className="h-4 w-4 shrink-0 text-slate-400" />
              {profile.phone}
            </a>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <LocationIcon className="h-4 w-4 shrink-0 text-slate-400" />
            {profile.location}
          </li>
        </ul>

        <ul className="space-y-4">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              <LinkedInIcon className="h-4 w-4 shrink-0 text-slate-400" />
              linkedin.com/in/mohammedalghumayti
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={itemClass}>
              <GitHubIcon className="h-4 w-4 shrink-0 text-slate-400" />
              github.com/Mohammed-Alghumayti
            </a>
          </li>
          <li className="text-sm text-slate-600 dark:text-slate-400">
            {profile.languages.join(' · ')}
          </li>
        </ul>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus-visible:ring-offset-slate-950"
      >
        <MailIcon className="h-4 w-4" />
        Get in touch
      </a>
    </Section>
  )
}
