import React from "react";
import { Sale1, Sale2, Sale3, Sale4 } from "../../../Components/Icons";

export default function SummaryCard({ model, theme }) {
  return (
    <div
      className={`p-5 rounded-xl w-full min-w-[180px]
      ${theme ? "bg-primBlack text-white" : "bg-secWhite"}
    `}
    >
      <div className="flex flex-col space-y-4">
        {model.icon === 1 && <Sale1 className="w-10 h-10" />}
        {model.icon === 2 && <Sale2 className="w-10 h-10" />}
        {model.icon === 3 && <Sale3 className="w-10 h-10" />}
        {model.icon === 4 && <Sale4 className="w-10 h-10" />}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">{model.title}</h1>
          <p className="font-medium">Total Sales</p>
        </div>
        <div>
          <p
            className={`text-sm text-right 
              ${model.icon === 1 && "text-[#20AEF3]"} 
              ${model.icon === 2 && "text-[#A9DFD8]"}
              ${model.icon === 3 && "text-[#F2C8ED]"}
              ${model.icon === 4 && "text-[#FEB95A]"}
          `}
          >
            Today
          </p>
        </div>
      </div>
    </div>
  );
}
