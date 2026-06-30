import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Briefcase, Info, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found. Return to Alentro Global Services homepage.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Home", href: "/", icon: Home, description: "Back to the homepage" },
  { label: "Services", href: "/services", icon: Briefcase, description: "Browse our IT services" },
  { label: "About Us", href: "/about", icon: Info, description: "Learn about Alentro" },
  { label: "Contact", href: "/contact", icon: Phone, description: "Get in touch with us" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="min-h-screen flex items-center justify-center pt-16"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="not-found-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            {/* 404 number */}
            <p
              className="text-8xl sm:text-9xl font-bold leading-none mb-6 select-none"
              style={{ color: "var(--color-accent-light)", opacity: 0.25 }}
              aria-hidden="true"
            >
              404
            </p>

            {/* Heading */}
            <h1
              id="not-found-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Page Not Found
            </h1>

            {/* Message */}
            <p className="text-white/60 text-lg max-w-md mx-auto mb-12 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Here are some helpful links to get you back on track.
            </p>

            {/* Nav links grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {links.map(({ label, href, icon: Icon, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-2 rounded-xl px-4 py-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-200 group"
                >
                  <Icon
                    size={22}
                    className="transition-colors duration-200 group-hover:text-accent-light"
                    style={{ color: "var(--color-accent-light)" }}
                    aria-hidden="true"
                  />
                  <span className="text-white font-semibold text-sm">{label}</span>
                  <span className="text-white/40 text-xs leading-tight text-center">
                    {description}
                  </span>
                </Link>
              ))}
            </div>

            {/* Phone CTA */}
            <p className="text-white/40 text-sm">
              Need help?{" "}
              <a
                href="tel:+917045400592"
                className="text-accent-light hover:text-white transition-colors duration-200 font-medium"
              >
                Call +91-7045400592
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
