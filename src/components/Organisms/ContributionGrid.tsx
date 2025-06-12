'use client';
import { useState } from "react";
import clsx from "clsx";

const LEVELS = 5;
const YEAR = 2025;

const dateMatrix = generateDateMatrix(YEAR);

function generateDateMatrix(year: number) {
  const startDate = new Date(`${year}-01-01`);
  const matrix: string[][] = [];

  for (let week = 0; week < 53; week++) {
    const days: string[] = [];
    for (let day = 0; day < 7; day++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7 + day);
      if (date.getFullYear() === year) {
        const iso = date.toISOString().split("T")[0];
        days.push(iso);
      } else {
        days.push("");
      }
    }
    matrix.push(days);
  }

  return matrix;
}

export default function ContributionGrid() {
  const [data, setData] = useState<Record<string, number>>({});

  const toggle = (date: string) => {
    setData((prev) => {
      const level = prev[date] ?? 0;
      return { ...prev, [date]: (level + 1) % LEVELS };
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex gap-[3px]">
        {dateMatrix.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-[3px]">
            {week.map((date, dayIdx) => {
              if (!date) return <div key={dayIdx} className="w-4 h-4" />;

              const level = data[date] ?? 0;

              return (
                <div
  key={dayIdx}
  onClick={() => toggle(date)}
  title={date}
  className={clsx(
    "w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90 shadow-sm",
    {
      "bg-gray-700 hover:ring-1 hover:ring-zinc-500": level === 0,
      "bg-green-200 shadow-green-200/30": level === 1,
      "bg-green-400 shadow-green-400/30": level === 2,
      "bg-green-600 shadow-green-600/40": level === 3,
      "bg-green-800 shadow-green-800/50": level === 4,
    }
  )}
/>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
