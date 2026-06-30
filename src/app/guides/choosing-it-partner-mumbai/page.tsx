import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";

const BASE = "https://alentro-website.vercel.app";

export const metadata: Metadata = {
  title: "How to Choose an IT Partner in Mumbai | Complete Buyer's Guide",
  description:
    "A practical guide to choosing the right IT company in Mumbai. 7 key criteria, questions to ask, red flags to avoid, and a vendor checklist for Mumbai SMEs.",
  keywords:
    "choose IT company Mumbai, IT partner Mumbai guide, managed IT services evaluation Mumbai, IT vendor selection India, best IT company Mumbai SME",
  alternates: {
    canonical: `${BASE}/guides/choosing-it-partner-mumbai`,
    languages: { "en-IN": `${BASE}/guides/choosing-it-partner-mumbai` },
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Right IT Partner in Mumbai — The Complete Guide",
  description:
    "A practical buyer's guide for Mumbai businesses evaluating managed IT service providers. Covers 7 key criteria, vendor questions, red flags, and a decision checklist.",
  url: `${BASE}/guides/choosing-it-partner-mumbai`,
  author: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alentro Global Services",
  },
  publisher: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alentro Global Services",
  },
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: `${BASE}/guides/choosing-it-partner-mumbai`,
  about: {
    "@type": "Thing",
    name: "Managed IT Services",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Choose an IT Partner in Mumbai",
      item: `${BASE}/guides/choosing-it-partner-mumbai`,
    },
  ],
};

const criteria = [
  {
    number: "01",
    title: "Response Time SLAs — and Whether They Are Contractual",
    body: "The most important question to ask any IT provider is not 'how fast do you respond?' but 'what happens if you don't?' A provider offering 1-hour response times verbally but not in a signed contract is offering nothing. Insist on documented SLAs with clearly defined response windows for different severity levels: a server outage has a different urgency than a printer not working. Look for providers that specify separate response time (time to acknowledge your ticket) and resolution time (time to fix the issue) — they are not the same thing.",
    checkFor: "Signed SLA document with tiered response times by severity level",
    redFlag: "Response time promises made verbally or only in marketing materials",
  },
  {
    number: "02",
    title: "Local Mumbai Presence — Not Just Remote Support",
    body: "Remote IT support handles a large portion of everyday issues efficiently. But Mumbai businesses regularly face situations that require physical presence: a server that will not power on, a network switch that needs replacing, a new workstation that needs setting up. An IT partner without a local Mumbai office and engineers who can be on-site the same business day is not a complete solution for most businesses. Ask specifically: where are your engineers based, what is the typical on-site response time for your locality, and are on-site visits included in the contract or charged separately?",
    checkFor: "Local Mumbai office address and same-day on-site capability for your area",
    redFlag:
      "National or overseas support team with no local engineers — on-site visits billed per trip at high rates",
  },
  {
    number: "03",
    title: "Service Breadth vs. Narrow Specialisation",
    body: "A specialist who only manages networks or only handles helpdesk will leave you needing a second (and third) vendor for cloud, security, and project work. Multiple vendors means multiple contracts, multiple escalation paths, and — critically — multiple parties each blaming the others when something goes wrong. For most Mumbai SMEs, a managed IT services provider that covers infrastructure, helpdesk, cloud, cybersecurity, and project delivery is more cost-effective and operationally simpler than assembling a collection of specialists. Evaluate whether the provider's stated services match their demonstrated capability — ask for case studies and references for each service line you need.",
    checkFor:
      "Demonstrated capability across all the service areas you need, with specific client references per area",
    redFlag:
      "A provider that says 'yes' to every service question without being able to name clients they have delivered that service for",
  },
  {
    number: "04",
    title: "Track Record and Verifiable Client References",
    body: "Any IT company can claim 'hundreds of clients' and '10 years of experience.' What matters is whether those claims are verifiable. Ask for three to five references in Mumbai, in a similar industry or company size to yours, that you can actually call. Ask those references specific questions: how long have they been a client, what services do they use, have there been any service failures and how were they handled, would they renew the contract? A provider with a genuine track record in Mumbai will provide references without hesitation. One that deflects, offers only written testimonials, or produces contacts that cannot be independently verified is a concern.",
    checkFor:
      "Minimum 3 verifiable client references in Mumbai, willing to take a call from you",
    redFlag: "Only written testimonials, no verifiable contact details, or references outside your market",
  },
  {
    number: "05",
    title: "Structured Escalation — L1, L2, and L3 Depth",
    body: "A single-engineer operation or a very small IT firm carries significant operational risk. If your primary engineer is sick, on leave, or overwhelmed by another client's crisis on the day you have a critical issue, you may find yourself without support precisely when you need it most. Look for providers with a structured support team: L1 agents for common user issues, L2 engineers for network and server-level problems, and L3 senior engineers or architects for complex incidents and project delivery. This depth also matters for knowledge continuity — if one person leaves the firm, your service should not degrade.",
    checkFor:
      "Documented L1/L2/L3 support structure with team size and backup coverage policy",
    redFlag:
      "A 'team' that is functionally one or two people, or where your support depends on a single named individual",
  },
  {
    number: "06",
    title: "Transparency in Scope, Pricing, and Exclusions",
    body: "IT contracts that look affordable often have substantial exclusions buried in the fine print: on-site visits not covered, hardware replacement excluded, after-hours support billed at 3× rates, or third-party vendor coordination considered 'out of scope.' Before signing any contract, request a complete list of what is and is not covered, what triggers additional charges, and what your true annual cost will be including all expected usage. Get this in writing. A reputable IT partner will give you this clarity willingly — it protects both parties and reduces disputes later.",
    checkFor:
      "Complete scope document listing inclusions, exclusions, and conditions for additional charges",
    redFlag:
      "Vague contract language, resistance to providing written scope details, or a 'we'll figure it out as we go' attitude",
  },
  {
    number: "07",
    title: "Total Cost of Ownership — Not Just the Monthly Fee",
    body: "The monthly fee is only part of the cost equation. Factor in: what happens when hardware fails outside AMC coverage — are you paying per-incident? What is the cost of downtime per hour for your business, and how does the provider's SLA reduce that risk? Are software licenses included or billed separately? Is there a minimum contract term with an early exit penalty? For businesses evaluating whether to hire in-house versus outsource, compare total employment cost (salary, PF, ESIC, benefits, training, recruitment, replacement) against the fully-loaded managed service cost — not just the monthly fee against the salary.",
    checkFor:
      "Full breakdown of total annual cost including all billable scenarios, compared against in-house total employment cost",
    redFlag: "Quoting only the base monthly fee without disclosing what triggers additional charges",
  },
];

const questions = [
  "What are your documented SLA response and resolution times for critical, high, medium, and low priority issues?",
  "Where are your support engineers based? Can you provide same-day on-site support in our area of Mumbai?",
  "How many engineers are on your team? What happens if my primary contact is unavailable?",
  "Can you provide three client references in Mumbai that I can contact directly?",
  "What exactly is excluded from this contract? What situations would result in additional charges?",
  "How do you handle a major incident — such as a server failure affecting our entire office?",
  "How do you manage vendor coordination (internet provider, hardware vendor, software support) on our behalf?",
  "What reporting will we receive, and how frequently?",
  "What is the minimum contract term and what are the exit terms?",
];

const redFlags = [
  "No written SLA — only verbal commitments about response times",
  "Can't name specific Mumbai clients as references",
  "Support team is 1–2 people with no backup or escalation path",
  "Contract excludes on-site visits or caps them at a low number per year",
  "Pricing seems significantly below market — usually signals under-resourced support or hidden costs",
  "Reluctance to put scope details in writing",
  "No local office — all support is remote from outside Mumbai",
  "Cannot demonstrate capability across the specific service areas you need",
];

export default function ChoosingITPartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20"
          style={{ background: "var(--color-primary)" }}
          aria-labelledby="guide-hero-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">Guides</li>
              </ol>
            </nav>
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              Buyer&apos;s Guide
            </span>
            <h1
              id="guide-hero-heading"
              className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              How to Choose the Right IT Partner in Mumbai
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-3xl leading-relaxed">
              A practical evaluation framework for Mumbai businesses — covering the 7 criteria that separate reliable IT partners from expensive disappointments.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
              <span>By Alentro Global Services</span>
              <span aria-hidden="true">·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-text-muted space-y-5">
              <p className="text-xl text-primary font-medium leading-relaxed">
                Choosing the wrong IT partner is one of the most expensive mistakes a Mumbai business can make.
              </p>
              <p className="leading-relaxed">
                The consequences compound over time: IT downtime that disrupts operations, security incidents that could have been prevented, cloud costs that spiral without governance, and the operational distraction of managing a vendor relationship that is not delivering. For a business of 50–500 employees, the total cost of a poor IT partnership — including downtime losses, incident recovery, and transition costs when you eventually switch — can easily run into tens of lakhs.
              </p>
              <p className="leading-relaxed">
                The good news is that the differences between a strong IT partner and a poor one are identifiable before you sign a contract. This guide gives you the seven criteria to evaluate, the specific questions to ask, and the red flags to watch for — based on 10 years of delivering IT services to Mumbai businesses across BFSI, healthcare, manufacturing, and professional services.
              </p>
            </div>
          </div>
        </section>

        {/* 7 criteria */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="criteria-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="criteria-heading"
              className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            >
              7 Criteria for Evaluating an IT Partner
            </h2>
            <p className="text-text-muted mb-12 max-w-2xl">
              Use these criteria as your evaluation framework when speaking to IT providers. Each one includes what to look for and the red flag that signals a problem.
            </p>
            <div className="space-y-8">
              {criteria.map((c) => (
                <article
                  key={c.number}
                  className="bg-white rounded-xl border border-border p-8"
                  aria-labelledby={`criterion-${c.number}`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="shrink-0 text-3xl font-bold w-14 text-right"
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    >
                      {c.number}
                    </div>
                    <div className="flex-1">
                      <h3
                        id={`criterion-${c.number}`}
                        className="text-xl font-bold text-primary mb-4"
                      >
                        {c.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6">{c.body}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2 p-4 rounded-lg bg-green-50 border border-green-100">
                          <CheckCircle2
                            size={18}
                            className="shrink-0 mt-0.5 text-green-600"
                            aria-hidden="true"
                          />
                          <div>
                            <div className="text-xs font-semibold text-green-700 mb-1 uppercase tracking-wide">
                              Look for
                            </div>
                            <p className="text-sm text-green-800 leading-snug">
                              {c.checkFor}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-4 rounded-lg bg-red-50 border border-red-100">
                          <XCircle
                            size={18}
                            className="shrink-0 mt-0.5 text-red-500"
                            aria-hidden="true"
                          />
                          <div>
                            <div className="text-xs font-semibold text-red-600 mb-1 uppercase tracking-wide">
                              Red flag
                            </div>
                            <p className="text-sm text-red-700 leading-snug">
                              {c.redFlag}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Questions to ask */}
        <section className="py-20 bg-white" aria-labelledby="questions-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="questions-heading"
              className="text-3xl font-bold text-primary mb-4"
            >
              Questions to Ask Every Vendor
            </h2>
            <p className="text-text-muted mb-10 max-w-2xl">
              Ask every IT company you evaluate the same questions. Their answers — and their
              willingness to answer in writing — will differentiate the professionals from
              the rest.
            </p>
            <ol className="space-y-4">
              {questions.map((q, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                    style={{ background: "var(--color-accent)" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-text-muted leading-relaxed pt-0.5">{q}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Red flags summary */}
        <section
          className="py-20"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="redflags-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="redflags-heading"
              className="text-3xl font-bold text-primary mb-4"
            >
              Red Flags to Walk Away From
            </h2>
            <p className="text-text-muted mb-10 max-w-2xl">
              Any of the following should give you serious pause. Multiple red flags on a single vendor is a strong signal to keep looking.
            </p>
            <ul className="space-y-3">
              {redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-border">
                  <AlertTriangle
                    size={18}
                    className="shrink-0 mt-0.5 text-amber-500"
                    aria-hidden="true"
                  />
                  <span className="text-text-muted leading-snug">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How Alentro measures up */}
        <section className="py-20 bg-white" aria-labelledby="alentro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="alentro-heading"
              className="text-3xl font-bold text-primary mb-4"
            >
              How Alentro Global Services Measures Up
            </h2>
            <p className="text-text-muted mb-10 max-w-2xl">
              We wrote this guide from the perspective of what good looks like — and we hold ourselves to the same standard. Here is how Alentro addresses each criterion.
            </p>
            <div className="space-y-4">
              {[
                {
                  criterion: "Response Time SLAs",
                  answer:
                    "Documented in every contract. Critical issue response within 1 hour. All clients receive a signed SLA document with tiered response windows by severity.",
                },
                {
                  criterion: "Local Mumbai Presence",
                  answer:
                    "Mumbai-based team since 2014. Same-day on-site support across Greater Mumbai and Navi Mumbai. On-site included in AMC and managed service contracts.",
                },
                {
                  criterion: "Service Breadth",
                  answer:
                    "IT infrastructure, AMC, helpdesk, in-house IT, network management, cybersecurity, cloud (AWS/Azure/GCP), staff augmentation, and IT consulting — all delivered by our internal team, not subcontracted.",
                },
                {
                  criterion: "Track Record",
                  answer:
                    "500+ clients served across Mumbai since 2014. We provide verifiable references on request from clients in your industry and company size range.",
                },
                {
                  criterion: "Escalation Structure",
                  answer:
                    "Full L1/L2/L3 team structure. Your support does not depend on one person — every client has a dedicated account manager plus access to the full engineering team.",
                },
                {
                  criterion: "Transparent Scope",
                  answer:
                    "Every contract includes a detailed scope of work. We walk clients through inclusions, exclusions, and what triggers additional charges before signing.",
                },
                {
                  criterion: "Total Cost of Ownership",
                  answer:
                    "We provide full TCO analysis comparing managed services against in-house IT cost for clients evaluating both options — so you make the decision with the real numbers.",
                },
              ].map((item) => (
                <div
                  key={item.criterion}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-semibold text-primary mb-1">
                      {item.criterion}
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section
          className="py-16"
          style={{ background: "var(--color-bg-alt)" }}
          aria-labelledby="related-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-primary mb-6"
            >
              Explore Alentro&apos;s IT Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "IT Infrastructure Setup", slug: "it-infrastructure-setup" },
                { name: "Annual Maintenance Contracts", slug: "annual-maintenance-contracts" },
                { name: "Helpdesk Services", slug: "helpdesk-services" },
                { name: "Cybersecurity Solutions", slug: "cybersecurity-solutions" },
                { name: "Cloud Services", slug: "cloud-services" },
                { name: "IT Consulting", slug: "it-consulting" },
              ].map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm font-medium text-accent border border-accent/30 hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-sm font-medium text-text-muted border border-border hover:border-accent/30 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              >
                View all services →
              </Link>
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
