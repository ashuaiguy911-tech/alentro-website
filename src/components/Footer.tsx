"use client";

import type { Variants } from "framer-motion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Sitemap", href: "/sitemap-html" },
];

const serviceLinks = [
  "IT Infrastructure Setup",
  "Annual Maintenance Contracts",
  "Helpdesk Services",
  "Cloud Services",
  "Cybersecurity Solutions",
  "IT Consulting",
];

const columns: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const col: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <footer
      className="pt-14 pb-8"
      style={{ background: "var(--color-primary)" }}
      aria-label="Site footer"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
          variants={reduced ? {} : columns}
          initial={reduced ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          {/* Company info */}
          <motion.div variants={reduced ? {} : col}>
            <Link href="/" aria-label="Alentro Global Services - Home" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Alentro Global Services"
                width={160}
                height={60}
                className="object-contain"
                style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed italic mb-1">
              Reliable. Scalable. Secure.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Your IT. Our Responsibility.
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              {[
                { href: "https://www.linkedin.com/company/alentro-global-services", label: "LinkedIn", Icon: LinkedInIcon },
                { href: "https://twitter.com/alentroglobal", label: "Twitter / X", Icon: TwitterIcon },
                { href: "https://facebook.com/alentroglobal", label: "Facebook", Icon: FacebookIcon },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 transition-colors duration-200 cursor-pointer"
                  aria-label={label}
                  whileHover={
                    reduced
                      ? {}
                      : { scale: 1.15, backgroundColor: "var(--color-accent)" }
                  }
                  whileTap={reduced ? {} : { scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={reduced ? {} : col}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={reduced ? {} : col}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={reduced ? {} : col}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent-light)" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+917045400592"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  +91-7045400592
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent-light)" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:jennifersenekar123@gmail.com"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer break-all"
                >
                  jennifersenekar123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent-light)" }}
                  aria-hidden="true"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  Mumbai, Maharashtra, India<br />
                  <span className="text-white/40">Pan-India Operations</span>
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs"
          initial={reduced ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>
            &copy; {new Date().getFullYear()} Alentro Global Services. All rights reserved.
          </span>
          <span>IT Solutions Company &bull; India</span>
        </motion.div>
      </div>
    </footer>
  );
}
