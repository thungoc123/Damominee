import { FaGithub } from 'react-icons/fa';

export default function FooterBackground() {
     return (

          <footer className="w-full px-6 py-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-t border-white/10 text-sm text-gray-300 font-mono">
       <div className="flex items-center space-x-3">
         <span>find me in:</span>
         <a href="#"><i className="fab fa-twitter text-teal-400" /></a>
         <a href="#"><i className="fab fa-facebook text-teal-400" /></a>
       </div>
       <div className="flex items-center space-x-3">
       <a href="https://github.com/thungoc123" className="text-green-400">@Damominee </a>
       <FaGithub  className="text-xl text-green-400"/>
       </div>
      

     </footer>
   
     )
    
}