import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logoFull.png";
import { ArrowIcons } from "./Icons";
import { auth } from "../Config/firebase";

export default function Navbar({ className }) {
  return (
    <section className={`font-inter ${className}`}>
      <nav className="flex w-[97%] sm:w-[90%] mx-auto justify-between items-center leading-7">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt=""
            className="xs:h-[6.438rem] xs:w-[14.25rem] w-[8rem] h-[4rem] sm:mb-2"
          />
          <ArrowIcons />
          <h1 className=" text-white ml-2 font-semibold sm:text-md text-[15px] tracking-widest">
            CRM SERVICES
          </h1>
        </Link>
        <div className="xl:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-10 h-10"
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
            <h1 className="text-white font-medium tracking-widest">About</h1>
          </Link>
          <Link>
            <h1 className="text-white font-medium tracking-widest">
              Contact Us
            </h1>
          </Link>
          {auth.currentUser ? (
            <button
              className="rounded-xl tracking-widest p-2 px-3 text-center bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] text-black border-none"
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="rounded-xl tracking-widest p-2 px-3 text-center bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] text-black border-none">
                Login/Signup
              </button>
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
}
