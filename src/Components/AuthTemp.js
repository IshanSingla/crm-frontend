import React from "react";
import Lottie from "lottie-react";
import userHello from "../Assets/Lotties/userHello.json";

export default function AuthTemp({ children }) {
  return (
    <div className="w-full h-screen bg-orange-400 flex justify-center items-center font-pop">
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-8 bg-white shadow-xl  rounded-full w-16 flex items-center justify-center">
          <Lottie animationData={userHello} loop={true} />
        </div>
        {children}
      </div>
    </div>
  );
}
