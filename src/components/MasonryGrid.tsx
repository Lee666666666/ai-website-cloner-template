"use client";

import { useState, useEffect, useRef } from "react";
import { BannerCarousel } from "./BannerCarousel";
import { VideoCard } from "./VideoCard";
import { PlusIcon } from "@/components/icons";

interface BannerSlide {
  id: string;
  image: string;
  link?: string;
}

interface VideoCardData {
  id: string;
  thumbnail: string;
  aspectRatio: "16/9" | "9/16" | "4/3";
  likeCount: number;
}

interface MasonryGridProps {
  bannerSlides: BannerSlide[];
  videoCards: VideoCardData[];
  columnWidth?: number;
}

export function MasonryGrid({ bannerSlides, videoCards, columnWidth = 253.6 }: MasonryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ left: number; top: number }[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const gap = 12;
    const columnCount = Math.floor(containerWidth / (columnWidth + gap));

    // Track cumulative heights for each column
    const columnHeights = Array(columnCount).fill(0);
    const newPositions: { left: number; top: number }[] = [];

    // First item: banner (spans 2 columns)
    const bannerHeight = columnWidth * 2 * (1 / 2.35); // aspect-[2.35/1] inverse, spans 2 columns width
    newPositions.push({ left: 0, top: 0 });
    columnHeights[0] += bannerHeight + gap;
    if (columnHeights[1]) {
      columnHeights[1] = columnHeights[0]; // Spans 2 columns
    }

    // Remaining video cards
    videoCards.forEach((card) => {
      // Find column with minimum height
      const minHeightCol = columnHeights.indexOf(Math.min(...columnHeights));

      const cardHeight = getCardHeight(columnWidth, card.aspectRatio);
      const left = minHeightCol * (columnWidth + gap);
      const top = columnHeights[minHeightCol];

      newPositions.push({ left, top });
      columnHeights[minHeightCol] += cardHeight + gap;
    });

    setPositions(newPositions);
  }, [videoCards, columnWidth]);

  return (
    <div className="px-11">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white-primary">灵感广场</h2>
        <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-white-primary/10 text-white-primary hover:bg-white-primary/20 transition-colors">
          <PlusIcon className="size-4" />
          发布作品
        </button>
      </div>

      {/* Masonry grid container */}
      <div ref={containerRef} className="relative" style={{ minHeight: "1000px" }}>
        {/* Banner carousel (first item, spans 2 columns) */}
        {positions[0] && (
          <div
            style={{
              position: "absolute",
              width: `${columnWidth * 2 + 12}px`, // Spans 2 columns + gap
              transform: `translate3d(${positions[0].left}px, ${positions[0].top}px, 0)`,
            }}
          >
            <BannerCarousel slides={bannerSlides} />
          </div>
        )}

        {/* Video cards */}
        {videoCards.map((card, index) => (
          positions[index + 1] && (
            <div
              key={card.id}
              style={{
                position: "absolute",
                width: `${columnWidth}px`,
                transform: `translate3d(${positions[index + 1].left}px, ${positions[index + 1].top}px, 0)`,
              }}
            >
              <VideoCard {...card} />
            </div>
          )
        ))}
      </div>
    </div>
  );
}

function getCardHeight(width: number, aspectRatio: "16/9" | "9/16" | "4/3"): number {
  switch (aspectRatio) {
    case "16/9":
      return width * (9 / 16);
    case "9/16":
      return width * (16 / 9);
    case "4/3":
      return width * (3 / 4);
    default:
      return width * (9 / 16);
  }
}