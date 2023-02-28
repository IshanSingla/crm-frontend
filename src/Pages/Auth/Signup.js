import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import LandingScreen from "../../Components/LandingScreen";
import { auth } from "../../Config/firebase";

function Signup() {
  // let
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
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
                toast.success("User Signup Successfully");
              });
          });
        })
        .catch((error) => {
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
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setPhone("");
  };
  return (
    <LandingScreen
      component={
        <div className="flex flex-col space-y-8 py-8 w-[50%] md:w-[65%] xl:w-[60%]  ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold"> Sign up </h1>
            <p className="text-[13px]">Get started with us!</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-2 py-1 placeholder:text-[13px] rounded-full"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-2 py-1 placeholder:text-[13px] rounded-full"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-2 py-1 placeholder:text-[13px] rounded-full"
              value={gender}
              placeholder="Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <input
              className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-2 py-1 placeholder:text-[13px] rounded-full"
              value={phone}
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
            />
            <input
              className="border-2 border-zinc-400 bg-transparent outline-none focus:bg-gray-900 px-2 py-1 placeholder:text-[13px] rounded-full"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <button
              // disabled={user.loader}
              onClick={(e) => {
                if (!loader) {
                  handleSubmit(e);
                }
              }}
              className="bg-orange-500 text-white w-full py-2 rounded-full text-[13px]"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center items-center text-[13px]">
            <Link to="/auth/login" className="text-blue-500">
              Already have an account?
            </Link>
          </div>
        </div>
      }
    />
  );
}

export default Signup;
