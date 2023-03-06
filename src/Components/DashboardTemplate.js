import React from "react";
import { Link } from "react-router-dom";

export default function DashboardTemplate({ children, route }) {
  const newid = route.split("/");
  const name = newid[0];
  const transid = newid[1];
  const id = localStorage.getItem("buissnessId");
  return (
    <div className="flex flex-row bg-[#000C2A] w-full h-screen p-2 over">
      <div className="w-[20%] py-8">
        <Link
          to="../"
          className="flex space-x-2 p-2 px-6 text-white border-y border-blue-100 hover:bg-slate-800"
        >
          All Business
        </Link>
        <div className="flex justify-between space-x-2 p-2 text-white border-b border-blue-100">
          <div className="flex flex-row space-x-3">
            <img
              src={require("../Assets/chart.svg").default}
              className="w-7"
              alt=""
            />
            <p> Overview </p>
          </div>
          <Link to={"./setting"}>
            <img
              src={require("../Assets/setting.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col bg-[#163172] text-blue-100 text-md mt-4 m-3 rounded-2xl">
          <Link
            to={"./dashboard"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-t-2xl"
          >
            <p>Dashboard</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
          <Link
            to={"./inventory"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 "
          >
            <p>Inventory</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
          <Link
            to={"./expense"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-b-2xl"
          >
            <p>Expenses</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="relative bg-[#F6F7F9] w-[84%] rounded-3xl p-2 overflow-hidden">
        <div className=" flex flex-row items-center space-x-3 justify-end">
          <img
            src={require("../Assets/bell.svg").default}
            className="w-6 "
            alt=""
          />
          <img
            src={require("../Assets/user.svg").default}
            className="w-8 "
            alt=""
          />
        </div>
        <div className="p-4 -mt-9">{id}</div>
        <div className="ml-16 mt-5 h-fit box-border mb-6">
          <div className="text-4xl font-normal capitalize mb-3">
            <Link to="../">{name}</Link>
            {transid ? ` / ${transid}` : ""}
          </div>
          <hr className="w-[90%] bg-black h-[2px]" />
        </div>
        <div className=" overflow-auto h-[90%]">{children}</div>
      </div>
    </div>
  );
}
