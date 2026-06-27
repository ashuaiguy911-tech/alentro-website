import {
  Server,
  ClipboardList,
  Users,
  Headphones,
  Network,
  Shield,
  Cloud,
  UserPlus,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Server,
    name: "IT Infrastructure Setup",
    description:
      "Complete end-to-end infrastructure design and deployment — servers, storage, networking, and workstations tailored to your business scale.",
  },
  {
    icon: ClipboardList,
    name: "Annual Maintenance Contracts (AMC)",
    description:
      "Comprehensive AMC plans covering hardware, software, and network maintenance to keep your IT assets running at peak performance.",
  },
  {
    icon: Users,
    name: "In-House IT Support",
    description:
      "Dedicated on-site IT professionals embedded within your organisation to provide immediate, expert technical assistance.",
  },
  {
    icon: Headphones,
    name: "Helpdesk Services",
    description:
      "Multi-tier helpdesk support with rapid ticket resolution, SLA tracking, and seamless escalation paths for your team.",
  },
  {
    icon: Network,
    name: "Network and Server Management",
    description:
      "Proactive monitoring, configuration, and optimisation of your LAN/WAN infrastructure, routers, switches, and servers.",
  },
  {
    icon: Shield,
    name: "Firewall and Cybersecurity Solutions",
    description:
      "Enterprise-grade firewall deployment, vulnerability assessment, intrusion detection, and end-to-end security policy implementation.",
  },
  {
    icon: Cloud,
    name: "Cloud Services (AWS, Azure, GCP)",
    description:
      "Cloud migration, architecture design, cost optimisation, and managed cloud operations across AWS, Microsoft Azure, and Google Cloud.",
  },
  {
    icon: UserPlus,
    name: "Staff Augmentation",
    description:
      "Flexible IT talent solutions to supplement your team — from short-term project needs to long-term managed staffing.",
  },
  {
    icon: Lightbulb,
    name: "IT Consulting",
    description:
      "Strategic IT advisory to align technology investments with your business goals, roadmaps, and digital transformation initiatives.",
  },
];
