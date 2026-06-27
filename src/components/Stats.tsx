"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Users, MapPin, Briefcase, Calendar } from "lucide-react";

const trustItems = [
  { icon: Users, value: "2–10", label: "Employees" },
  { icon: MapPin, value: "Pan-India", label: "Coverage" },
  { icon: Briefcase, value: "IT Services", label: "& IT Consulting" },
  { icon: Calendar, value: "2024", label: "Founded" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-5 border-b border-white/10"
      style={{ background: "var(--color-secondary-navy)" }}
      aria-label="Company information"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-white/10">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="flex items-center gap-2.5 px-6 py-3.5"
              >
                <Icon
                  size={15}
                  className="shrink-0"
                  style={{ color: "var(--color-accent-light)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-accent-light)" }}
                >
                  {item.value}
                </span>
                <span className="text-white/50 text-sm">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
