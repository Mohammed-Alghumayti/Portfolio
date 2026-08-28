import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    for (const link of links) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3"
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Mohammed Alghumayti
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={
                    active === link.id
                      ? 'rounded-md px-3 py-2 text-sm font-medium text-blue-700 dark:text-sky-400'
                      : 'rounded-md px-3 py-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-menu"
          className="border-t border-slate-200 px-6 pb-4 md:hidden dark:border-slate-800"
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-slate-600 dark:text-slate-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}
