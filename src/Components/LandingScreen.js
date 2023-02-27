import React from "react";

function LandingScreen({ component }) {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[40%] bg-gray-800"></div>
      <div className="w-[60%] bg-white flex justify-center items-center">
        {component}
      </div>
    </div>
  );
}

export default LandingScreen;
