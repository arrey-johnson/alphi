import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata = {
  title: "Contact Us | ALPHY'S SERVICES LTD",
  description: "Get in touch for a quote. Phone, WhatsApp, email or contact form.",
};

const contactDetails = [
  {
    label: "Mobile",
    value: "07852 145002",
    href: "tel:07852145002",
    icon: "phone",
  },
  {
    label: "Phone",
    value: "01902 239420",
    href: "tel:01902239420",
    icon: "phone",
  },
  {
    label: "Email",
    value: "info@alphysservicesltd.com",
    href: "mailto:info@alphysservicesltd.com",
    icon: "email",
  },
  {
    label: "Address",
    value: "421 Bilston Road, Wolverhampton WV2 2NN",
    href: "https://maps.google.com/?q=421+Bilston+Road+Wolverhampton+WV2+2NN",
    icon: "pin",
  },
];

const areas = [
  "West Midlands",
  "East Midlands",
  "Manchester",
  "Liverpool",
  "Northamptonshire",
];

function ContactIcon({ name }: { name: string }) {
  const cls = "h-5 w-5 shrink-0";
  if (name === "phone") {
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }
  if (name === "email") {
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  return null;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-brand-sky/30 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky shadow-sm">
            Get in touch
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get a quote or ask a question. We&apos;re here Monday–Sunday, 08:00–20:00.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden />
              Available 7 days
            </span>
            <span className="text-gray-300">·</span>
            <span>Wolverhampton & surrounding areas</span>
          </div>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-brand-sky to-brand-pink" aria-hidden />
        </div>
      </section>

      {/* Quick actions strip */}
      <section className="relative border-b border-gray-200 bg-white py-6 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:01902239420"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-brand-sky hover:bg-brand-sky/5 hover:text-brand-sky"
            >
              <svg className="h-5 w-5 text-brand-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              01902 239420
            </a>
            <a
              href="https://wa.me/447852145002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden />
              WhatsApp 07852 145002
            </a>
            <a
              href="mailto:info@alphysservicesltd.com"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-brand-sky hover:bg-brand-sky/5 hover:text-brand-sky"
            >
              <svg className="h-5 w-5 text-brand-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Contact details card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Contact details</h2>
              <p className="mt-2 text-gray-600">
                Call, email or visit — we&apos;ll respond as soon as we can.
              </p>
              <ul className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex gap-4 rounded-xl p-4 transition hover:bg-gray-50"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-sky/10 text-brand-sky">
                        <ContactIcon name={item.icon} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-gray-500">{item.label}</span>
                        <span className="mt-0.5 block font-medium text-gray-900 transition group-hover:text-brand-sky">
                          {item.value}
                        </span>
                      </div>
                      <svg className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-700">Areas we cover</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Send a message</h2>
              <p className="mt-2 text-gray-600">
                Fill in the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Map link */}
          <div className="mt-12">
            <Link
              href="https://maps.google.com/?q=421+Bilston+Road+Wolverhampton+WV2+2NN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white py-5 font-medium text-gray-700 shadow-sm transition hover:border-brand-sky hover:bg-brand-sky/5 hover:text-brand-sky"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-brand-sky">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </span>
              Open 421 Bilston Road in Google Maps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
