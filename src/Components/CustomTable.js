/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { publicApi } from "../Api";

export default function CustomTable({
  popupScreenFields = <></>,
  popupScreenHandler = () => {},
  tableData = <></>,
  currentUser,
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
      currentUser.getIdToken().then((token) => {
        publicApi
          .get(`${link}?from=${from}&to=${from + gap}`, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            setBody(res.data.inventory);
            setPages(res.data.totalPage);
          })
          .catch((err) => {
            toast.error(err.message);
          });
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

  return (
    <div className="flex flex-col justify-between py-2 shadow-md bg-white rounded-xl w-full md:w-[60%] container mx-auto">
      {popup && (
        <>
          <div className="w-[30%] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20 p-[32px]">
            {popupScreenFields}
            <button
              onClick={(e) => {
                popupScreenHandler(e)
                  .then((res) => {
                    if (res.status === 200) {
                      toast.success("Added Successfully");
                      setPopup(false);
                    } else {
                      toast.error(res.data.message);
                    }
                  })
                  .catch((err) => {
                    toast.error(err.message);
                  });
              }}
              className="w-full bg-[#000C2A] text-white p-[8px] rounded-[20px]"
            >
              {" "}
              Add
            </button>
          </div>
          <div
            onClick={() => {
              setPopup(false);
            }}
            className="absolute w-[100%] h-[100%] top-[0%] left-[0%] bg-[rgb(0,0,0,0.2)] z-13"
          ></div>
        </>
      )}
      <div className="flex flex-row py-3 px-4 justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="w-[75%] bg-zinc-100 rounded-md outline-none py-1 px-2"
        />
        <button
          onClick={() => {
            setPopup(true);
          }}
          className="px-5 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold"
        >
          Add data
        </button>
        <button
          onClick={() => {
            setReload(!reload);
          }}
        >
          <img
            className="w-4"
            src={require("../Assets/reload.svg").default}
            alt=""
          />
        </button>
        <button>
          <img
            className="w-5"
            src={require("../Assets/more.svg").default}
            alt=""
          />
        </button>
      </div>
      <div className="overflow-auto h-[22rem] scroll">
        <table className="w-full border-space font-pop text-zinc-500">
          <thead className="">
            <tr className="font-semibold text-[13px] h-auto border-b border-zinc-200">
              {headings.split(",").map((head, headID) => (
                <td key={head}>
                  <div className="px-4 pb-2 ">{head}</div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="text-[12px] text-center">{tableData}</tbody>
        </table>
      </div>

      {/* Table Down Bar */}
      <div className="flex flex-row justify-between px-4 py-2 font-pop text-[12px] border-t border-zinc-200">
        <div className="flex flex-row items-center space-x-1 ">
          <div>Rows per page</div>
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
    </div>
  );
}
