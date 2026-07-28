'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Shield, Cloud, Users, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://alentroglobalservices.com/#organization",
  name: "Alentro Global Services",
  description: "IT company in Mumbai providing end-to-end IT solutions including IT infrastructure, cloud services, cybersecurity, AMC, helpdesk, and IT consulting for businesses across Mumbai and India.",
  url: "https://alentroglobalservices.com",
  logo: "https://alentroglobalservices.com/logo.png",
  image: "https://alentroglobalservices.com/og-image.png",
  telephone: "+91-7045400592",
  email: "alentroglobalservices@gmail.com",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mumbai, Maharashtra",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: {
      "@type": "Country",
      name: "IN",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Country", name: "India" },
  ],
  serviceArea: { "@type": "Country", name: "India" },
  sameAs: ["https://www.linkedin.com/company/alentro-global-services"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Infrastructure Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Annotation Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contracts (AMC)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Helpdesk Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services (AWS, Azure, GCP)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity Solutions" } },
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
      reviewBody: "Alentro Global Services transformed our IT infrastructure within weeks. Their 24/7 support team is incredibly responsive, and the uptime we experience now is exceptional.",
      publisher: { "@type": "Organization", name: "Tata AutoComp Systems" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Nambiar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We engaged Alentro for our hospital network upgrade and AMC. Their expertise in healthcare IT compliance and rapid helpdesk resolution has been invaluable.",
      publisher: { "@type": "Organization", name: "Malabar Health Group" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit Verma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "The cloud migration Alentro executed for us on AWS was seamless — zero downtime, on budget, and ahead of schedule. Truly exceptional service.",
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
        text: "Alentro Global Services offers IT Infrastructure Setup, Data Annotation, Annual Maintenance Contracts (AMC), Helpdesk Services, Network and Server Management, Cybersecurity Solutions, Cloud Services (AWS, Azure, GCP), Staff Augmentation, and IT Consulting — all available for businesses in Mumbai and across India.",
      },
    },
    {
      "@type": "Question",
      name: "How much does IT AMC cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT Annual Maintenance Contracts (AMC) with Alentro Global Services start at ₹8,000/month for small businesses and scale up based on infrastructure size, number of devices, and service level agreements. Contact us for a customized quote.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro provide 24/7 IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides 24/7 IT support with guaranteed SLAs. Our helpdesk is available round-the-clock via phone, email, and WhatsApp (+91-7045400592) with standard 4-hour response and 1-hour premium response options.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Mumbai does Alentro serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services serves all areas in Mumbai including South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, and Northern Suburbs. We also provide Pan-India IT support services with remote and on-site options.",
      },
    },
    {
      "@type": "Question",
      name: "What is the response time for IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services guarantees a 4-hour standard response time for most IT issues. Premium SLA customers receive 1-hour response time. Critical issues are prioritized and resolved faster.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro offer cloud migration services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services offers comprehensive cloud migration services for AWS, Microsoft Azure, and Google Cloud Platform (GCP). We handle planning, execution, and post-migration support with zero downtime.",
      },
    },
    {
      "@type": "Question",
      name: "What cybersecurity services does Alentro provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services provides enterprise firewall deployment (Fortinet, Sophos, Cisco), vulnerability assessments, penetration testing, EDR (Endpoint Detection & Response), data backup solutions, and compliance management (ISO 27001, GDPR, HIPAA).",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free IT consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get a free IT consultation by contacting Alentro Global Services via phone (+91-7045400592), email (alentroglobalservices@gmail.com), or using the contact form on our website. We respond within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro serve businesses outside Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides Pan-India IT support with both remote and on-site options. We serve businesses across all major Indian cities including Delhi, Bangalore, Pune, Hyderabad, and Chennai.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Alentro Global Services serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro Global Services serves IT & Technology, Manufacturing, Healthcare, BFSI (Banking, Financial Services, Insurance), BPO & KPO, Education, Government, and Retail & E-commerce industries.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://alentroglobalservices.com",
    },
  ],
};

// Animated counter component
function AnimatedCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduced) return;

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.floor(value * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, reduced]);

  return <span ref={ref}>{displayValue}</span>;
}

// Service cards data
const services = [
  {
    num: "01",
    title: "IT Infrastructure",
    description: "Complete server, network, and infrastructure deployment",
    icon: Zap,
    tags: ["Setup", "Monitoring", "Support"],
  },
  {
    num: "02",
    title: "Data Annotation",
    description: "AI/ML training data labeling at scale with 99%+ accuracy",
    icon: Users,
    tags: ["AI/ML", "Scalable", "Accurate"],
  },
  {
    num: "03",
    title: "Cloud Services",
    description: "AWS, Azure, GCP migration and managed operations",
    icon: Cloud,
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    num: "04",
    title: "Cybersecurity",
    description: "Enterprise firewall, EDR, and compliance solutions",
    icon: Shield,
    tags: ["Firewall", "Compliance", "Zero Risk"],
  },
  {
    num: "05",
    title: "AMC & Helpdesk",
    description: "24/7 managed IT support with defined SLAs",
    icon: TrendingUp,
    tags: ["24/7", "SLA", "Pan-India"],
  },
  {
    num: "06",
    title: "Staff Augmentation",
    description: "Pre-screened IT professionals on flexible contracts",
    icon: Users,
    tags: ["Contract", "Direct", "Flexi"],
  },
];

// FAQ items with 10 questions
const faqItems = [
  {
    question: "What IT services does Alentro Global Services offer?",
    answer: "Alentro Global Services offers IT Infrastructure Setup, Data Annotation, Annual Maintenance Contracts (AMC), Helpdesk Services, Network and Server Management, Cybersecurity Solutions, Cloud Services (AWS, Azure, GCP), Staff Augmentation, and IT Consulting — all available for businesses in Mumbai and across India.",
  },
  {
    question: "How much does IT AMC cost in Mumbai?",
    answer: "IT Annual Maintenance Contracts (AMC) with Alentro Global Services start at ₹8,000/month for small businesses and scale up based on infrastructure size, number of devices, and service level agreements. Contact us for a customized quote.",
  },
  {
    question: "Does Alentro provide 24/7 IT support?",
    answer: "Yes, Alentro Global Services provides 24/7 IT support with guaranteed SLAs. Our helpdesk is available round-the-clock via phone, email, and WhatsApp (+91-7045400592) with standard 4-hour response and 1-hour premium response options.",
  },
  {
    question: "Which areas in Mumbai does Alentro serve?",
    answer: "Alentro Global Services serves all areas in Mumbai including South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, and Northern Suburbs. We also provide Pan-India IT support services with remote and on-site options.",
  },
  {
    question: "What is the response time for IT support?",
    answer: "Alentro Global Services guarantees a 4-hour standard response time for most IT issues. Premium SLA customers receive 1-hour response time. Critical issues are prioritized and resolved faster.",
  },
  {
    question: "Does Alentro offer cloud migration services?",
    answer: "Yes, Alentro Global Services offers comprehensive cloud migration services for AWS, Microsoft Azure, and Google Cloud Platform (GCP). We handle planning, execution, and post-migration support with zero downtime.",
  },
  {
    question: "What cybersecurity services does Alentro provide?",
    answer: "Alentro Global Services provides enterprise firewall deployment (Fortinet, Sophos, Cisco), vulnerability assessments, penetration testing, EDR (Endpoint Detection & Response), data backup solutions, and compliance management (ISO 27001, GDPR, HIPAA).",
  },
  {
    question: "How do I get a free IT consultation?",
    answer: "You can get a free IT consultation by contacting Alentro Global Services via phone (+91-7045400592), email (alentroglobalservices@gmail.com), or using the contact form on our website. We respond within 24 hours.",
  },
  {
    question: "Does Alentro serve businesses outside Mumbai?",
    answer: "Yes, Alentro Global Services provides Pan-India IT support with both remote and on-site options. We serve businesses across all major Indian cities including Delhi, Bangalore, Pune, Hyderabad, and Chennai.",
  },
  {
    question: "What industries does Alentro Global Services serve?",
    answer: "Alentro Global Services serves IT & Technology, Manufacturing, Healthcare, BFSI (Banking, Financial Services, Insurance), BPO & KPO, Education, Government, and Retail & E-commerce industries.",
  },
];

// FAQ Accordion component with Framer Motion
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="border-b"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left py-6 flex items-start justify-between gap-4 hover:text-opacity-100 transition-colors"
            style={{ color: "var(--color-navy)" }}
            aria-expanded={openIndex === index}
          >
            <span className="font-bold text-lg leading-tight flex-1">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-1"
              style={{ color: "var(--color-highlight)" }}
              aria-hidden="true"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              opacity: openIndex === index ? 1 : 0,
              height: openIndex === index ? "auto" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              {item.answer}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <ScrollProgressBar />
      <Navbar />

      <main className="w-full">
        {/* ====================================================================
            HERO SECTION - PREMIUM AWWWARDS QUALITY
            ==================================================================== */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-[80px]" style={{ backgroundColor: "var(--color-navy)" }}>
          {/* Animated gradient mesh background */}
          <style>{`
            @keyframes float-1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(50px, -50px) scale(1.1); }
              50% { transform: translate(-30px, 30px) scale(0.9); }
              75% { transform: translate(60px, 40px) scale(1.05); }
            }
            @keyframes float-2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(-40px, 60px) scale(0.95); }
              50% { transform: translate(40px, -40px) scale(1.1); }
              75% { transform: translate(-50px, -30px) scale(0.9); }
            }
            @keyframes float-3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(30px, 40px) scale(1.05); }
              50% { transform: translate(-50px, -60px) scale(0.95); }
              75% { transform: translate(40px, 50px) scale(1.1); }
            }
            .blob-1 { animation: float-1 20s infinite; }
            .blob-2 { animation: float-2 24s infinite; }
            .blob-3 { animation: float-3 28s infinite; }
          `}</style>

          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob-1 absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden="true" />
            <div className="blob-2 absolute bottom-20 left-10 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(3, 105, 161, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden="true" />
            <div className="blob-3 absolute top-1/3 left-1/4 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} aria-hidden="true" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(56, 189, 248, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.02) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }} aria-hidden="true" />

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            {/* Badge */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: "var(--color-highlight)", backgroundColor: "rgba(56, 189, 248, 0.05)" }}>
                <span style={{ color: "var(--color-highlight)" }} className="text-sm font-medium">India's Trusted IT Partner 🇮🇳</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 style={{ color: "var(--color-white)" }} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Right IT Support.{" "}
                <span style={{ color: "var(--color-highlight)" }}>Any Industry.</span>
                <br />
                Always Reliable.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-10 text-lg md:text-xl"
              style={{ color: "var(--color-gray-300)" }}
            >
              24/7 IT support, cloud migration, cybersecurity, and data annotation services for businesses across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-white"
                style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-highlight) 100%)" }}
              >
                Get IT Support <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ borderColor: "var(--color-highlight)", color: "var(--color-highlight)" }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={containerVariants}
              initial={reduced ? false : "hidden"}
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { label: "Client Uptime", value: 99, suffix: "%" },
                { label: "Response Time", value: 4, suffix: "hrs" },
                { label: "States Pan-India", value: 15, suffix: "+" },
                { label: "Data Points Labeled", value: 10, suffix: "M+" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--color-highlight)" }}>
                    <AnimatedCounter value={stat.value} />
                    <span className="text-xl">{stat.suffix}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--color-gray-400)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ====================================================================
            HOW IT WORKS - PREMIUM PROCESS STRIP
            ==================================================================== */}
        <section className="w-full py-20 md:py-28" style={{ backgroundColor: "var(--color-navy-dark)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-highlight)" }}>
                OUR PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-white)" }}>
                How We Deliver Excellence
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {["Discovery", "Assessment", "Implementation", "Support"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-lg p-8" style={{ backgroundColor: "var(--color-navy-light)", border: "1px solid rgba(56, 189, 248, 0.1)" }}>
                    <div className="text-5xl font-bold mb-4 opacity-20" style={{ color: "var(--color-highlight)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-white)" }}>
                      {step}
                    </h3>
                    <p style={{ color: "var(--color-gray-400)" }}>
                      {i === 0 && "Understand your IT needs and business goals"}
                      {i === 1 && "Audit systems and identify optimization opportunities"}
                      {i === 2 && "Execute with minimal disruption and clear communication"}
                      {i === 3 && "24/7 monitoring and proactive support"}
                    </p>
                  </div>
                  {i < 3 && (
                    <div
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 transform -translate-y-1/2"
                      style={{ backgroundColor: "var(--color-highlight)" }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            HOW ALENTRO WORKS - PROCESS FLOW SECTION
            ==================================================================== */}
        <section className="w-full py-20 md:py-28" style={{ backgroundColor: "#0F1F3D" }}>
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-5">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* PART 1: TOP ROW - Active Badge + Heading + Stat + CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
            >
              {/* Left: Active Badge + Heading */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-3 h-3">
                    <div
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{ backgroundColor: "#10b981" }}
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: "#10b981", opacity: 0.3 }}
                    />
                  </div>
                  <span style={{ color: "#10b981" }} className="text-xs font-bold uppercase tracking-wider">
                    Active Now
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  How Alentro <span style={{ color: "var(--color-highlight)" }}>Works</span>
                </h2>
              </div>

              {/* Right: Stat + CTA Button */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <p style={{ color: "var(--color-gray-300)" }} className="text-center md:text-right">
                  500+ Clients Served across India
                </p>
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-highlight)",
                    color: "#0F1F3D",
                  }}
                >
                  Start Your IT Journey →
                </Link>
              </div>
            </motion.div>

            {/* PART 2: STEP CARDS ROW */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {[
                {
                  num: "01",
                  title: "You Share a Requirement",
                  badge: "Brief",
                  badgeColor: "#3b82f6",
                  description:
                    "IT scope, headcount, location, timeline — tell us what you need, we handle the rest.",
                },
                {
                  num: "02",
                  title: "We Assess & Scope",
                  badge: "Verified",
                  badgeColor: "#eab308",
                  description:
                    "IT audit · Skills assessment · Solution fitment — we find the right fix fast.",
                },
                {
                  num: "03",
                  title: "You Approve. We Deploy.",
                  badge: "7 Days",
                  badgeColor: "#10b981",
                  description:
                    "Avg. 7-14 days deployment — zero disruption to your existing operations.",
                },
                {
                  num: "04",
                  title: "Ongoing Support & Compliance",
                  badge: "100%",
                  badgeColor: "#a855f7",
                  description:
                    "SLA monitoring · 24/7 helpdesk · Zero compliance risk — all managed by Alentro.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative p-6 rounded-lg backdrop-blur-sm transition-all hover:scale-105"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(56,189,248,0.15)",
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: step.badgeColor, opacity: 0.8 }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  {/* Step Number */}
                  <p style={{ color: "var(--color-highlight)" }} className="text-xs font-bold uppercase mb-3 tracking-wider">
                    Step {step.num}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{step.title}</h3>

                  {/* Description */}
                  <p style={{ color: "var(--color-gray-300)" }} className="text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* PART 3: INDUSTRY TICKER */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 py-6 overflow-hidden"
            >
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-container {
                  display: flex;
                  animation: marquee 30s linear infinite;
                  white-space: nowrap;
                  width: max-content;
                }
                .marquee-container:hover {
                  animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                  .marquee-container {
                    animation: none;
                  }
                }
                .marquee-container > span {
                  display: inline-block;
                  margin: 0 2rem;
                  opacity: 0.6;
                }
              `}</style>
              <div
                style={{
                  maskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <div className="marquee-container">
                  {[
                    "IT & Technology",
                    "Manufacturing",
                    "Healthcare",
                    "BFSI",
                    "BPO & KPO",
                    "Education",
                    "Government",
                    "Retail & E-commerce",
                    "Pharmaceuticals",
                    "Logistics",
                    "Automotive",
                    "Real Estate",
                  ].map((industry, i) => (
                    <span key={i} style={{ color: "var(--color-gray-400)" }} className="uppercase text-xs font-semibold tracking-widest">
                      {industry} {i < 11 && "·"}
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    "IT & Technology",
                    "Manufacturing",
                    "Healthcare",
                    "BFSI",
                    "BPO & KPO",
                    "Education",
                    "Government",
                    "Retail & E-commerce",
                    "Pharmaceuticals",
                    "Logistics",
                    "Automotive",
                    "Real Estate",
                  ].map((industry, i) => (
                    <span key={`dup-${i}`} style={{ color: "var(--color-gray-400)" }} className="uppercase text-xs font-semibold tracking-widest">
                      {industry} {i < 11 && "·"}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* PART 4: BOTTOM STATS ROW */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border-t border-b"
              style={{ borderColor: "rgba(56,189,248,0.2)" }}
            >
              {[
                { value: 500, suffix: "+", label: "Clients Served Across India" },
                { value: 9, suffix: "+", label: "IT Services Under One Roof" },
                { value: 4, suffix: " hrs", label: "Average Response SLA" },
                { value: 100, suffix: "%", label: "Compliance Rate" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center py-8 px-4"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(56,189,248,0.1)" : "none",
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p style={{ color: "var(--color-gray-400)" }} className="text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* PART 5: BOTTOM CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Link
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--color-highlight)",
                  color: "#0F1F3D",
                }}
              >
                Get IT Support Now →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ====================================================================
            SERVICES - PREMIUM GRID
            ==================================================================== */}
        <section className="w-full py-20 md:py-28" style={{ backgroundColor: "var(--color-white)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
                Our Premium Services
              </h2>
              <p style={{ color: "var(--color-gray-600)" }} className="text-lg">
                Enterprise-grade IT solutions tailored to your industry
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={reduced ? {} : { translateY: -4 }}
                    className="rounded-xl p-8 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-white)",
                      border: "1px solid var(--color-gray-200)",
                      boxShadow: "0 4px 16px rgba(15, 31, 61, 0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl font-bold opacity-30" style={{ color: "var(--color-highlight)" }}>
                        {service.num}
                      </div>
                      <Icon className="w-8 h-8" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-navy)" }}>
                      {service.title}
                    </h3>
                    <p className="mb-6" style={{ color: "var(--color-gray-600)" }}>
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(3, 105, 161, 0.08)", color: "var(--color-accent)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="font-semibold flex items-center gap-2" style={{ color: "var(--color-accent)" }}>
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ====================================================================
            FAQ SECTION - PREMIUM ACCORDION
            ==================================================================== */}
        <section className="w-full py-20 md:py-28" style={{ backgroundColor: "var(--color-gray-50)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Label */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-4"
            >
              <span style={{ color: "var(--color-highlight)" }} className="text-sm font-bold uppercase tracking-wider">
                FAQ
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-navy)" }}>
                Frequently Asked <span style={{ color: "var(--color-highlight)" }}>Questions</span>
              </h2>
            </motion.div>

            {/* FAQ Accordion */}
            <FAQAccordion />
          </div>
        </section>

        {/* ====================================================================
            CTA SECTION - CALL TO ACTION
            ==================================================================== */}
        <section className="w-full py-20 md:py-28" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)" }}>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-white)" }}>
              Ready to Transform Your IT?
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--color-gray-300)" }}>
              Let's discuss how Alentro can help your business grow with reliable, scalable IT solutions.
            </p>
            <motion.button
              whileHover={reduced ? {} : { scale: 1.04 }}
              whileTap={reduced ? {} : { scale: 0.96 }}
              className="px-10 py-4 rounded-lg font-semibold text-lg"
              style={{ backgroundColor: "var(--color-highlight)", color: "var(--color-navy)" }}
            >
              Schedule Free Consultation <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
