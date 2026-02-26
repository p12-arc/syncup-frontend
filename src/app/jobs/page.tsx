import StatsCard from "@/components/jobs/StatsCard";
import VacancyChart from "@/components/jobs/VacancyChart";
import JobApplicationTable from "@/components/jobs/JobApplicationTable";
import RecommendedJobs from "@/components/jobs/RecommendedJobs";
import { jobStats } from "@/data/jobs";
import { ChevronDown } from "lucide-react";

export default function JobDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      {/* header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-text-primary">
            Welcome back, Julie 👋
          </h1>
          <p className="text-sm text-text-secondary">
            Here&apos;s what you need to focus on today
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 transition-colors">
            Last 30 Days
            <ChevronDown size={14} />
          </button>
          <button className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
            Search Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* main */}
        <section className="lg:col-span-9">
          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {jobStats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="mb-4">
            <VacancyChart />
          </div>

          <JobApplicationTable />
        </section>

        {/* right */}
        <aside className="lg:col-span-3">
          <div className="sticky top-[72px]">
            <RecommendedJobs />
          </div>
        </aside>
      </div>
    </div>
  );
}