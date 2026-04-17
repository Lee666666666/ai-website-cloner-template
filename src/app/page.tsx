"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { QuickStartForm } from "@/components/QuickStartForm";
import { AGENTS } from "@/types/ip-platform";

export default function HomePage() {
  const router = useRouter();
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;
      // 视频消隐到 0.3 透明度，不完全消失
      const fadeDistance = maxScroll * 0.6;
      const opacity = Math.max(0.3, 1 - scrollY / fadeDistance);
      setVideoOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuickStart = (data: {
    ipTheme: string;
    targetAudience: string;
    channels: string[];
    passScore: number;
    targetScore: number;
  }) => {
    const params = new URLSearchParams({
      ipTheme: data.ipTheme,
      targetAudience: data.targetAudience,
      channels: data.channels.join(","),
      passScore: data.passScore.toString(),
      targetScore: data.targetScore.toString(),
    });
    router.push(`/projects/new?${params}`);
  };

  return (
    <>
      {/* Full screen video background with scroll fade */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: videoOpacity }}
        className="fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-100"
      >
        <source src="/videos/video.webm" type="video/webm" />
      </video>

      <PageLayout activeRoute="/">
      <div className="max-w-3xl mx-auto px-8 py-24">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-semibold tracking-tight text-gradient mb-3">
            IP内容自动化生产
          </h1>
          <p className="text-secondary text-lg font-light">
            Agent编队协作，两阶段闭环验证
          </p>
        </div>

        {/* Quick Start Card */}
        <div className="glass-liquid rounded-2xl p-8 animate-scale-in mb-20">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-medium mb-2 drop-shadow-[0_1px_2px_rgb(0_0_0/0.5)]">开始创建</p>
            <p className="text-secondary text-sm drop-shadow-[0_1px_2px_rgb(0_0_0/0.3)]">输入想法，Agent自动执行全流程</p>
          </div>
          <QuickStartForm onSubmit={handleQuickStart} />
        </div>

        {/* Agents */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-medium mb-2">Agent 编队</p>
            <p className="text-secondary text-sm">6个专业Agent分工协作</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="card-apple p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg">
                    {agent.emoji}
                  </div>
                  <div>
                    <p className="text-primary font-medium">{agent.name}</p>
                    <p className="text-secondary text-xs">{agent.role}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Phases */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Phase 1 */}
          <div className="card-apple p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                1
              </div>
              <p className="text-primary font-medium">轻量化验证</p>
            </div>
            <p className="text-secondary text-sm mb-4">快速试水，低成本迭代</p>
            <div className="space-y-2">
              {["图片/表情包/短视频", "线上主渠道试水", "综合评分决策"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-secondary text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div className="card-apple p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[rgb(52_199_89)]/20 flex items-center justify-center text-sm text-[rgb(52_199_89)]">
                2
              </div>
              <p className="text-primary font-medium">长期运营</p>
            </div>
            <p className="text-secondary text-sm mb-4">全案运营，持续增长</p>
            <div className="space-y-2">
              {["全内容矩阵", "线上+线下联动", "7天轮回优化"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-secondary text-sm">
                  <div className="w-1 h-1 rounded-full bg-[rgb(52_199_89)]/50" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-secondary text-sm">
          先验证，再投入 · 数据驱动，持续优化
        </div>
      </div>
    </PageLayout>
    </>
  );
}