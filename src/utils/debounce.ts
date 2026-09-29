/**
 * High-performance generic debounce utility.
 * Limits the rate at which a function can fire to prevent excessive recalculations,
 * layout thrashing, and event listener overhead.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait = 250
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, wait);
  };

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}
