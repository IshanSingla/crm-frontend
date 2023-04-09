import React from "react";

const src = [
  require("../../../Assets/search_problem.svg").default,
  require("../../../Assets/gear.svg").default,
  require("../../../Assets/inkpen.svg").default,
  require("../../../Assets/arrow_curve_top.svg").default,
  require("../../../Assets/arrow_curve_bottom.svg").default,
];

export default function Cards2() {
  return (
    <div className="flex justify-evenly flex-col 2xl:flex-row gap-20">
      {/* Card 1 */}
      <div className="p-10 w-[22rem] min-h-[22rem] relative rounded-xl border border-fourblue flex flex-col space-y-10">
        <div>
          <img src={src[0]} alt="play_button" className="w-16" />
        </div>

        <div className="flex flex-col space-y-5">
          <div className="font-semibold text-xl">
            <h2> Define the problem </h2>
          </div>

          <div>
            <p className="text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              sapiente et omnis adipisci perferendis placeat exercitationem iste
            </p>
          </div>
        </div>

        <div className="absolute 2xl:block hidden -right-20">
          <img src={src[3]} alt="" className="" />
        </div>
        <div className="absolute w-full 2xl:hidden left-0 bottom-0 flex justify-center items-center">
          <img src={src[3]} alt="" className="rotate-90 top-4 absolute" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-10 w-[22rem] min-h-[22rem] relative rounded-xl border border-fourblue flex flex-col space-y-10">
        <div>
          <img src={src[1]} alt="play_button" className="w-16" />
        </div>

        <div className="flex flex-col space-y-5">
          <div className="font-semibold text-xl">
            <h2> Develop a Solution </h2>
          </div>

          <div>
            <p className="text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              sapiente et omnis adipisci perferendis placeat exercitationem iste
            </p>
          </div>
        </div>

        <div className="absolute 2xl:block hidden top-28 -right-20">
          <img src={src[4]} alt="" className="" />
        </div>
        <div className="absolute w-full 2xl:hidden left-0 bottom-0 flex justify-center items-center">
          <img src={src[4]} alt="" className="rotate-[100deg] top-4 absolute" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-10 w-[22rem] min-h-[22rem] relative rounded-xl border border-fourblue flex flex-col space-y-10">
        <div>
          <img src={src[2]} alt="play_button" className="w-16" />
        </div>

        <div className="flex flex-col space-y-5">
          <div className="font-semibold text-xl">
            <h2> Refine </h2>
          </div>

          <div>
            <p className="text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              sapiente et omnis adipisci perferendis placeat exercitationem iste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
