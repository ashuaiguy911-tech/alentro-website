"use client";

import type { Variants } from "framer-motion";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useCallback } from "react";
import Link from "next/link";
import { services } from "@/data/services";

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

function TiltCard({
  children,
  reduced,
}: {
  children: React.ReactNode;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      rotateX.set(-((e.clientY - rect.top) / rect.height - 0.5) * 8);
      rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 8);
    },
    [reduced, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        (reduced
          ? { borderRadius: "var(--radius-card)", borderLeftColor: "var(--color-accent)" }
          : { rotateX, rotateY, transformStyle: "preserve-3d", borderRadius: "var(--radius-card)", borderLeftColor: "var(--color-accent)" }
        ) as React.CSSProperties
      }
      whileHover={reduced ? {} : { z: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group bg-white rounded-xl border border-border border-l-4 hover:shadow-xl transition-[box-shadow] duration-300 cursor-default flex flex-col h-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            Our IT Services
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet every IT need
            your business has — from infrastructure to the cloud.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={reduced ? {} : cardContainer}
          initial={reduced ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={reduced ? {} : cardVariant}
                className="flex flex-col"
              >
                <TiltCard reduced={reduced}>
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent"
                      style={{ background: "var(--color-navy-50)" }}
                    >
                      <Icon
                        size={22}
                        className="transition-colors duration-300 group-hover:text-white"
                        style={{ color: "var(--color-accent)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer hover:opacity-80"
                      style={{ color: "var(--color-accent)" }}
                      aria-label={`Learn more about ${service.name}`}
                    >
                      Learn More
                      <span
                        aria-hidden="true"
                        className="group-hover:translate-x-1 transition-transform duration-200 inline-block"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services button */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={reduced ? {} : { scale: 1.04 }}
            whileTap={reduced ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Link
              href="/services"
              className="inline-block text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg"
              style={{ background: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-accent-dark)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-accent)")
              }
            >
              View All Services →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
