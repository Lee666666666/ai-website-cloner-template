"use client";

import { useState, useCallback, Suspense } from "react";
import { PageLayout } from "@/components/PageLayout";
import { AgentFlow } from "@/components/AgentFlow";
import { AGENTS, type AgentStatus, type AgentProcessStep, type AgentDefinition } from "@/types/ip-platform";
import { useSearchParams, useRouter } from "next/navigation";

// Agent execution data - simplified
const RUN_DATA: Record<string, { process: AgentProcessStep[]; output: string; outputs: string[] }> = {
  insight: {
    process: [{ action: "分析热点趋势" }, { data: "新年仪式感 热度98" }, { action: "生成IP建议" }],
    output: "洞察完成", outputs: ["洞察报告"],
  },
  planning: {
    process: [{ action: "确定内容类型" }, { data: "表情包×4" }, { action: "制定渠道策略" }],
    output: "策划完成", outputs: ["策划方案"],
  },
  production: {
    process: [{ action: "生成素材" }, { data: "图片10张" }, { action: "生成视频" }],
    output: "素材完成", outputs: ["素材包"],
  },
  review: {
    process: [{ action: "质量检查" }, { data: "92分 ✓" }, { action: "合规审核" }],
    output: "审核通过", outputs: ["审核报告"],
  },
  publish: {
    process: [{ action: "渠道发布" }, { data: "抖音发布" }, { action: "数据监控" }],
    output: "已发布", outputs: ["发布记录"],
  },
  analysis: {
    process: [{ action: "数据分析" }, { data: "互动率8.9%" }, { action: "综合评分" }],
    output: "82.15分", outputs: ["评分报告"],
  },
};

function NewProjectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    ipTheme: searchParams.get("ipTheme") || "灶小七",
    targetAudience: searchParams.get("targetAudience") || "年轻家庭",
    channels: [searchParams.get("channels")?.split(",")[0] || "抖音"],
    passScore: 60,
    targetScore: 80,
  });

  const [phase, setPhase] = useState<"input" | "running" | "result">("input");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [runStates, setRunStates] = useState<Record<string, { status: AgentStatus; processSteps: AgentProcessStep[]; output: string; outputs: string[] }>>({});
  const [score, setScore] = useState<number | null>(null);

  const initStates = useCallback(() => {
    const s: Record<string, typeof runStates[string]> = {};
    AGENTS.forEach(a => s[a.id] = { status: "waiting", processSteps: [], output: "", outputs: [] });
    return s;
  }, []);

  const runAgent = useCallback(async (agent: AgentDefinition, idx: number) => {
    const data = RUN_DATA[agent.id];
    setRunStates(p => ({ ...p, [agent.id]: { status: "running", processSteps: [], output: "", outputs: [] } }));
    setCurrentIndex(idx);

    for (let i = 0; i < data.process.length; i++) {
      await new Promise(r => setTimeout(r, 500));
      setRunStates(p => ({ ...p, [agent.id]: { ...p[agent.id], processSteps: data.process.slice(0, i + 1) } }));
    }

    await new Promise(r => setTimeout(r, 200));
    setRunStates(p => ({ ...p, [agent.id]: { status: "completed", processSteps: data.process, output: data.output, outputs: data.outputs } }));
  }, []);

  const start = useCallback(async () => {
    setPhase("running");
    setRunStates(initStates());

    for (let i = 0; i < AGENTS.length; i++) await runAgent(AGENTS[i], i);

    await new Promise(r => setTimeout(r, 300));
    setScore(82.15);
    setPhase("result");
    setCurrentIndex(-1);
  }, [initStates, runAgent]);

  return (
    <div className="max-w-2xl mx-auto px-8 py-24">
      {/* Input */}
      {phase === "input" && (
        <div className="glass rounded-2xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-medium mb-2">创建新项目</p>
            <p className="text-secondary text-sm">Agent自动执行全流程</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-secondary text-xs uppercase tracking-wider mb-2 block">IP主题</label>
                <input value={formData.ipTheme} onChange={e => setFormData({ ...formData, ipTheme: e.target.value })} className="input-apple" />
              </div>
              <div>
                <label className="text-secondary text-xs uppercase tracking-wider mb-2 block">目标人群</label>
                <input value={formData.targetAudience} onChange={e => setFormData({ ...formData, targetAudience: e.target.value })} className="input-apple" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-secondary text-xs uppercase tracking-wider mb-2 block">渠道</label>
                <select value={formData.channels[0]} onChange={e => setFormData({ ...formData, channels: [e.target.value] })} className="select-apple">
                  <option>抖音</option>
                  <option>小红书</option>
                  <option>B站</option>
                </select>
              </div>
              <div>
                <label className="text-secondary text-xs uppercase tracking-wider mb-2 block">及格</label>
                <input type="number" value={formData.passScore} onChange={e => setFormData({ ...formData, passScore: Number(e.target.value) })} className="input-apple text-center" />
              </div>
              <div>
                <label className="text-secondary text-xs uppercase tracking-wider mb-2 block">达标</label>
                <input type="number" value={formData.targetScore} onChange={e => setFormData({ ...formData, targetScore: Number(e.target.value) })} className="input-apple text-center" />
              </div>
            </div>

            <button onClick={start} disabled={!formData.ipTheme || !formData.targetAudience} className={`btn-apple btn-primary w-full mt-6 ${!formData.ipTheme || !formData.targetAudience ? "opacity-50" : ""}`}>
              开始执行
            </button>
          </div>
        </div>
      )}

      {/* Running */}
      {phase === "running" && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-medium mb-1">执行中</p>
            <p className="text-secondary text-sm">Agent正在协作执行</p>
          </div>
          <AgentFlow agents={AGENTS} runStates={runStates} currentAgentIndex={currentIndex} />
        </div>
      )}

      {/* Result */}
      {phase === "result" && score !== null && (
        <div className="animate-fade-in space-y-8">
          <div className="card-apple p-8 text-center">
            <p className="text-secondary text-xs uppercase tracking-wider mb-2">综合评分</p>
            <p className="text-5xl font-semibold text-[rgb(52_199_89)] mb-4">{score.toFixed(2)}</p>
            <div className="badge-apple bg-[rgb(52_199_89)]/15 text-[rgb(52_199_89)]">验证通过</div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => router.push("/projects")} className="btn-apple btn-ghost flex-1">
              返回项目
            </button>
            <button onClick={() => router.push("/discover")} className="btn-apple btn-primary flex-1">
              查看产出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NewProjectPage() {
  return (
    <PageLayout activeRoute="/projects">
      <Suspense fallback={<div className="max-w-2xl mx-auto px-8 py-24"><div className="glass rounded-2xl p-8 text-center text-secondary">加载中...</div></div>}>
        <NewProjectContent />
      </Suspense>
    </PageLayout>
  );
}