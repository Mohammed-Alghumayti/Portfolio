import { useEffect, useState } from 'react'
import { GOATCOUNTER_COUNT_IMAGE, GOATCOUNTER_COUNT_URL } from '../lib/analytics'

/**
 * Visitor counter, backed by GoatCounter.
 *
 * GoatCounter deduplicates visitors server-side, so the figure is only ever
 * read — reloading the page cannot inflate it and no client-side bookkeeping is
 * involved.
 *
 * Both display endpoints require "Allow adding visitor counts to your website"
 * to be enabled in the GoatCounter site settings. Without it they return 403
 * and no figure can be shown, regardless of anything done here. Note that this
 * setting is separate from tracking: visits are recorded either way, they just
 * cannot be read back by the page.
 *
 * The JSON endpoint is preferred because it lets the number be rendered in the
 * site's own typography, but it is a cross-origin fetch. The PNG endpoint is
 * used if that fails, since an image request is not subject to CORS.
 */
type State =
  | { status: 'loading' }
  | { status: 'count'; value: number }
  | { status: 'image' }
  | { status: 'hidden' }

/** Reads the figure out of GoatCounter's payload, e.g. {"count": "1,234"}. */
function extractCount(payload: unknown): number | null {
  const count = (payload as { count?: unknown } | null)?.count
  if (typeof count === 'number') return count
  if (typeof count === 'string') {
    const digits = count.replace(/[^0-9]/g, '')
    if (digits) return Number(digits)
  }
  return null
}

export default function VisitorCount() {
  // Derived rather than set in the effect: with no endpoint configured there is
  // nothing to load, so the initial state is already the final one.
  const [state, setState] = useState<State>(
    GOATCOUNTER_COUNT_URL ? { status: 'loading' } : { status: 'hidden' },
  )

  useEffect(() => {
    if (!GOATCOUNTER_COUNT_URL) return

    const controller = new AbortController()

    fetch(GOATCOUNTER_COUNT_URL, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((payload) => {
        const value = extractCount(payload)
        if (value === null) throw new Error('no count in payload')
        setState({ status: 'count', value })
      })
      .catch((error) => {
        if (error?.name === 'AbortError') return
        // Cross-origin or parsing failure: fall back to the image, which is
        // subject to neither.
        setState(GOATCOUNTER_COUNT_IMAGE ? { status: 'image' } : { status: 'hidden' })
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

      {state.status === 'image' && GOATCOUNTER_COUNT_IMAGE ? (
        <img
          src={GOATCOUNTER_COUNT_IMAGE}
          alt="Number of visitors to this portfolio"
          className="h-5"
          onError={() => setState({ status: 'hidden' })}
        />
      ) : null}
    </div>
  )
}
