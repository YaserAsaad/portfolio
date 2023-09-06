import React from "react";
import { useState } from "react";
import { motion as m } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="relative bg-slate-50 dark:bg-black dark:text-white ">
        <header className="bg-white shadow-sm text-black fixed left-0 right-0 z-10 top-0">
          <section className=" mx-8 p-4 flex justify-between items-center">
            <m.h1
              className="text-xl font-semibold lg:ml-4 m-2"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <a href="#">Yaser.dev</a>
            </m.h1>
            <div>
              <m.button
                onClick={() => setToggle(true)}
                className={`text-3xl md:hidden cursor-pointer hover:text-[#147efb] 
                `}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                ☰
              </m.button>
              {/* Desktop */}
              <m.nav
                className=" hidden md:block space-x-6 text-lg font-semibold text-[#2d2e32] "
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <a
                  href="#"
                  className="hover:opacity-90 hover:text-[#147efb] duration-200"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:opacity-90 hover:text-[#147efb] duration-200"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:opacity-90 hover:text-[#147efb] duration-200"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:opacity-90 hover:text-[#147efb] duration-200"
                >
                  Contact
                </a>
              </m.nav>
            </div>
          </section>
          {/* Phone */}
          <m.section
            id="mobile-menu"
            className={` 
            ${toggle ? "block" : "hidden"}
            absolute top-0 bg-white w-full text-2xl flex-col font-medium `}
            animate={toggle ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            variants={variants}
          >
            <button
              onClick={() => setToggle(false)}
              className="text-6xl px-10 py-2 w-full font-light self-end justify-end mb-6 flex hover:text-[#147efb] duration-200"
            >
              ×
            </button>
            <nav
              className="flex flex-col min-h-screen items-center py-10 "
              aria-label="mobile"
            >
              <a
                href="#"
                className="w-full text-center py-6 hover:opacity-90 hover:text-[#147efb] duration-200"
                onClick={() => setToggle(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="w-full text-center py-6 hover:opacity-90 hover:text-[#147efb] duration-200"
                onClick={() => setToggle(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="w-full text-center py-6 hover:opacity-90 hover:text-[#147efb] duration-200"
                onClick={() => setToggle(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="w-full text-center py-6 hover:opacity-90 hover:text-[#147efb] delay-100"
                onClick={() => setToggle(false)}
              >
                Contact
              </a>
            </nav>
          </m.section>
        </header>
      </div>
    </>
  );
}

export default Navbar;
