"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBannerProps {
  message?: string;
  closable?: boolean;
  onClose?: () => void;
}

export function TopBanner({
  message = "🚀 Seedance 2.0 震撼首发！30 分钟真人短剧一键生成｜限时特惠：年会员最高加赠 4,200 积分 🎉",
  closable = true,
  onClose,
}: TopBannerProps) {
  return (
    <div
      className={cn(
        "relative h-10 w-full bg-[rgb(18_18_20)] text-white text-sm font-medium px-4 py-2",
        "flex justify-center items-center gap-2 z-20"
      )}
    >
      <span>{message}</span>
      {closable && (
        <X
          className="absolute right-4 top-1/2 -translate-y-1/2 size-4 cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </div>
  );
}