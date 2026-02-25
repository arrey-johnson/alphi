import Link from "next/link";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "Reviews & Testimonials | ALPHY'S SERVICES LTD",
  description: "What our customers say about our cleaning services in Wolverhampton.",
};

function StarRating() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-sky/10 via-white to-brand-pink/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-sky/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky">
            Testimonials
          </span>
          <h1 className="mt-4 section-heading">Reviews & Testimonials</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            See what our customers say about ALPHY&apos;S SERVICES LTD.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand-sky to-brand-pink" aria-hidden />
        </div>
      </section>

      {/* Reviews grid */}
      <section className="relative bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <StarRating />
                <blockquote className="mt-4 flex-1">
                  <p className="text-gray-700 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                </blockquote>
                <footer className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky to-brand-pink text-sm font-semibold text-white"
                    aria-hidden
                  >
                    {review.name.charAt(0)}
                  </span>
                  <cite className="not-italic font-medium text-brand-sky">{review.name}</cite>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary">
              Get a quote
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
