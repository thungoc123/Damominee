import Breadcrumb from "@/components/Atoms/Breadcrumb";
import CodeEditorUI from "@/components/Organisms/CodeUI";
import InterestSection from "@/components/Organisms/InterestSection";
import MiniSidebar from "@/components/Organisms/MiniSidebar";

import UserInfo from "@/components/Molecules/UserInfo";
import Sidebar from "@/components/Layout/Sidebar";

export default function Interest() {
     return (
          <div className="flex flex-row bg-none text-gray-200">
               <MiniSidebar />
               <div className="w-full"> 
                    <Breadcrumb />
                    <div className="flex flex-col md:flex-row bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
                              <div className="w-[50%] h-full overflow-y-auto border-r border-gray-700">
                              <InterestSection />
                              </div>
                              <div className="w-[2.5%] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>
                              <div className="w-[70%] p-6 flex bg-gray-800 flex-col gap-6">
                                   <section>
                                   <h2 className="text-sm text-gray-500 mb-2">{`// Showing my passion`}</h2>
                                   <UserInfo />
                                        <CodeEditorUI />
                                   </section>
                              </div>
                              <div className="w-[2.5%] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          
     );
}