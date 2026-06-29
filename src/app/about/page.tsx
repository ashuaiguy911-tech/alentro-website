import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { Target, Eye, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | IT Company Mumbai Since 2014",
  description:
    "Learn about Alentro Global Services — an IT company in Mumbai since 2014. Serving 500+ clients across India with IT infrastructure, cloud, cybersecurity, AMC, and helpdesk solutions. Our mission, vision & values.",
  keywords:
    "about Alentro Global Services, IT company Mumbai history, IT solutions company India, Mumbai IT company since 2014, managed IT services Mumbai",
  alternates: {
    canonical: "https://alentroglobal.com/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alentroglobal.com/#organization",
  name: "Alentro Global Services",
  legalName: "Alentro Global Services",
  url: "https://alentroglobal.com",
  logo: {
    "@type": "ImageObject",
    url: "https://alentroglobal.com/logo.png",
    width: 160,
    height: 60,
  },
  image: "https://alentroglobal.com/og-image.png",
  description:
    "Alentro Global Services is a trusted IT company in Mumbai, India, founded in 2014. We deliver end-to-end IT solutions — infrastructure, cloud, cybersecurity, AMC, helpdesk, and consulting — to 500+ clients across India.",
  foundingDate: "2014",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: "+91-7045400592",
  sameAs: [
    "https://www.linkedin.com/company/alentro-global-services",
  ],
  knowsAbout: [
    "IT Infrastructure",
    "Cloud Computing",
    "Cybersecurity",
    "Managed IT Services",
    "Annual Maintenance Contracts",
    "IT Helpdesk",
    "Network Management",
    "IT Consulting",
  ],
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver reliable, scalable, and cost-effective IT solutions that empower Indian businesses to achieve their full potential through technology.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted end-to-end IT services partner for businesses across India, known for excellence, innovation, and measurable results.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity in everything we do. Client success is our success. We believe in long-term partnerships built on transparency, expertise, and genuine care.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards — certified professionals, industry-best SLAs, and a culture of continuous improvement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="about-hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h1
              id="about-hero-heading"
              className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Powering India&apos;s Businesses with{" "}
              <span style={{ color: "var(--color-accent-light)" }}>
                Expert IT Solutions
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Since 2014, Alentro Global Services has been a trusted technology
              partner for businesses across India — from startups to enterprises.
              We deliver end-to-end IT services that are reliable, scalable, and
              built for growth.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white" aria-labelledby="story-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                  Our Story
                </span>
                <h2
                  id="story-heading"
                  className="mt-3 text-3xl sm:text-4xl font-bold text-primary leading-tight"
                >
                  A Decade of IT Excellence in India
                </h2>
                <p className="mt-5 text-text-muted leading-relaxed">
                  Alentro Global Services was founded with a simple but powerful
                  belief: every Indian business, regardless of size, deserves
                  access to world-class IT support and infrastructure.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  Starting as a lean team of certified IT professionals, we grew
                  by focusing relentlessly on client outcomes. Today, we serve
                  500+ clients across India with a comprehensive suite of IT
                  services — from infrastructure setup to cloud migrations and
                  cybersecurity.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  Our growth has been built on long-term relationships, high
                  SLA adherence, and a team that genuinely cares about keeping
                  your business running at its best.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    Work With Us
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: "2014", label: "Founded" },
                  { val: "500+", label: "Clients Served" },
                  { val: "Pan-India", label: "Coverage" },
                  { val: "99.9%", label: "Uptime SLA" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-bg-alt rounded-xl p-6 border border-border text-center"
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {item.val}
                    </div>
                    <div className="text-text-muted text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                What Drives Us
              </span>
              <h2
                id="values-heading"
                className="mt-3 text-3xl sm:text-4xl font-bold text-primary"
              >
                Our Mission, Vision & Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-white rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "var(--color-navy-50)" }}
                    >
                      <Icon size={22} className="text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-3">
                      {v.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
