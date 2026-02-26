"use client";

import { Pencil } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* profile avatar and info */}
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
          <span className="text-2xl font-semibold text-gray-500">M</span>
        </div>
        <h3 className="mt-3 text-sm font-semibold text-primary">
          Minnie Armstrong
        </h3>
        <p className="text-xs text-text-secondary">UI / UX Designer</p>
      </div>

      {/* profile completion progress bar */}
      <div className="mt-4">
        <div className="h-1.5 w-full rounded-full bg-gray-100">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-primary to-green-400"
            style={{ width: "75%" }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-text-secondary">75% Completed</span>
          <button className="flex items-center gap-1 text-xs text-primary hover:underline">
            <Pencil size={10} />
            Update profile
          </button>
        </div>
      </div>

      {/* action buttons */}
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-text-primary hover:bg-gray-50 transition-colors">
          View Full Profile
        </button>
        <button className="flex-1 rounded-lg border border-primary py-1.5 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-colors">
          Share Profile
        </button>
      </div>

      {/* analytics mini section */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-text-primary">Analytics</span>
          <span className="text-xs text-text-secondary">Connections</span>
        </div>

        {/* simple chart visualization */}
        <div className="relative h-24">
          <svg viewBox="0 0 200 80" className="w-full h-full">
            {/* gradient fill under the line */}
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A3AFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4A3AFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q30,40 60,45 T120,30 T180,20 L200,25 L200,80 L0,80 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0,60 Q30,40 60,45 T120,30 T180,20 L200,25"
              fill="none"
              stroke="#4A3AFF"
              strokeWidth="2"
            />
          </svg>

          {/* analytics badge overlay */}
          <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-medium text-white flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9V5h2v4H1zm3 0V1h2v8H4zm3 0V3h2v6H7z" fill="white" />
            </svg>
            Analytics
          </div>
        </div>

        {/* month labels */}
        <div className="mt-1 flex justify-between text-[10px] text-text-muted">
          <span>Sept</span>
          <span>Oct</span>
          <span>Nov</span>
        </div>
      </div>
    </div>
  );
}