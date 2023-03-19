import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../../Api";
import deletedark from "../../../Assets/deletedark.svg";

export default function BusinessCard({ val, updater, setUpdater }) {
  const [isDark, setDark] = useState(true);
  const handleDelete = (e) => {
    e.preventDefault();
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/delete`, { headers: { buissnessid: val._id } })
          .then((res) => {
            setUpdater(!updater);
            toast.success("Deleted Successfully");
          })
          .catch((err) => {
            if (err.response) {
              return toast.error(err.response.data.message);
            }
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Link className="w-full h-full" to={`/business/${val._id}`}>
      <div
        className={`${
          isDark ? "bg-[#001A43] text-white" : "bg-white text-black"
        }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-xl relative`}
      >
        <div className="flex flex-col justify-start ml-3 mt-3 items-start">
          <h1
            className={`${
              isDark ? "text-white" : "text-black"
            } font-extrabold text-base leading-6`}
          >
            {val.buissnessName}
          </h1>
          <h2 className="text-[#87888C] font-normal text-[0.4rem] leading-[0.7rem]">
            {val.createdAt}
          </h2>
        </div>
        <div
          className="flex gap-1 place-self-end justify-end absolute right-2"
          onClick={handleDelete}
        >
          <img
            src={isDark ? deletedark : deletedark}
            alt=""
            className={`${isDark ? "inline" : "hidden"}`}
          />
        </div>
      </div>
    </Link>
  );
}
