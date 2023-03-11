import React, { useEffect, useState } from "react";
import LandingScreen from "../../Components/LandingScreen";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth } from "../../Config/firebase";
import Navbar2 from "../../Components/Navbar2";
import BusinessCard from "./Components/BusinessCard";

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
    // <div>
    //   <Navbar2 />
    //   <div className="w-[80%] mx-auto ">
    //     <div className="text-2xl mb-2">Create New Business:</div>
    //     <div className="flex flex-row items-center justify-between mb-9">
    //       <input
    //         className="w-[80%] h-12 rounded-md border border-black px-3 bg-"
    //         placeholder="Enter Business Name"
    //         value={name}
    //         onChange={(e) => {
    //           setName(e.target.value);
    //         }}
    //       />
    //       <button
    //         className="w-[15%] h-12 rounded-md border border-white  bg- text-4xl"
    //         onClick={handleSubmit}
    //       >
    //         +
    //       </button>
    //       <Link
    //         to="/auth"
    //         onClick={() => {
    //           // auth.signOut();
    //           auth.currentUser.delete();
    //         }}
    //         className="w-[15%] h-12 rounded-md border border-white text-4xl"
    //       >
    //         Delete
    //       </Link>
    //     </div>
    //     <div className="text-2xl mb-2">Your Businesses:</div>
    //     <div className="border border-zinc-400 py-4 px-3 rounded-md h-96">
    //       <div className="flex flex-col space-y-2">
    // {data ? (
    //   data.length === 0 ? (
    //     <div className="">No Business Data Found!</div>
    //   ) : (
    //     data.map((val) => {
    //       return (
    //         <div
    //           key={val._id}
    //           className="flex flex-row rounded-md bg-gray-800 text-white"
    //         >
    //           <Link
    //             className="p-2 w-[85%] rounded-md hover:bg-slate-800"
    //             to={`/business/${val._id}/dashboard`}
    //           >
    //             {val.buissnessName}
    //           </Link>
    //           <button
    //             onClick={() => handleDelete(val._id)}
    //             className="bg-red-500 px-3 rounded-md hover:bg-red-700"
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       );
    //     })
    //   )
    // ) : (
    //   <div className="">
    //     <div className="flex justify-center items-center">
    //       Loading...
    //     </div>
    //   </div>
    // )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="relative">
      <Navbar2 />
      {/* CRM Background */}
      <div className="top-0 -z-20 flex justify-between items-center md:items-end w-full h-60 md:h-80 bg-orange-400">
        <div className="w-[25rem] hidden md:flex justify-start ">
          <img
            className="w-[12rem]"
            src={
              require("../../Assets/Business Illustrations/business-analysis.svg")
                .default
            }
            alt=""
          />
        </div>

        <div className="h-36 md:h-64 w-full text-center">
          <h1 className="text-6xl text-white font-black font-mon">Business</h1>
        </div>

        <div className="hidden w-[25rem] md:flex justify-end">
          <img
            className="w-[20rem]"
            src={
              require("../../Assets/Business Illustrations/headerRight.svg")
                .default
            }
            alt="header"
          />
        </div>
      </div>

      {/* Main */}
      <main className="flex justify-center items-center -mt-24">
        <div className="w-[20rem] md:w-[30rem] lg:w-[45rem] flex flex-col space-y-10">
          {/* create */}
          <div className="shadow-xl flex flex-col space-y-5 p-4 bg-white rounded-xl">
            <h1 className="text-md"> Create new business </h1>
            <input
              className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Business name"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-400 rounded-md py-2 px-4"
            >
              Add
            </button>
          </div>

          <hr className="border-t border-zinc-300" />

          <div>
            {data ? (
              data.length === 0 ? (
                <div className="shadow-md p-4 rounded-xl">
                  <p className="text-center font-medium">
                    No Business Data Found!
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-5">
                  {data.map((val) => {
                    return (
                      // <div
                      //   key={val._id}
                      //   className="flex flex-row rounded-md bg-gray-800 text-white"
                      // >
                      //   <Link
                      //     className="p-2 w-[85%] rounded-md hover:bg-slate-800"
                      //     to={`/business/${val._id}/dashboard`}
                      //   >
                      //     {val.buissnessName}
                      //   </Link>
                      //   <button
                      //     onClick={() => handleDelete(val._id)}
                      //     className="bg-red-500 px-3 rounded-md hover:bg-red-700"
                      //   >
                      //     Delete
                      //   </button>
                      // </div>
                      <BusinessCard
                        key={val.id}
                        val={val}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
                </div>
              )
            ) : (
              <div className="shadow-md p-4 rounded-xl">
                <p className="text-center font-medium">Fetching data...</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllBusiness;
