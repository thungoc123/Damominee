'use client';
import { useState } from "react";

export default function Hello() {

  return (
  
      <main className="mt-10">
        <h2 className="text-3xl font-bold">Hi all. I am</h2>
        <h1 className="text-5xl font-extrabold text-white mt-2">Davide Simone</h1>
        <p className="text-xl text-blue-400">&gt; Front-end developer</p>

        <pre className="bg-gray-800 p-4 rounded-lg mt-6 text-green-400 overflow-x-auto">
          {`// my number
const telephoneNum = "392 86 08 006";
// my e-mail
const email = "davide_simone1996@proton.me";
// Github
const githubLink = "https://github.com/daveinthahood";
// Behance
const behanceLink = "https://www.behance.net/davidefemale";
// LinkedIn
const linkedinPage = "https://www.linkedin.com/in/davide-simone-a2823619a/";`}
        </pre>
      </main>

   
  );
}
