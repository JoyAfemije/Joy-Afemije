/**
 * The CodeWithTana wordmark.
 *
 * Three voices in one mark: an italic serif "Code" (the designer side), a tiny
 * tracked "With" (the connector), and a solid "Tana" closed by an accent dot,
 * which carries over the old code.with.tana signature.
 *
 * The parts are hidden from assistive tech and the whole mark is announced as
 * one word, so screen readers say "CodeWithTana" rather than three fragments.
 */
export default function Wordmark() {
  return (
    <span className="wordmark" role="img" aria-label="CodeWithTana">
      <span className="wordmark-code" aria-hidden="true">
        Code
      </span>
      <span className="wordmark-with" aria-hidden="true">
        With
      </span>
      <span className="wordmark-tana" aria-hidden="true">
        Tana
      </span>
      <span className="wordmark-dot" aria-hidden="true" />
    </span>
  );
}
