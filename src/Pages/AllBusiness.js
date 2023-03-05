import React, { useEffect, useState } from "react";
import LandingScreen from "../Components/LandingScreen";
import { BuissnessApi } from "../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AllBusiness() {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);

  const handleDelete = (id) => {
    BuissnessApi().then((publicApi) => {
      publicApi
        .delete(`/delete`, { headers: { buissnessid: id } })
        .then((res) => {
          toast.success("Deleted Successfully");
          setUpdater(!updater);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  };

  const handleSubmit = () => {
    BuissnessApi().then((publicApi) => {
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
          console.log(err.message);
        });
    });
  };

  useEffect(() => {
    BuissnessApi().then((publicApi) => {
      publicApi
        .get("/all", {})
        .then((res) => {
          setData(res.data.buissness);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  }, [updater]);

  return (
    <LandingScreen>
      <div className="w-[80%] mx-auto">
        <div className="flex flex-row items-center justify-between mb-6">
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
        </div>
        <div className="text-4xl mb-2">Your Businesses:</div>
        {data ? (
          <div className="border border-zinc-400 py-4 px-3 rounded-md">
            <div className="flex flex-col space-y-2">
              {data.length === 0 ? (
                <div className="">No Business Data Found!</div>
              ) : (
                data.map((val) => {
                  return (
                    <div key={val._id} className="flex flex-row ">
                      <Link
                        className="border border-black p-2 w-[85%] rounded-md"
                        to={`/business/${val._id}/dashboard`}
                      >
                        {val.buissnessName}
                      </Link>
                      <button
                        onClick={() => handleDelete(val._id)}
                        className="bg-red-500 w-[15%] rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </LandingScreen>
  );
}

export default AllBusiness;
