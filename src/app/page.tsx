import ProfileCard from "@/components/home/ProfileCard";
import AnalyticsCard from "@/components/home/AnalyticsCard";
import SosmedStories from "@/components/home/SosmedStories";
import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import AdBanner from "@/components/home/AdBanner";
import SuggestionCard from "@/components/home/SuggestionCard";

const posts = [
  {
    id: "1",
    author: "Pan Feng Shui",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    role: "Senior Graphic Designer",
    date: "12 April at 09:28 PM",
    content: "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    likes: 3,
    reactions: 8,
    reposts: 2,
    comments: 25,
    shares: 231,
    saved: 24,
  },
  {
    id: "2",
    author: "Clara Kim",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
    role: "Software Engineer",
    date: "12 April at 09:28 PM",
    content: "A Great Way To Generate All The Motivation You Need To Get Fit.",
    likes: 3,
    reactions: 8,
    reposts: 2,
    comments: 25,
    shares: 231,
    saved: 24,
  }
];

export default function HomeDashboardPage() {
  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-6 bg-[#FBFCFE] min-h-screen">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 max-w-[1600px] mx-auto">
        {/* Left Column (3 spans) */}
        <aside className="lg:col-span-3 space-y-6">
          <ProfileCard />
          <AnalyticsCard />
          <SosmedStories />
        </aside>

        {/* Middle Column (6 spans) */}
        <main className="lg:col-span-6">
          <CreatePost />
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post as any} />
            ))}
          </div>
        </main>

        {/* Right Column (3 spans) */}
        <aside className="lg:col-span-3 space-y-6">
          <AdBanner />
          <SuggestionCard />
        </aside>
      </div>
    </div>
  );
}
