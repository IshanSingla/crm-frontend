import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Maintainance() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` p-4 w-full h-full rounded-xl flex justify-center items-center
        ${theme ? "bg-secBlack" : "bg-primWhite"}
      `}
    >
      <div className="flex flex-col items-center gap-7">
        <img
          className="fill-black"
          src={require("../../Assets/Maintainance.svg").default}
          alt=""
        />
        <div className="flex flex-col items-center gap-2">
          <h1
            className={` text-5xl font-[900]
              ${theme ? "text-white" : "text-black"}
            `}
          >
            We'll be back soon!
          </h1>
          <p
            className={` text-xl font-[900]
              ${theme ? "text-grey" : "text-grey"}
            `}
          >
            Server under maintainance!
          </p>
        </div>
      </div>
    </div>
  );
}
