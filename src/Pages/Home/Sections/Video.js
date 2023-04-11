import React from "react";

export default function Video() {
  return (
    <section className="bg-black bg-opacity-30 h-[70vh] flex flex-col space-y-4 justify-center items-center border border-grey2 px-16">
      <h1 className="text-xl font-bold text-center">
        {" "}
        We are a leading Service Based Company.{" "}
      </h1>
      <button className="bg-white rounded-full p-5">
        <img
          src={require("../../../Assets/play.svg").default}
          alt="play_button"
          className="pl-[1px]"
        />
      </button>
    </section>
  );
}
