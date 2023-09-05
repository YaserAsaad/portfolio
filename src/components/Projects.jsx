import React from "react";

function Projects() {
  return (
    <div className=" bg-[#f9f9f9] flex justify-center">
      {/* MOBILE */}
      <section className="py-[5rem] ">
        {/* WRITE */}
        <div className="mb-[5rem] flex flex-col items-center justify-center text-center">
          <h5 className="uppercase mb-[1rem] font-semibold text-[#147efb]">
            portfolio
          </h5>
          <h3 className="text-[#2d2e32] max-w-xs sm:max-w-sm font-semibold text-2xl ">
            Each project is a unique piece of development 🧩
          </h3>
        </div>
        {/* CARDS */}
        <div className="grid grid-rows-4 gap-4">
          {/* CARD ONE */}
          <div className="shadow-2xl bg-white rounded-2xl flex flex-col text-center items-center w-[22rem] h-[53rem] sm:w-[30rem] sm:h-[56rem]">
            {/* IMG */}
            <img
              className="rounded-xl mt-[2rem] w-80 h-96 sm:w-[28rem] sm:h-[28rem]"
              src="/src/assets/lap2.jpeg"
              alt=""
            />
            {/* WRITES */}
            <h3 className="text-[#2d2e32] text-xl uppercase my-[1.5rem] font-semibold">
              qrates
            </h3>
            <p className="max-w-[18rem] sm:max-w-xs text-lg text-[#767676] items-center mb-[2rem]">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            {/* P + P */}
            <div className="flex text-md font-medium  text-black">
              <p className="border-2 border-slate-200  mr-2 shadow-xl py-2 px-4">
                React
              </p>
              <p className="border-2 border-slate-200   py-2 shadow-xl px-4">
                Tailwind
              </p>
            </div>
            {/* LINKS */}
            <div className="flex font-medium mt-10 ">
              <a
                className="hover:text-[#147efb] text-lg flex items-center mr-10"
                target="_blank"
                href="https://github.com/YaserAsaad"
              >
                Code
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/windows/64/github.png"
                  alt=""
                />
              </a>
              <a
                className="hover:text-[#147efb] text-lg flex items-center"
                target="_blank"
                href="/"
              >
                Live Demo
                <img
                  className=""
                  width="35"
                  height="35"
                  src="https://img.icons8.com/pulsar-line/48/share-rounded.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* DESKTOP */}
    </div>
  );
}

export default Projects;
