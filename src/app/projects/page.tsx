"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import type { Project, ProjectStatus } from "@/types/ip-platform";

const MOCK_PROJECTS: Project[] = [
  {
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
  {
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
  {
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
];

const statusConfig: Record<ProjectStatus, { label: string; active: boolean }> = {
  draft: { label: "草稿", active: false },
  phase1_running: { label: "阶段一", active: true },
  phase1_completed: { label: "验证完成", active: false },
  phase2_running: { label: "运营中", active: true },
  completed: { label: "已完成", active: false },
};

export default function ProjectsPage() {
  const router = useRouter();
  const [projects] = useState<Project[]>(MOCK_PROJECTS);

  return (
    <PageLayout activeRoute="/projects">
      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gradient mb-1">项目</h1>
            <p className="text-secondary text-sm">{projects.length} 个项目</p>
          </div>
          <button
            onClick={() => router.push("/projects/new")}
            className="btn-apple btn-ghost"
          >
            + 新建
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 stagger-children">
          {projects.map((project) => {
            const config = statusConfig[project.status];
            return (
              <div
                key={project.id}
                onClick={() => router.push(`/projects/${project.id}`)}
                className="card-apple p-6 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-primary font-medium truncate group-hover:text-accent transition-colors">
                      {project.name}
                    </p>
                    <p className="text-secondary text-sm truncate">{project.ipTheme}</p>
                  </div>
                  <div className={`badge-apple ${config.active ? "bg-[rgb(10_132_255)]/15 text-accent" : ""}`}>
                    {config.label}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-secondary text-sm mb-4">
                  <span className="truncate">{project.targetAudience}</span>
                  <span>·</span>
                  <span>{project.channels[0]}</span>
                </div>

                {project.phase1Score && (
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-secondary text-sm">评分</span>
                    <span className={`text-lg font-semibold ${
                      project.phase1Score >= project.targetScore ? "text-[rgb(52_199_89)]" :
                      project.phase1Score >= project.passScore ? "text-secondary" : "text-[rgb(255_69_58)]"
                    }`}>
                      {project.phase1Score.toFixed(1)}
                    </span>
                  </div>
                )}

                <p className="text-secondary/50 text-xs mt-4">{project.createdAt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}