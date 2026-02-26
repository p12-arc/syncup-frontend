"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { jobApplications } from "@/data/jobs";

// status badge color mapping
const statusStyles: Record<string, string> = {
  "in-progress": "bg-orange-100 text-orange-600",
  applied: "bg-blue-100 text-blue-600",
  offered: "bg-green-100 text-green-600",
  rejected: "bg-red-100 text-red-600",
};

// status display labels
const statusLabels: Record<string, string> = {
  "in-progress": "In-progress",
  applied: "Applied",
  offered: "Offered",
  rejected: "Rejected",
};

// company logo emoji mapping as placeholder
const companyLogos: Record<string, string> = {
  microsoft: "🟦",
  google: "🔵",
  meta: "♾️",
};

export default function JobApplicationTable() {
  // filter toggle states
  const [showNew, setShowNew] = useState(true);
  const [showInProgress, setShowInProgress] = useState(true);
  const [showPending, setShowPending] = useState(false);

  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* table header with filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-sm font-semibold text-text-primary">
          Job Application Status
        </h3>

        <div className="flex items-center gap-4">
          {/* new filter toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">New</span>
            <button
              onClick={() => setShowNew(!showNew)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showNew ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showNew ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* in progress filter toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">In Progress</span>
            <button
              onClick={() => setShowInProgress(!showInProgress)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showInProgress ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showInProgress ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* pending task filter toggle */}
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-xs text-text-secondary">Pending Task</span>
            <button
              onClick={() => setShowPending(!showPending)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                showPending ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm ${
                  showPending ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </label>

          {/* sort button */}
          <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary">
            Sort By
            <Filter size={12} />
          </button>
        </div>
      </div>

      {/* application table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-left text-xs font-medium text-text-secondary">
                Job title
              </th>
              <th className="pb-3 text-left text-xs font-medium text-text-secondary">
                Company
              </th>
              <th className="pb-3 text-left text-xs font-medium text-text-secondary">
                Applied on
              </th>
              <th className="pb-3 text-left text-xs font-medium text-text-secondary">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((job) => (
              <tr
                key={job.id}
                className="border-b border-gray-50 last:border-0"
              >
                <td className="py-3 text-sm text-text-primary">{job.title}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {companyLogos[job.companyLogo] || "🏢"}
                    </span>
                    <span className="text-sm text-text-primary">
                      {job.company}
                    </span>
                  </div>
                </td>
                <td className="py-3 text-sm text-text-secondary">
                  {job.appliedOn}
                </td>
                <td className="py-3">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10px] font-medium ${
                      statusStyles[job.status]
                    }`}
                  >
                    {statusLabels[job.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}