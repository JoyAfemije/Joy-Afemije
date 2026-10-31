/**
 * The ETANA wordmark.
 *
 * One uppercase serif word in the accent color, closed by the signature dot
 * carried over from the old CodeWithTana mark.
 *
 * The parts are hidden from assistive tech and the whole mark is announced as
 * one word, so screen readers say "Etana" rather than letter fragments.
 */
export default function Wordmark() {
  return (
    <span className="wordmark" role="img" aria-label="Etana">
      <span className="wordmark-text" aria-hidden="true">
        ETANA
      </span>
      <span className="wordmark-dot" aria-hidden="true" />
    </span>
  );
}
