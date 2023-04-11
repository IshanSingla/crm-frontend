import React from "react";
import { RightArrow3 } from "../../../Components/Icons";
import { Link } from "react-router-dom";
import Cards2 from "../Components/Cards2";

export default function Works() {
  return (
    <section
      id="works"
      className="bg-secBlue relative py-20 px-5 md:px-16 min-h-screen flex flex-col space-y-10 items-center justify-center rounded-md border border-grey2 overflow-hidden"
    >
      <div className="text-center flex flex-col justify-center items-center space-y-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#7E808F] font-bold text-5xl">
          How it Works
        </h1>
      </div>

      {/* Cards */}
      <div className="flex gap-10 flex-wrap">
        <Cards2 />
      </div>

      <div>
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-semibold"> Learn more </span>
          <RightArrow3 className="fill-grey" />
        </Link>
      </div>

      {/* Circles */}
      <div className="absolute w-[151px] h-[151px] left-0 top-0 bg-[#FF5E00] blur-[156px]"></div>
      <div className="absolute w-[140px] h-[132px] right-10 bottom-10 bg-[#FEA900] blur-[156px]"></div>
    </section>
  );
}
