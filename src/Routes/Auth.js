import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import LandingScreen from "../Components/LandingScreen";

export default function Auth({ currentUser }) {
  return currentUser?.length !== 0 && currentUser ? (
    <Navigate to="/business" />
  ) : (
    <LandingScreen>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="./login" />} />
      </Routes>
    </LandingScreen>
  );
}
