"use client";

import { MoreHorizontal, Plus, MessageSquare } from "lucide-react";

const storyUsers = [
  {
    id: "1",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "2",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "3",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
];

export default function SosmedStories() {
  return (
    <div className="mt-6 rounded-3xl bg-card p-6 shadow-sm">
      {/* section header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-bold text-text-primary">Sosmed Stories</h3>
        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* list of story users */}
      <div className="flex flex-col gap-5">
        {storyUsers.map((user, index) => (
          <div key={`${user.id}-${index}`} className="flex items-center gap-4">
            {/* user avatar */}
            <div className="h-11 w-11 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${user.avatar}')` }} />
            </div>

            {/* user info and action buttons */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-primary truncate">
                {user.name}
              </p>
              <p className="text-[11px] font-medium text-text-muted truncate">{user.role}</p>

              <div className="mt-2.5 flex gap-3">
                <button className="flex-1 rounded-full bg-primary py-1.5 text-[11px] font-bold text-white hover:bg-primary-dark transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95">
                  <Plus size={12} strokeWidth={3} />
                  Follow
                </button>
                <button className="flex-1 rounded-full border border-gray-200 py-1.5 text-[11px] font-bold text-text-secondary hover:bg-gray-50 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95">
                  <MessageSquare size={12} fill="currentColor" stroke="none" className="opacity-70" />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
