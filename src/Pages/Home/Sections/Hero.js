import React from "react";
import Gallery from "../Components/Gallery";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Config/firebase";

export default function Hero() {
  const navigator = useNavigate();
  return (
    <section className="w-full z-0 min-h-[90vh] lg:min-h-[90vh]  flex flex-col justify-center xl:flex-row h-full items-center">
      {/* Left */}
      <div className="flex-1 py-10 xl:py-0">
        <div className="flex-1 flex flex-col items-center md:items-start gap-10">
          <div>
            <h1 className="text-5xl xs:text-6xl text-center md:text-start md:text-7xl font-black md:leading-[80px] text-white">
              <span>Remarkable </span>
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
          </div>

          <p className="text-md md:text-lg text-gray-600 leading-[30px] capitalize">
            Use this section to describe your company and the <br />
            products you offer. You could share your company’s <br />
            story and details about why you are in business.
          </p>

          <div className="flex flex-col md:flex-row gap-5 md:gap-2 md:w-[80%] font-bold text-white text-xl">
            <button
              onClick={() => {
                navigator(auth.currentUser ? "/business" : "/auth/login");
              }}
              className="rounded-full py-3 bg-oranGrad1 hover:bg-oranGrad2 transition-all ease-linear w-64 md:w-48"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                navigator("/pricing");
              }}
              className="rounded-full w-64 md:w-48 py-3 border border-zinc-700  transition-all"
            >
              View pricing
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-[max-content] xl:w-[40%] py-14">
        <div className="relative flex justify-center xl:justify-end w-full">
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
