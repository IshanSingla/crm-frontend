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
      } w-screen h-full box-border m-0 p-0 fixed overflow-x-hidden overflow-y-auto bg-no-repeat `}
    >
      <nav className="flex max-w-[90%] w-full mx-auto justify-between items-center p-1">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            {" "}
            <img
              src={logo}
              alt=""
              className="xs:h-auto w-[6rem] sm:w-[8rem] h-auto sm:mb-2"
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
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <h1 className="text-white my-4 s:my-6 sm:my-8 md:my-12 lg:my-14 sm:text-left text-center mx-auto sm:w-[75%] w-full font-extrabold text-[2rem] sm:text-[3rem] leading-[4.3rem]">
          BUSINESS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:w-[85%] lg:w-[60%] w-[90%] mx-auto my-auto pb-4">
        <button
          className={`${
            isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
          }bg-[#001A43] w-full md:w-[16rem]  flex flex-row max-w-full h-[10rem] rounded-xl relative`}
          onClick={() => setIsShow(true)}
        >
          <h1 className="ml-3 mt-3  font-extrabold leading-3 h-[10rem] text-xl text-white">
            ADD
          </h1>
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
        {isShow && (
          <CreateDg
            setIsShow={setIsShow}
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        )}
      </div>
      <div className="flex items-center justify-center bottom-4 left-0 absolute z-[-1]">
        <img src={pink} alt="" />
      </div>
      <div className="flex items-center justify-center bottom-0 left-0 absolute z-[-1]">
        <img src={purple} alt="" />
      </div>
      <div className="flex items-center right-0 bottom-4 justify-center absolute z-[-1]">
        <img src={blue} alt="" />
      </div>
      <div className="flex items-center left-0 bottom-4 bg-overlay mix-blend-overlay justify-center absolute z-[-1]">
        <img src={lines} alt="" className="mix-blend-overlay" />
      </div>
    </section>
  );
}
