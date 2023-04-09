import React from "react";
import Gallery from "../Components/Gallery";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Config/firebase";

export default function Hero() {
  const navigator = useNavigate();
  return (
    <section className="w-full bg  min-h-[90vh] lg:min-h-[90vh]  flex flex-col xl:flex-row h-full items-center">
      {/* Left */}
      <div className="flex-1 py-10 xl:py-0">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-7xl font-black leading-[80px] text-white">
            Remarkable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oranGrad1 to-oranGrad2">
              Product
            </span>
            <br />
            As A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oranGrad1 to-oranGrad2">
              Service{" "}
            </span>
            For
            <br />
            Business
          </h1>

          <p className="text-lg text-gray-600 leading-[30px] capitalize">
            Use this section to describe your company and the <br />
            products you offer. You could share your company’s <br />
            story and details about why you are in business.
          </p>

          <div className="flex gap-2 w-[80%] font-bold text-white text-xl">
            <button
              onClick={() => {
                navigator(auth.currentUser ? "/business" : "/auth/login");
              }}
              className="rounded-full py-3 bg-oranGrad1 hover:bg-oranGrad2 transition-all ease-linear w-44"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                navigator("/pricing");
              }}
              className="rounded-full w-44 py-3 border border-zinc-700  transition-all"
            >
              View pricing
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-[40%] flex xl:justify-end py-14">
        <div className="relative flex xl:justify-end w-full">
          <div className="absolute -left-32 top-[18%]">
            <img
              src={require("../../../Assets/hero-section/linebg.svg").default}
              alt="h1"
              className="w-[50rem]"
            />
          </div>
          <Gallery />
        </div>
      </div>
    </section>
  );
}
