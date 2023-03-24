import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../../Api";
import deletedark from "../../../Assets/trash.png";

export default function BusinessCard({ val, updater, setUpdater,key, isDark }) {

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
    <Link className="w-full h-full" to={`/business/${val._id}`} key={key}>
      <div
        className={`${
          isDark ? "bg-[#001A43] text-white border-zinc-500" : "bg-white text-black border-gray-200"
        }bg-[#001A43] w-full md:w-[16rem] place-self-center flex flex-row max-w-full h-[10rem] rounded-lg relative border `}
      >
        <div className="flex flex-col justify-start ml-3 mt-3 items-start gap-1">
          <h1
            className={`${
              isDark ? "text-white" : "text-black"
            } font-bold text-base capitalize`}
          >
            {val.buissnessName}
          </h1>
          <h2 className="text-[#87888C] font-normal text-xs sm:text-sm leading-[0.7rem]">
            {val.createdAt}
          </h2>
        </div>
        <div
          className={`${ isDark ? " bg-white" : " bg-black" } flex gap-1 place-self-end justify-end absolute bottom-2 right-2  rounded-full p-2`}
          onClick={handleDelete}
        >
          <img
            src={isDark ? deletedark : deletedark}
            alt="delete"
            className={`w-4 h-4`}
          />
        </div>
      </div>
    </Link>
  );
}
