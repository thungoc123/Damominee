export default function Header() {
     return (
          <header className="w-full px-6 flex items-center justify-between bg-[#0f1117] text-sm font-mono border-b border-white/10">
          <div className="flex items-center">
            <a href="#" className="text-green-400 hover:text-green-300 px-10">Damominee</a>
        
            <a href="/hello" className="text-white/80 p-4 px-5 border-l border-b-2 border-r border-white/10 border-b-orange-400">_hello</a>
            <a href="#" className="text-white/60 p-4 px-5 hover:text-gray-300 border-l border-b-2 border-r border-white/10">_about-me</a>
            <a href="#" className="text-white/60 p-4 px-5 hover:text-gray-300 border-l border-b-2 border-r border-white/10">_projects</a>
          </div>
        
          <a href="#" className="text-green-400 hover:text-green-300">_contact-me</a>
        </header>
     )
}
