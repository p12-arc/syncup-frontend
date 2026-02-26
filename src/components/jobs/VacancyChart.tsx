"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { vacancyData } from "@/data/jobs";
import { ChevronDown } from "lucide-react";

export default function VacancyChart() {
  // toggle states for each data series
  const [showApplications, setShowApplications] = useState(true);
  const [showInterviews, setShowInterviews] = useState(true);
  const [showRejected, setShowRejected] = useState(false);

  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* chart header with toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-sm font-semibold text-text-primary">Vacancy Stats</h3>

        <div className="flex items-center gap-4">
          {/* application sent toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">Application Sent</span>
            <button
              onClick={() => setShowApplications(!showApplications)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showApplications ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showApplications ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* interviews toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">Interviews</span>
            <button
              onClick={() => setShowInterviews(!showInterviews)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showInterviews ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showInterviews ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* rejected toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">Rejected</span>
            <button
              onClick={() => setShowRejected(!showRejected)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showRejected ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showRejected ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* time period selector */}
          <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-text-secondary hover:bg-gray-50">
            This Year
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* recharts line chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={vacancyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={{ stroke: "#f0f0f0" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={{ stroke: "#f0f0f0" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1A2E",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "12px",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px" }}
            />
            {showApplications && (
              <Line
                type="monotone"
                dataKey="applicationsSent"
                stroke="#4A3AFF"
                strokeWidth={2}
                dot={{ r: 3, fill: "#4A3AFF" }}
                activeDot={{ r: 5 }}
                name="Application Sent"
              />
            )}
            {showInterviews && (
              <Line
                type="monotone"
                dataKey="interviews"
                stroke="#22C55E"
                strokeWidth={2}
                dot={{ r: 3, fill: "#22C55E" }}
                activeDot={{ r: 5 }}
                name="Interviews"
              />
            )}
            {showRejected && (
              <Line
                type="monotone"
                dataKey="rejected"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ r: 3, fill: "#EF4444" }}
                activeDot={{ r: 5 }}
                name="Rejected"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}