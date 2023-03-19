import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logoFull.png";
import { ArrowIcons } from "./Icons";
import { auth } from "../Config/firebase";

export default function Navbar({ className }) {
  return (
    <section className={`font-inter ${className}`}>
      <nav className="w-[97%] sm:w-[90%] mx-auto justify-between items-center leading-7 p-4">
        <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center justify-center">
          <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="vollmx"
            className="xs:h-auto xs:w-[8rem] sm:w-[12rem] w-[8rem] h-auto sm:mb-2"
          />
         <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      className="w-6 h-6 s:flex hidden"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
          <h1 className=" text-white ml-2 font-semibold s:flex hidden sm:text-md text-[15px] tracking-widest">
            CRM SERVICES
          </h1>
          </div>
        </Link>
        <div className="xl:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        
        </div>
        <div className="xl:flex hidden justify-between gap-10 text-[16px] items-center">
          <Link>
            <h1 className="text-white font-semibold tracking-widest">About</h1>
          </Link>
          <Link>
            <h1 className="text-white  font-semibold tracking-widest">
              Contact Us
            </h1>
          </Link>
          {auth.currentUser ? (
            <button
              className="rounded-lg tracking-widest p-2 px-3 text-center bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] text-black border-none"
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="rounded-lg font-semibold text-xs tracking-widest p-[.8rem] text-center border bg-tranparent border-[#E67C3B] text-white">
                Login/Signup
              </button>
            </Link>
          )}
        </div>
        </div>
      </nav>
    </section>
  );
}
