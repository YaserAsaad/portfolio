import React from "react";

function Footer() {
  return (
    <div className="bg-[#2d2e32] py-[4rem]">
      {/* MOBILE + DESKTOP */}
      <div className="md:flex xs:flex-col mx-[2rem] md:mx-[8rem] lg:mx-[12rem] items-center justify-between">
        <p className="text-white text-xl font-bold flex justify-center text-center md:text-start md:justify-normal mb-[1rem] md:mb-0">
          Copyright © 2023. All rights are reserved
        </p>
        <div className="flex flex-row gap-2 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/yaserasaad/"
            target="_blank"
            className="cursor-pointer hover:scale-110 duration-200"
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
            className="cursor-pointer hover:scale-110 duration-200"
          >
            <img width="40" height="40" src="/src/assets/github.png" alt="" />
          </a>
        </div>
      </div>
      {/* happy to work with you, sir :) */}
    </div>
  );
}

export default Footer;
