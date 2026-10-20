import { testimonials } from '../data/portfolio';
import Reveal from './Reveal';

/**
 * Words of feedback from people I have built with. Quotes stay grounded in
 * real projects (see data/portfolio.js) so the section reads honest.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            {testimonials.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1}>
            {testimonials.heading}
          </Reveal>
        </div>

        <div className="testimonial-grid">
          {testimonials.quotes.map((t, i) => (
            <Reveal
              key={t.name}
              className="testimonial-card"
              delay={i * 0.08}
              y={20}
            >
              <span className="testimonial-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{t.quote}</blockquote>
              <footer className="testimonial-who">
                <b>{t.name}</b>
                <span>{t.role}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
