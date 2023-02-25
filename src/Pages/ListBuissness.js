import React from "react";
import { BsBellFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

export default function ListBuissness() {
  const noOfPro = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen w-screen">
      <div className="h-[5vh] bg-[#1a73e8] flex justify-between items-center px-[1%]">
        <div className="text-white">Logo</div>
        <div className="flex items-center gap-[15px]">
          <p className="text-white">Go to Docs</p>
          <BsBellFill size={20} />
          <RxAvatar className=" text-white" size={30} />
        </div>
      </div>
      <div className="h-1/4 bg-[#1a73e8]"></div>
      <div className="w-screen h-full md:h-screen flex justify-center mt-[-10%]">
        <div className="md:w-5/6 w-full p-4 flex items-center justify-center flex-col">
          <h3 className="text-white md:ml-[5%] mb-[5%] text-start">Your Buissnesses</h3>
          <div className="md:h-screen h-full justify-between">
            <div className="flex flex-wrap gap-6 items-center justify-center p-4 w-screen">
              <div className="w-full md:w-[40%] h-[30%] bg-white shadow-[0_0_5px_rgba(0,0,0,0.05),2px_2px_5px_rgba(0,0,0,0.2)] rounded-[5px] flex flex-col justify-center items-center p-4">
                <div className="flex items-center justify-center p-3 flex-col">
                <div className="text-[20px] text-[#1a73e8] h-full">+</div>
                <div className=" text-[#1a73e8] text-[15px] text-[bold]">
                  Add project
                </div>
                </div>
              </div>

              {noOfPro.map((i) => {
                return (
                  <div className="w-full  md:w-[40%] h-[30%] bg-white shadow-[0_0_5px_rgba(0,0,0,0.05),2px_2px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-4 flex flex-col justify-between items-center">
                    <div className="flex items-center justify-center p-4 flex-col">
                      <h1>sync light</h1>
                      <p className="text-[gray] text-sm">sync light</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}