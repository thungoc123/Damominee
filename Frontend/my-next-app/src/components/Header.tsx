export default function Header() {
     return (
          <header className="w-full px-6 py-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10 text-sm font-mono text-green-400">
               <div className="flex space-x-6">
                    <a href="#" className="text-purple-400 font-bold">Damominee</a>
                    <a href="#" className="text-white border-b border-orange-500">_hello</a>
                    <a href="#" className="text-white hover:border-b border-orange-400">_about-me</a>
                    <a href="#">_projects</a>
               </div>
               <a href="#" className="text-green-400">_contact-me</a>
          </header>
     )
}
