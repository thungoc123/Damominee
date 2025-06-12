import ProjectCard from "../Molecules/ProjectCard";

export default function ListProjects() {
     return (
          <div className="w-full flex flex-wrap p-6 bg-gray-800 gap-6">
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
          </div>
     )
}