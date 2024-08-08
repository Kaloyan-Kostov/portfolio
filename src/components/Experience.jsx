import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Open to work",
    period: "06/2024 - currently",
    description:
      "Currently seeking new opportunities as a Frontend Developer, where I can leverage my expertise in creating engaging, user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I am eager to contribute to innovative projects and collaborate with dynamic teams to build exceptional digital experiences.",
  },
  {
    company: "Telerik Academy",
    period: "01/2024 - 06/2024 ",
    description:
      "Successfully completed the 6-month Alpha JS Track program, where I developed foundational skills in JavaScript and modern web development from scratch. This program provided hands-on experience with real-world projects, equipping me with practical knowledge in building scalable web applications.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-4 md:mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
