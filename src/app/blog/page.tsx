"use client";

import { useState } from "react";

import AudioCard from "@/components/Molecules/AudioCard";
import BlogCard from "@/components/Molecules/BlogCard";
import TrendingArticle from "@/components/Molecules/TrendingArticle";

export default function Page() {
  const TOTAL_CARDS = 9; // tổng số BlogCard bạn muốn render
  const LOAD_COUNT = 3; // mỗi lần tải thêm
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, TOTAL_CARDS));
  };

  const hasMore = visibleCount < TOTAL_CARDS;

  return (
    <div className="w-full flex flex-col bg-none md:flex-row text-gray-900 min-h-screen p-4 gap-4">
      {/* Left Main Content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: visibleCount }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <button
            onClick={loadMore}
            className="mt-4 self-center px-6 py-3 rounded-xl border border-cyan-400
                       text-cyan-300 hover:text-white
                       bg-black bg-opacity-30 backdrop-blur-sm
                       shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_40px_#00ffff]
                       transition-all duration-300"
          >
            Tải thêm bài viết
          </button>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <AudioCard />
        <TrendingArticle />
      </div>
    </div>
  );
}
