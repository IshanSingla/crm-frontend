import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllBusiness from "../Pages/AllBusiness";
import ListBuissness from "../Pages/ListBuissness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business({ currentUser }) {
  return currentUser ? (
    <Routes>
      <Route path="/" element={<AllBusiness currentUser={currentUser} />} />
      <Route path="/hi" element={<ListBuissness currentUser={currentUser} />} />
      <Route path="/:id/*" element={<SinglaBuissness currentUser={currentUser} />} />
    </Routes>
  ) : (
    <Navigate to="/auth/login" />
  );
}
