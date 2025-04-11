// components/HoverCard.tsx
'use client';

import React from 'react';

interface HoverCardProps {
  techName: string;
  years: string;
  description: string;
  show: boolean; // control visibility
}

export default function HoverCard({ techName, years, description, show }: HoverCardProps) {
  return (
    <div className="w-full flex justify-center items-center">
      {show && (
        <div className="w-80 p-4 bg-gray-800 shadow-md rounded-lg border border-gray-700 z-50 transition-all duration-200 ease-in-out">
          <div className="text-gray-200 font-medium text-base">
            {techName}
            <span className="text-sm text-gray-500 ml-2">{years}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
      )}
    </div>
  );
}
