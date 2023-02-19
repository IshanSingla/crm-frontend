import React, { useEffect, useState } from "react";
import FullTable from "../../Components/FullTable";

function Inventory() {
  const [from, setFrom] = useState(0);
  const [gap, setGap] = useState(10);
  const [pages, setPages] = useState(1);

  let headings = [
    "SNo.",
    "Name",
    "Description",
    "Cost",
    "Quantity",
    "Transac.Count",
    "Transac. Details",
  ];
  let body = [];

  const handleNext = () => {
    if (from / gap > pages) return;
    setFrom(from + gap);
  };

  const handlePrev = () => {
    if (from - gap < 1) return;
    setFrom(from - gap);
  };

  useEffect(() => {
    console.log(from, gap, pages);
  }, [from, gap]);

  return (
    <div className="">
      <div className="flex flex-col justify-between py-2 shadow-md bg-white rounded-xl w-full md:w-[60%] container mx-auto">
        <div className="flex flex-row py-3 px-4 justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-[75%] bg-zinc-100 rounded-md outline-none py-1 px-2"
          />
          <button className="px-5 rounded-md bg-[#1967D2] text-white text-[13px] font-semibold">
            Add data
          </button>
          <button>
            <img
              className="w-4"
              src={require("../../Assets/reload.svg").default}
              alt=""
            />
          </button>
          <button>
            <img
              className="w-5"
              src={require("../../Assets/more.svg").default}
              alt=""
            />
          </button>
        </div>
        <div className="overflow-auto h-[22rem] scroll">
          <table className="w-full border-space font-pop text-zinc-500">
            <thead className="">
              <tr className="font-semibold text-[13px] h-auto border-b border-zinc-200">
                {headings.map((head, headID) => (
                  <td key={headID}>
                    <div className="px-4 pb-2 ">{head}</div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {body.map((val, rowID) => (
                <tr className="border-b border-zinc-200" key={rowID}>
                  {val.map((row, rowID2) => (
                    <td className="" key={rowID2}>
                      <div className="overflow-auto max-h-[35px] px-4 py-2 scroll">
                        {row}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                src={require("../../Assets/leftArr2.svg").default}
                alt=""
              />
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-zinc-100 rounded-full transition-all"
            >
              <img
                className="w-8"
                src={require("../../Assets/rightArr2.svg").default}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
