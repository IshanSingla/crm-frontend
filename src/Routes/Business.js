import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllBusiness from "../Pages/AllBusiness/AllBusiness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business({currentUser}) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    currentUser && (
      <Routes>
        <Route path="/" element={<AllBusiness currentUser={currentUser}/>} />
        <Route path="/:id/*" element={<SinglaBuissness currentUser={currentUser}/>} />
      </Routes>
    )
  );
}
