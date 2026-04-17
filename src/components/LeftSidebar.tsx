"use client";

import Link from "next/link";
import { LogoIcon, HomeIcon, FolderIcon, GlobeIcon, UserIcon } from "@/components/icons";

const navItems = [
  { id: "home", icon: HomeIcon, route: "/", label: "首页" },
  { id: "projects", icon: FolderIcon, route: "/projects", label: "项目" },
  { id: "discover", icon: GlobeIcon, route: "/discover", label: "产出" },
  { id: "profile", icon: UserIcon, route: "/profile", label: "我的" },
];

export function LeftSidebar({ activeRoute }: { activeRoute?: string }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-[68px] glass border-r flex flex-col items-center py-8">
      {/* Logo */}
      <Link href="/" className="mb-10">
        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <LogoIcon className="w-5 h-5" />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = item.route === activeRoute;
          return (
            <Link
              key={item.id}
              href={item.route}
              className="group relative"
              aria-label={item.label}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white/80"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 rounded-md bg-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto flex flex-col gap-4">
        <button className="w-11 h-11 rounded-xl bg-white/8 hover:bg-white/12 transition-colors flex items-center justify-center text-xs font-medium text-white/60">
          登
        </button>
      </div>
    </aside>
  );
}