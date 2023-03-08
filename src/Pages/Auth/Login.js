import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Config/firebase";

function Login() {
  const [loader, setLoader] = useState(false);
  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoader(true);
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          setLoader(false);
          toast.success("User Login Successfully");
          navigate("/business");
        })
        .catch((error) => {
          setLoader(false);
          if (error.code === "auth/user-disabled") {
            toast.error("User has been disabled");
          } else if (error.code === "auth/user-not-found") {
            toast.error("User not found");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Wrong Password");
          } else if (error.code === "auth/invalid-email") {
            toast.error("Invalid Email");
          } else if (error.code === "auth/weak-password") {
            toast.error("Weak Password");
          } else if (error.code === "auth/email-already-in-use") {
            toast.error("Email already in use");
          } else if (error.code === "auth/invalid-email") {
            toast.error("Invalid Email");
          } else if (error.code === "auth/operation-not-allowed") {
            toast.error("Operation not allowed");
          } else if (error.code === "auth/argument-error") {
            toast.error("Argument error");
          } else {
            toast.error(error.message);
          }
        });
    }
  };

  return (
    <div className="w-[21rem] bg-white flex flex-col  shadow rounded-xl space-y-8 pt-12 pb-10 px-5">
      <div>
        <h1 className="text-center font-pop font-black text-4xl">Login</h1>
      </div>
      <div className="flex flex-col space-y-3 text-[15px]">
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            id="email"
            placeholder="Enter your email..."
          />
        </div>

        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="w-full">
          <button
            disabled={loader}
            onClick={handleSignIn}
            className={`${loader?"bg-slate-600":"bg-black"} text-white w-full py-2 rounded-md text-[14px]`}
          >
            Continue
          </button>
        </div>
        <div className="flex justify-center items-center text-[13px] ">
          <p>
            Don't have an account?&nbsp;
            <Link to="/auth/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
