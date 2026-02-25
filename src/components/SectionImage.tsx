"use client";

import { useState } from "react";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
};

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export function SectionImage({ src, alt, className = "", aspectRatio = "video" }: SectionImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl ${aspectMap[aspectRatio]} ${className}`}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : null}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-brand-sky/20 via-brand-pink/10 to-brand-green/20 ${
          error ? "z-10" : "z-0 opacity-0"
        }`}
        aria-hidden
      />
      {error && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
          aria-hidden
        >
          <span className="text-4xl opacity-40">✨</span>
        </div>
      )}
    </div>
  );
}
