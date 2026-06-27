"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Clients Served", sublabel: "Across India" },
  { value: "10+", label: "Years Experience", sublabel: "In IT Services" },
  { value: "99.9%", label: "Uptime SLA", sublabel: "Guaranteed" },
  { value: "24/7", label: "Support", sublabel: "Always Available" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-16 lg:py-20"
      style={{ background: "var(--color-primary)" }}
      aria-label="Company statistics"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "var(--color-accent-light)" }}
              >
                {stat.value}
              </div>
              <div className="text-white font-semibold text-base lg:text-lg">
                {stat.label}
              </div>
              <div className="text-white/50 text-sm mt-0.5">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
