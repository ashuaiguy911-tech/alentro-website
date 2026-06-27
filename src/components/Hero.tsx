"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-primary)" }}
      aria-label="Hero section"
    >
      {/* Animated dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
            Trusted IT Partner Across India
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Empowering Indian Businesses with{" "}
            <span style={{ color: "var(--color-accent-light)" }}>
              World-Class IT Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            End-to-End IT Solutions. Delivered with Excellence. We help
            organisations across India improve productivity and drive business
            growth through reliable, scalable, and cost-effective technology.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
