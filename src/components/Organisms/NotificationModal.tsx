"use client";

import { useEffect } from "react";

type NotificationModalProps = {
  notifications: string[];
  onClose: () => void;
};

export default function NotificationModal({
  notifications,
  onClose,
}: NotificationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-14 w-[90%] max-w-lg bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]
                   text-white rounded-2xl p-5 shadow-2xl border border-purple-400 animate-slide-down"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold tracking-wide text-purple-300">
            Activity
          </h2>
          <button
            className="text-sm text-gray-400 hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {notifications.length === 0 ? (
          <p className="text-sm text-gray-400">No notifications available.</p>
        ) : (
          <div className="space-y-4 custom-scroll max-h-[450px] overflow-y-auto pr-2">
            {notifications.map((note, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#111827] border border-purple-600 px-4 py-3 shadow-md transition hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={`https://i.pravatar.cc/40?u=${index}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {note.split("|")[0]}
                    </p>
                    <p className="text-xs text-gray-400">
                      {note.split("|")[1]}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-200">{note.split("|")[2]}</p>
                <div className="mt-2 flex gap-3 text-xs text-gray-400">
                  <span>👍 14</span>
                  <span>💬 6</span>
                  <span>🔥 3</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
