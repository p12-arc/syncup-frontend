"use client";

import { Pencil } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      {/* profile avatar and info */}
      <div className="flex flex-col items-center text-center">
        <div className="h-24 w-24 rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden border-2 border-white shadow-sm mb-4">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200')" }} />
        </div>
        <h3 className="text-lg font-bold text-[#4A3AFF]">
          Minnie Armstrong
        </h3>
        <p className="text-sm font-medium text-text-secondary mt-1">UI / UX Designer</p>
      </div>

      {/* profile completion progress bar */}
      <div className="mt-6">
        <div className="h-2 w-full rounded-full bg-gray-100">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500"
            style={{ width: "75%" }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-text-secondary">75% Completed</span>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <Pencil size={12} />
            Update profile
          </button>
        </div>
      </div>

      {/* action buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-bold text-text-primary hover:bg-gray-50 transition-colors shadow-sm">
          View Full Profile
        </button>
        <button className="flex-1 rounded-xl border-2 border-primary py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
          Share Profile
        </button>
      </div>
    </div>
  );
}
