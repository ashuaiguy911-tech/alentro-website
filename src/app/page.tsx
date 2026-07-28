'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useState } from "react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://alentroglobalservices.com/#organization",
  name: "Alentro Global Services",
  description:
    "IT company in Mumbai providing end-to-end IT solutions including IT infrastructure, cloud services, cybersecurity, AMC, helpdesk, and IT consulting for businesses across Mumbai and India.",
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
        text: "Alentro Global Services offers IT Infrastructure Setup, Data Annotation, Annual Maintenance Contracts (AMC), Helpdesk Services, Network and Server Management, Cybersecurity Solutions, Cloud Services (AWS, Azure, GCP), Staff Augmentation, and IT Consulting — all available for businesses in Mumbai and across India.",
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
        text: "Alentro Global Services provides comprehensive cybersecurity solutions including Next-Generation Firewall deployment, vulnerability assessment, penetration testing, Endpoint Detection and Response (EDR), security policy design, and network intrusion detection.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alentro serve businesses outside Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Alentro Global Services operates Pan-India, serving businesses across multiple sectors with IT solutions tailored to their industry and compliance requirements.",
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

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    service: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", service: "", message: "" });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <ScrollProgressBar />
      <Navbar />

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full bg-gradient-to-br from-[#0F1F3D] to-[#1a2e52] text-white py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0369A1] rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Enterprise IT Solutions for Every Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                From infrastructure to cloud, cybersecurity to staff augmentation.
                Alentro Global Services delivers comprehensive IT solutions across India.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-[#38BDF8] hover:bg-[#0369A1] text-[#0F1F3D] font-bold py-3 px-8 rounded-lg transition duration-200">
                  Get Free Consultation
                </button>
                <button className="border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F1F3D] font-bold py-3 px-8 rounded-lg transition duration-200">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - 4 STEPS */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">How We Work</h2>
              <p className="text-lg text-gray-600">Our proven 4-step process delivers results</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Discovery", desc: "We understand your IT challenges, current infrastructure, and business goals." },
                { num: "02", title: "Assessment", desc: "Comprehensive audit of systems, security posture, and optimization opportunities." },
                { num: "03", title: "Implementation", desc: "Strategic rollout with minimal disruption and continuous stakeholder communication." },
                { num: "04", title: "Support", desc: "24/7 monitoring, maintenance, and proactive optimization for peak performance." },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-[#0369A1] to-[#0F1F3D] text-white p-8 rounded-lg h-full hover:shadow-xl transition duration-200">
                    <div className="text-5xl font-bold mb-4 opacity-20">{step.num}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-100">{step.desc}</p>
                  </div>
                  {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-[#38BDF8]"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCROLLING TICKER/MARQUEE */}
        <section className="w-full bg-[#0F1F3D] text-white py-8 overflow-hidden">
          <div className="relative">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              .ticker {
                animation: scroll 20s linear infinite;
              }
              .ticker:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="ticker flex whitespace-nowrap">
              {[
                "✓ 24/7 Managed IT Support",
                "✓ Pan-India Operations",
                "✓ Cloud Migration Expert",
                "✓ Cybersecurity Specialist",
                "✓ 100% Data Quality",
                "✓ Zero Compliance Risk",
              ].map((item, idx) => (
                <span key={idx} className="text-lg font-semibold px-8 py-4">
                  {item}
                </span>
              ))}
              {[
                "✓ 24/7 Managed IT Support",
                "✓ Pan-India Operations",
                "✓ Cloud Migration Expert",
                "✓ Cybersecurity Specialist",
                "✓ 100% Data Quality",
                "✓ Zero Compliance Risk",
              ].map((item, idx) => (
                <span key={`dup-${idx}`} className="text-lg font-semibold px-8 py-4">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES - 6 NUMBERED CARDS */}
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Our Services</h2>
              <p className="text-lg text-gray-600">Comprehensive IT solutions for modern businesses</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "IT Infrastructure Setup", tags: ["Networks", "Servers", "Hardware"] },
                { num: "02", title: "Data Annotation Services", tags: ["AI/ML", "Data Labeling", "Quality Assured"] },
                { num: "03", title: "Cloud Services", tags: ["AWS", "Azure", "Migration"] },
                { num: "04", title: "Cybersecurity Solutions", tags: ["Firewall", "EDR", "Compliance"] },
                { num: "05", title: "AMC & Helpdesk", tags: ["Support", "Maintenance", "24/7"] },
                { num: "06", title: "Staff Augmentation", tags: ["Talent", "Skilled Professionals", "Flexible"] },
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-200">
                  <div className="bg-gradient-to-r from-[#0369A1] to-[#38BDF8] h-2"></div>
                  <div className="p-8">
                    <div className="text-4xl font-bold text-[#38BDF8] mb-3">{service.num}</div>
                    <h3 className="text-2xl font-bold text-[#0F1F3D] mb-4">{service.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="bg-[#0369A1] bg-opacity-10 text-[#0369A1] px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#contact" className="text-[#0369A1] font-semibold mt-6 inline-block hover:text-[#38BDF8]">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES - 8 CARDS */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600">Specialized IT solutions across sectors</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "01", name: "IT & Technology" },
                { num: "02", name: "Manufacturing" },
                { num: "03", name: "Healthcare" },
                { num: "04", name: "BFSI" },
                { num: "05", name: "BPO & KPO" },
                { num: "06", name: "Education" },
                { num: "07", name: "Government" },
                { num: "08", name: "Retail & E-commerce" },
              ].map((industry, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0F1F3D] to-[#1a2e52] text-white p-8 rounded-lg text-center hover:shadow-lg transition duration-200">
                  <div className="text-4xl font-bold mb-2 text-[#38BDF8]">{industry.num}</div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - 6 FEATURES */}
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Why Choose Alentro</h2>
              <p className="text-lg text-gray-600">What sets us apart from the competition</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Pre-screened Talent", desc: "Rigorous selection process ensures only the best professionals join our team." },
                { title: "Pan-India Reach", desc: "Operations and support available across all major cities and regions in India." },
                { title: "Zero Compliance Risk", desc: "100% adherence to data protection, security standards, and regulatory requirements." },
                { title: "Scalable Engagement", desc: "Flexible models that grow and adapt to your changing business needs." },
                { title: "24/7 Support", desc: "Round-the-clock availability ensures your operations never stop." },
                { title: "Data Quality First", desc: "Committed to delivering 100% accuracy and quality in every engagement." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0369A1] to-[#38BDF8] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1F3D] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION - SPLIT LAYOUT */}
        <section id="contact" className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-2">Phone</h3>
                    <p className="text-gray-600">+91-7045400592</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-2">Email</h3>
                    <p className="text-gray-600">info@alentroglobal.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-2">Location</h3>
                    <p className="text-gray-600">Mumbai, Maharashtra<br/>India</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-2">Hours</h3>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                  <div className="pt-4">
                    <a href="https://wa.me/917045400592" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#0F1F3D] mb-6">Send us a Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                  </div>
                  <div>
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                  </div>
                  <div>
                    <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" />
                  </div>
                  <div>
                    <select name="industry" value={formData.industry} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]">
                      <option value="">Select Industry</option>
                      <option>IT & Technology</option>
                      <option>Manufacturing</option>
                      <option>Healthcare</option>
                      <option>BFSI</option>
                      <option>Education</option>
                      <option>Retail & E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <select name="service" value={formData.service} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]">
                      <option value="">Select Service</option>
                      <option>IT Infrastructure</option>
                      <option>Data Annotation</option>
                      <option>Cloud Services</option>
                      <option>Cybersecurity</option>
                      <option>AMC & Helpdesk</option>
                      <option>Staff Augmentation</option>
                    </select>
                  </div>
                  <div>
                    <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#0369A1] to-[#38BDF8] text-white font-bold py-3 rounded-lg hover:opacity-90 transition duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="w-full bg-gradient-to-r from-[#0F1F3D] to-[#0369A1] text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 text-gray-200">Let's discuss how Alentro can help your business grow with reliable IT solutions.</p>
            <button className="bg-[#38BDF8] hover:bg-white text-[#0F1F3D] font-bold py-4 px-10 rounded-lg text-lg transition duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
