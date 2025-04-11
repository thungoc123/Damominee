"use client";
import {
  FaHtml5, FaCss3, FaReact, FaWordpress, FaLaravel,
  FaBootstrap, FaJava, FaNodeJs, FaPython, FaSass,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiDotnet, SiMysql, SiExpress, SiAmazondynamodb, SiDjango, SiTailwindcss, SiPhp } from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import UserInfo from "./UserInfo";
import HoverCard from "../Atoms/HoverCard";
import { useState } from "react";
type SkillItemProps = {
  name: string;
  icon?: React.ElementType;
  techName?: string;
  checked?: boolean;
  description?: string;
  years?: string;
};
export default function SkillsSection() {
  const devSkills = [
    { name: "HTML", checked: true, icon: FaHtml5, techName: "HTML", description: "I started learning HTML to convert a PSD file into a complete webpage interface during the summer break from 10th to 11th grade.", years: "5 years" },
    { name: "CSS", checked: true, icon: FaCss3, techName: "CSS", description: "I started learning CSS to convert a PSD file into a complete webpage interface during the summer break from 10th to 11th grade.", years: "5 years" },
    { name: "Tailwind CSS", checked: true, icon: SiTailwindcss, techName: "Tailwind CSS", description: "The first time I used TailwindCSS was around mid-2023, when I worked on a small project with Django. But I started using it more seriously around mid-2024.", years: "1 years" },
    { name: "Bootstrap", checked: true, icon: FaBootstrap, techName: "Bootstrap", description: "I started using Bootstrap for responsive design in the second week of my first year at university.", years: "3 years" },
    { name: "JavaScript", checked: true, icon: SiJavascript, techName: "JavaScript", description: "I started learning JavaScript at the beginning of 12th grade, and also had the chance to work with jQuery and Ajax.", years: "5 years" },
    { name: "React", checked: true, icon: FaReact, techName: "React", description: "I began learning React JS in the early part of my second year at university, and have been using it extensively since 2024 up to the present.", years: "2 years" },
    { name: "Java", checked: true, icon: FaJava, techName: "Java", description: "Java is a compulsory subject at my university. I’m familiar with the language and able to use it with JSP and Servlets.", years: "1 year" },
    { name: "React Native", checked: true, icon: TbBrandReactNative, techName: "React Native", description: "I began learning React Native in December last year. However, I’ve had limited opportunities to truly apply it in real-world projects so far.", years: "4 months" },
    { name: "Flutter", checked: true, icon: FaFlutter, techName: "Flutter", description: "Flutter has caught my attention recently. I’ve begun learning it and intend to use it in my next project.", years: "0 year" },
    { name: "TypeScript", checked: true, icon: SiTypescript, techName: "TypeScript", description: "I began working with TypeScript in mid-2024 and continue to use it actively to this day.", years: "1 years" },
    { name: "Node", checked: true, icon: FaNodeJs, techName: "Node", description: "No more description", years: "1 year" },
    { name: "SASS", checked: true, icon: FaSass, techName: "SASS", description: "as same as React", years: "1 year" },
    // { name: "Vue", icon: FaVuejs },
    { name: ".Net", icon: SiDotnet, checked: true, techName: ".Net", description: ".Net is a compulsory subject at my university. I’m familiar with the language and able to use it with WFP and DB.", years: "4 months" },
    { name: "Next.js", checked: true, icon: RiNextjsFill, techName: "Next.js", description: "Start from now", years: "1 week" },
    { name: "C#", icon: TbBrandCSharp, checked: true, techName: "C#", description: "C# is part of my university curriculum. I use it mainly with Windows Forms and ASP.NET.", years: "4 months" },
    { name: "MySQL", icon: SiMysql, checked: true, techName: "MySQL", description: "I use MySQL for backend projects and data modeling in both personal and academic works.", years: "1 year" },
    { name: "Django", icon: SiDjango, checked: true, techName: "Django", description: "I worked with Django on a small project and combined it with TailwindCSS for the UI.", years: "6 months" },
    { name: "PHP", icon: SiPhp, checked: true, techName: "PHP", description: "I started learning PHP at the end of 12th grade, right after finishing high school, and developed a basic e-commerce website using vanilla PHP.", years: "1 year" },
    { name: "DynamoDB", icon: SiAmazondynamodb, checked: true, techName: "DynamoDB", description: "Familiar with using DynamoDB as part of a cloud-based serverless app.", years: "1 months" },
    { name: "Python", icon: FaPython, checked: true, techName: "Python", description: "During my gap year, I served as a programming instructor, primarily teaching Python.", years: "1 years" },
    { name: "Express.Js", icon: SiExpress, checked: true, techName: "Express.Js", description: "I use Express.js in Node.js backends for APIs and full-stack apps.", years: "1 year" },
    { name: "WordPress", icon: FaWordpress, checked: true, techName: "WordPress", description: "During the summer of my first year in college, I began creating websites with WordPress to make some extra cash.", years: "2 year" },
    { name: "REST API", checked: false, techName: "REST API", description: "I use RESTful APIs across most of my frontend and backend projects for clean data flow.", years: "2 years" },
    { name: "Laravel", icon: FaLaravel, checked: true, techName: "Laravel", description: "After gaining some experience with PHP, I had a brief period working with Laravel, building small features within about two months.", years: "2 months" },

  ]

  const tools = [
    {
      name: "Windows",
      checked: true,
      techName: "Windows",
      description: "Windows has always been my primary development environment throughout my learning journey.",
      years: "5+ years"
    },
    {
      name: "Git",
      checked: true,
      techName: "Git",
      description: "I use Git daily for version control and collaboration in both solo and team projects.",
      years: "3 years"
    },
    {
      name: "Photoshop",
      checked: true,
      techName: "Photoshop",
      description: "I used Photoshop to create posters and materials to support my teaching work during my gap year.",
      years: "1 year"
    },
    {
      name: "Jira",
      checked: true,
      techName: "Jira",
      description: "I was introduced to Jira during my internship at Sendo as a Product Owner. I used Jira to manage tasks and collaborate with my team members.",
      years: "6 months"
    },
    {
      name: "Figma",
      checked: true,
      techName: "Figma",
      description: "Whenever I take on the front-end role in a project, I use Figma for the design process.",
      years: "2 years"
    },
    {
      name: "Notion",
      checked: true,
      techName: "Notion",
      description: "Notion functions as my second brain — a central hub where I organize my schedule, finances, documentation, and daily development reports.",
      years: "4 years"
    }
    
  ];

  return (
    <div className="w-full md:w-1/2 p-6 flex bg-gray-800 flex-col gap-6">
      <section>
        <h2 className="text-sm text-gray-500 mb-2">// Programming languages i have learnt or i am learning</h2>
        <UserInfo />
        <div className="grid grid-cols-3 bg-gray-900 gap-4 p-4 rounded-lg">
          {devSkills.map(({ name, icon: Icon, checked, techName, description, years }, index) => (
            <SkillItem key={index} name={name} checked={checked} icon={Icon} techName={techName} description={description} years={years} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm text-gray-500 mb-2">// Operating Systems & Tools</h2>
        <UserInfo />
        <div className="grid grid-cols-3 bg-gray-900 gap-4 p-4 rounded-lg">
          {tools.map(({ name, checked, techName, description, years}, index) => (
            <SkillItem key={index} name={name} checked={checked} techName={techName} description={description} years={years} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillItem({
  name,
  icon: Icon,
  techName = "test",
  checked = false,
  description = "No description provided.",
  years = "1 year",
}: SkillItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="form-checkbox accent-gray-500 w-4 h-4"
      />
      {Icon && <Icon className="text-gray-500" />}
      <label className="text-gray-300">{name}</label>

      {/* HoverCard hiển thị khi hover */}
      <div className="absolute -top-20 -left-30 z-50">
        <HoverCard
          techName={techName}
          years={years}
          description={description}
          show={isHovered}
        />
      </div>
    </div>
  );
}
