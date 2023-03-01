import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    name1: "",
    name2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="md:w-52 min-h-screen hidden md:flex flex-col items-center bg-black px-2 py-3 text-white">
        Sidebar
      </div>

      {/* Hamburger */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute top-2 right-2 bg-black p-2 text-white rounded-full"
      >
        open
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden z-10 absolute h-screen w-40 bg-black bg- px-2 py-3 text-white"
        >
          <div className="flex flex-col items-center">Sidebar</div>
        </div>
      )}

      {/* Main */}
      <div className="w-full px-6 py-10 flex flex-col items-center">
        <h1 className="text-center font-semibold capitalize"> Admin Portal </h1>

        {/* Input fields */}
        <div className="shadow-xl px-3 py-5 rounded-md mt-20">
          <form action="" className="flex flex-col space-y-2">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              name="name1"
              value={input.name1}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              name="name2"
              value={input.name2}
              onChange={handleChange}
            />
            <button className="bg-orange-500 rounded-[3px] p-2">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
