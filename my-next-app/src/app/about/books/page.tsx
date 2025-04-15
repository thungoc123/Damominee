import Breadcrumb from "@/components/Atoms/Breadcrumb";
import Sidebar from "@/components/Layout/Sidebar";
import ListProjects from "@/components/Templates/ListProjects";

export default function Books() {
     return (
          <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
               <div className="flex flex-1 flex-col h-full">
                    <Breadcrumb />
                    <div className="flex flex-1 flex-col md:flex-row w-full h-full bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row h-full">
                              {/* Border trái */}
                              <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-2 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>

                              {/* Nội dung chính */}
                              <div className="flex-grow min-h-[calc(94vh-100px)]  p-6 flex bg-gray-800 flex-col gap-6 overflow-y-auto">
                                   <section className="w-full">
                                        <h2 className="text-sm text-gray-500 mb-2">// Showing my list projects</h2>
                                        <ListProjects />
                                   </section>
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