"use client";

import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";

type GlideCarouselProps = {
  children: ReactNode[];
  perView?: number;
  gap?: number;
  peek?: number;
  autoplay?: number | false;
  bullets?: boolean;
  className?: string;
  breakpoints?: Record<number, { perView?: number; gap?: number; peek?: number }>;
};

export default function GlideCarousel({
  children,
  perView = 3,
  gap = 32,
  peek = 0,
  autoplay = false,
  bullets = true,
  className = "",
  breakpoints,
}: GlideCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/[:]/g, "");

  useEffect(() => {
    let glide: import("@glidejs/glide").default | undefined;
    let cancelled = false;

    (async () => {
      const { default: Glide, Controls, Breakpoints, Swipe, Autoplay } = await import(
        "@glidejs/glide"
      );
      if (cancelled || !rootRef.current) return;

      glide = new Glide(rootRef.current, {
        type: "carousel",
        perView,
        gap,
        peek,
        autoplay,
        hoverpause: true,
        animationDuration: 600,
        animationTimingFunc: "cubic-bezier(0.25, 1, 0.5, 1)",
        breakpoints: {
          1024: { perView: Math.min(perView, 2), gap: 20, peek: 0, ...breakpoints?.[1024] },
          640: { perView: 1, gap: 16, peek: 0, ...breakpoints?.[640] },
          ...breakpoints,
        },
      });

      glide.mount({ Controls, Breakpoints, Swipe, Autoplay });
    })();

    return () => {
      cancelled = true;
      glide?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className={`glide ${className}`}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((child, i) => (
            <li key={i} className="glide__slide">
              {child}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        {bullets ? (
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {children.map((_, i) => (
              <button
                key={i}
                className="glide__bullet"
                data-glide-dir={`=${i}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <div
          className="flex items-center gap-2"
          data-glide-el="controls"
        >
          <button
            data-glide-dir="<"
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-foreground transition-colors hover:border-accent hover:text-accent"
            style={{ borderRadius: "var(--radius-minimal)" }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            data-glide-dir=">"
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-foreground transition-colors hover:border-accent hover:text-accent"
            style={{ borderRadius: "var(--radius-minimal)" }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <span className="sr-only">{uid}</span>
    </div>
  );
}
