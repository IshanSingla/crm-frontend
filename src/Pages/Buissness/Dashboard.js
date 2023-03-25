import { ThemeContext } from "../../Contexts/ThemeContext";
import React, { useContext } from "react";
import Inventry from "../../Components/Charts/Inventry";
import SummaryCard from "./Components/SummaryCard";
import { More2 } from "../../Components/Icons";
import CostChart from "../../Components/Charts/CostChart";
import QuantityChart from "../../Components/Charts/QuantityChart";
import ExpenseChart from "../../Components/Charts/ExpenseChart";

export default function Dashboard() {
  const cardDetails = [
    { icon: 1, title: "$5K", subHead: "Total Sales" },
    { icon: 2, title: "500", subHead: "Total Sales" },
    { icon: 3, title: "9K", subHead: "Inventory" },
    { icon: 4, title: "12", subHead: "Employees" },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full  pl- pr-1 flex flex-col gap-3">
      {/* Phase 1 */}
      {/* <div className="flex flex-col md:flex-row gap-3"> */}
      {/* total sales */}
      <div className="grid grid-cols-4 xl:grid-rows-[repeat(3,minmax(28.4%,_1fr))] overflow-auto grid-flow-row gap-4">
        <div
          className={`rounded-xl p-4 col-span-3 
            ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        >
          <div className="flex flex-col space-y-5">
            <div>
              <h1 className="text-2xl font-semibold"> Today's Sales </h1>
              <p className="text-[#B6A3A3]"> Sales Summary</p>
            </div>
            <div className="flex gap-5 overflow-auto">
              {cardDetails.map((val) => {
                return <SummaryCard key={val.icon} model={val} theme={theme} />;
              })}
            </div>
          </div>
        </div>

        {/* chart */}
        <div
          className={`rounded-xl p-4 flex flex-col justify-between items-center col-span-1
          ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
        `}
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold"> 2.568 </p>
            <h1 className="text-2xl font-semibold"> SALES </h1>
          </div>
          <Inventry />
        </div>
        {/* </div> */}

        {/* Phase 2 */}
        {/* <div className="flex flex-col md:flex-row gap-3"> */}
        {/* total margin */}
        <div
          className={`rounded-xl p-4 flex flex-col gap-6 col-span-3
            ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold"> Total Margin </p>
            <div className="flex items-center space-x-5">
              <select
                name=""
                id=""
                className="bg-transparent border border-zinc-600 py-1 px-2 rounded-md outline-none cursor-pointer text-[13px]"
              >
                <option value="products">Products</option>
              </select>
              <button>
                <More2 />
              </button>
            </div>
          </div>
          <div className="h-60 ">
            <CostChart />
          </div>
        </div>

        {/* Quantity */}
        <div
          className={`rounded-xl p-4 flex flex-col gap-6
              ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold"> Quantity </p>
            <div className="flex items-center space-x-5">
              <select
                name=""
                id=""
                className="bg-transparent border border-zinc-600 py-1 px-2 rounded-md outline-none cursor-pointer text-[13px]"
              >
                <option value="products">Categories</option>
              </select>
              <button>
                <More2 className={`${theme ? "text-white" : "text-black"}`} />
              </button>
            </div>
          </div>
          <div className="h-60">
            <QuantityChart />
          </div>
        </div>
        {/* </div> */}

        {/* Phase 3 */}
        {/* <div className="flex flex-col md:flex-row gap-3"> */}
        {/* Expense 1 */}
        <div
          className={`rounded-xl p-4 flex flex-col gap-6
              ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold"> Quantity </p>
            <div className="flex items-center space-x-5">
              <select
                name=""
                id=""
                className="bg-transparent border border-zinc-600 py-1 px-2 rounded-md outline-none cursor-pointer text-[13px]"
              >
                <option value="products">Categories</option>
              </select>
              <button>
                <More2 className={`${theme ? "text-white" : "text-black"}`} />
              </button>
            </div>
          </div>
          <div className="h-60">
            <ExpenseChart />
          </div>
        </div>

        {/* Expense 2 */}
        <div
          className={`w-full rounded-xl p-4  flex flex-col gap-6 col-span-3
            ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-xl font-semibold"> Total Margin </p>
            <div className="flex items-center space-x-5">
              <select
                name=""
                id=""
                className="bg-transparent border border-zinc-600 py-1 px-2 rounded-md outline-none cursor-pointer text-[13px]"
              >
                <option value="products">Products</option>
              </select>
              <button>
                <More2 />
              </button>
            </div>
          </div>
          <div className="h-60 ">
            <CostChart />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
