import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "IT Infrastructure Setup",
  "Annual Maintenance Contracts",
  "Helpdesk Services",
  "Cloud Services",
  "Cybersecurity Solutions",
  "IT Consulting",
];

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
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "var(--color-primary)" }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company info */}
          <div>
            <div className="text-white font-bold text-xl mb-1">Alentro</div>
            <div className="text-white/60 font-light text-sm mb-4">
              Global Services
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              End-to-End IT Solutions. Delivered with Excellence. Serving
              businesses across India since 2014.
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
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
          </div>

          {/* Services */}
          <div>
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+918268196705"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  +91-8268196705
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@alentroglobal.com"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  info@alentroglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Pan-India Operations, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <span>
            &copy; {new Date().getFullYear()} Alentro Global Services. All rights reserved.
          </span>
          <span>
            IT Solutions Company &bull; India
          </span>
        </div>
      </div>
    </footer>
  );
}
