import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logoFull.png";
import { ForwardArrow, Instagram, Linkedin, Twitter, WhatsApp } from "./Icons";

export default function Footer() {
  return (
    <section className="bg-gradient-to-r mt-10 from-[#D9D9D9] py-10 to-[#4a4848] max-w-full">
      <div className="max-w-[90%] mx-auto w-full mb-4 flex flex-col relative">
        <div className="flex flex-row justify-between items-center w-full bg-[#1E1E1E] px-5 py-2 rounded-xl">
          <div className="invisible sm:visible ">
            <img
              src={logo}
              alt=""
              className=" xs:h-auto xs:w-[8rem] sm:w-[12rem] w-[8rem] h-auto sm:mb-2"
            />
          </div>
          <Link to="/auth" className="flex justify-center gap-4 items-center">
            <h1 className="font-Poppins font-bold text-lg sm:text-xl text-white">
              Start Collaborating
            </h1>
            <ForwardArrow className="bg-white rounded-full"/>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 w-full font-Poppins">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg sm:text-2xl leading-9 text-[#25282B]">
                indusianassist@gmail.com
              </h1>
              <h1 className="font-semibold text-xl text-[#25282B] leading-8">
                +91 83034 36455
              </h1>
              <h1 className="font-semibold text-xl text-[#25282B] leading-8">
                +91 83034 36455
              </h1>
            </div>
            <div className="flex flex-col mt-3 gap-4 text-[#25282B] opacity-40">
              <div>
                <h1 className="leading-8 text-2xl font-semibold">Ambala</h1>
                <h1 className="leading-5 text-base font-normal">
                  Punjabi Mohalla, Ambala Cantt, Haryana - 133001
                </h1>
              </div>
              <div>
                <h1 className="leading-8 text-2xl font-semibold">Mumbai</h1>
                <h1 className="leading-5 text-base font-normal">
                  Taloja Navi Mumbai, Maharashtra - 410208
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <h1 className="font-bold  text-2xl leading-8 ml-6">
              Connect With Us
            </h1>
            <div className="flex flex-row gap-2">
              <div>
                <Linkedin className="w-[2rem] h-[2rem]" />
              </div>
              <h1 className="font-bold text-base leading-6">@IndusianAssist</h1>
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <Instagram className="w-[2rem] h-[2rem]" />
              </div>
              <h1 className="font-bold text-base leading-6">@IndusianAssist</h1>
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <Twitter className="w-[2rem] h-[2rem]" />
              </div>
              <h1 className="font-bold text-base leading-6">@IndusianAssist</h1>
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <WhatsApp className="w-[2rem] h-[2rem]" />
              </div>
              <h1 className="font-bold text-base leading-6">+91 83034 36455</h1>
            </div>
          </div>

          <div className="flex flex-col font-medium md:items-end items-center text-2xl leading-8">
            <h1>Contact Us</h1>
            <h1>Terms of use</h1>
            <h1>Privacy Cookies</h1>
            <h1>Policy</h1>
          </div>

          <div className="absolute -bottom-10 right-10 flex flex-row items-center gap-2 ">
            <h1 className="font-extrabold sm:text-2xl text-lg leading-8">
              Powered By
            </h1>
            <span>
              <img
                src="https://www.indusianassist.com/static/media/logo.ecb2caa3d338e614ce4a.png"
                alt=""
                className="w-[4rem] h-[4rem]"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
