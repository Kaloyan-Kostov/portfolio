import React, { useEffect } from "react";
import profilepic from "/profpic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div id="top">
      <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8" id="hero">
          <motion.img
            src={profilepic}
            className="w-[300px] md:w-[450px] rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={["Junior", 1000, "Frontend", 1000, "Developer", 1000]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
            >
              HEY,
              <br />
              <span className="text-purple-500">Kaloyan Kostov</span>
              <br />
              HERE!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
            >
              I'm a recent Telerik Academy graduate, with passion for frontend
              development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-row items-center gap-6 my-4 md:mb-0"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                           border-purple-400 rounded-xl"
              >
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </motion.button>

              <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/Kaloyan-Kostov"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/kaloyan-kostov-82b04926a/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="mailto:kostov.kaloyan44@gmail.com"
                  target="_blank"
                >
                  <AiOutlineMail />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="logos mt-24 mb-6 mx-4 md:mb-0">
          <div className="logos-slide">
            <div>
              {" "}
              <img src="./logos/react.svg" alt="react" />
            </div>
            <div>
              {" "}
              <img src="./logos/css3.svg" alt="css" />
            </div>
            <div>
              {" "}
              <img src="./logos/html5.svg" alt="html" />
            </div>
            <div>
              {" "}
              <img src="./logos/javascript.svg" alt="js" />
            </div>
            <div>
              {" "}
              <img
                src="./logos/tailwindCSS.svg"
                alt="tailwind"
                height={"60"}
                width={"60"}
              />
            </div>
            <div>
              {" "}
              <img src="./logos/gsap-greensock.svg" alt="gsap" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 hidden md:block">
          <ShinyEffect left={0} top={0} size={1400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
