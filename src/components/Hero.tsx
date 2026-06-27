"use client";

import type { Variants } from "framer-motion";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Server, Headphones, Cloud, Shield, Lightbulb } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const heroServices = [
  { icon: Server, label: "IT Infrastructure" },
  { icon: Headphones, label: "Managed Support" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Lightbulb, label: "IT Consulting" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -90]);
  const orbY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -45]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-primary)" }}
      aria-label="Hero section"
    >
      {/* Circuit / hex grid pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.20) 1.5px, transparent 0)",
            "linear-gradient(rgba(3,105,161,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(3,105,161,0.06) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "44px 44px, 44px 44px, 44px 44px",
          backgroundPosition: "22px 22px, 0 0, 0 0",
          y: bgY,
          scale: 1.15,
        }}
        aria-hidden="true"
      />

      {/* Radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(3,105,161,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating glowing orb — main */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--color-accent)", y: orbY, opacity: 0.12 }}
        animate={
          reduced
            ? {}
            : { y: [0, -28, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }
        }
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Floating orb — accent-light, bottom left */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--color-accent-light)", opacity: 0.06 }}
        animate={
          reduced
            ? {}
            : { y: [0, 20, 0], scale: [1, 1.07, 1], opacity: [0.05, 0.1, 0.05] }
        }
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={reduced ? {} : container}
        >
          {/* Badge */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-light/30 bg-accent/10 text-accent-light text-sm font-medium mb-8"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--color-accent-light)" }}
            />
            Trusted IT Partner Across India
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reduced ? {} : fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-5"
          >
            Empowering Businesses with{" "}
            <span style={{ color: "var(--color-accent-light)" }}>
              Reliable IT &amp; Business Solutions.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            style={{ color: "rgba(56,189,248,0.8)" }}
          >
            Reliable. Scalable. Secure. Your IT. Our Responsibility.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary CTA with shimmer */}
            <motion.div
              className="relative w-full sm:w-auto overflow-hidden rounded-xl"
              initial="rest"
              whileHover={reduced ? "rest" : "hover"}
            >
              <Link
                href="/services"
                className="relative z-10 block text-center text-white font-semibold px-8 py-4 text-base transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
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
                Explore Services
              </Link>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                  x: "-100%",
                }}
                variants={{
                  rest: { x: "-100%" },
                  hover: { x: "200%", transition: { duration: 0.55, ease: "easeInOut" } },
                }}
                aria-hidden="true"
              />
            </motion.div>

            <motion.div
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="block text-center border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* 5 Service icons strip */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="grid grid-cols-5 gap-2 sm:gap-4 max-w-2xl mx-auto"
            role="list"
            aria-label="Key service areas"
          >
            {heroServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.label}
                  role="listitem"
                  className="flex flex-col items-center gap-2 group cursor-default"
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                  whileHover={reduced ? {} : { y: -4 }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors duration-200"
                    style={{ background: "rgba(3,105,161,0.3)" }}
                  >
                    <Icon
                      size={20}
                      className="transition-colors duration-200"
                      style={{ color: "var(--color-accent-light)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-white/60 text-[10px] sm:text-xs font-medium text-center leading-tight">
                    {svc.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2">
            <motion.div
              animate={reduced ? {} : { y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.5)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
