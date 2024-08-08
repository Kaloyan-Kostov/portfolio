import React from "react";
import PlanPal from "../assets/PlanPal.png";
import ReactVenture from "../assets/ReactVenture.png";
import GiphyWeb from "../assets/GiphyWeb.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { FaGithub } from "react-icons/fa6";

const projects = [
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
      site: "https://github.com/ReactProjectA58/ReactVenture",
      github: "https://github.com/ReactProjectA58/ReactVenture",
    },
  },
  {
    img: GiphyWeb,
    title: "GiphyWeb",
    description: "A GIF finding and sharing platform utilizing API.",
    links: {
      site: "https://github.com/A58-Team-03/Web-Project-Giphy",
      github: "https://github.com/A58-Team-03/Web-Project-Giphy",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20 pt-32" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
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
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 z-50  transition-all"
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
                >
                  Check it out!
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 duration-300 hover:scale-105 transition-all"
                  target="_blank"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
