"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Mail, Clock } from "lucide-react";

interface FormData {
  fullName: string;
  company: string;
  industry: string;
  itIssue: string;
  teamSize: string;
  currentIT: string;
  callbackTime: string;
  phone: string;
  email: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.fullName.trim())     e.fullName     = "Full name is required.";
  if (!d.company.trim())      e.company      = "Company name is required.";
  if (!d.industry.trim())     e.industry     = "Industry is required.";
  if (!d.itIssue.trim())      e.itIssue      = "Please describe your IT issue.";
  if (!d.teamSize)            e.teamSize     = "Please select your team size.";
  if (!d.currentIT)           e.currentIT    = "Please select your current IT support.";
  if (!d.callbackTime.trim()) e.callbackTime = "Preferred callback time is required.";
  if (!d.phone.trim()) {
    e.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-]{10,15}$/.test(d.phone.replace(/\s/g, ""))) {
    e.phone = "Please enter a valid phone number.";
  }
  if (!d.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    e.email = "Please enter a valid email address.";
  }
  return e;
}

const EMPTY: FormData = {
  fullName: "", company: "", industry: "", itIssue: "",
  teamSize: "", currentIT: "", callbackTime: "", phone: "", email: "",
};

export default function ConsultationFormPage() {
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject:    `New Consultation Request — ${form.fullName} (${form.company})`,
          from_name:  form.fullName,
          email:      form.email,
          "Full Name":              form.fullName,
          "Company Name":           form.company,
          "Industry":               form.industry,
          "IT Issue":               form.itIssue,
          "Team Size":              form.teamSize,
          "Current IT Support":     form.currentIT,
          "Preferred Callback Time": form.callbackTime,
          "Phone":                  form.phone,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Submission failed. Please try again or WhatsApp us directly.");
      }
    } catch {
      setSubmitError("Network error. Please try again or WhatsApp us at +91 7045400592.");
    } finally {
      setSubmitting(false);
    }
  }

  /* ── helpers ── */
  const base = "w-full px-4 py-3 rounded-lg border text-sm bg-white text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200";
  const inputCls = (f: keyof FormErrors) =>
    `${base} ${errors[f] ? "border-red-400 focus:border-red-400" : "border-border focus:border-accent"}`;

  /* ── success screen ── */
  if (submitted) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{ background: "var(--color-primary)" }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(56,189,248,0.12)" }}
        >
          <CheckCircle size={44} style={{ color: "var(--color-accent-light)" }} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">You&apos;re all set!</h2>
        <p className="text-lg leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.75)" }}>
          Thank you! Our team will contact you one hour before your consultation call.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/917045400592"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm border transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
          >
            Back to website
          </Link>
        </div>
      </div>
    );
  }

  /* ── form ── */
  return (
    <div className="min-h-screen" style={{ background: "var(--color-primary)" }}>

      {/* Top accent line */}
      <div className="h-[3px] w-full" style={{ background: "var(--color-accent)" }} aria-hidden="true" />

      {/* Header */}
      <header className="py-8 px-4 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" aria-label="Alentro Global Services — Home" className="inline-block mb-5">
          <Image
            src="/logo-white.png"
            alt="Alentro Global Services"
            width={160}
            height={48}
            priority
            className="object-contain mx-auto"
            style={{ height: "42px", width: "auto" }}
          />
        </Link>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--color-accent-light)" }}
        >
          Free IT Consultation
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Book Your Consultation Call
        </h1>
        <p className="mt-2 text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
          Fill in the details below. Our consultant will reach out one hour before your slot.
        </p>
      </header>

      {/* Form card */}
      <main className="max-w-2xl mx-auto px-4 py-8 pb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">

          <form onSubmit={handleSubmit} noValidate aria-label="Consultation booking form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1.5">
                  Full Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="fullName" name="fullName" type="text" autoComplete="name"
                  placeholder="Rajesh Sharma" value={form.fullName} onChange={handleChange}
                  className={inputCls("fullName")} aria-required="true" />
                {errors.fullName && <p className="mt-1 text-xs text-red-500" role="alert">{errors.fullName}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">
                  Company Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="company" name="company" type="text" autoComplete="organization"
                  placeholder="Your Company Ltd." value={form.company} onChange={handleChange}
                  className={inputCls("company")} aria-required="true" />
                {errors.company && <p className="mt-1 text-xs text-red-500" role="alert">{errors.company}</p>}
              </div>

              {/* Industry */}
              <div className="sm:col-span-2">
                <label htmlFor="industry" className="block text-sm font-medium text-text mb-1.5">
                  Industry <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="industry" name="industry" type="text"
                  placeholder="e.g. Manufacturing, Healthcare, Finance, Retail, Education…"
                  value={form.industry} onChange={handleChange}
                  className={inputCls("industry")} aria-required="true" />
                {errors.industry && <p className="mt-1 text-xs text-red-500" role="alert">{errors.industry}</p>}
              </div>

              {/* IT Issue */}
              <div className="sm:col-span-2">
                <label htmlFor="itIssue" className="block text-sm font-medium text-text mb-1.5">
                  Describe Your IT Issue <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea id="itIssue" name="itIssue" rows={4}
                  placeholder="Tell us what IT problem you are facing and what you would like to discuss on the call…"
                  value={form.itIssue} onChange={handleChange}
                  className={`${inputCls("itIssue")} resize-none`} aria-required="true" />
                {errors.itIssue && <p className="mt-1 text-xs text-red-500" role="alert">{errors.itIssue}</p>}
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-text mb-1.5">
                  Team Size <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select id="teamSize" name="teamSize" value={form.teamSize} onChange={handleChange}
                  className={`${inputCls("teamSize")} cursor-pointer`} aria-required="true">
                  <option value="">Select team size…</option>
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
                {errors.teamSize && <p className="mt-1 text-xs text-red-500" role="alert">{errors.teamSize}</p>}
              </div>

              {/* Current IT Support */}
              <div>
                <label htmlFor="currentIT" className="block text-sm font-medium text-text mb-1.5">
                  Current IT Support <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select id="currentIT" name="currentIT" value={form.currentIT} onChange={handleChange}
                  className={`${inputCls("currentIT")} cursor-pointer`} aria-required="true">
                  <option value="">Select…</option>
                  <option value="None">None</option>
                  <option value="In-house team">In-house team</option>
                  <option value="Outsourced provider">Outsourced provider</option>
                </select>
                {errors.currentIT && <p className="mt-1 text-xs text-red-500" role="alert">{errors.currentIT}</p>}
              </div>

              {/* Preferred Callback Time */}
              <div className="sm:col-span-2">
                <label htmlFor="callbackTime" className="block text-sm font-medium text-text mb-1.5">
                  Preferred Callback Time <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="callbackTime" name="callbackTime" type="text"
                  placeholder="e.g. Tomorrow 10 AM–12 PM, or Weekday evenings after 6 PM"
                  value={form.callbackTime} onChange={handleChange}
                  className={inputCls("callbackTime")} aria-required="true" />
                {errors.callbackTime && <p className="mt-1 text-xs text-red-500" role="alert">{errors.callbackTime}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                  Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel"
                  placeholder="+91 98765 43210" value={form.phone} onChange={handleChange}
                  className={inputCls("phone")} aria-required="true" />
                {errors.phone && <p className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                  Email Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email"
                  placeholder="you@company.com" value={form.email} onChange={handleChange}
                  className={inputCls("email")} aria-required="true" />
                {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
              </div>

            </div>

            {/* Submit error */}
            {submitError && (
              <div className="mt-5 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">
                {submitError}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full text-white font-semibold py-4 rounded-xl text-sm transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "var(--color-accent)" }}
              aria-busy={submitting}
            >
              {submitting ? "Submitting…" : "Book My Free Consultation →"}
            </button>

            <p className="mt-4 text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
              Or reach us at{" "}
              <a href="tel:+917045400592" className="hover:underline" style={{ color: "var(--color-accent)" }}>
                +91 7045400592
              </a>
              {" · "}
              <a href="mailto:alentroglobalservices@gmail.com" className="hover:underline" style={{ color: "var(--color-accent)" }}>
                alentroglobalservices@gmail.com
              </a>
            </p>
          </form>
        </div>

        {/* Trust strip */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: Clock,   value: "Since 2014",  label: "IT Expertise"       },
            { icon: Phone,   value: "24/7",        label: "Support Available"  },
            { icon: Mail,    value: "Pan-India",   label: "Operations"         },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon size={18} className="mx-auto mb-1" style={{ color: "var(--color-accent-light)" }} aria-hidden="true" />
              <div className="text-base font-bold text-white">{value}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
