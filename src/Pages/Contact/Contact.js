import React from "react";
import { Twitter, Twitter2 } from "../../Components/Icons";
import Navbar2 from "../../Components/Navbar2";
import Form from "./Components/Form";

export default function Contact() {
  const locations = [
    { icon: "call", value: "+1012 3456 789" },
    { icon: "mail", value: "demo@gmail.com" },
    {
      icon: "location",
      value: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    },
  ];

  return (
    <div className="bg-mainBlue min-h-screen flex flex-col font-pop">
      <Navbar2 />
      <div className="h-full flex flex-col gap-7 py-10 items-center justify-center text-white">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl text-center"> Contact Us </h1>
          <p className="text-grey">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="px-2 md:w-[80%] xl:w-[80rem]">
          <div className="bg-secBlue flex flex-col lg:flex-row gap-8 rounded-[10px] p-9">
            {/* Left */}
            <div className="w-full lg:w-[40%] z-10 relative rounded-[12px] bg-threeblue p-6 flex flex-col gap-32">
              <div>
                <p className="font-semibold text-2xl"> Contact Information </p>
                <p className="text-grey">Say something to start a live chat!</p>
              </div>

              {/* contact */}
              <div className="flex flex-col gap-6">
                {locations.map((val) => {
                  return (
                    <div className="flex gap-2">
                      <img
                        src={require(`../../Assets/${val.icon}.svg`)}
                        alt="contact icons"
                      />
                      <div>{val.value} </div>
                    </div>
                  );
                })}
              </div>

              {/* social icons */}
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-secBlack hover:bg-primBlack transition-all">
                  <img
                    src={require(`../../Assets/twitter.svg`).default}
                    alt="contact icons"
                  />
                </button>
                <button className="p-3 rounded-full bg-secBlack hover:bg-primBlack transition-all">
                  <img
                    src={require(`../../Assets/instagram.svg`).default}
                    alt="contact icons"
                  />
                </button>
                <button className="p-3 rounded-full bg-secBlack hover:bg-primBlack transition-all">
                  <img
                    src={require(`../../Assets/discord.svg`).default}
                    alt="contact icons"
                  />
                </button>
              </div>

              {/* Circle inside */}
              <div className="absolute right-0 bottom-0">
                <img
                  className="rounded-br-xl"
                  src={require("../../Assets/Contact/bg2.svg").default}
                  alt=""
                />
              </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[60%] px-5 py-2 z-10">
              <Form />
            </div>
          </div>
        </div>

        {/* Circles */}
        <div className="fixed left-0">
          <img src={require("../../Assets/Contact/bg1.svg").default} alt="" />
        </div>

        {/* circle 3 */}
        <div className="fixed right-0">
          <img src={require("../../Assets/Contact/bg3.svg").default} alt="" />
        </div>

        {/* Circles End */}
      </div>
    </div>
  );
}
