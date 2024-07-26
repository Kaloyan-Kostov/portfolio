function AboutMe() {
  return (
    <div className=" px-14 md:px-40 py-8">
      <div className="about-container">
        <div className="flex justify-center text-3xl md:text-6xl mb-4">
          My name is Kaloyan Kostov
        </div>
        <div className="flex justify-center text-2xl md:text-5xl mb-8">
          Junior Frontend Developer
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 break-words">
        <div className="text-xl md:text-2xl">
          I'm a fresh graduate from Telerik Academy Alpha JS Program. I am a
          driven person focused on achieving outstanding results. I strive for
          excellence in every project I undertake, continuously learning and
          improving my skills to stay ahead in the fast-paced world of frontend
          development. I also really enjoy pixel art. You can check out my{" "}
          <a
            href="/resume.pdf"
            download
            className="text-nice-blue hover:bg-nice-blue underline hover:text-white transition-all transform"
          >
            Resume.
          </a>{" "}
        </div>
        <div className="text-2xl md:text-2xl">
          TECH STACK:
          <div>
            <span className="bg-yellow-400 text-zinc-900 p-1 mr-1">
              JavaScript{" "}
            </span>
            <span className="bg-stone-800 text-cyan-400 p-1 mr-1">React </span>
            <span className="bg-orange-700 text-zinc-100 p-1 mr-1">HTML5 </span>
            <span className="bg-blue-500 text-zinc-100 p-1 mr-1">CSS3 </span>
            <span className="bg-cyan-600 text-zinc-900 p-1 mr-1">
              Tailwind CSS{" "}
            </span>
            <span className="bg-teal-600 text-zinc-900 p-1 mr-1">DaisyUI </span>
            <span className="bg-purple-800 text-zinc-100 p-1 mr-1">
              Bootstrap{" "}
            </span>
            <span className="bg-orange-700 text-zinc-100 p-1 mr-1">Git </span>
            <span className="bg-orange-600 text-yellow-300 p-1 mr-1">
              Firebase{" "}
            </span>
            <span className="bg-red-700 text-zinc-100 p-1 mr-1">Jest </span>
            <span className="bg-emerald-600 text-zinc-800 p-1 mr-1">
              Node.js{" "}
            </span>

            <span className="bg-indigo-600 text-zinc-900 p-1 mr-1">
              ESLint{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
