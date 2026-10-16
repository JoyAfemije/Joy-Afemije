import { contact } from '../data/portfolio';
import { Icons } from './Icons';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-inner">
        <Reveal as="span" className="eyebrow">
          {contact.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.08}>
          {contact.headlineA} <em>{contact.headlineB}</em>
        </Reveal>
        <Reveal as="p" className="contact-body" delay={0.14}>
          {contact.body}
        </Reveal>

        <div className="contact-cards">
          {contact.cards.map((card, i) => {
            const isExternal = card.href.startsWith('http');
            return (
              <Reveal
                key={card.label}
                delay={0.2 + i * 0.08}
                y={20}
                style={{ display: 'contents' }}
              >
                <a
                  className="contact-card"
                  href={card.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <span className="ic">{Icons[card.icon]}</span>
                  <span className="info">
                    <b>{card.label}</b>
                    <span>{card.value}</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
