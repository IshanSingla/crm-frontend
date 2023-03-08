import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import { auth } from "../../Config/firebase";

function Signup() {
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    setLoader(true);
    if (
      name !== "" &&
      email !== "" &&
      gender !== "" &&
      phone !== "" &&
      password !== ""
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          getIdToken(userCreds.user).then((token) => {
            publicApi
              .post(
                "/auth/create",
                {
                  email: email,
                  name: name,
                  userGender: gender,
                  phoneNumber: phone,
                },
                {
                  headers: {
                    authorization: token,
                  },
                }
              )
              .then((response) => {
                setLoader(false);
                toast.success("User Signup Successfully");
              })
              .catch((err) => {
                setLoader(!loader);
                if (err.request.status) {
                  return toast.error(err.response.data.message);
                }
                toast.error(err.message);
              });
          });
        })
        .catch((error) => {
          setLoader(false);
          if (error.code === "auth/user-disabled") {
            toast.error("User has been disabled");
          } else if (error.code === "auth/user-not-found") {
            toast.error("User not found");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Wrong Password");
          } else {
            toast.error(error.message);
          }
        });
    }
  };

  return (
    <div className="w-[21rem] bg-white flex flex-col  shadow rounded-xl space-y-8 pt-12 pb-10 px-5">
      <div>
        <h1 className="text-center font-pop font-black text-4xl">Sign up!</h1>
      </div>
      <div className="flex flex-col space-y-3 text-[15px]">
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            id="name"
            placeholder="Enter your name..."
          />
        </div>

        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Gender"
            id="gender"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Enter your number"
            id="phone"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className=" border border-[#cccccc] bg-[#f8f9fa] outline-none focus:border-black rounded-md px-2 py-2 transition-all ease-linear"
            placeholder="Set your password"
            type="password"
            id="password"
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="w-full">
          <button
            disabled={loader}
            onClick={handleSubmit}
            className={`${loader?"bg-slate-600":"bg-black"} text-white w-full py-2 rounded-md text-[14px]`}
          >
            Continue
          </button>
        </div>
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
