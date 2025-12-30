import React from "react";

const categories = ["For You", "Following", "Music", "Lifestyle", "Art", "Nature"];

export default function CategoryTabs() {
  return (
    <div className="w-full overflow-hidden px-6 rounded-md">
      <div
        className="flex items-center space-x-2"
        style={{
          width: "max-content",
          animation: "marquee 20s linear infinite",
        }}
      >
        {/* Repeat for infinite scroll */}
        {[...categories, ...categories].map((category, index) => (
          <button
            key={index}
className="whitespace-nowrap rounded-full px-4 py-1 text-sm font-mono shrink-0 bg-black text-fuchsia-400 border border-fuchsia-400/30"
          >
            {category}
          </button>
        ))}
      </div>

      {/* CSS keyframes trực tiếp trong style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
