import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  marginTop?: string; // 可自定义 margin-top
}

export function HeroSection({
  title = "有什么新的故事灵感？",
  subtitle,
  placeholder = "输入你的灵感，AI 会为你自动策划内容生成视频",
  marginTop = "mt-96", // 默认 384px，用于发现页
}: HeroSectionProps) {
  return (
    <div className={cn("relative flex flex-col items-center z-30", marginTop)}>
      <h1
        className="text-4xl font-semibold text-white mb-4"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
      >
        {title}
      </h1>

      {subtitle && (
        <p className="text-white/50 text-sm mb-6">{subtitle}</p>
      )}

      <div className="w-full max-w-[650px] min-h-16 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_4px_12px_0_rgba(0,0,0,0.4)] flex items-center gap-2 px-5 py-4">
        <div className="text-sm text-white/40 bg-transparent border-none w-full">
          {placeholder}
        </div>
      </div>
    </div>
  );
}