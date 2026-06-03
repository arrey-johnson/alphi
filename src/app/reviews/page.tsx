import Link from "next/link";
import { TrustpilotSection } from "@/components/TrustpilotSection";

export const metadata = {
  title: "Reviews & Testimonials | ALPHY'S SERVICES LTD",
  description:
    "Read customer reviews for ALPHY'S SERVICES LTD on Trustpilot. Professional cleaning in Wolverhampton.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <TrustpilotSection variant="reviews" />

      <section className="border-t border-gray-100 bg-gray-50/50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-center sm:px-6 lg:px-8">
          <Link href="/contact" className="btn-primary">
            Get a quote
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
