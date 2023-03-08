import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Api";
import { auth } from "../Config/firebase";

export default function Loader({ changeUser, changeLoding }) {
  const navigate = useNavigate();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try{
      let api = await Api();
      await api.get("/user/profile")
      changeUser(user);
      }catch(err){
        user.delete();
        navigate("/auth/login");
      }
    }
    changeLoding(true);
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-300 text-4xl font-bold">
      Loading
    </div>
  );
}
