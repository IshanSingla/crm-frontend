import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function AdminHome() {
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
        <button className="bg-orange-500 rounded-[3px] p-2">Continue</button>
      </form>
    </div>
  );
}
