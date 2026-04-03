import React from "react";
import { CiUser } from "react-icons/ci";

const About = () => {
  return (
    <div id="About" className="my-10">
      <div className="flex items-center gap-2 bg-[#121212] px-5 rounded-full border-2 border-[#333333] w-max  text-2xl py-2 rajdhani-regular mt-10 lg:mt-10 lg:mx-5 mx-auto mb-5">
        <h1 className="text-[var(--text-secondary)] font-semibold uppercase text-xl flex items-center justify-between gap-2">
          <span>
            <CiUser className="text-[var(--text-main)]" size={25} />
          </span>{" "}
          About
        </h1>
      </div>
      <div className="space-y-6 md:space-y-8  mx-auto md:px-5 px-5  sm:px-0">
        {/* Headline - Responsive font sizes */}
        <h1 className="text-[var(--text-main)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ">
          I Can <span className="text-[var(--blue-main)]">Design</span> Anything
          <span className="block sm:inline"> You Want</span>
        </h1>

        {/* Paragraph - Improved readability and justification */}
        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed inter-font text-justify ">
          My{" "}
          <span className="text-[var(--text-main)] font-semibold underline decoration-[var(--blue-main)] underline-offset-4 decoration-2">
            Portfolio
          </span>{" "}
          showcases highly functional and visually striking applications. I
          focus on combining{" "}
          <span className="text-[var(--text-main)] font-semibold">
            modern technology
          </span>{" "}
          with{" "}
          <span className="text-[var(--blue-main)] font-bold">
            creative strategy
          </span>{" "}
          to build impactful web experiences.
        </p>

        {/* Info List - Optimized for all screens */}
        <ul className="text-[var(--text-main)] text-sm md:text-base grid gap-4 pt-2">
          <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold w-24 shrink-0 text-[var(--blue-main)] opacity-90">
              Name
            </span>
            <span className="hidden sm:inline text-[var(--text-secondary)]">
              :
            </span>
            <span className="text-[var(--text-main)]">
              Md. Shahadat Hossain
            </span>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold w-24 shrink-0 text-[var(--blue-main)] opacity-90">
              Age
            </span>
            <span className="hidden sm:inline text-[var(--text-secondary)]">
              :
            </span>
            <span className="text-[var(--text-main)]">20 Years</span>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold w-24 shrink-0 text-[var(--blue-main)] opacity-90">
              Phone
            </span>
            <span className="hidden sm:inline text-[var(--text-secondary)]">
              :
            </span>
            <a
              href="tel:+8801301608623"
              className="hover:text-[var(--blue-main)] transition-colors duration-200"
            >
              +880 1301-608623
            </a>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <span className="font-semibold w-24 shrink-0 text-[var(--blue-main)] opacity-90">
              Address
            </span>
            <span className="hidden sm:inline text-[var(--text-secondary)]">
              :
            </span>
            <span className="text-[var(--text-main)]">
              Bhola, Barisal, Bangladesh
            </span>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <span className="font-semibold w-24 shrink-0 text-[var(--blue-main)] opacity-90">
              Email
            </span>
            <span className="hidden sm:inline text-[var(--text-secondary)]">
              :
            </span>
            <a
              href="mailto:shahadathasan743599@gmail.com"
              className="break-all hover:text-[var(--blue-main)] transition-colors duration-200"
            >
              shahadathasan743599@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
