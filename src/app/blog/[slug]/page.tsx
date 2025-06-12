"use client"; // nếu bạn dùng app router

import { useState } from "react";
import SeriesList from "@/components/Organisms/SeriesList";
import BlogContentLayout from "@/components/Templates/BlogContentLayout";
import CommentPanel from "@/components/Molecules/CommentPanel";

export default function Page() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row bg-none text-gray-200 relative">
      <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
        {/* Sidebar trái */}
        {!isPanelOpen && (
          <div className="hidden md:block w-1/4 p-6 text-gray-500 bg-gray-800 border-r border-gray-700 transition-all duration-300">
            <SeriesList />
            <button
              onClick={() => setIsPanelOpen(true)}
              className="mt-4 w-full text-left px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              ---- Open Comment ----
            </button>
          </div>
        )}

        {/* Nội dung chính */}
        <div
          className={`p-6 text-gray-500 bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
            isPanelOpen ? "w-1/2" : "w-full"
          }`}
        >
          <BlogContentLayout />
          <div className="flex justify-between items-center mt-6">
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
              ← Previous
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
              Next →
            </button>
          </div>
        </div>

        {/* Sliding Panel - Comments */}
        {isPanelOpen && (
          <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-900 border-l border-gray-700 shadow-xl z-50 transition-transform duration-300">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-white">Comments</h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Close ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {/* Replace this with your comment section */}
                <CommentPanel />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
