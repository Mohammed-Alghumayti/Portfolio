import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  intro?: string
  children: ReactNode
  muted?: boolean
}

export default function Section({ id, title, intro, children, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={
        muted
          ? 'border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40'
          : 'border-t border-slate-200 dark:border-slate-800'
      }
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {intro}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
