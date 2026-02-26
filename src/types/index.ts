// post data structure for the home feed
export interface Post {
  id: string;
  author: string;
  avatar: string;
  role: string;
  date: string;
  content: string;
  image?: string;
  likes: number;
  reactions: number;
  reposts: number;
  comments: number;
  shares: number;
  saved: number;
}

// story user in the left sidebar
export interface StoryUser {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

// suggestion card for courses section
export interface Suggestion {
  id: string;
  title: string;
  author: string;
  rating: number;
  image: string;
  discount?: string;
}

// stats card for the job dashboard
export interface JobStat {
  title: string;
  count: string;
  change: string;
  color: string;
}

// job application row in the dashboard table
export interface JobApplication {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  appliedOn: string;
  status: "in-progress" | "applied" | "offered" | "rejected";
}

// recommended job listing
export interface RecommendedJob {
  id: string;
  title: string;
  company: string;
  rating: number;
  location: string;
  type: string;
  timeAgo: string;
  logos: string[];
}

// vacancy chart data point
export interface VacancyDataPoint {
  month: string;
  applicationsSent: number;
  interviews: number;
  rejected: number;
}