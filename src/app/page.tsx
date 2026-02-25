import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionImage } from "@/components/SectionImage";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { heroSlides } from "@/data/heroSlides";
import { mainServices } from "@/data/mainServices";
import { reviews } from "@/data/reviews";
import { faqs } from "@/data/faqs";

const HOME_REVIEWS_COUNT = 3;
const HOME_FAQS_COUNT = 4;

const whyChoose = [
  {
    title: "Reliable and punctual",
    desc: "We show up on time and get the job done right.",
    icon: "clock",
  },
  {
    title: "Experienced and Trained Staff",
    desc: "Our team is skilled, professional and detail-oriented.",
    icon: "users",
  },
  {
    title: "High Quality Cleaning Products",
    desc: "We use safe and effective products for a spotless finish.",
    icon: "sparkles",
  },
  {
    title: "Customised Services",
    desc: "We tailor our cleaning to meet your specific needs.",
    icon: "sliders",
  },
  {
    title: "Affordable and transparent pricing",
    desc: "No hidden costs, clear quotes.",
    icon: "pound",
  },
  {
    title: "Customer Satisfaction Guaranteed",
    desc: "Your happiness is our top priority.",
    icon: "heart",
  },
];

function WhyChooseIcon({ name }: { name: string }) {
  const className = "h-6 w-6";
  switch (name) {
    case "clock":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "sliders":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    case "pound":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-pink-50/30 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,165,233,0.06),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full border border-brand-sky/30 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky shadow-sm">
              What we offer
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Main Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From homes to offices, we offer a full range of professional cleaning solutions.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainServices.map((service) => (
              <li key={service.name}>
                <ServiceCard
                  name={service.name}
                  image={service.image}
                  description={service.description}
                />
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-sky px-6 py-3 font-semibold text-white shadow-md transition hover:bg-sky-600 hover:shadow-lg"
            >
              View all services
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute right-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-sky/5 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-green">
                Our story
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Who we are
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Every great business begins with a simple idea. Ours began with the belief that a clean
                space changes everything. With determined efforts and a strong work ethic, we&apos;ve grown
                into a trusted cleaning service built on reliability, integrity and attention to detail.
              </p>
              <p className="mt-5 text-gray-600">
                We don&apos;t just clean — we deliver peace of mind. Our team is skilled, professional
                and committed to excellence in every detail.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-sky text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700">Excellence</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-pink text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700">Trust</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700">Customer-first</span>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-sky px-6 py-3 font-semibold text-white shadow-md transition hover:bg-sky-600"
              >
                Learn more about us
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-sky/20 to-brand-pink/20 blur-2xl" aria-hidden />
                <SectionImage
                  src="/home/view-professional-cleaning-service-person-holding-supplies.jpg"
                  alt="Alphy's Services Ltd - professional cleaning team"
                  className="relative ring-4 ring-white shadow-2xl"
                  aspectRatio="portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(236,72,153,0.06),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full border border-brand-pink/30 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-pink shadow-sm">
              Why us
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose ALPHY&apos;S SERVICES LTD
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We don&apos;t just clean — we deliver peace of mind.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => {
              const accent = i % 3 === 0 ? "brand-sky" : i % 3 === 1 ? "brand-pink" : "brand-green";
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50"
                >
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white ${
                      accent === "brand-sky"
                        ? "bg-brand-sky"
                        : accent === "brand-pink"
                          ? "bg-brand-pink"
                          : "bg-brand-green"
                    }`}
                  >
                    <WhyChooseIcon name={item.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 flex-1 text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 to-white py-20 sm:py-28">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 -translate-x-1/4 rounded-full bg-amber-200/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full border border-amber-300/50 bg-amber-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-amber-800">
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our customers say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Real feedback from people who trust us with their homes and offices.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-amber-100/50 blur-xl" aria-hidden />
                <SectionImage
                  src="/home/people-taking-care-office-cleaning.jpg"
                  alt="Happy customer - Alphy's Services Ltd"
                  className="relative rounded-2xl ring-4 ring-white shadow-xl"
                  aspectRatio="portrait"
                />
              </div>
            </div>
            <div className="space-y-6 lg:col-span-3">
              {reviews.slice(0, HOME_REVIEWS_COUNT).map((review, i) => (
                <blockquote
                  key={i}
                  className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md transition hover:shadow-lg"
                >
                  <p className="text-gray-700">&ldquo;{review.text}&rdquo;</p>
                  <footer className="mt-4 font-semibold text-brand-sky">— {review.name}</footer>
                </blockquote>
              ))}
              <div className="pt-2">
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-100 px-5 py-2.5 font-semibold text-amber-800 transition hover:bg-amber-200"
                >
                  Read all reviews
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full border border-brand-sky/30 bg-brand-sky/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Quick answers to things people often ask.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {faqs.slice(0, HOME_FAQS_COUNT).map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 shadow-sm transition hover:border-brand-sky/30 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-sky/10 px-5 py-2.5 font-semibold text-brand-sky transition hover:bg-brand-sky/20"
            >
              View all FAQs
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-sky to-sky-700 px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Ready for a Spotless Space?
            </h2>
            <p className="mt-4 text-white/90">
              Monday–Sunday, 08:00 – 20:00 · Wolverhampton &amp; surrounding areas
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:01902239420"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-sky shadow-md transition hover:bg-gray-100 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01902 239420
              </a>
              <a
                href="https://wa.me/447852145002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-white/10 px-6 py-3.5 font-semibold backdrop-blur-sm transition hover:bg-white hover:text-brand-sky"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
                07852 145002
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
