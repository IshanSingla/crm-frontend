import React, { useEffect, useState } from "react";
import logo from "../../Assets/logoFull 3.svg";

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
import { auth } from "../../Config/firebase";

export default function Business() {
  const [isDark, setDark] = useState(true);
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = () => {
    if (name) {
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .post("/create", {
              buissnessName: name,
              buissnessGstNo: "123456",
            })
            .then(() => {
              setName("");
              toast.success("Created Successfully");
              setUpdater(!updater);
              setIsShow(false);
            })
            .catch((err) => {
              if (err.response) {
                return toast.error(err.response.data.message);
              }
              console.log(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      alert("Field is empty!");
    }
  };

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
  }, [updater]);

  return (
    <section
      className={`${
        isDark
          ? "bg-gradient-to-tr from-[#000] to-[#011E4C]"
          : "bg-gradient-to-tr from-[#FF9400] to-[#FFCB84]"

      } w-screen min-h-screen bg-no-repeat m-0 p-0`}

    >
      <header className="w-full flex items-center justify-center ">
      <nav className="flex max-w-[90%] w-full mx-auto justify-between items-center p-1 z-[2]">
        <div className="flex items-center justify-between w-full z-[2]">
          <div className="flex items-center justify-center">
            {" "}
            <img
              src={logo}
              alt="logo"
              className="xs:h-auto w-[6rem] sm:w-[8rem] h-auto"
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
            isDark ? "bg-[#001A43] text-white border-zinc-500" : "bg-white text-black border-gray-200"
          }bg-[#001A43] w-full md:w-[16rem]  flex flex-row max-w-full h-[10rem] rounded-lg relative border shadow-lg`}
          onClick={() => setIsShow(true)}
        >
          <h1 className={`${ isDark ? "text-white" : "text-black"} ml-3 mt-2  font-bold p-1 text-lg`}>
            ADD
          </h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={add}
            alt=""
            className={`${
              isDark ? "visible" : "invisible"
            } `}
          />
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={adddarrk}
            alt=""
            className={`${
              isDark ? "invisible" : "visible"
            } `}
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
                  isDark={isDark}
                />
              );
            })
          : ""}
        {isShow && (
          <CreateDg
            setIsShow={setIsShow}
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        )}
      </div>
      </div>
      <div className={`${isDark ? "inline" : "hidden"} flex items-center justify-center bottom-4 left-0 fixed `}>
        <img src={pink} alt="pink" className="blur-md" />
      </div>
      <div className={`${isDark ? "inline" : "hidden"} flex items-center justify-center bottom-4 left-0 fixed `}>
        <img src={purple} alt="purple" className="blur-md"/>
      </div>
      <div className="flex items-center right-0 bottom-4  justify-center fixed ">
        <img src={blue} alt="blue" className="blur-md"/>
      </div>
      <div className="flex items-center left-0 bottom-0 top-0 mix-blend-overlay justify-center fixed ">
        <img src={lines} alt="lines" className="h-full" />
      </div>
      </div>
      
    </section>
  );
}
