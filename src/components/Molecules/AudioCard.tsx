import { ChevronRight } from 'lucide-react';
// import Image from 'next/image';
export default function AudioCard() {
     return (
          <div className="bg-gray-900 border border-white/10 rounded-xl shadow p-4">
               <h3 className="font-semibold text-fuchsia-400 mb-2">Series Currently Reading</h3>
               <div className="flex items-start gap-4">
                    {/* Hình ảnh bên trái */}

                    {/* Nội dung bên phải */}
                    <div className="flex flex-col flex-1">
                         <div className="flex justify-between items-start">
                              <p className="text-sm font-semibold text-gray-400">Game On: Level Up Your Gaming</p>
                         </div>
                         <div className="flex justify-between items-start">
                              <p className="flex items-start text-sm font-semibold bg-gray-800 p-2 text-fuchsia-400">
                                   <ChevronRight className="w-3 h-3 mt-0.5" />
                                   <span className="ml-1">Game On: Level Up Your Gaming</span>
                              </p>

                         </div>
                         <div className="flex justify-between items-start">
                              <p className="text-sm font-semibold text-gray-400">Game On: Level Up Your Gaming</p>
                         </div>

                         {/* Thanh tiến độ */}

                    </div>
               </div>
               <div className="relative w-full bg-gray-200 h-2 rounded-full mt-3">
                    {/* Thanh progress */}
<div className="w-3/4 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-md shadow-pink-500/50"></div>
                    {/* Chỉ số góc phải */}
                    <span className="absolute -top-5 right-0 text-xs text-gray-600 font-medium">
                         3/10
                    </span>
               </div>

          </div>

     )
}