import React from "react";
import { FaFileDownload, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">K.Kostov</h3>
        <div className="flex flex-row gap-3  md:gap-6 text-gray-400 text-4xl">
          <a
            href="/resume.pdf"
            download
            className="hover:scale-110 transition-all"
          >
            <FaFileDownload />
          </a>
          <a
            href="https://github.com/Kaloyan-Kostov"
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/kaloyan-kostov-82b04926a/"
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kostov.kaloyan44@gmail.com"
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2024 K.Kostov</p>
    </div>
  );
};

export default Footer;
