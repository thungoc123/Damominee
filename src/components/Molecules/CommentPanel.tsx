"use client";

import React, { useState } from "react";

type Comment = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  replies: Comment[];
};

let commentIdCounter = 1000;

export default function CommentPanel() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Alice",
      content: "Bài viết rất hay, cảm ơn bạn!",
      createdAt: "2025-05-20 14:32",
      likes: 2,
      replies: [],
    },
    {
      id: 2,
      author: "Bob",
      content: "Mình thấy phần ví dụ có thể chi tiết hơn một chút.",
      createdAt: "2025-05-20 14:40",
      likes: 1,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: ++commentIdCounter,
      author: "You",
      content: newComment,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      replies: [],
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleDelete = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleLike = (id: number) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  const handleReply = (id: number) => {
    if (!replyText.trim()) return;
    const reply: Comment = {
      id: ++commentIdCounter,
      author: "You",
      content: replyText,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      replies: [],
    };

    setComments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, replies: [reply, ...c.replies] } : c
      )
    );
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Bình luận</h2>
        <p className="text-gray-400 text-sm">Thảo luận về bài viết này</p>
      </div>

      {/* Input bình luận mới */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          rows={3}
          placeholder="Nhập bình luận của bạn..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleAddComment}
            className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded transition"
          >
            Gửi
          </button>
        </div>
      </div>

      {/* Danh sách bình luận */}
      <div className="flex-1 custom-scroll overflow-y-auto space-y-4 pr-2">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-800 p-3 rounded border border-gray-700"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-300">{comment.author}</span>
              <span className="text-xs text-gray-500">{comment.createdAt}</span>
            </div>
            <p className="text-gray-200 text-sm mb-2">{comment.content}</p>

            <div className="flex gap-4 text-sm text-gray-400">
              <button onClick={() => handleLike(comment.id)} className="hover:text-white">
                👍 {comment.likes}
              </button>
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
                className="hover:text-white"
              >
                💬 Trả lời
              </button>
              <button onClick={() => handleDelete(comment.id)} className="hover:text-red-400">
                🗑️ Xóa
              </button>
            </div>

            {/* Form trả lời */}
            {replyingTo === comment.id && (
              <div className="mt-3">
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
                  rows={2}
                  placeholder="Trả lời..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <div className="flex justify-end mt-2 gap-2">
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={() => handleReply(comment.id)}
                    className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-500"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            )}

            {/* Reply list */}
            {comment.replies.length > 0 && (
              <div className="mt-4 space-y-2 pl-4 border-l border-gray-600">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="bg-gray-700 p-2 rounded text-sm border border-gray-600"
                  >
                    <div className="flex justify-between text-gray-300">
                      <span>{reply.author}</span>
                      <span className="text-xs text-gray-400">{reply.createdAt}</span>
                    </div>
                    <p className="mt-1 text-gray-200">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-sm">Chưa có bình luận nào.</p>
        )}
      </div>
    </div>
  );
}
