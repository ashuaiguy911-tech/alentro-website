"use client";

import type { Variants } from "framer-motion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    title: "Head of Operations",
    company: "Tata AutoComp Systems",
    location: "Pune, Maharashtra",
    quote:
      "Alentro Global Services transformed our IT infrastructure within weeks. Their 24/7 support team is incredibly responsive, and the uptime we experience now is exceptional. Truly a reliable partner.",
    initials: "RS",
  },
  {
    name: "Priya Nambiar",
    title: "IT Manager",
    company: "Malabar Health Group",
    location: "Kochi, Kerala",
    quote:
      "We engaged Alentro for our hospital network upgrade and AMC. Their team's expertise in healthcare IT compliance and their rapid helpdesk resolution has made a significant impact on our operations.",
    initials: "PN",
  },
  {
    name: "Amit Verma",
    title: "CTO",
    company: "RetailEdge Solutions",
    location: "Bengaluru, Karnataka",
    quote:
      "The cloud migration Alentro executed for us on AWS was seamless — zero downtime, on budget, and ahead of schedule. Their IT consulting team understood our business goals, not just the technology.",
    initials: "AV",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function StarRating() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          className="text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="testimonials-heading"
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
            Client Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-primary"
          >
            Trusted by Businesses Across India
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Our clients consistently rely on us to deliver results. Here is what
            they say about working with Alentro.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={reduced ? {} : container}
          initial={reduced ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={reduced ? {} : card}
              whileHover={
                reduced ? {} : { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }
              className="bg-bg-alt rounded-xl p-7 border border-border hover:border-accent/30 hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col"
            >
              <StarRating />
              <blockquote className="mt-4 text-text text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "var(--color-accent)" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">
                    {t.title}, {t.company}
                  </div>
                  <div className="text-text-muted text-xs">{t.location}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
