import React from "react";
import Table from "./Table";

export default function FullTable() {
  return (
    <div className="">
      <div className="flex flex-col justify-between py-2 shadow-md bg-white rounded-xl w-full md:w-[60%] container mx-auto">
        <div className="flex flex-row py-3 px-4 justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-[75%] bg-zinc-100 rounded-md outline-none py-1 px-2"
          />
          <button className="px-5 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold">
            Add data
          </button>
          <button>
            <img
              className="w-4"
              src={require("../Assets/reload.svg").default}
              alt=""
            />
          </button>
          <button>
            <img
              className="w-5"
              src={require("../Assets/more.svg").default}
              alt=""
            />
          </button>
        </div>
        <div className="overflow-auto h-[22rem] scroll">
          <Table />
        </div>
        <div className="flex flex-row justify-between px-4 py-2 font-pop text-[12px] border-t border-zinc-200">
          <div className="flex flex-row items-center space-x-1 ">
            <div>Rows per page</div>
            <div>
              <select className="bg-zinc-100 p-1 rounded-md cursor-pointer outline-none border-none">
                <option> 10 </option>
                <option> 20 </option>
                <option> 30 </option>
              </select>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex flex-row">
            <button className="hover:bg-zinc-100 rounded-full transition-all">
              <img
                className="w-8"
                src={require("../Assets/leftArr2.svg").default}
                alt=""
              />
            </button>
            <button className="hover:bg-zinc-100 rounded-full transition-all">
              <img
                className="w-8"
                src={require("../Assets/rightArr2.svg").default}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
