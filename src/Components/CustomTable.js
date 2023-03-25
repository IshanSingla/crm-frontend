/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BuissnessApi } from "../Api";
import { ThemeContext } from "../Contexts/ThemeContext";
import Cart from "../Pages/Buissness/Cart";
import { Cross, Reload, Search } from "./Icons";

export default function CustomTable({
  popupScreenFields = <></>,
  popupScreenHandler = () => {},
  tableData = <></>,
  setBody = () => {},
  link = "",
  headings = "",
}) {
  const [from, setFrom] = useState(0);
  const [gap, setGap] = useState(10);
  const [pages, setPages] = useState(1);
  const [popup, setPopup] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!popup) {
      setBody([]); //hta dena baad mae
      if (link === "") {
        return;
      }
      BuissnessApi()
        .then((publicApi) => {
          publicApi
            .get(`${link}?from=${from}&to=${from + gap}`)
            .then((res) => {
              setBody(res.data.inventory);
              setPages(res.data.totalPage);
            })
            .catch((err) => {
              if (err.request.status) {
                return toast.error(err.response.data.message);
              }
              toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [from, gap, popup, reload]);

  const handleNext = () => {
    if (from / gap > pages) return;
    setFrom(from + gap);
  };

  const handlePrev = () => {
    if (from - gap < 1) return;
    setFrom(from - gap);
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center h-full w-full">
      <div
        className={`flex flex-col justify-between py-2 shadow-md rounded-xl w-full
          ${theme ? "bg-secBlack" : "bg-primWhite"}
        `}
      >
        {popup && (
          <>
            <div className="w-72 md:w-80 bg-white rounded-md absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20 p-3">
              {popupScreenFields}
              <button
                onClick={(e) => {
                  popupScreenHandler(e)
                    .then((res) => {
                      toast.success("Added Successfully");
                      setPopup(false);
                    })
                    .catch((err) => {
                      if (err.request.status) {
                        return toast.error(err.response.data.message);
                      }
                      toast.error(err.message);
                    });
                }}
                className="w-full bg-primBlack text-white p-[8px] rounded-md mt-3"
              >
                Add
              </button>
            </div>
            <div
              onClick={() => {
                setPopup(false);
              }}
              className="absolute w-full h-full top-[0%] left-[0%] bg-black/20 z-13"
            ></div>
          </>
        )}
        <div className="flex flex-row py-3 px-4 justify-between">
          <input
            type="text"
            placeholder="Search..."
            className={`w-[70%]  rounded-md outline-none py-2 px-3
              ${theme ? "bg-[#2E3033] text-white" : "bg-zinc-100"}
            `}
          />
          <div className="flex space-x-5">
            <button
              onClick={() => {
                setReload(!reload);
              }}
            >
              <Reload className="w-5 h-5 fill-oran" />
            </button>
            <button
              onClick={() => {
                setPopup(true);
              }}
              className={`px-4 rounded-md text-[13px] font-semibold text-oran
                  ${theme ? "bg-oran bg-opacity-20 " : "border bg-secWhite"}
              `}
            >
              Add data
            </button>
          </div>
        </div>
        <div className="overflow-auto min-h-[29rem] h-full scroll">
          <table className="w-full border-space font-pop text-zinc-500">
            <thead className="">
              <tr
                className={`font-semibold text-[14px] h-auto ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                {headings.split(",").map((head, headID) => (
                  <td key={head}>
                    <div className="px-4 py-2 text-center">{head}</div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody
              className={`text-[16px] text-center ${
                theme ? "text-secWhite" : "text-black"
              }`}
            >
              {tableData}
            </tbody>
          </table>
        </div>

        {/* Table Down Bar */}
        <div>
          <div className="flex flex-row justify-between px-4 py-2 font-pop text-[12px] ">
            <div className="flex flex-row items-center space-x-2 ">
              <div className={`${theme ? "text-white" : "text-black"}`}>
                Rows per page
              </div>
              <div>
                <select
                  value={gap}
                  onChange={(e) => setGap(parseInt(e.target.value))}
                  className="bg-zinc-100 p-1 rounded-md cursor-pointer outline-none border-none"
                >
                  <option value={10}> 10 </option>
                  <option value={20}> 20 </option>
                  <option value={30}> 30 </option>
                </select>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex flex-row">
              <button
                onClick={handlePrev}
                className="hover:bg-zinc-100 rounded-full transition-all"
              >
                <img
                  className="w-8"
                  src={require("../Assets/leftArr2.svg").default}
                  alt=""
                />
              </button>
              <button
                onClick={handleNext}
                className="hover:bg-zinc-100 rounded-full transition-all"
              >
                <img
                  className="w-8"
                  src={require("../Assets/rightArr2.svg").default}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-4">
            <div
              className={`flex items-center rounded-md px-4 w-[40%]
              ${theme ? "bg-oran bg-opacity-5 " : "bg-secWhite"}
            `}
            >
              <div className="flex space-x-1 pr-2 border-r border-[#161515]">
                <CategoryBox theme={theme} category="Amazon" />
              </div>
              <input
                type="text"
                className={`rounded-md text-xl py-2 px-3 bg-transparent w-full outline-none`}
              />
              <Search
                className="w-6 h-6"
                stroke={`${theme ? "white" : "#161515 "}`}
              />
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryBox({ category, theme }) {
  return (
    <div
      className={`flex space-x-1  rounded-sm p-1 pl-2 text-[13px] items-center text-oran
      ${theme ? " bg-secBlack" : "bg-primWhite"}
    `}
    >
      <p className="">{category}</p>
      <button>
        <Cross className="stroke-oran" />
      </button>
    </div>
  );
}
