import React from "react";
import "/src/App.css";

import { motion as m } from "framer-motion";
import avatar from "/src/assets/avatar.png";
function Home() {
  return (
    <div id="home" className="mt-[4rem]">
      {/* Mobile */}
      <div className="text-center flex justify-center bg-[#f9f9f9] md:hidden">
        <div className="container max-w-lg flex flex-col items-center">
          <div className="mt-[2rem]">
            <img
              className="morph max-md:w-[20rem] 
              max-md:h-[20rem]
              bg-[url('/src/assets/square.jpg')]"
            />
          </div>
          <h3 className=" my-[2rem] text-5xl font-semibold text-[#2d2e32] ">
            Front-End React Developer
          </h3>
          <p className=" text-[#2d2e32] max-w-xs  font-light mb-[2rem] text-lg">
            Hi, I'm Yaser Asaad. A passionate Front-end React Developer based in
            Basra, Iraq. 📍
          </p>
          <div className="flex flex-row items-center">
            <a
              href="https://www.linkedin.com/in/yaserasaad/"
              target="_blank"
              className="cursor-pointer"
            >
              <img
                width="40"
                height="40"
                className="hover:-[#147efb]"
                src="https://img.icons8.com/material/48/linkedin--v1.png"
                alt="linkedin--v1"
              />
            </a>
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://github.com/YaserAsaad"
            >
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/windows/64/github.png"
                alt=""
              />
            </a>
          </div>
          <div className="mt-[4rem] mb-[2rem] tracking-widest">
            <h4 className="text-xl">Tech Stack</h4>
            <hr className="bg-black h-[3px] mt-1" />
          </div>

          {/* Tech Stack here mobile*/}
          <m.div
            className="mb-8 sm:hidden md:hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p align="center">
              <a href="">
                <img src="https://skillicons.dev/icons?i=html,css,js" />
              </a>
              <p align="center" className="mt-4">
                <a href="">
                  <img src="https://skillicons.dev/icons?i=react,tailwind,linux" />
                </a>
              </p>
            </p>
          </m.div>
          {/* Tech Stack here md*/}
          <m.div
            className="mb-8 max-sm:hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p align="center">
              <a href="">
                <img src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,linux" />
              </a>
            </p>
          </m.div>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="max-md:hidden bg-[#f9f9f9]">
        <div className="flex flex-row justify-center mx-6 lg:mx-[12rem]">
          <m.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex  flex-col mt-[6rem] max-w-xl "
          >
            <h3 className="text-6xl font-semibold text-[#2d2e32]">
              Front-End React Developer
            </h3>
            <p className="font-light text-xl max-w-sm  my-[2rem] text-[#2d2e32]">
              Hi, I'm Yaser Asaad. A passionate Front-end React Developer based
              in Basra, Iraq. 📍
            </p>
            <div className="flex flex-row items-center">
              <a
                href="https://www.linkedin.com/in/yaserasaad/"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  width="40"
                  height="40"
                  className="hover:-[#147efb]"
                  src="https://img.icons8.com/material/48/linkedin--v1.png"
                  alt="linkedin--v1"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/YaserAsaad"
                className="cursor-pointer "
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/windows/64/github.png"
                  alt=""
                />
              </a>
            </div>
            {/* tech stack */}
            <div className="flex mt-[6rem] items-center mb-8">
              <h4 className="mr-2 xl:mr-0 text-md lg:text-lg text-[#2d2e32] xl:tracking-widest">
                Tech.Stack
              </h4>
              <div className="border-r-2 h-[1.5rem] xl:ml-8 border-black items-center" />
              <div className="ml-2 xl:ml-8 ">
                <p align="center">
                  <a href="">
                    <img src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,linux" />
                  </a>
                </p>
              </div>
            </div>
          </m.div>
          {/* IMAGE Desktop */}
          <m.div
            className="morph 
           mt-[5rem] bg-[url('/src/assets/square.jpg')] "
          >
            <img
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              alt=""
            />
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
