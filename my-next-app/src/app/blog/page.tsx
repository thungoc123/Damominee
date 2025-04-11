export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row bg-none text-gray-200">
      <div className="flex-1 flex bg-gray-900 flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 text-gray-500 bg-gray-800 border-r border-gray-700">
          <div className="code-section pr-16">
            {/* Code lines will be rendered here */}
          </div>
        </div>
        <div className="w-[20px] relative border-l border-r border-t border-white/10 bg-gray-800">
          <span className="w-4 h-2 absolute top-0 left-0 bg-gray-500" />
        </div>
        {/* Skills section will be rendered here */}
      </div>
    </div>
  );
}