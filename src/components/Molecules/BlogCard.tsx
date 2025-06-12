import Image from 'next/image';
import { Calendar, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

export default function BlogCard() {
     return (
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-cyan-400/20 rounded-xl shadow-lg shadow-cyan-500/10 p-4 flex flex-col gap-2">
               <div className="relative w-full h-48 rounded-md overflow-hidden">
                    <Image
                         src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww"
                         alt="avatar"
                         fill
                         className="object-cover"
                    />
               </div>
               <p className="text-xs text-cyan-400 font-mono tracking-wide">Steven Gambardella — Following</p>
               <h3 className="font-semibold text-sm text-gray-300 leading-snug">
                    <a href="blog/1" className="hover:text-cyan-400 transition-colors duration-200">
                    Can You Solve This Apple vs. Orange Puzzle? A Tricky Interview Question from Apple!
                    </a>
               </h3>
               <div className="flex justify-between text-[11px] text-cyan-200/80 font-mono">
                    <span className="flex items-center gap-1">
                         <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                         Feb 01 - 10:15 AM
                    </span>
                    <span className="flex items-center gap-3">
                         <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" /> 2.34k
                         </span>
                         <span className="flex items-center gap-1">
                              <ThumbsDown className="w-3.5 h-3.5 text-pink-400" /> 54
                         </span>
                         <span className="flex items-center gap-1">
                              <MessageCircle className="w-3.5 h-3.5 text-purple-400" /> 224
                         </span>
                    </span>
               </div>
          </div>
     );
}
