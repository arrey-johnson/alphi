"use client";

import Link from "next/link";
import { useState } from "react";

type Section = { name: string; items: string[] };

type ServiceDetailCardProps = {
  id?: string;
  title: string;
  description: string;
  sections?: Section[];
  accent?: "sky" | "pink" | "green";
};

const accentStyles = {
  sky: "border-t-brand-sky bg-brand-sky/5",
  pink: "border-t-brand-pink bg-brand-pink/5",
  green: "border-t-brand-green bg-brand-green/5",
};

const buttonStyles = {
  sky: "bg-brand-sky text-white shadow-sm hover:bg-sky-600 focus:ring-brand-sky",
  pink: "bg-brand-pink text-white shadow-sm hover:bg-pink-600 focus:ring-brand-pink",
  green: "bg-brand-green text-white shadow-sm hover:bg-green-600 focus:ring-brand-green",
};

export function ServiceDetailCard({
  id,
  title,
  description,
  sections,
  accent = "sky",
}: ServiceDetailCardProps) {
  const [openSection, setOpenSection] = useState<string | null>(
    sections && sections.length > 0 ? sections[0].name : null
  );

  return (
    <article
      id={id}
      className={`scroll-mt-24 rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md ${accentStyles[accent]} border-t-4`}
    >
      <div className="p-6 sm:p-7">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>

        {sections && sections.length > 0 && (
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              What&apos;s included
            </p>
            <div className="space-y-2">
              {sections.map((section) => {
                const isOpen = openSection === section.name;
                return (
                  <div
                    key={section.name}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : section.name)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      {section.name}
                      <span
                        className={`shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-gray-100 px-4 py-3">
                        <ul className="space-y-1.5 text-sm text-gray-600">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-gray-200">
          <Link
            href="/contact"
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonStyles[accent]}`}
          >
            Request a quote
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
