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
    "Alentro Global Services — IT company in Mumbai since 2014. IT infrastructure, cloud, cybersecurity, AMC & helpdesk for SMEs. Call +91-7045400592.",
  alternates: {
    canonical: "https://alentro-website.vercel.app",
    languages: { "en-IN": "https://alentro-website.vercel.app" },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Alentro Global Services transformed our IT infrastructure within weeks. Their 24/7 support team is incredibly responsive, and the uptime we experience now is exceptional. Truly a reliable partner.",
      publisher: { "@type": "Organization", name: "Tata AutoComp Systems" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Nambiar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We engaged Alentro for our hospital network upgrade and AMC. Their team's expertise in healthcare IT compliance and their rapid helpdesk resolution has made a significant impact on our operations.",
      publisher: { "@type": "Organization", name: "Malabar Health Group" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit Verma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The cloud migration Alentro executed for us on AWS was seamless — zero downtime, on budget, and ahead of schedule. Their IT consulting team understood our business goals, not just the technology.",
      publisher: { "@type": "Organization", name: "RetailEdge Solutions" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What IT services does Alentro Global Services offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services offers a comprehensive range of IT services including IT Infrastructure Setup, Annual Maintenance Contracts (AMC), In-House IT Support, Helpdesk Services, Network and Server Management, Firewall and Cybersecurity Solutions, Cloud Services (AWS, Azure, GCP), Staff Augmentation, and IT Consulting — all available for businesses in Mumbai and across India.",
      },
    },
    {
      "@type": "Question",
      name: "How much does IT AMC cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT AMC costs in Mumbai vary based on the number of devices, scope of coverage, and SLA requirements. Alentro Global Services offers customised AMC plans for businesses of all sizes — from SMEs to large enterprises. Contact us at +91-7045400592 for a free assessment and tailored quote.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro provide 24/7 IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides 24/7 IT support for businesses in Mumbai and across India. Our helpdesk is available round-the-clock via phone, email, and WhatsApp (+91-7045400592) to keep your IT systems operational at all times.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Mumbai does Alentro serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services serves all areas across Mumbai including South Mumbai, Bandra, Kurla, Andheri, Powai, Navi Mumbai, Thane, and the entire Mumbai Metropolitan Region (MMR). We also provide Pan-India IT services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the response time for IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services guarantees defined SLA response times based on priority: critical issues within 1 hour, high-priority within 4 hours, and standard issues within 8 business hours. On-site support is typically deployed same business day for clients in Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro offer cloud migration services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides end-to-end cloud migration services across AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our process covers assessment, architecture design, zero-downtime migration execution, and post-migration managed operations.",
      },
    },
    {
      "@type": "Question",
      name: "What cybersecurity services does Alentro provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services provides comprehensive cybersecurity solutions including Next-Generation Firewall deployment and management (Fortinet, Sophos, Cisco), vulnerability assessment and penetration testing, Endpoint Detection and Response (EDR), security policy design, network intrusion detection, and employee security awareness training.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free IT consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get a free IT consultation from Alentro Global Services by calling +91-7045400592, WhatsApp-ing the same number, or filling out the contact form on our website. Our team typically responds within 4 business hours.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro serve businesses outside Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services operates Pan-India, serving businesses in Mumbai, Pune, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, and other major Indian cities. We have served 500+ clients across India since 2014.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Alentro Global Services serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services provides IT solutions across multiple industries including Manufacturing, Retail, Healthcare, BFSI (Banking, Financial Services and Insurance), Education, Logistics, Real Estate, Professional Services, and Hospitality — with solutions customised for each sector's compliance and operational needs.",
      },
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://alentro-website.vercel.app/#webpage",
  url: "https://alentro-website.vercel.app",
  name: "IT Company Mumbai | IT Solutions & Support | Alentro Global Services",
  isPartOf: { "@id": "https://alentro-website.vercel.app/#website" },
  about: { "@id": "https://alentro-website.vercel.app/#organization" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[aria-label='Hero section'] p"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c") }}
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
