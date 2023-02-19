import React, { useState } from "react";

export default function Table() {
  const [data, setData] = useState();
  let headings = [
    "SNo.",
    "Name",
    "Description",
    "Cost",
    "Quantity",
    "Transac.Count",
    "Transac. Details",
  ];
  let body = [
    [
      1,
      "Kapil",
      "Jaipur asdkajsdlasjd asdjahs kdas lore msd aksd kajsdad asjhdasd hj ad jkA SAaa",
      "MCA",
      "Hello",
      null,
      null,
    ],
    [2, "Aakash", "Hisar", "Btech", "Hello", "a", "a"],
  ];
  return data ? (
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
  ) : (
    <div className="text-center">Loading...</div>
  );
}
