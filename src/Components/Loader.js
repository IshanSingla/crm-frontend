import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import { auth } from "../Config/firebase";

export default function Loader({ changeUser, changeLoding }) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (user.emailVerified) {
        changeUser(user);
      } else {
        await sendEmailVerification(user);
        await auth.signOut();
        toast.success("Verification link has been sent to your email");
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
