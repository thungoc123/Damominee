"use client";
import ProjectDocument from '@/components/Organisms/ProjectDocument';
import ProjectShowcase from '@/components/Organisms/ProjectShowcase';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
     const params = useParams();
     const slug = params.slug;

     return (
          <div className="w-screen min-h-[calc(94vh-100px)] flex overflow-hidden bg-gray-800">
          {/* Nội dung chính trái */}
          <div className="w-[37%] flex flex-col gap-6 p-6 h-full overflow-y-auto">
            <ProjectDocument />
          </div>
        
          {/* Border giữa */}
          <div className="w-[20px] shrink-0 relative border-l border-r border-t border-white/10 bg-gray-800">
            <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
          </div>
        
          {/* Nội dung chính phải */}
          <div className="w-[45%] flex flex-col gap-6 p-6 h-full overflow-y-auto">
            <ProjectShowcase />
          </div>
        
          {/* Border phải */}
          <div className="w-[20px] shrink-0 relative border-l border-r border-t border-white/10 bg-gray-800">
            <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
          </div>
        </div>
        
        


     );
}
