import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import { servicePages, getServiceBySlug } from "@/data/service-detail-data";

const BASE = "https://alentro-website.vercel.app";

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };

  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: svc.keywords,
    alternates: {
      canonical: `${BASE}/services/${svc.slug}`,
      languages: { "en-IN": `${BASE}/services/${svc.slug}` },
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
      { "@type": "ListItem", position: 3, name: svc.name, item: `${BASE}/services/${svc.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.schemaName,
    description: svc.fullDescription,
    url: `${BASE}/services/${svc.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Alentro Global Services",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: svc.name,
      itemListElement: svc.benefits.map((b) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: b },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="service-hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white/80 transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80 truncate max-w-[200px]">{svc.name}</li>
              </ol>
            </nav>

            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              IT Services Mumbai
            </span>
            <h1
              id="service-hero-heading"
              className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              {svc.h1}
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-3xl leading-relaxed">
              {svc.fullDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+917045400592"
                className="inline-block border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                Call +91-7045400592
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white" aria-labelledby="benefits-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl font-bold text-primary mb-10"
            >
              What&apos;s Included
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {svc.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 p-5 rounded-xl border border-border bg-bg-alt"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-text-muted leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Alentro */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="why-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="why-heading"
              className="text-3xl font-bold text-primary mb-6"
            >
              Why Choose Alentro for {svc.name}?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: "2014", label: "Founded — 10+ years of IT expertise" },
                { stat: "500+", label: "Clients served across Mumbai & India" },
                { stat: "99.9%", label: "Uptime SLA commitment" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 border border-border text-center"
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-text-muted text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-16 bg-white" aria-labelledby="other-services-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="other-services-heading"
              className="text-2xl font-bold text-primary mb-6"
            >
              Explore Other IT Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {servicePages
                .filter((s) => s.slug !== svc.slug)
                .slice(0, 6)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-sm font-medium text-accent border border-accent/30 hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    {s.name}
                  </Link>
                ))}
              <Link
                href="/services"
                className="text-sm font-medium text-text-muted border border-border hover:border-accent/30 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              >
                View all services →
              </Link>
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
