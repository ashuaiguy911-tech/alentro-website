"use client";

import { motion, useInView } from "framer-motion";
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

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="whyus-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-bg-alt"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "var(--color-navy-50)" }}
                  >
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
