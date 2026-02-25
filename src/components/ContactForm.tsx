"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky/20"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky/20"
          placeholder="07XXX XXXXXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-sky/20"
          placeholder="Tell us about your cleaning needs..."
        />
      </div>
      {status === "success" && (
        <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
          Message sent. We&apos;ll be in touch soon!
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800">
          Something went wrong. Please try emailing us directly at{" "}
          <a href="mailto:info@alphysservicesltd.com" className="underline hover:no-underline">
            info@alphysservicesltd.com
          </a>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full rounded-xl py-3.5 font-semibold disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
