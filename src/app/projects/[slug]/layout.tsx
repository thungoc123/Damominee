import Breadcrumb from "@/components/Atoms/Breadcrumb";
import Sidebar from "@/components/Layout/Sidebar";
import MiniSidebar from "@/components/Organisms/MiniSidebar";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
     return (
           <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
                
                         <div className="flex flex-1 flex-col h-full">
                              <Breadcrumb />
                              <div className="w-full flex flex-1 flex-col md:flex-row h-full bg-[#0d1117]">
                                   <MiniSidebar />
                                   <Sidebar />
                                   <div className="flex-1 flex bg-gray-900 flex-col md:flex-row h-full">
                                   <main className="">{children}</main>
                                        {/* Border trái */} 
                                   </div>
                              </div>
                         </div>
                    </div>
     //   <div className="bg-black text-white min-h-screen">
     //     <div className="border-b border-gray-700 p-4">Project Detail Header</div>
     //   </div>
     );
   }