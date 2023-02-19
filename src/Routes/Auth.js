import { Login } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";

export default function Auth() {
  return (
    <Routes>
      <Route path="./login" element={<Login />} />
      <Route path="./signup" element={<Signup />} />
    </Routes>
  );
}
