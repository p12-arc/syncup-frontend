import { Star, MapPin, ArrowRight } from "lucide-react";
import { recommendedJobs } from "@/data/jobs";

export default function RecommendedJobs() {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-text-primary mb-1">
        Recomended Jobs
      </h3>
      <p className="text-[10px] text-text-muted uppercase tracking-wide mb-3">
        TODAY
      </p>

      {/* list of recommended job cards */}
      <div className="flex flex-col gap-3">
        {recommendedJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg border border-gray-100 p-3 hover:border-primary/20 transition-colors"
          >
            {/* job header row */}
            <div className="flex items-start gap-2.5">
              {/* company logo placeholder circles */}
              <div className="flex -space-x-1.5 flex-shrink-0">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">S</span>
                </div>
                <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">U</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-text-primary">
                  {job.title}
                </p>
                <p className="text-[10px] text-text-muted">{job.company}</p>
              </div>
            </div>

            {/* job details row */}
            <div className="mt-2 flex items-center gap-2 text-[10px] text-text-muted">
              <span className="flex items-center gap-0.5">
                <Star size={9} className="fill-yellow-400 text-yellow-400" />
                {job.rating} Trusted
              </span>
              <span className="flex items-center gap-0.5">
                <MapPin size={9} />
                {job.location}
              </span>
              <span className="rounded bg-gray-100 px-1.5 py-0.5">
                {job.type}
              </span>
            </div>

            {/* bottom row */}
            <div className="mt-2 flex items-center justify-between text-[10px] text-text-muted">
              <span className="flex items-center gap-0.5">
                <Star size={9} className="fill-yellow-400 text-yellow-400" />
                4.5 Trusted
              </span>
              <span>{job.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>

      {/* view all link */}
      <button className="mt-4 flex items-center gap-1 text-xs font-medium text-text-primary hover:text-primary transition-colors mx-auto">
        View all posts
        <ArrowRight size={12} />
      </button>
    </div>
  );
}