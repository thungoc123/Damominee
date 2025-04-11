"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFolder, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import SidebarLink from "../Molecules/SidebarLink";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isProjectPage = pathname.startsWith("/projects");
  const projectList = [
    {
      icon: <MdEmail className="w-4 h-4 mr-2 text-teal-300" />,
      text: "_SkinTime",
    }
  ]

  const contacts = [
    {
      icon: <MdEmail className="w-4 h-4 mr-2 text-teal-300" />,
      text: "nguyenthungoc@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4 mr-2 text-teal-300" />,
      text: "+84 37 677 1927",
    },
  ];

  return (
    <div className="w-[20%] min-w-0 overflow-hidden bg-gray-800 border-r border-gray-700 flex flex-col justify-between p-4">
      {!isProjectPage ? (
        <div>
          <ul className="ml-4 mt-1 space-y-2 mb-6">
            <li>
              <SidebarLink
                href="/about"
                icon={FaFolder}
                label="bio"
                iconColor="text-orange-400"
              />
            </li>
            <li>
              <SidebarLink
                href="/about/interest"
                icon={FaFolder}
                label="interests"
                iconColor="text-green-700"
              />
            </li>
            <li>
              <SidebarLink
                href="/about/education"
                icon={FaFolder}
                label="education"
                iconColor="text-orange-500"
              />
            </li>
            <li>
              <SidebarLink
                href="/about/education"
                icon={FaFolder}
                label="books & courses"
                iconColor="text-blue-500"
              />
            </li>
          </ul>
          <div>
            <p className="text-sm text-white">› contacts</p>
            <ul className="ml-4 mt-2 space-y-2 text-teal-300">
              {contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center text-xs">
                  {contact.icon}
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

      ) : (

        <div className="pr-10">

          <ul className="ml-4 mt-1 space-y-1 mb-6">
            <li>
              <div
                className="flex items-center cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaSortDown
                  className="w-4 h-4 mr-2 text-white" />
                <span>Projects</span>
              </div>

              <ul className="mt-1 space-y-1 transition-all duration-300 ease-in-out">
                {projectList.map((item, index) => (
                  <SidebarLink
                    href="/projects"
                    icon={FaFolder}
                    label={item.text}
                    key={index}
                    iconColor="text-teal-300"
                  />
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}


    </div>
  );
}
