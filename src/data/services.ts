import {
  Briefcase,
  ClipboardList,
  Users,
  Headphones,
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
    icon: Briefcase,
    name: "Managed Outsourced Operations",
    description:
      "Run your sales and customer support operations without the overhead. We staff, manage, and scale outbound sales seats, inbound support desks, and dedicated IT talent—all under one contract, one SLA, one point of accountability.",
  },
  {
    icon: UserPlus,
    name: "Staff Augmentation",
    description:
      "Flexible, skilled IT professionals embedded with your team. Scale your workforce for projects or ongoing support without the hiring overhead or long-term fixed costs.",
  },
  {
    icon: Headphones,
    name: "Managed Helpdesk & IT Support",
    description:
      "24/7 multi-tier helpdesk and on-site IT support with rapid ticket resolution, proactive monitoring, SLA tracking, and seamless escalation for your organization.",
  },
  {
    icon: ClipboardList,
    name: "Annual Maintenance Contracts (AMC)",
    description:
      "Comprehensive AMC plans covering hardware, software, network maintenance, and infrastructure monitoring to keep your IT assets running at peak performance.",
  },
  {
    icon: Cloud,
    name: "Cybersecurity & Cloud",
    description:
      "Cloud migration, architecture, and managed operations (AWS, Azure, GCP) plus enterprise-grade security solutions. Delivered via our certified specialist partner network to ensure best-in-class expertise.",
  },
  {
    icon: Lightbulb,
    name: "IT Consulting",
    description:
      "Strategic IT advisory aligned with your business goals. Roadmaps, digital transformation strategy, and technology decisions that reduce cost and increase competitive advantage.",
  },
];
