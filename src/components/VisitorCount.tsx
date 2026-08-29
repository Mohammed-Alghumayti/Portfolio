import { useEffect, useState } from 'react'
import { GOATCOUNTER_COUNT_URL } from '../lib/analytics'

/**
 * Visitor counter.
 *
 * GoatCounter is the preferred source: it deduplicates visitors server-side, so
 * the figure can simply be read and a reload can never inflate it. Displaying
 * that figure requires "Allow adding visitor counts to your website" to be
 * enabled in the GoatCounter site settings; without it the endpoint returns 403.
 *
 * If GoatCounter cannot be read for any reason the simple counter is used
 * instead, so a misconfiguration degrades to a working counter rather than to
 * an empty space. That counter increments at most once per browser: a marker in
 * localStorage records that this browser has been counted, and a returning
 * browser only ever reads.
 *
 * The badge image is the last resort because it is not subject to CORS, but
 * requesting it *is* the increment — it has no read-only mode — so it is only
 * ever rendered for a browser that has not been counted yet.
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

/** Pulls the number out of a counter payload, whose shape varies by service. */
function extractCount(payload: unknown): number | null {
  const root = payload as Record<string, unknown> | null
  const data = root?.data as Record<string, unknown> | undefined
  for (const candidate of [data?.up_count, data?.value, data?.count, root?.count, root?.value]) {
    if (typeof candidate === 'number') return candidate
    // GoatCounter returns the figure as a formatted string, e.g. "1,234".
    if (typeof candidate === 'string') {
      const digits = candidate.replace(/[^0-9]/g, '')
      if (digits) return Number(digits)
    }
  }
  return null
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

    const get = (url: string) =>
      fetch(url, { signal: controller.signal })
        .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
        .then((payload) => {
          const value = extractCount(payload)
          if (value === null) throw new Error('no count in payload')
          return value
        })

    /** The simple counter, used when GoatCounter is unavailable. */
    const showFallbackCounter = () => {
      const visitor = readVisitor()
      const isReturning = visitor?.counted === true

      get(isReturning ? READ_URL : INCREMENT_URL)
        .then((value) => {
          setState({ status: 'count', value })
          writeVisitor({ counted: true, value })
        })
        .catch((error) => {
          if (error?.name === 'AbortError') return

          if (isReturning) {
            // Never fall back to the badge here: requesting it would increment
            // the counter for a browser that has already been counted.
            setState(
              typeof visitor?.value === 'number'
                ? { status: 'count', value: visitor.value }
                : { status: 'hidden' },
            )
            return
          }

          setState({ status: 'badge' })
        })
    }

    if (GOATCOUNTER_COUNT_URL) {
      get(GOATCOUNTER_COUNT_URL)
        .then((value) => setState({ status: 'count', value }))
        .catch((error) => {
          if (error?.name === 'AbortError') return
          showFallbackCounter()
        })
    } else {
      showFallbackCounter()
    }

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
