import React from "react";
import SummaryCard from "./SummaryCard";

const details = [
  { icon: 1, title: "$5K", subHead: "Total Sales" },
  { icon: 2, title: "500", subHead: "Total Sales" },
  { icon: 3, title: "9K", subHead: "Inventory" },
];

export default function SalesReport({ theme }) {
  return (
    <div
      className={`
      p-5 rounded-xl flex flex-col gap-5
      ${theme ? "bg-secBlack text-white" : "bg-primWhite"}
    `}
    >
      <h1 className="font-bold text-2xl"> Total Sales: Rs. 100k </h1>
      <div className="flex gap-2">
        {details.map((item, index) => {
          return <SummaryCard theme={theme} model={item} key={item.icon} />;
        })}
      </div>
    </div>
  );
}
