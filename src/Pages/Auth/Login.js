import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Lottie from "lottie-react";
import userHello from "../../Assets/Lotties/userHello.json";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Config/firebase";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          toast.success("User Login Successfully");
          navigate("/business");
        })
        .catch((error) => {
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
    setEmail("");
    setPassword("");
  };
  // return (
  //   <div className="flex flex-col space-y-8">
  //     <div className="flex flex-col space-y-2">
  //       <h1 className="text-4xl font-bold"> Login </h1>
  //       <p className="text-[13px]">
  //         See your growth and get consulting support!
  //       </p>
  //     </div>
  // <div className="flex flex-col space-y-3">
  //   <div className="flex flex-col space-y-1">
  //     <label htmlFor="email" className="text-[11px] font-semibold">
  //       Email
  //     </label>
  //     <input
  //       className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //       value={email}
  //       id="email"
  //       placeholder="mail@website.com"
  //       onChange={(e) => {
  //         setEmail(e.target.value);
  //       }}
  //     />
  //   </div>

  //   <div className="flex flex-col space-y-1">
  //     <label htmlFor="pass" className="text-[11px] font-semibold">
  //       Password
  //     </label>
  //     <input
  //       className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //       value={password}
  //       id="pass"
  //       type="password"
  //       placeholder="Password"
  //       onChange={(e) => {
  //         setPassword(e.target.value);
  //       }}
  //     />
  //   </div>
  // </div>

  // <div>
  //   <button
  //     // disabled={user.loader}
  //     onClick={handleSignIn}
  //     className="bg-orange-500 text-white w-full py-2 rounded-full text-[13px]"
  //   >
  //     Login
  //   </button>
  // </div>

  //   <div className="flex justify-center items-center text-[13px] ">
  //     <Link to="/auth/signup" className="text-blue-500">
  //       Don't have an account? Sign Up
  //     </Link>
  //   </div>
  // </div>
  // );

  return (
    <div className="w-full h-screen bg-orange-400 flex justify-center items-center font-pop">
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-8 bg-white shadow-xl  rounded-full w-16 flex items-center justify-center">
          <Lottie animationData={userHello} loop={true} />
        </div>
        <div className="w-[21rem] bg-white flex flex-col  shadow rounded-xl space-y-8 pt-12 pb-10 px-5">
          <div>
            <h1 className="text-center font-pop font-black text-4xl">Login</h1>
          </div>
          <div className="flex flex-col space-y-3 text-[15px]">
            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={email}
                id="email"
                placeholder="Enter your email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={password}
                id="pass"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-full">
              <button
                // disabled={user.loader}
                onClick={handleSignIn}
                className="bg-black text-white w-full py-2 rounded-md text-[14px]"
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
      </div>
    </div>
  );
}

export default Login;
