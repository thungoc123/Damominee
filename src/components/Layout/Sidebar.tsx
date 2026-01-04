"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFolder, FaPhoneAlt, FaPalette, FaUsers, FaUser, FaCamera, FaNewspaper } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SidebarLink from "../Molecules/SidebarLink";
import { projects } from "@/constants/projects";

export default function Sidebar() {
  const pathname = usePathname();

  const isProjectPage = pathname.startsWith("/projects");

  const projectList = projects.map(project => ({
    icon: project.icon === "FaPalette" ? <FaPalette className="w-4 h-4 mr-2 text-teal-300" /> :
          project.icon === "FaUsers" ? <FaUsers className="w-4 h-4 mr-2 text-teal-300" /> :
          project.icon === "FaUser" ? <FaUser className="w-4 h-4 mr-2 text-teal-300" /> :
          project.icon === "FaCamera" ? <FaCamera className="w-4 h-4 mr-2 text-teal-300" /> :
          <FaNewspaper className="w-4 h-4 mr-2 text-teal-300" />,
    text: `_${project.name}`,
    slug: project.slug,
  }));

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
              <SidebarLink
                href="/about"
                icon={FaFolder}
                label="bio"
                iconColor="text-orange-400"
              />
              <SidebarLink
                href="/about/interest"
                icon={FaFolder}
                label="interests"
                iconColor="text-green-700"
              />
              <SidebarLink
                href="/about/education"
                icon={FaFolder}
                label="education"
                iconColor="text-orange-500"
              />
              <SidebarLink
                href="/about/books"
                icon={FaFolder}
                label="books & certificates"
                iconColor="text-blue-500"
              />
              <SidebarLink
                href="/about/languages"
                icon={FaFolder}
                label="languages"
                iconColor="text-red-500"
              />
             {/* <SidebarLink
                href="/about/experiences"
                icon={FaFolder}
                label="experiences"
                iconColor="text-green-500"
              /> */}
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
              {/* <div
                className="flex items-center cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaSortDown
                  className="w-4 h-4 mr-2 text-white" />
                <span>Projects</span>
              </div> */}

              <ul className="mt-1 space-y-1 transition-all duration-300 ease-in-out">
                {projectList.map((item, index) => (
                  <SidebarLink
                    href={`/projects/${item.slug}`}
                    icon={() => item.icon}
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
