import { JobStat, JobApplication, RecommendedJob, VacancyDataPoint } from "@/types";

// stats cards shown at the top of job dashboard
export const jobStats: JobStat[] = [
  { title: "Active Jobs", count: "03", change: "+5 from yesterday", color: "blue" },
  { title: "Jobs In Progress", count: "03", change: "+5 from yesterday", color: "orange" },
  { title: "Shortlisted", count: "03", change: "+5 from yesterday", color: "green" },
  { title: "On Hold", count: "03", change: "+5 from yesterday", color: "red" },
];

// job application rows for the status table
export const jobApplications: JobApplication[] = [
  {
    id: "1",
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    companyLogo: "microsoft",
    appliedOn: "08/08/2023",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Senior Back-end Developer",
    company: "Google",
    companyLogo: "google",
    appliedOn: "24/07/2023",
    status: "applied",
  },
  {
    id: "3",
    title: "UI/UX designer",
    company: "Meta",
    companyLogo: "meta",
    appliedOn: "01/05/2023",
    status: "offered",
  },
];

// recommended jobs in the right sidebar
export const recommendedJobs: RecommendedJob[] = [
  {
    id: "1",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    timeAgo: "24 min. ago",
    logos: ["purple", "green"],
  },
  {
    id: "2",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    timeAgo: "24 min. ago",
    logos: ["purple", "green"],
  },
  {
    id: "3",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    timeAgo: "24 min. ago",
    logos: ["purple", "green"],
  },
  {
    id: "4",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    timeAgo: "24 min. ago",
    logos: ["purple", "green"],
  },
];

// monthly data points for the vacancy stats line chart
export const vacancyData: VacancyDataPoint[] = [
  { month: "Jan", applicationsSent: 200, interviews: 100, rejected: 50 },
  { month: "Feb", applicationsSent: 350, interviews: 150, rejected: 80 },
  { month: "Mar", applicationsSent: 300, interviews: 200, rejected: 60 },
  { month: "Apr", applicationsSent: 450, interviews: 250, rejected: 100 },
  { month: "May", applicationsSent: 500, interviews: 300, rejected: 120 },
  { month: "Jun", applicationsSent: 550, interviews: 350, rejected: 90 },
  { month: "Jul", applicationsSent: 600, interviews: 400, rejected: 150 },
  { month: "Aug", applicationsSent: 650, interviews: 500, rejected: 130 },
  { month: "Sep", applicationsSent: 500, interviews: 350, rejected: 180 },
  { month: "Oct", applicationsSent: 450, interviews: 300, rejected: 160 },
  { month: "Nov", applicationsSent: 400, interviews: 250, rejected: 140 },
  { month: "Dec", applicationsSent: 350, interviews: 200, rejected: 110 },
];