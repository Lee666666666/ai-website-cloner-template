"use client";

import { useParams, useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { AgentFlow } from "@/components/AgentFlow";
import { AGENTS, type Project, type AgentStatus, type AgentProcessStep } from "@/types/ip-platform";
import { useState, useMemo } from "react";

// Mock project data - in real app this would come from API/database
const MOCK_PROJECTS: Record<string, Project> = {
  p1: {
    id: "p1",
    name: "灶小七IP孵化",
    ipTheme: "灶小七（橘色灶猫精）",
    targetAudience: "年轻家庭、传统文化爱好者",
    channels: ["抖音", "小红书"],
    passScore: 60,
    targetScore: 80,
    status: "phase1_completed",
    createdAt: "2026-04-10",
    updatedAt: "2026-04-15",
    phase1Score: 82.15,
  },
  p2: {
    id: "p2",
    name: "新年吉祥物",
    ipTheme: "小年兽",
    targetAudience: "Z世代",
    channels: ["B站"],
    passScore: 60,
    targetScore: 80,
    status: "phase1_running",
    createdAt: "2026-04-14",
    updatedAt: "2026-04-16",
  },
  p3: {
    id: "p3",
    name: "美食IP",
    ipTheme: "饺子精灵",
    targetAudience: "美食爱好者",
    channels: ["小红书"],
    passScore: 60,
    targetScore: 80,
    status: "draft",
    createdAt: "2026-04-16",
    updatedAt: "2026-04-16",
  },
};

// Initialize run states for completed projects
function getInitialRunStates(project: Project | null): Record<string, { status: AgentStatus; processSteps: AgentProcessStep[]; output: string; outputs: string[] }> {
  if (!project || project.status !== "phase1_completed") return {};
  const states: Record<string, { status: AgentStatus; processSteps: AgentProcessStep[]; output: string; outputs: string[] }> = {};
  AGENTS.forEach((a) => {
    states[a.id] = {
      status: "completed",
      processSteps: RUN_DATA[a.id].process,
      output: RUN_DATA[a.id].output,
      outputs: RUN_DATA[a.id].outputs,
    };
  });
  return states;
}

const RUN_DATA: Record<string, { process: AgentProcessStep[]; output: string; outputs: string[] }> = {
  insight: {
    process: [{ action: "分析热点趋势" }, { data: "新年仪式感 热度98" }, { action: "生成IP建议" }],
    output: "洞察完成",
    outputs: ["洞察报告"],
  },
  planning: {
    process: [{ action: "确定内容类型" }, { data: "表情包×4" }, { action: "制定渠道策略" }],
    output: "策划完成",
    outputs: ["策划方案"],
  },
  production: {
    process: [{ action: "生成素材" }, { data: "图片10张" }, { action: "生成视频" }],
    output: "素材完成",
    outputs: ["素材包"],
  },
  review: {
    process: [{ action: "质量检查" }, { data: "92分 ✓" }, { action: "合规审核" }],
    output: "审核通过",
    outputs: ["审核报告"],
  },
  publish: {
    process: [{ action: "渠道发布" }, { data: "抖音发布" }, { action: "数据监控" }],
    output: "已发布",
    outputs: ["发布记录"],
  },
  analysis: {
    process: [{ action: "数据分析" }, { data: "互动率8.9%" }, { action: "综合评分" }],
    output: "82.15分",
    outputs: ["评分报告"],
  },
};

const statusConfig: Record<string, { label: string; color: string }> = {
  draft: { label: "草稿", color: "" },
  phase1_running: { label: "阶段一执行中", color: "text-accent" },
  phase1_completed: { label: "阶段一完成", color: "text-[rgb(52_199_89)]" },
  phase2_running: { label: "阶段二运营中", color: "text-accent" },
  completed: { label: "已完成", color: "text-[rgb(52_199_89)]" },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  // Use useMemo for immediate project lookup (works with SSR)
  const project = useMemo(() => MOCK_PROJECTS[projectId], [projectId]);
  const initialScore = project?.phase1Score ?? null;
  const initialRunStates = useMemo(() => getInitialRunStates(project), [project]);

  const [runStates, setRunStates] = useState<Record<string, { status: AgentStatus; processSteps: AgentProcessStep[]; output: string; outputs: string[] }>>(initialRunStates);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(-1);
  const [phase, setPhase] = useState<"view" | "running" | "result">("view");
  const [score, setScore] = useState<number | null>(initialScore);

  if (!project) {
    return (
      <PageLayout activeRoute="/projects">
        <div className="max-w-2xl mx-auto px-8 py-24">
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-secondary">项目不存在</p>
            <button onClick={() => router.push("/projects")} className="btn-apple btn-ghost mt-4">
              返回项目列表
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const startExecution = async () => {
    setPhase("running");
    const states: Record<string, typeof runStates[string]> = {};
    AGENTS.forEach((a) => states[a.id] = { status: "waiting", processSteps: [], output: "", outputs: [] });
    setRunStates(states);

    for (let i = 0; i < AGENTS.length; i++) {
      const agent = AGENTS[i];
      const data = RUN_DATA[agent.id];
      setRunStates((p) => ({ ...p, [agent.id]: { status: "running", processSteps: [], output: "", outputs: [] } }));
      setCurrentAgentIndex(i);

      for (let j = 0; j < data.process.length; j++) {
        await new Promise((r) => setTimeout(r, 500));
        setRunStates((p) => ({ ...p, [agent.id]: { ...p[agent.id], processSteps: data.process.slice(0, j + 1) } }));
      }

      await new Promise((r) => setTimeout(r, 200));
      setRunStates((p) => ({ ...p, [agent.id]: { status: "completed", processSteps: data.process, output: data.output, outputs: data.outputs } }));
    }

    await new Promise((r) => setTimeout(r, 300));
    setScore(82.15);
    setPhase("result");
    setCurrentAgentIndex(-1);
  };

  const config = statusConfig[project.status];

  return (
    <PageLayout activeRoute="/projects">
      <div className="max-w-2xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gradient mb-1">{project.name}</h1>
            <p className="text-secondary text-sm">{project.ipTheme}</p>
          </div>
          <div className={`badge-apple ${config.color ? `bg-[rgb(10_132_255)]/15 text-accent` : ""}`}>
            {config.label}
          </div>
        </div>

        {/* Project Info */}
        <div className="card-apple p-6 mb-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">目标人群</p>
              <p className="text-primary">{project.targetAudience}</p>
            </div>
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">发布渠道</p>
              <p className="text-primary">{project.channels.join("、")}</p>
            </div>
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">及格分数</p>
              <p className="text-primary">{project.passScore}</p>
            </div>
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">达标分数</p>
              <p className="text-primary">{project.targetScore}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
            <p className="text-secondary text-sm">创建于 {project.createdAt}</p>
            {score && (
              <div className="flex items-center gap-2">
                <span className="text-secondary text-sm">评分</span>
                <span className={`text-2xl font-semibold ${
                  score >= project.targetScore ? "text-[rgb(52_199_89)]" :
                  score >= project.passScore ? "text-secondary" : "text-[rgb(255_69_58)]"
                }`}>
                  {score.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* View Mode - Show Agent Flow for completed/running projects */}
        {phase === "view" && (project.status !== "draft" || runStates.insight) && (
          <div className="mb-8">
            <div className="text-center mb-8">
              <p className="text-primary text-xl font-medium mb-2">Agent 执行记录</p>
              <p className="text-secondary text-sm">6个Agent协作完成</p>
            </div>
            <AgentFlow agents={AGENTS} runStates={runStates} currentAgentIndex={currentAgentIndex} />
          </div>
        )}

        {/* Draft Mode - Start Execution */}
        {phase === "view" && project.status === "draft" && !runStates.insight && (
          <div className="glass rounded-2xl p-8 text-center animate-scale-in">
            <p className="text-primary text-xl font-medium mb-2">开始执行</p>
            <p className="text-secondary text-sm mb-6">点击按钮启动Agent编队自动执行全流程</p>
            <button onClick={startExecution} className="btn-apple btn-primary">
              开始执行
            </button>
          </div>
        )}

        {/* Running Mode */}
        {phase === "running" && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <p className="text-primary text-xl font-medium mb-1">执行中</p>
              <p className="text-secondary text-sm">Agent正在协作执行</p>
            </div>
            <AgentFlow agents={AGENTS} runStates={runStates} currentAgentIndex={currentAgentIndex} />
          </div>
        )}

        {/* Result Mode */}
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

        {/* Back Button */}
        {phase === "view" && (
          <button onClick={() => router.push("/projects")} className="btn-apple btn-ghost w-full mt-8">
            返回项目列表
          </button>
        )}
      </div>
    </PageLayout>
  );
}