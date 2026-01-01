'use client';
import Breadcrumb from "@/components/Atoms/Breadcrumb";
import Sidebar from "@/components/Layout/Sidebar";
import MiniSidebar from "@/components/Organisms/MiniSidebar";
import ListProjects from "@/components/Templates/ListProjects";
import { useState } from 'react';
import { BookOpen, Award } from 'lucide-react';
export default function Books() {
     const [activeTab, setActiveTab] = useState('books');

     const books = [
          {
               title: "You don't know JS",
               // description: "Description for book project 1",
               viewDetailsLink: "",
               imageSrc: "/youdontknowjs.jpg",
               progress: 100,
               author: "Kyle Simpson",
               progressDescription: "Completed reading",
               hideViewButton: true
          },
          {
               title: "Foundations of computer science",
               // description: "Description for book project 2",
               viewDetailsLink: "/projects/book2",
               imageSrc: "/foundationofcomputer.jpg",
               progress: 100,
               author: "Al Aho",
               progressDescription: "Completed reading",
               hideViewButton: true
          },
          {
               title: "Computer-Organization and architecture",
               // description: "Description for book project 2",
               viewDetailsLink: "/projects/book2",
               imageSrc: "/os.jpg",
               progress: 60,
               author: "William Stallings",
               progressDescription: "Reading chapter 6",
               hideViewButton: true
          },
          {
               title: "Algorithms-4th-edition",
               // description: "Description for book project 2",
               viewDetailsLink: "/projects/book2",
               imageSrc: "/algorithms.jpg",
               progress: 80,
               author: "Robert Sedgewick",
               progressDescription: "Almost finished",
               hideViewButton: true
          },
           {
               title: "Computer Networking",
               // description: "Description for book project 2",
               viewDetailsLink: "/projects/book2",
               imageSrc: "/networking.jpg",
               progress: 20,
               author: "James Kurose",
               progressDescription: "Just started",
               hideViewButton: true
          }
     ];

     const certificates = [
          {
               title: "Computer Communications",
               // description: "Description for certificate 1",
               viewDetailsLink: "/certificates/cert1",
               imageSrc: "/Network.jpg",
               progress: 85,
               author: "Coursera",
               progressDescription: "85% completed course",
               hideViewButton: true
          },
          {
               title: "Web Design for everybody: Basics of web development & coding", 
               // description: "Description for certificate 2",
               viewDetailsLink: "/certificates/cert2",
               imageSrc: "/UXResearch.jpg",
               progress: 100,
               author: "University of Michigan",
               progressDescription: "Completed course",
               hideViewButton: true
          },
           {
               title: "CertNexus Certified Ethical Emerging Technologist", 
               // description: "Description for certificate 2",
               viewDetailsLink: "/certificates/cert2",
               imageSrc: "/ITethics.jpg",
               progress: 100,
               author: "CertNexus",
               progressDescription: "Completed course",
               hideViewButton: true
          },
          {
               title: "Software Development Lifecycle", 
               // description: "Description for certificate 2",
               viewDetailsLink: "/certificates/cert2",
               imageSrc: "/SDL.jpg",
               progress: 100,
               author: "College of Science and Engineering",

               progressDescription: "Completed course",
               hideViewButton: true
          },
            {
               title: "User experience research and design", 
               // description: "Description for certificate 2",
               viewDetailsLink: "/certificates/cert2",
               imageSrc: "/UXResearch.jpg",
               progress: 100,
                author: "University of Michigan",
               
               progressDescription: "Completed course",
               hideViewButton: true
          },
          {
               title: "Project Management Principles and Practices", 
               // description: "Description for certificate 2",
               viewDetailsLink: "/certificates/cert2",
               imageSrc: "/PM.jpg",
               progress: 100,
                 author: "University of California, Irvine",
               
               progressDescription: "Completed course",
               hideViewButton: true
          }
     ];

     return (
          <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
               <MiniSidebar />
               <div className="flex flex-1 flex-col h-full">
                    <Breadcrumb />
                    <div className="flex flex-1 flex-col md:flex-row w-full h-full bg-[#0d1117]">
                         <Sidebar />
                         <div className="flex-1 flex bg-gray-900 flex-col md:flex-row h-full">
                              {/* Border trái */}
                              <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-2 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>

                              {/* Nội dung chính */}
                              <div className="flex-grow min-h-[calc(94vh-100px)] flex bg-gray-800 flex-col gap-6 overflow-y-auto">
                                   <section className="w-full">
                                        <div className="flex border-b border-white/10">
                                             {/* Books tab */}
                                             <button
                                                  onClick={() => setActiveTab('books')}
                                                  className={`
                                                  px-5 py-2 text-sm flex items-center gap-2
                                                  border-r border-white/10
                                                  ${activeTab === 'books'
                                                            ? 'bg-[#1f1f1f] text-orange-500'
                                                            : 'bg-[#252526] text-gray-400 hover:bg-[#2a2d2e]'
                                                       }
    `}
                                             >
                                                  <BookOpen size={16} />
                                                  Books
                                                  <span className="text-xs text-gray-400">{activeTab === 'books' ? '✕' : '●'}</span>
                                             </button>

                                             {/* Certificated tab */}
                                             <button
                                                  onClick={() => setActiveTab('certificated')}
                                                  className={`
      px-5 py-2 text-sm flex items-center gap-2
      border-r border-white/10
      ${activeTab === 'certificated'
                                                            ? 'bg-[#1f1f1f] text-orange-500'
                                                            : 'bg-[#252526] text-gray-400 hover:bg-[#2a2d2e]'
                                                       }
    `}
                                             >
                                                  <Award size={16} />
                                                  Certificated
                                                  <span className="text-xs text-gray-400">{activeTab === 'certificated' ? '✕' : '●'}</span>
                                             </button>
                                        </div>

                                        {activeTab === 'books' && <ListProjects projects={books} />}
                                        {activeTab === 'certificated' && <ListProjects projects={certificates} />}
                                   </section>
                              </div>
                              {/* Border phải */}
                              <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
                                   <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}