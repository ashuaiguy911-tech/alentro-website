import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "IT Company Mumbai | IT Solutions & Support | Alentro Global Services",
  description:
    "Alentro Global Services — trusted IT company in Mumbai since 2014. IT infrastructure, cloud migration (AWS/Azure/GCP), cybersecurity, AMC, helpdesk & IT consulting for SMEs across Mumbai and India. Call +91-7045400592.",
  alternates: {
    canonical: "https://alentro-website.vercel.app",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://alentro-website.vercel.app/#organization",
  name: "Alentro Global Services",
  description:
    "IT company in Mumbai providing end-to-end IT solutions including IT infrastructure, cloud services, cybersecurity, AMC, helpdesk, and IT consulting for businesses across Mumbai and India.",
  url: "https://alentro-website.vercel.app",
  logo: "https://alentro-website.vercel.app/logo.png",
  image: "https://alentro-website.vercel.app/og-image.png",
  telephone: "+91-7045400592",
  email: "info@alentroglobal.com",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    postalCode: "400001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    "https://www.linkedin.com/company/alentro-global-services",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Infrastructure Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contracts (AMC)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Helpdesk Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services (AWS, Azure, GCP)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Network and Server Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Staff Augmentation" } },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Bank Transfer, UPI, Cheque",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What IT services does Alentro Global Services offer in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services offers a full range of IT services in Mumbai including IT infrastructure setup, Annual Maintenance Contracts (AMC), helpdesk support, cloud migration (AWS, Azure, GCP), cybersecurity solutions, network and server management, IT consulting, and staff augmentation.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does Alentro Global Services cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services is headquartered in Mumbai and provides IT solutions and support across Pan-India including Mumbai, Pune, Delhi, Bangalore, and other major cities.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Alentro Global Services for IT support in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Alentro Global Services at +91-7045400592, WhatsApp the same number, or fill out the contact form on their website. Support is available 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro Global Services offer cloud migration services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides cloud migration and managed cloud services across AWS, Microsoft Azure, and Google Cloud Platform (GCP) for businesses in Mumbai and across India.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Industries />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
