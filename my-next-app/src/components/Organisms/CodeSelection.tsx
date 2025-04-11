
export default function CodeSection() {
  // Function to split text into lines and handle wrapping
  const processLines = () => {
    const codeLines = [
      { number: 1, content: <p className="text-green-400">/**</p> },
      { number: 2, content: <p className="text-blue-400">* About Damominee</p> },
      { number: 3, content: <p className="text-blue-400">* My fullname is Nguyễn Thị Ngọc Thư</p> },
      { number: 4, content: <p className="text-blue-400">* I am 22 years old</p> },
      { number: 5, content: <p className="text-green-400">* Welcome to my <span className="text-teal-400">portfolio</span>.</p> },
      { number: 6, content: <p><span className="text-red-400">&#91;Degree&#93;</span> Bachelor's in <i>"Software Engineering"</i></p> },
      { number: 7, content: <p>from FPT University.</p> },
      { number: 8, content: <p>* expected graduation in December 2025.</p> },
      { number: 9, content: <p><span className="text-red-400">&#91;Programming&#93;</span> I started exploring and</p> },
      { number: 10, content: <p>self-learning programming</p> },
      { number: 11, content: <p>back in 2020 out of curiosity and passion.</p> },
      { number: 12, content: <p>* I have experience in HTML, CSS, JavaScript</p> },
      { number: 13, content: <p> ReactJS, NodeJS, ExpressJS, MongoDB, so on ...</p> },
      { number: 14, content: <p><span className="text-blue-400">&#91;Whoisdamominee&#93;</span> I'm a very curious person,</p> },
      { number: 15, content: <p>challenges, I always try to find solutions.</p> },
      { number: 16, content: <p className="text-green-400">*/</p> }
    ];
    
    return codeLines;
  };

  const lines = processLines();

  return (
    <div className="w-full md:w-1/2 p-6 text-gray-500 bg-gray-800 border-r border-gray-700">
      <div className="code-section pr-16">
        {lines.map((line) => (
          <div key={line.number} className="flex">
            <div className="text-gray-500 w-6 flex-shrink-0 text-right mr-4">
              {line.number}
            </div>
            <div className="flex-grow">
              {line.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}