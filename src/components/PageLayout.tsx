"use client";

import { LeftSidebar } from "@/components/LeftSidebar";

export function PageLayout({ children, activeRoute }: { children: React.ReactNode; activeRoute?: string }) {
  return (
    <div className="min-h-screen flex">
      <LeftSidebar activeRoute={activeRoute} />
      <main className="flex-1 pl-[68px] min-w-0 scrollbar-apple overflow-y-auto">
        {children}
      </main>
    </div>
  );
}