import { about, socials } from '../data/portfolio';
import { Icons } from './Icons';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <div>
          <Reveal as="h2" className="about-heading">
            {about.heading}
          </Reveal>
          <Reveal as="p" className="about-name" delay={0.1}>
            {about.greeting}
          </Reveal>
          <Reveal className="about-socials" delay={0.15}>
            {socials
              .filter((s) => s.icon !== 'whatsapp')
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {Icons[s.icon]}
                </a>
              ))}
          </Reveal>
        </div>

        <div className="about-body">
          {about.paragraphs.map((para, i) => (
            <Reveal as="p" key={i} delay={0.15 + i * 0.1}>
              {para}
            </Reveal>
          ))}
          <Reveal className="about-chips" delay={0.35}>
            {about.chips.map((chip) => (
              <div className="about-chip" key={chip.label}>
                <b>{chip.value}</b>
                <span>{chip.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
