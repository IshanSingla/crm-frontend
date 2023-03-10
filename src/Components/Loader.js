import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import { Api } from "../Api";
import { auth } from "../Config/firebase";

export default function Loader({ changeUser, changeLoding }) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (user.emailVerified) {
        Api()
          .then((api) => {
            api
              .get("/user/profile")
              .then((res) => {
                changeLoding(true);
                changeUser(user);
              })
              .catch((err) => {
                changeLoding(true);
                if (err.response) {
                  auth.currentUser.delete();
                  return toast.error(err.response.data.message);
                }
                toast.error(err.message);
              });
          })
          .catch((err) => {
            changeLoding(true);
            if (err.response) {
              auth.currentUser.delete();
              return toast.error(err.response.data.message);
            }
            toast.error(err.message);
          });
      } else {
        changeLoding(true);
        await sendEmailVerification(user);
        await auth.signOut();
        toast.success("Verification link has been sent to your email");
      }
    } else {
      changeLoding(true);
    }
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-300 text-4xl font-bold">
      Loading
    </div>
  );
}
