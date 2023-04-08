import React from "react";
import lady from "../../../Assets/lady.png";
import {
  Facebook,
  Instagram,
  RightArrow3,
  Twitter2,
} from "../../../Components/Icons";

export default function Testimonials() {
  return (
    <div className="bg-secBlue relative py-20 md:px-[15%] min-h-screen flex gap-10 items-center justify-center rounded-md border border-grey2 overflow-hidden">
      <div className="w-[40%]">
        <div className="w-full px-10">
          <div className="h-[18rem]  relative flex justify-center bg-gradient-to-b from-mainBlue via-secBlue to-mainBlue rounded-xl">
            <img src={lady} alt="lady" className="absolute -bottom-16" />
          </div>
        </div>
      </div>

      <div className="w-[60%] flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">What they say about us</h1>
          <p>
            This team is amazing and consectetur dolores adipiscing elit.
            Suspendisse nec magna eu ante facilisis pulvinar at at orci. Donec
            mattis rutrum dapibus.
          </p>
        </div>

        <div className="flex gap-4">
          <div>Anna Smith</div>
          <div className="text-grey pl-2"> |</div>
          <div className="text-grey">CO-Founder</div>
        </div>

        <div className="flex justify-between">
          {/* Left */}
          <div className="flex gap-3">
            <div className="bg-[#808BFF] w-[max-content] p-3 rounded-md">
              <Twitter2 className="w-5 h-5" fill="white" />
            </div>
            <div className="bg-[#1355FF] w-[max-content] p-3 rounded-md">
              <Facebook className="w-5 h-5 fill-white" fill="white" />
            </div>
            <div className="bg-[#FF5E00] w-[max-content] p-3 rounded-md">
              <Instagram className="w-6 h-6" />
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-4">
            <div className="bg-white w-[max-content] p-3 rounded-md">
              <RightArrow3 className="w-5 h-5 fill-black rotate-180" />
            </div>
            <div className="bg-[#25CD89] w-[max-content] p-3 rounded-md">
              <RightArrow3 className="w-5 h-5 fill-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Circles */}
      <div className="absolute w-[151px] h-[151px] left-0 top-0 bg-[#FF5E00] blur-[156px]"></div>
      <div className="absolute w-[140px] h-[132px] right-10 bottom-10 bg-[#FEA900] blur-[156px]"></div>
    </div>
  );
}
