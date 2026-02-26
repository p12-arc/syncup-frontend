"use client";

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
  Send,
} from "lucide-react";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-3xl bg-card p-6 shadow-sm mb-6">
      {/* post header with author info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${post.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}')` }} />
          </div>
          <div>
            <p className="text-sm font-bold text-text-primary">{post.author}</p>
            <p className="text-[11px] font-medium text-text-muted mt-0.5">{post.date}</p>
          </div>
        </div>
        <button className="text-text-muted hover:text-text-secondary">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* post content text */}
      <p className="mt-4 text-sm font-medium text-text-primary leading-relaxed">
        {post.content.includes("ABC Company") ? (
          <>
            Had an amazing interaction with the founder of{" "}
            <strong className="text-text-primary">ABC Company</strong>, sharing my experience through this
            small article
          </>
        ) : (
          post.content
        )}
      </p>

      {/* post image if available */}
      {post.image && (
        <div className="mt-4 overflow-hidden rounded-2xl bg-[#F3F4F6] relative group">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      )}

      {/* engagement stats row */}
      <div className="mt-4 flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-all active:scale-95 group">
            <ThumbsUp size={16} className="group-hover:fill-primary/10" />
            <span className="text-xs font-bold">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-all active:scale-95 group">
            <Smile size={16} className="group-hover:fill-primary/10" />
            <span className="text-xs font-bold">{post.reactions}</span>
          </button>
          <button className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-all active:scale-95">
            <Repeat2 size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-[#6B7280]">
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-primary">
            <MessageCircle size={14} />
            {post.comments} Comments
          </span>
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-primary">
            <Share2 size={14} />
            {post.shares} Shares
          </span>
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-primary">
            <Bookmark size={14} />
            {post.saved} Saved
          </span>
        </div>
      </div>

      {/* comment input area */}
      <div className="mt-4 flex items-center gap-4">
        <div className="h-9 w-9 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100')" }} />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Write your comment..."
            className="w-full rounded-2xl border border-gray-100 bg-[#F9FAFB] py-2.5 pl-4 pr-32 text-xs font-medium placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <button className="text-[#9CA3AF] hover:text-primary transition-colors">
              <Paperclip size={16} />
            </button>
            <button className="text-[#9CA3AF] hover:text-primary transition-colors">
              <Smile size={16} />
            </button>
            <button className="text-[#9CA3AF] hover:text-primary transition-colors">
              <ImageIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
