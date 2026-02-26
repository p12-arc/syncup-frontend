import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  count: string;
  change: string;
  color: string;
}

// color mapping for the mini bar chart icon
const colorMap: Record<string, string[]> = {
  blue: ["bg-blue-500", "bg-blue-400", "bg-blue-300", "bg-blue-500", "bg-blue-400"],
  orange: ["bg-orange-500", "bg-orange-400", "bg-orange-300", "bg-orange-500", "bg-orange-400"],
  green: ["bg-green-500", "bg-green-400", "bg-green-300", "bg-green-500", "bg-green-400"],
  red: ["bg-red-500", "bg-red-400", "bg-red-300", "bg-red-500", "bg-red-400"],
};

export default function StatsCard({ title, count, change, color }: StatsCardProps) {
  const bars = colorMap[color] || colorMap.blue;

  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      <p className="text-xs font-medium text-text-secondary">{title}</p>
      <p className="mt-1 text-2xl font-bold text-text-primary">{count}</p>

      {/* bottom row with change indicator and mini chart */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <TrendingUp size={12} className="text-green-500" />
          <span className="text-[10px] text-text-muted">{change}</span>
        </div>

        {/* mini bar chart decoration */}
        <div className="flex items-end gap-0.5 h-6">
          {bars.map((barColor, i) => (
            <div
              key={i}
              className={`w-1 rounded-t-sm ${barColor}`}
              style={{ height: `${12 + Math.random() * 12}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}