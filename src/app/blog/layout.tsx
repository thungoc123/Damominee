'use client';

import BlogBreadcrumb from "@/components/Atoms/BlogBreadcrumb";
import LoginButton from "@/components/Atoms/LoginButton";
import LoginModal from "@/components/Organisms/LoginModal";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  // Check nếu path là "/blog" thì hiện breadcrumb, còn nếu là "/blog/abc" thì ẩn
  const shouldShowBreadcrumb = pathname === "/blog";

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-none text-gray-200">
      {shouldShowBreadcrumb && <BlogBreadcrumb />}
      
      <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
        {children}
      </div>

      <div className="fixed bottom-4 right-7">
<LoginButton
  isLoggedIn={true}
  onLoginClick={() => setShowModal(true)}
  // onLogout={handleLogout}
  onNotify={() => alert("Thông báo mới!")}
/>      </div>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
