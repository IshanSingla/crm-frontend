import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar2({ currentUser }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
    auth.signOut();
  };
  return (
    <div className="flex justify-between items-center px-4 bg-orange-400">
      <Link to="/">
        <img className="w-32" src={require("../Assets/logoFull.png")} alt="" />
      </Link>
      <Link to="/auth/login" onClick={() => auth.signOut()}></Link>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 transition-all ease-linear px-3 py-1 rounded-md text-white"
      >
        Logout
      </button>
    </div>
  );
}
