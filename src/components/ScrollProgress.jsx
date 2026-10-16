import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin horizontal bar at the top of the viewport that tracks scroll progress.
 * The spring smooths out the raw scroll value so the motion feels cinematic
 * rather than jittery.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
