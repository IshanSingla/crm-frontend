import React from "react";
import center from "../assets/logo10.svg";
import show from "../assets/show.svg";
import cross from "../assets/cross.svg";
import blue from "../assets/Ellipse 1.svg";
import yellow from "../assets/Ellipse 2.svg";
import GoogleButton from "./GoogleButton";

export default function Login() {
  return (
    <section className="max-w-[90%] mx-auto w-full max-h-[100%] h-full grid-cols-1 md:grid-cols-3 grid justify-center md:justify-between items-center">
      <div className=" flex flex-col mx-auto md:mx-0 items-start xl:w-[40vw] gap-8 w-full md:gap-10 -mt-20 md:px-10 lg:-mt-[40%] ">
        <h1 className="font-bold  text-center md:text-left md:place-self-start place-self-center text-[1rem] lg:text-[2.7rem] xl:text-[3.2rem] md:text-2xl sm:text-[xl] leading-8 lg:leading-[4.1rem] text-white ">
          Sign In to <br /> Upgrade Business
        </h1>
        <h1 className="font-bold text-xs lg:text-base place-self-end md:text-sm text-left text md:place-self-start leading-7.2 text-white">
          Don’t have an account? <br />{" "}
          <span className="text-[#FEB95A]">Sign Up here!</span>{" "}
        </h1>
      </div>

      <div className="hidden md:block place-self-center ">
        <img src={center} alt="" className="w-[40rem] scale-125 -mt-[50%]" />
      </div>
      <div className="place-self-start md:place-self-center flex flex-col gap-3 lg:gap-5 w-full md:w-[90%] md:mx-0 -mt-[30%]">
        <form action="#" className="">
          <div class="relative mt-3">
            <input
              type="email"
              id="floating_outlined"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-[#FEB95A] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute text-xs lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter Email
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={cross} alt="" />
            </div>
          </div>

          <div class="relative mt-5">
            <input
              type="password"
              id="floating_passwd"
              required
              className="block px-2.5 py-2 lg:py-3 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-[#FEB95A] appearance-none dark:text-white focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_passwd"
              className="absolute text-xs lg:text-base text-gray-500 dark:text-gray-400 duration-300 peer-focus:dark:text-[#574949] transform rounded-lg -translate-y-2 scale-75 -top-4 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-[#000] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-9 left-1"
            >
              Enter your Password
            </label>
            <div className="absolute top-2 lg:top-3 right-3">
              <img src={show} alt="" />
            </div>
          </div>
          <div className="flex justify-end mt-2 md:mt-3 cursor-pointer">
            <h1 className="font-Poppins font-normal text-xs lg:text-sm leading-5 text-[#FEB95A]">
              Forgot Password?
            </h1>
          </div>
          <submit
            type="submit"
            className="bg-[#FEB95A] cursor-pointer rounded-xl w-full shadow-[0px_10.2889px_18.0056px_3.42963px_rgba(68,97,242,0.15)] text-white flex justify-center items-center py-2 lg:py-3 text-sm lg:text-base mt-3 font-medium"
          >
            Sign In
          </submit>
        </form>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between -mt-4 lg:mt-6 items-center gap-2">
          <div className="hidden lg:block h-[1.5px] rounded-2xl bg-white "></div>
          <h1 className="font-normal text-[0.7rem] lg:text-xs leading-[4rem] w-full text-white place-self-center text-center">
            Or continue with
          </h1>
          <div className=" h-[1.5px] hidden lg:block rounded-2xl bg-white"></div>
        </div>
        <div className=" w-10 mx-auto -mt-6 lg:mt-2 cursor-pointer">
          <GoogleButton />
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
