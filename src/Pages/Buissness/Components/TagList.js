import React, { useContext } from "react";
import { Category, User2 } from "../../../Components/Icons";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { TagSingle } from "./TagSingle";

export default function TagList({ model }) {
  const { theme } = useContext(ThemeContext);

  const { heading, listing } = model;

  const handleSubmit = (e) => {
    e.preventDefaults();
  };

  return (
    <div
      className={`rounded-xl p-4 min-h-full
      ${theme ? "bg-secBlack" : "bg-primWhite"}
    `}
    >
      {/* Creating Tag Component */}
      <div>
        <h1
          className={`text-3xl font-black text-center
          ${theme ? "text-white" : "text-black"}
        `}
        >
          {heading}
        </h1>
        <div className="flex flex-col space-y-3 py-7">
          <form
            onSubmit={handleSubmit}
            className={`flex items-center space-x-2 py-2 px-1 rounded-md border border-zinc-500
            ${theme ? "" : "bg-secWhite"}
          `}
          >
            <Category className="w-5 h-5 pl-1" />
            <input
              type="text"
              className={`bg-transparent text-[14px] outline-none ${
                theme ? "text-white" : "text-black"
              }`}
              placeholder={heading}
            />
          </form>
          <button
            className={`text-oran w-full py-2 rounded-md
              ${theme ? "bg-oran bg-opacity-10" : "bg-secWhite border"}
            `}
          >
            Create
          </button>
        </div>
      </div>

      {/* Tag Listing */}
      <div className="flex flex-col space-y-3">
        <h1
          className={`text-xl font-black text-center 
            ${theme ? "text-white" : "text-black"}`}
        >
          {listing}
        </h1>
        <div className="flex flex-col gap-2 overflow-auto">
          <TagSingle />
          <TagSingle />
          <TagSingle />
        </div>
      </div>
    </div>
  );
}
