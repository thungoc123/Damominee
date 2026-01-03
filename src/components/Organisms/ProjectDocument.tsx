import React from 'react';

interface ProjectDocumentProps {
  name: string;
  description: string;
  responsibilities: string;
  AccountTest?: {
    role: string;
    username: string;
    password: string;
  }[];
}

const ProjectDocumentation: React.FC<ProjectDocumentProps> = ({ name, description, responsibilities, AccountTest }) => {
  const splitIntoLines = (text: string, wordsPerLine: number = 6): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
    return lines;
  };

  const descriptionLines = splitIntoLines(description);
  const responsibilityLines = splitIntoLines(responsibilities);

  const renderLines = () => {
    const lines = [];
    let lineNumber = 1;

    // Line 1: /**
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span className="text-pink-400">/**</span>
      </div>
    );
    lineNumber++;

    // Line 2: * Project // {name}
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span><span className="text-pink-400">*</span> <span className="text-blue-400">Project //</span> <span className="text-pink-400">{name}</span></span>
      </div>
    );
    lineNumber++;

    // Description lines
    descriptionLines.forEach((line) => {
      lines.push(
        <div key={lineNumber} className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
          <span><span className="text-pink-400">*</span> <span className="text-purple-400">{line}</span></span>
        </div>
      );
      lineNumber++;
    });

    // Empty line
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span><span className="text-pink-400">*</span></span>
      </div>
    );
    lineNumber++;

    // Responsibility header
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span><span className="text-pink-400">*</span> <span className="text-green-400">My Responsibility:</span></span>
      </div>
    );
    lineNumber++;

    // Responsibility lines
    responsibilityLines.forEach((line) => {
      lines.push(
        <div key={lineNumber} className="flex">
          <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
          <span><span className="text-pink-400">*</span> <span className="text-yellow-400">{line}</span></span>
        </div>
      );
      lineNumber++;
    });

    // Empty line
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span><span className="text-pink-400">*</span></span>
      </div>
    );
    lineNumber++;

    // Closing */
    lines.push(
      <div key={lineNumber} className="flex">
        <span className="text-gray-500 w-8 text-right pr-4">{lineNumber}</span>
        <span><span className="text-pink-400">*/</span></span>
      </div>
    );

    return lines;
  };

  return (
    <div className="flex-1 text-gray-300 p-6 rounded-md font-mono">
      <div className="flex flex-col">
        {renderLines()}
      </div>
      {AccountTest && (
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-gray-300 mb-2">Account Test</h1>
          <table className="border border-gray-500 text-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Role</th>
                <th className="border border-gray-500 p-2">Username</th>
                <th className="border border-gray-500 p-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {AccountTest.map((account, index) => (
                <tr key={index}>
                  <td className="border border-gray-500 p-2">{account.role}</td>
                  <td className="border border-gray-500 p-2">{account.username}</td>
                  <td className="border border-gray-500 p-2">{account.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectDocumentation;