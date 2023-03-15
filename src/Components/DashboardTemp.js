/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../Api";
import { auth } from "../Config/firebase";
import { BellIcon, ForwardArrow, MenuIcon, ProfileIcon } from "./Icons";

export default function DashboardTemp({
  children,
  type = "buissness",
  Menus = [],
}) {
  const navigator = useNavigate();
  const route = useLocation().pathname.split("/").pop();
  const [newindex, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);
  const [data, setData] = useState();
  // const Menus = [
  //   { title: "Dashboard", icon: <HomeIcon />, route: "dashboard" },
  //   { title: "Analytics", icon: <AnalyticsIcon />, route: "analytics" },
  //   {
  //     title: "Inventory",
  //     icon: <CalculatorIcon />,
  //     route: "inventory",
  //     // gap: true,
  //   },
  //   { title: "Expenses", icon: <MoneyIcon />, route: "expense" },
  // ];

  const isDark = localStorage.getItem("isDark");

  useEffect(() => {
    if (type === "buissness") {
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .get("/one")
            .then((res) => {
              setData(res.data.buissness);
            })
            .catch((err) => {
              console.log(err);
              if (err.request.status) {
                return toast.error(err.response.data.message);
              }
              return toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    Menus.forEach((Menu, index) => {
      if (Menu.route === route) {
        setIndex(index);
      }
    });
  }, [route]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logged Out");
        navigator("/auth");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Do you want to delete this business?")) {
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .delete("/delete")
            .then((res) => {
              toast.success(res.data.message);
              navigator("/business");
            })
            .catch((err) => {
              if (err.request.status) {
                return toast.error(err.response.data.message);
              }
              return toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div
      className={`flex flex-row h-screen w-screen p-4 
        ${isDark === true ? "bg-primBlack" : "bg-white"} 
      `}
    >
      <div
        className={`
          h-full p-4 duration-500 md:relative absolute z-10 rounded-md bg-primWhite
          ${open ? "md:w-52 w-52" : "w-[4.8rem]"}
          ${isOpen && "md:block hidden"}
          ${isDark === true ? "bg-primBlack" : ""}
        `}
      >
        <ForwardArrow
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-2 top-20 bg-white border-2 rounded-full duration-500 text-black 
            ${!open && ""}
          `}
        />

        <div className="h-full flex flex-col justify-between">
          <div className="overflow-auto flex flex-col space-y-1">
            <div className="flex items-center justify-center">
              <MenuIcon
                className="md:hidden block cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div>
              <Link>
                <img
                  className=""
                  src={require("../Assets/logoFull.png")}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              {Menus.map((data, index) => (
                <Link
                  to={`./${data.route}`}
                  key={index}
                  className={`flex rounded-xl p-2 cursor-pointer transition-all ease-out text-sm items-center space-x-4 
                ${index === newindex && "bg-white font-medium"}
              `}
                >
                  {data.icon}
                  {open && (
                    <span className="origin-left duration-200 text-[16px]">
                      {data.title}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="border text-center">help and support</div>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={
          !isOpen && "md:hidden block h-[98%] w-[97%] bg-black/20 absolute"
        }
      ></div>

      {/* Right Side */}

      <div className="relative w-full px-4 flex flex-col items-center">
        <nav className="w-full flex justify-between items-center fix rounded-md border-1 px-6 py-3">
          <MenuIcon
            className="md:hidden block cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="flex flex-col items-center capitalize">
            <p className="font-black text-3xl">{route}</p>
          </div>
          <div className="flex items-center gap-5">
            <BellIcon />
            <ProfileIcon />
          </div>
        </nav>
        <div
          className="mt-3 w-full overflow-auto 
            scroll"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
