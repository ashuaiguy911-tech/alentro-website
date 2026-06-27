"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="cta-heading"
      ref={ref}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+918268196705"
              className="w-full sm:w-auto border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer"
            >
              Call +91-8268196705
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
