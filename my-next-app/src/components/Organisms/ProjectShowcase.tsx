import UserInfo from "../Molecules/UserInfo";

export default function ProjectShowcase() {
     return (
          <div className=" w-full p-6 flex bg-gray-800 flex-col">
               <h2 className="text-sm text-gray-500 mb-2 pl-2">// Projects</h2>
               <div className="">
                    <UserInfo />
                    <div className="w-[640px] h-[360px] max-w-2xl mx-auto">
                         <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                         ></iframe>
                    </div>
                    {/* Add your project showcase items here */}
               </div>
          </div>
     )

}
