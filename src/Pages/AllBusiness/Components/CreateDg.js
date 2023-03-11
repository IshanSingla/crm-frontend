import React from "react";

export default function CreateDg({ handleSubmit, setIsShow, name, setName }) {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 h-screen bg-white">
      <div className="flex w-full h-full">
        {/* Left */}
        <div className="w-full lg:w-[80%] p-5 md:px-20 md:py-32 flex flex-col space-y-16">
          <div className="flex md:flex-row flex-row-reverse justify-between md:justify-start md:space-x-2 items-center">
            <button
              onClick={() => {
                if (window.confirm("Discard changes?")) {
                  setName("");
                  setIsShow(false);
                }
              }}
            >
              <img
                className="w-8 "
                src={require("../../../Assets/cross.svg").default}
                alt=""
              />
            </button>
            <p className="text-[19px] text-zinc-500">Create a business</p>
          </div>

          <div className="md:px-10 flex flex-col space-y-7">
            <div className=" md:w-[60%]">
              <h1 className="text-3xl md:text-5xl text-zinc-700 font-medium">
                Let's start with a new business
              </h1>
            </div>
            <input
              className="w-full outline-none border-b border-zinc-500 text-3xl md:text-4xl font-semibold placeholder:text-2xl md:placeholder:text-4xl placeholder:font-normal py-2"
              placeholder="Enter your business name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="md:px-10">
            <button
              onClick={handleSubmit}
              className="flex w-full md:w-52 h-10 md:h-16 justify-center items-center bg-orange-500 hover:bg-orange-600 transition-all ease-linear  text-white rounded-md"
            >
              Create
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[20%] bg-cyan-500 hidden lg:flex items-center">
          <img
            className="-ml-32"
            src={
              require("../../../Assets/Business Illustrations/welcome.svg")
                .default
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
