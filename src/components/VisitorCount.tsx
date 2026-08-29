import { useEffect, useState } from 'react'

/**
 * Unique-visitor counter.
 *
 * The counter is incremented at most once per browser. A marker in
 * localStorage records that this browser has already been counted, so
 * reloading or navigating back never inflates the total. Returning visitors
 * only ever read the count, never increment it.
 *
 * Two transports are used because neither is reliable alone: a JSON request,
 * which can render the figure in the site's own typography but needs CORS, and
 * an <img> badge, which is not subject to CORS but can only increment — it has
 * no read-only mode. The badge is therefore only ever rendered for a browser
 * that has not been counted yet.
 */
const COUNTER_WORKSPACE = 'mohammed-alghumayti'
const COUNTER_NAME = 'portfolio-views'

const COUNTER_BASE = `https://api.counterapi.dev/v2/${COUNTER_WORKSPACE}/${COUNTER_NAME}`
const INCREMENT_URL = `${COUNTER_BASE}/up`
const READ_URL = COUNTER_BASE

const BADGE_URL =
  'https://hits.sh/mohammed-alghumayti.github.io/Portfolio.svg' +
  '?style=flat-square&label=visitors&color=0ea5e9&labelColor=1e293b'

const STORAGE_KEY = 'portfolio-visitor'

type Visitor = { counted: boolean; value?: number }

function readVisitor(): Visitor | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Visitor) : null
  } catch {
    // Storage unavailable (private browsing, blocked cookies). Without it this
    // browser cannot be recognised, so it is treated as a new visitor.
    return null
  }
}

function writeVisitor(visitor: Visitor) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visitor))
  } catch {
    // Nothing to do — the count still displays, it just is not remembered.
  }
}

/** Pulls the number out of the counter payload, whose shape varies by version. */
function extractCount(payload: unknown): number | null {
  const data = payload as Record<string, Record<string, unknown> | number> | null
  const candidates = [
    (data?.data as Record<string, unknown>)?.up_count,
    (data?.data as Record<string, unknown>)?.value,
    (data?.data as Record<string, unknown>)?.count,
    data?.count,
    data?.value,
  ]
  const found = candidates.find((c) => typeof c === 'number')
  return typeof found === 'number' ? found : null
}

type State =
  | { status: 'loading' }
  | { status: 'count'; value: number }
  | { status: 'badge' }
  | { status: 'hidden' }

export default function VisitorCount() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()
    const visitor = readVisitor()
    const isReturning = visitor?.counted === true

    // A returning browser reads the total; only a new one increments it.
    fetch(isReturning ? READ_URL : INCREMENT_URL, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((payload) => {
        const value = extractCount(payload)
        if (value === null) throw new Error('no count in payload')
        setState({ status: 'count', value })
        writeVisitor({ counted: true, value })
      })
      .catch((error) => {
        if (error?.name === 'AbortError') return

        if (isReturning) {
          // Never fall back to the badge here: requesting it would increment
          // the counter for a browser that has already been counted.
          if (typeof visitor?.value === 'number') {
            setState({ status: 'count', value: visitor.value })
          } else {
            setState({ status: 'hidden' })
          }
          return
        }

        setState({ status: 'badge' })
      })

    return () => controller.abort()
  }, [])

  if (state.status === 'hidden') return null

  return (
    <div className="mt-8 flex h-6 items-center text-sm text-slate-500 dark:text-slate-500">
      {state.status === 'loading' ? (
        <span
          aria-hidden="true"
          className="h-3.5 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800"
        />
      ) : null}

      {state.status === 'count' ? (
        <p>
          <span className="font-medium text-slate-700 tabular-nums dark:text-slate-300">
            {state.value.toLocaleString('en-US')}
          </span>{' '}
          {state.value === 1 ? 'visitor' : 'visitors'}
        </p>
      ) : null}

      {state.status === 'badge' ? (
        <img
          src={BADGE_URL}
          alt="Number of visitors to this portfolio"
          height={20}
          className="h-5"
          onLoad={() => writeVisitor({ counted: true })}
          onError={() => setState({ status: 'hidden' })}
        />
      ) : null}
    </div>
  )
}
