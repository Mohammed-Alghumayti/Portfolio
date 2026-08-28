/**
 * Resolves a path inside `public/` against the Vite base URL, so assets keep
 * working whether the site is served from the domain root or a subpath.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
