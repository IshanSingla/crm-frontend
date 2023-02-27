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
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={name}
              placeholder="Nmae"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={gender}
              placeholder="Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={phone}
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              // disabled={user.loader}
              onClick={(e) => {
                if (!loader) {
                  handleSubmit(e);
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
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
