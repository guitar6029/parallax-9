// A tiny leading+trailing throttle with cancel() support
export type ThrottledFunction<T extends (...args: any[]) => any> =
  ((...args: Parameters<T>) => void) & { cancel: () => void }

export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait = 150
): ThrottledFunction<T> {
  let last = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  const throttled = ((...args: Parameters<T>) => {
    const now = Date.now()
    const remaining = wait - (now - last)

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      last = now
      fn(...args) // leading call
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now()
        timer = null
        fn(...args) // trailing call
      }, remaining)
    }
  }) as ThrottledFunction<T>

  throttled.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  return throttled
}
