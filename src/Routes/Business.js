import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllBusiness from "../Pages/AllBusiness/AllBusiness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business({ currentUser }) {
  return currentUser ? (
    <>
      <Routes>
        <Route path="/" element={<AllBusiness currentUser={currentUser} />} />
        <Route path="/:id/*" element={<SinglaBuissness />} />
        <Route path="*" element={<Navigate to="./" />} />
      </Routes>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}
