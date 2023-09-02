import React from "react";
import { motion as m } from "framer-motion";

function About() {
  return (
    <div>
      {/* MOBILE */}
      <div className="BG lg:hidden bg-white my-[5rem]">
        <div className=" text-center items-center flex flex-col">
          <div className="">
            <img
              className="rounded-xl bg-[url(/src/assets/lap.webp)] w-[22rem] h-[15rem] sm:w-[31rem] sm:h-[20rem] bg-cover "
              alt=""
            />
          </div>
          <h5 className="uppercase font-semibold mt-[2rem] mb-[1rem] text-cyan-600">
            About me
          </h5>
          <h3 className="text-2xl sm:text-3xl max-w-sm sm:max-w-lg font-medium">
            A dedicated Front-end Developer based in Basra, Iraq 📍
          </h3>
          <p className="text-[#767676] sm:text-xl mt-[2rem] max-w-sm sm:max-w-lg">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="BG hidden lg:block bg-white my-[6.5rem]">
        <div className="flex mx-[6rem] xl:mx-[12rem] xl:justify-between ">
          {/* Img + Img */}
          <div className="mr-[4rem] xl:mr-0 relative">
            <img
              className="rounded-xl bg-[url(/src/assets/lap2.jpeg)] w-[20rem] h-[23rem] xl:w-[28rem] xl:h-[23rem] bg-cover "
              alt=""
            />
            <m.div
              className="bg-black z-20"
              layout
              style={{ borderRadius: 20 }}
            ></m.div>
          </div>
          {/* Writes */}
          <div className="flex flex-col max-w-md">
            <h5 className="uppercase text-cyan-600 font-semibold">About me</h5>
            <h3 className="text-[1.6rem] mt-[1rem] mb-[1.5rem] font-semibold">
              A dedicated Front-end Developer based in Basra, Iraq 📍
            </h3>
            <p className="text-md tracking-wide text-[#767676]">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
