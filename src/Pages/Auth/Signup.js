import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import { auth } from "../../Config/firebase";

import Lottie from "lottie-react";
import userHello from "../../Assets/Lotties/userHello.json";

function Signup() {
  // let
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    setLoader(true);
    if (
      name !== "" &&
      email !== "" &&
      gender !== "" &&
      phone !== "" &&
      password !== ""
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          getIdToken(userCreds.user).then((token) => {
            publicApi
              .post(
                "/auth/create",
                {
                  email: email,
                  name: name,
                  userGender: gender,
                  phoneNumber: phone,
                },
                {
                  headers: {
                    authorization: token,
                  },
                }
              )
              .then((response) => {
                toast.success("User Signup Successfully");
              })
              .catch((err) => {
                if (err.request.status) {
                  return toast.error(err.response.data.message);
                }
                toast.error(err.message);
              });
          });
        })
        .catch((error) => {
          if (error.code === "auth/user-disabled") {
            toast.error("User has been disabled");
          } else if (error.code === "auth/user-not-found") {
            toast.error("User not found");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Wrong Password");
          } else {
            toast.error(error.message);
          }
        });
    }
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setPhone("");
  };
  // return (
  //   <div className="flex flex-col space-y-8 py-8 w-[50%] md:w-[65%] xl:w-[60%]  ">
  //     <div className="flex flex-col space-y-2">
  //       <h1 className="text-4xl font-bold"> Sign up </h1>
  //       <p className="text-[13px]">Get started with us!</p>
  //     </div>
  //     <div className="flex flex-col gap-3">
  //       <input
  //         className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //         value={name}
  //         placeholder="Name"
  //         onChange={(e) => {
  //           setName(e.target.value);
  //         }}
  //       />
  //       <input
  //         className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //         value={email}
  //         placeholder="Email"
  //         onChange={(e) => {
  //           setEmail(e.target.value);
  //         }}
  //       />
  //       <input
  //         className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  // value={gender}
  // placeholder="Gender"
  // onChange={(e) => {
  //   setGender(e.target.value);
  // }}
  //       />
  //       <input
  //         className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //         value={phone}
  //         placeholder="Phone"
  //         onChange={(e) => {
  //           setPhone(e.target.value);
  //         }}
  //         type="number"
  //       />
  //       <input
  //         className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-3 py-1 placeholder:text-[13px] rounded-full"
  //         value={password}
  //         type="password"
  //         placeholder="Password"
  //         onChange={(e) => {
  //           setPassword(e.target.value);
  //         }}
  //       />
  //     </div>

  //     <div>
  //       <button
  //         // disabled={user.loader}
  //         onClick={(e) => {
  //           if (!loader) {
  //             handleSubmit(e);
  //           }
  //         }}
  //         className="bg-orange-500 text-white w-full py-2 rounded-full text-[13px]"
  //       >
  //         Sign In
  //       </button>
  //     </div>

  //     <div className="flex justify-center items-center text-[13px]">
  //       <Link to="/auth/login" className="text-blue-500">
  //         Already have an account?
  //       </Link>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-full h-screen bg-orange-400 flex justify-center items-center font-pop">
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-8 bg-white shadow-xl  rounded-full w-16 flex items-center justify-center">
          <Lottie animationData={userHello} loop={true} />
        </div>
        <div className="w-[21rem] bg-white flex flex-col  shadow rounded-xl space-y-8 pt-12 pb-10 px-5">
          <div>
            <h1 className="text-center font-pop font-black text-4xl">
              Sign up!
            </h1>
          </div>
          <div className="flex flex-col space-y-3 text-[15px]">
            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={name}
                id="name"
                placeholder="Enter your name..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={gender}
                placeholder="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={phone}
                placeholder="Enter your number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <input
                className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
                value={password}
                placeholder="Set your password"
                type="password"
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
                onClick={(e) => {
                  if (!loader) {
                    handleSubmit(e);
                  }
                }}
                className="bg-black text-white w-full py-2 rounded-md text-[14px]"
              >
                Continue
              </button>
            </div>
            <div className="flex justify-center items-center text-[13px] ">
              <p>
                Already have an account?&nbsp;
                <Link to="/auth/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
