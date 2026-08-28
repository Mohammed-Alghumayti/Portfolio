import { useEffect, useRef } from 'react'

/**
 * A soft light that trails the pointer. Purely decorative, so it is skipped
 * entirely on touch devices (no pointer to follow) and when the visitor has
 * asked for reduced motion.
 *
 * Position is written straight to the element's transform inside a rAF frame
 * rather than through React state, so pointer movement never triggers a
 * re-render of the page.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    let x = 0
    let y = 0
    let frame = 0

    const paint = () => {
      frame = 0
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      el.style.opacity = '1'
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
