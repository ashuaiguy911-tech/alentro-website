"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What IT services does Alentro Global Services offer?",
    answer:
      "Alentro Global Services offers a comprehensive range of IT services including IT Infrastructure Setup, Annual Maintenance Contracts (AMC), In-House IT Support, Helpdesk Services, Network and Server Management, Firewall and Cybersecurity Solutions, Cloud Services (AWS, Azure, GCP), Staff Augmentation, and IT Consulting — all available for businesses in Mumbai and across India.",
  },
  {
    question: "How much does IT AMC cost in Mumbai?",
    answer:
      "IT AMC costs in Mumbai vary based on the number of devices, scope of coverage, and SLA requirements. Alentro Global Services offers customised AMC plans for businesses of all sizes — from SMEs to large enterprises. Contact us at +91-7045400592 for a free assessment and tailored quote.",
  },
  {
    question: "Does Alentro provide 24/7 IT support?",
    answer:
      "Yes, Alentro Global Services provides 24/7 IT support for businesses in Mumbai and across India. Our helpdesk is available round-the-clock via phone, email, and WhatsApp (+91-7045400592) to keep your IT systems operational at all times.",
  },
  {
    question: "Which areas in Mumbai does Alentro serve?",
    answer:
      "Alentro Global Services serves all areas across Mumbai including South Mumbai, Bandra, Kurla, Andheri, Powai, Navi Mumbai, Thane, and the entire Mumbai Metropolitan Region (MMR). We also provide Pan-India IT services.",
  },
  {
    question: "What is the response time for IT support?",
    answer:
      "Alentro Global Services guarantees defined SLA response times based on priority: critical issues within 1 hour, high-priority within 4 hours, and standard issues within 8 business hours. On-site support is typically deployed same business day for clients in Mumbai.",
  },
  {
    question: "Does Alentro offer cloud migration services?",
    answer:
      "Yes, Alentro Global Services provides end-to-end cloud migration services across AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our process covers assessment, architecture design, zero-downtime migration execution, and post-migration managed operations.",
  },
  {
    question: "What cybersecurity services does Alentro provide?",
    answer:
      "Alentro Global Services provides comprehensive cybersecurity solutions including Next-Generation Firewall deployment and management (Fortinet, Sophos, Cisco), vulnerability assessment and penetration testing, Endpoint Detection and Response (EDR), security policy design, network intrusion detection, and employee security awareness training.",
  },
  {
    question: "How do I get a free IT consultation?",
    answer:
      "You can get a free IT consultation from Alentro Global Services by calling +91-7045400592, WhatsApp-ing the same number, or filling out the contact form on our website. Our team typically responds within 4 business hours.",
  },
  {
    question: "Does Alentro serve businesses outside Mumbai?",
    answer:
      "Yes, Alentro Global Services operates Pan-India, serving businesses in Mumbai, Pune, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, and other major Indian cities. We have served 500+ clients across India since 2014.",
  },
  {
    question: "What industries does Alentro Global Services serve?",
    answer:
      "Alentro Global Services provides IT solutions across multiple industries including Manufacturing, Retail, Healthcare, BFSI (Banking, Financial Services and Insurance), Education, Logistics, Real Estate, Professional Services, and Hospitality — with solutions customised for each sector's compliance and operational needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-primary"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Common questions about our IT services in Mumbai and across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-semibold text-primary leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: "var(--color-accent)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  hidden={!isOpen}
                >
                  <p className="px-6 pb-5 text-text-muted leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
