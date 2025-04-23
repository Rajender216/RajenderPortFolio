import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiGit, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Vite", icon: <SiVite /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-fit lg:min-h-screen px-6 py-16 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">My Skills</h2>
        <p className="text-gray-400 mb-12">
          Tools and technologies I work with:
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="text-5xl text-cyan-400 group-hover:text-purple-400 transition duration-300 transform group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white tracking-wide">
                {skill.name}
              </p>
              <span className="w-6 h-1 bg-green-500 group-hover:w-10 group-hover:bg-purple-500 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
