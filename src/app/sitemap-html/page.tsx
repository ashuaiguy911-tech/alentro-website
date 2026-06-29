import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sitemap | Alentro Global Services",
  description:
    "Complete sitemap for Alentro Global Services — IT company in Mumbai. Browse all pages including services, about us, and contact information.",
  alternates: {
    canonical: "https://alentro-website.vercel.app/sitemap-html",
  },
  robots: { index: true, follow: true },
};

const pages = [
  {
    title: "Home",
    href: "/",
    description:
      "IT company in Mumbai offering end-to-end IT solutions since 2014.",
  },
  {
    title: "IT Services",
    href: "/services",
    description:
      "IT Infrastructure, AMC, Helpdesk, Cloud (AWS/Azure/GCP), Cybersecurity, Network Management, IT Consulting & Staff Augmentation.",
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "Our story, mission, vision, values, and 10+ years serving 500+ clients across India.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "Get in touch — call +91-7045400592, WhatsApp, or fill out our enquiry form.",
  },
];

export default function HtmlSitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white">Site Map</h1>
            <p className="mt-4 text-white/70 text-lg">
              All pages on the Alentro Global Services website.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="space-y-6">
              {pages.map((page) => (
                <li
                  key={page.href}
                  className="border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-md transition-all duration-200"
                >
                  <Link
                    href={page.href}
                    className="text-xl font-semibold text-accent hover:text-accent-dark transition-colors duration-200"
                  >
                    {page.title}
                  </Link>
                  <p className="mt-1 text-text-muted text-sm leading-relaxed">
                    {page.description}
                  </p>
                  <p className="mt-2 text-xs text-text-muted/60 font-mono">
                    https://alentro-website.vercel.app{page.href === "/" ? "" : page.href}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-xl bg-bg-alt border border-border text-sm text-text-muted">
              <p>
                <strong>XML Sitemap:</strong>{" "}
                <Link
                  href="/sitemap.xml"
                  className="text-accent hover:underline"
                  target="_blank"
                >
                  /sitemap.xml
                </Link>{" "}
                &mdash; for search engines
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
