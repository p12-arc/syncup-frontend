import { Star } from "lucide-react";

export default function SuggestionCard() {
  return (
    <div className="mt-4 rounded-xl bg-card p-4 shadow-sm">
      {/* section header */}
      <h3 className="text-sm font-bold text-primary">Suggestions</h3>
      <p className="mt-1 text-xs text-text-secondary leading-relaxed">
        Below courses are suggested based on your current skills &amp; curated to help
        you stay updated with the current market trends.
      </p>

      {/* course card */}
      <div className="mt-3 overflow-hidden rounded-lg">
        <div className="h-28 bg-gradient-to-br from-red-200 to-pink-200 flex items-center justify-center rounded-t-lg">
          <span className="text-4xl">🎨</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Figma: Basics
            </p>
            <p className="text-xs text-text-secondary">Tyler Hooks</p>
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-text-primary">4.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}