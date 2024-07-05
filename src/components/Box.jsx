import React, { useEffect } from "react";

const Box = ({ imageSrc, title, description, tags, link }) => {
  const theme = localStorage.getItem("theme") || "light";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="max-w-md mx-auto overflow-hidden font-pixel border-4 shadow-dark-solid-bottom-right border-indigo-400 mb-10">
      <img
        className="w-full h-72 md:h-48 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="pt-4 mt-4 max-w-full">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-xl flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block bg-${tag.bgColor} text-${tag.textColor} px-3 text-base mb-2 mr-1`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <div className="w-full flex justify-end mt-2 md:mt-0">
              <a
                className="btn textarea-secondary md:textarea-sm md:text-lg"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
