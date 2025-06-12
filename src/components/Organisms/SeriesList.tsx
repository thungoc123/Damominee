"use client"; // nếu dùng app router

import React, { useState } from "react";

type Episode = {
  id: number;
  title: string;
  duration: string;
};

const episodes: Episode[] = [
  {
    id: 1,
    title: "Art in the City: How Modern Sculpture Shapes Urban Spaces",
    duration: "0:54",
  },
  {
    id: 2,
    title: "Is Film Photography Really Making a Comeback?",
    duration: "1:02",
  },
  {
    id: 3,
    title: "Behind the Scenes of Galleries: How Exhibitions Are Curated",
    duration: "0:42",
  },
  {
    id: 4,
    title: "Culture Online: Can Digital Replace the Museum?",
    duration: "0:42",
  },
  {
    id: 5,
    title: "Music as Therapy: How Sounds Influence Our Minds",
    duration: "0:56",
  },
];

const SeriesList = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="bg-gray-800 p-6 max-w-xl w-full mx-auto">
      <p className="text-sm text-gray-200 mb-1">Series</p>
      <h2 className="text-xl font-bold text-gray-200 mb-4">The Creative Pulse</h2>

      <ul className="space-y-2">
        {episodes.map((ep) => {
          const isActive = ep.id === activeId;
          const textColor = isActive ? "text-gray-200" : "text-gray-700";

          return (
            <li
              key={ep.id}
              onClick={() => setActiveId(ep.id)}
              className={`flex items-center justify-between border-t last:border-b border-gray-300 py-2 cursor-pointer hover:bg-gray-700 transition-colors duration-150`}
            >
              <div className="flex-1">
                <p className={`text-sm font-medium whitespace-normal break-words ${textColor}`}>
                  <span className={`font-bold mr-2 ${textColor}`}>
                    #{ep.id.toString().padStart(2, "0")}
                  </span>
                  {ep.title}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4 shrink-0">
                {/* Bạn có thể thêm duration hoặc nút play ở đây */}
              </div>
            </li>
          );
        })}
       
      </ul>
    </div>
  );
};

export default SeriesList;
