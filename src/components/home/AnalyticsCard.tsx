"use client";

import { Lock } from "lucide-react";

export default function AnalyticsCard() {
    return (
        <div className="mt-1 flex-1 relative rounded-3xl bg-[#FFFFFF] p-6 shadow-[-1px_1px_10px_0px_rgba(0,0,0,0.1)] border-2 border-[#4A3AFF] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-text-primary">Analytics</span>
                <div className="flex items-center gap-4">
                    <span className="text-xs text-text-secondary font-medium">Connections</span>
                    <div className="flex items-center gap-2 bg-[#F9FAFB] rounded-lg p-1">
                        <span className="text-[10px] px-2 py-0.5 font-medium">1w</span>
                        <span className="text-[10px] px-2 py-0.5 font-medium">1m</span>
                        <span className="text-[10px] px-2 py-0.5 font-medium bg-white rounded shadow-sm text-primary">3m</span>
                    </div>
                </div>
            </div>

            {/* simple chart visualization */}
            <div className="relative h-44">
                <svg viewBox="0 0 200 80" className="w-full h-full">
                    <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4A3AFF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#00E096" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,60 Q20,55 40,65 T80,45 T120,55 T160,35 T200,45"
                        fill="none"
                        stroke="#00E096"
                        strokeWidth="2"
                    />
                    <path
                        d="M0,70 Q20,60 40,75 T80,55 T120,65 T160,45 T200,55"
                        fill="none"
                        stroke="#4A3AFF"
                        strokeWidth="2"
                    />
                </svg>

                {/* Lock Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
                    <div className="flex flex-col items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white shadow-lg">
                        <div className="flex items-center gap-2">
                            <Lock size={12} fill="white" />
                            <span className="text-xs font-bold uppercase tracking-wider">Analytics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* month labels */}
            <div className="mt-4 flex justify-between px-2">
                <span className="text-xs font-bold text-[#9CA3AF]">Sept</span>
                <span className="text-xs font-bold text-[#9CA3AF]">Oct</span>
                <span className="text-xs font-bold text-[#4A3AFF]">Nov</span>
            </div>
        </div>
    );
}
