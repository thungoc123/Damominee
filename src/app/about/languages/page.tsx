import Breadcrumb from "@/components/Atoms/Breadcrumb";
import MiniSidebar from "@/components/Organisms/MiniSidebar";
import Sidebar from "@/components/Layout/Sidebar";
import ContributionGrid from "@/components/Organisms/ContributionGrid";

export default function LanguagesPage() {
     return (
          <div className="flex min-h-[622px] flex-row bg-none text-gray-200">
               <div className="w-[4%] min-w-0 overflow-hidden bg-gray-800 border-r border-gray-700 flex flex-col justify-between p-4">
                    <MiniSidebar />
               </div>
               <div className="w-[96%]">
                    <Breadcrumb />
                    <div className="flex min-h-[586px] flex-col md:flex-row bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
                              <div className="w-[97.5%] bg-gray-800">
                                   <h3 className="px-4 pt-4">Ilets Goal 7.5</h3>
                                  <ContributionGrid />

                                  <h3 className="px-4 pt-4">JLPT N3</h3>
                                  <ContributionGrid />
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