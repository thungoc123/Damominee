import UserInfo from "../Molecules/UserInfo";
import { Folder, FileText, Download } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDotnet, SiMysql, SiPostgresql, SiWordpress, SiPhp } from "react-icons/si";
import { Project } from "@/types/Project";

interface ProjectShowcaseProps {
  project: Project;
}

const techIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "React": SiReact,
  "React TypeScript": SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Flutter": SiFlutter,
  "ASP.NET Web API": SiDotnet,
  "ASP.NET Core": SiDotnet,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "WordPress": SiWordpress,
  "PHP": SiPhp,
  // Add more as needed
};

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
     return (
          <div className=" w-full p-6 flex bg-gray-800 flex-col">
               <div className="">
                    <UserInfo />
                    <div className="w-[640px] h-[360px] max-w-2xl mx-auto">
                         <iframe
                              className="w-full h-full"
                              src={project.youtubeLink || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                         ></iframe>
                    </div>
                    <div className="flex flex-row gap-4 mt-4 justify-center">
                         {project.deployLink && (
                              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                                   <Folder size={16} />
                                   <span>View project</span>
                              </a>
                         )}
                         {project.documentLink && (
                              <a href={project.documentLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                                   <FileText size={16} />
                                   <span>View document</span>
                              </a>
                         )}
                         {project.appLink && (
                              <a href={project.appLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                                   <Download size={16} />
                                   <span>Install now</span>
                              </a>
                         )}
                    </div>
                    <div className="flex flex-row gap-4 mt-4 justify-center flex-wrap">
                         {project.techStack.map((tech, index) => {
                              const IconComponent = techIconMap[tech];
                              return IconComponent ? (
                                   <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                        <IconComponent size={16} />
                                        <span>{tech}</span>
                                   </div>
                              ) : (
                                   <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span>{tech}</span>
                                   </div>
                              );
                         })}
                    </div>
                    {/* Add your project showcase items here */}
               </div>

          </div>
     )

}
