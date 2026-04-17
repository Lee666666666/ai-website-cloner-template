"use client";

import { AGENTS, type AgentStatus, type AgentProcessStep, type AgentDefinition } from "@/types/ip-platform";

interface AgentFlowProps {
  agents: AgentDefinition[];
  runStates: Record<string, { status: AgentStatus; processSteps: AgentProcessStep[]; output: string; outputs: string[] }>;
  currentAgentIndex?: number;
}

export function AgentFlow({ agents, runStates, currentAgentIndex = -1 }: AgentFlowProps) {
  return (
    <div className="space-y-10">
      {/* Flow visualization */}
      <div className="flex items-center justify-center gap-2">
        {agents.map((agent, i) => {
          const state = runStates[agent.id] || { status: "waiting", processSteps: [], output: "", outputs: [] };
          const isActive = i === currentAgentIndex;
          const isDone = state.status === "completed";

          return (
            <div key={agent.id} className="flex items-center">
              {/* Node */}
              <div className={`flex flex-col items-center transition-all duration-300 ${
                state.status === "waiting" ? "opacity-40" : ""
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg transition-all ${
                  state.status === "waiting" ? "bg-white/5" :
                  isActive ? "bg-[rgb(10_132_255)]/20 shadow-glow animate-pulse-subtle" :
                  isDone ? "bg-[rgb(52_199_89)]/20" : "bg-white/10"
                }`}>
                  {agent.emoji}
                  {isDone && <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-md bg-[rgb(52_199_89)] flex items-center justify-center text-xs text-white font-medium">✓</div>}
                </div>
                <p className="text-secondary text-xs mt-2 font-medium">{agent.name}</p>
              </div>

              {/* Arrow */}
              {i < agents.length - 1 && (
                <div className={`w-6 h-0.5 mx-1 transition-colors ${
                  isDone ? "bg-[rgb(52_199_89)]/30" : "bg-white/10"
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-2 gap-4 stagger-children">
        {agents.map((agent) => {
          const state = runStates[agent.id] || { status: "waiting", processSteps: [], output: "", outputs: [] };
          const isActive = state.status === "running";
          const isDone = state.status === "completed";

          return (
            <div key={agent.id} className={`card-apple p-5 transition-opacity ${
              state.status === "waiting" ? "opacity-40" : ""
            }`}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${
                  isDone ? "bg-[rgb(52_199_89)]/15" : isActive ? "bg-[rgb(10_132_255)]/15" : "bg-white/10"
                }`}>
                  {agent.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-primary font-medium">{agent.name}</p>
                  <p className="text-secondary text-xs">{agent.role}</p>
                </div>
                <div className={`badge-apple ${
                  isActive ? "bg-[rgb(10_132_255)]/15 text-accent" :
                  isDone ? "bg-[rgb(52_199_89)]/15 text-[rgb(52_199_89)]" : ""
                }`}>
                  {state.status === "waiting" ? "等待" : isActive ? "执行" : "完成"}
                </div>
              </div>

              {/* Process */}
              {state.processSteps.length > 0 && (
                <div className="mb-3 space-y-1">
                  {state.processSteps.map((step, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm animate-fade-in" style={{ animationDelay: `${j * 100}ms` }}>
                      {step.action ? (
                        <>
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-secondary">{step.action}</span>
                        </>
                      ) : step.data ? (
                        <>
                          <div className={`w-1 h-1 rounded-full ${isDone ? "bg-[rgb(52_199_89)]" : "bg-accent"}`} />
                          <span className={isDone ? "text-[rgb(52_199_89)]" : "text-accent"}>{step.data}</span>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}

              {/* Output */}
              {state.output && (
                <div className="pt-3 border-t border-white/10">
                  <p className="text-primary text-sm font-medium">{state.output}</p>
                  {state.outputs.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {state.outputs.map((o, k) => (
                        <div key={k} className="badge-apple text-xs">{o}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}