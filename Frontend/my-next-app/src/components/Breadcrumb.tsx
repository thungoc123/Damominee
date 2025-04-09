import { X } from "lucide-react";
import { Folder } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="bg-[#0f172a] text-sm text-gray-400 flex items-center px-4 space-x-2">
      <div className="flex items-center space-x-1 w-[220px] border-r py-2 border-white/10">
        <span className="text-white font-mono">personal-info</span>
      </div>
      <div className="flex items-center space-x-1 w-[220px] border-r py-2 border-white/10">
      <span className="font-mono text-gray-500">bio</span>
      </div>
      <div className="flex items-center space-x-1 w-[490px] border-r py-2 border-white/10">
        <span className="font-mono text-gray-500">...</span>
        </div>
    </div>
  );
}
