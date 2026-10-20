import { collaboration } from '../data/portfolio';
import { Icons } from './Icons';
import Reveal from './Reveal';

/**
 * Collaboration invite: the different ways a client or person can work with
 * me, ending with two direct routes into a conversation.
 */
export default function Collaboration() {
  const { primary, secondary } = collaboration.actions;

  return (
    <section id="collaborate" className="section">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            {collaboration.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1}>
            {collaboration.heading} <em>{collaboration.emphasis}</em>
          </Reveal>
          <Reveal as="p" delay={0.15}>
            {collaboration.body}
          </Reveal>
        </div>

        <div className="collab-grid">
          {collaboration.ways.map((way, i) => (
            <Reveal
              key={way.title}
              className="collab-card"
              delay={i * 0.07}
              y={20}
            >
              <span className="skill-icon">{Icons[way.icon]}</span>
              <div>
                <h3>{way.title}</h3>
                <p>{way.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="collab-actions" delay={0.2}>
          <a
            className="btn btn-primary"
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icons[primary.icon]}
            {primary.label}
          </a>
          <a className="btn btn-ghost" href={secondary.href}>
            {Icons[secondary.icon]}
            {secondary.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
