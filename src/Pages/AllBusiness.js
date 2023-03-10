import React, { useEffect, useState } from "react";
import LandingScreen from "../Components/LandingScreen";
import { BuissnessApi } from "../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth } from "../Config/firebase";

function AllBusiness() {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);

  const handleDelete = (id) => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .delete(`/delete`, { headers: { buissnessid: id } })
          .then((res) => {
            toast.success("Deleted Successfully");
            setUpdater(!updater);
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

  const handleSubmit = () => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .post("/create", {
            buissnessName: name,
            buissnessGstNo: "123456",
          })
          .then(() => {
            setName("");
            toast.success("Created Successfully");
            setUpdater(!updater);
          })
          .catch((err) => {
            if (err.response) {
              return toast.error(err.response.data.message);
            }
            console.log(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    BuissnessApi()
      .then((publicApi) => {
        publicApi
          .get("/all", {})
          .then((res) => {
            setData(res.data.buissness);
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
  }, [updater]);

  return (
    <LandingScreen>
      <div className="w-[80%] mx-auto ">
        <div className="text-2xl mb-2">Create New Business:</div>
        <div className="flex flex-row items-center justify-between mb-9">
          <input
            className="w-[80%] h-12 rounded-md border border-white px-3 bg-black"
            placeholder="Enter Business Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="w-[15%] h-12 rounded-md border border-white  bg-black text-4xl"
            onClick={handleSubmit}
          >
            +
          </button>
          <Link
            to="/auth"
            onClick={() => {
              auth.signOut();
            }}
            className="w-[15%] h-12 rounded-md border border-white  bg-black text-4xl"
          >
            X
          </Link>
        </div>
        <div className="text-2xl mb-2">Your Businesses:</div>
        <div className="border border-zinc-400 py-4 px-3 rounded-md h-96">
          <div className="flex flex-col space-y-2">
            {data ? (
              data.length === 0 ? (
                <div className="">No Business Data Found!</div>
              ) : (
                data.map((val) => {
                  return (
                    <div
                      key={val._id}
                      className="flex flex-row rounded-md bg-gray-800"
                    >
                      <Link
                        className="p-2 w-[85%] rounded-md hover:bg-slate-800"
                        to={`/business/${val._id}/dashboard`}
                      >
                        {val.buissnessName}
                      </Link>
                      <button
                        onClick={() => handleDelete(val._id)}
                        className="bg-red-500 px-3 rounded-md hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })
              )
            ) : (
              <div className="">
                <div className="flex justify-center items-center">
                  Loading...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LandingScreen>
  );
}

export default AllBusiness;
