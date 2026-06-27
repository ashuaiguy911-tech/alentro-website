"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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

export const services = [
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

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-primary"
          >
            Our IT Services
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet every IT need
            your business has — from infrastructure to the cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="group bg-white rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent"
                  style={{ background: "var(--color-navy-50)" }}
                >
                  <Icon
                    size={22}
                    className="text-accent group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 text-accent font-medium text-sm hover:text-accent-dark inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Learn More
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
