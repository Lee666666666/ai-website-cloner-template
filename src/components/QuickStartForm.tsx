"use client";

import { useState } from "react";

interface QuickStartFormProps {
  onSubmit?: (data: QuickStartData) => void;
}

export interface QuickStartData {
  ipTheme: string;
  targetAudience: string;
  channels: string[];
  passScore: number;
  targetScore: number;
}

export function QuickStartForm({ onSubmit }: QuickStartFormProps) {
  const [formData, setFormData] = useState<QuickStartData>({
    ipTheme: "",
    targetAudience: "",
    channels: ["抖音"],
    passScore: 60,
    targetScore: 80,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const isValid = formData.ipTheme.trim() && formData.targetAudience.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-secondary text-xs font-medium uppercase tracking-wider mb-2 block">
            IP主题
          </label>
          <input
            type="text"
            value={formData.ipTheme}
            onChange={(e) => setFormData({ ...formData, ipTheme: e.target.value })}
            placeholder="如：灶小七"
            className="input-apple"
          />
        </div>
        <div>
          <label className="text-secondary text-xs font-medium uppercase tracking-wider mb-2 block">
            目标人群
          </label>
          <input
            type="text"
            value={formData.targetAudience}
            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            placeholder="如：年轻家庭"
            className="input-apple"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-secondary text-xs font-medium uppercase tracking-wider mb-2 block">
            渠道
          </label>
          <select
            value={formData.channels[0]}
            onChange={(e) => setFormData({ ...formData, channels: [e.target.value] })}
            className="select-apple"
          >
            <option value="抖音">抖音</option>
            <option value="小红书">小红书</option>
            <option value="B站">B站</option>
            <option value="视频号">视频号</option>
          </select>
        </div>
        <div>
          <label className="text-secondary text-xs font-medium uppercase tracking-wider mb-2 block">
            及格分
          </label>
          <input
            type="number"
            value={formData.passScore}
            onChange={(e) => setFormData({ ...formData, passScore: Number(e.target.value) })}
            className="input-apple text-center"
          />
        </div>
        <div>
          <label className="text-secondary text-xs font-medium uppercase tracking-wider mb-2 block">
            达标分
          </label>
          <input
            type="number"
            value={formData.targetScore}
            onChange={(e) => setFormData({ ...formData, targetScore: Number(e.target.value) })}
            className="input-apple text-center"
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={!isValid}
          className={`btn-apple btn-primary w-full ${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span>开始</span>
        </button>
      </div>
    </form>
  );
}