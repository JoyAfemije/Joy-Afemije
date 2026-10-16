import { tools } from '../data/portfolio';
import Reveal from './Reveal';

export default function Tools() {
  return (
    <section id="tools" className="section">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            My Toolkit
          </Reveal>
          <Reveal as="h2" delay={0.1}>
            Tools I Use
          </Reveal>
          <Reveal as="p" delay={0.15}>
            The everyday tools behind how I design, build, test, and ship.
          </Reveal>
        </div>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <Reveal
              key={tool}
              as="div"
              className="tool-chip"
              delay={Math.min(i * 0.04, 0.4)}
              y={14}
            >
              {tool}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
