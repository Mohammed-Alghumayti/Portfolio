import { useEffect, useState } from 'react'

/**
 * Page-view counter.
 *
 * Primary path is a JSON fetch so the figure can be rendered in the site's own
 * typography. That request needs CORS, so if it is blocked or the service is
 * down we fall back to an <img> badge from a second provider — an image request
 * is not subject to CORS and hits a different host. If both fail, nothing is
 * rendered rather than showing a broken or zeroed count.
 */
const COUNTER_NAMESPACE = 'mohammed-alghumayti'
const COUNTER_KEY = 'portfolio-views'

const JSON_ENDPOINT = `https://api.counterapi.dev/v2/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`
const BADGE_ENDPOINT =
  'https://hits.sh/mohammed-alghumayti.github.io/Portfolio.svg' +
  '?style=flat-square&label=visits&color=0ea5e9&labelColor=1e293b'

type State =
  | { status: 'loading' }
  | { status: 'count'; value: number }
  | { status: 'badge' }
  | { status: 'hidden' }

export default function VisitorCount() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    fetch(JSON_ENDPOINT, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((payload) => {
        const value = payload?.data?.up_count ?? payload?.data?.value ?? payload?.count
        if (typeof value === 'number') {
          setState({ status: 'count', value })
        } else {
          setState({ status: 'badge' })
        }
      })
      .catch((error) => {
        if (error?.name === 'AbortError') return
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
          {state.value === 1 ? 'visit' : 'visits'} to this portfolio
        </p>
      ) : null}

      {state.status === 'badge' ? (
        <img
          src={BADGE_ENDPOINT}
          alt="Number of visits to this portfolio"
          height={20}
          className="h-5"
          onError={() => setState({ status: 'hidden' })}
        />
      ) : null}
    </div>
  )
}
