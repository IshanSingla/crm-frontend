import React from "react";
import { Link } from "react-router-dom";
import {Navbar2} from "../../Components/Navbar";

export default function PageNotFound() {
  return (
    <div className="bg-mainBlue min-h-screen flex flex-col font-pop">
      <Navbar2 />
      <div className="h-full flex flex-col gap-7 py-12 items-center justify-center text-white">
        <img
          src={require(`../../Assets/404/oops.svg`).default}
          alt="oops icon"
        />
        <img
          src={require(`../../Assets/404/Lost.svg`).default}
          alt="Lost icon"
        />
        <img
          src={require(`../../Assets/404/404.svg`).default}
          alt="404 Not Found!"
        />
        <Link
          to="/"
          className="px-6 py-2 flex items-center gap-3 rounded-full border border-white hover:bg-slate-800 transition-all ease-linear"
        >
          <img
            className="hover:scale-95"
            src={require(`../../Assets/go_back.svg`).default}
            alt="404 Not Found!"
          />
          <p> Go Home </p>
        </Link>
      </div>
    </div>
  );
}
