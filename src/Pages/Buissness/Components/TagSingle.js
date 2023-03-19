import React, { useContext } from "react";
import { Cross } from "../../../Components/Icons";
import { ThemeContext } from "../../../Contexts/ThemeContext";

export function TagSingle() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex space-x-1 rounded-md p-2 text-xl items-center justify-between text-oran
      ${theme ? " bg-primBlack" : "bg-secWhite"}
    `}
    >
      <p className="">Amazon</p>
      <button>
        <Cross className="w-7 h-7" />
      </button>
    </div>
  );
}
