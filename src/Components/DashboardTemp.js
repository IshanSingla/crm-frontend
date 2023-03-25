/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../Api";
import {
  BellIcon,
  DarkModeIcon,
  LeftArrow,
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
      className={`flex flex-row gap-2 h-screen w-full md:p-3 transition-all ease-out
        ${theme ? "bg-primBlack" : "bg-white"} 
      `}
    >
      <div
        className={`
          h-full px-3 pb-2 duration-500  z-10 md:rounded-xl
          ${open ? "md:w-52 w-52" : "w-[4.5rem]"}
          ${isOpen && "md:block hidden"}
          ${theme ? "bg-secBlack" : "bg-primWhite"}
        `}
      >
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
            <div className="flex flex-col space-y-3 ">
              {Menus.map((data, index) => (
                <Link
                  to={`./${data.route}`}
                  key={index}
                  className={`flex rounded-xl p-2 cursor-pointer transition-all ease-out text-sm items-center space-x-4 
                    ${
                      theme
                        ? index === newindex
                          ? "bg-oran text-black font-medium"
                          : "text-white"
                        : index === newindex
                        ? "bg-white text-black"
                        : null
                    }

              `}
                >
                  <div>{data.icon}</div>
                  {open && (
                    <span className="origin-left duration-200 text-[16px]">
                      {data.title}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div
              className={`py-1 text-center rounded-full
                ${
                  theme
                    ? "bg-gray-600 text-zinc-300 "
                    : "text-black bg-secWhite"
                }
              `}
            >
              ? {open ? "Help & support" : ""}
            </div>
            <div className="flex justify-end">
              <LeftArrow
                onClick={() => setOpen(!open)}
                className={`cursor-pointer -right-2 top-20 duration-500 w-8 h-8 hover:scale-125
                ${!open && "rotate-180"}
                ${theme ? "fill-white" : "fill-black"}
              `}
              />
            </div>
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

      <div className="relative w-[98%] h-full flex flex-col box-border overflow-auto">
        <nav
          className={`flex justify-between items-center rounded-md border-1 md:px-2 py-3 z-[2]
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
            {/* Date */}
            {route === "dashboard" && (
              <div className="flex justify-end">
                <select
                  name=""
                  id=""
                  className={`py-2 px-3 rounded-md text-medium outline-none 
                  ${theme ? "bg-[#2E3033] text-[#D2D2D2]" : "bg-primWhite"}
                `}
                >
                  <option value="today"> Today </option>
                  <option value="30 days"> Last 30 days </option>
                  <option value="90 days"> Last 90 days </option>
                  <option value="365 days"> Last 365 days </option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            )}
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
          className="mt-3 max-w-full box-border w-full h-full overflow-auto scroll
            scroll z-[2]"
        >
          {children}
        </div>
      </div>

      {/* Circles */}
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
