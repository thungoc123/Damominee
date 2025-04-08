import CodeSection from "@/components/CodeSelection";
import MiniSidebar from "@/components/MiniSidebar";
import Sidebar from "@/components/Sidebar";
import SkillsSection from "@/components/SkillSelection";

export default function About() {
     return (
          <div className="w-full min-h-[calc(100vh-110px)] flex flex-col md:flex-row bg-none text-gray-200">
               <MiniSidebar />
          <Sidebar />
          <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
            <CodeSection />
            <SkillsSection />
          </div>
        </div>
     );
     }