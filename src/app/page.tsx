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
  email: "info@alentroglobal.com",
  foundingDate: "2024",
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
      name: "Does Alentro provide 24/7 IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services provides 24/7 IT support for businesses in Mumbai and across India. Our helpdesk is available round-the-clock via phone, email, and WhatsApp (+91-7045400592).",
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

  return <span ref={ref}>{displayValue}%</span>;
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
                { label: "Client Uptime", value: 99 },
                { label: "Response Time", value: 4, unit: "hrs" },
                { label: "Pan-India Reach", value: 15, unit: "states" },
                { label: "AI Data Labeled", value: 10, unit: "M+" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--color-highlight)" }}>
                    {stat.unit ? (
                      <>
                        <AnimatedCounter value={stat.value} />
                        <span className="text-xl">{stat.unit}</span>
                      </>
                    ) : (
                      <>
                        <AnimatedCounter value={stat.value} />
                        <span className="text-xl">%</span>
                      </>
                    )}
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
