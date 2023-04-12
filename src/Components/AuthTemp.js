import React from "react";
import mainlogo from "../Assets/logoFull 3.svg";
import { Link, useLocation } from "react-router-dom";
// import center from "../assets/logo10.svg"

export default function AuthTemp({ children }) {
  const route = useLocation().pathname.split("/").pop();
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
            <div className="flex flex-col items-center space-y-1">
              <Link
                to="./login"
                className="font-extrabold relative text-sm lg:text-base text-white"
              >
                Sign In
              </Link>
              {route === "login" && (
                <div className="bg-oran w-full h-1 rounded-xl"></div>
              )}
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Link
                to="./signup"
                className="font-extrabold relative text-sm lg:text-base text-white"
              >
                Sign Up
              </Link>
              {route === "signup" && (
                <div className="bg-oran w-full h-1 rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="h-full w-full">{children}</div>
    </section>
  );
}
