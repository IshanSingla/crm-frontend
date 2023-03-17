import React, { useEffect, useState } from "react";
import Expense from "../../Components/Charts/Expense";
import Inventry from "../../Components/Charts/Inventry";
import SummaryCard from "./Components/SummaryCard";

export default function Dashboard() {
  const cardDetails = [
    { icon: 1, title: "$5K", subHead: "Total Sales" },
    { icon: 2, title: "500", subHead: "Total Sales" },
    { icon: 3, title: "9K", subHead: "Inventory" },
    { icon: 4, title: "12", subHead: "Employees" },
  ];

  const [theme, setTheme] = useState(null);
  const handleClick = () => {
    console.log("theme: ", theme);
    console.log("local: ", localStorage.getItem("isDark"));
  };

  useEffect(() => {
    let local = localStorage.getItem("isDark");
    setTheme(local);
  });

  return (
    <div className="w-full border border-black px-4 flex flex-col gap-3">
      {/* <Inventry /> */}
      {/* <Expense /> */}

      {/* Date */}
      <div className="flex justify-end">
        <button
          className={`${theme === true ? "text-white" : "text-black"}`}
          onClick={handleClick}
        >
          {" "}
          click me{" "}
        </button>
        <select
          name=""
          id=""
          className={`py-2 px-3 rounded-md text-medium outline-none 
            ${theme ? "bg-[#2E3033] text-[#D2D2D2]" : "bg-primWhite"}
          `}
        >
          <option value="today"> Today </option>
          <option value="30 days"> Last 30 days </option>
          <option value="90 days"> Last 90 days </option>
          <option value="365 days"> Last 365 days </option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Phase 1 */}
      <div className="flex gap-3">
        {/* total sales */}
        <div
          className={`w-[72%]  rounded-xl p-4 ${
            theme ? "bg-secBlack text-white" : "bg-primWhite"
          }`}
        >
          <div className="flex flex-col space-y-5">
            <div>
              <h1 className="text-2xl font-semibold"> Today's Sales </h1>
              <p className="text-[#B6A3A3]"> Sales Summary</p>
            </div>
            <div className="flex gap-5 overflow-auto pb-3">
              {cardDetails.map((val) => {
                return <SummaryCard key={val.icon} model={val} theme={theme} />;
              })}
            </div>
          </div>
        </div>

        {/* chart */}
        <div
          className={`rounded-xl w-[28%] p-4
          ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
        `}
        ></div>
      </div>

      {/* Phase 2 */}
      <div className="flex gap-3">
        {/* total margin */}
        <div
          className={`w-[72%]  rounded-xl p-4 
            ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
          `}
        ></div>

        {/* Quantity */}
        <div className="bg-primWhite rounded-xl w-[28%] p-4"></div>
      </div>

      {/* Phase 3 */}
      <div className="bg-primWhite p-4 rounded-xl"></div>
    </div>
  );
}
