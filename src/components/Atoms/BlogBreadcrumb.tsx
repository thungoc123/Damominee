"use client";
import { usePathname } from "next/navigation";
import SearchInput from "./SearchInput";
import CategoryTabs from "../Molecules/CategoriesList";

export default function BlogBreadcrumb() {
       const pathname = usePathname();

  const newPathName = pathname.split("/")[1]; // Remove the first segment (empty string)
      //  const pathSegments = pathname
      //    .split("/").slice(2) // Remove the first two segments (empty string and "about")
  return (
    <div className="bg-[#0f172a] text-sm py-2 text-gray-400 flex items-center px-4 space-x-2">
      <div className="flex items-center space-x-1 w-[220px] border-r py-2 border-white/10">
        <span className="text-white font-mono">{newPathName}</span>
      </div>
      {/* <div className="flex items-center space-x-1 w-[220px] border-r py-2 border-white/10">
      <span className="font-mono text-gray-500">{pathSegments}</span>
      </div> */}

      <div className="flex items-center space-x-1 w-[490px] border-r border-white/10">
                        <SearchInput />

        </div>
        <CategoryTabs />
    </div>
  );
}
