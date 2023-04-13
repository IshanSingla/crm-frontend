import React, { useContext } from "react";
import { Cross } from "../../../Components/Icons";
import { ThemeContext } from "../../../Contexts/ThemeContext";

export function TagSingle() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex space-x-1 rounded-md px-3 py-1 text-md items-center justify-between text-oran
      ${theme ? " bg-oran bg-opacity-10" : "bg-secWhite border"}
    `}
    >
      <p className="">Amazon</p>
      <button>
        <Cross className="w-7 h-7" stroke={`${theme ? "white" : "black"}`} />
      </button>
    </div>
  );
}
