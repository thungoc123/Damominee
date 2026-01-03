"use client";
import { useParams } from 'next/navigation';
import ProjectDocument from '@/components/Organisms/ProjectDocument';
import ProjectShowcase from '@/components/Organisms/ProjectShowcase';
import { projects } from '@/constants/projects';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-screen min-h-[calc(94vh-100px)] flex overflow-hidden bg-gray-800">
      {/* Nội dung chính trái */}
      <div className="w-[37%] flex flex-col gap-6 h-full overflow-y-auto">
        <ProjectDocument description={project.description} name={project.name} responsibilities={project.responsibilities} AccountTest={project.AccountTest} />
      </div>

      {/* Border giữa */}
      <div className="w-[20px] shrink-0 relative border-l border-r border-t border-white/10 bg-gray-800">
        <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
      </div>

      {/* Nội dung chính phải */}
      <div className="w-[45%] flex flex-col gap-6 h-full overflow-y-auto">
        <ProjectShowcase project={project} />
      </div>

      {/* Border phải */}
      <div className="w-[20px] shrink-0 relative border-l border-r border-t border-white/10 bg-gray-800">
        <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
      </div>
    </div>

  );
}
