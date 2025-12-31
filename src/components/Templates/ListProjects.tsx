import ProjectCard from "../Molecules/ProjectCard";

interface Project {
  title: string;
  description?: string;
  viewDetailsLink: string;
  imageSrc?: string;
  imageAlt?: string;
  progress?: number;
  author?: string;
  progressDescription?: string;
  hideViewButton?: boolean;
}

interface ListProjectsProps {
  projects: Project[];
}

export default function ListProjects({ projects }: ListProjectsProps) {
     return (
          <div className="w-full flex flex-wrap p-6 bg-gray-800 gap-6">
               {projects.map((project, index) => (
                    <ProjectCard 
                         key={index} 
                         title={project.title} 
                         description={project.description} 
                         viewDetailsLink={project.viewDetailsLink} 
                         imageSrc={project.imageSrc}
                         imageAlt={project.imageAlt}
                         progress={project.progress}
                         author={project.author}
                         progressDescription={project.progressDescription}
                         hideViewButton={project.hideViewButton}
                    />
               ))}
          </div>
     )
}