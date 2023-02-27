import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../Config/firebase";

export default function Loader({ changeUser, changeLoding }) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await user.reload();
      await changeUser(user);
    }
    changeLoding(true);
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-300 text-4xl font-bold">
      Loading
    </div>
  );
}
