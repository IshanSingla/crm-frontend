import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/logoFull 3.svg";
import { auth } from "../Config/firebase";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Cross, Hamburger } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ className }) {
  return (
    <header className={`font-inter ${className}`}>
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
              <h1 className="text-white font-semibold tracking-widest">
                About
              </h1>
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
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Navbar2() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Software Advice", link: "#works" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact Us", link: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const route = useLocation().pathname.split("/").pop();

  const navigate = useNavigate();
  const handleSignOut = () => {
    auth.currentUser ? auth.signOut() : navigate("/auth/login");
  };

  return (
    <header className=" flex justify-between items-center xs:px-10 md:px-5 xl:px-16 border-b border-[#20222F]">
      <Link to="/">
        <img className="w-40" src={logo} alt="" />
      </Link>
      <div className="font-bold hidden md:flex gap-6">
        {links.map((val, key) =>
          val.link === "#works" ? (
            <AnchorLink key={key} href={val.link} className={"text-[#8F9BB7]"}>
              {val.name}
            </AnchorLink>
          ) : (
            <Link
              key={key}
              to={val.link}
              className={`${
                route === val.link.split("/").pop()
                  ? "text-white"
                  : "text-[#8F9BB7]"
              }`}
            >
              {val.name}
            </Link>
          )
        )}
      </div>
      <button
        onClick={handleSignOut}
        className="hidden md:block bg-gradient-to-r from-[#FF9A61] to-[#FFC654] hover:bg-red-600 transition-all ease-linear px-5 py-1 rounded-full text-white"
      >
        {auth.currentUser ? "Logout" : "Login"}
      </button>

      {/* Hamburger */}
      <div className="md:hidden block">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)}>
            <Hamburger stroke="white" />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(false)}
            className="z-[999] absolute right-8 top-6"
          >
            <Cross className="w-11 h-11" stroke="white" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed z-50 h-screen w-screen text-white bg-black bg-opacity-[96%] top-0 left-0 bottom-0 right-0 overflow-hidden md:hidden"
          >
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div className="font-bold text-xl flex flex-col items-center gap-4">
                {links.map((val, key) =>
                  val.link === "#works" ? (
                    <AnchorLink
                      key={key}
                      href={val.link}
                      className={"text-[#8F9BB7]"}
                    >
                      {val.name}
                    </AnchorLink>
                  ) : (
                    <Link
                      key={key}
                      to={val.link}
                      className={`${
                        route === val.link.split("/").pop()
                          ? "text-white underline underline-offset-4"
                          : "text-[#8F9BB7]"
                      }`}
                    >
                      {val.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Navbar3() {
  return (
    <header className="w-full flex items-center justify-center ">
      <nav className="flex max-w-[90%] w-full mx-auto justify-between items-center p-1 z-[2]">
        <div className="flex items-center justify-between w-full z-[2]">
          <div className="flex items-center justify-center drop-shadow-2xl">
            <img
              src={logo}
              alt="logo"
              className="xs:h-auto w-[6rem] sm:w-[8rem] h-auto drop-shadow-xl"
            />
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
          <div className="hidden md:flex items-center gap-4 justify-between p-2">
            <div className="flex items-center justify-center">
              <h1 className="font-black text-sm text-white  cursor-pointer">
                About
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="font-black text-sm  text-white cursor-pointer">
                Contact Us
              </h1>
            </div>
            <div className="flex items-center justify-center border-white">
              <button
                onClick={() => auth.signOut()}
                className="bg-white rounded-lg  px-4 py-2 flex justify-center items-center text-red-500 font-bold text-xs"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
