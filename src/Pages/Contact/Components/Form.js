import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocus = () => {};
  return (
    <form onSubmit={handleSubmit} className="text-grey flex flex-col gap-9">
      <div className="flex gap-9">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="fname" className="text-sm">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            onFocus={handleFocus}
            className="bg-transparent outline-none border-b border-grey focus-within:border-white text-white transition-all ease-linear"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="lname" className="text-sm">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="bg-transparent outline-none border-b border-grey focus-within:border-white text-white transition-all ease-linear"
          />
        </div>
      </div>
      <div className="flex gap-9">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent outline-none border-b border-grey focus-within:border-white text-white transition-all ease-linear"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="number" className="text-sm">
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            className="bg-transparent outline-none border-b border-grey focus-within:border-white text-white transition-all ease-linear"
          />
        </div>
      </div>

      {/* Radio buttons */}
      <div className="text-white flex flex-col gap-3">
        <p className="font-semibold"> Select Subject? </p>
        <div className="flex flex-wrap w-full justify-between gap-4">
          <div className="flex items-center gap-2">
            <input type="radio" name="sub1" id="s1" />
            <label htmlFor="s1">General Inquiry</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name="sub1" id="s2" />
            <label htmlFor="s2">General Inquiry</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name="sub1" id="s3" />
            <label htmlFor="s3">General Inquiry</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name="sub1" id="s4" />
            <label htmlFor="s4">General Inquiry</label>
          </div>
        </div>
      </div>

      {/* Messagee */}
      <div className="flex flex-col flex-1 gap-2">
        <label htmlFor="number" className="text-sm">
          Message
        </label>
        <textarea
          name="number"
          id="number"
          placeholder="Write your message..."
          className="bg-transparent outline-none placeholder:text-grey border-b border-grey focus-within:border-white text-white transition-all ease-linear"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="py-3 px-5 rounded-md bg-white text-mainBlue text-[13px] hover:bg-slate-200 transition-all ease-linear">
          Send Message
        </button>
      </div>
      {/* End */}
    </form>
  );
}
