import React from "react";

export default function Cards({ icon, h2, para }) {
  return (
    <div className="p-10 w-[22rem] min-h-[22rem] rounded-xl border border-fourblue flex flex-col space-y-3">
      <div>
        <img src={icon} alt="play_button" className="w-16" />
      </div>

      <div className="font-semibold text-xl">{h2}</div>

      <div>
        <p className="text-[14px]">{para}</p>
      </div>
    </div>
  );
}
