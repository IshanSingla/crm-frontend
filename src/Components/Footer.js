/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logos/logo1.png";
import { Facebook, Instagram, Linkedin, Twitter2 } from "./Icons";
export default function Footer() {
  return (
    <div className="md:px-20 border-t border-[#20222F] text-white font-pop flex flex-col gap-10 py-10 md:py-20 px-5">
      <div className="">
        <img src={logo} alt="logo" className="md:w-44" />
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <form className="rounded-xl border border-grey2 p-10 flex flex-col gap-5">
            <h1 className="text-xl font-bold"> Subscribe to our newsletter</h1>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className="bg-transparent border border-grey2 px-5 py-4 text-md rounded-full outline-none focus:bg-secBlue transition-all ease-linear "
              />
              <button className="px-5 py-4 rounded-full bg-oranGrad1">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="font-[800] text-xl"> Let's Connect </h1>
          <div>
            <p> Email - indusianassist@gmail.com </p>
            <p>Contact no. - </p>
            <div>
              <p>&gt; +91 83034 36455</p>
              <p>&gt; +91 74391 16102</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col font-[800] text-xl">
          <Link to="/contact"> Contact Us </Link>
          <Link to="/"> Terms of use </Link>
          <Link to="/"> Privact Cookies </Link>
          <Link to="/"> Policy </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-grey2"></div>

      {/* Copyright */}
      <div className="flex flex-wrap gap-10 md:gap-0 justify-center md:justify-between items-center">
        <div>
          <p className="text-grey3">
            Copyright © All Right Reserved | Powered By Indusian Assist
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href=""
            className="border border-grey2 w-[max-content] p-3 rounded-xl"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/IndusianAssist"
            className="border border-grey2 w-[max-content] p-3 rounded-xl"
          >
            <Twitter2 className="w-5 h-5" fill="white" />
          </a>
          <a
            href="https://www.linkedin.com/company/indusianassist"
            className="border border-grey2 w-[max-content] p-3 rounded-xl"
          >
            <Linkedin className="w-5 h-5" fill="white" />
          </a>
          <a
            href="https://www.instagram.com/indusianassist/"
            className="border border-grey2 w-[max-content] p-3 rounded-xl"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
