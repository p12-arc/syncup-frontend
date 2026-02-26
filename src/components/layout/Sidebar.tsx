"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Briefcase,
  MessageCircle,
  UserPlus,
  Compass,
  Settings,
} from "lucide-react";

// navigation items for the left sidebar
const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: Users, href: "#", label: "Network" },
  { icon: Briefcase, href: "/jobs", label: "Jobs" },
  { icon: MessageCircle, href: "#", label: "Messages" },
  { icon: UserPlus, href: "#", label: "Connections" },
];

// bottom navigation items
const bottomItems = [
  { icon: Compass, href: "#", label: "Explore" },
  { icon: Settings, href: "#", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[60px] flex-col items-center justify-between bg-white border-r border-gray-100 py-4">
      {/* logo section at the top */}
      <div className="flex flex-col items-center gap-1">
        <div className="mb-4 flex items-center gap-1">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <div className="h-5 w-4 border-2 border-gray-300 rounded-sm" />
        </div>

        {/* main navigation icons */}
        <nav className="flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-gray-100"
                }`}
                title={item.label}
              >
                {/* active indicator bar on the left */}
                {isActive && (
                  <div className="absolute left-[-10px] h-8 w-1 rounded-r-full bg-primary" />
                )}
                <item.icon size={20} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* bottom navigation icons */}
      <nav className="flex flex-col items-center gap-1">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
            title={item.label}
          >
            <item.icon size={20} />
          </Link>
        ))}
      </nav>
    </aside>
  );
}