/**
 * Convert rem to px using the current document root font size.
 */
export function remToPx(rem: number): number {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  return rem * rootFontSize
}

/**
 * Convert px to rem using the current document root font size.
 */
export function pxToRem(px: number): number {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  return px / rootFontSize
}

/**
 * Get computed dimensions of an element.
 */
export function getElementSize(el: HTMLElement | null) {
  if (!el) return { width: 0, height: 0 }
  const rect = el.getBoundingClientRect()
  return { width: rect.width, height: rect.height }
}
