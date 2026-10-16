import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { brand } from '../data/portfolio';

// Split the headline into words so each one can rise into place.
const WORDS = brand.headline.split(' ');

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const wordVariant = {
  hidden: { y: '65%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 0.8, 0.26, 1] },
  },
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 0.8, 0.26, 1] },
});

export default function Hero() {
  // If public/images/tana.png isn't there yet, keep the elegant monogram.
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {brand.eyebrow}
          </motion.span>

          <motion.h1
            className="hero-headline"
            variants={container}
            initial="hidden"
            animate="show"
            aria-label={brand.headline}
          >
            {WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  verticalAlign: 'bottom',
                  marginRight: '0.26em',
                }}
              >
                <motion.span
                  variants={wordVariant}
                  style={{ display: 'inline-block' }}
                  className={
                    brand.emphasis.has(word) ? 'display-em' : undefined
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.75)}>
            {brand.intro}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.9)}>
            <Link to="/portfolio" className="btn btn-primary">
              View all work
            </Link>
            <Link to="/#contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 0.8, 0.26, 1] }}
        >
          <div className="hero-portrait-frame">
            {!portraitFailed && (
              <img
                src={brand.portrait}
                alt={brand.portraitAlt}
                loading="eager"
                decoding="async"
                onError={() => setPortraitFailed(true)}
              />
            )}
            {portraitFailed && (
              <span className="hero-portrait-mono">ct.</span>
            )}
          </div>

          <motion.span
            className="hero-portrait-badge"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
          >
            <span className="dot pulse-dot" />
            Available for work
          </motion.span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        aria-label="Scroll to About section"
      >
        Scroll
      </motion.a>
    </section>
  );
}
