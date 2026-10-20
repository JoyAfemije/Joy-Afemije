import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { faqs } from '../data/portfolio';
import Reveal from './Reveal';

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/**
 * Accessible accordion: one button per question, the answer animates open
 * with height so nothing jumps, and ARIA wiring keeps it screen reader safe.
 */
export default function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="section section--tint">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            {faqs.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1}>
            {faqs.heading}
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal
                key={item.q}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                delay={i * 0.05}
                y={16}
              >
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <Chevron />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 0.8, 0.26, 1],
                      }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
