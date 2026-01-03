import React from 'react';

interface ProjectDocumentProps {
  name: string;
  description: string;
  responsibilities: string;
}

const ProjectDocumentation: React.FC<ProjectDocumentProps> = ({ name, description, responsibilities }) => {
  return (
    <div className="flex-1 text-gray-300 p-6 rounded-md font-mono">
      <div className="flex flex-col">
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">1</span>
          <span className="text-pink-400">/**</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">2</span>
          <span><span className="text-pink-400">*</span> <span className="text-blue-400">Project //</span> <span className="text-pink-400">{name}</span></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">3</span>
          <span><span className="text-pink-400">*</span> <span className="text-purple-400">{description}</span></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">4</span>
          <span><span className="text-pink-400">*</span></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">5</span>
          <span><span className="text-pink-400">*</span> <span className="text-green-400">My Responsibility:</span> <span className="text-yellow-400">{responsibilities}</span></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">6</span>
          <span><span className="text-pink-400">*</span></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">7</span>
          <span><span className="text-pink-400">*/</span></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocumentation;