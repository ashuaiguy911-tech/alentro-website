'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Annotation Services",
  description: "High-quality data annotation services for AI and machine learning models including image, text, audio, video, 3D point cloud, and document annotation. 100% quality assured with 24/7 monitoring.",
  provider: {
    "@type": "Organization",
    name: "Alentro Global Services",
    url: "https://alentroglobalservices.com",
    logo: "https://alentroglobalservices.com/logo.png",
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Data Annotation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Annotation Types",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Image Annotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Text Annotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Annotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audio Annotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Point Cloud Annotation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Processing" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of data annotation does Alentro offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro offers comprehensive data annotation services including image annotation (bounding boxes, segmentation, classification), text annotation (NER, sentiment analysis, classification), video annotation with frame-by-frame and tracking, audio transcription and annotation, 3D point cloud annotation for autonomous vehicles, and document processing services.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is Alentro's data annotation service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro maintains 100% quality assurance through multi-level QA checks and human review. Every annotated dataset undergoes rigorous validation before delivery, ensuring contextually accurate and industry-compliant labeled data for your AI/ML models.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you provide data annotation for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro supports data annotation across all major industries including autonomous vehicles, healthcare and medical imaging, e-commerce and retail, natural language processing, computer vision, robotics, document intelligence, and quality assurance testing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a data annotation project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines depend on data volume, annotation complexity, and quality requirements. We can scale rapidly from thousands to millions of data points using our 500+ skilled annotators. Contact us for a specific timeline estimate based on your project scope.",
      },
    },
    {
      "@type": "Question",
      name: "How is data security handled during annotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alentro follows enterprise-grade security protocols with ISO 27001 compliance. All data is handled with strict confidentiality agreements, secure infrastructure, access controls, and audit trails to ensure your proprietary data remains protected throughout the annotation process.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alentroglobalservices.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://alentroglobalservices.com/services" },
    { "@type": "ListItem", position: 3, name: "Data Annotation", item: "https://alentroglobalservices.com/services/data-annotation" },
  ],
};

export default function DataAnnotationService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectSize: "",
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
    setFormData({ name: "", email: "", phone: "", company: "", projectSize: "", message: "" });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

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
                High-Quality Data Annotation Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Power your AI and machine learning models with precisely labeled, verified data.
                100% quality assured. Pan-India operations. Rapid scaling.
              </p>
              <button className="bg-[#38BDF8] hover:bg-[#0369A1] text-[#0F1F3D] font-bold py-3 px-8 rounded-lg transition duration-200">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* STATS/HIGHLIGHTS */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "100%", label: "Quality Assurance" },
                { num: "24/7", label: "Project Monitoring" },
                { num: "500+", label: "Skilled Annotators" },
                { num: "10M+", label: "Data Points Processed" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#0369A1] mb-3">{stat.num}</div>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANNOTATION TYPES - 6 SERVICES */}
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Data Annotation Services</h2>
              <p className="text-lg text-gray-600">Comprehensive annotation solutions for AI/ML projects</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Image Annotation", desc: "Bounding boxes, segmentation, classification, and polygon annotation for computer vision models." },
                { num: "02", title: "Text Annotation", desc: "Named entity recognition, sentiment analysis, text classification, and transcription services." },
                { num: "03", title: "Video Annotation", desc: "Frame-by-frame annotation, object tracking, and action recognition for video AI models." },
                { num: "04", title: "Audio Annotation", desc: "Speech transcription, speaker identification, and audio event labeling services." },
                { num: "05", title: "3D Point Cloud", desc: "LiDAR annotation for autonomous vehicles and 3D object detection models." },
                { num: "06", title: "Document Processing", desc: "Invoice extraction, form processing, and document classification services." },
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-200">
                  <div className="bg-gradient-to-r from-[#0369A1] to-[#38BDF8] h-2"></div>
                  <div className="p-8">
                    <div className="text-4xl font-bold text-[#38BDF8] mb-3">{service.num}</div>
                    <h3 className="text-2xl font-bold text-[#0F1F3D] mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS - 5 STEPS */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Our Process</h2>
              <p className="text-lg text-gray-600">Streamlined workflow for quality and speed</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { num: "01", title: "Requirements", desc: "Detailed analysis of your annotation needs and model requirements" },
                { num: "02", title: "Guidelines", desc: "Custom annotation guidelines tailored to your project specifications" },
                { num: "03", title: "Annotation", desc: "Skilled annotators label data according to approved guidelines" },
                { num: "04", title: "QA Review", desc: "Quality assurance and validation of all annotated data" },
                { num: "05", title: "Delivery", desc: "Formatted datasets ready for your ML model training" },
              ].map((step, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0369A1] to-[#0F1F3D] text-white p-6 rounded-lg text-center hover:shadow-lg transition duration-200">
                  <div className="text-3xl font-bold mb-2 text-[#38BDF8]">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-200">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Industries We Support</h2>
              <p className="text-lg text-gray-600">Trusted by leading companies across sectors</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Autonomous Vehicles",
                "Healthcare & Medical Imaging",
                "E-Commerce & Retail",
                "Natural Language Processing",
                "Computer Vision",
                "Robotics & Automation",
                "Document Intelligence",
                "Quality Assurance Testing",
              ].map((industry, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center">
                  <h3 className="text-lg font-bold text-[#0F1F3D]">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ALENTRO */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Why Choose Alentro for Data Annotation</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Quality Guarantee", desc: "100% accuracy verification with multi-level QA checks and human review." },
                { title: "Rapid Scaling", desc: "Scale from thousands to millions of data points without quality compromise." },
                { title: "Cost Efficient", desc: "Competitive pricing with flexible engagement models tailored to your budget." },
                { title: "Domain Expertise", desc: "Team with deep ML/AI knowledge ensures contextually accurate annotations." },
                { title: "Data Security", desc: "Enterprise-grade security protocols and ISO 27001 compliance for sensitive data." },
                { title: "24/7 Support", desc: "Round-the-clock project monitoring and support for seamless execution." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0369A1] to-[#38BDF8] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1F3D] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING NOTE */}
        <section className="w-full py-16 md:py-20 bg-[#0F1F3D] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Pricing Models</h2>
            <p className="text-lg text-gray-300 mb-8">
              We offer cost-per-unit, project-based, and dedicated team models.
              Get a custom quote based on your project volume and complexity.
            </p>
            <button className="bg-[#38BDF8] hover:bg-white text-[#0F1F3D] font-bold py-3 px-8 rounded-lg transition duration-200">
              Request Quote
            </button>
          </div>
        </section>

        {/* CTA FORM */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-4">Start Your Project Today</h2>
              <p className="text-lg text-gray-600">Let's discuss your data annotation needs and deliver high-quality results.</p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" required />
                  <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleFormChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]" />
                </div>
                <select name="projectSize" value={formData.projectSize} onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]">
                  <option value="">Select Project Size</option>
                  <option>Small (10K - 100K data points)</option>
                  <option>Medium (100K - 1M data points)</option>
                  <option>Large (1M+ data points)</option>
                </select>
                <textarea name="message" placeholder="Tell us about your annotation needs, data type, and timeline..." rows={5}
                  value={formData.message} onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0369A1]"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-[#0369A1] to-[#38BDF8] text-white font-bold py-4 rounded-lg hover:opacity-90 transition duration-200 text-lg">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
