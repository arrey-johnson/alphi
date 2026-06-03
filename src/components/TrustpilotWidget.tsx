"use client";

import { useEffect, useRef, useState } from "react";
import { trustpilotConfig, trustpilotMicroButtonEmbed } from "@/data/trustpilot";

type TrustpilotWidgetProps = {
  variant?: "microButton";
  templateId: string;
  className?: string;
  height?: string;
  width?: string;
  token?: string;
  styleAlignment?: string;
  prominent?: boolean;
  minContainerHeight?: string;
  scaleClass?: string;
};

const LOAD_RETRY_MS = 200;
const LOAD_MAX_ATTEMPTS = 50;

export function TrustpilotWidget({
  templateId,
  className = "",
  height = trustpilotMicroButtonEmbed.height,
  width = trustpilotMicroButtonEmbed.width,
  token = trustpilotConfig.widgetTokenDisplay,
  styleAlignment,
  prominent = false,
  minContainerHeight = trustpilotConfig.displayWidget.minContainerHeight,
  scaleClass,
}: TrustpilotWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const element = containerRef.current;
    if (!element || !templateId || !trustpilotConfig.businessUnitId) {
      return;
    }

    let attempts = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const loadWidget = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(element, true);
        if (intervalId) {
          clearInterval(intervalId);
        }
        return true;
      }
      return false;
    };

    if (!loadWidget()) {
      intervalId = setInterval(() => {
        attempts += 1;
        if (loadWidget() || attempts >= LOAD_MAX_ATTEMPTS) {
          if (intervalId) {
            clearInterval(intervalId);
          }
        }
      }, LOAD_RETRY_MS);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isMounted, templateId]);

  if (!templateId || !trustpilotConfig.businessUnitId) {
    return null;
  }

  if (!isMounted) {
    return (
      <div
        className="w-full overflow-visible"
        style={{ minHeight: minContainerHeight }}
        aria-hidden
      >
        <div className="h-full min-h-[inherit] w-full rounded-lg bg-gray-100/80" />
      </div>
    );
  }

  const widgetClassName = [
    "trustpilot-widget",
    prominent ? "trustpilot-widget--prominent" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const widget = (
    <div
      ref={containerRef}
      className={widgetClassName}
      data-locale={trustpilotConfig.locale}
      data-template-id={templateId}
      data-businessunit-id={trustpilotConfig.businessUnitId}
      data-style-height={height}
      data-style-width={width}
      data-token={token}
      {...(styleAlignment !== undefined && {
        "data-style-alignment": styleAlignment,
      })}
      suppressHydrationWarning
    >
      <a
        href={trustpilotConfig.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );

  return (
    <div
      className="w-full overflow-visible"
      style={{ minHeight: minContainerHeight }}
    >
      {scaleClass ? <div className={scaleClass}>{widget}</div> : widget}
    </div>
  );
}
