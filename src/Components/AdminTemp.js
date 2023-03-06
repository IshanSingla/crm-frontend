import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminTemp({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row">
      {/* Sidebar */}

      <div className="bg-[#000C2A] hidden md:flex flex-col min-h-screen p-6 items-center justify-center gap-7 w-72">
        <Link
          to="./dashboard"
          className="hidden md:flex flex-col items-center hover:bg-slate-800 w-full px-2 py-3 text-white"
        >
          dashboard
        </Link>
        <Link
          to="./addRoles"
          className=" hidden md:flex flex-col items-center hover:bg-slate-800 w-full px-2 py-3 text-white"
        >
          addRoles
        </Link>
        <Link
          to="./addAdmin"
          className=" hidden md:flex flex-col items-center hover:bg-slate-800 w-full px-2 py-3 text-white"
        >
          addAdmin
        </Link>
        <Link
          to="./addBuissnessRoles"
          className=" hidden md:flex flex-col items-center hover:bg-slate-800 w-full px-2 py-3 text-white"
        >
          addBuissnessRoles
        </Link>
      </div>
      {/* Hamburger */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute top-2 right-2 bg-[#000C2A] p-2 text-white"
      >
        open
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden z-10 absolute h-screen w-1/3 bg-[#000C2A] bg- px-2 py-3 text-white flex flex-col items-center justify-center gap-9"
        >
          <Link
            to="./dashboard"
            className="flex flex-col items-center  px-2 py-3  hover:bg-slate-800 w-full"
          >
            dashboard
          </Link>
          <Link
            to="./addRoles"
            className="flex flex-col items-center px-2 py-3 hover:bg-slate-800 w-full"
          >
            addRoles
          </Link>
          <Link
            to="./addAdmin"
            className="flex flex-col items-center  px-2 py-3 hover:bg-slate-800 w-full"
          >
            addAdmin
          </Link>
          <Link
            to="./addBuissnessRoles"
            className="flex flex-col items-center  px-2 py-3 hover:bg-slate-800 w-full"
          >
            addBuissnessRoles
          </Link>
        </div>
      )}

      {/* Main */}
      <div className="w-full px-6 py-10 flex flex-col items-center">
        <h1 className="text-center font-semibold capitalize"> Admin Portal </h1>

        {/* Input fields */}
        {children}
      </div>
    </div>
  );
}
