import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../hooks/useTheme';
import { Icons } from './Icons';

/**
 * Light/dark switch. Shows the icon of the theme you'd move TO,
 * with a gentle rotate-fade swap.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
          transition={{ duration: 0.28, ease: [0.22, 0.8, 0.26, 1] }}
          style={{ display: 'inline-flex' }}
        >
          {isDark ? Icons.sun : Icons.moon}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
