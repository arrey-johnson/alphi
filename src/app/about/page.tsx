import Link from "next/link";

export const metadata = {
  title: "About Us | ALPHY'S SERVICES LTD",
  description:
    "Learn how Alphy's Services Ltd grew from a simple idea into a trusted cleaning service in Wolverhampton.",
};

const coreValues = [
  {
    title: "Excellence in Every Detail",
    description:
      "We don't just rush jobs. We clean with care, precision and pride — from baseboards to boardrooms.",
    icon: "sparkles",
  },
  {
    title: "Trust and Reliability",
    description: "We show up on time and our clients know they can depend on us.",
    icon: "shield",
  },
  {
    title: "Customer-First Service",
    description:
      "Every space is different. Every client matters. We customise our services to meet your specific needs.",
    icon: "heart",
  },
];

function ValueIcon({ name }: { name: string }) {
  const className = "h-7 w-7";
  if (name === "sparkles") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  }
  return null;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-brand-sky/30 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky shadow-sm">
            Our story
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            About ALPHY&apos;S SERVICES LTD
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Every great business begins with a simple idea. Ours began with the belief that a clean
            space changes everything.
          </p>
          <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-brand-sky to-brand-pink" aria-hidden />
        </div>
      </section>

      {/* Story intro */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Built on reliability and care
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                With determined efforts and a strong work ethic, our business quickly grew into a
                trusted cleaning service built on reliability, integrity and attention to detail.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We saw a need for more than just cleaning. Clients wanted consistency. They wanted
                professionals who respected their homes, offices and time. They wanted peace of mind.
                So we built our business around three core values:
              </p>
            </div>
            <div className="flex items-center lg:col-span-5">
              <blockquote className="relative border-l-4 border-brand-sky bg-gray-50 py-6 pl-6 pr-4 text-gray-700 sm:py-8 sm:pl-8">
                <p className="text-lg font-medium italic sm:text-xl">
                  &ldquo;We don&apos;t just clean — we deliver peace of mind.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our core values</h2>
            <p className="mt-3 text-gray-600">The principles that guide everything we do.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className="group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/30 hover:shadow-xl hover:shadow-brand-sky/5"
              >
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${
                    i === 0 ? "bg-brand-sky" : i === 1 ? "bg-brand-pink" : "bg-brand-green"
                  }`}
                >
                  <ValueIcon name={value.icon} />
                </span>
                <span className="mt-6 block text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Value {i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
            Over time, word spread. Happy customers became loyal clients. Referrals fuelled our
            growth. What began as a small operation evolved into a professional cleaning company
            known for <span className="font-semibold text-gray-900">quality</span>,{" "}
            <span className="font-semibold text-gray-900">consistency</span> and{" "}
            <span className="font-semibold text-gray-900">affordability</span>.
          </p>
        </div>
      </section>

      {/* Insurance notice */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900">Insurance</p>
              <p className="mt-1 text-gray-600">We are in the process of securing full coverage. Updates coming soon.</p>
            </div>
            <span className="shrink-0 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
              Coming soon
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to work with us?
          </h2>
          <p className="mt-3 text-gray-600">
            Get a free quote or find out more about our services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-sky px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-600 hover:shadow-xl"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:border-brand-sky hover:text-brand-sky"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
