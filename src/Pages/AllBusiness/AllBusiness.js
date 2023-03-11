import React, { useEffect, useState } from "react";
import LandingScreen from "../../Components/LandingScreen";
import { BuissnessApi } from "../../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth } from "../../Config/firebase";
import Navbar2 from "../../Components/Navbar2";
import BusinessCard from "./Components/BusinessCard";
import Lottie from "lottie-react";
import loading from "../../Assets/Lotties/loading.json";
import CreateDg from "./Components/CreateDg";

function AllBusiness() {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);
  const [isShow, setIsShow] = useState(false);

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
    if (name) {
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
              setIsShow(false);
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
    } else {
      alert("Field is empty!");
    }
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
      <main className="flex justify-center items-center -mt-24 mb-16">
        <div className="w-[20rem] md:w-[30rem] lg:w-[45rem] flex flex-col space-y-10">
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
                  {/* add */}
                  <button
                    onClick={() => setIsShow(true)}
                    className="w-full md:w-56 h-56 rounded-md bg-white hover:bg-orange-100 transition-all ease-out shadow-md shadow-zinc-300"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        className="w-10"
                        src={require("../../Assets/plus.svg").default}
                        alt=""
                      />
                      <p> Add </p>
                    </div>
                  </button>
                  {data.map((val) => {
                    return (
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
              <div className="w-full flex justify-center mt-14">
                {/* <p className="text-center font-medium">Fetching data...</p> */}
                <div className="bg-white flex justify-center items-center rounded-full shadow-2xl">
                  <Lottie
                    className="w-20 h-20"
                    animationData={loading}
                    loop={true}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {isShow && (
          <CreateDg
            setIsShow={setIsShow}
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        )}
      </main>
    </div>
  );
}

export default AllBusiness;
