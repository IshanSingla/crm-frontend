import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../../../Api";
import { DeleteIcons } from "../../../Components/Icons";

export default function BusinessCard({ val }) {
  const handleDelete = (e) => {
    e.preventDefault();
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/delete`, { headers: { buissnessid: val._id } })
          .then((res) => {
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
    <Link
      className="w-full md:w-56 h-56 rounded-md bg-white hover:bg-zinc-100 transition-all ease-out shadow-md shadow-zinc-300"
      to={`/business/${val._id}`}
    >
      <div className="flex flex-col justify-between w-full h-full p-2">
        <div>
          <p className="text-xl p-2 break-words font-medium">
            {val.buissnessName}
          </p>
          <p className="text-[12px] text-zinc-500 px-2"> {val.createdAt} </p>
        </div>
        <button
          onClick={handleDelete}
          className="rounded-full w-[max-content] bg-zinc-100 hover:bg-zinc-300 p-2 transition-all ease-linear"
        >
          <DeleteIcons />
        </button>
      </div>
    </Link>
  );
}
