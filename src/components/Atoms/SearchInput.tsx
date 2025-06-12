import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-[100%] max-w-md ">
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#00ffae] focus:border-[#00ffae] placeholder:text-gray-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}
