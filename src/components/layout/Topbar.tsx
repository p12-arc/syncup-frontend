import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-white border-b border-gray-100 px-6">
      {/* search bar in the center */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>
      </div>

      {/* right section with icons and avatar */}
      <div className="flex items-center gap-4">
        <button className="relative text-text-secondary hover:text-primary transition-colors">
          <MessageSquare size={20} />
        </button>
        <button className="relative text-text-secondary hover:text-primary transition-colors">
          <Bell size={20} />
        </button>

        {/* user avatar with dropdown indicator */}
        <button className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center overflow-hidden">
            <span className="text-white text-xs font-semibold">M</span>
          </div>
          <ChevronDown size={14} className="text-text-secondary" />
        </button>
      </div>
    </header>
  );
}