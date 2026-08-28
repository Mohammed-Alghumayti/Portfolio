import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import { profile } from './data/profile'

export default function App() {
  return (
    <>
      <div className="cyber-grid" aria-hidden="true" />
      <CursorGlow />

      <div className="site-layer">
        <Nav />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-5 py-8 sm:px-6">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-slate-400 dark:text-slate-600">
              built with react &amp; tailwind
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
