import { Mail, Phone, Folder, FileText, User, GraduationCap } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-gray-950 text-green-400 border-r border-gray-700 flex flex-col justify-between p-4">
     
      <div>
        <div className="mb-6">
          <p className="uppercase text-sm text-gray-400">› personal-info</p>
          <ul className="ml-4 mt-1 space-y-1">
            <li className="flex items-center text-red-400">
              <Folder className="w-4 h-4 mr-2" /> bio
            </li>
            <li className="flex items-center">
              <FileText className="w-4 h-4 mr-2" /> interests
            </li>
            <li className="flex items-center">
              <Folder className="w-4 h-4 mr-2" /> education
            </li>
            <ul className="ml-6">
              <li className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" /> high-school
              </li>
              <li className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" /> university
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <p className="uppercase text-sm text-gray-400">› contacts</p>
          <ul className="ml-4 mt-2 space-y-2 text-teal-300">
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-xs">davide_simone1996@proton.me</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-xs">+39 392 86 08 006</span>
            </li>
          </ul>
        </div>
      </div>

     
    </div>
  );
}
