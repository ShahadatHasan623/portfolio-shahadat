import { CiHome } from "react-icons/ci";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BiDownArrowAlt } from "react-icons/bi";
const Introduction = () => {
  const logos = [
    {
      name: "mongodb",
      src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "express",
      src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg",
    },
    { name: "react", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    {
      name: "node",
      src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
  ];
  return (
    <div id="Introduction">
      <div className="flex items-center gap-2 bg-[#121212] px-5 rounded-full border-2 border-[#333333] w-max  text-2xl py-2 rajdhani-regular mt-10 mb-5 lg:mt-10 lg:mx-5 mx-auto">
        <h1 className="text-[var(--text-secondary)] font-semibold uppercase text-xl flex items-center gap-2">
          <span>
            <CiHome className="text-[var(--text-main)]" size={25} />
          </span>{" "}
          Introduction
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-center justify-between content-center px-4">
        {/* Text Content */}
        <div className="space-y-2 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] uppercase">
            Hi, I'm Shahadat
          </h1>

          <h1 className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xl md:text-2xl font-semibold uppercase">
            <span className="text-[var(--text-secondary)]">And I'm</span>
            <span className="text-[var(--blue-main)] drop-shadow-md">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Web Developer",
                    "React Developer",
                    "Frontend Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 text-center lg:text-justify text-sm md:text-base">
            A MERN Stack Developer passionate about building responsive and
            user-friendly web applications. I enjoy working with React, Node.js,
            and MongoDB to create full-stack solutions.
          </p>
        </div>

        {/* Animation Container */}
        <div className="animation-container flex justify-center items-center w-full lg:w-1/2">
          <div className="main-circle">
            {logos.map((logo, index) => (
              <div key={index} className={`logo-item ${logo.name}`}>
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end m-0 p-4">
        <a
          href="#projects"
          className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 group transition-transform duration-300 active:scale-95"
        >
          {/* Rotating Text Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border-2 border-[var(--text-secondary)] rounded-full flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                fill="currentColor"
                className="text-[11px] font-bold tracking-[2.5px] uppercase fill-[var(--text-secondary)]"
              >
                <textPath xlinkHref="#circlePath">
                  My Projects • My Projects •
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Center Icon */}
          <div className="relative flex items-center justify-center">
            <BiDownArrowAlt className="text-[var(--text-main)] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-all" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default Introduction;
