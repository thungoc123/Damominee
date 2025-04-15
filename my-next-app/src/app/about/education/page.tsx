import Breadcrumb from "@/components/Atoms/Breadcrumb";
import CodeEditorUI from "@/components/Organisms/CodeUI";
import InterestSection from "@/components/Organisms/InterestSection";
import MiniSidebar from "@/components/Organisms/MiniSidebar";

import UserInfo from "@/components/Molecules/UserInfo";
import Sidebar from "@/components/Layout/Sidebar";

export default function Education() {
     return (
          <div className="flex flex-row bg-none text-gray-200">
               <div className="w-[4%] min-w-0 overflow-hidden bg-gray-800 border-r border-gray-700 flex flex-col justify-between p-4">
               <MiniSidebar />
               </div>
               <div className="w-[96%]"> 
                    <Breadcrumb />
                    <div className="flex flex-col md:flex-row bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
                              <div className="w-[97.5%]">
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