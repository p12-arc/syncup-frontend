import { MoreHorizontal } from "lucide-react";
import { storyUsers } from "@/data/stories";

export default function SosmedStories() {
  return (
    <div className="mt-4 rounded-xl bg-card p-4 shadow-sm">
      {/* section header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-text-primary">Sosmed Stories</h3>
        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* list of story users */}
      <div className="flex flex-col gap-3">
        {storyUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            {/* user avatar */}
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-gray-500">
                {user.name.charAt(0)}
              </span>
            </div>

            {/* user info and action buttons */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-text-primary truncate">
                {user.name}
              </p>
              <p className="text-[10px] text-text-muted truncate">{user.role}</p>

              <div className="mt-1.5 flex gap-2">
                <button className="rounded-full bg-primary px-4 py-1 text-[10px] font-medium text-white hover:bg-primary-dark transition-colors flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Follow
                </button>
                <button className="rounded-full border border-gray-200 px-3 py-1 text-[10px] font-medium text-text-secondary hover:bg-gray-50 transition-colors flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 3h5v5H1z M4 2h5v5" stroke="currentColor" strokeWidth="1" />
                  </svg>
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