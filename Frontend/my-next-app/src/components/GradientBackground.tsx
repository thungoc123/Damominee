import "../styles/globals.css";
export default function GradientBackground() {
     return (
       <>
         {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ffc3] rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#3c5aff] rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse delay-1000"></div> */}
       {/* Blob 1 – top right */}
<div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00ffc3] rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse"></div>
{/* Trái timmm  */}

{/* Blob 2 – bottom right */}
{/* <div className="absolute bottom-[-50px] right-[-80px] w-[500px] h-[500px] bg-[#3c5aff] rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse delay-1000"></div> */}

<div className="glow-effect"></div>
    
    <div className="glow-effect-secondary"></div>
   
       </>
     );
   }