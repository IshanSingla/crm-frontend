import React, { useState } from "react";

export default function SalesTable({ theme }) {
  const [headings, setHeadings] = useState([
    "Sr. No.",
    "Products",
    "Date",
    "Unit Price",
    "Discount",
    "Quantity",
    "Net Amount",
    "Tax Rate",
    "Tax Amount",
    "Total Amount",
    "Platform",
  ]);

  return (
    <div
      className={` rounded-xl py-3 overflow-x-auto h-full
      ${theme ? "bg-secBlack" : "bg-primWhite"}
    `}
    >
      <table className="w-full">
        <thead>
          <tr
            className={`font-semibold text-[14px] h-auto
              ${theme ? "text-white" : "text-black"}
            `}
          >
            {headings.map((head, headID) => (
              <td key={head}>
                <div className="px-4 py-2 text-center font-bold w-full">
                  <p className="text-center">{head}</p>
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody
          className={`text-[15px] text-center ${
            theme ? "text-secWhite" : "text-black"
          }`}
        >
          {/* Spacer */}
          <tr>
            <td>
              <div className="h-5"></div>
            </td>
          </tr>

          {/* Main content */}
          <tr className="font-semibold">
            <td>1</td>
            <td>lorem</td>
            <td>2/3/2023</td>
            <td>200Rs.</td>
            <td>30%</td>
            <td>3</td>
            <td>600Rs.</td>
            <td>20%</td>
            <td>200Rs.</td>
            <td>400Rs.</td>

            {/* Platform td */}
            <td className="text-oran">Amazon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
