import { Post } from "@/types";

// mock data for social feed posts on the home page
export const posts: Post[] = [
  {
    id: "1",
    author: "Pan Feng Shui",
    avatar: "/images/avatar-pan.jpg",
    role: "Content Creator",
    date: "12 April at 09.28 PM",
    content:
      "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article",
    image: "/images/post-meeting.jpg",
    likes: 3,
    reactions: 8,
    reposts: 0,
    comments: 25,
    shares: 231,
    saved: 24,
  },
  {
    id: "2",
    author: "Clara Kim",
    avatar: "/images/avatar-clara.jpg",
    role: "Fitness Coach",
    date: "12 April at 09.28 PM",
    content:
      "A Great Way To Generate All The Motivation You Need To Get Fit.",
    likes: 3,
    reactions: 8,
    reposts: 0,
    comments: 25,
    shares: 231,
    saved: 24,
  },
  {
    id: "3",
    author: "Pan Feng Shui",
    avatar: "/images/avatar-pan.jpg",
    role: "Content Creator",
    date: "12 April at 09.28 PM",
    content:
      "Exploring new ways to connect with professionals in the tech industry.",
    likes: 5,
    reactions: 12,
    reposts: 2,
    comments: 18,
    shares: 142,
    saved: 31,
  },
];