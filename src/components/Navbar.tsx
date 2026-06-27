"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Alentro Global Services - Home"
        >
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Alentro
          </span>
          <span
            className={`text-xl font-light transition-colors duration-300 ${
              scrolled ? "text-text-muted" : "text-white/80"
            }`}
          >
            Global Services
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent cursor-pointer ${
                scrolled ? "text-text" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Get Quote
          </Link>
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
        <div
          id="mobile-menu"
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
              className="mt-2 bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-3 rounded-lg text-center transition-colors duration-200 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
