// Header.js
import React from "react";
import { Folder, LinkedIn, Mail, Menu, Page, Resume } from "../helpers/icons";
import DarkModeToggle from "./DarkModeToggle";
import Modal from "./Modal";

function Header() {
  return (
    <div className="sticky top-0 z-50 py-2 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="textarea-ghost lg:hidden mr-1 ml-2"
              >
                <Menu />
                <i className="bi bi-list text-"></i>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/resume.pdf" download>
                    <Resume />
                    <div className="text-2xl">Resume.pdf</div>
                  </a>
                </li>
                <li>
                  <details>
                    <summary>
                      <Folder />
                      <div className="text-2xl">My Projects</div>
                    </summary>
                    <ul>
                      <li>
                        <a
                          href="https://github.com/ReactProjectA58/PlanPal"
                          target="_blank"
                        >
                          <Page />
                          <div className="text-lg">PlanPal</div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/ReactProjectA58/ReactVenture"
                          target="_blank"
                        >
                          <Page />
                          <div className="text-lg">ReactVenture</div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/A58-Team-03/Web-Project-Giphy"
                          target="_blank"
                        >
                          <Page />
                          <div className="text-lg">Giphy Web</div>
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            <label
              htmlFor="about_me_modal"
              className="btn-ghost p-1 textarea-secondary text-3xl cursor-pointer hover:bg-indigo-400 hover:text-white rounded-sm"
            >
              About me
            </label>

            {/* Reusable Modal Component */}
            <Modal id="about_me_modal" title="Kaloyan here !">
              <div className="p-4">
                <h2 className="text-xl font-bold "></h2>

                <p className="text-xl">
                  currently located in Sofia | originally from Stara Zagora,
                  Bulgaria
                  <br />
                </p>

                <h3 className="text-2xl font-bold mt-4">Objective:</h3>
                <p>
                  Seeking a position where I can leverage my skills in React,
                  JavaScript and eventually TypeScript while further developing
                  my expertise in dynamic web development.
                </p>

                <h3 className="text-2xl font-bold mt-4 ">Education:</h3>
                <p className="text-green-500">
                  <a
                    href="https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=J7L5sck91R&qrcode=1"
                    target="_blank"
                  >
                    Telerik Academy - Alpha JavaScript 6 Month Program
                  </a>
                  <br />
                </p>

                <h3 className="text-2xl font-bold mt-4 ">Skills:</h3>
                <ul>
                  <li>- Proficient in JavaScript, React</li>
                  <li>
                    - Proficient in HTML, CSS frameworks such as Tailwind,
                    daisyUI, Bootstrap{" "}
                  </li>
                  <li>- Newbie in TypeScript (currently expanding skills)</li>
                  <li>- Strong problem-solving and analytical skills</li>
                </ul>

                <h3 className="text-2xl font-bold mt-4 ">Interests:</h3>
                <ul>
                  <li>- I enjoy playing games in my free time</li>
                  <li>-I am passionate about cars</li>
                </ul>

                <h3 className="text-2xl font-bold mt-4">Languages:</h3>
                <p>Native in Bulgarian and fluent in English.</p>
              </div>
            </Modal>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>
                    <Folder />
                    <div className="text-2xl">My Projects</div>
                  </summary>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/ReactProjectA58/PlanPal"
                        target="_blank"
                      >
                        <Page />
                        <div className="text-lg">PlanPal</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ReactProjectA58/ReactVenture"
                        target="_blank"
                      >
                        <Page />
                        <div className="text-lg">ReactVenture</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/A58-Team-03/Web-Project-Giphy"
                        target="_blank"
                      >
                        <Page />
                        <div className="text-lg">Giphy Web</div>
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <label
              htmlFor="contacts_modal"
              className="btn-ghost p-1 textarea-secondary text-3xl mr-1 cursor-pointer hover:bg-indigo-400 hover:text-white rounded-sm"
            >
              Contacts
            </label>
            <Modal id="contacts_modal">
              <img src="/me.png" className="mx-auto my-auto w-48" />
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/kaloyan-kostov-82b04926a/"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
                <a href="mailto:kostov.kaloyan44@gmail.com" target="_blank">
                  <Mail />
                </a>
              </div>
            </Modal>
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
