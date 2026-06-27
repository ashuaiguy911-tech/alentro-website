import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import { services } from "@/components/Services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services | Alentro Global Services",
  description:
    "Explore our full range of IT services: Infrastructure Setup, AMC, Helpdesk, Cloud Services (AWS, Azure, GCP), Cybersecurity, Staff Augmentation and IT Consulting.",
};

const serviceDetails: Record<string, { fullDescription: string; benefits: string[] }> = {
  "IT Infrastructure Setup": {
    fullDescription:
      "We design, deploy, and commission complete IT infrastructure solutions tailored to your business requirements. From hardware procurement to rack-and-stack, cabling, OS deployment, and end-to-end testing — we handle every aspect of your infrastructure lifecycle.",
    benefits: [
      "Complete hardware and software procurement assistance",
      "Data centre and server room design",
      "Network architecture and cabling",
      "Server, storage, and virtualisation setup",
      "Post-deployment testing and documentation",
    ],
  },
  "Annual Maintenance Contracts (AMC)": {
    fullDescription:
      "Our AMC plans provide comprehensive coverage for all your IT assets — hardware, software, and network equipment. Proactive maintenance, quarterly health checks, and on-site support ensure your systems remain reliable year-round.",
    benefits: [
      "Scheduled preventive maintenance visits",
      "Priority on-site and remote support",
      "Hardware replacement and repair coverage",
      "Quarterly IT health reports",
      "Dedicated account manager",
    ],
  },
  "In-House IT Support": {
    fullDescription:
      "We provide trained and certified IT professionals who work as embedded members of your team. Our in-house support engineers handle day-to-day IT operations, user support, and system administration — freeing your staff to focus on core business.",
    benefits: [
      "Dedicated on-site IT professional",
      "Immediate same-floor issue resolution",
      "Hardware and software troubleshooting",
      "User onboarding and training",
      "Flexible engagement models",
    ],
  },
  "Helpdesk Services": {
    fullDescription:
      "Our multi-tier helpdesk solution ensures every user issue is logged, tracked, and resolved within defined SLA windows. We support L1, L2, and L3 escalation paths with real-time ticket dashboards and detailed reporting.",
    benefits: [
      "Single point of contact for all IT issues",
      "Multi-channel support: phone, email, portal",
      "Defined SLA response and resolution times",
      "Detailed monthly SLA and performance reports",
      "L1/L2/L3 escalation management",
    ],
  },
  "Network and Server Management": {
    fullDescription:
      "Proactive monitoring, management, and optimisation of your entire network and server estate. We handle routers, switches, firewalls, NAS/SAN, and server infrastructure — ensuring maximum performance and uptime.",
    benefits: [
      "24/7 network and server monitoring",
      "Configuration management and change control",
      "Performance tuning and capacity planning",
      "Firmware and patch management",
      "Incident response and root cause analysis",
    ],
  },
  "Firewall and Cybersecurity Solutions": {
    fullDescription:
      "Protect your organisation with enterprise-grade cybersecurity solutions. We deploy and manage next-generation firewalls, conduct vulnerability assessments, implement endpoint security, and establish security policies aligned with industry standards.",
    benefits: [
      "NGFW deployment and configuration (Fortinet, Sophos, Cisco)",
      "Vulnerability assessment and penetration testing",
      "Endpoint detection and response (EDR)",
      "Security policy design and implementation",
      "Employee security awareness training",
    ],
  },
  "Cloud Services (AWS, Azure, GCP)": {
    fullDescription:
      "Whether you are migrating to the cloud, optimising your existing cloud spend, or building cloud-native applications, our certified cloud engineers deliver expert solutions across AWS, Microsoft Azure, and Google Cloud Platform.",
    benefits: [
      "Cloud migration assessment and planning",
      "Architecture design and implementation",
      "Cost optimisation and FinOps advisory",
      "Managed cloud operations and monitoring",
      "Backup, DR, and business continuity",
    ],
  },
  "Staff Augmentation": {
    fullDescription:
      "Scale your IT team quickly and cost-effectively with our staff augmentation services. We source, screen, and deploy experienced IT professionals — from helpdesk engineers to cloud architects — on short or long-term contracts.",
    benefits: [
      "Pre-screened and certified IT professionals",
      "Rapid deployment within 5–10 business days",
      "Flexible short-term and long-term contracts",
      "All verticals: infrastructure, cloud, security, development",
      "No hiring overhead or HR hassle",
    ],
  },
  "IT Consulting": {
    fullDescription:
      "Our experienced IT consultants help you make informed technology decisions aligned with your business strategy. From IT roadmap planning to technology vendor selection and digital transformation advisory — we bring clarity and confidence to your IT investments.",
    benefits: [
      "IT strategy and roadmap development",
      "Technology assessment and vendor selection",
      "Digital transformation advisory",
      "IT budget planning and TCO analysis",
      "Compliance and risk management guidance",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="services-hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h1
              id="services-hero-heading"
              className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              End-to-End IT Services for{" "}
              <span style={{ color: "var(--color-accent-light)" }}>
                Indian Businesses
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              From infrastructure setup to cloud migrations, cybersecurity to
              helpdesk — we have the expertise to cover every dimension of your
              IT requirements.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="all-services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="all-services-heading" className="sr-only">
              All Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                const detail = serviceDetails[service.name];
                return (
                  <article
                    key={service.name}
                    className="bg-white rounded-xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                    aria-labelledby={`service-${service.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0 p-3"
                        style={{ background: "var(--color-navy-50)" }}
                      >
                        <Icon size={24} className="text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h3
                          id={`service-${service.name.replace(/\s+/g, "-").toLowerCase()}`}
                          className="text-xl font-bold text-primary"
                        >
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-5">
                      {detail?.fullDescription ?? service.description}
                    </p>
                    {detail?.benefits && (
                      <ul className="space-y-2 mb-6">
                        {detail.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "var(--color-accent)" }}
                              aria-hidden="true"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dark transition-colors duration-200 cursor-pointer"
                      aria-label={`Get a quote for ${service.name}`}
                    >
                      Get a Quote →
                    </Link>
                  </article>
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
