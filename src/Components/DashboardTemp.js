/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../Api";
import {
  BellIcon,
  DarkModeIcon,
  ForwardArrow,
  LightModeIcon,
  MenuIcon,
  ProfileIcon,
} from "./Icons";
import blurCircle from "../Assets/blurCircle.svg";
import { ThemeContext } from "../Contexts/ThemeContext";
export default function DashboardTemp({
  children,
  type = "buissness",
  Menus = [],
}) {
  const route = useLocation().pathname.split("/").pop();
  const [newindex, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);

  const { theme, changeTheme } = useContext(ThemeContext);

  console.log(theme);

  useEffect(() => {
    if (type === "buissness") {
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .get("/one")
            .then((res) => {
              // setData(res.data.buissness);
            })
            .catch((err) => {
              if (err.request.status) {
                return toast.error(err.response.data.message);
              }
              return toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    Menus.forEach((Menu, index) => {
      if (Menu.route === route) {
        setIndex(index);
      }
    });
  }, [route]);

  return (
    <div
      className={`flex flex-row h-screen w-full p-4 transition-all ease-out
        ${theme ? "bg-primBlack" : "bg-white"} 
      `}
    >
      <div
        className={`
          h-full p-4 duration-500 xl:relative absolute z-10 rounded-xl
          ${open ? "md:w-52 w-52" : "w-[4.8rem]"}
          ${isOpen && "md:block hidden"}
          ${theme ? "bg-secBlack" : "bg-primWhite"}
        `}
      >
        <ForwardArrow
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-2 top-20 bg-white border-2 rounded-full duration-500 text-black 
            ${!open && ""}
            ${theme ? "" : ""}
          `}
        />

        <div className="h-full flex flex-col justify-between">
          <div className="overflow-hidden flex flex-col space-y-1">
            <div className="flex items-center justify-center">
              <MenuIcon
                className="md:hidden block cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>

            <Link to="/business">
              <img
                className=""
                src={require("../Assets/Logos/logo1.png")}
                alt=""
              />
            </Link>
            <div className="flex flex-col space-y-3 pt-8">
              {Menus.map((data, index) => (
                <Link
                  to={`./${data.route}`}
                  key={index}
                  className={`flex rounded-xl p-2 cursor-pointer transition-all ease-out text-sm items-center space-x-4 
                    ${
                      index === newindex
                        ? `font-medium ${theme ? "bg-oran" : "bg-white"}`
                        : "text-grey fill-grey"
                    }
                    ${theme ? "" : ""}

              `}
                >
                  {data.icon}
                  {open && (
                    <span className="origin-left duration-200 text-[16px]">
                      {data.title}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`py-1 text-center rounded-full
            ${theme ? "bg-gray-600 text-zinc-300 " : "text-black bg-secWhite"}
          `}
          >
            ? Help & support
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={
          !isOpen && "md:hidden block h-[98%] w-[97%] bg-black/20 absolute"
        }
      ></div>

      {/* Right Side */}

      <div className="relative w-full pl-4 pr-1 flex flex-col items-center ">
        <nav
          className={`w-full flex justify-between items-center rounded-md border-1 px-4 sm:px-6 py-3 z-[2]
            ${theme ? "text-white " : "text-black"}
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <MenuIcon
              className="md:hidden block cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />

            <div className="flex flex-col items-center capitalize">
              <p className="font-black text-lg xs:text-xl sm:text-3xl">
                {route}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 xs:gap-5">
            <div className="flex items-center justify-center">
              {theme ? (
                <button onClick={() => changeTheme(false)}>
                  <LightModeIcon className="w-7" />
                </button>
              ) : (
                <button onClick={() => changeTheme(true)}>
                  <DarkModeIcon className="w-7" />
                </button>
              )}
            </div>
            <Link to="./settings">
              <ProfileIcon />
            </Link>
            <BellIcon className="xs:flex hidden" />
          </div>
        </nav>
        <div
          className="mt-3 w-full overflow-auto
            scroll z-[2]"
        >
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center absolute top-0 right-0">
        <img src={blurCircle} alt="blured svg" className="w-28 h-28 " />
      </div>
      <div className="flex items-center justify-center absolute bottom-0 left-0">
        <img
          src={blurCircle}
          alt="blured svg"
          className="w-28 h-28 rotate-[180deg]"
        />
      </div>
    </div>
  );
}
