"use client";

import { useScroll, useSpring, motion, useReducedMotion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none"
      aria-hidden="true"
      role="presentation"
      data-testid="scroll-progress-bar"
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
        }}
      />
    </motion.div>
  );
}
