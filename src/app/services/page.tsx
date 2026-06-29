import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services Mumbai | Infrastructure, Cloud, Cybersecurity & More",
  description:
    "Alentro Global Services offers complete IT services in Mumbai: IT Infrastructure Setup, AMC, Helpdesk, Cloud Migration (AWS/Azure/GCP), Cybersecurity, Network Management, and IT Consulting for businesses across Mumbai and India.",
  keywords:
    "IT services Mumbai, IT infrastructure Mumbai, cloud migration Mumbai, cybersecurity Mumbai, AMC Mumbai, helpdesk services Mumbai, network management Mumbai, IT consulting Mumbai, AWS Azure GCP Mumbai, managed IT services Mumbai",
  alternates: {
    canonical: "https://alentro-website.vercel.app/services",
  },
};

const servicesCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IT Services by Alentro Global Services Mumbai",
  description:
    "Complete IT services for businesses in Mumbai and across India",
  url: "https://alentro-website.vercel.app/services",
  provider: {
    "@type": "Organization",
    name: "Alentro Global Services",
    url: "https://alentro-website.vercel.app",
    "@id": "https://alentro-website.vercel.app/#organization",
  },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "IT Infrastructure Setup Mumbai",
        description:
          "Complete end-to-end IT infrastructure design and deployment — servers, storage, networking, and workstations tailored for businesses in Mumbai.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Annual Maintenance Contracts (AMC) Mumbai",
        description:
          "Comprehensive AMC plans covering hardware, software, and network maintenance for businesses in Mumbai and across India.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Helpdesk Services Mumbai",
        description:
          "Multi-tier helpdesk support with rapid ticket resolution, SLA tracking, and seamless escalation paths.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Cloud Services Mumbai (AWS, Azure, GCP)",
        description:
          "Cloud migration, architecture design, cost optimisation, and managed cloud operations across AWS, Microsoft Azure, and Google Cloud for Mumbai businesses.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Cybersecurity Solutions Mumbai",
        description:
          "Enterprise-grade firewall deployment, vulnerability assessment, intrusion detection, and end-to-end security policy implementation in Mumbai.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Network and Server Management Mumbai",
        description:
          "Proactive monitoring, configuration, and optimisation of LAN/WAN infrastructure, routers, switches, and servers.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "IT Consulting Mumbai",
        description:
          "Strategic IT advisory to align technology investments with business goals, roadmaps, and digital transformation initiatives.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "Mumbai, India",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Staff Augmentation IT Mumbai",
        description:
          "Flexible IT talent solutions to supplement your team — from short-term project needs to long-term managed staffing across India.",
        provider: { "@id": "https://alentro-website.vercel.app/#organization" },
        areaServed: "India",
      },
    },
  ],
};

const breadcrumbServicesSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://alentro-website.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IT Services",
      item: "https://alentro-website.vercel.app/services",
    },
  ],
};

const howToSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to migrate your business to the cloud",
    description:
      "Step-by-step guide to migrating your IT infrastructure to AWS, Azure, or GCP with Alentro Global Services.",
    totalTime: "P30D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Cloud Readiness Assessment",
        text: "Our certified cloud architects assess your current infrastructure, applications, and data to determine cloud readiness, map dependencies, and estimate migration costs.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Cloud Strategy and Architecture Design",
        text: "We design a tailored cloud architecture on AWS, Azure, or GCP — selecting the right services, regions, and cost-optimisation strategies for your business goals.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Pilot Migration",
        text: "A phased migration plan is created with zero-downtime strategies. Non-critical workloads are migrated first to validate the approach before full cutover.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Full Cloud Migration",
        text: "We execute the full migration with continuous monitoring, ensuring all applications, data, and services move with no data loss and minimal disruption.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Post-Migration Managed Operations",
        text: "Alentro provides ongoing cloud management, cost optimisation, security monitoring, and 24/7 support after migration is complete.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to set up IT infrastructure for your business",
    description:
      "Step-by-step process for designing and deploying complete IT infrastructure for your Mumbai or India-based business.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "IT Needs Assessment",
        text: "We assess your business size, growth plans, compliance needs, and current IT state to produce an infrastructure blueprint.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Infrastructure Design and Procurement",
        text: "Our engineers design the server, storage, network, and workstation architecture and assist with hardware and software procurement at competitive pricing.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Installation and Configuration",
        text: "On-site rack-and-stack, cabling, OS deployment, server and network configuration executed by our certified professionals.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Testing and Commissioning",
        text: "End-to-end testing of all systems, network connectivity, failover scenarios, and performance benchmarking before handover.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Documentation and Ongoing AMC",
        text: "Complete as-built documentation, user training, and AMC options are provided to keep your infrastructure running long-term.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to protect your business from cyber threats",
    description:
      "A step-by-step guide to implementing enterprise cybersecurity for your business with Alentro Global Services.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Security Audit",
        text: "We conduct a comprehensive IT security audit covering network vulnerabilities, endpoint gaps, access controls, and regulatory compliance requirements.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Firewall and Perimeter Security",
        text: "Next-generation firewalls (Fortinet, Sophos, Cisco) are deployed and configured with custom security policies suited to your business.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Endpoint Security",
        text: "Endpoint Detection and Response (EDR) solutions are deployed across all devices to detect and neutralise threats in real time.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Access Management and Security Policies",
        text: "Security policies, MFA, role-based access controls, and data protection protocols are established and documented.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Ongoing Monitoring and Training",
        text: "24/7 security monitoring, regular vulnerability assessments, and employee security awareness training keep defences current.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to choose the right IT AMC plan for your business",
    description:
      "A practical guide to selecting the best Annual Maintenance Contract for your business IT assets in Mumbai.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Inventory Your IT Assets",
        text: "List all hardware (servers, workstations, printers, network devices) and software assets requiring maintenance coverage.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Define SLA Requirements",
        text: "Determine acceptable response and resolution times, support hours (business hours vs. 24/7), and on-site vs. remote support needs.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Request a Customised AMC Proposal",
        text: "Contact Alentro Global Services at +91-7045400592 for a tailored AMC proposal covering your specific assets and SLA requirements.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Review Coverage and Exclusions",
        text: "Carefully review what is covered (parts, labour, software updates) and any exclusions before signing the AMC agreement.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Onboarding and Asset Documentation",
        text: "Alentro conducts a baseline IT health check and documents all assets to kick off the scheduled maintenance programme.",
      },
    ],
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCatalogSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbServicesSchema).replace(/</g, "\\u003c") }}
      />
      {howToSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
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
