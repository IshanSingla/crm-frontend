import React from "react";
// import { Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";

export default function HomeRoute({ currentUser }) {
  // return currentUser?.length !== 0 && currentUser ? (
  //   <Navigate to="/business" />
  // ) : (
  //   <Navigate to="/auth/login" />
  // );

  return <Home />;
}
