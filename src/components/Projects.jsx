import React from "react";
import Box from "./Box";

const Projects = () => {
  const boxesData = [
    {
      imageSrc: "https://i.ibb.co/JrsdgW2/planpal.png",
      title: "PlanPal",
      description:
        "PlanPal is your go-to solution for flexible event scheduling, designed to meet the needs of individuals and teams. With features like event series creation, reminders, and contacts lists, organizing your events has never been easier!",
      tags: [
        { label: "React", bgColor: "stone-800", textColor: "cyan-400" },
        { label: "JavaScript", bgColor: "yellow-400", textColor: "zinc-900" },
        { label: "Tailwind CSS", bgColor: "cyan-600", textColor: "zinc-900" },
        { label: "DaisyUI", bgColor: "teal-600", textColor: "zinc-900" },
        { label: "HTML5", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "CSS", bgColor: "cyan-600", textColor: "zinc-100" },
        { label: "Git", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "Firebase", bgColor: "orange-600", textColor: "yellow-300" },
      ],
      link: "https://reactprojecta58.github.io/PlanPal/",
    },
    {
      imageSrc: "https://i.ibb.co/Lz7nDq2/reactventures.png",
      title: "ReactVenture",
      description:
        "ReactVenture is a platform for travelers to share their adventures, tips, and experiences. Connect with fellow travelers, browse posts, and enjoy an intuitive interface that makes sharing your travel stories easy and engaging.",
      tags: [
        { label: "React", bgColor: "stone-800", textColor: "cyan-400" },
        { label: "JavaScript", bgColor: "yellow-400", textColor: "zinc-900" },
        { label: "Bootstrap", bgColor: "purple-800", textColor: "zinc-100" },
        { label: "HTML5", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "CSS", bgColor: "cyan-600", textColor: "zinc-100" },
        { label: "Git", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "Firebase", bgColor: "orange-600", textColor: "yellow-300" },
      ],
      link: "https://reactprojecta58.github.io/ReactVenture/",
    },
    {
      imageSrc: "https://i.ibb.co/PhFQSyN/GiphyWeb.png",
      title: "Giphy",
      description:
        "Web Giphy is a clone of the original Giphy website for sharing and discovering new GIFs. Dive into a nostalgic experience reminiscent of the beloved GIF-sharing pioneer, where users indulge in a vast repository of animated expressions.",
      tags: [
        { label: "JavaScript", bgColor: "yellow-400", textColor: "zinc-900" },
        { label: "HTML5", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "CSS", bgColor: "cyan-600", textColor: "zinc-100" },
        { label: "Git", bgColor: "orange-700", textColor: "zinc-100" },
        { label: "Node.js", bgColor: "emerald-600", textColor: "zinc-800" },
        { label: "ESLint", bgColor: "indigo-600", textColor: "zinc-900" },
      ],
      link: "https://a58-team-03.github.io/Web-Project-Giphy/#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-4">
      {boxesData.map((box, index) => (
        <Box
          key={index}
          imageSrc={box.imageSrc}
          title={box.title}
          description={box.description}
          tags={box.tags}
          link={box.link}
        />
      ))}
    </div>
  );
};

export default Projects;
