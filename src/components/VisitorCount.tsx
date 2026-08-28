import { useEffect, useState } from 'react'

/**
 * Counts page views via CounterAPI. The counter is purely decorative, so if the
 * service is unreachable the component renders nothing rather than showing a
 * broken or zeroed figure.
 */
const ENDPOINT = 'https://api.counterapi.dev/v2/mohammed-alghumayti/portfolio-views/up'

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(ENDPOINT, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((payload) => {
        const value = payload?.data?.up_count ?? payload?.data?.value ?? payload?.count
        if (typeof value === 'number') setCount(value)
      })
      .catch(() => {
        // Counter unavailable — leave it hidden.
      })

    return () => controller.abort()
  }, [])

  if (count === null) return null

  return (
    <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
      <span className="font-medium text-slate-700 dark:text-slate-300">
        {count.toLocaleString('en-US')}
      </span>{' '}
      {count === 1 ? 'visit' : 'visits'} to this portfolio
    </p>
  )
}
