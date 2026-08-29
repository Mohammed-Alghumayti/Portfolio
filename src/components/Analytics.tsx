import { useEffect } from 'react'
import { GOATCOUNTER_COUNT_ENDPOINT } from '../lib/analytics'

/**
 * Loads the GoatCounter tracking script.
 *
 * The script is injected here rather than hard-coded into index.html so the
 * site code lives in exactly one place, and so nothing is loaded at all when
 * analytics are not configured.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GOATCOUNTER_COUNT_ENDPOINT) return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://gc.zgo.at/count.js'
    script.dataset.goatcounter = GOATCOUNTER_COUNT_ENDPOINT
    document.head.append(script)

    return () => script.remove()
  }, [])

  return null
}
