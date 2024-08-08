import React from "react";

import {
  SiJest,
  SiFirebase,
  SiJira,
  SiGithub,
  SiBootstrap,
  SiDaisyui,
  SiEslint,
  SiGit,
} from "react-icons/si";
import {
  FaBrain,
  FaGears,
  FaHeartCircleCheck,
  FaListCheck,
  FaUsersGear,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend Skills",
    technologies: [
      { name: "Git", icon: <SiGit className="text-red-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-600" /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-amber-700" />,
      },
      {
        name: "Jest",
        icon: <SiJest className="text-red-700" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-cyan-600" /> },
      { name: "ESLint", icon: <SiEslint className="text-indigo-600" /> },
      { name: "Jira", icon: <SiJira className="text-sky-800" /> },
    ],
  },
  {
    category: "Soft Skills",
    technologies: [
      { name: "Teamwork", icon: <FaUsersGear className="text-sky-800" /> },
      {
        name: "Analytical Thinking",
        icon: <FaBrain className="text-pink-400" />,
      },
      {
        name: "Empathy",
        icon: <FaHeartCircleCheck className="text-red-800" />,
      },
      {
        name: "Adaptability",
        icon: <FaGears className="text-slate-600" />,
      },
      {
        name: "Motivation",
        icon: <FaWandMagicSparkles className="text-yellow-600" />,
      },
      {
        name: "Prioritization",
        icon: <FaListCheck className="text-green-700" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[700px] mx-auto flex flex-col justify-center px-10 text-gray-200 pt-32 md:pt-36 md:px-9"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Additional Skills
        </h2>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
