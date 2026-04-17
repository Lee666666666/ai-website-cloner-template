"use client";

import { PageLayout } from "@/components/PageLayout";

export default function ProfilePage() {
  return (
    <PageLayout activeRoute="/profile">
      <div className="max-w-md mx-auto px-8 py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-gradient mb-8">我的</h1>

        <div className="card-apple p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <p className="text-primary font-medium">用户名</p>
              <p className="text-secondary text-sm">请登录查看完整信息</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-primary font-semibold">0</p>
              <p className="text-secondary text-xs">项目</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-semibold">0</p>
              <p className="text-secondary text-xs">产出</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-semibold">0</p>
              <p className="text-secondary text-xs">积分</p>
            </div>
          </div>
        </div>

        <button className="btn-apple btn-ghost w-full">
          登录账号
        </button>
      </div>
    </PageLayout>
  );
}