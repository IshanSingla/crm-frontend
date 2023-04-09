import React from "react";

export default function Goal() {
  return (
    <section className="bg-secBlue relative py-24 2xl:py-28 flex items-center justify-center rounded-md border border-grey2 overflow-hidden">
      <p className="text-3xl font-bold text-white w-[55%] text-center">
        Our goal is to give everyone the opportunity to take advantage of the
        most cutting-edge technology on the market.
      </p>
      {/* <img
        src={require("../../../Assets/BGShapes/home_goal_1.svg").default}
        alt=""
        className="absolute left-0 bottom-0 border"
      /> */}
      <div className="absolute w-[151px] h-[151px] left-0 bottom-0 bg-[#FF5E00] blur-[156px] "></div>
      <div className="absolute w-[151px] h-[151px] right-0 bottom-0 bg-[#FF5E00] blur-[156px] "></div>
    </section>
  );
}
