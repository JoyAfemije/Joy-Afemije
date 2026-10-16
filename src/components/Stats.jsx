import { stats } from '../data/portfolio';
import Reveal from './Reveal';

export default function Stats() {
  return (
    <section className="stats" aria-label="Quick facts">
      <div className="wrap stats-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} y={18} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
