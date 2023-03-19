import React from "react";
import Footer from "../../Components/Footer";
import { ForwardArrow } from "../../Components/Icons";
import Navbar from "../../Components/Navbar";
import one from "../../Assets/1.png";
import two from "../../Assets/2.png";
import three from "../../Assets/3.png";
import four from "../../Assets/4.png";
import { Link } from "react-router-dom";
import { auth } from "../../Config/firebase";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] overflow-x-hidden">
      <Navbar />
      <section className="w-screen h-full lg:h-screen ">
        <div className="flex relative w-[97%] sm:w-[90%] mx-auto justify-between items-center leading-7 p-4 h-full sm:p-6">
          <div className="flex items-center justify-center w-full h-full mt-20 sm:mt-20 sm:p-4  md:mt-0">
            <div className="flex items-center flex-col md:flex-row justify-center gap-4 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
              <div className="flex items-start justify-center gap-8 sm:w-[90%] md:w-[90%] flex-col xs:p-4 md:p-3">
              <div className="flex items-center justify-center gap-4 h-full w-full">
                  <h1 className="text-2xl xs:text-3xl s:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white w-full">
                    Remarkable Product as a Service<span className="text-[#E67C3B] text-xs s:text-base ml-2">Beta</span>
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%]">
                  <p className="font-normal text-white leading-normal md:leading-8 text-xs sm:text-sm md:text-xl">
                    Our CRM software offers a consolidated platform for handling
                    conversations, following up on leads, and automating
                    procedures in order to simplify your customer relationship
                    management. Because our CRM package is completely adaptable
                    to your company's particular requirements, you can modify it
                    to fit your own workflows and processes. You'll have all you
                    need with our CRM system to foster deeper client
                    interactions and promote company expansion.
                  </p>
                </div>
                <div className="flex items-center justify-start w-full xl:w-[50%] h-full">
                  <Link
                    to={auth.currentUser ? "/business" : "/auth/signup"}
                    className={`flex items-center gap-3 h-full justify-center bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] p-2 sm:p-3 rounded-xl cursor-pointer`}
                  >
                    <p
                      className={`lg:text-md text-white font-medium whitespace-nowrap text-xl`}
                    >
                      Connet Now
                    </p>
                    <ForwardArrow className="text-white" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center  w-3/4 md:w-1/2 p-4">
                <div className="bg-gradient-to-r from-[#D9D9D9] to-[#4a4848] absolute -right-16 rotate-45  rounded-[10rem] xl:h-[25rem] xl:w-[40rem] md:w-[35rem] md:h-[20rem]"></div>
                <div className="bg-transparent md:visible invisible relative h-full w-full">
                  <img
                    src={one}
                    className=" absolute xl:w-[14.875rem] xl:h-[17rem] h-[14rem] w-[12rem] right-[12rem] -top-[22rem]"
                    alt=""
                  />
                  <img
                    src={two}
                    className="absolute xl:w-[10.9rem] xl:h-[12.3rem] h-[10rem] w-[8rem] -right-20 -top-60"
                    alt=""
                  />
                  <img
                    src={three}
                    className="absolute xl:w-[9rem] xl:h-[10.12rem] h-[8rem] w-[7rem] right-[11rem] -top-3"
                    alt=""
                  />
                  <img
                    src={four}
                    className="absolute xl:w-[14.75rem] xl:h-[14.75rem] h-[12rem] -right-[8rem] -bottom-[16rem]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full p-4 sm:p-6 mb-[4rem]">
        <div className="flex items-center justify-center w-full h-full">
        <div className="flex items-start justify-center gap-4 h-full flex-col mt-10 w-[97%] sm:w-[90%]">
          <div className="p-2 flex items-start justify-center flex-col gap-3">
        <h1 className="text-white text-3xl s:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold ">
          Why Us?
        </h1>
        <p className="font-normal text-gray-300 text-sm sm:text-base md:text-xl md:ml-2">
          Best Accounting software for your business.
        </p>
        </div>
        <div className="flex items-center justify-center w-full">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 justify-between max-w-[85%]">
          {[
            {
              para: "Inventory Management",
            },
            {
              para: "Accounting Management",
            },
            {
              para: "Invoice Management",
            },
          ].map((data, index) => (
            <div
              key={`CustomDivs${index}`}
              className="bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] p-4 md:px-8 md:py-6 h-[25rem] w-full relative rounded-xl"
            >
              <div className="flex items-center justify-start p-2">
              <p className="text-white font-bold text-lg s:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {data.para}
              </p>
              </div>
              <div className="flex items-center absolute bottom-2 sm:bottom-4 right-2 sm:right-4 justify-end p-2">
              <div className="flex bg-white right-10 bottom-10 lg:h-[3.5rem] lg:w-[3.5rem] sm:h-[3rem] sm:w-[3rem] w-[2.5rem] h-[2.5rem] rounded-full  text-4xl  items-center justify-center">
                <div className="flex items-center justify-center h-4 w-4 text-lg rounded">▶</div>
              </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
