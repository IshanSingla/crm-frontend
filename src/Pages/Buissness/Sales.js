import React from "react";

export default function Sales() {
  return (
    <div className="border border-white w-full h-full">
      <div className="h-full grid grid-cols-4 grid-rows-[repeat(3,minmax(28.4%,_1fr))] overflow-auto grid-flow-row gap-4">
        <Box name={1} className="col-span-3" />
        <Box name={2} />
        <Box name={3} />
        <Box name={4} className="col-span-2" />
        <Box name={5} className="col-span-2" />
        <Box name={6} />
        <Box name={7} className="col-span-" />
      </div>
    </div>
  );
}

export function Box({ className = "", name }) {
  return (
    <div
      className={`flex py-3 px-2 justify-center items-center rounded-xl bg-pink-500 text-white ${className}`}
    >
      Box {name}
    </div>
  );
}
