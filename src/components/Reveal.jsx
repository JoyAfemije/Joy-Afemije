import { motion } from 'motion/react';

/**
 * Reveal — a small wrapper that fades + slides its children into view when
 * the element enters the viewport. Motion's `whileInView` handles both the
 * IntersectionObserver and reduced-motion behavior for us, so we don't have
 * to write (or clean up) our own observers here.
 *
 * @param {number} delay   - seconds to wait before starting the reveal
 * @param {number} y       - vertical offset in px
 * @param {string} as      - HTML tag to render (default "div")
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  once = true,
  as = 'div',
  className,
  style,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px 0px -8% 0px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 0.8, 0.26, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
