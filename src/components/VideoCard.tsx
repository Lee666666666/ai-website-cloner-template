"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  id: string;
  thumbnail: string;
  videoSrc?: string;
  aspectRatio: "16/9" | "9/16" | "4/3";
  likeCount: number;
  isLiked?: boolean;
}

export function VideoCard({
  id,
  thumbnail,
  videoSrc,
  aspectRatio,
  likeCount,
  isLiked = false,
}: VideoCardProps) {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  // Use style for aspect ratio since template literal doesn't work well with Tailwind
  const aspectStyle = {
    aspectRatio: aspectRatio === "16/9" ? "16/9" : aspectRatio === "9/16" ? "9/16" : "4/3",
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={aspectStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnail}
        alt="Video thumbnail"
        fill
        className="absolute inset-0 object-cover z-[1]"
      />

      {/* Video preview (hidden by default, shows on hover) */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className={cn(
            "absolute inset-0 object-cover z-[2] transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 z-[3] transition-transform duration-300",
          isHovered ? "scale-105" : "scale-100"
        )}
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[rgb(12_12_13/80%)] to-transparent z-[4]" />

      {/* Like section */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 z-[5]">
        <Heart
          className={cn(
            "size-5 cursor-pointer transition-colors",
            liked
              ? "text-white fill-white"
              : "text-white/60 hover:text-white"
          )}
          onClick={handleLike}
        />
        <span className="text-xs font-medium text-white">{count}</span>
      </div>
    </div>
  );
}