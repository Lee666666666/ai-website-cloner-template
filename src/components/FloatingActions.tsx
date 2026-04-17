"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionsProps {
  showScrollTopThreshold?: number;
}

export function FloatingActions({
  showScrollTopThreshold = 300,
}: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".main-scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      setShowScrollTop(scrollContainer.scrollTop > showScrollTopThreshold);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [showScrollTopThreshold]);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".main-scroll-container");
    scrollContainer?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed z-40 flex flex-col gap-2 pointer-events-auto",
        "bottom-[22px] right-[52px]"
      )}
    >
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={cn(
            "size-10 rounded-full inline-flex items-center justify-center transition-all",
            "bg-[rgb(18,18,20)] border border-white/10",
            "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]",
            "hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]"
          )}
        >
          <ArrowUp className="size-4 text-white/40" />
        </button>
      )}

      <button
        className={cn(
          "size-10 rounded-full inline-flex items-center justify-center transition-all",
          "bg-[rgb(18,18,20)] border border-white/10",
          "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)]",
          "hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]"
        )}
      >
        <Plus className="size-4 text-white" />
      </button>
    </div>
  );
}