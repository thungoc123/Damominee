import { FaHtml5 } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <div className="w-full md:w-1/2 p-6 flex bg-gray-900 flex-col gap-6">
      <section>
        <h2 className="text-xl text-gray-300 mb-2">// Programming languages</h2>
        <div className="grid grid-cols-3 gap-4 p-4 rounded-lg">
          <div className="flex items-center gap-2">
          <input type="checkbox" checked readOnly className="form-checkbox text-blue-400" />
            <FaHtml5 className="text-orange-500" />
            <label className="text-gray-300">HTML</label>
          </div>
          <SkillItem name="CSS" checked />
          <SkillItem name="JavaScript" checked />
          <SkillItem name="React" checked />
          <SkillItem name="Java" checked />
          <SkillItem name="React Native" checked />
          <SkillItem name="Flutter" checked />
          <SkillItem name="TypeScript" checked />
          <SkillItem name="Node" checked />
          <SkillItem name="SASS" checked />
          <SkillItem name="Vue.js" />
          <SkillItem name=".Net" checked />
          <SkillItem name="Next.js" checked />
          <SkillItem name="C#" checked />
          <SkillItem name="MySQL" checked />
          <SkillItem name="SQL" checked />
          <SkillItem name="DynamoDB" checked />
          <SkillItem name="Django" checked />
          <SkillItem name="Python" checked />
          <SkillItem name="PHP" checked />
          <SkillItem name="Express.Js" checked />
          <SkillItem name="Wordpress" checked />
          <SkillItem name="REST API" checked />
          <SkillItem name="Laravel" checked />
          <SkillItem name="Tailwind" checked />
          <SkillItem name="Bootstrap" checked />
          <SkillItem name="Git" checked />
        </div>
      </section>
      <section>
        <h2 className="text-xl text-gray-300 mb-2">// Operating Systems & Tools</h2>
        <div className="grid grid-cols-3 gap-4 p-4 rounded-lg">
          <SkillItem name="Windows" checked />
          <SkillItem name="MacOS" />
          <SkillItem name="Linux" />
          <SkillItem name="Photoshop" checked/>
          <SkillItem name="Jira" checked />
          <SkillItem name="Figma" checked />
          <SkillItem name="Notion" checked />
        </div>
      </section>
    </div>
  );
}

function SkillItem({ name, checked = false }: { name: string; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={checked} readOnly className="form-checkbox text-blue-400" />
      <label>{name}</label>
    </div>
  );
}
