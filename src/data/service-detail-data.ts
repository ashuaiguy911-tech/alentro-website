export interface ServicePageData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  extendedParagraphs: string[];
  processSteps: { title: string; description: string }[];
  whoItFor: string;
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
    extendedParagraphs: [
      "IT infrastructure is the foundation of every business operation. When your servers, network, storage, and workstations are architected correctly from day one, every business system — ERP, cloud, communication, backup — performs reliably and scales without emergency re-engineering. When infrastructure is ad-hoc or underdocumented, businesses pay for it repeatedly through downtime, poor performance, security gaps, and expensive retrofits.",
      "Alentro has designed and deployed IT infrastructure for businesses of 10 to 500 users across Mumbai since 2014. Our approach combines vendor-agnostic hardware recommendations, enterprise-grade physical installation, and thorough post-deployment documentation. We work with Tier-1 vendors — HP, Dell, Cisco, Netgear, Synology, and Lenovo — and procure at commercial pricing that typically undercuts direct retail by 15–25%.",
      "Infrastructure projects with Alentro cover the complete lifecycle. On the design side, we produce network topology diagrams, rack layout plans, IP address schemas, and hardware procurement lists with total-cost-of-ownership projections. During deployment, our certified engineers handle physical rack mounting, structured cabling (Cat 6/6A and fibre), server OS installation, hypervisor setup (VMware ESXi, Hyper-V, Proxmox), NAS/SAN configuration, and firewall and switch commissioning.",
      "We also deliver complete as-built documentation — network diagrams, IP registers, VLAN maps, credential vaults, and maintenance schedules — so your infrastructure is never a black box to your operations or future IT team. Every project closes with a commissioning test covering uptime verification, failover simulation, and performance benchmarking before final sign-off.",
    ],
    whoItFor:
      "Businesses opening a new office or branch, companies upgrading ageing server hardware, startups formalising their IT environment, and organisations that have outgrown their current infrastructure and need a structured redesign — typically 20–300 users.",
    processSteps: [
      {
        title: "Site Survey & Requirements Gathering",
        description:
          "Our engineers visit your site, document the current environment, understand business requirements and growth plans, and produce a detailed infrastructure blueprint.",
      },
      {
        title: "Design & Procurement",
        description:
          "We finalise network topology, hardware specifications, and software licensing — then procure from Tier-1 vendors at competitive pricing with verified warranties.",
      },
      {
        title: "Installation & Configuration",
        description:
          "On-site rack mounting, structured cabling, server OS deployment, virtualisation setup, NAS/SAN configuration, and switch and firewall commissioning by certified engineers.",
      },
      {
        title: "Testing & Commissioning",
        description:
          "End-to-end testing covering connectivity, failover scenarios, load benchmarking, and security hardening — all verified against agreed requirements before sign-off.",
      },
      {
        title: "Documentation & Knowledge Transfer",
        description:
          "Complete as-built documentation including network diagrams, IP register, credential vault, and user training so your team can manage day-to-day operations confidently.",
      },
    ],
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
    extendedParagraphs: [
      "An IT Annual Maintenance Contract is not simply a service agreement — it is a proactive insurance policy for your business continuity. Businesses in Mumbai that rely on reactive break-fix IT support experience significantly more downtime and higher total IT costs over time than those on structured preventive maintenance plans. Most outages do not begin as sudden failures; they accumulate from unchecked warning signs that a structured AMC programme catches and resolves before they escalate.",
      "Alentro's AMC plans are designed for Mumbai businesses that want predictable IT costs, defined response times, and a single point of accountability for all IT assets. Unlike ad-hoc support arrangements where you chase different vendors for every device, our AMC clients receive scheduled visits, priority response SLAs, and a dedicated account manager who knows your environment — not a call centre agent who sees your ticket for the first time.",
      "We cover the full range of IT assets under a single contract: servers, workstations, laptops, printers, scanners, networking equipment (routers, switches, firewalls, wireless access points), and UPS systems. Software coverage includes OS patching, antivirus management, license tracking, and application update coordination. Hardware coverage includes parts replacement for covered assets, on-site labour for repairs, and vendor coordination for warranty claims.",
      "Our AMC clients receive detailed quarterly IT health reports documenting maintenance performed, issues detected and resolved, asset health status, and upcoming risk areas. This gives business owners and IT managers full visibility into their IT environment without requiring deep technical knowledge. Businesses that track these reports consistently identify hardware replacement needs 3–6 months before failure rather than after.",
    ],
    whoItFor:
      "SMEs and mid-size businesses in Mumbai that want predictable IT maintenance costs, defined SLA responses, and proactive prevention rather than reactive firefighting. Particularly valuable for businesses with 20–200 workstations, dedicated server infrastructure, and limited in-house IT capability.",
    processSteps: [
      {
        title: "Asset Inventory & Baseline Health Check",
        description:
          "We visit your office, inventory all IT assets, perform a baseline health check, and document the current state of all hardware and software to be covered.",
      },
      {
        title: "AMC Plan Selection",
        description:
          "We recommend a plan (Comprehensive, Extended, or Basic) based on your asset count, criticality, and SLA requirements — with transparent annual pricing and no hidden costs.",
      },
      {
        title: "Contract Sign-Off & Onboarding",
        description:
          "Agreement is finalised covering assets, response SLAs, visit schedule, and escalation contacts. Remote monitoring tools are deployed where applicable.",
      },
      {
        title: "Scheduled Preventive Maintenance",
        description:
          "Our engineers perform scheduled visits for cleaning, diagnostics, firmware updates, patch management, backup verification, and performance benchmarking.",
      },
      {
        title: "Quarterly Health Reports & Review",
        description:
          "Every quarter you receive a detailed health report. We review upcoming risks, recommend upgrades, and adjust the plan as your asset base evolves.",
      },
    ],
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
    extendedParagraphs: [
      "For many Mumbai businesses, the right IT support model is not outsourced remote assistance — it is a dedicated professional present in the office every day. In-house IT support is the best model for organisations where end-user issues require immediate same-floor resolution, where server rooms need regular physical attention, or where the complexity of the environment demands someone who genuinely knows the systems, the people, and the vendors.",
      "Alentro's in-house IT support service places a qualified IT professional at your premises on your schedule — whether that is 8 hours per day five days a week, six days a week, or a custom arrangement matching your operations. Unlike hiring a full-time employee, you avoid recruitment costs, salary negotiations, benefits overhead, and replacement costs when the person resigns. Alentro manages all HR, training refreshes, and backup coverage when your assigned engineer is unavailable.",
      "Our in-house engineers are L2-qualified technical professionals with hands-on experience in Windows Server administration, Active Directory, networking fundamentals, virtualisation, endpoint management, and user support. Before deployment, each engineer is briefed on your specific environment — network topology, key systems, vendor contacts, and escalation paths — so they are productive from day one, not week three.",
      "Beyond daily support, our in-house engineers coordinate with Alentro's back-office L3 team for complex escalations, major project delivery, vendor management, and procurement assistance. You get the presence and familiarity of an in-house IT hire with the depth and redundancy of a full IT service provider behind them — at a cost typically 40–60% lower than an equivalent permanent hire when total employment costs are factored in.",
    ],
    whoItFor:
      "Businesses with 30–300 employees that need immediate on-site IT presence, companies replacing a departing IT hire without the time for permanent recruitment, and organisations that want a dedicated IT resource without the HR overhead of a permanent employee.",
    processSteps: [
      {
        title: "Requirement Assessment",
        description:
          "We assess your office size, IT environment complexity, user count, and operational hours to recommend the right engagement model and engineer profile.",
      },
      {
        title: "Engineer Selection & Briefing",
        description:
          "We match you with a pre-screened engineer with the right technical skillset. They are briefed on your environment, systems, vendors, and escalation contacts before day one.",
      },
      {
        title: "Onboarding & Environment Familiarisation",
        description:
          "The engineer documents your IT environment, builds a runbook, and establishes monitoring and ticketing processes during a structured first-week onboarding.",
      },
      {
        title: "Ongoing Daily Operations",
        description:
          "Your dedicated engineer handles user support, hardware troubleshooting, server maintenance, patch management, and vendor coordination as part of daily operations.",
      },
      {
        title: "Monthly Reporting & Escalation Support",
        description:
          "Monthly activity reports cover issues handled, hardware status, and recommendations. Our L3 back-office team is available for escalations beyond the engineer's scope.",
      },
    ],
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
    extendedParagraphs: [
      "A well-run IT helpdesk is invisible to most users — issues get resolved quickly and work continues without disruption. A poorly-run one creates frustration, lost productivity, and shadow IT, where users bypass IT systems entirely because they have given up on getting help. For Mumbai businesses without a structured IT support function, every unresolved issue is a direct cost in user downtime — compounded across a team of 50 or 500 people.",
      "Alentro's managed helpdesk gives your business a professional, structured IT support operation without the cost of building one internally. We provide a single point of contact — one phone number, one email address, one support portal — that handles every IT issue from password resets to server outages. Issues are logged automatically, assigned to the right tier, and tracked against agreed SLA windows with automatic escalation when thresholds approach.",
      "Our helpdesk operates on a proven three-tier model. L1 handles common user issues: password resets, email access, printer problems, software installation, VPN connectivity, and device setup. L2 handles deeper technical issues requiring investigation: network faults, application errors, user profile problems, and desktop imaging. L3 handles infrastructure-level incidents: server failures, network outages, security incidents, and cloud platform issues. Users never need to know which tier handles their issue — they contact one number and we route appropriately.",
      "Every month, clients receive a detailed performance report covering ticket volumes, resolution rates, SLA adherence percentages, top issue categories, and trend analysis. This data gives management clear visibility into IT support health and identifies systemic issues — like a recurring email configuration problem affecting 30 users — before they become chronic, expensive problems that damage productivity and morale.",
    ],
    whoItFor:
      "Businesses with distributed teams, multiple office locations, or high user counts that need structured IT support with accountability and reporting. Also ideal for companies moving away from ad-hoc 'call the IT guy' support to a professional managed service with defined SLAs.",
    processSteps: [
      {
        title: "Helpdesk Setup & Configuration",
        description:
          "We configure a ticketing system (or integrate with your existing one), set up support channels (phone, email, portal), and define SLA tiers and escalation paths.",
      },
      {
        title: "Environment Documentation",
        description:
          "Our team documents your IT environment, common issue categories, escalation contacts, and vendor details so the helpdesk team is fully briefed from day one.",
      },
      {
        title: "Go-Live & User Communication",
        description:
          "We issue helpdesk contact details to your team, communicate the support process, and run a two-week parallel period to iron out any initial gaps.",
      },
      {
        title: "Ongoing Ticket Management",
        description:
          "All user issues are logged, triaged, and resolved against agreed SLAs. Real-time dashboards give IT managers visibility into ticket status at any time.",
      },
      {
        title: "Monthly Reporting & Service Review",
        description:
          "Detailed monthly reports cover performance metrics, SLA adherence, recurring issues, and recommendations — plus a quarterly service review call with your account manager.",
      },
    ],
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
    extendedParagraphs: [
      "Networks and servers are the circulatory and nervous systems of your business. When they perform well, everything works. When they degrade — through configuration drift, firmware vulnerabilities, capacity exhaustion, or hardware failure — the impact is immediate and business-wide. Most IT outages are not sudden, unpredictable failures; they are the accumulation of small warning signs that were never monitored, caught, or addressed proactively.",
      "Alentro's network and server management service implements the monitoring, change management, and maintenance disciplines that prevent those accumulations. We deploy lightweight agents across your network and server estate that provide real-time visibility into CPU, memory, disk utilisation, bandwidth consumption, and hardware health metrics — with alerting thresholds configured to warn before systems reach failure states, not after they have already impacted users.",
      "Our scope covers the full on-premises and hybrid infrastructure stack: routers, switches (managed and unmanaged), firewalls, wireless access points, load balancers, physical and virtual servers (Windows Server, Linux), storage systems (NAS, SAN, DAS), and backup infrastructure. We manage firmware update schedules, patch cycles, configuration backups, and change logs — ensuring every change is documented, peer-reviewed, and reversible.",
      "For Mumbai businesses that have experienced network outages or server failures, we begin with a baseline infrastructure audit to identify vulnerabilities, configuration gaps, and capacity risks. This audit consistently reveals issues that have been building for months: expired TLS certificates, near-full disk volumes, outdated firmware with known CVEs, stale administrator accounts, and misconfigured firewall rules. Addressing these before they cause downtime is far less expensive than recovering from an outage.",
    ],
    whoItFor:
      "Businesses with on-premises server infrastructure, complex network environments with multiple VLANs or multi-site WAN connectivity, and organisations that have experienced repeated network issues and want structured proactive management rather than reactive firefighting.",
    processSteps: [
      {
        title: "Infrastructure Baseline Audit",
        description:
          "We audit your existing network and server environment, document current configuration, identify vulnerabilities and capacity risks, and produce a risk-prioritised remediation plan.",
      },
      {
        title: "Monitoring Deployment",
        description:
          "Lightweight monitoring agents are deployed across servers and network devices, with dashboards and alerting thresholds configured specifically to your environment.",
      },
      {
        title: "Remediation & Hardening",
        description:
          "We address audit findings: patch firmware, fix misconfigurations, renew certificates, clean up stale accounts, and implement network segmentation where needed.",
      },
      {
        title: "Ongoing Monitoring & Change Management",
        description:
          "24/7 monitoring with alert-based incident response. All changes follow a documented change management process with configuration backups before any modification.",
      },
      {
        title: "Monthly Review & Capacity Planning",
        description:
          "Monthly reports cover health metrics, incidents, changes performed, and capacity trends — with recommendations for upgrades before systems hit critical limits.",
      },
    ],
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
    extendedParagraphs: [
      "Cybersecurity threats are no longer the exclusive concern of large enterprises. Mumbai's SME sector is increasingly targeted by ransomware, phishing campaigns, and supply-chain attacks — precisely because smaller businesses are perceived as having weaker defences. CERT-In data shows a consistent year-on-year increase in cybersecurity incidents across Indian businesses, with SMEs disproportionately impacted due to lower investment in security controls relative to the data they hold.",
      "Alentro's cybersecurity practice delivers enterprise-grade security controls at SME-appropriate scale and cost. We are vendor-agnostic — working with Fortinet, Sophos, Cisco, Check Point, CrowdStrike, SentinelOne, and Microsoft Defender — and we recommend the right tool for your environment and threat profile rather than pushing a single vendor stack on every client.",
      "Engagements begin with a security assessment covering your perimeter security, endpoint posture, access controls, identity management, user behaviour, and compliance obligations (RBI guidelines, IRDAI, DPDP Act, ISO 27001, etc.). The assessment produces a risk-prioritised roadmap that guides implementation in phases aligned with your budget — addressing critical exposures first, then building towards a mature security posture over time.",
      "Firewall deployments go beyond basic packet filtering. We configure zone-based policies, application-layer inspection, intrusion prevention signatures, SSL inspection, and web content filtering calibrated to your business. For endpoints, we deploy EDR solutions that detect anomalous behaviour in real time — providing protection against zero-day threats and fileless malware that signature-based antivirus cannot catch. We also run phishing simulations and security awareness training, because the human layer remains the most frequently exploited attack vector in Indian SMEs.",
    ],
    whoItFor:
      "Businesses in regulated industries (BFSI, healthcare, manufacturing), companies that have experienced a security incident, organisations preparing for ISO 27001 or SOC 2 certification, and any Mumbai business that recognises cyber risk as a board-level concern.",
    processSteps: [
      {
        title: "Security Assessment",
        description:
          "Comprehensive audit of your perimeter, endpoints, access controls, and compliance obligations — producing a risk-prioritised security roadmap and gap analysis.",
      },
      {
        title: "Firewall & Perimeter Hardening",
        description:
          "NGFW deployment and configuration (Fortinet, Sophos, Cisco) with application control, IPS, SSL inspection, and web filtering policies tuned to your business.",
      },
      {
        title: "Endpoint Security Deployment",
        description:
          "EDR deployment across all devices for real-time threat detection and response — replacing legacy antivirus with behaviour-based protection against modern threats.",
      },
      {
        title: "Access Management & Policy Design",
        description:
          "MFA implementation, role-based access controls, password policy enforcement, privileged access management, and formal security policy documentation.",
      },
      {
        title: "Ongoing Monitoring & Training",
        description:
          "24/7 security event monitoring, quarterly vulnerability assessments, annual penetration testing, and employee phishing simulations and awareness training.",
      },
    ],
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
    extendedParagraphs: [
      "Cloud adoption in Indian businesses has accelerated sharply — but adoption without proper architecture, governance, and cost management creates its own set of problems. Many Mumbai businesses that moved workloads to AWS or Azure quickly discover they are paying for idle compute resources, using the wrong service tiers for their workload patterns, or lacking the monitoring and governance frameworks needed to control costs as their cloud footprint grows.",
      "Alentro's cloud practice supports businesses at every stage of the cloud journey. For those planning their first migration, we conduct a cloud readiness assessment — evaluating current infrastructure, application dependencies, data sovereignty requirements, and business continuity objectives to produce a migration strategy with total-cost-of-ownership projections comparing on-premises versus cloud over a three-year horizon.",
      "For businesses already in the cloud, we conduct a Well-Architected Review aligned to AWS, Azure, or GCP frameworks — identifying cost optimisation, reliability improvement, security gap, and operational efficiency opportunities. Cloud bills with 30–40% waste are common among businesses that migrated without a FinOps discipline, and a structured review consistently finds significant savings within the first 90 days.",
      "Our certified cloud engineers hold AWS, Microsoft Azure, and Google Cloud certifications. Migrations use a phased approach: lift-and-shift for non-critical workloads first to validate the architecture and establish operational procedures, with re-architecture for performance-sensitive applications where the ROI justifies it. Post-migration, we provide managed cloud operations including infrastructure monitoring, cost management, security posture management, patch management, and 24/7 incident response.",
    ],
    whoItFor:
      "Businesses planning their first cloud migration, companies already in the cloud experiencing cost overruns or performance issues, organisations building cloud-native applications, and businesses that need hybrid (on-premises + cloud) architecture design and management.",
    processSteps: [
      {
        title: "Cloud Readiness Assessment",
        description:
          "We evaluate your infrastructure, application portfolio, data requirements, and business continuity objectives to produce a migration strategy and three-year TCO projection.",
      },
      {
        title: "Architecture Design",
        description:
          "Cloud architecture design using platform best practices for AWS, Azure, or GCP — covering compute, storage, networking, security controls, and cost optimisation patterns.",
      },
      {
        title: "Pilot Migration",
        description:
          "Non-critical workloads are migrated first to validate the architecture, establish operations procedures, and build team confidence before committing to full cutover.",
      },
      {
        title: "Full Migration",
        description:
          "Phased migration of all workloads using zero-downtime strategies — with parallel running, defined cutover windows, and tested rollback plans for each workload.",
      },
      {
        title: "Managed Cloud Operations",
        description:
          "Ongoing FinOps cost optimisation, security posture management, performance monitoring, patch management, and 24/7 incident response post-migration.",
      },
    ],
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
    extendedParagraphs: [
      "IT projects and operational demands do not wait for permanent hiring cycles. Whether you are facing a sudden team expansion, a specific project requiring skills your team does not possess, a resignation that has left a critical gap, or simply a seasonal spike in IT demand — waiting 60–90 days for a permanent hire to be recruited, interviewed, onboarded, and productive is not viable. IT staff augmentation gives you the talent you need, at the time you need it.",
      "Alentro's staff augmentation service draws on an active roster of pre-screened IT professionals across infrastructure, networking, cloud, cybersecurity, and helpdesk roles. All candidates are technically vetted by our internal team before being presented to clients. You are not reviewing raw CVs from a job board — you are selecting from people we have already assessed for technical competence, communication skills, and professional conduct through structured evaluations.",
      "Engagement models are flexible to match how your business actually works. Some clients need a single infrastructure engineer for a six-month project. Others need three helpdesk agents for a year while they build internal capacity. Some need a cloud architect for a 90-day migration followed by a DevOps engineer for ongoing operations. We accommodate all these models with contracts that can be extended, scaled up, or wound down with 30-day notice — no lock-in penalties.",
      "Beyond individual placements, Alentro provides contractual performance assurance: if a placed professional does not meet performance expectations within the first 30 days, we replace them at no additional cost. This guarantee — which permanent hiring simply cannot offer — makes staff augmentation a lower-risk model for filling critical roles quickly, particularly for businesses that have previously had poor experiences with independent contractor searches.",
    ],
    whoItFor:
      "Businesses that need to fill an IT skills gap quickly, project teams that need additional capacity for a defined period, companies managing the transition between a departing and incoming IT hire, and organisations with fluctuating IT demand that does not justify permanent headcount.",
    processSteps: [
      {
        title: "Requirement Definition",
        description:
          "We document the role scope, technical skills required, engagement duration, working hours, and management structure to build a precise candidate brief.",
      },
      {
        title: "Candidate Screening & Presentation",
        description:
          "Our internal team screens candidates from our roster and presents 2–3 pre-vetted profiles with technical assessment results and professional references.",
      },
      {
        title: "Interview & Selection",
        description:
          "You interview shortlisted candidates and make the final selection. Most clients complete this step within 3–5 business days of receiving profiles.",
      },
      {
        title: "Deployment & Onboarding",
        description:
          "Selected engineers are deployed on your agreed start date. Alentro handles all contracting, payroll, and compliance — you manage day-to-day work direction.",
      },
      {
        title: "Ongoing Oversight & Replacement Guarantee",
        description:
          "Monthly check-ins with client and engineer. 30-day replacement guarantee if performance does not meet expectations — at no additional cost to you.",
      },
    ],
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
    extendedParagraphs: [
      "Technology decisions are business decisions. A poorly-chosen ERP system, a premature cloud migration, a vendor lock-in that limits future flexibility, or a skipped compliance obligation can cost a business significantly more than the technology investment itself. Yet most Mumbai SMEs make these decisions without independent, vendor-neutral advice — relying instead on proposals from vendors and integrators who have a direct financial interest in the outcome.",
      "Alentro's IT consulting practice provides the independent advisory layer that protects businesses from expensive technology mistakes. Our consultants bring 10+ years of real-world IT delivery experience across Indian businesses — not theoretical frameworks, but practical knowledge of what works at SME scale in the Mumbai and Pan-India business context, including the realities of local vendor performance, infrastructure constraints, and regulatory requirements.",
      "Consulting engagements typically begin with an IT maturity assessment: we evaluate your current technology landscape, team capabilities, existing processes, vendor relationships, and spend patterns to understand where you are and where you need to be. From this baseline, we develop a 12–36 month IT roadmap that prioritises initiatives by business impact, cost, and implementation risk — giving you a clear, actionable plan rather than a 200-page document that collects dust.",
      "We also provide targeted advisory for specific decisions: ERP selection and implementation oversight, cloud vendor evaluation, cybersecurity tool procurement, IT outsourcing versus insourcing trade-offs, data centre consolidation, and regulatory compliance planning (IT Act, DPDP Act 2023, RBI guidelines, IRDAI requirements). For clients undergoing significant business change — acquisitions, office expansions, or digital transformation programmes — we offer virtual CIO (vCIO) services, acting as a senior IT advisor at the leadership level without the cost of a full-time senior hire.",
    ],
    whoItFor:
      "Business owners and CTOs making significant IT investment decisions, companies preparing for rapid growth and needing scalable IT architecture, organisations navigating regulatory compliance requirements, and businesses that have experienced costly IT failures and want independent advisory before the next major technology decision.",
    processSteps: [
      {
        title: "IT Maturity Assessment",
        description:
          "We evaluate your current technology landscape, team capabilities, vendor relationships, and spend patterns to understand your starting point and key risk areas.",
      },
      {
        title: "Strategic Roadmap Development",
        description:
          "A 12–36 month IT roadmap is developed, prioritising initiatives by business impact, cost, and implementation risk — with clear milestones and budget estimates.",
      },
      {
        title: "Vendor & Technology Evaluation",
        description:
          "For specific procurement decisions, we evaluate vendor proposals independently, conduct reference checks, and provide a recommendation with clear trade-off analysis.",
      },
      {
        title: "Implementation Oversight",
        description:
          "For major IT projects (ERP, cloud, infrastructure), we provide project oversight — reviewing deliverables, managing milestones, and protecting your interests throughout.",
      },
      {
        title: "Ongoing Advisory Retainer",
        description:
          "Monthly vCIO advisory sessions to review IT performance, discuss emerging risks, plan upcoming initiatives, and provide on-call strategic guidance as needed.",
      },
    ],
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
