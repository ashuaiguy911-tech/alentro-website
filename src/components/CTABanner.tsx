"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion, animate } from "framer-motion";
import { useRef, useCallback } from "react";
import Link from "next/link";

function MagneticLink({
  href,
  children,
  className,
  reduced,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  reduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.22);
      y.set((e.clientY - cy) * 0.22);
    },
    [reduced, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={reduced ? {} : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full sm:w-auto"
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="cta-heading"
      ref={ref}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(3,105,161,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Pulsing glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(3,105,161,0.35) 0%, transparent 70%)",
        }}
        animate={reduced ? {} : { opacity: [0.4, 0.9, 0.4] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Accent orb */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Ready to Transform Your{" "}
            <span style={{ color: "var(--color-accent-light)" }}>
              IT Infrastructure?
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ Indian businesses that trust Alentro Global Services for
            reliable, scalable, and cost-effective IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticLink
              href="/contact"
              reduced={reduced}
              className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Free Quote
            </MagneticLink>

            <motion.a
              href="tel:+917045400592"
              className="w-full sm:w-auto block text-center border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer"
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Call +91-7045400592
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
