"use client";

import type { Variants } from "framer-motion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Heart,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Building2,
} from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Streamlining production IT" },
  { icon: Heart, name: "Healthcare", description: "Secure & compliant IT systems" },
  { icon: Landmark, name: "BFSI", description: "Fintech & banking IT solutions" },
  { icon: ShoppingBag, name: "Retail", description: "POS, ERP & eCommerce IT" },
  { icon: GraduationCap, name: "Education", description: "Campus networking & EdTech" },
  { icon: Building2, name: "Government", description: "e-Governance & public sector IT" },
];

const waveContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 18,
    },
  },
};

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="industries-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Industries We Serve
          </span>
          <h2
            id="industries-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-primary"
          >
            IT Solutions for Every Sector
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            We have deep domain expertise across major industries, delivering IT
            solutions that are tailored to your sector&apos;s specific needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={reduced ? {} : waveContainer}
          initial={reduced ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={reduced ? {} : popIn}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-lg transition-[border-color,box-shadow] duration-300 cursor-default"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent"
                  style={{ background: "var(--color-navy-50)" }}
                  whileHover={reduced ? {} : { rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Icon
                    size={24}
                    className="text-accent group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </motion.div>
                <h3 className="font-semibold text-primary text-sm mb-1">
                  {industry.name}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
