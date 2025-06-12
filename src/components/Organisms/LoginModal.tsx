import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
interface LoginModalProps {
  onClose: () => void;
}
export default function LoginModal({ onClose }: LoginModalProps) {
const modalRef = useRef<HTMLDivElement>(null);
     useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div       ref={modalRef}
 className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-8 shadow-[0_0_60px_#6b21a8] text-white">
        <h2 className="text-xl font-bold text-indigo-300 text-center drop-shadow-[0_0_5px_#8b5cf6]">
          Welcome Back, Explorer
        </h2>
        <p className="text-sm text-gray-300 text-center mt-1 mb-6">
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-indigo-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-indigo-500 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@cypher.net"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-indigo-200 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-indigo-500 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all shadow-[0_0_20px_#8b5cf6] font-semibold text-white"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-400">— OR —</div>

        <div className="flex flex-col gap-2">
          <button
            className="w-full py-2 rounded-lg bg-white text-gray-800 font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Login with Google
          </button>

          <button
            className="w-full py-2 rounded-lg bg-gray-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            <FaGithub className="text-xl" />
            Login with GitHub
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
        </p>
      </div>
    </div>
  );
}
