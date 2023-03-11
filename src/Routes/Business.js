import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllBusiness from "../Pages/AllBusiness/AllBusiness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business({ currentUser }) {
  return currentUser ? (
    <>
      <Routes>
        <Route path="/" element={<AllBusiness />} />
        <Route path="/:id/*" element={<SinglaBuissness />} />
      </Routes>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}
