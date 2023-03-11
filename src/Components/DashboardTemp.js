/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BuissnessApi } from "../Api";
import { auth } from "../Config/firebase";
import {
  BellIcon,
  ForwardArrow,
  MenuIcon,
  ProfileIcon,
  LogoutIcon,
  DeleteIcons,
  SetingIcons,
  SupportIcon,
  AnalyticsIcon,
  HomeIcon,
  MoneyIcon,
  CalculatorIcon,
} from "./Icons";

export default function DashboardTemp({ children, type = "buissness" }) {
  const navigator = useNavigate();
  const route = useLocation().pathname.split("/").pop();
  const [newindex, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);
  const [data, setData] = useState();
  const Menus = [
    { title: "Dashboard", icon: <HomeIcon />, route: "dashboard" },
    { title: "Analytics", icon: <AnalyticsIcon />, route: "analytics" },
    {
      title: "Inventory",
      icon: <CalculatorIcon />,
      route: "inventory",
      gap: true,
    },
    { title: "Expenses", icon: <MoneyIcon />, route: "expense" },
  ];
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
  };

  return (
    <div className="flex flex-row overflow-hidden bg-[#000C2A] h-screen w-screen p- md:gap-2">
      <div
        className={`${
          open ? "md:w-[25%] w-[70%]" : "md:w-[5%] w-[20%]"
        } bg-[#081A51] md:h-full h-[98%] p-4 duration-500 md:relative absolute z-10  shadow-2xl ${
          isOpen && "md:block hidden"
        }`}
      >
        <ForwardArrow
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-2 top-20 bg-[#081A51] border-2 rounded-full duration-500  text-white ${
            !open && "rotate-180"
          }`}
        />
        <div className="flex gap-x-4 items-center border-b-2 border-gray-500">
          <Link
            to="../"
            className={`cursor-pointer duration-500 text-white gap-5 p-2 font-semibold w-full ${
              open ? " text-3xl flex" : " text-xl"
            }`}
          >
            <img
              className="h-10"
              src={
                type === "buissness"
                  ? data?.buissnessLogo
                  : "https://ishansingla.me/images/avatar.jpg"
              }
              alt=""
            />

            {open && (type === "buissness" ? data?.buissnessName : "Vollmax")}
          </Link>
        </div>
        <div className="py-12 overflow-auto h-[78%]">
          {Menus.map((data, index) => (
            <Link
              to={`./${data.route}`}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-800 text-gray-300 text-sm items-center gap-x-4 ${
                data.gap && "flex mt-[10%]"
              } ${index === newindex && "bg-indigo-900"}`}
            >
              {data.icon}
              {open && (
                <span className="origin-left duration-200 text-xl">
                  {data.title}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="h-[13%] w-full bg-[#000C2A] flex flex-col justify-center">
          <Link
            to="./settings"
            className="flex rounded-md p-2 cursor-pointer hover:bg-indigo-800 text-gray-300 text-sm items-center gap-x-4 border-b-2"
          >
            <SetingIcons />
            {open && (
              <span className="origin-left duration-200 text-xl">Settings</span>
            )}
          </Link>
          <Link
            to="/support"
            className="flex rounded-md p-2 cursor-pointer hover:bg-indigo-800 text-gray-300 text-sm items-center gap-x-4 border-b-2"
          >
            <SupportIcon />
            {open && (
              <span className="origin-left duration-200 text-xl">
                Help & Support
              </span>
            )}
          </Link>
          {type === "buissness" ? (
            <button
              onClick={handleDelete}
              className="flex rounded-md p-2 cursor-pointer hover:bg-indigo-800 text-gray-300 text-sm items-center gap-x-4 border-b-2"
            >
              <DeleteIcons />
              {open && (
                <span className="origin-left duration-200 text-xl">Delete</span>
              )}
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="flex rounded-md p-2 cursor-pointer hover:bg-indigo-800 text-gray-300 text-sm items-center gap-x-4 border-b-2"
            >
              <LogoutIcon />
              {open && (
                <span className="origin-left duration-200 text-xl">LogOut</span>
              )}
            </button>
          )}
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={
          !isOpen && "md:hidden block h-[98%] w-[97%] bg-black/20 absolute "
        }
      ></div>
      <div className="relative w-full p-6 flex flex-col items-center bg-white  rounded-2xl">
        <nav className="w-full flex justify-between fix rounded-xl border-1 px-6 shadow-c items-center h-[6%] shadow-boxshadow">
          <MenuIcon
            className="md:hidden block cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="flex flex-col items-center capitalize">
            <p className="font-medium text-slate-500">{route}</p>
          </div>
          <div className="flex items-center gap-5">
            <BellIcon />
            <ProfileIcon />
          </div>
        </nav>
        <div className="mt-3 h-[90%] overflow-auto">{children}</div>
      </div>
    </div>
  );
}
