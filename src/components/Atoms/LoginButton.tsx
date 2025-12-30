"use client"; // nếu đang dùng Next.js App Router

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaUserAstronaut, FaBell, FaSignOutAlt, FaHome } from "react-icons/fa";
import NotificationModal from "../Organisms/NotificationModal";

type LoginButtonProps = {
  isLoggedIn: boolean;
  onLogout?: () => void;
  onNotify?: () => void;
  onLoginClick?: () => void;
};

export default function LoginButton({
  isLoggedIn,
  onLogout,
  // onNotify,
  onLoginClick,
}: LoginButtonProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      setShowOptions((prev) => !prev);
    } else {
      onLoginClick?.();
    }
  };

  const handleGoHome = () => {
    router.push("/");
    setShowOptions(false);
  };
    const handleOpenNotify = () => {
    // onNotify?.();
    setShowNotificationModal(true); // mở modal
    setShowOptions(false); // đóng popup option
  };

 const notifications = [
  "Prosing Elgedaha|10:05 AM|The initiative focuses on creating opportunities for education and skill development.",
  "Zain Proxsash|1:15 PM|The project is anticipated to greatly benefit the community.",
  "Romith Afell|1:45 PM|How about our @Esther Howard?",
  "Alex Jhone|2:20 AM|He's the cornerstone of our team, who powers our progress.",
];

  return (
    <div className="relative">
      {/* Nút chính */}
       <button
        onClick={handleClick}
        className="p-4 rounded-full transition-all duration-300
                   bg-[#0f172a] border border-purple-400
                   shadow-[inset_0_0_10px_#8b5cf6,0_0_20px_#a855f7]
                   hover:shadow-[inset_0_0_14px_#8b5cf6,0_0_32px_#a855f7]"
        title="Tài khoản"
      >
        <FaUserAstronaut className="text-3xl text-purple-300 drop-shadow-[0_0_6px_#8b5cf6]" />
      </button>

      {/* Nút phụ nếu đã login */}
      {isLoggedIn && showOptions && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

          {/* Nút Home */}
          <button
  onClick={handleGoHome}
  className="relative p-4 rounded-full 
             bg-[#111827] border border-indigo-400
             shadow-[inset_0_0_8px_#6366f1,0_0_12px_#6366f1]
             hover:shadow-[inset_0_0_12px_#6366f1,0_0_20px_#6366f1]
             transition-all duration-300"
  title="Trang chủ"
>
  <FaHome className="text-indigo-300 text-2xl drop-shadow-[0_0_6px_#6366f1]" />
</button>

          {/* Nút Thông báo */}
          <button
            onClick={handleOpenNotify}
  className="relative p-4 rounded-full 
             bg-[#111827] border border-purple-400
             shadow-[inset_0_0_8px_#a855f7,0_0_12px_#a855f7]
             hover:shadow-[inset_0_0_12px_#a855f7,0_0_20px_#a855f7]
             transition-all duration-300"
  title="Thông báo"
>
  <FaBell className="text-purple-300 text-2xl drop-shadow-[0_0_6px_#a855f7]" />
</button>


          {/* Nút Đăng xuất */}
          <button
  onClick={onLogout}
  className="relative p-4 rounded-full 
             bg-[#111827] border border-rose-400
             shadow-[inset_0_0_8px_#fb7185,0_0_12px_#fb7185]
             hover:shadow-[inset_0_0_12px_#fb7185,0_0_20px_#fb7185]
             transition-all duration-300"
  title="Đăng xuất"
>
  <FaSignOutAlt className="text-rose-300 text-2xl drop-shadow-[0_0_6px_#fb7185]" />
</button>

        </div>
      )}

        {showNotificationModal && (
        <NotificationModal
          notifications={notifications}
          onClose={() => setShowNotificationModal(false)}
        />
      )}
    </div>
  );
}
