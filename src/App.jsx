import { useState } from "react";
import profileImage from "./assets/shahadat.jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Outlet } from "react-router";
import { CiHome, CiMail, CiUser } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

export default function App() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#Introduction");

  const navItems = [
    { id: "#Introduction", icon: <CiHome size={30} />, label: "Home" },
    { id: "#About", icon: <CiUser size={30} />, label: "About" },
    { id: "#Contact", icon: <CiMail size={30} />, label: "Contact" },
  ];

  return (
    <div className="grid  lg:grid-cols-12 gap-6 max-w-7xl mx-auto relative">
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-4 col-span-12 animated-border lg:h-screen lg:sticky top-0 bg-[#1a1a1a]/90 backdrop-blur-3xl shadow-lg shadow-blue-500/90 relative fade-sides lg:mx-0 mx-5">
        <div className="montserrat-font flex flex-col justify-center items-center space-y-6 py-5 ">
          <div className="flex items-center gap-2 bg-[#121212] px-8 rounded-full border-2 border-[#333333]">
            <div className=" w-4 h-4 bg-amber-700 rounded-full my-5"></div>
            <h1 className="text-[#858585] text-xl">
              Avaiable{" "}
              <span className="text-[var(--text-main)] font-semibold">
                3 Project
              </span>
            </h1>
          </div>

          <div className="relative w-60 h-61 mx-auto profile-frame">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />

            <div className="absolute text-center text-6xl font-extrabold -bottom-8 w-full z-10 sacramento-regular">
              <h1 className="text-[var(--text-main)]">Shahadat</h1>
            </div>
          </div>
          <div>
            <h3 className="text-[var(--text-secondary)] text-center font-semibold text-xl mt-5">
              shahadathasan743599@gmail.com
            </h3>
            <p className="text-center space-y-2 text-[var(--text-muted)]">
              Based in Barisal,Bangladesh
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <a
              href="https://www.facebook.com/shahadat.shariar.2024"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://x.com/shahadat7435"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahadat-942577305/"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
          <div className="z-100">
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 flex items-center bg-[#121212] border-2 border-[#333333] rounded-full text-[var(--text-main)] font-semibold text-2xl  inline-flex inter-font transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              Get Started{" "}
              <MdArrowOutward className="ml-5 flex items-center justify-center w-10  h-10 rounded-full z-100" />
            </a>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="lg:col-span-7 col-span-12 mt-5">
        <Outlet></Outlet>
      </div>

      {/* RIGHT SIDEBAR (Desktop Fixed) */}
      <div className="lg:col-span-1 hidden lg:flex items-center justify-center lg:sticky top-0 h-screen">
        {/* Glassmorphism Sidebar Card */}
        <div className="w-20 py-8 bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border-blue)] rounded-full shadow-2xl flex flex-col items-center">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 items-center">
            {navItems.map((item) => {
  
              const isActive = activeNav === item.id;

              return (
                <li
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={item.label}
                  data-tooltip-place="left"
                  className={`p-3 rounded-full transition-all duration-300 cursor-pointer 
              ${
                isActive
                  ? "bg-[var(--blue-main)] text-white shadow-[0_0_15px_var(--blue-main)]" // Active Style
                  : "text-[var(--text-main)] hover:bg-[var(--text-secondary)] hover:text-black" // Normal Style
              }`}
                >
                  <a href={item.id}>{item.icon}</a>
                </li>
              );
            })}
            {/* Tooltip ekbar rakha-i jotheshto loop-er baire */}
            <Tooltip id="my-tooltip" />
          </ul>
        </div>
      </div>

      {/* MOBILE TOOLS ICON */}
      <div className="col-span-12 lg:hidden flex justify-end p-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 absolute -top-5 right-0  text-white px-4 py-2 rounded-md"
        >
          Tools
        </button>
      </div>

      {/* MOBILE SIDEBAR (Drawer) */}
      {open && (
        <div
          className="
          fixed top-0 right-0 
          h-full w-64 bg-white 
          shadow-xl border-l border-green-500 
          z-50 p-6
        "
        >
          <button
            onClick={() => setOpen(false)}
            className="bg-red-500 text-white px-3 py-1 rounded-md mb-4"
          >
            Close
          </button>
          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
