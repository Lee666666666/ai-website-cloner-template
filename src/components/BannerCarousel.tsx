"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BannerSlide {
  id: string;
  image: string;
  link?: string;
}

interface BannerCarouselProps {
  slides: BannerSlide[];
  autoRotateInterval?: number;
}

export function BannerCarousel({
  slides,
  autoRotateInterval = 4000,
}: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval]);

  return (
    <div className="relative aspect-[2.35/1] w-full overflow-hidden rounded-xl cursor-pointer">
      {slides.map((slide, index) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt={`Banner ${index + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}