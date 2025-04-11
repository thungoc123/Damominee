import {
  FaHtml5, FaCss3, FaReact, FaWordpress, FaGithub, FaLaravel,
  FaBootstrap, FaJava, FaNodeJs, FaPython, FaSass, FaVuejs,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiDotnet, SiMysql, SiExpress, SiAmazondynamodb, SiDjango, SiTailwindcss, SiPhp } from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import UserInfo from "./UserInfo";
export default function SkillsSection() {
  const devSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: FaReact },
    { name: "Java", icon: FaJava },
    { name: "React Native", icon: TbBrandReactNative },
    // { name: "Flutter", icon: FaFlutter },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node", icon: FaNodeJs },
    // { name: "SASS", icon: FaSass },
    // { name: "Vue", icon: FaVuejs },
    { name: ".Net", icon: SiDotnet },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "C#", icon: TbBrandCSharp },
    // { name: "MySQL", icon: SiMysql },
    // { name: "Django", icon: SiDjango },
    // { name: "PHP", icon: SiPhp },
    // { name: "DynamoDB", icon: SiAmazondynamodb },
    // { name: "Python", icon: FaPython },
    // { name: "Express.Js", icon: SiExpress },
    { name: "WordPress", icon: FaWordpress },
    // { name: "REST API" },
    // { name: "Laravel", icon: FaLaravel },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
  ];

  const tools = [
    { name: "Windows", checked: true },
    // { name: "MacOS" },
    // { name: "Linux" },
    { name: "Git", checked: true },
    { name: "Photoshop", checked: true },
    { name: "Jira", checked: true },
    { name: "Figma", checked: true },
    { name: "Notion", checked: true },
  ];

  return (
    <div className="w-full md:w-1/2 p-6 flex bg-gray-800 flex-col gap-6">
      <section>
        <h2 className="text-sm text-gray-500 mb-2">// Programming languages i have learnt or i am learning</h2>
        <UserInfo />
        <div className="grid grid-cols-3 bg-gray-900 gap-4 p-4 rounded-lg">
          {devSkills.map(({ name, icon: Icon }, index) => (
            <SkillItem key={index} name={name} checked icon={Icon} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm text-gray-500 mb-2">// Operating Systems & Tools</h2>
        <UserInfo />
        <div className="grid grid-cols-3 bg-gray-900 gap-4 p-4 rounded-lg">
          {tools.map(({ name, checked }, index) => (
            <SkillItem key={index} name={name} checked={checked} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillItem({
  name,
  icon: Icon,
  checked = false,
}: {
  name: string;
  icon?: React.ElementType;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="form-checkbox accent-gray-500 w-4 h-4"
      />
      {Icon && <Icon className="text-gray-500" />}
      <label className="text-gray-300">{name}</label>
    </div>
  );
}
