interface TrustpilotLoadOptions {
  locale?: string;
  templateId?: string;
  businessUnitId?: string;
  theme?: string;
}

interface TrustpilotGlobal {
  loadFromElement: (element: HTMLElement | null, force?: boolean) => void;
  load: (element: HTMLElement, options?: TrustpilotLoadOptions) => void;
}

interface Window {
  Trustpilot?: TrustpilotGlobal;
}
