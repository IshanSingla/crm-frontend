import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LandingScreen from "../../Components/LandingScreen";
import { auth } from "../../Config/firebase";

function Login() {
  // let dispatch = useDispatch();
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
  return (
    <LandingScreen
      component={
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold"> Login </h1>
            <p className="text-[13px]">
              {" "}
              See your growth and get consulting support!{" "}
            </p>
          </div>
          {/* <div className="flex gap-3">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              // disabled={user.loader}
              onClick={handleSignIn}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign In
            </button>
          </div> */}

          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-[11px] font-semibold">
                Email
              </label>
              <input
                className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
                value={email}
                id="email"
                placeholder="mail@website.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="pass" className="text-[11px] font-semibold">
                {" "}
                Password{" "}
              </label>
              <input
                className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
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

          <div>
            <button
              // disabled={user.loader}
              onClick={handleSignIn}
              className="bg-orange-500 text-white w-full py-2 rounded-full text-[13px]"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center items-center text-[13px] ">
            <Link to="/auth/signup" className="text-blue-500">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      }
    />
  );
}

export default Login;
