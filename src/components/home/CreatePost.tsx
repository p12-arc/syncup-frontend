import { Send } from "lucide-react";

export default function CreatePost() {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-text-primary mb-3">Create a Post</h3>

      {/* post input area */}
      <div className="flex items-center gap-3">
        {/* user avatar */}
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-medium text-gray-500">M</span>
        </div>

        {/* text input with send button */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-10 text-sm placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark transition-colors">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}