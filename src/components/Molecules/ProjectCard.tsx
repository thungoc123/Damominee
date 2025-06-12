"use client"
import Image from 'next/image';
import Link from 'next/link';
export default function ProjectCard() {

  return (
    <div className="w-full w-full md:w-[calc(33.333%-16px)] bg-gray-900 text-gray-400 p-4 rounded-lg overflow-hidden">
      {/* Project Title */}
      <div className="flex items-center mb-2">
        <h2 className="text-orange-500 font-mono font-bold">Project 1 </h2>
        <span className="text-gray-500 font-mono">// </span>
        <span className="text-teal-400 font-mono ml-2">_justeat-clone</span>
      </div>

      {/* Project Preview */}
      <div className="w-full bg-white rounded-lg overflow-hidden mb-6">
        {/* Food Image and CTA */}
        <div className="bg-orange-500 h-40 relative flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/next.svg"
              alt="avatar"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <p className="text-gray-400 font-mono leading-relaxed">
          Nel primo progetto durante il corso di DevelHope abbiamo replicato il sito di Just Eat.
        </p>
      </div>

      {/* GitHub Link */}
      <Link href={`/projects/skinTime`}>
      <button
        className="w-full py-3 text-center rounded bg-gray-800 text-teal-400 font-mono hover:bg-teal-600 transition-colors duration-300 cursor-pointer"
      >
        view-project-on-github
      </button></Link>
     
    </div>
  );
}