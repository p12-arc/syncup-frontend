import {
  ThumbsUp,
  Smile,
  Repeat2,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Paperclip,
  Image as ImageIcon,
} from "lucide-react";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* post header with author info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-medium text-blue-600">
              {post.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">{post.author}</p>
            <p className="text-xs text-text-muted">{post.date}</p>
          </div>
        </div>
        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* post content text */}
      <p className="mt-3 text-sm text-text-primary leading-relaxed">
        {post.content.includes("ABC Company") ? (
          <>
            Had an amazing interaction with the founder of{" "}
            <strong>ABC Company</strong>, sharing my experience through this
            small article
          </>
        ) : (
          post.content
        )}
      </p>

      {/* post image if available */}
      {post.image && (
        <div className="mt-3 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-green-100 h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🏢</div>
            <p className="text-sm text-text-secondary font-medium">We Help Startups</p>
          </div>
        </div>
      )}

      {/* engagement stats row */}
      <div className="mt-3 flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors">
            <ThumbsUp size={14} />
            <span className="text-xs">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors">
            <Smile size={14} />
            <span className="text-xs">{post.reactions}</span>
          </button>
          <button className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors">
            <Repeat2 size={14} />
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <MessageCircle size={12} />
            {post.comments} Comments
          </span>
          <span className="flex items-center gap-1">
            <Share2 size={12} />
            {post.shares} Shares
          </span>
          <span className="flex items-center gap-1">
            <Bookmark size={12} />
            {post.saved} Saved
          </span>
        </div>
      </div>

      {/* comment input area */}
      <div className="mt-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-medium text-gray-500">M</span>
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Write your comment..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-3 pr-20 text-xs placeholder:text-text-muted focus:border-primary focus:outline-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <button className="text-text-muted hover:text-text-secondary">
              <Paperclip size={13} />
            </button>
            <button className="text-text-muted hover:text-text-secondary">
              <Smile size={13} />
            </button>
            <button className="text-text-muted hover:text-text-secondary">
              <ImageIcon size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}