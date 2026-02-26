import ProfileCard from "@/components/home/ProfileCard";
import SosmedStories from "@/components/home/SosmedStories";
import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import AdBanner from "@/components/home/AdBanner";
import SuggestionCard from "@/components/home/SuggestionCard";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* left sidebar - profile and stories */}
        <div className="lg:col-span-3">
          <div className="sticky top-[72px]">
            <ProfileCard />
            <SosmedStories />
          </div>
        </div>

        {/* center feed - posts */}
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-4">
            <CreatePost />
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* right sidebar - ads and suggestions */}
        <div className="lg:col-span-3">
          <div className="sticky top-[72px]">
            <AdBanner />
            <SuggestionCard />
          </div>
        </div>
      </div>
    </div>
  );
}