import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto pt-32 md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="flex justify-center md:justify-normal text-4xl font-semibold mb-5">
                About&nbsp;<span>Me</span>
              </h3>

              <p className="text-justify leading-7 w-11/12 mx-auto mb-10">
                From a young age, I was always curious about how computers work,
                which eventually led me to dive into coding and web development.
                I recently completed the 6-month{" "}
                <a
                  href="https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=J7L5sck91R&qrcode=1"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Alpha JS Track program
                </a>
                , where I built up my skills from scratch and got hands-on with
                JavaScript and web app development. When I’m not working, you’ll
                usually find me playing video games, hanging out with friends,
                or working out. I also have a keen interest in cars in general.
              </p>
            </div>
          </div>

          <form
            action="https://getform.io/f/anlejwla"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let’s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:scale-105 transition-all"
              target="_blank"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
