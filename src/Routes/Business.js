import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
import AllBusiness from "../Pages/AllBusiness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business({ currentUser }) {
  return currentUser ? (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<AllBusiness />} />
        <Route path="/:id/*" element={<SinglaBuissness />} />
      </Routes>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}
