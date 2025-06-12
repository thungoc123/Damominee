"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Ẩn Header nếu URL bắt đầu bằng /blog/
  const shouldShowHeader = !pathname.startsWith("/blog/");

  return (
    <>
      {shouldShowHeader && <Header />}
      <main className="relative z-10 flex-1 flex flex-col flex-grow">
        <div className="flex-1 w-full h-screen">{children}</div>
      </main>
    </>
  );
}
