'use client'

export default function AbilityTimeline() {
  return (
    <div className="w-full p-6  text-gray-200">
      <div className="relative w-full max-w-5xl mx-auto h-40">

        {/* Base line */}
        <div className="absolute top-1/2 left-0 right-25 h-[2px] bg-white/20" />

        {/* Ability (start) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="h-5 w-[2px] bg-gray-400" />
          <div className="mt-2 text-xs text-gray-400 text-center -translate-x-4">
            Ability
          </div>
        </div>

        {/* Pink line: Ability -> Current Ability */}
        <div className="absolute top-1/2 left-0 w-[460px] h-[2px] bg-pink-400" />

        {/* Current Ability – IELTS 5.0 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-7 w-[3px] bg-pink-500 shadow-pink-500/50" />
          <div className="mt-2 text-xs text-pink-400 text-center whitespace-nowrap">
            Current Ability
          </div>
          <div className="text-[11px] text-pink-300 text-center">
            IELTS 5.0
          </div>
        </div>

        {/* Arc: More effort from 5.0 -> Goal */}
        <svg
          className="absolute right-20" 
          width="50%"
          height="90"
          viewBox="0 0 500 90"
          fill="none"
        >
          <path
            d="M 10 45 Q 250 -10 490 45"
            stroke="#f472b6"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="250"
            y="12"
            textAnchor="middle"
            className="fill-pink-400 text-xs"
          >
            More effort / More tasks
          </text>
        </svg>

        {/* Goal */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="h-7 w-[3px] bg-green-400 shadow-green-400/50" />
          <div className="mt-2 text-xs text-green-400 text-center whitespace-nowrap">
            Goal IELTS 7.5
          </div>
          <div className="text-[11px] text-gray-400 text-center">
            7/2026
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="max-w-3xl mx-auto mt-6 text-sm text-gray-400 leading-relaxed">
        I can understand the main ideas of English materials related to study, work, and daily topics.<br /><br />
        I can communicate my opinions and experiences in English in a clear and understandable way.<br /><br />
        I can write basic academic essays with a clear structure, including an introduction, body paragraphs, and a conclusion.<br /><br />
        I can follow lectures, discussions, and instructional videos when the content is not overly complex.<br /><br />
        I am able to learn and improve my English independently by identifying my weaknesses and practicing regularly.
      </div>
    </div>
  )
}
