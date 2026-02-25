"use client";

import Link from "next/link";
import { useState } from "react";

type ServiceCardProps = {
  name: string;
  image: string;
  description: string;
};

export function ServiceCard({ name, image, description }: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href="/services"
      className="group relative block overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-sm transition-all duration-300 hover:border-brand-sky/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-sky/30 to-brand-pink/20"
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden
        />
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-semibold text-white drop-shadow-md">
          {name}
        </h3>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/90 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-hidden
        >
          <p className="text-center text-sm leading-relaxed text-white">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
