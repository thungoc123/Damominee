import { MessageSquare, Star } from "lucide-react";
import Image from "next/image";
import avarta from "../../../public/avarta.jpg";
export default function UserInfo() {
  return (
    <>
    <div className="w-full flex items-center justify-between px-4 py-4 text-sm text-white/50 font-mono">
      <div className="flex items-center gap-2">
        <Image
          src={avarta}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
        <span className="text-[#7aa2f7]">@Damominee</span>
        <span className="text-white/30 text-sm">Created 5 months ago</span>

        </div>

      </div>

      <div className="flex items-center gap-4 text-white/30">
        <div className="flex items-center gap-1">
          <MessageSquare size={14} /> <span>details</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={14} /> <span>3 starts</span>
        </div>
      </div>

    </div>
          </>
  );
}
