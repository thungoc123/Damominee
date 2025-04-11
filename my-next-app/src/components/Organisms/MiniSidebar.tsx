import { FaUser, FaDiscord } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";

export default function MiniSidebar() {
  return (
    <div className="w-12 bg-[#0f1a20] border-r bg-gray-800 border-gray-700 flex flex-col items-center py-4 space-y-6">
      <BsTerminalFill 
      className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      <FaUser className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      <FaDiscord className="text-gray-400 hover:text-white cursor-pointer" size={20} />
    </div>
  );
}
