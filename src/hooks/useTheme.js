import { useCallback, useEffect, useState } from 'react';

/**
 * Light/dark theme with localStorage persistence.
 * The initial value is set by an inline script in index.html (before first
 * paint), so we simply read whatever `data-theme` is already on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* private mode — ignore */
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    [],
  );

  return { theme, toggle };
}
