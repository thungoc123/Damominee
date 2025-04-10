"use client";
import { Mail, Phone, Folder, FileText, User, GraduationCap } from "lucide-react";
import { useState } from "react";
import { FaFolder, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 border-r border-gray-700 flex flex-col justify-between p-4">
     
      <div>
        <div className="mb-6">
          <ul className="ml-4 mt-1 space-y-1">
          <SidebarLink href="/about" icon={FaFolder} label="bio" iconColor="text-orange-400" />
          <SidebarLink href="/about/interest" icon={FaFolder} label="interests" iconColor="text-green-700" />
            <li>
            <ul>
      <li
        className="flex items-center text-gray-700 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFolder className="w-4 h-4 mr-2 text-orange-500" />
        <span>› education</span>
      </li>

      {isOpen && (
        <ul className="ml-6 mt-1 transition-all duration-300 ease-in-out">
          <li className="flex items-center text-gray-700">
            <GraduationCap className="w-4 h-4 mr-2 text-gray-500" /> high-school
          </li>
          <li className="flex items-center text-gray-700">
            <GraduationCap className="w-4 h-4 mr-2 text-gray-500" /> university
          </li>
        </ul>
      )}
    </ul>
            </li>
           
          </ul>
        </div>

        <div>
          <p className="text-sm text-white">› contacts</p>
          <ul className="ml-4 mt-2 space-y-2 text-teal-300">
            <li className="flex items-center">
              <MdEmail className="w-4 h-4 mr-2 text-teal-300" />
              <span className="text-xs">nguyenthungoc@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="w-4 h-4 mr-2 text-teal-300" />
              <span className="text-xs">+84 37 677 1927</span>
            </li>
          </ul>
        </div>
      </div>

     
    </div>
  );
}
