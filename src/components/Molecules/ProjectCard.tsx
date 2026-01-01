"use client"
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description?: string;
  viewDetailsLink: string;
  viewDetailsText?: string;
  imageSrc?: string;
  imageAlt?: string;
  progress?: number;
  author?: string;
  progressDescription?: string;
  hideViewButton?: boolean;
}

export default function ProjectCard({ title, description, viewDetailsLink, viewDetailsText = "Xem chi tiết", imageSrc, imageAlt = "Project image", progress, author, progressDescription, hideViewButton }: ProjectCardProps) {

  return (
    <div className="w-full w-full md:w-[calc(33.333%-16px)] bg-gray-900 text-gray-400 p-4 rounded-lg overflow-hidden min-h-[350px] flex flex-col">
      {/* Project Title */}
      <div className="flex items-center mb-2">
        <h2 className="text-orange-500 font-mono font-bold">{title} </h2>
        {/* <span className="text-gray-500 font-mono">// </span> */}
      </div>

      {/* Project Preview */}
      {imageSrc && (
        <div className="w-full bg-white rounded-lg overflow-hidden mb-6">
          <div className="w-full h-40 relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Project Description */}
      {description && (
        <div className={`mb-8 flex-grow ${!imageSrc ? 'mt-4' : ''}`}>
          <p className="text-gray-400 font-mono leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="mb-6">
          {author && <p className="text-sm text-gray-500 mb-2">by {author}</p>}
          {progressDescription && <p className="text-sm text-gray-400 mb-2">{progressDescription}</p>}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* GitHub Link */}
      {!hideViewButton && (
        <Link href={viewDetailsLink}>
        <button
          className="w-full py-3 text-center rounded bg-gray-800 text-teal-400 font-mono hover:bg-teal-600 transition-colors duration-300 cursor-pointer"
        >
          {viewDetailsText}
        </button></Link>
      )}
     
    </div>
  );
}