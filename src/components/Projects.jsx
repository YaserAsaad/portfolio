import React from "react";

function Projects() {
  return (
    <div id="projects" className=" bg-[#f9f9f9] flex max-lg:justify-center">
      {/* MOBILE */}
      <section className="lg:hidden py-[5rem] ">
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
        <div className="grid grid-rows-4 gap-[4rem]">
          {/* CARD ONE */}
          <div className="shadow-lg bg-white rounded-2xl flex flex-col text-center items-center w-[22rem] h-[53rem] sm:w-[35rem] sm:h-[53rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://qrates-vinyl.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mt-[2rem] h-96 w-80 sm:w-[30rem] sm:h-[24rem] overflow-hidden"
            >
              <img
                className="w-fit translate-y-0 hover:translate-y-[-90%] transition-transform duration-[12s] delay-0 ease-in-out "
                src="/src/assets/qrates.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
              qrates
            </h3>
            <p className="max-w-[18rem] sm:max-w-xs text-lg text-[#767676] items-center mb-[2rem]">
              Qrates is a crowdfunding platform for musicians to produce custom
              vinyl records, bridging the gap between artists and vinyl
              enthusiasts, promoting unique music experiences.
            </p>
            {/* P + P */}
            <div className="flex text-md font-medium  text-black">
              <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                React
              </p>
              <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                Tailwind
              </p>
            </div>
            {/* LINKS */}
            <div className="flex font-medium mt-10 ">
              <a
                className="hover:text-[#147efb] text-lg flex items-center mr-10"
                target="_blank"
                href="https://github.com/YaserAsaad/Qrates"
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
                href="https://qrates-vinyl.netlify.app/"
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
          {/* CARD TWO */}
          <div className="shadow-lg bg-white rounded-2xl flex flex-col text-center items-center w-[22rem] h-[53rem] sm:w-[35rem] sm:h-[53rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://friedrich-n.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mt-[2rem] h-96 w-80 sm:w-[30rem] sm:h-[25rem] overflow-hidden"
            >
              <img
                className=" translate-y-0 hover:translate-y-[-75%] transition-transform duration-[10s] delay-0 ease-in-out"
                src="/src/assets/friedrich.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
              Friedrich
            </h3>
            <p className="max-w-[18rem] sm:max-w-xs text-lg text-[#767676] items-center mb-[2rem]">
              A website dedicated to Friedrich Nietzsche's philosophy, featuring
              a simple, responsive design for easy navigation and accessibility
              to his profound ideas.
            </p>
            {/* P + P */}
            <div className="flex text-md font-medium  text-black">
              <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                React
              </p>
              <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                Tailwind
              </p>
            </div>
            {/* LINKS */}
            <div className="flex font-medium mt-10 ">
              <a
                className="hover:text-[#147efb] text-lg flex items-center mr-10"
                target="_blank"
                href="https://github.com/YaserAsaad/friedrich"
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
                href="https://friedrich-n.netlify.app/"
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
          {/* CARD THREE */}
          <div className="shadow-lg bg-white rounded-2xl flex flex-col text-center items-center w-[22rem] h-[53rem] sm:w-[35rem] sm:h-[53rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://stark-library.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mt-[2rem] h-96 w-80 sm:w-[30rem] sm:h-[24rem] overflow-hidden"
            >
              <img
                className=" translate-y-0 hover:translate-y-[-50%] transition-transform duration-[10s] delay-0 ease-in-out"
                src="/src/assets/stark.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
              Stark
            </h3>
            <p className="max-w-[18rem] sm:max-w-xs text-lg text-[#767676] items-center mb-[2rem]">
              Stark Library's website is a user-friendly online platform,
              providing access to an extensive collection of resources, events,
              and digital services for the community's enrichment.
            </p>
            {/* P + P */}
            <div className="flex text-md font-medium  text-black">
              <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                React
              </p>
              <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                Tailwind
              </p>
            </div>
            {/* LINKS */}
            <div className="flex font-medium mt-10 ">
              <a
                className="hover:text-[#147efb] text-lg flex items-center mr-10"
                target="_blank"
                href="https://github.com/YaserAsaad/stark-library"
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
                href="https://stark-library.netlify.app/"
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
          {/* CARD FOUR */}
          <div className="shadow-lg bg-white rounded-2xl flex flex-col text-center items-center w-[22rem] h-[53rem] sm:w-[35rem] sm:h-[53rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://bonsai-website.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mt-[2rem] h-96 w-80 sm:w-[30rem] sm:h-[24rem] overflow-hidden"
            >
              <img
                className=" translate-y-0 hover:translate-y-[-65%] transition-transform duration-[10s] delay-0 ease-in-out"
                src="/src/assets/bonsai.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
              Bonsai
            </h3>
            <p className="max-w-[18rem] sm:max-w-xs text-lg text-[#767676] items-center mb-[2rem]">
              The Bonsai website is a digital haven for enthusiasts, offering
              guidance on cultivation, styling techniques, and a community for
              sharing the art of miniature tree mastery.
            </p>
            {/* P + P */}
            <div className="flex text-md font-medium  text-black">
              <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                React
              </p>
              <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                Tailwind
              </p>
            </div>
            {/* LINKS */}
            <div className="flex font-medium mt-10 ">
              <a
                className="hover:text-[#147efb] text-lg flex items-center mr-10"
                target="_blank"
                href="https://github.com/YaserAsaad/bonsai"
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
                href="https://bonsai-website.netlify.app/"
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
      <section className="hidden  mx-auto lg:flex lg:flex-col py-[5rem]">
        {/* WRITE */}
        <div className="mb-[4rem] flex flex-col ">
          <h5 className="uppercase mb-[1rem] font-bold text-[#147efb] ">
            portfolio
          </h5>
          <h3 className="text-[#2d2e32] font-semibold text-3xl ">
            Each project is a unique piece of development 🧩
          </h3>
        </div>
        {/* CARDS */}
        <div className="grid grid-rows-4 gap-[4rem]">
          {/* CARD ONE */}
          <div className="shadow-lg bg-white rounded-2xl flex items-center w-[62rem] h-[26rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://qrates-vinyl.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl ml-[1rem] w-[33rem] h-[23rem] overflow-hidden"
            >
              <img
                className="w-fit translate-y-0 hover:translate-y-[-90%] transition-transform duration-[12s] delay-0 ease-in-out "
                src="/src/assets/qrates.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <div className="flex flex-col mx-auto items-center">
              <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
                qrates
              </h3>
              <p className="max-w-[18rem] text-md text-[#767676] text-center mb-[2rem] font-medium">
                Qrates is a crowdfunding platform for musicians to produce
                custom vinyl records, bridging the gap between artists and vinyl
                enthusiasts, promoting unique music experiences.
              </p>
              {/* P + P */}
              <div className="flex text-md font-medium  text-black">
                <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                  React
                </p>
                <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                  Tailwind
                </p>
              </div>
              {/* LINKS */}
              <div className="flex font-medium mt-10 ">
                <a
                  className="hover:text-[#147efb] text-lg flex items-center mr-10"
                  target="_blank"
                  href="https://github.com/YaserAsaad/Qrates"
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
                  href="https://qrates-vinyl.netlify.app/"
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
          {/* CARD TWO */}
          <div className="shadow-lg bg-white rounded-2xl flex items-center w-[62rem] h-[26rem]">
            {/* WRITES */}
            <div className="flex flex-col mx-auto items-center">
              <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
                Friedrich
              </h3>
              <p className="max-w-[18rem] text-md text-[#767676] text-center mb-[2rem] font-medium">
                A website dedicated to Friedrich Nietzsche's philosophy,
                featuring a simple, responsive design for easy navigation and
                accessibility to his profound ideas.
              </p>
              {/* P + P */}
              <div className="flex text-md font-medium  text-black">
                <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                  React
                </p>
                <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                  Tailwind
                </p>
              </div>
              {/* LINKS */}
              <div className="flex font-medium mt-10 ">
                <a
                  className="hover:text-[#147efb] text-lg flex items-center mr-10"
                  target="_blank"
                  href="https://github.com/YaserAsaad/friedrich"
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
                  href="https://friedrich-n.netlify.app/"
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
            {/* IMG */}
            <a
              target="_blank"
              href="https://nietzsche-n.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mr-[1rem] w-[33rem] h-[23rem] overflow-hidden"
            >
              <img
                className="w-fit translate-y-0 hover:translate-y-[-90%] transition-transform duration-[12s] delay-0 ease-in-out "
                src="/src/assets/friedrich.png"
                alt=""
              />
            </a>
          </div>
          {/* CARD THREE */}
          <div className="shadow-lg bg-white rounded-2xl flex items-center w-[62rem] h-[26rem]">
            {/* IMG */}
            <a
              target="_blank"
              href="https://stark-library.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl ml-[1rem] w-[33rem] h-[23rem] overflow-hidden"
            >
              <img
                className="w-fit translate-y-0 hover:translate-y-[-90%] transition-transform duration-[12s] delay-0 ease-in-out "
                src="/src/assets/stark.png"
                alt=""
              />
            </a>
            {/* WRITES */}
            <div className="flex flex-col mx-auto items-center">
              <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
                Stark
              </h3>
              <p className="max-w-[18rem] text-md text-[#767676] text-center mb-[2rem] font-medium">
                Stark Library's website is a user-friendly online platform,
                providing access to an extensive collection of resources,
                events, and digital services for the community's enrichment.
              </p>
              {/* P + P */}
              <div className="flex text-md font-medium  text-black">
                <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                  React
                </p>
                <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                  Tailwind
                </p>
              </div>
              {/* LINKS */}
              <div className="flex font-medium mt-10 ">
                <a
                  className="hover:text-[#147efb] text-lg flex items-center mr-10"
                  target="_blank"
                  href="https://github.com/YaserAsaad/stark-library"
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
                  href="https://stark-library.netlify.app/"
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
          {/* CARD FOUR */}
          <div className="shadow-lg bg-white rounded-2xl flex items-center w-[62rem] h-[26rem]">
            {/* WRITES */}
            <div className="flex flex-col mx-auto items-center">
              <h3 className="text-[#2d2e32] text-xl uppercase my-[2rem] font-semibold">
                Bonsai
              </h3>
              <p className="max-w-[18rem] text-md text-[#767676] text-center mb-[2rem] font-medium">
                The Bonsai website is a digital haven for enthusiasts, offering
                guidance on cultivation, styling techniques, and a community for
                sharing the art of miniature tree mastery.
              </p>
              {/* P + P */}
              <div className="flex text-md font-medium  text-black">
                <p className="border-2 border-slate-100  mr-2 shadow-xl py-2 px-4">
                  React
                </p>
                <p className="border-2 border-slate-100   py-2 shadow-xl px-4">
                  Tailwind
                </p>
              </div>
              {/* LINKS */}
              <div className="flex font-medium mt-10 ">
                <a
                  className="hover:text-[#147efb] text-lg flex items-center mr-10"
                  target="_blank"
                  href="https://github.com/YaserAsaad/bonsai"
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
                  href="https://bonsai-website.netlify.app/"
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
            {/* IMG */}
            <a
              target="_blank"
              href="https://bonsai-website.netlify.app/"
              className="shadow-xl shadow-slate-200 rounded-3xl mr-[1rem] w-[33rem] h-[23rem] overflow-hidden"
            >
              <img
                className="w-fit translate-y-0 hover:translate-y-[-90%] transition-transform duration-[12s] delay-0 ease-in-out "
                src="/src/assets/bonsai.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
      {/* That's it DESKTOP is done, thank you ;) */}
    </div>
  );
}

export default Projects;
