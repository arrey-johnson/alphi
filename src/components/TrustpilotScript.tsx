import Script from "next/script";

/** TrustBox script — matches Trustpilot head embed snippet */
const TRUSTPILOT_SCRIPT_SRC =
  "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

export function TrustpilotScript() {
  return (
    <Script
      id="trustpilot-widget-bootstrap"
      src={TRUSTPILOT_SCRIPT_SRC}
      type="text/javascript"
      strategy="beforeInteractive"
      async
    />
  );
}
