import {
  isTrustpilotReviewLinkConfigured,
  trustpilotConfig,
  trustpilotCopy,
} from "@/data/trustpilot";

type TrustpilotReviewButtonProps = {
  variant?: "primary" | "amber";
  className?: string;
};

export function TrustpilotReviewButton({
  variant = "primary",
  className = "",
}: TrustpilotReviewButtonProps) {
  if (!isTrustpilotReviewLinkConfigured) {
    return null;
  }

  const baseClasses =
    variant === "amber"
      ? "inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/60 bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      : "btn-primary inline-flex items-center justify-center gap-2 text-sm";

  return (
    <a
      href={trustpilotConfig.reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`.trim()}
    >
      {trustpilotCopy.reviewButtonLabel}
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
