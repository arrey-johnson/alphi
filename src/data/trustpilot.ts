/** TrustBox defaults (from Trustpilot embeds). Override via env if needed. */
const DEFAULT_BUSINESS_UNIT_ID = "6a1ebd4518800ca879002afe";
const DEFAULT_PROFILE_URL = "https://www.trustpilot.com/review/alphysservicesltd.com";
const DEFAULT_REVIEW_URL = "https://www.trustpilot.com/evaluate/alphysservicesltd.com";

/**
 * Micro Button — “We’re on Trustpilot” (site display widget).
 * @see https://business.trustpilot.com → TrustBox → Micro Button
 */
export const trustpilotMicroButtonEmbed = {
  templateId: "5419b757fa0340045cd0c938",
  token: "660a9065-3b0e-4fa1-9dd0-3e57ddaa4fde",
  height: "48px",
  width: "100%",
} as const;

const businessUnitId =
  process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID ?? DEFAULT_BUSINESS_UNIT_ID;
const reviewUrl = process.env.NEXT_PUBLIC_TRUSTPILOT_REVIEW_URL ?? DEFAULT_REVIEW_URL;
const profileUrl = process.env.NEXT_PUBLIC_TRUSTPILOT_PROFILE_URL ?? DEFAULT_PROFILE_URL;

const templateIdDisplay =
  process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE_ID_HOME ??
  trustpilotMicroButtonEmbed.templateId;
const widgetTokenDisplay =
  process.env.NEXT_PUBLIC_TRUSTPILOT_WIDGET_TOKEN_HOME ??
  trustpilotMicroButtonEmbed.token;

export const trustpilotConfig = {
  businessUnitId,
  templateIdDisplay,
  widgetTokenDisplay,
  reviewUrl,
  profileUrl,
  locale: process.env.NEXT_PUBLIC_TRUSTPILOT_LOCALE ?? "en-US",
  displayWidget: {
    variant: "microButton" as const,
    templateId: templateIdDisplay,
    token: widgetTokenDisplay,
    height: trustpilotMicroButtonEmbed.height,
    width: trustpilotMicroButtonEmbed.width,
    minContainerHeight: "56px",
    scaleClass: "trustpilot-widget-scale",
    homeAlignment: "left" as const,
    reviewsAlignment: "center" as const,
  },
};

export const isTrustpilotConfigured =
  Boolean(businessUnitId) && Boolean(templateIdDisplay);

export const isTrustpilotReviewLinkConfigured = Boolean(reviewUrl);

export const isTrustpilotProfileLinkConfigured = Boolean(profileUrl);

export const trustpilotCopy = {
  pillLabel: "Trustpilot",
  homeHeading: "What our customers say",
  homeSubheading:
    "Verified feedback from customers who trust us with their homes and offices.",
  homeWidgetLabel: "Rated on Trustpilot",
  homeWidgetHint:
    "Every review helps other customers choose a cleaner they can rely on.",
  reviewsHeading: "Trusted on Trustpilot",
  reviewsSubheading:
    "See what our customers say about ALPHY'S SERVICES LTD on Trustpilot.",
  reviewButtonLabel: "Review us on Trustpilot",
  readAllReviewsLabel: "See all reviews",
  comingSoonMessage:
    "Our Trustpilot reviews will appear here soon. Thank you for your patience.",
};
