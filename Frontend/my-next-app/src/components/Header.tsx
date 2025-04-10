"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const basePath = "/" + pathname.split("/")[1]; 
  const getLinkClass = (path: string) =>
    `p-4 px-5 border-l border-r border-white/10 ${
      basePath === path
        ? "text-white border-b-2 border-b-orange-400"
        : "text-white/60 hover:text-gray-300"
    }`;

  return (
    <header className="w-full px-6 flex items-center justify-between bg-[#0f1117] text-sm font-mono border-b border-white/10">
      <div className="flex items-center">
        <a href="/" className="text-green-400 hover:text-green-300 px-10">
          Damominee
        </a>

        <a href="/hello" className={getLinkClass("/hello")}>_hello</a>
        <a href="/about" className={getLinkClass("/about")}>_about-me</a>
        <a href="/projects" className={getLinkClass("/projects")}>_projects</a>
      </div>

      <a
        href="mailto:nguyenthunngoc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 px-5 text-green-400 hover:text-green-300 border-l border-b-0 border-r border-white/10"
      >
        _contact-me
      </a>
    </header>
  );
}
