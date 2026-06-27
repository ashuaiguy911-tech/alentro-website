"use client";

import type { Variants } from "framer-motion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Clock, MapPin, IndianRupee } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description:
      "Our team holds industry certifications from Microsoft, Cisco, AWS, and more — ensuring you receive expert-level service.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support with guaranteed SLA response times so your business never faces prolonged downtime.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "We serve businesses across major cities and Tier-2 locations throughout India with consistent quality delivery.",
  },
  {
    icon: IndianRupee,
    title: "Cost-Effective Solutions",
    description:
      "Transparent pricing with no hidden fees. We optimise your IT spend while delivering maximum value and ROI.",
  },
];

const cardGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="whyus-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column — smooth left-to-right reveal */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2
              id="whyus-heading"
              className="mt-3 text-3xl sm:text-4xl font-bold text-primary leading-tight"
            >
              Your Trusted IT Partner for{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Business Growth
              </span>
            </h2>
            <p className="mt-5 text-text-muted text-lg leading-relaxed">
              With over a decade of experience serving Indian businesses, we
              understand the unique challenges you face. Our solutions are built
              for reliability, scalability, and long-term success.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-text-muted">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-text-muted">Years in IT</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-text-muted">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={reduced ? {} : cardGrid}
            initial={reduced ? false : "hidden"}
            animate={inView ? "visible" : "hidden"}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={reduced ? {} : cardVariant}
                  className="group p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-[border-color,box-shadow] duration-300 bg-bg-alt"
                >
                  {/* Icon with bounce on hover */}
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 cursor-default"
                    style={{ background: "var(--color-navy-50)" }}
                    whileHover={
                      reduced
                        ? {}
                        : { y: -6, rotate: -6, scale: 1.1 }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-semibold text-primary text-base mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
