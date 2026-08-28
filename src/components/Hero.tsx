import { profile } from '../data/profile'
import { asset } from '../lib/asset'
import { DownloadIcon, GitHubIcon, LinkedInIcon, LocationIcon, MailIcon } from './Icons'
import VisitorCount from './VisitorCount'

export default function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-5 pt-10 pb-14 sm:px-6 sm:pt-24 sm:pb-24">
      <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-sky-500/10 dark:text-sky-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-sky-400" />
            Open to opportunities
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>

          <p className="mt-3 text-xl text-slate-700 sm:text-2xl dark:text-slate-300">
            {profile.role}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.headline}
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <LocationIcon className="h-4 w-4" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={asset(profile.cv)}
              download
              className="group inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus-visible:ring-offset-slate-950"
            >
              <DownloadIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              Download CV
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-slate-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500/60 dark:hover:bg-slate-800 dark:hover:text-sky-400 dark:focus-visible:ring-offset-slate-950"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-slate-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500/60 dark:hover:bg-slate-800 dark:hover:text-sky-400 dark:focus-visible:ring-offset-slate-950"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-slate-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500/60 dark:hover:bg-slate-800 dark:hover:text-sky-400 dark:focus-visible:ring-offset-slate-950"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          </div>

          <VisitorCount />
        </div>

        <div className="order-first md:order-last">
          <picture>
            <source srcSet={asset(`${profile.portrait}.webp`)} type="image/webp" />
            <img
              src={asset(`${profile.portrait}.png`)}
              alt={`Portrait of ${profile.name}`}
              width={1200}
              height={1840}
              fetchPriority="high"
              className="mx-auto h-44 w-44 rounded-full border border-slate-200 bg-slate-100 object-cover object-top shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-lg sm:h-64 sm:w-64 dark:border-slate-800 dark:bg-slate-900"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
