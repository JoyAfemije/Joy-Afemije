import { services } from '../data/portfolio';
import { Icons } from './Icons';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            What I Do
          </Reveal>
          <Reveal as="h2" delay={0.1}>
            Services I Offer
          </Reveal>
          <Reveal as="p" delay={0.15}>
            Practical, dependable digital solutions, powering your vision
            with results that hold up.
          </Reveal>
        </div>

        <div className="skill-grid">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              className="skill-card"
              delay={i * 0.06}
              y={20}
            >
              <span className="skill-icon">{Icons[service.icon]}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
