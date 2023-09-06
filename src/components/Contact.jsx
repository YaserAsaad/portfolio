import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-white flex justify-center lg:justify-normal"
    >
      {/* MOBILE */}
      <section className="md:hidden py-[5rem] text-center">
        <h5 className="uppercase mb-[1rem] text-lg font-bold text-[#147efb]">
          contact
        </h5>
        <h3 className="text-2xl font-extrabold ">
          Don't be shy! Hit me up! 👇
        </h3>
        <div className="flex flex-col justify-center items-center mt-[2rem]">
          {/* Circle one */}
          <div className="circle rounded-full border border-slate-300 shadow-xl h-20 w-20 items-center flex justify-center">
            <img
              width="40"
              height="40"
              className=""
              src="https://img.icons8.com/fluency/96/location.png"
              alt="location"
            />
          </div>
          <h5 className="mt-[1rem] font-bold  text-lg">Location</h5>
          <h6 className="mt-1 text-gray-500  text-lg hover:text-[#147efb] cursor-pointer tracking-wide">
            Basra, Iraq
          </h6>
          {/* Circle two */}
          <div className="circle rounded-full border mt-[2rem] border-slate-300 shadow-xl h-20 w-20 items-center flex justify-center">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/96/mail--v1.png"
              alt="mail--v1"
            />
          </div>
          <h5 className="mt-[1rem] font-bold  text-lg">Mail</h5>
          <a
            href="mailto:yaserasaad.cs@gmail.com"
            className="mt-1 text-gray-500  text-lg hover:text-[#147efb] cursor-pointer tracking-wide"
          >
            yaserasaad.cs@gmail.com
          </a>
        </div>
      </section>
      {/* DESKTOP */}
      <section className="hidden md:flex py-[6rem]">
        <div className="flex flex-col mx-auto lg:mx-[12rem]">
          {/* WRITE */}
          <div className="">
            <h5 className="uppercase mb-2 text-lg font-bold text-[#147efb]">
              contact
            </h5>
            <h3 className="text-[1.6rem] font-extrabold ">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex items-center mt-[4rem] gap-32">
            {/* Circle one */}
            <div className="flex items-center ">
              <div className="circle rounded-full border border-slate-300 shadow-xl h-20 w-20 items-center flex justify-center">
                <img
                  width="40"
                  height="40"
                  className=""
                  src="https://img.icons8.com/fluency/96/location.png"
                  alt="location"
                />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-lg">Location</h5>
                <h6 className="text-gray-500  text-lg hover:text-[#147efb] cursor-pointer tracking-wide">
                  Basra, Iraq
                </h6>
              </div>
            </div>
            {/* Circle two */}
            <div className="flex items-center">
              <div className="circle rounded-full border  border-slate-300 shadow-xl h-20 w-20 items-center flex justify-center">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/fluency/96/mail--v1.png"
                  alt="mail--v1"
                />
              </div>
              <div className="ml-4">
                <h5 className="font-bold  text-lg">Mail</h5>
                <a
                  href="mailto:yaserasaad.cs@gmail.com"
                  className="text-gray-500  text-lg hover:text-[#147efb] cursor-pointer tracking-wide"
                >
                  yaserasaad.cs@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
