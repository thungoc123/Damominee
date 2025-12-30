import Breadcrumb from "@/components/Atoms/Breadcrumb";
import MiniSidebar from "@/components/Organisms/MiniSidebar";
import Sidebar from "@/components/Layout/Sidebar";
import EducationCard from "@/components/Molecules/EducationCard";

export default function Education() {
     return (
          <div className="flex min-h-[622px] flex-row bg-none text-gray-200">
                    <MiniSidebar />
               <div className="w-full">
                    <Breadcrumb />
                    <div className="flex min-h-[586px] flex-col md:flex-row bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
                              <div className="w-[97.5%] bg-gray-800">
                                   <EducationCard
                                        imageUrl="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
                                        organizationName="FPT University"
                                        dateRange="Sep 2021 – Dec 2025"
                                   />
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