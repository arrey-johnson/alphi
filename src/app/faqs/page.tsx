"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-sky/10 via-white to-brand-pink/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-sky/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky">
            Help
          </span>
          <h1 className="mt-4 section-heading">Frequently Asked Questions</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Quick answers to common questions about our cleaning services.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand-sky to-brand-pink" aria-hidden />
        </div>
      </section>

      {/* FAQ list */}
      <section className="relative bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-gray-900 transition hover:bg-gray-50/80 sm:px-6"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-sky transition ${
                        isOpen ? "bg-brand-sky/15 rotate-180" : "bg-gray-100"
                      }`}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 py-4 text-gray-600 sm:px-6">
                        <p className="leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-gray-600">
            Can&apos;t find your answer?{" "}
            <a href="/contact" className="font-medium text-brand-sky hover:underline">
              Contact us
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
