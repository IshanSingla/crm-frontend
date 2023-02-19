import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";

export default function Auth() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
