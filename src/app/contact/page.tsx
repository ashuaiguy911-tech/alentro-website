import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact IT Company Mumbai | Alentro Global Services",
  description:
    "Contact Alentro Global Services — IT company in Mumbai. Call +91-7045400592, WhatsApp us, or fill out our enquiry form for IT solutions, AMC, cloud, cybersecurity & support across Mumbai and India.",
  keywords:
    "contact IT company Mumbai, IT support Mumbai contact, IT services Mumbai phone, Alentro Global Services contact, IT helpdesk Mumbai",
  alternates: {
    canonical: "https://alentro-website.vercel.app/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alentro Global Services",
  description: "Contact page for Alentro Global Services IT company in Mumbai",
  url: "https://alentro-website.vercel.app/contact",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://alentro-website.vercel.app/#organization",
    name: "Alentro Global Services",
    telephone: "+91-7045400592",
    email: "info@alentroglobal.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7045400592",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7045400592",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7045400592",
    href: "tel:+917045400592",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jennifersenekar123@gmail.com",
    href: "mailto:jennifersenekar123@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pan-India Operations, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "24/7 — Always Available",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="contact-hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h1
              id="contact-hero-heading"
              className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Let&apos;s Talk About Your{" "}
              <span style={{ color: "var(--color-accent-light)" }}>
                IT Requirements
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need IT infrastructure support, cloud migration, or
              just a free consultation — we are here to help.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-label="Contact details and form"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info column */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Contact Information
                </h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Reach out through any channel below. Our team typically
                  responds within 4 business hours.
                </p>
                <ul className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "var(--color-navy-50)" }}
                        >
                          <Icon size={18} className="text-accent" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-0.5">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-primary font-medium hover:text-accent transition-colors duration-200 cursor-pointer"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-primary font-medium">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div
                  className="mt-10 p-6 rounded-xl border border-border"
                  style={{ background: "var(--color-primary)" }}
                >
                  <div className="text-white font-semibold mb-2">
                    Need Immediate Assistance?
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    WhatsApp us for quick support or to schedule a call.
                  </p>
                  <a
                    href="https://wa.me/917045400592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90 cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Form column */}
              <div
                className="lg:col-span-3 bg-white rounded-2xl p-8 border border-border shadow-sm"
              >
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-text-muted text-sm mb-8">
                  Fill in your details and we&apos;ll get back to you within 24
                  business hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
