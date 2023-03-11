import React from "react";
import { Link } from "react-router-dom";

export default function BusinessCard({ val, handleDelete }) {
  return (
    <Link
      className="w-full md:w-56 h-56 rounded-md border border-zinc-200 hover:bg-zinc-100 transition-all ease-out shadow-md shadow-zinc-300"
      to={`/business/${val._id}/dashboard`}
    >
      <div className="flex flex-col justify-between w-full h-full p-2">
        <div>
          <p className="text-xl p-2 break-words">{val.buissnessName}</p>
          <p className="text-[12px] text-zinc-500 px-2"> {val.createdAt} </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(val._id);
          }}
          className="rounded-full w-[max-content] bg-zinc-100 hover:bg-zinc-300 p-2 transition-all ease-linear"
        >
          <img
            className="w-6"
            src={require("../../../Assets/bin.svg").default}
            alt=""
          />
        </button>
      </div>
    </Link>
  );
}
