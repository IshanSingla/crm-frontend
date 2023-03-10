import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api";
import { auth } from "../../Config/firebase";

function Signup() {
  const navigate=useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    try {
      let name = document.getElementById("name").value;
      let gender = document.getElementById("gender").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      setLoader(true);
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let publicApi = await Api(userCreds.user);
      publicApi
        .post("/auth/create", {
          email: email,
          name: name,
          userGender: gender,
          phoneNumber: "+91" + phone,
        })
        .then((response) => {
          setLoader(false);
          navigate("./login");
          
        })
        .catch((err) => {
          setLoader(false);
          userCreds.user.delete();
          if (err.request.status) {
            return toast.error(err.response.data.message);
          }
          
          toast.error(err.message);
        });
    } catch (error) {
      setLoader(false);
      if (error.code === "auth/user-disabled") {
        toast.error("User has been disabled");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid Email");
      } else if (error.code === "auth/weak-password") {
        toast.error("Weak Password");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error("Operation not allowed");
      } else if (error.code === "auth/argument-error") {
        toast.error("Argument error");
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="w-[21rem] bg-white flex flex-col  shadow rounded-xl space-y-8 pt-12 pb-10 px-5">
      <div>
        <h1 className="text-center font-pop font-black text-4xl">Sign up!</h1>
      </div>
      <form className="flex flex-col space-y-3 text-[15px]">
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            id="name"
            placeholder="Enter your name..."
            required={true}
          />
        </div>

        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Email"
            id="email"
            required={true}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Gender"
            id="gender"
            required={true}
          />
        </div>
        <div className="flex flex-row space-y-1">
          <input
            type="tel"
            pattern="[0-9]{10}"
            className="w-full border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Enter your number (10 digits)"
            id="phone"
            required={true}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Set your password"
            type="password"
            id="password"
            required={true}
          />
        </div>
        <button
          disabled={loader}
          onClick={handleSubmit}
          className={`${
            loader ? "bg-slate-600" : "bg-black"
          } text-white w-full py-2 rounded-md text-[14px]`}
        >
          Continue
        </button>
      </form>
      <div className="flex flex-col items-center space-y-3">
        <div className="flex justify-center items-center text-[13px] ">
          <p>
            Already have an account?&nbsp;
            <Link to="/auth/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
