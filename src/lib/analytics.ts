/**
 * GoatCounter analytics.
 *
 * GoatCounter counts unique visitors server-side (it hashes IP + user agent per
 * day), so unlike a plain hit counter it does not need any client-side
 * bookkeeping to avoid counting reloads.
 *
 * Set this to the site code chosen at signup — the CODE in
 * https://CODE.goatcounter.com. While it is empty, no tracking script is loaded
 * and the site falls back to the simple counter.
 */
export const GOATCOUNTER_CODE = ''

export const goatcounterEnabled = GOATCOUNTER_CODE.length > 0

/** Builds a URL under the configured GoatCounter site, or null when disabled. */
export function goatcounterUrl(path: string): string | null {
  return goatcounterEnabled ? `https://${GOATCOUNTER_CODE}.goatcounter.com${path}` : null
}

/**
 * Total visitor count for the whole site.
 *
 * Requires "Allow adding visitor counts to your website" to be enabled under
 * GoatCounter's site settings; without it this endpoint returns 403.
 */
export const GOATCOUNTER_COUNT_URL = goatcounterUrl('/counter/TOTAL.json')

/** Endpoint the tracking script reports page views to. */
export const GOATCOUNTER_COUNT_ENDPOINT = goatcounterUrl('/count')
