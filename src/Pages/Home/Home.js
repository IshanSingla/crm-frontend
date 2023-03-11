import React from "react";
import Footer from "../../Components/Footer";
import { ArrowIcons } from "../../Components/Icons";
import Navbar from "../../Components/Navbar";
import one from "../../Assets/1.png";
import two from "../../Assets/2.png";
import three from "../../Assets/3.png";
import four from "../../Assets/4.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] overflow-x-hidden">
      <Navbar />
      <section className="w-screen h-full md:h-screen">
        <div className="flex items-center justify-center  relative w-screen h-full sm:p-6">
          <div className="flex items-center justify-center w-full h-full mt-20 sm:mt-20 sm:p-4  md:mt-0">
            <div className="flex items-center flex-col md:flex-row justify-center gap-4 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
              <div className="flex items-start justify-center gap-6 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                <div className="flex items-center justify-center gap-4 h-full">
                  <h1 className="text-3xl lg:text-4xl xl:text-[5rem] font-extrabold text-white xl:leading-[5.5rem]">
                    Remarkable Product as a Service
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%]">
                  <p className="font-normal text-white leading-normal md:leading-6 text-xs sm:text-sm md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2 w-full xl:w-[50%] h-full">
                  <Link to="/business"
                    className={`flex items-center h-full justify-center bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] p-2 sm:p-4 rounded-3xl cursor-pointer`}
                  >
                    <p
                      className={`lg:text-[1.5rem] text-white font-medium whitespace-nowrap text-xl`}
                    >
                      Subscribe Now
                    </p>
                    <ArrowIcons />
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
      <section className="max-w-[90%] w-full mx-auto mb-[20rem] mt-10">
        <h1 className="text-white font-bold text-[5rem] leading-[6.5rem]">
          Why Us?
        </h1>
        <p className="text-[1.7rem] font-normal leading-9 text-white opacity-40 mt-4">
          Best Accounting software for your business
        </p>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-20 my-6 justify-between ">
          {[
            {
              para: "Customized Software for Your Retail Business",
            },
            {
              para: "Instant and Effortless Grocery Store Billing Service",
            },
            {
              para: "Invoicing is a breeze with Vollmx Billing Software.",
            },
          ].map((data, index) => (
            <div
              key={`CustomDivs${index}`}
              className="bg-gradient-to-r from-[#E67C3B] to-[#F3CF6D] py-9 px-6 lg:h-[25rem] relative rounded-3xl"
            >
              <p className="text-white font-bold leading-[3.5rem] text-[2rem]">
                {data.para}
              </p>
              <div className="hidden md:flex absolute right-10 bottom-10 lg:h-[4.5rem] lg:w-[4.5rem] h-[3rem] w-[3rem] border-2 rounded-full border-black text-4xl  items-center justify-center">
                <div>+</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
