import Breadcrumb from "@/components/Atoms/Breadcrumb";
import { projects } from "@/constants/projects";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
     return (
          <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
               <div className="flex flex-1 flex-col h-full">
                    <Breadcrumb />
                    <div className="flex flex-1 flex-col md:flex-row w-full h-full bg-[#0d1117]">
                         {/* <Sidebar /> */}
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row h-full">
                              {/* Border trái */}
                              <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-2 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>

                              {/* Nội dung chính */}
                              <div className="flex-grow min-h-[calc(94vh-100px)] flex bg-gray-800 flex-col overflow-y-auto p-6">
                                   <h2 className="text-xl text-white mb-4">// Projects</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {projects.map((project) => (
                                             <Link key={project.slug} href={`/projects/${project.slug}`}>
                                                  <div className="bg-gray-700 p-4 rounded-md hover:bg-gray-600 transition-colors">
                                                      
                                                       <h3 className="text-teal-300 text-lg font-mono">{project.name}</h3>
                                                  </div>
                                             </Link>
                                        ))}
                                   </div>
                              </div>
                              {/* Border phải */}
                              <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}