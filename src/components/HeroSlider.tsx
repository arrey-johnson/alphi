"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export type HeroSlide = {
  image: string;
  title?: string;
  subtitle?: string;
};

const SLIDE_INTERVAL_MS = 5000;

type HeroSliderProps = {
  slides: HeroSlide[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((prev) => {
        if (index < 0) return slides.length - 1;
        if (index >= slides.length) return 0;
        return index;
      });
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const id = setInterval(next, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [current, isPaused, next, slides.length]);

  if (!slides.length) return null;

  return (
    <section
      className="relative h-[320px] w-full overflow-hidden sm:h-[380px] md:h-[420px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/25 via-transparent to-brand-pink/20" />
          {/* Floating soap bubbles and brush icons */}
          <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
            {/* Soap bubbles - subtle white circles */}
            <span className="absolute left-[8%] top-[15%] h-8 w-8 rounded-full bg-white/18 shadow animate-float-bubble" style={{ animationDelay: "0s" }} />
            <span className="absolute left-[12%] top-[70%] h-5 w-5 rounded-full bg-white/15 shadow animate-float-bubble" style={{ animationDelay: "1.2s" }} />
            <span className="absolute right-[10%] top-[20%] h-6 w-6 rounded-full bg-white/20 shadow animate-float-slow" style={{ animationDelay: "0.5s" }} />
            <span className="absolute right-[15%] top-[65%] h-10 w-10 rounded-full bg-white/14 shadow animate-float-bubble" style={{ animationDelay: "2s" }} />
            <span className="absolute left-[5%] top-[45%] h-4 w-4 rounded-full bg-white/18 animate-float-drift" style={{ animationDelay: "0.8s" }} />
            <span className="absolute right-[8%] top-[42%] h-5 w-5 rounded-full bg-white/15 animate-float-slow" style={{ animationDelay: "1.5s" }} />
            <span className="absolute left-[20%] top-[25%] h-6 w-6 rounded-full bg-white/12 animate-float-bubble" style={{ animationDelay: "2.5s" }} />
            <span className="absolute right-[22%] top-[75%] h-7 w-7 rounded-full bg-white/16 animate-float-drift" style={{ animationDelay: "0.3s" }} />
            {/* Scrub brush icon - top right */}
            <span className="absolute right-[6%] top-[12%] text-white/35 drop-shadow-sm animate-float-drift" style={{ animationDelay: "1s" }}>
              <svg className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 2v5h8V2h2v20h-2v-5H8v5H6V2h2zm0 7h8v10H8V9z" />
              </svg>
            </span>
            {/* Wash brush - bottom left */}
            <span className="absolute bottom-[28%] left-[6%] text-white/32 drop-shadow-sm animate-float-slow" style={{ animationDelay: "2s" }}>
              <svg className="h-9 w-9 sm:h-11 sm:w-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 14h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z" />
                <path d="M8 14V8h8v6" />
                <path d="M12 4v4" />
              </svg>
            </span>
            {/* Soap bar / foam - bottom right */}
            <span className="absolute bottom-[22%] right-[10%] text-sky-400/40 drop-shadow-sm animate-float-bubble" style={{ animationDelay: "0.7s" }}>
              <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C9.24 2 7 4.24 7 7c0 1.5.65 2.85 1.69 3.78L2 18.5V22h3.5l6.69-6.69A6.96 6.96 0 0019 14c2.76 0 5-2.24 5-5s-2.24-7-5-7zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
              </svg>
            </span>
            {/* Sparkle / foam - top left */}
            <span className="absolute left-[15%] top-[35%] text-pink-300/40 drop-shadow-sm animate-float-slow" style={{ animationDelay: "1.8s" }}>
              <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm0 8l1.2 3.6L16 14l-3.6 1.2L12 20l-1.2-3.6L8 14l3.6-1.2L12 10z" />
              </svg>
            </span>
          </div>
          <img
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white drop-shadow-lg">
            {slide.title && (
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
            )}
            {slide.subtitle && (
              <p className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl">
                {slide.subtitle}
              </p>
            )}
            {index === current && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-brand-sky shadow-xl">
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-brand-sky"
                >
                  Our Services
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Nav: arrows + dots at bottom */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-6">
          <button
            type="button"
            onClick={prev}
            className="rounded-full bg-white/20 p-2 text-white shadow-none backdrop-blur-sm transition hover:bg-white/35 hover:shadow-sm"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all md:h-3 md:w-3 ${
                  index === current
                    ? "scale-125 bg-white/80 shadow-sm"
                    : "bg-white/35 hover:bg-white/55"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-white/20 p-2 text-white shadow-none backdrop-blur-sm transition hover:bg-white/35 hover:shadow-sm"
            aria-label="Next slide"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
