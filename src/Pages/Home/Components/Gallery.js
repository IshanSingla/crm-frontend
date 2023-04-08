import React from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col w-[max-content] relative">
      <div className="flex">
        <div className="w-[60%]">
          <img
            src={require("../../../Assets/hero-section/h1.png")}
            alt="h1"
            className="w-"
          />
        </div>

        <div className="w-[40%]">
          <img src={require("../../../Assets/hero-section/h2.png")} alt="h2" />
        </div>
      </div>

      <div className="flex">
        <div className="bg-[#3461FF] w-[40%] rounded-full flex items-center justify-center ">
          <img
            src={require("../../../Assets/hero-section/pencil.svg").default}
            alt="pencil"
          />
        </div>

        <div className="w-[60%]">
          <img src={require("../../../Assets/hero-section/h3.png")} alt="h3" />
        </div>
      </div>

      <div className="flex">
        <div className="relative w-[40%]">
          <img
            src={require("../../../Assets/hero-section/h4.png")}
            alt="h4"
            className="w-full"
          />
          <div className="absolute -top-14 -right-32 rotate-[20deg] bg-black rounded-full w-[180px] h-28 p-2 flex items-center justify-center col-span-1 arrow2">
            <img
              src={require("../../../Assets/hero-section/hand.png")}
              alt="hand emoji"
              className="-rotate-[19deg] w-20"
            />
          </div>
        </div>
        <div className="bg-[#E0FF22] rounded-full w-[30%] flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/code.svg").default}
            alt="coder"
          />
        </div>

        <div className="bg-[#F1F4FF] rounded-full w-[30%] flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/crown.svg").default}
            alt="crown"
          />
        </div>
      </div>
    </div>
  );
}
