import React from "react";

function LandingScreen({ children }) {
  return (
    <div className="flex h-[100vh] text-white">
      <div className="w-[90%] xl:w-[60%] min-h-[60%] flex container m-auto">
        <div className="w-full md:w-[50%] py-9 rounded-[30px] md:rounded-none md:rounded-l-[30px] flex justify-center items-center bg-black">
          {children}
        </div>
        <div className="relative w-[50%] hidden md:block bg-gray-900 rounded-r-[30px]">
          <img
            className="absolute w-full h-full object-cover rounded-r-[30px]"
            src={require("../Assets/illustration.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
