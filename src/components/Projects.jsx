import React, { useState } from "react";
import PlanPal from "../assets/PlanPal.png";
import ReactVenture from "../assets/ReactVenture.png";
import GiphyWeb from "../assets/GiphyWeb.png";
import Recipe from "../assets/Desktop-Recipe.png";
import Social from "../assets/Desktop-Social.png";
import Blog from "../assets/Desktop-Blog.png";
import QRCode from "../assets/Desktop-QR.png";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

const advancedProjects = [
  {
    img: PlanPal,
    title: "PlanPal",
    description: "The Ultimate Planner: A React-based application achieved.",
    links: {
      site: "https://reactprojecta58.github.io/PlanPal/",
      github: "https://github.com/ReactProjectA58/PlanPal",
    },
  },
  {
    img: ReactVenture,
    title: "ReactVenture",
    description: "A simple forum page made with React.",
    links: {
      site: "https://reactprojecta58.github.io/ReactVenture/",
      github: "https://github.com/ReactProjectA58/ReactVenture",
    },
  },
];

const basicProjects = [
  {
    img: Recipe,
    title: "Recipe Page",
    description: "A simple Recipe Page from Frontend Mentor.",
    links: {
      site: "https://kaloyan-kostov.github.io/Frontend-Mentor-Recipe-Page/",
      github: "https://github.com/Kaloyan-Kostov/Frontend-Mentor-Recipe-Page",
    },
  },
  {
    img: Social,
    title: "Social Links Profile",
    description: "A simple Social Links Profile from Frontend Mentor.",
    links: {
      site: "https://kaloyan-kostov.github.io/Frontend-Mentor-Social-Links-Profile/",
      github:
        "https://github.com/Kaloyan-Kostov/Frontend-Mentor-Social-Links-Profile",
    },
  },
  {
    img: Blog,
    title: "Blog Preview Card",
    description: "A simple Blog Preview Card from Frontend Mentor.",
    links: {
      site: "https://kaloyan-kostov.github.io/Frontend-Mentor-Blog-Preview-Card/",
      github:
        "https://github.com/Kaloyan-Kostov/Frontend-Mentor-Blog-Preview-Card",
    },
  },
  {
    img: QRCode,
    title: "QR Code",
    description: "A simple QR Code from Frontend Mentor.",
    links: {
      site: "https://kaloyan-kostov.github.io/Frontend-Mentor-QR-code/",
      github: "https://github.com/Kaloyan-Kostov/Frontend-Mentor-QR-code",
    },
  },
];

const intermediateProjects = [
  {
    img: GiphyWeb,
    title: "GiphyWeb",
    description: "A GIF finding and sharing platform utilizing API.",
    links: {
      site: "https://a58-team-03.github.io/Web-Project-Giphy/",
      github: "https://github.com/A58-Team-03/Web-Project-Giphy",
    },
  },
];
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("advanced");

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <Reveal key={index}>
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 z-50 transition-all"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.links.site}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 duration-300 hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out!
              </a>
              <a
                href={project.links.github}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 duration-300 hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    ));
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20 pt-32" id="projects">
      <h2 className="text-3xl font-bold text-gray-200 mb-2 md:mb-8 justify-center md:justify-normal flex">
        Projects
      </h2>
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${
            activeTab === "basic" ? "bg-fuchsia-950" : "bg-slate-600"
          } text-gray-200 rounded-lg hover:bg-slate-700 duration-300`}
          onClick={() => setActiveTab("basic")}
        >
          Basic
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "intermediate" ? "bg-fuchsia-950" : "bg-slate-600"
          } text-gray-200 rounded-lg hover:bg-slate-700 duration-300`}
          onClick={() => setActiveTab("intermediate")}
        >
          Intermediate
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "advanced" ? "bg-fuchsia-950" : "bg-slate-600"
          } text-gray-200 rounded-lg hover:bg-slate-700 duration-300`}
          onClick={() => setActiveTab("advanced")}
        >
          Advanced
        </button>
      </div>
      <div>
        {activeTab === "basic" && renderProjects(basicProjects)}
        {activeTab === "intermediate" && renderProjects(intermediateProjects)}
        {activeTab === "advanced" && renderProjects(advancedProjects)}
      </div>
    </div>
  );
};

export default Portfolio;
