import Breadcrumb from "@/components/Breadcrumb";
import CodeSection from "@/components/CodeSelection";
import MiniSidebar from "@/components/MiniSidebar";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillSelection";

export default function About() {
     return (
          <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
               <MiniSidebar />
               <div>
                    <Breadcrumb />
                    <div className="flex flex-col md:flex-row w-full bg-[#0d1117]">
                    <Sidebar />
                    <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
                         <CodeSection />
                         <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-900">
  <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
</div>
                         <SkillsSection />
                    </div>
                    </div>
               </div>
          </div>
     );
}