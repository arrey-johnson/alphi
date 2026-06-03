import Link from "next/link";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";
import { TrustpilotReviewButton } from "@/components/TrustpilotReviewButton";
import {
  isTrustpilotConfigured,
  trustpilotConfig,
  trustpilotCopy,
} from "@/data/trustpilot";

type TrustpilotSectionVariant = "home" | "reviews";

type TrustpilotSectionProps = {
  variant: TrustpilotSectionVariant;
};

function TrustpilotActions({
  showReadAllLink,
  reviewButtonVariant,
  className = "",
}: {
  showReadAllLink: boolean;
  reviewButtonVariant: "primary" | "amber";
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <TrustpilotReviewButton
        variant={reviewButtonVariant}
        className="w-full justify-center sm:w-auto"
      />
      {showReadAllLink && (
        <Link
          href="/reviews"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-brand-sky/40 hover:bg-gray-50 sm:w-auto"
        >
          {trustpilotCopy.readAllReviewsLabel}
          <svg
            className="h-5 w-5 text-brand-sky"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

function TrustpilotDisplayBadge({
  styleAlignment,
}: {
  styleAlignment: "left" | "center";
}) {
  const w = trustpilotConfig.displayWidget;

  if (!isTrustpilotConfigured) {
    return (
      <p className="text-sm text-gray-600">{trustpilotCopy.comingSoonMessage}</p>
    );
  }

  return (
    <TrustpilotWidget
      templateId={w.templateId}
      token={w.token}
      height={w.height}
      width={w.width}
      styleAlignment={styleAlignment}
      minContainerHeight={w.minContainerHeight}
      scaleClass={w.scaleClass}
      prominent
    />
  );
}

function HomeTrustpilotLayout() {
  const w = trustpilotConfig.displayWidget;

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-amber-300/50 bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
          {trustpilotCopy.pillLabel}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {trustpilotCopy.homeHeading}
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          {trustpilotCopy.homeSubheading}
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-amber-200/50 bg-white shadow-lg ring-1 ring-black/5 sm:mt-12 sm:rounded-3xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]">
            <img
              src="/home/people-taking-care-office-cleaning.jpg"
              alt="Professional cleaning team at work"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10"
              aria-hidden
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-amber-50/80 to-white px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/80">
                {trustpilotCopy.homeWidgetLabel}
              </p>
              <div className="mt-4">
                <TrustpilotDisplayBadge styleAlignment={w.homeAlignment} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {trustpilotCopy.homeWidgetHint}
              </p>
            </div>

            <TrustpilotActions showReadAllLink reviewButtonVariant="amber" />
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewsTrustpilotLayout() {
  const w = trustpilotConfig.displayWidget;

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-sky/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky">
          {trustpilotCopy.pillLabel}
        </span>
        <h1 className="mt-4 section-heading">{trustpilotCopy.reviewsHeading}</h1>
        <p className="section-subheading mx-auto max-w-2xl">
          {trustpilotCopy.reviewsSubheading}
        </p>
        <div
          className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-brand-sky to-brand-pink"
          aria-hidden
        />
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-md sm:mt-12 sm:p-10">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
          {trustpilotCopy.homeWidgetLabel}
        </p>
        <div className="mt-6 flex justify-center">
          <TrustpilotDisplayBadge styleAlignment={w.reviewsAlignment} />
        </div>
        <TrustpilotActions
          showReadAllLink={false}
          reviewButtonVariant="primary"
          className="mt-8 justify-center"
        />
      </div>
    </>
  );
}

export function TrustpilotSection({ variant }: TrustpilotSectionProps) {
  const isHome = variant === "home";

  return (
    <section
      className={
        isHome
          ? "relative overflow-hidden bg-gradient-to-b from-amber-50/40 to-white py-14 sm:py-16"
          : "relative overflow-hidden bg-gradient-to-br from-brand-sky/10 via-white to-brand-pink/10 py-14 sm:py-16"
      }
    >
      {isHome && (
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-amber-200/25 blur-3xl"
          aria-hidden
        />
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {isHome ? <HomeTrustpilotLayout /> : <ReviewsTrustpilotLayout />}
      </div>
    </section>
  );
}
