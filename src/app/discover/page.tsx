"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import type { OutputItem } from "@/types/ip-platform";

const MOCK_OUTPUTS: OutputItem[] = [
  { id: "o1", icon: "📄", name: "洞察报告", type: "文档", description: "热点TOP10、用户画像", category: "方向", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o2", icon: "📜", name: "策划方案", type: "文档", description: "内容清单、渠道策略", category: "策略", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o3", icon: "🎭", name: "IP素材包", type: "设计", description: "表情包4款、图片10张", category: "素材", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o4", icon: "🎬", name: "短视频", type: "视频", description: "3条10-15s试水视频", category: "内容", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o5", icon: "✅", name: "审核报告", type: "审核", description: "质量评分94分", category: "审核", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o6", icon: "📊", name: "评分报告", type: "评估", description: "综合82.15分，达标", category: "评估", phase: 1, projectId: "p1", createdAt: "04-15" },
  { id: "o7", icon: "📄", name: "深度洞察", type: "文档", description: "数据分析、迭代方向", category: "方向", phase: 2, projectId: "p1", createdAt: "04-16" },
  { id: "o8", icon: "📜", name: "IP全案", type: "文档", description: "IP宇宙、角色体系", category: "策略", phase: 2, projectId: "p1", createdAt: "04-16" },
  { id: "o9", icon: "🎭", name: "角色设计", type: "设计", description: "小年兽角色、表情包", category: "素材", phase: 2, projectId: "p1", createdAt: "04-16" },
  { id: "o10", icon: "🎬", name: "视频内容", type: "视频", description: "短视频3条、长视频1条", category: "内容", phase: 2, projectId: "p1", createdAt: "04-16" },
];

export default function DiscoverPage() {
  const [outputs] = useState<OutputItem[]>(MOCK_OUTPUTS);
  const [filter, setFilter] = useState<"all" | 1 | 2>("all");

  const filtered = filter === "all" ? outputs : outputs.filter(o => o.phase === filter);
  const counts = { phase1: outputs.filter(o => o.phase === 1).length, phase2: outputs.filter(o => o.phase === 2).length };

  return (
    <PageLayout activeRoute="/discover">
      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gradient mb-1">产出看板</h1>
            <p className="text-secondary text-sm">阶段一 {counts.phase1} · 阶段二 {counts.phase2}</p>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            {(["all", 1, 2] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`btn-apple btn-ghost px-4 py-2 text-sm ${
                  filter === f ? "bg-white/10 text-primary" : ""
                }`}
              >
                {f === "all" ? "全部" : `阶段${f}`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
          {filtered.map((output) => (
            <div key={output.id} className="card-apple p-5 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${
                  output.phase === 2 ? "bg-[rgb(52_199_89)]/15" : "bg-white/10"
                }`}>
                  {output.icon}
                </div>
                <p className="text-primary font-medium flex-1 truncate group-hover:text-accent transition-colors">
                  {output.name}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="badge-apple text-xs">{output.type}</div>
                <div className={`badge-apple text-xs ${
                  output.phase === 2 ? "bg-[rgb(52_199_89)]/10 text-[rgb(52_199_89)]" : ""
                }`}>
                  P{output.phase}
                </div>
              </div>

              <p className="text-secondary text-sm line-clamp-2">{output.description}</p>
              <p className="text-secondary/50 text-xs mt-3">{output.createdAt}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}