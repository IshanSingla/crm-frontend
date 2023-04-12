import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api";
import { auth } from "../../Config/firebase";

import center from "../../Assets/logo10.svg";
import GoogleButton from "../../Assets/GoogleButton.svg";
import show from "../../Assets/show.svg";
import cross from "../../Assets/cross.svg";
import blue from "../../Assets/Ellipse 1.svg";
import yellow from "../../Assets/Ellipse 2.svg";

function Signup() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    try {
      let name = document.getElementById("name").value;
      let gender = document.getElementById("gender").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      setLoader(true);
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let publicApi = await Api(userCreds.user);
      publicApi
        .post("/auth/create", {
          email: email,
          name: name,
          userGender: gender,
          phoneNumber: "+91" + phone,
        })
        .then((response) => {
          setLoader(false);
          navigate("./login");
        })
        .catch((err) => {
          setLoader(false);
          userCreds.user.delete();
          if (err.request.status) {
            return toast.error(err.response.data.message);
          }

          toast.error(err.message);
        });
    } catch (error) {
      setLoader(false);
      if (error.code === "auth/user-disabled") {
        toast.error("User has been disabled");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid Email");
      } else if (error.code === "auth/weak-password") {
        toast.error("Weak Password");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error("Operation not allowed");
      } else if (error.code === "auth/argument-error") {
        toast.error("Argument error");
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="max-w-[90%] mx-auto w-full max-h-[100%] h-full grid-cols-1 md:grid-cols-3 grid justify-center md:justify-between items-center">
      <div className=" flex flex-col mx-auto md:mx-0 items-start xl:w-[40vw] gap-8 w-full md:gap-10 -mt-20 md:px-10 lg:-mt-[40%] ">
        <h1 className="font-bold  text-center md:text-left md:place-self-start place-self-center text-[2.2rem] lg:text-[2.7rem] xl:text-[3.2rem] md:text-2xl sm:text-[xl] leading-10 lg:leading-[4.1rem] text-white ">
          {" "}
          Sign Up to <br /> Upgrade Business
        </h1>
        <h1 className="font-bold text-xs lg:text-base place-self-end md:text-sm text-left text md:place-self-start leading-7.2 text-white">
          Have an account ?{" "}
          <span className="text-[#FEB95A] cursor-pointer">Sign In here!</span>{" "}
        </h1>
      </div>

      <div className="hidden md:block place-self-center ">
        <img src={center} alt="" className="w-[40rem] scale-125 -mt-[50%]" />
      </div>
      <div className="place-self-start md:place-self-center flex flex-col gap-5 w-full md:w-[90%] md:mx-0 -mt-[20%]">
        <form onSubmit={handleSubmit} className="z-10">
          <div class="relative mt-3">
            <input
              type="text"
              id="floating_name"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-md text-gray-900 bg-transparent rounded-xl border-2 border-[#FEB95A] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_name"
              className="absolute text-md lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter Name
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={cross} alt="" />
            </div>
          </div>
          <div class="relative mt-3">
            <input
              type="email"
              id="floating_email"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-md text-gray-900 bg-transparent rounded-xl border-2 border-[#FEB95A] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_email"
              className="absolute text-md lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter Email Address
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={cross} alt="" />
            </div>
          </div>

          <div class="relative mt-3">
            <input
              type="text"
              id="floating_gender"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-md text-gray-900 bg-transparent rounded-xl border-2 border-[#fff] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_gender"
              className="absolute text-md lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Gender
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={cross} alt="" />
            </div>
          </div>
          <div class="relative mt-3">
            <input
              type="tel"
              id="floating_no"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-md text-gray-900 bg-transparent rounded-xl border-2 border-[#fff] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_no"
              className="absolute text-md lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter your number(10 digit){" "}
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={cross} alt="" />
            </div>
          </div>
          <div class="relative mt-3">
            <input
              type="password"
              id="floating_passwd"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-md text-gray-900 bg-transparent rounded-xl border-2 border-[#fff] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_passwd"
              className="absolute text-md lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter your Password
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={show} alt="" />
            </div>
          </div>
          <submit
            type="submit"
            className="bg-[#FEB95A] cursor-pointer rounded-xl w-full shadow-[0px_10.2889px_18.0056px_3.42963px_rgba(68,97,242,0.15)] text-white flex justify-center items-center py-2 lg:py-3 text-sm lg:text-base mt-3 font-medium"
          >
            Sign In
          </submit>
        </form>

        <div className="flex items-center justify-center gap-5">
          <div className="border-t-2 flex-1"></div>
          <h1 className="font-normal text-md lg:text-lg leading-[4rem] w-[max-content] text-white place-self-center text-center">
            Or continue with
          </h1>
          <div className="flex-1 border-t-2"></div>
        </div>
        <div className=" w-10 mx-auto -mt-6 lg:mt-0 cursor-pointer z-10">
          <img src={GoogleButton} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-0">
        <img src={blue} alt="" />
      </div>
      <div className="flex justify-center items-center absolute bottom-0">
        <img src={yellow} alt="" />
      </div>
    </section>
  );
}

export default Signup;
