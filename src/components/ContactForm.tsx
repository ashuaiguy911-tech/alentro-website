"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "IT Infrastructure Setup",
  "Annual Maintenance Contracts (AMC)",
  "In-House IT Support",
  "Helpdesk Services",
  "Network and Server Management",
  "Firewall and Cybersecurity Solutions",
  "Cloud Services (AWS, Azure, GCP)",
  "Staff Augmentation",
  "IT Consulting",
];

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.company.trim()) errors.company = "Company name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-]{10,15}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!data.service) errors.service = "Please select a service.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <CheckCircle size={36} className="text-success" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Message Sent!
        </h3>
        <p className="text-text-muted max-w-md">
          Thank you for reaching out. Our team will get back to you within 24
          business hours.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-text placeholder:text-text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-border focus:border-accent"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Sharma"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass("fullName")}
            aria-required="true"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">
            Company <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your Company Ltd."
            value={form.company}
            onChange={handleChange}
            className={inputClass("company")}
            aria-required="true"
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass("email")}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-border rounded-l-lg bg-bg-alt text-text-muted text-sm">
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="8268196705"
              value={form.phone}
              onChange={handleChange}
              className={`${inputClass("phone")} rounded-l-none`}
              aria-required="true"
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          </div>
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-text mb-1.5">
            Service Required <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass("service")} cursor-pointer`}
            aria-required="true"
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your IT requirements..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClass("message")} resize-none`}
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md text-sm"
        aria-busy={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
