import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

function readStoredTheme(): 'light' | 'dark' | null {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = readStoredTheme()
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private browsing); the theme still applies.
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
