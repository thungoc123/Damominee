"use client";

import Header from "./Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative z-10 flex-1 flex flex-col flex-grow">
        <div className="flex-1 w-full h-screen">{children}</div>
      </main>
    </>
  );
}
