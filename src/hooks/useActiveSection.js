import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently in view so the Navbar can highlight
 * the matching link. Uses IntersectionObserver (no scroll listeners) and
 * cleans up on unmount.
 *
 * @param {string[]} ids - Array of section ids (without "#").
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    // rootMargin biases the detection zone toward the vertical centre of
    // the viewport, which matches user attention while reading.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
    // `ids` is stable in our usage; JSON.stringify avoids array identity churn.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ids)]);

  return active;
}
