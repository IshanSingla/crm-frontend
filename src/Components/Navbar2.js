import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/firebase";

export default function Navbar2() {
  return (
    <div className="flex justify-between items-center px-4 bg-orange-400">
      <Link to="/">
        <img className="w-32" src={require("../Assets/logoFull.png")} alt="" />
      </Link>
      <Link
        to="/auth/login"
        onClick={() => auth.signOut()}
        className="bg-red-500 hover:bg-red-600 transition-all ease-linear px-3 py-1 rounded-md text-white"
      >
        Logout
      </Link>
    </div>
  );
}
