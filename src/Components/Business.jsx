import React, { useState } from "react";
import logo from "../assets/logoFull 3.svg";
import add from "../assets/Vector.svg";
import addnote from "../assets/add.svg";
import addnotedark from "../assets/addnotedark.svg";
import adddarrk from "../assets/adddark.svg";
import deleteb from "../assets/delete.svg";
import deletedark from "../assets/deletedark.svg";
export default function Business() {
  const [isDark, setDark] = useState(true);
  return (
    <section
      className={`${
        isDark
          ? "bg-gradient-to-tr from-[#000] to-[#011E4C]"
          : "bg-gradient-to-tr from-[#FF9400] to-[#FFCB84]"
      } w-screen h-screen box-border m-0 p-0 fixed overflow-x-hidden bg-no-repeat `}
    >
      <nav className="flex max-w-[90%] w-full mx-auto justify-between items-center">
        <div>
          {" "}
          <img src={logo} alt="" />
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
        <div className="hidden md:flex items-center gap-4 justify-between">
          <h1 className="font-extrabold text-base text-white leading-5 cursor-pointer">
            About
          </h1>
          <h1 className="font-extrabold text-base leading-5  text-white cursor-pointer">
            Contact Us
          </h1>
          <button className="bg-white rounded-lg border-none py-3 px-6 flex justify-center items-center text-[#F2383A] font-semibold text-xs leading-3">
            LOGOUT
          </button>
        </div>
      </nav>
      <h1 className="text-white my-14 sm:text-left text-center mx-auto sm:w-[70%] w-full font-extrabold text-[2rem] sm:text-[3.4rem] leading-[4.3rem]">
        BUSINESS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 overflow-y-auto gap-6 md:w-[60%] w-[90%] mx-auto">
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          } w-full md:w-[16rem] place-self-center max-w-full h-[10rem] rounded-xl relative`}
        >
          <h1 className="ml-3 mt-3  font-extrabold text-sm leading-3">ADD</h1>
          <img
            src={add}
            alt=""
            className={`${
              isDark ? "visible" : "invisible"
            } absolute md:left-[42%] left-[47%] top-[38%] `}
          />
          <img
            src={adddarrk}
            alt=""
            className={`${
              isDark ? "invisible" : "visible"
            } absolute md:left-[42%] left-[47%] top-[38%] `}
          />
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
        >
          <div className="flex flex-col justify-start ml-3 mt-3 items-start">
            <h1
              className={`${
                isDark ? "text-white" : "text-black"
              } font-extrabold text-base leading-6`}
            >
              ISHAN
            </h1>
            <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
              2023-03-13T16:36:35.240Z
            </h2>
          </div>
          <div className="flex gap-1 place-self-end justify-end absolute right-2">
            <div>
              <img
                src={addnote}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={addnotedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
            <div>
              <img
                src={deleteb}
                alt=""
                className={`${isDark ? "inline" : "hidden"}`}
              />
              <img
                src={deletedark}
                alt=""
                className={`${isDark ? "hidden" : "inline"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
