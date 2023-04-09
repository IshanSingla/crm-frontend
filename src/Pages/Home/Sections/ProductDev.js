import React from "react";
import HeroImage from "../../../Assets/Hero image.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Config/firebase";

export default function ProductDev() {
  const navigator = useNavigate();
  return (
    <section className="relative py-20 px-10 min-h-screen flex flex-col space-y-20 items-center justify-center overflow-hidden">
      <div className="text-center flex flex-col justify-center items-center space-y-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#7E808F] font-bold text-5xl">
          End-to-end product tracking
        </h1>
        <p className="w-[60%] text-grey3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          repudiandae distinctio dolorum perferendis iure non in natus.
          Accusantium atque sequi voluptates
        </p>
        <div className="flex gap-2  font-semibold text-white text-lg">
          <button
            onClick={() => {
              navigator(auth.currentUser ? "/business" : "/auth/login");
            }}
            className="rounded-full py-3 bg-oranGrad1 hover:bg-oranGrad2 transition-all ease-linear w-44"
          >
            Get a beta demo
          </button>
          <button
            onClick={() => {
              navigator("/commingSoon");
            }}
            className="rounded-full w-44 py-3 border border-zinc-700  transition-all"
          >
            View pricing
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="">
        <img src={HeroImage} alt="" className="w-full" />
      </div>

      <div></div>
    </section>
  );
}
