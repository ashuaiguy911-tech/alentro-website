export interface ServicePageData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  schemaName: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "it-infrastructure-setup",
    name: "IT Infrastructure Setup",
    h1: "IT Infrastructure Setup in Mumbai — End-to-End Deployment",
    metaTitle: "IT Infrastructure Setup Mumbai | Servers, Network & Storage",
    metaDescription:
      "Expert IT infrastructure setup in Mumbai: servers, storage, networking, and workstations. Alentro Global Services designs and deploys complete infrastructure for SMEs.",
    keywords:
      "IT infrastructure setup Mumbai, server installation Mumbai, network setup Mumbai, IT infrastructure company India, server room setup Mumbai",
    schemaName: "IT Infrastructure Setup Mumbai",
    shortDescription:
      "Complete end-to-end infrastructure design and deployment — servers, storage, networking, and workstations tailored to your business scale.",
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
  {
    slug: "annual-maintenance-contracts",
    name: "Annual Maintenance Contracts (AMC)",
    h1: "IT AMC Company in Mumbai — Annual Maintenance Contracts",
    metaTitle: "IT AMC Company Mumbai | Annual Maintenance Contracts",
    metaDescription:
      "Comprehensive IT AMC in Mumbai covering hardware, software, and network maintenance. Quarterly health checks, on-site support, and dedicated account management.",
    keywords:
      "IT AMC Mumbai, annual maintenance contract Mumbai, computer AMC Mumbai, IT maintenance company Mumbai, hardware AMC Mumbai, IT support contract Mumbai",
    schemaName: "Annual Maintenance Contracts (AMC) Mumbai",
    shortDescription:
      "Comprehensive AMC plans covering hardware, software, and network maintenance to keep your IT assets running at peak performance.",
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
  {
    slug: "in-house-it-support",
    name: "In-House IT Support",
    h1: "Dedicated In-House IT Support for Mumbai Businesses",
    metaTitle: "In-House IT Support Mumbai | Dedicated On-Site IT Engineers",
    metaDescription:
      "Dedicated on-site IT professionals for Mumbai businesses. Alentro embeds certified engineers within your team for immediate IT support, user training, and system administration.",
    keywords:
      "in-house IT support Mumbai, on-site IT support Mumbai, dedicated IT staff Mumbai, IT support outsourcing Mumbai, managed IT support India",
    schemaName: "In-House IT Support Mumbai",
    shortDescription:
      "Dedicated on-site IT professionals embedded within your organisation to provide immediate, expert technical assistance.",
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
  {
    slug: "helpdesk-services",
    name: "Helpdesk Services",
    h1: "IT Helpdesk Services Mumbai — 24/7 Multi-Tier Support",
    metaTitle: "IT Helpdesk Services Mumbai | 24/7 L1/L2/L3 Support",
    metaDescription:
      "24/7 IT helpdesk in Mumbai with L1, L2, and L3 support tiers. Single point of contact, defined SLA windows, real-time ticket dashboards, and monthly performance reports.",
    keywords:
      "IT helpdesk Mumbai, 24/7 IT support Mumbai, helpdesk services India, IT support desk Mumbai, managed helpdesk Mumbai, remote IT support Mumbai",
    schemaName: "Helpdesk Services Mumbai",
    shortDescription:
      "Multi-tier helpdesk support with rapid ticket resolution, SLA tracking, and seamless escalation paths for your team.",
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
  {
    slug: "network-server-management",
    name: "Network and Server Management",
    h1: "Network & Server Management in Mumbai — 24/7 Monitoring",
    metaTitle: "Network & Server Management Mumbai | 24/7 Monitoring",
    metaDescription:
      "Proactive network and server management in Mumbai: LAN/WAN monitoring, router and switch management, firmware updates, and 24/7 incident response for Indian businesses.",
    keywords:
      "network management Mumbai, server management Mumbai, IT network monitoring India, LAN WAN management Mumbai, server monitoring Mumbai, network support company Mumbai",
    schemaName: "Network and Server Management Mumbai",
    shortDescription:
      "Proactive monitoring, management, and optimisation of your entire network and server estate.",
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
  {
    slug: "cybersecurity-solutions",
    name: "Firewall and Cybersecurity Solutions",
    h1: "Cybersecurity Company in Mumbai — NGFW, EDR & Pen Testing",
    metaTitle: "Cybersecurity Company Mumbai | Firewall, EDR & Pen Testing",
    metaDescription:
      "Enterprise cybersecurity in Mumbai: NGFW deployment (Fortinet, Sophos, Cisco), vulnerability assessment, penetration testing, EDR, and security awareness training.",
    keywords:
      "cybersecurity company Mumbai, firewall solutions Mumbai, cybersecurity services India, network security Mumbai, penetration testing Mumbai, EDR solutions India, Fortinet partner Mumbai",
    schemaName: "Cybersecurity Solutions Mumbai",
    shortDescription:
      "Enterprise-grade firewall deployment, vulnerability assessment, intrusion detection, and end-to-end security policy implementation.",
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
  {
    slug: "cloud-services",
    name: "Cloud Services (AWS, Azure, GCP)",
    h1: "Cloud Migration Company in Mumbai — AWS, Azure & GCP",
    metaTitle: "Cloud Migration Company Mumbai | AWS, Azure, GCP Services",
    metaDescription:
      "Expert cloud migration in Mumbai: AWS, Microsoft Azure, and Google Cloud. Assessment, architecture, zero-downtime migration, FinOps, and managed cloud operations.",
    keywords:
      "cloud migration Mumbai, AWS partner Mumbai, Azure partner India, GCP services Mumbai, cloud services company Mumbai, cloud computing India, managed cloud services Mumbai",
    schemaName: "Cloud Services Mumbai (AWS, Azure, GCP)",
    shortDescription:
      "Cloud migration, architecture design, cost optimisation, and managed cloud operations across AWS, Microsoft Azure, and Google Cloud.",
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
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    h1: "IT Staff Augmentation in Mumbai — Certified IT Professionals",
    metaTitle: "IT Staff Augmentation Mumbai | Certified IT Professionals",
    metaDescription:
      "Scale your IT team with Alentro's staff augmentation in Mumbai. Pre-screened certified engineers deployed in 5–10 days on flexible short or long-term contracts.",
    keywords:
      "IT staff augmentation Mumbai, IT staffing company Mumbai, IT outsourcing Mumbai, IT contractors India, temporary IT staff Mumbai, IT resource augmentation India",
    schemaName: "IT Staff Augmentation Mumbai",
    shortDescription:
      "Flexible IT talent solutions to supplement your team — from short-term project needs to long-term managed staffing.",
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
  {
    slug: "it-consulting",
    name: "IT Consulting",
    h1: "IT Consulting Company in Mumbai — Strategy & Roadmap",
    metaTitle: "IT Consulting Company Mumbai | IT Strategy & Digital Transformation",
    metaDescription:
      "IT consulting in Mumbai: IT strategy, roadmap planning, vendor selection, budget planning, digital transformation advisory, and compliance guidance for Indian businesses.",
    keywords:
      "IT consulting company Mumbai, IT strategy consulting India, digital transformation Mumbai, IT advisory services Mumbai, technology consulting India, CIO advisory Mumbai",
    schemaName: "IT Consulting Mumbai",
    shortDescription:
      "Strategic IT advisory to align technology investments with your business goals, roadmaps, and digital transformation initiatives.",
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
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}
