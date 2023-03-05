import React from "react";
import { Navigate } from "react-router-dom";

export default function Home({ currentUser }) {
  return currentUser?.length !== 0 && currentUser ? (
    <Navigate to="/business" />
  ) : (
    <Navigate to="/auth/login" />
  );
}
