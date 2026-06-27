"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top accent line */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <motion.header
        initial={reduced ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.div
            whileHover={reduced ? {} : { scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/"
              className="flex items-center shrink-0"
              aria-label="Alentro Global Services - Home"
            >
              <Image
                src="/logo.png"
                alt="Alentro Global Services"
                width={160}
                height={60}
                priority
                className="object-contain"
                style={{
                  height: "44px",
                  width: "auto",
                  filter: scrolled ? "none" : "brightness(0) invert(1)",
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={reduced ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent cursor-pointer ${
                    scrolled ? "text-text" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
              whileHover={reduced ? {} : { scale: 1.04 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-md inline-block"
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
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              scrolled
                ? "text-primary hover:bg-navy-50"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-border shadow-lg"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className="text-text font-medium px-3 py-3 rounded-lg hover:bg-bg-alt hover:text-accent transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 text-white font-semibold px-4 py-3 rounded-lg text-center transition-colors duration-200 cursor-pointer"
                style={{ background: "var(--color-accent)" }}
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
