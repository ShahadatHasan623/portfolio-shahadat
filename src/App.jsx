import { useState } from "react";
import profileImage from "./assets/shahadat.jpg";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid  lg:grid-cols-12 gap-6 max-w-7xl mx-auto relative">
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-4 col-span-12 animated-border h-screen lg:sticky top-0 bg-[#1a1a1a]/90 backdrop-blur-3xl shadow-lg shadow-blue-500/90 relative overflow-hidden fade-sides lg:mx-0 mx-5">
        <div className="montserrat-font flex flex-col justify-center items-center space-y-8 ">
          <div className="flex items-center gap-2 bg-[#121212] px-8  my-5 rounded-full border-2 border-[#333333]">
            <div className=" w-4 h-4 bg-amber-700 rounded-full my-5"></div>
            <h1 className="text-[#858585] text-xl">
              Avaiable{" "}
              <span className="text-[var(--text-main)] font-semibold">
                3 Project
              </span>
            </h1>
          </div>

          <div className="relative w-60 h-70 mx-auto profile-frame mt-5">
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
            <h3 className="text-[#858585] text-center font-semibold text-xl mt-5">shahadathasan743599@gmail.com</h3>
            <p className="text-center space-y-2 text-[#4a4a4a]">Based in Barisal,Bangladesh</p>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="lg:col-span-7 col-span-12 border-red-500 border-4 p-4">
        <h2 className="text-xl font-bold mb-4">Middle Content</h2>
        <p className="text-white">
          Add your long content here… Page scrolls naturally. us iusto quia aut
          eaque, neque autem, laborum velit consequatur. Earum est, odit eum
          tenetur sunt officiis libero placeat optio sit numquam quas laudantium
          iure reiciendis eius non soluta similique deleniti possimus
          distinctio, molestias, a laborum modi quod nemo. Cum, neque ipsum
          voluptatem quas laboriosam consequatur assumenda iusto iste omnis iure
          tempora illo maiores voluptatibus dolores soluta rem nisi optio
          placeat sunt nemo. Provident recusandae vitae accusamus eum natus
          adipisci veritatis nesciunt nulla unde est?
        </p>
      </div>

      {/* RIGHT SIDEBAR (Desktop Fixed) */}
      <div className="lg:col-span-1 hidden lg:block border-green-500 border-4 rounded-3xl h-screen lg:sticky top-0 p-4">
        <ul className="space-y-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
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
