import React from "react";
import mainlogo from "../assets/logoFull 3.svg";
// import center from "../assets/logo10.svg"

export default function AuthTemp({ children }) {
  return (
    <section className="bg-[black] h-screen overflow-x-hidden overflow-y-hidden">
      <nav>
        <div className="flex max-w-[100%] w-full lg:w-[90%] px-2 lg:p-5 mx-auto justify-between items-center">
          <div>
            <img src={mainlogo} alt="" />
          </div>
          <div className="block md:hidden items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="hidden md:flex items-center gap-10 justify-between">
            <h1 className="font-extrabold relative text-sm lg:text-base text-white">
              Sign In
            </h1>
            <div className="absolute w-[3rem] top-[3.5rem] lg:top-20 bg-[#FEB95A] h-1 rounded-lg"></div>
            <h1 className="font-extrabold text-sm lg:text-base text-white">
              Sign Up{" "}
            </h1>
          </div>
        </div>
      </nav>

      <div className="h-full w-full">{children}</div>
    </section>
  );
}
