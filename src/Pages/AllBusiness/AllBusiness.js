import React, { useContext, useEffect, useState } from "react";

import pink from "../../Assets/pink.svg";
import blue from "../../Assets/blue.svg";
import purple from "../../Assets/purple.svg";
import lines from "../../Assets/lines.svg";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import BusinessCard from "./Components/BusinessCard";
import CreateDg from "./Components/CreateDg";
import adddarrk from "../../Assets/adddark.svg";
import add from "../../Assets/Vector.svg";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Navbar2 } from "../../Components/Navbar";

export default function Business() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get("/all", {})
          .then((res) => {
            setData(res.data.buissness);
          })
          .catch((err) => {
            if (err.response) {
              return toast.error(err.response.data.message);
            }
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [updater, isShow]);

  return (
    <section
      className={`${
        theme
          ? "bg-gradient-to-tr from-[#000] to-[#011E4C]"
          : "bg-gradient-to-tr from-[#FF9400] to-[#FFCB84]"
      } w-screen min-h-screen bg-no-repeat m-0 p-0`}
    >
      
      <Navbar2/>
      <div className="w-screen flex items-center justify-center z-[2]">
        <div className="max-w-[90rem] w-full md:w-auto flex items-start justify-center flex-col py-4">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-white mb-6 mt-2 s:mt-4 sm:mt-6 md:mt-8 lg:mt-10 sm:text-left px-4 text-center  w-full font-extrabold text-[2rem] sm:text-[3rem]">
              BUSINESS
            </h1>
          </div>
          <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-6 w-full h-full p-4 z-[2]">
            <button
              className={`${
                theme
                  ? "bg-[#001A43] text-white border-zinc-500"
                  : "bg-white text-black border-gray-200"
              }bg-[#001A43] w-full md:w-[16rem]  flex flex-row max-w-full h-[10rem] rounded-lg relative border shadow-lg`}
              onClick={() => setIsShow(true)}
            >
              <h1
                className={`${
                  theme ? "text-white" : "text-black"
                } ml-3 mt-2  font-bold p-1 text-lg`}
              >
                ADD
              </h1>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center">
                <img
                  src={add}
                  alt=""
                  className={`${theme ? "visible" : "invisible"} `}
                />
              </div>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center">
                <img
                  src={adddarrk}
                  alt=""
                  className={`${theme ? "invisible" : "visible"} `}
                />
              </div>
            </button>
            {data
              ? data.map((val) => {
                  return (
                    <BusinessCard
                      updater={updater}
                      setUpdater={setUpdater}
                      key={val.id}
                      val={val}
                    />
                  );
                })
              : ""}
            {isShow && <CreateDg setIsShow={setIsShow} />}
          </div>
        </div>
        <div
          className={`${
            theme ? "inline" : "hidden"
          } flex items-center justify-center bottom-4 left-0 fixed `}
        >
          <img src={pink} alt="pink" className="blur-md" />
        </div>
        <div
          className={`${
            theme ? "inline" : "hidden"
          } flex items-center justify-center bottom-4 left-0 fixed `}
        >
          <img src={purple} alt="purple" className="blur-md" />
        </div>
        <div className="flex items-center right-0 bottom-4  justify-center fixed ">
          <img src={blue} alt="blue" className="blur-md" />
        </div>
        <div className="flex items-center left-0 bottom-0 top-0 mix-blend-overlay justify-center fixed ">
          <img src={lines} alt="lines" className="h-full" />
        </div>
      </div>
    </section>
  );
}
